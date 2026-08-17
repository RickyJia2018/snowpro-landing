import { describe, it, expect } from 'vitest';
import { parseTokenAmount } from './tokenConversion';

describe('Token Amount Conversion Utility Tests', () => {
  it('converts 100 cents to 1.0 token', () => {
    expect(parseTokenAmount({ purchasedTokenAmountInCents: 100 })).toBe(1);
    expect(parseTokenAmount({ purchased_token_amount_in_cents: 100 })).toBe(1);
  });

  it('converts 50 cents to 0.5 token', () => {
    expect(parseTokenAmount({ purchasedTokenAmountInCents: 50 })).toBe(0.5);
    expect(parseTokenAmount({ purchased_token_amount_in_cents: 50 })).toBe(0.5);
  });

  it('converts 10000 cents to 100.0 tokens', () => {
    expect(parseTokenAmount({ purchasedTokenAmountInCents: 10000 })).toBe(100);
    expect(parseTokenAmount({ purchased_token_amount_in_cents: 10000 })).toBe(100);
  });

  it('handles camelCase and snake_case property names equivalently', () => {
    const camel = { purchasedTokenAmountInCents: 500 };
    const snake = { purchased_token_amount_in_cents: 500 };
    const genericCamel = { tokenAmountInCents: 500 };
    const genericSnake = { token_amount_in_cents: 500 };

    expect(parseTokenAmount(camel)).toBe(5);
    expect(parseTokenAmount(snake)).toBe(5);
    expect(parseTokenAmount(genericCamel)).toBe(5);
    expect(parseTokenAmount(genericSnake)).toBe(5);
  });

  it('ignores ambiguous legacy fields that do not declare cents', () => {
    expect(parseTokenAmount({ tokenAmount: 5 })).toBe(0);
    expect(parseTokenAmount({ token_amount: 5 })).toBe(0);
    expect(parseTokenAmount({ purchasedTokenAmount: 5 })).toBe(0);
  });

  it('handles invalid, zero, or null inputs gracefully without crashing', () => {
    expect(parseTokenAmount(null)).toBe(0);
    expect(parseTokenAmount(undefined)).toBe(0);
    expect(parseTokenAmount({})).toBe(0);
    expect(parseTokenAmount({ purchasedTokenAmountInCents: 0 })).toBe(0);
    expect(parseTokenAmount({ purchasedTokenAmountInCents: -50 })).toBe(0);
    expect(parseTokenAmount({ purchasedTokenAmountInCents: 'invalid' })).toBe(0);
  });
});
