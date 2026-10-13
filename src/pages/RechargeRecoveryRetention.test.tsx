import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import React from 'react';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { LanguageProvider } from '../../contexts/LanguageContext';
import RechargePage from './RechargePage';
import { storeRechargeAccessToken } from '../lib/rechargeSession';
import { readPendingStripeSessionIds } from '../lib/pendingStripeSessions';

const sid = 'cs_test_delayedpaid';
const renderPage = () => render(<MemoryRouter><LanguageProvider><RechargePage /></LanguageProvider></MemoryRouter>);
const login = (token: string) => storeRechargeAccessToken(token, new Date(Date.now() + 600000).toISOString());

describe('recharge recovery retains unconfirmed provider sessions', () => {
  beforeEach(() => { localStorage.clear(); sessionStorage.clear(); window.location.hash = ''; window.location.search = ''; });
  afterEach(() => { cleanup(); vi.restoreAllMocks(); });

  it.each(['old-owner', 'anonymous', 'legacy-single', 'legacy-array'])('recovers %s evidence after an unsuccessful visit', async (source) => {
    const entry = { sessionId: sid, createdAt: Date.now() - 30 * 86400000 };
    if (source === 'old-owner') localStorage.setItem('pending_stripe_sessions_1', JSON.stringify([entry]));
    if (source === 'anonymous') localStorage.setItem('pending_stripe_sessions_anonymous', JSON.stringify([{ ...entry, createdAt: Date.now() }]));
    if (source === 'legacy-single') sessionStorage.setItem('pending_stripe_session_id', sid);
    if (source === 'legacy-array') sessionStorage.setItem('pending_stripe_session_ids', JSON.stringify([sid]));
    const verified: string[] = [];
    const fetchSpy = vi.spyOn(global, 'fetch').mockImplementation(async (input, init) => {
      const url = String(input);
      const auth = new Headers(init?.headers).get('Authorization');
      const json = (data: unknown, status = 200) => new Response(JSON.stringify(data), { status });
      if (url.includes('/get_user')) return json({ user: { ID: auth === 'Bearer actual' ? '1' : '2', email: 'buyer@example.com', balance: 0 } });
      if (url.includes('/verify_stripe')) {
        expect(JSON.parse(String(init?.body))).toEqual({ session_id: sid });
        verified.push(auth!);
        return auth === 'Bearer actual' ? json({ success: true, purchased_token_amount_in_cents: '5000' }) : json({ message: 'Forbidden' }, 403);
      }
      if (url.includes('/feature_availability')) return json({ features: { token_purchase_enabled: { enabled: true } } });
      return json({ products: [] });
    });
    if (source !== 'old-owner') {
      login('wrong');
      const first = renderPage();
      await waitFor(() => expect(verified).toEqual(['Bearer wrong']));
      await waitFor(() => expect(screen.queryByText(/Checking previous orders/)).toBeNull());
      first.unmount();
    }
    login('actual');
    renderPage();
    await waitFor(() => expect(verified).toContain('Bearer actual'));
    await waitFor(() => expect(readPendingStripeSessionIds('1')).toEqual([]));
    expect(readPendingStripeSessionIds('2')).toEqual([]);
    expect(fetchSpy.mock.calls.filter(([url]) => String(url).endsWith('/token/purchases'))).toHaveLength(0);
  });
});
