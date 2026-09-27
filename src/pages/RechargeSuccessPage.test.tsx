import { afterEach, beforeEach, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { LanguageProvider } from '../../contexts/LanguageContext';
import RechargeSuccessPage from './RechargeSuccessPage';
import { getValidRechargeAccessToken, storeRechargeAccessToken } from '../lib/rechargeSession';
import { addPendingStripeSessionId, readPendingStripeSessionIds } from '../lib/pendingStripeSessions';

beforeEach(() => { sessionStorage.clear(); localStorage.clear(); vi.restoreAllMocks(); });
afterEach(cleanup);
const show = () => render(<MemoryRouter initialEntries={['/recharge/success?session_id=cs_existing_paid']}><LanguageProvider><RechargeSuccessPage /></LanguageProvider></MemoryRouter>);
const response = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status });

it('reauthenticates on the result page and verifies the original order without another purchase', async () => {
  addPendingStripeSessionId('cs_existing_paid', '7');
  const fetch = vi.spyOn(globalThis, 'fetch')
    .mockResolvedValueOnce(response({ access_token: 'full-login' }))
    .mockResolvedValueOnce(response({ handoff_code: 'one-use' }))
    .mockResolvedValueOnce(response({ access_token: 'new-recharge', access_token_expires_at: new Date(Date.now()+60000).toISOString(), user: { ID: '7' } }))
    .mockResolvedValueOnce(response({ success: true, token_amount_in_cents: 100 }));
  show();
  expect(await screen.findByText(/Sign in to verify your existing order/)).toBeTruthy();
  expect(fetch).not.toHaveBeenCalled();
  expect(readPendingStripeSessionIds('7')).toEqual(['cs_existing_paid']);
  fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'test@example.com' } });
  fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'test-password' } });
  fireEvent.click(screen.getByRole('button', { name: 'Sign in' }));
  expect(await screen.findByText('Recharge Successful!')).toBeTruthy();
  expect(fetch).toHaveBeenCalledTimes(4);
  const [url, args] = fetch.mock.calls[3];
  expect(String(url)).toContain('/token/purchases/verify_stripe');
  expect(JSON.parse(String(args?.body))).toEqual({ session_id: 'cs_existing_paid' });
  expect(args?.headers).toMatchObject({ Authorization: 'Bearer new-recharge' });
  expect(readPendingStripeSessionIds('7')).toEqual([]);
});

it('keeps the original recovery evidence and offers login after a server 401', async () => {
  storeRechargeAccessToken('revoked', new Date(Date.now()+60000).toISOString());
  addPendingStripeSessionId('cs_existing_paid', '7');
  const fetch = vi.spyOn(globalThis, 'fetch').mockResolvedValue(response({}, 401));
  show();
  expect(await screen.findByText(/Sign in to verify your existing order/)).toBeTruthy();
  expect(getValidRechargeAccessToken()).toBeNull();
  expect(readPendingStripeSessionIds('7')).toEqual(['cs_existing_paid']);
  expect(fetch).toHaveBeenCalledTimes(1);
  expect(screen.queryByRole('button', { name: 'Verify Status Again' })).toBeNull();
});

it('does not accept a late success after the authenticated session changes', async () => {
  storeRechargeAccessToken('old', new Date(Date.now()+60000).toISOString());
  addPendingStripeSessionId('cs_existing_paid', '7');
  let resolve!: (r: Response) => void;
  const fetch = vi.spyOn(globalThis, 'fetch').mockReturnValue(new Promise(r => { resolve = r; }));
  show();
  await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
  storeRechargeAccessToken('another-account', new Date(Date.now()+60000).toISOString());
  resolve(response({ success: true, token_amount_in_cents: 100 }));
  expect(await screen.findByText(/Sign in to verify your existing order/)).toBeTruthy();
  expect(getValidRechargeAccessToken()).toBe('another-account');
  expect(readPendingStripeSessionIds('7')).toEqual(['cs_existing_paid']);
  expect(screen.queryByText('Recharge Successful!')).toBeNull();
});
