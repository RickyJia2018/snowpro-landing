const LEGACY_SESSION_STORAGE_KEY = 'pending_stripe_session_id';
const LEGACY_SESSION_STORAGE_IDS_KEY = 'pending_stripe_session_ids';
const BASE_STORAGE_KEY = 'pending_stripe_sessions';

export interface PendingSessionEntry {
  sessionId: string;
  createdAt: number;
}

function getStorageKey(userId?: string | number): string {
  if (userId !== undefined && userId !== null && String(userId).trim().length > 0) {
    return `${BASE_STORAGE_KEY}_${String(userId).trim()}`;
  }
  return `${BASE_STORAGE_KEY}_anonymous`;
}

function safeGetItem(storage: Storage, key: string): string | null {
  try { return storage.getItem(key); } catch { return null; }
}

function safeSetItem(storage: Storage, key: string, value: string): void {
  try { storage.setItem(key, value); } catch { /* Retain existing evidence. */ }
}

function safeRemoveItem(storage: Storage, key: string): void {
  try { storage.removeItem(key); } catch { /* Retry cleanup on a later read. */ }
}

function entryId(value: unknown): string | null {
  const id = typeof value === 'string' ? value
    : value && typeof value === 'object' && 'sessionId' in value ? value.sessionId : null;
  return typeof id === 'string' && id.trim() ? id.trim() : null;
}

function readEntries(storage: Storage, key: string): PendingSessionEntry[] {
  try {
    const raw: unknown = JSON.parse(safeGetItem(storage, key) ?? '[]');
    if (!Array.isArray(raw)) return [];
    const now = Date.now();
    return raw.flatMap(value => {
      const sessionId = entryId(value);
      if (!sessionId) return [];
      const stamp = value && typeof value === 'object' ? Number(value.createdAt) : NaN;
      return [{ sessionId, createdAt: Number.isFinite(stamp) && stamp > 0 ? stamp : now }];
    });
  } catch { return []; }
}

function preserveLegacyInbox(): void {
  if (typeof sessionStorage === 'undefined' || typeof localStorage === 'undefined') return;
  const single = safeGetItem(sessionStorage, LEGACY_SESSION_STORAGE_KEY);
  const array = safeGetItem(sessionStorage, LEGACY_SESSION_STORAGE_IDS_KEY);
  const legacy = readEntries(sessionStorage, LEGACY_SESSION_STORAGE_IDS_KEY);
  if (single?.trim()) legacy.unshift({ sessionId: single.trim(), createdAt: Date.now() });
  if (!legacy.length) return;
  const key = getStorageKey();
  const shared = new Map(readEntries(localStorage, key).map(entry => [entry.sessionId, entry]));
  for (const entry of legacy) if (!shared.has(entry.sessionId)) shared.set(entry.sessionId, entry);
  const saved = JSON.stringify([...shared.values()]);
  safeSetItem(localStorage, key, saved);
  // Never delete the tab's only copy when writes are blocked or out of quota.
  if (safeGetItem(localStorage, key) !== saved) return;
  if (single !== null && safeGetItem(sessionStorage, LEGACY_SESSION_STORAGE_KEY) === single) {
    safeRemoveItem(sessionStorage, LEGACY_SESSION_STORAGE_KEY);
  }
  // Keep malformed/unknown legacy data rather than declaring it migrated.
  try {
    const parsed: unknown = JSON.parse(array ?? 'null');
    if (Array.isArray(parsed) && parsed.every(entry => entryId(entry) !== null) &&
        safeGetItem(sessionStorage, LEGACY_SESSION_STORAGE_IDS_KEY) === array) {
      safeRemoveItem(sessionStorage, LEGACY_SESSION_STORAGE_IDS_KEY);
    }
  } catch { /* Preserve unknown legacy evidence. */ }
}

/** A checkout's age does not establish payment or fulfillment. Reads never
 * prune evidence or assign unknown receipts to whoever happens to sign in.
 * The authenticated verification endpoint determines the actual owner.
 */
