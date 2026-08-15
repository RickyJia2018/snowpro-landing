const accessTokenKey = 'recharge_access_token';
const accessTokenExpiresAtKey = 'recharge_access_token_expires_at';

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

export function storeRechargeAccessToken(token: string, expiresAt: unknown): boolean {
  const expiryMillis = expiryToMillis(expiresAt);
  if (expiryMillis === null || expiryMillis <= Date.now()) {
    clearRechargeAccessToken();
    return false;
  }

  sessionStorage.setItem(accessTokenKey, token);
  sessionStorage.setItem(accessTokenExpiresAtKey, expiryMillis.toString());
  return true;
}

export function getValidRechargeAccessToken(): string | null {
  const token = sessionStorage.getItem(accessTokenKey);
  const expiryMillis = Number(sessionStorage.getItem(accessTokenExpiresAtKey));
  if (!token || !Number.isFinite(expiryMillis) || expiryMillis <= Date.now()) {
    clearRechargeAccessToken();
    return null;
  }
  return token;
}

export function clearRechargeAccessToken(): void {
  sessionStorage.removeItem(accessTokenKey);
  sessionStorage.removeItem(accessTokenExpiresAtKey);
}
