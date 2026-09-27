export type PurchaseScope = 'recharge' | 'carpool_pass';
const accessTokenKey = (scope: PurchaseScope) => `${scope}_access_token`;
const accessTokenExpiresAtKey = (scope: PurchaseScope) => `${scope}_access_token_expires_at`;

function expiryToMillis(value: unknown): number | null {
  if (typeof value === 'string') {
    const millis = Date.parse(value);
    return Number.isFinite(millis) ? millis : null;
  }

  if (value && typeof value === 'object' && 'seconds' in value) {
    const seconds = Number((value as { seconds: unknown }).seconds);
    return Number.isFinite(seconds) ? seconds * 1000 : null;
  }

  return null;
}

export function storeRechargeAccessToken(token: string, expiresAt: unknown, scope: PurchaseScope = 'recharge'): boolean {
  const expiryMillis = expiryToMillis(expiresAt);
  if (typeof token !== 'string' || !token.trim() || expiryMillis === null || expiryMillis <= Date.now()) {
    clearRechargeAccessToken(scope);
    return false;
  }

  sessionStorage.setItem(accessTokenKey(scope), token);
  sessionStorage.setItem(accessTokenExpiresAtKey(scope), expiryMillis.toString());
  return true;
}

export function getValidRechargeAccessToken(scope: PurchaseScope = 'recharge'): string | null {
  const token = sessionStorage.getItem(accessTokenKey(scope));
  const expiryMillis = Number(sessionStorage.getItem(accessTokenExpiresAtKey(scope)));
  if (!token || !Number.isFinite(expiryMillis) || expiryMillis <= Date.now()) {
    clearRechargeAccessToken(scope);
    return null;
  }
  return token;
}

export function clearRechargeAccessToken(scope: PurchaseScope = 'recharge'): void {
  sessionStorage.removeItem(accessTokenKey(scope));
  sessionStorage.removeItem(accessTokenExpiresAtKey(scope));
}

/** Gateway uses proto field names (User.ID); older clients may return id. */
export function rechargeUserId(user: unknown): string | null {
  if (!user || typeof user !== 'object') return null;
  const fields = user as Record<string, unknown>;
  const values = [fields.ID, fields.id].filter(value => value !== undefined);
  if (!values.length) return null;
  const ids = values.map(value => {
    if (typeof value === 'number' && !Number.isSafeInteger(value)) return null;
    if (typeof value !== 'string' && typeof value !== 'number') return null;
    const id = String(value);
    return /^[1-9]\d*$/.test(id) && BigInt(id) <= 9223372036854775807n ? id : null;
  });
  return ids.every(id => id !== null && id === ids[0]) ? ids[0] : null;
}
