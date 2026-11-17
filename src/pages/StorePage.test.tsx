import React from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { LanguageProvider } from '../../contexts/LanguageContext';
import StorePage from './StorePage';
import { getValidRechargeAccessToken, storeRechargeAccessToken } from '../lib/rechargeSession';

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

function seedStoreSession() {
  const expiry = new Date(Date.now() + 60_000).toISOString();
  storeRechargeAccessToken('coins-session', expiry);
  storeRechargeAccessToken('pass-session', expiry, 'carpool_pass');
}

function mockStoreApi({ accountStatus = () => 200, passCheckoutStatus = 200 }: {
  accountStatus?: () => number;
  passCheckoutStatus?: number;
} = {}) {
  return vi.spyOn(globalThis, 'fetch').mockImplementation(async (input) => {
    const url = String(input);
    const json = (value: unknown, status = 200) => new Response(JSON.stringify(value), { status });
    if (url.includes('/get_user')) {
      const status = accountStatus();
      return json(status === 200 ? { user: { ID: '42', email: 'skier@example.com', balance: 500 } } : {}, status);
    }
    if (url.includes('/v1/feature_availability')) return json({ features: { token_purchase_enabled: { enabled: true } } });
    if (url.includes('/token/products')) return json({ products: [{ productId: 'pack_10', tokenAmountInCents: '1000', priceInCents: 1299 }] });
    if (url.includes('/policies/latest')) return json({ policy_version_id: '1', language_code: 'en', version: 'v1', content: 'Policy' });
    if (url.includes('/v1/carpools/pass/products')) return json({ products: [{ product_id: 'pass_1m', title: 'Monthly Pass', duration_months: 1, price_in_cents: 499, version: '1' }] });
    if (url.includes('/v1/carpools/pass/checkout')) return json({}, passCheckoutStatus);
    return json({}, 404);
  });
}

describe('StorePage unified Snow Coins & Carpool Pass experience', () => {
  it('shows login first without tabs, then reveals Snow Coins and Carpool Pass tabs after sign-in', async () => {
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

    // Before sign-in: tabs are hidden; only the login form is shown
    expect(screen.queryByTestId('store-tab-coins')).toBeNull();
    expect(screen.queryByTestId('store-tab-pass')).toBeNull();
    expect(screen.getByLabelText('Email')).toBeTruthy();

    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'skier@example.com' } });
    fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'secret123' } });
    fireEvent.click(screen.getByRole('button', { name: 'Sign in' }));

    await waitFor(() => {
      expect(getValidRechargeAccessToken('recharge')).toBe('recharge-scoped-token');
      expect(getValidRechargeAccessToken('carpool_pass')).toBe('pass-scoped-token');
      expect(screen.getByTestId('store-tab-coins')).toBeTruthy();
      expect(screen.getByTestId('store-tab-pass')).toBeTruthy();
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

    // Logging out hides tabs and returns to the unified login card
    fireEvent.click(screen.getByRole('button', { name: 'End Session' }));
    expect(screen.queryByTestId('store-tab-coins')).toBeNull();
    expect(screen.getByLabelText('Email')).toBeTruthy();
  });

  it('requires unified login if only a single-scope carpool_pass token exists in sessionStorage', () => {
    const expiresAt = new Date(Date.now() + 60_000).toISOString();
    sessionStorage.setItem('carpool_pass_access_token', 'stale-pass-only-token');
    sessionStorage.setItem('carpool_pass_access_token_expires_at', String(Date.parse(expiresAt)));

    renderStore('/store?tab=pass');

    expect(screen.queryByTestId('store-tab-coins')).toBeNull();
    expect(screen.queryByTestId('store-tab-pass')).toBeNull();
    expect(screen.getByLabelText('Email')).toBeTruthy();
  });

  it('returns an expired Coins session to the single Store login instead of showing login inside authenticated tabs', async () => {
    seedStoreSession();
    mockStoreApi({ accountStatus: () => 401 });
    renderStore();
    await screen.findByLabelText('Password');
    expect(screen.queryByTestId('store-tab-coins')).toBeNull();
    expect(screen.queryByRole('button', { name: 'End Session' })).toBeNull();
    expect(getValidRechargeAccessToken()).toBeNull();
    expect(getValidRechargeAccessToken('carpool_pass')).toBeNull();
    expect(screen.getAllByLabelText('Password')).toHaveLength(1);
  });

  it('retries an unavailable account read without asking an authenticated buyer to log in again', async () => {
    seedStoreSession();
    let accountStatus = 503;
    mockStoreApi({ accountStatus: () => accountStatus });
    renderStore();
    await screen.findByRole('button', { name: 'Retry' });
    expect(screen.queryByLabelText('Password')).toBeNull();
    expect(getValidRechargeAccessToken()).toBe('coins-session');
    expect(screen.getByRole('button', { name: 'End Session' })).toBeTruthy();

    accountStatus = 200;
    fireEvent.click(screen.getByRole('button', { name: 'Retry' }));
    await screen.findByText(/10 Tokens/);
    expect(screen.queryByLabelText('Password')).toBeNull();
    fireEvent.click(screen.getByTestId('store-tab-pass'));
    await screen.findByText(/Monthly Pass/);
    expect(screen.queryByLabelText('Password')).toBeNull();
    fireEvent.click(screen.getByTestId('store-tab-coins'));
    await screen.findByText(/10 Tokens/);
    expect(screen.queryByLabelText('Password')).toBeNull();
  });

  it('returns a rejected Pass checkout to the same Store login and clears both scopes', async () => {
    seedStoreSession();
    mockStoreApi({ passCheckoutStatus: 401 });
    renderStore('/store?tab=pass');
    const checkout = await screen.findByRole('button', { name: 'Continue to Stripe' });
    await waitFor(() => expect((checkout as HTMLButtonElement).disabled).toBe(false));
    fireEvent.click(checkout);
    await screen.findByLabelText('Password');
    expect(screen.queryByTestId('store-tab-pass')).toBeNull();
    expect(screen.queryByRole('button', { name: 'End Session' })).toBeNull();
    expect(getValidRechargeAccessToken()).toBeNull();
    expect(getValidRechargeAccessToken('carpool_pass')).toBeNull();
  });
});
