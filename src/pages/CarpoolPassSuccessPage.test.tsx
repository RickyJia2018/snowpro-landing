import React from 'react';
import { afterEach, beforeEach, expect, it, vi } from 'vitest';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { LanguageProvider } from '../../contexts/LanguageContext';
import { storeRechargeAccessToken } from '../lib/rechargeSession';
import CarpoolPassSuccessPage from './CarpoolPassSuccessPage';

beforeEach(() => { sessionStorage.clear(); vi.restoreAllMocks(); });
afterEach(cleanup);
const show = () => render(<MemoryRouter initialEntries={['/carpool-pass/success?session_id=cs_test_pass']}><LanguageProvider><CarpoolPassSuccessPage /></LanguageProvider></MemoryRouter>);

it('confirms the exact Stripe session using only Pass credentials', async () => {
  storeRechargeAccessToken('pass-token', new Date(Date.now()+60000).toISOString(), 'carpool_pass');
  const fetch = vi.spyOn(globalThis, 'fetch').mockResolvedValue(new Response(JSON.stringify({success:true})));
  show();
  await screen.findByText('Your Pass is ready');
  expect(JSON.parse(String(fetch.mock.calls[0][1]?.body))).toEqual({session_id:'cs_test_pass'});
  expect(fetch.mock.calls[0][1]?.headers).toMatchObject({Authorization:'Bearer pass-token'});
  expect(screen.getByRole('link', {name:'Open SnowPro'}).getAttribute('href')).toBe('snowpro://carpool-pass-return');
});

it('does not claim success before backend confirmation', async () => {
  storeRechargeAccessToken('pass-token', new Date(Date.now()+60000).toISOString(), 'carpool_pass');
  const fetch = vi.spyOn(globalThis, 'fetch').mockResolvedValue(new Response(JSON.stringify({success:false})));
  show();
  await waitFor(() => expect(fetch).toHaveBeenCalled());
  expect(screen.queryByText('Your Pass is ready')).toBeNull();
  expect(screen.getByText('Confirming your Pass…')).toBeTruthy();
});

it('does not reuse Token checkout credentials when the Pass session expired', async () => {
  storeRechargeAccessToken('coin-token', new Date(Date.now()+60000).toISOString());
  const fetch = vi.spyOn(globalThis, 'fetch');
  show();
  await screen.findByText(/purchase session has expired/);
  expect(fetch).not.toHaveBeenCalled();
});