export function readPendingStripeSessionEntries(userId?: string | number): PendingSessionEntry[] {
  preserveLegacyInbox();
  const entries = new Map<string, PendingSessionEntry>();
  const include = (values: PendingSessionEntry[]) => {
    for (const entry of values) if (!entries.has(entry.sessionId)) entries.set(entry.sessionId, entry);
  };
  if (typeof localStorage !== 'undefined') {
    include(readEntries(localStorage, getStorageKey(userId)));
    if (getStorageKey(userId) !== getStorageKey()) include(readEntries(localStorage, getStorageKey()));
  }
  // If migration could not persist the shared inbox, the original tab's copy
  // can still be retried. It never belongs to the first logged-in visitor.
  if (typeof sessionStorage !== 'undefined') {
    const legacy = safeGetItem(sessionStorage, LEGACY_SESSION_STORAGE_KEY)?.trim();
    if (legacy) include([{ sessionId: legacy, createdAt: Date.now() }]);
    include(readEntries(sessionStorage, LEGACY_SESSION_STORAGE_IDS_KEY));
  }
  return Array.from(entries.values());
}

export function readPendingStripeSessionIds(userId?: string | number): string[] {
  return readPendingStripeSessionEntries(userId).map(entry => entry.sessionId);
}

export function addPendingStripeSessionId(sessionId: string, userId?: string | number): void {
  if (typeof sessionId !== 'string' || !sessionId.trim() || typeof localStorage === 'undefined') return;
  const key = getStorageKey(userId);
  // Only write this queue. Shared and legacy entries remain unassigned.
  const entries = readEntries(localStorage, key);
  if (!entries.some(entry => entry.sessionId === sessionId.trim())) {
    entries.push({ sessionId: sessionId.trim(), createdAt: Date.now() });
  }
  safeSetItem(localStorage, key, JSON.stringify(entries));
}

function removeConfirmedEntry(storage: Storage, key: string, sessionId: string): void {
  try {
    const raw = safeGetItem(storage, key);
    if (!raw) return;
    const entries: unknown = JSON.parse(raw);
    if (!Array.isArray(entries)) return;
    const remaining = entries.filter(entry => entryId(entry) !== sessionId);
    if (remaining.length === entries.length) return;
    // Preserve every unrelated entry, including old or unrecognized records.
    if (remaining.length) safeSetItem(storage, key, JSON.stringify(remaining));
    else safeRemoveItem(storage, key);
  } catch { /* Preserve unrecognized recovery evidence. */ }
}

function removeConfirmedLegacy(sessionId: string): void {
  if (typeof sessionStorage === 'undefined') return;
  if (safeGetItem(sessionStorage, LEGACY_SESSION_STORAGE_KEY)?.trim() === sessionId) {
    safeRemoveItem(sessionStorage, LEGACY_SESSION_STORAGE_KEY);
  }
  removeConfirmedEntry(sessionStorage, LEGACY_SESSION_STORAGE_IDS_KEY, sessionId);
}

/** Called only after the server confirms fulfillment of this exact checkout. */
export function removePendingStripeSessionId(sessionId: string, userId?: string | number): void {
  if (typeof sessionId !== 'string' || !sessionId.trim()) return;
  const id = sessionId.trim();
  if (typeof localStorage !== 'undefined') {
    try {
      const keys = new Set<string>();
      if (userId !== undefined) keys.add(getStorageKey(userId));
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key?.startsWith(`${BASE_STORAGE_KEY}_`)) keys.add(key);
      }
      for (const key of keys) removeConfirmedEntry(localStorage, key, id);
    } catch { /* Retain evidence if storage cannot be enumerated. */ }
  }
  removeConfirmedLegacy(id);
}

export function replacePendingStripeSessionIds(sessionIds: string[], userId?: string | number): void {
  if (typeof localStorage === 'undefined') return;
  const key = getStorageKey(userId);
  const previous = new Map(readEntries(localStorage, key).map(entry => [entry.sessionId, entry.createdAt]));
  const ids = [...new Set(sessionIds.filter(id => typeof id === 'string' && id.trim()).map(id => id.trim()))];
  const entries = ids.map(sessionId => ({ sessionId, createdAt: previous.get(sessionId) ?? Date.now() }));
  if (entries.length) safeSetItem(localStorage, key, JSON.stringify(entries));
  else safeRemoveItem(localStorage, key);
}

/** Remove a server-confirmed result from the owner's current queue and the
 * unassigned inbox, without replacing snapshots taken before verification.
 */
export function removePendingStripeSessionForUser(sessionId: string, userId: string): void {
  if (!sessionId.trim() || !userId.trim()) return;
  const id = sessionId.trim();
  if (typeof localStorage !== 'undefined') {
    removeConfirmedEntry(localStorage, getStorageKey(userId), id);
    removeConfirmedEntry(localStorage, getStorageKey(), id);
  }
  removeConfirmedLegacy(id);
}
