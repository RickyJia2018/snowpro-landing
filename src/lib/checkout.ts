/** Only accept Stripe's hosted checkout origin, without embedded credentials. */
export function stripeCheckoutUrl(value: unknown): string | null {
  if (typeof value !== 'string') return null;
  try {
    const url = new URL(value);
    return url.origin === 'https://checkout.stripe.com' && !url.username && !url.password
      ? url.href : null;
  } catch { return null; }
}

/** Bound network waits; callers render localized errors, never server diagnostics. */
export async function checkoutFetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);
  try {
    return await fetch(input, { ...init, signal: controller.signal });
  } finally {
    clearTimeout(timeout);
  }
}
