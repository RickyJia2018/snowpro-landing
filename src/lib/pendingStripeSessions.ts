const LEGACY_SESSION_STORAGE_KEY = 'pending_stripe_session_id';
const LEGACY_SESSION_STORAGE_IDS_KEY = 'pending_stripe_session_ids';
const BASE_STORAGE_KEY = 'pending_stripe_sessions';
export const DEFAULT_PENDING_SESSION_TTL_MS = 24 * 60 * 60 * 1000; // 24 Hours

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
  try {
    return storage.getItem(key);
  } catch {
    return null;
  }
}

function safeSetItem(storage: Storage, key: string, value: string): void {
  try {
    storage.setItem(key, value);
  } catch {
    // Ignore storage quota or access errors
  }
}

function safeRemoveItem(storage: Storage, key: string): void {
  try {
    storage.removeItem(key);
  } catch {
    // Ignore
  }
}

function parseRawEntries(raw: unknown, now: number, ttlMs: number): PendingSessionEntry[] {
  if (!raw) return [];
  const entries: PendingSessionEntry[] = [];

  if (Array.isArray(raw)) {
    for (const item of raw) {
      if (typeof item === 'string' && item.trim().length > 0) {
        entries.push({ sessionId: item.trim(), createdAt: now });
      } else if (item && typeof item === 'object' && 'sessionId' in item) {
        const sid = String((item as any).sessionId || '').trim();
        const createdAt = Number((item as any).createdAt) || now;
        if (sid.length > 0 && now - createdAt < ttlMs) {
          entries.push({ sessionId: sid, createdAt });
        }
      }
    }
  }
  return entries;
}

export function readPendingStripeSessionEntries(
  userId?: string | number,
  ttlMs: number = DEFAULT_PENDING_SESSION_TTL_MS
): PendingSessionEntry[] {
  const now = Date.now();
  const key = getStorageKey(userId);
  const entriesMap = new Map<string, PendingSessionEntry>();

  // 1. Read from localStorage (new format)
  if (typeof localStorage !== 'undefined') {
    const raw = safeGetItem(localStorage, key);
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        for (const entry of parseRawEntries(parsed, now, ttlMs)) {
          entriesMap.set(entry.sessionId, entry);
        }
      } catch {
        // Invalid JSON ignored
      }
    }

    // If a specific userId is provided, also check and adopt anonymous sessions
    if (userId !== undefined && userId !== null && String(userId).trim().length > 0) {
      const anonKey = getStorageKey();
      const rawAnon = safeGetItem(localStorage, anonKey);
      if (rawAnon) {
        try {
          const parsed = JSON.parse(rawAnon);
          for (const entry of parseRawEntries(parsed, now, ttlMs)) {
            entriesMap.set(entry.sessionId, entry);
          }
        } catch {
          // Ignore
        }
        safeRemoveItem(localStorage, anonKey);
      }
    }
  }

  // 2. Backward compatibility & Migration: check legacy sessionStorage
  if (typeof sessionStorage !== 'undefined') {
    const legacySingle = safeGetItem(sessionStorage, LEGACY_SESSION_STORAGE_KEY);
    if (legacySingle && legacySingle.trim().length > 0) {
      entriesMap.set(legacySingle.trim(), { sessionId: legacySingle.trim(), createdAt: now });
      safeRemoveItem(sessionStorage, LEGACY_SESSION_STORAGE_KEY);
    }
    const legacyArray = safeGetItem(sessionStorage, LEGACY_SESSION_STORAGE_IDS_KEY);
    if (legacyArray) {
      try {
        const parsed = JSON.parse(legacyArray);
        for (const entry of parseRawEntries(parsed, now, ttlMs)) {
          entriesMap.set(entry.sessionId, entry);
        }
      } catch {
        // Ignore
      }
      safeRemoveItem(sessionStorage, LEGACY_SESSION_STORAGE_IDS_KEY);
    }
  }

  const validEntries = Array.from(entriesMap.values()).filter((e) => now - e.createdAt < ttlMs);

  // Sync back cleaned valid entries to localStorage
  if (typeof localStorage !== 'undefined') {
    if (validEntries.length === 0) {
      safeRemoveItem(localStorage, key);
    } else {
      safeSetItem(localStorage, key, JSON.stringify(validEntries));
    }
  }

  return validEntries;
}

export function readPendingStripeSessionIds(
  userId?: string | number,
  ttlMs: number = DEFAULT_PENDING_SESSION_TTL_MS
): string[] {
  return readPendingStripeSessionEntries(userId, ttlMs).map((e) => e.sessionId);
}

export function addPendingStripeSessionId(sessionId: string, userId?: string | number): void {
  if (!sessionId || typeof sessionId !== 'string' || sessionId.trim().length === 0) return;
  const normalizedSid = sessionId.trim();
  const existingEntries = readPendingStripeSessionEntries(userId);
  const now = Date.now();

  const existingIndex = existingEntries.findIndex((e) => e.sessionId === normalizedSid);
  if (existingIndex >= 0) {
    existingEntries[existingIndex].createdAt = now;
  } else {
    existingEntries.push({ sessionId: normalizedSid, createdAt: now });
  }

  const key = getStorageKey(userId);
  if (typeof localStorage !== 'undefined') {
    safeSetItem(localStorage, key, JSON.stringify(existingEntries));
  }
}

