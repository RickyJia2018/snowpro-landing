import { describe, it, expect, vi, beforeEach } from 'vitest';
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RechargePage from './RechargePage';
import { LanguageProvider } from '../../contexts/LanguageContext';
import { storeRechargeAccessToken, getValidRechargeAccessToken } from '../lib/rechargeSession';
import { addPendingStripeSessionId } from '../lib/pendingStripeSessions';

describe('RechargePage Security & Handoff Isolation', () => {
  beforeEach(() => {
    if (typeof sessionStorage !== 'undefined' && sessionStorage.clear) {
      sessionStorage.clear();
    }
    if (typeof localStorage !== 'undefined' && localStorage.clear) {
      localStorage.clear();
    }
    vi.restoreAllMocks();
    if (typeof window !== 'undefined' && window.location) {
      window.location.hash = '';
      window.location.search = '';
    }
  });

  it('renders without password login inputs and never exposes /login_user', async () => {
    const fetchSpy = vi.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve(new Response(JSON.stringify({ products: [] }), { status: 200 }))
    );

    render(
      <MemoryRouter>
        <LanguageProvider>
          <RechargePage />
        </LanguageProvider>
      </MemoryRouter>
    );

    await waitFor(() => {
      // Must NOT contain password field or email login field
      expect(screen.queryByLabelText(/password/i)).toBeNull();
      expect(screen.queryByPlaceholderText(/password/i)).toBeNull();
      expect(document.querySelector('input[type="password"]')).toBeNull();
    });

    // Verify /login_user was never called
    const loginCalls = fetchSpy.mock.calls.filter(([url]) =>
      String(url).includes('/login_user')
    );
    expect(loginCalls.length).toBe(0);
  });

  it('ignores ?code= in query params to prevent referer/log leak', async () => {
    // Set query param
    window.location.search = '?code=query_code_123';
    window.location.hash = '';

    const fetchSpy = vi.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve(new Response(JSON.stringify({ products: [] }), { status: 200 }))
    );

    render(
      <MemoryRouter>
        <LanguageProvider>
          <RechargePage />
        </LanguageProvider>
      </MemoryRouter>
    );

    await waitFor(() => {
      const exchangeCalls = fetchSpy.mock.calls.filter(([url]) =>
        String(url).includes('exchange_handoff_code')
      );
      expect(exchangeCalls.length).toBe(0);
    });
  });

  it('extracts handoff code from URL fragment (#code=...) and strips it immediately', async () => {
    const replaceStateSpy = vi.spyOn(window.history, 'replaceState');
    window.location.hash = '#code=frag_code_456';
    window.location.search = '';

    const fetchSpy = vi.spyOn(global, 'fetch').mockImplementation((url) => {
      if (String(url).includes('exchange_handoff_code')) {
        return Promise.resolve(
          new Response(
            JSON.stringify({
              accessToken: 'mock_web_recharge_token',
              sessionId: 'sess_123',
              accessTokenExpiresAt: { seconds: Math.floor(Date.now() / 1000) + 600 },
              user: { id: '1', email: 'test@example.com', nickname: 'Test', balance: 5000 },
            }),
            { status: 200 }
          )
        );
      }
      return Promise.resolve(new Response(JSON.stringify({ products: [] }), { status: 200 }));
    });

    render(
      <MemoryRouter>
        <LanguageProvider>
          <RechargePage />
        </LanguageProvider>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(replaceStateSpy).toHaveBeenCalled();
      const exchangeCalls = fetchSpy.mock.calls.filter(([url]) =>
        String(url).includes('exchange_handoff_code')
      );
      expect(exchangeCalls.length).toBe(1);
      const requestBody = JSON.parse(exchangeCalls[0][1]?.body as string);
      expect(requestBody.handoff_code).toBe('frag_code_456');
    });
  });
});

describe('rechargeSession storage expiration', () => {
  beforeEach(() => {
    sessionStorage.clear();
  });

  it('stores valid token and retrieves it', () => {
    const futureExpires = { seconds: Math.floor(Date.now() / 1000) + 300 };
    expect(storeRechargeAccessToken('test_token', futureExpires)).toBe(true);
    expect(getValidRechargeAccessToken()).toBe('test_token');
  });

  it('rejects expired token and clears storage', () => {
    const pastExpires = { seconds: Math.floor(Date.now() / 1000) - 10 };
    expect(storeRechargeAccessToken('expired_token', pastExpires)).toBe(false);
    expect(getValidRechargeAccessToken()).toBeNull();
  });
});

