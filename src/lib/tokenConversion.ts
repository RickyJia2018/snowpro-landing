/**
 * Utility functions for token unit and financial amount conversion.
 * 100 DB cents/points = 1.00 Token on the frontend display.
 * 50 DB cents/points  = 0.50 Token on the frontend display.
 */
export function parseTokenAmount(data: any): number {
  if (!data || typeof data !== 'object') return 0;

  const rawCents =
    data.purchasedTokenAmountInCents !== undefined
      ? data.purchasedTokenAmountInCents
      : data.purchased_token_amount_in_cents !== undefined
      ? data.purchased_token_amount_in_cents
      : data.tokenAmountInCents !== undefined
      ? data.tokenAmountInCents
      : data.token_amount_in_cents !== undefined
      ? data.token_amount_in_cents
      : 0;

  const numCents = Number(rawCents);
  if (isNaN(numCents) || numCents <= 0) return 0;
  return numCents / 100;
}
