import { describe, it, expect, vi, beforeEach } from 'vitest';
import React from 'react';
import { render, screen, waitFor, act, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RechargePage from './RechargePage';
import { LanguageProvider } from '../../contexts/LanguageContext';
import { storeRechargeAccessToken, getValidRechargeAccessToken } from '../lib/rechargeSession';
import { addPendingStripeSessionId, readPendingStripeSessionIds } from '../lib/pendingStripeSessions';

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

  it('offers direct login but never sends credentials without submission', async () => {
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
      // Direct login is available, but no login request runs automatically.
      expect(screen.getByLabelText(/password/i)).toBeTruthy();
      expect(screen.queryByPlaceholderText(/password/i)).toBeNull();
      expect(document.querySelector('input[type="password"]')).toBeTruthy();
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
              user: { ID: '1', email: 'test@example.com', nickname: 'Test', balance: 5000 },
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
              user: { ID: '1', email: 'user@example.com', balance: 1000 },
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
              user: { ID: '1', email: 'user@example.com', balance: 1000 },
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

  it('retains rejected verification evidence because 403 does not prove fulfillment', async () => {
    const { addPendingStripeSessionId, readPendingStripeSessionIds } = await import('../lib/pendingStripeSessions');
    addPendingStripeSessionId('cs_terminal_403', '123');

    vi.spyOn(global, 'fetch').mockImplementation((input) => {
      const url = String(input);
      if (url.includes('/v1/feature_availability')) {
        return Promise.resolve(new Response(JSON.stringify({ features: { token_purchase_enabled: { enabled: true } } }), { status: 200 }));
      }
      if (url.includes('/get_user')) {
        return Promise.resolve(new Response(JSON.stringify({ user: { ID: '123', email: 'u123@example.com', balance: 0 } }), { status: 200 }));
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

    await waitFor(() => expect(vi.mocked(fetch).mock.calls.some(([url]) => String(url).includes('/token/purchases/verify_stripe'))).toBe(true));
    await waitFor(() => {
      expect(readPendingStripeSessionIds('123')).toEqual(['cs_terminal_403']);
    });
  });

  it('retains pending session on 401 Unauthorized during verify_stripe and clears expired auth token', async () => {
    const { addPendingStripeSessionId, readPendingStripeSessionIds } = await import('../lib/pendingStripeSessions');
    addPendingStripeSessionId('cs_auth_expired_401', '123');

    vi.spyOn(global, 'fetch').mockImplementation((input) => {
      const url = String(input);
      if (url.includes('/v1/feature_availability')) {
        return Promise.resolve(new Response(JSON.stringify({ features: { token_purchase_enabled: { enabled: true } } }), { status: 200 }));
      }
      if (url.includes('/get_user')) {
        return Promise.resolve(new Response(JSON.stringify({ user: { ID: '123', email: 'u123@example.com', balance: 0 } }), { status: 200 }));
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
      expect(readPendingStripeSessionIds('123')).toEqual(['cs_auth_expired_401']);
      // Expired access token must be wiped
      expect(getValidRechargeAccessToken()).toBeNull();
    });
  });

  it('retains all subsequent pending sessions when first session hits 401 Unauthorized (multi-session queue)', async () => {
    const { addPendingStripeSessionId, readPendingStripeSessionIds } = await import('../lib/pendingStripeSessions');
    // Queue: [A, B, C]
    addPendingStripeSessionId('cs_multi_A', '124');
    addPendingStripeSessionId('cs_multi_B', '124');
    addPendingStripeSessionId('cs_multi_C', '124');

    vi.spyOn(global, 'fetch').mockImplementation((input) => {
      const url = String(input);
      if (url.includes('/v1/feature_availability')) {
        return Promise.resolve(new Response(JSON.stringify({ features: { token_purchase_enabled: { enabled: true } } }), { status: 200 }));
      }
      if (url.includes('/get_user')) {
        return Promise.resolve(new Response(JSON.stringify({ user: { id: '124', email: 'multi@example.com', balance: 0 } }), { status: 200 }));
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
      expect(readPendingStripeSessionIds('124')).toEqual(['cs_multi_A', 'cs_multi_B', 'cs_multi_C']);
      expect(getValidRechargeAccessToken()).toBeNull();
    });
  });

  it('removes first fulfilled session, but retains second (401) and third (unprocessed) sessions', async () => {
    const { addPendingStripeSessionId, readPendingStripeSessionIds } = await import('../lib/pendingStripeSessions');
    // Queue: [A, B, C]
    addPendingStripeSessionId('cs_queue_A', '125');
    addPendingStripeSessionId('cs_queue_B', '125');
    addPendingStripeSessionId('cs_queue_C', '125');

    vi.spyOn(global, 'fetch').mockImplementation((input, init) => {
      const url = String(input);
      if (url.includes('/v1/feature_availability')) {
        return Promise.resolve(new Response(JSON.stringify({ features: { token_purchase_enabled: { enabled: true } } }), { status: 200 }));
      }
      if (url.includes('/get_user')) {
        return Promise.resolve(new Response(JSON.stringify({ user: { id: '125', email: 'partial@example.com', balance: 0 } }), { status: 200 }));
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
      expect(readPendingStripeSessionIds('125')).toEqual(['cs_queue_B', 'cs_queue_C']);
    });
  });

  it('restores pending session after re-authenticating with fresh token', async () => {
    const { addPendingStripeSessionId, readPendingStripeSessionIds } = await import('../lib/pendingStripeSessions');
    addPendingStripeSessionId('cs_pending_restored', '123');

    vi.spyOn(global, 'fetch').mockImplementation((input) => {
      const url = String(input);
      if (url.includes('/v1/feature_availability')) {
        return Promise.resolve(new Response(JSON.stringify({ features: { token_purchase_enabled: { enabled: true } } }), { status: 200 }));
      }
      if (url.includes('/get_user')) {
        return Promise.resolve(new Response(JSON.stringify({ user: { ID: '123', email: 'u123@example.com', balance: 0 } }), { status: 200 }));
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
      expect(readPendingStripeSessionIds('123')).toEqual([]);
      expect(screen.getByText(/Successfully restored and credited/)).toBeTruthy();
    });
  });

  it('retains transient 500 / 429 pending session in storage for retry', async () => {
    const { addPendingStripeSessionId, readPendingStripeSessionIds } = await import('../lib/pendingStripeSessions');
    addPendingStripeSessionId('cs_transient_500', '123');

    vi.spyOn(global, 'fetch').mockImplementation((input) => {
      const url = String(input);
      if (url.includes('/v1/feature_availability')) {
        return Promise.resolve(new Response(JSON.stringify({ features: { token_purchase_enabled: { enabled: true } } }), { status: 200 }));
      }
      if (url.includes('/get_user')) {
        return Promise.resolve(new Response(JSON.stringify({ user: { ID: '123', email: 'u123@example.com', balance: 0 } }), { status: 200 }));
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
      expect(readPendingStripeSessionIds('123')).toEqual(['cs_transient_500']);
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
  it.each([200, 400, 401, 403, 404, 500])('preserves a newer checkout while restoring an older one (HTTP %s)', async code => {
    storeRechargeAccessToken('owner-token', new Date(Date.now()+3600000).toISOString());
    addPendingStripeSessionId('cs_old', '126');
    addPendingStripeSessionId('cs_old', 'different_owner');
    let finish!: (response: Response) => void;
    const oldResponse = new Promise<Response>(resolve => { finish = resolve; });
    const fetcher = vi.spyOn(global, 'fetch').mockImplementation((input) => {
      const url = String(input);
      if (url.includes('/get_user')) return Promise.resolve(new Response(JSON.stringify({user:{id:'126',email:'race@example.com',balance:0}}), {status:200}));
      if (url.includes('/token/purchases/verify_stripe')) return oldResponse;
      if (url.includes('/v1/feature_availability')) return Promise.resolve(new Response(JSON.stringify({features:{token_purchase_enabled:{enabled:true}}}),{status:200}));
      return Promise.resolve(new Response(JSON.stringify({products:[]}),{status:200}));
    });
    render(<MemoryRouter><LanguageProvider><RechargePage /></LanguageProvider></MemoryRouter>);
    await waitFor(() => expect(fetcher.mock.calls.some(([url]) => String(url).includes('/token/purchases/verify_stripe'))).toBe(true));
    addPendingStripeSessionId('cs_new', '126');
    await act(async () => { finish(new Response(JSON.stringify({success:code===200,token_amount_in_cents:100}),{status:code})); });
    await waitFor(() => expect(readPendingStripeSessionIds('126')).toEqual(code===200 ? ['cs_new'] : ['cs_old','cs_new']));
    expect(readPendingStripeSessionIds('different_owner')).toEqual(['cs_old']);
  });

});


it('automatically restores old orders before allowing a new checkout', async () => {
  sessionStorage.clear(); localStorage.clear(); vi.restoreAllMocks();
  storeRechargeAccessToken('recovery-token', new Date(Date.now()+60000).toISOString());
  addPendingStripeSessionId('cs_recovery', '7');
  let finish!: (r: Response) => void;
  let credited = false;
  const fetch = vi.spyOn(globalThis, 'fetch').mockImplementation(input => {
    const url = String(input);
    const json = (body: unknown) => Promise.resolve(new Response(JSON.stringify(body)));
    if (url.includes('/verify_stripe')) return new Promise(resolve => { finish = resolve; });
    if (url.includes('/get_user')) return json({ user: { ID: '7', balance: credited ? 100 : 0 } });
    if (url.includes('/policies/latest')) return json({ policy_version_id: '1', language_code: 'en', content: 'Terms', version: 'v1' });
    if (url.includes('/v1/feature_availability')) return json({ features: { token_purchase_enabled: { enabled: true } } });
    return json({ products: [{ product_id: 'one', price_in_cents: 149, token_amount_in_cents: 100, title: '1 Token' }] });
  });
  render(<MemoryRouter><LanguageProvider><RechargePage /></LanguageProvider></MemoryRouter>);
  expect(await screen.findByText(/Checking previous orders/)).toBeTruthy();
  const pay = screen.getByRole('button', { name: 'Pay with Stripe' }) as HTMLButtonElement;
  expect(pay.disabled).toBe(true);
  fireEvent.click(pay);
  expect(fetch.mock.calls.some(([url]) => String(url).endsWith('/token/purchases'))).toBe(false);
  credited = true;
  await act(async () => { finish(new Response(JSON.stringify({ success: true, token_amount_in_cents: 100 }))); });
  await waitFor(() => expect(pay.disabled).toBe(false));
  expect(screen.getByText(/Successfully restored and credited 1 tokens/)).toBeTruthy();
  expect(readPendingStripeSessionIds('7')).toEqual([]);
  expect(fetch.mock.calls.some(([url]) => String(url).endsWith('/token/purchases'))).toBe(false);
});
