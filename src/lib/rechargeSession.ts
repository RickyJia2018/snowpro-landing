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