export function removePendingStripeSessionId(sessionId: string, userId?: string | number): void {
  if (!sessionId || typeof sessionId !== 'string') return;
  const normalizedSid = sessionId.trim();
  if (normalizedSid.length === 0) return;

  if (typeof localStorage !== 'undefined') {
    try {
      // 1. Clean from specific user key if provided
      if (userId !== undefined && userId !== null && String(userId).trim().length > 0) {
        const userKey = getStorageKey(userId);
        const userEntries = readPendingStripeSessionEntries(userId);
        const remaining = userEntries.filter((e) => e.sessionId !== normalizedSid);
        if (remaining.length === 0) {
          safeRemoveItem(localStorage, userKey);
        } else {
          safeSetItem(localStorage, userKey, JSON.stringify(remaining));
        }
      }

      // 2. Global purge: Iterate over all pending_stripe_sessions keys in localStorage
      // to ensure no scope (anonymous, different user ids) retains this fulfilled session.
      const keysToInspect: string[] = [];
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (k && k.startsWith(BASE_STORAGE_KEY)) {
          keysToInspect.push(k);
        }
      }

      for (const k of keysToInspect) {
        const raw = safeGetItem(localStorage, k);
        if (raw) {
          try {
            const parsed = JSON.parse(raw);
            const remaining = parseRawEntries(parsed, Date.now(), DEFAULT_PENDING_SESSION_TTL_MS)
              .filter((e) => e.sessionId !== normalizedSid);
            if (remaining.length === 0) {
              safeRemoveItem(localStorage, k);
            } else {
              safeSetItem(localStorage, k, JSON.stringify(remaining));
            }
          } catch {
            // Ignore
          }
        }
      }
    } catch {
      // Ignore
    }
  }

  // 3. Backward compatibility: also ensure legacy sessionStorage is purged
  if (typeof sessionStorage !== 'undefined') {
    const legacySingle = safeGetItem(sessionStorage, LEGACY_SESSION_STORAGE_KEY);
    if (legacySingle && legacySingle.trim() === normalizedSid) {
      safeRemoveItem(sessionStorage, LEGACY_SESSION_STORAGE_KEY);
    }
    const legacyArray = safeGetItem(sessionStorage, LEGACY_SESSION_STORAGE_IDS_KEY);
    if (legacyArray) {
      try {
        const parsed = JSON.parse(legacyArray);
        if (Array.isArray(parsed)) {
          const remaining = parsed.filter((id) => String(id).trim() !== normalizedSid);
          if (remaining.length === 0) {
            safeRemoveItem(sessionStorage, LEGACY_SESSION_STORAGE_IDS_KEY);
          } else {
            safeSetItem(sessionStorage, LEGACY_SESSION_STORAGE_IDS_KEY, JSON.stringify(remaining));
          }
        }
      } catch {
        // Ignore
      }
    }
  }
}

export function replacePendingStripeSessionIds(
  sessionIds: string[],
  userId?: string | number
): void {
  const normalized = Array.from(
    new Set(
      sessionIds
        .filter((s): s is string => typeof s === 'string' && s.trim().length > 0)
        .map((s) => s.trim())
    )
  );
  const existingEntries = readPendingStripeSessionEntries(userId);
  const existingMap = new Map(existingEntries.map((e) => [e.sessionId, e.createdAt]));
  const now = Date.now();

  const newEntries: PendingSessionEntry[] = normalized.map((sid) => ({
    sessionId: sid,
    createdAt: existingMap.get(sid) || now,
  }));

  const key = getStorageKey(userId);
  if (typeof localStorage !== 'undefined') {
    if (newEntries.length === 0) {
      safeRemoveItem(localStorage, key);
    } else {
      safeSetItem(localStorage, key, JSON.stringify(newEntries));
    }
  }
}

/** Remove only an observed result from this owner's current queue.
 * Never replace a queue captured before an asynchronous provider verification.
 */
export function removePendingStripeSessionForUser(sessionId: string, userId: string): void {
  if (!sessionId.trim() || !userId.trim() || typeof localStorage === 'undefined') return;
  const key = getStorageKey(userId);
  const raw = safeGetItem(localStorage, key);
  if (!raw) return;
  try {
    const entries = JSON.parse(raw);
    if (!Array.isArray(entries)) return;
    const remaining = entries.filter(entry => {
      const id = typeof entry === 'string' ? entry : entry?.sessionId;
      return typeof id !== 'string' || id.trim() !== sessionId.trim();
    });
    if (remaining.length) safeSetItem(localStorage, key, JSON.stringify(remaining));
    else safeRemoveItem(localStorage, key);
  } catch { /* Preserve unrecognized recovery evidence. */ }
}
