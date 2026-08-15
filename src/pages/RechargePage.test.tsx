import { describe, it, expect, vi, beforeEach } from 'vitest';
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RechargePage from './RechargePage';
import { LanguageProvider } from '../../contexts/LanguageContext';
import { storeRechargeAccessToken, getValidRechargeAccessToken } from '../lib/rechargeSession';

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
