const LEGACY_PENDING_SESSION_KEY = 'pending_stripe_session_id';
const PENDING_SESSIONS_KEY = 'pending_stripe_session_ids';

function normalizeSessionIds(values: unknown[]): string[] {
  return Array.from(new Set(values.filter((value): value is string => typeof value === 'string' && value.length > 0)));
}

export function readPendingStripeSessionIds(): string[] {
  const values: unknown[] = [];
  const legacySessionId = sessionStorage.getItem(LEGACY_PENDING_SESSION_KEY);
  if (legacySessionId) values.push(legacySessionId);

  const serialized = sessionStorage.getItem(PENDING_SESSIONS_KEY);
  if (serialized) {
    try {
      const parsed = JSON.parse(serialized);
      if (Array.isArray(parsed)) values.push(...parsed);
    } catch {
      // Invalid local state must not prevent checkout or recovery.
    }
  }
  return normalizeSessionIds(values);
}

export function replacePendingStripeSessionIds(sessionIds: string[]): void {
  const normalized = normalizeSessionIds(sessionIds);
  sessionStorage.removeItem(LEGACY_PENDING_SESSION_KEY);
  if (normalized.length === 0) {
    sessionStorage.removeItem(PENDING_SESSIONS_KEY);
    return;
  }
  sessionStorage.setItem(PENDING_SESSIONS_KEY, JSON.stringify(normalized));
}

export function addPendingStripeSessionId(sessionId: string): void {
  replacePendingStripeSessionIds([...readPendingStripeSessionIds(), sessionId]);
}

export function removePendingStripeSessionId(sessionId: string): void {
  replacePendingStripeSessionIds(readPendingStripeSessionIds().filter((pending) => pending !== sessionId));
}