describe('RechargePage feature availability', () => {
  beforeEach(() => {
    sessionStorage.clear();
    vi.restoreAllMocks();
    storeRechargeAccessToken('web-token', {
      seconds: Math.floor(Date.now() / 1000) + 300,
    });
  });

  it('disables new checkout while still restoring pending Stripe payments', async () => {
    addPendingStripeSessionId('cs_test_pending123');
    const fetchSpy = vi.spyOn(global, 'fetch').mockImplementation((input) => {
      const url = String(input);
      if (url.includes('/v1/feature_availability')) {
        return Promise.resolve(
          new Response(
            JSON.stringify({
              features: {
                token_purchase_enabled: {
                  enabled: false,
                  reason: 'ADMIN_DISABLED',
                },
              },
            }),
            { status: 200 }
          )
        );
      }
      if (url.includes('/get_user')) {
        return Promise.resolve(
          new Response(
            JSON.stringify({
              user: { id: '1', email: 'user@example.com', balance: 1000 },
            }),
            { status: 200 }
          )
        );
      }
      if (url.includes('/token/purchases/verify_stripe')) {
        return Promise.resolve(
          new Response(JSON.stringify({ success: true }), { status: 200 })
        );
      }
      return Promise.resolve(
        new Response(
          JSON.stringify({
            products: [
              {
                product_id: 'token_100',
                token_amount_in_cents: 10000,
                price_in_cents: 999,
                title: '100 Tokens',
              },
            ],
          }),
          { status: 200 }
        )
      );
    });

    render(
      <MemoryRouter>
        <LanguageProvider>
          <RechargePage />
        </LanguageProvider>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(
        screen.getByText(/Token recharge is under maintenance/i)
      ).toBeTruthy();
    });
    const checkoutButton = screen.getByRole('button', {
      name: /Recharge Unavailable/i,
    });
    expect((checkoutButton as HTMLButtonElement).disabled).toBe(true);
    expect(
      fetchSpy.mock.calls.some(([url]) =>
        String(url).includes('/token/purchases/verify_stripe')
      )
    ).toBe(true);
    expect(
      fetchSpy.mock.calls.some(
        ([url, init]) =>
          String(url).endsWith('/token/purchases') && init?.method === 'POST'
      )
    ).toBe(false);
  });

  it('fails closed when availability cannot be loaded', async () => {
    vi.spyOn(global, 'fetch').mockImplementation((input) => {
      const url = String(input);
      if (url.includes('/v1/feature_availability')) {
        return Promise.resolve(new Response('{}', { status: 503 }));
      }
      if (url.includes('/get_user')) {
        return Promise.resolve(
          new Response(
            JSON.stringify({
              user: { id: '1', email: 'user@example.com', balance: 1000 },
            }),
            { status: 200 }
          )
        );
      }
      return Promise.resolve(new Response(JSON.stringify({ products: [] }), { status: 200 }));
    });

    render(
      <MemoryRouter>
        <LanguageProvider>
          <RechargePage />
        </LanguageProvider>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(
        screen.getByText(/Unable to confirm recharge availability/i)
      ).toBeTruthy();
    });
  });
});

