import React from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { LanguageProvider } from '../../contexts/LanguageContext';
import StorePage from './StorePage';
import { getValidRechargeAccessToken } from '../lib/rechargeSession';

beforeEach(() => {
  sessionStorage.clear();
  localStorage.clear();
  vi.restoreAllMocks();
});

afterEach(() => {
  cleanup();
});

function renderStore(initialEntry = '/store') {
  return render(
    <LanguageProvider>
      <MemoryRouter initialEntries={[initialEntry]}>
        <StorePage />
      </MemoryRouter>
    </LanguageProvider>,
  );
}

describe('StorePage unified Snow Coins & Carpool Pass experience', () => {
  it('signs in once and keeps both Snow Coins and Carpool Pass tabs authenticated', async () => {
    const expiresAt = new Date(Date.now() + 60_000).toISOString();
    const fetchMock = vi.spyOn(globalThis, 'fetch').mockImplementation(async (input, init) => {
      const url = String(input);
      if (url.includes('/login_user')) {
        return new Response(JSON.stringify({ access_token: 'full-secret-token' }));
      }
      if (url.includes('/v1/auth/web_handoff_code')) {
        const body = JSON.parse(String(init?.body || '{}'));
        return new Response(
          JSON.stringify({
            handoff_code: body.scope === 'carpool_pass' ? 'code-pass' : 'code-recharge',
          }),
        );
      }
      if (url.includes('/v1/auth/exchange_handoff_code')) {
        const body = JSON.parse(String(init?.body || '{}'));
        if (body.handoff_code === 'code-pass') {
          return new Response(
            JSON.stringify({
              access_token: 'pass-scoped-token',
              access_token_expires_at: expiresAt,
            }),
          );
        }
        return new Response(
          JSON.stringify({
            access_token: 'recharge-scoped-token',
            access_token_expires_at: expiresAt,
            user: { ID: '42', email: 'skier@example.com', nickname: 'Skier', balance: 500 },
          }),
        );
      }
      if (url.includes('/token_purchase_status')) {
        return new Response(JSON.stringify({ enabled: true }));
      }
      if (url.includes('/token/products')) {
        return new Response(
          JSON.stringify({
            products: [
              {
                productId: 'pack_10',
                tokenAmountInCents: '1000',
                priceInCents: 1299,
                title: '10 Snow Coins',
              },
            ],
          }),
        );
      }
      if (url.includes('/policies/latest')) {
        return new Response(JSON.stringify({ version: 'v1', content: 'Policy text' }));
      }
      if (url.includes('/get_user')) {
        return new Response(
          JSON.stringify({
            user: { ID: '42', email: 'skier@example.com', nickname: 'Skier', balance: 500 },
          }),
        );
      }
      if (url.includes('/v1/carpools/pass/products')) {
        return new Response(
          JSON.stringify({
            products: [
              {
                product_id: 'pass_1m',
                title: 'Monthly Pass',
                duration_months: 1,
                price_in_cents: 499,
                version: '1',
                recommended: true,
              },
            ],
          }),
        );
      }
      return new Response('{}', { status: 404 });
    });

    renderStore();

    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'skier@example.com' } });
    fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'secret123' } });
    fireEvent.click(screen.getByRole('button', { name: 'Sign in' }));

    await waitFor(() => {
      expect(getValidRechargeAccessToken('recharge')).toBe('recharge-scoped-token');
      expect(getValidRechargeAccessToken('carpool_pass')).toBe('pass-scoped-token');
    });

    await waitFor(() => {
      expect(screen.getByText(/10 Tokens/)).toBeTruthy();
    });

    expect(JSON.stringify(sessionStorage)).not.toContain('full-secret-token');
    expect(JSON.stringify(sessionStorage)).not.toContain('secret123');

    // Switch to Carpool Pass tab — already authenticated without signing in again
    fireEvent.click(screen.getByTestId('store-tab-pass'));

    await waitFor(() => {
      expect(screen.getByRole('button', { name: 'Continue to Stripe' })).toBeTruthy();
    });
    expect(screen.queryByLabelText('Password')).toBeNull();
    expect(fetchMock).toHaveBeenCalled();
  });
});