describe('RechargePage Client Recovery Robustness', () => {
  beforeEach(() => {
    sessionStorage.clear();
    localStorage.clear();
    vi.restoreAllMocks();
    // Stub window.alert for tests
    window.alert = vi.fn();
    storeRechargeAccessToken('valid-test-token', {
      seconds: Math.floor(Date.now() / 1000) + 600,
    });
  });

  it('drops terminal 403 / 404 pending session and avoids perpetual retry', async () => {
    const { addPendingStripeSessionId, readPendingStripeSessionIds } = await import('../lib/pendingStripeSessions');
    addPendingStripeSessionId('cs_terminal_403', 'user_123');

    vi.spyOn(global, 'fetch').mockImplementation((input) => {
      const url = String(input);
      if (url.includes('/v1/feature_availability')) {
        return Promise.resolve(new Response(JSON.stringify({ features: { token_purchase_enabled: { enabled: true } } }), { status: 200 }));
      }
      if (url.includes('/get_user')) {
        return Promise.resolve(new Response(JSON.stringify({ user: { id: 'user_123', email: 'u123@example.com', balance: 0 } }), { status: 200 }));
      }
      if (url.includes('/token/purchases/verify_stripe')) {
        // Return 403 Forbidden (cross-user or invalid)
        return Promise.resolve(new Response(JSON.stringify({ message: 'Forbidden' }), { status: 403 }));
      }
      return Promise.resolve(new Response(JSON.stringify({ products: [] }), { status: 200 }));
    });

    render(
      <MemoryRouter>
        <LanguageProvider>
          <RechargePage />
        </LanguageProvider>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(readPendingStripeSessionIds('user_123')).toEqual([]);
    });
  });

  it('retains pending session on 401 Unauthorized during verify_stripe and clears expired auth token', async () => {
    const { addPendingStripeSessionId, readPendingStripeSessionIds } = await import('../lib/pendingStripeSessions');
    addPendingStripeSessionId('cs_auth_expired_401', 'user_123');

    vi.spyOn(global, 'fetch').mockImplementation((input) => {
      const url = String(input);
      if (url.includes('/v1/feature_availability')) {
        return Promise.resolve(new Response(JSON.stringify({ features: { token_purchase_enabled: { enabled: true } } }), { status: 200 }));
      }
      if (url.includes('/get_user')) {
        return Promise.resolve(new Response(JSON.stringify({ user: { id: 'user_123', email: 'u123@example.com', balance: 0 } }), { status: 200 }));
      }
      if (url.includes('/token/purchases/verify_stripe')) {
        // Return 401 Unauthorized (expired recharge token)
        return Promise.resolve(new Response(JSON.stringify({ message: 'Token expired' }), { status: 401 }));
      }
      return Promise.resolve(new Response(JSON.stringify({ products: [] }), { status: 200 }));
    });

    render(
      <MemoryRouter>
        <LanguageProvider>
          <RechargePage />
        </LanguageProvider>
      </MemoryRouter>
    );

    await waitFor(() => {
      // Pending session MUST be retained for future restoration
      expect(readPendingStripeSessionIds('user_123')).toEqual(['cs_auth_expired_401']);
      // Expired access token must be wiped
      expect(getValidRechargeAccessToken()).toBeNull();
    });
  });

  it('retains all subsequent pending sessions when first session hits 401 Unauthorized (multi-session queue)', async () => {
    const { addPendingStripeSessionId, readPendingStripeSessionIds } = await import('../lib/pendingStripeSessions');
    // Queue: [A, B, C]
    addPendingStripeSessionId('cs_multi_A', 'user_multi');
    addPendingStripeSessionId('cs_multi_B', 'user_multi');
    addPendingStripeSessionId('cs_multi_C', 'user_multi');

    vi.spyOn(global, 'fetch').mockImplementation((input) => {
      const url = String(input);
      if (url.includes('/v1/feature_availability')) {
        return Promise.resolve(new Response(JSON.stringify({ features: { token_purchase_enabled: { enabled: true } } }), { status: 200 }));
      }
      if (url.includes('/get_user')) {
        return Promise.resolve(new Response(JSON.stringify({ user: { id: 'user_multi', email: 'multi@example.com', balance: 0 } }), { status: 200 }));
      }
      if (url.includes('/token/purchases/verify_stripe')) {
        // A hits 401
        return Promise.resolve(new Response(JSON.stringify({ message: 'Token expired' }), { status: 401 }));
      }
      return Promise.resolve(new Response(JSON.stringify({ products: [] }), { status: 200 }));
    });

    render(
      <MemoryRouter>
        <LanguageProvider>
          <RechargePage />
        </LanguageProvider>
      </MemoryRouter>
    );

    await waitFor(() => {
      // All 3 sessions [A, B, C] MUST be retained in exact order!
      expect(readPendingStripeSessionIds('user_multi')).toEqual(['cs_multi_A', 'cs_multi_B', 'cs_multi_C']);
      expect(getValidRechargeAccessToken()).toBeNull();
    });
  });

  it('removes first fulfilled session, but retains second (401) and third (unprocessed) sessions', async () => {
    const { addPendingStripeSessionId, readPendingStripeSessionIds } = await import('../lib/pendingStripeSessions');
    // Queue: [A, B, C]
    addPendingStripeSessionId('cs_queue_A', 'user_partial');
    addPendingStripeSessionId('cs_queue_B', 'user_partial');
    addPendingStripeSessionId('cs_queue_C', 'user_partial');

    vi.spyOn(global, 'fetch').mockImplementation((input, init) => {
      const url = String(input);
      if (url.includes('/v1/feature_availability')) {
        return Promise.resolve(new Response(JSON.stringify({ features: { token_purchase_enabled: { enabled: true } } }), { status: 200 }));
      }
      if (url.includes('/get_user')) {
        return Promise.resolve(new Response(JSON.stringify({ user: { id: 'user_partial', email: 'partial@example.com', balance: 0 } }), { status: 200 }));
      }
      if (url.includes('/token/purchases/verify_stripe')) {
        const body = JSON.parse(String(init?.body || '{}'));
        if (body.session_id === 'cs_queue_A') {
          // A succeeds
          return Promise.resolve(new Response(JSON.stringify({ success: true, token_amount: 500 }), { status: 200 }));
        }
        if (body.session_id === 'cs_queue_B') {
          // B hits 401
          return Promise.resolve(new Response(JSON.stringify({ message: 'Token expired' }), { status: 401 }));
        }
      }
      return Promise.resolve(new Response(JSON.stringify({ products: [] }), { status: 200 }));
    });

    render(
      <MemoryRouter>
        <LanguageProvider>
          <RechargePage />
        </LanguageProvider>
      </MemoryRouter>
    );

    await waitFor(() => {
      // A was fulfilled (removed), B and C are retained!
      expect(readPendingStripeSessionIds('user_partial')).toEqual(['cs_queue_B', 'cs_queue_C']);
    });
  });

  it('restores pending session after re-authenticating with fresh token', async () => {
    const { addPendingStripeSessionId, readPendingStripeSessionIds } = await import('../lib/pendingStripeSessions');
    addPendingStripeSessionId('cs_pending_restored', 'user_123');

    vi.spyOn(global, 'fetch').mockImplementation((input) => {
      const url = String(input);
      if (url.includes('/v1/feature_availability')) {
        return Promise.resolve(new Response(JSON.stringify({ features: { token_purchase_enabled: { enabled: true } } }), { status: 200 }));
      }
      if (url.includes('/get_user')) {
        return Promise.resolve(new Response(JSON.stringify({ user: { id: 'user_123', email: 'u123@example.com', balance: 0 } }), { status: 200 }));
      }
      if (url.includes('/token/purchases/verify_stripe')) {
        // Successfully verified
        return Promise.resolve(new Response(JSON.stringify({ success: true, token_amount: 1000 }), { status: 200 }));
      }
      return Promise.resolve(new Response(JSON.stringify({ products: [] }), { status: 200 }));
    });

    render(
      <MemoryRouter>
        <LanguageProvider>
          <RechargePage />
        </LanguageProvider>
      </MemoryRouter>
    );

    await waitFor(() => {
      // Successfully restored session is removed from pending
      expect(readPendingStripeSessionIds('user_123')).toEqual([]);
      expect(window.alert).toHaveBeenCalled();
    });
  });

  it('retains transient 500 / 429 pending session in storage for retry', async () => {
    const { addPendingStripeSessionId, readPendingStripeSessionIds } = await import('../lib/pendingStripeSessions');
    addPendingStripeSessionId('cs_transient_500', 'user_123');

    vi.spyOn(global, 'fetch').mockImplementation((input) => {
      const url = String(input);
      if (url.includes('/v1/feature_availability')) {
        return Promise.resolve(new Response(JSON.stringify({ features: { token_purchase_enabled: { enabled: true } } }), { status: 200 }));
      }
      if (url.includes('/get_user')) {
        return Promise.resolve(new Response(JSON.stringify({ user: { id: 'user_123', email: 'u123@example.com', balance: 0 } }), { status: 200 }));
      }
      if (url.includes('/token/purchases/verify_stripe')) {
        // Return 500 Server Error
        return Promise.resolve(new Response(JSON.stringify({ message: 'Internal Error' }), { status: 500 }));
      }
      return Promise.resolve(new Response(JSON.stringify({ products: [] }), { status: 200 }));
    });

    render(
      <MemoryRouter>
        <LanguageProvider>
          <RechargePage />
        </LanguageProvider>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(readPendingStripeSessionIds('user_123')).toEqual(['cs_transient_500']);
    });
  });

  it('does not wipe valid recharge access token on transient 500 error in /get_user', async () => {
    vi.spyOn(global, 'fetch').mockImplementation((input) => {
      const url = String(input);
      if (url.includes('/v1/feature_availability')) {
        return Promise.resolve(new Response(JSON.stringify({ features: { token_purchase_enabled: { enabled: true } } }), { status: 200 }));
      }
      if (url.includes('/get_user')) {
        return Promise.resolve(new Response(JSON.stringify({ message: 'Database unreachable' }), { status: 500 }));
      }
      return Promise.resolve(new Response(JSON.stringify({ products: [] }), { status: 200 }));
    });

    render(
      <MemoryRouter>
        <LanguageProvider>
          <RechargePage />
        </LanguageProvider>
      </MemoryRouter>
    );

    await waitFor(() => {
      // Access token must NOT be wiped on 5xx
      expect(getValidRechargeAccessToken()).toBe('valid-test-token');
    });
  });

  it('wipes access token on 401 Unauthorized in /get_user', async () => {
    vi.spyOn(global, 'fetch').mockImplementation((input) => {
      const url = String(input);
      if (url.includes('/v1/feature_availability')) {
        return Promise.resolve(new Response(JSON.stringify({ features: { token_purchase_enabled: { enabled: true } } }), { status: 200 }));
      }
      if (url.includes('/get_user')) {
        return Promise.resolve(new Response(JSON.stringify({ message: 'Token expired' }), { status: 401 }));
      }
      return Promise.resolve(new Response(JSON.stringify({ products: [] }), { status: 200 }));
    });

    render(
      <MemoryRouter>
        <LanguageProvider>
          <RechargePage />
        </LanguageProvider>
      </MemoryRouter>
    );

    await waitFor(() => {
      // Access token MUST be wiped on 401
      expect(getValidRechargeAccessToken()).toBeNull();
    });
  });
});
