import React from 'react';
import { beforeEach, afterEach, describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { LanguageProvider } from '../../contexts/LanguageContext';
import CarpoolPassPage from './CarpoolPassPage';
import CarpoolPassSuccessPage from './CarpoolPassSuccessPage';
import { getValidRechargeAccessToken, storeRechargeAccessToken } from '../lib/rechargeSession';
import { stripeCheckoutUrl } from '../lib/checkout';

const expiry = () => new Date(Date.now() + 60000).toISOString();
const mount = (page = <CarpoolPassPage />) => render(<React.StrictMode><MemoryRouter><LanguageProvider>{page}</LanguageProvider></MemoryRouter></React.StrictMode>);
beforeEach(() => { sessionStorage.clear(); localStorage.clear(); window.history.replaceState({}, '', '/carpool-pass'); vi.restoreAllMocks(); });
afterEach(cleanup);

describe('Pass purchase boundaries', () => {
  it('does not reuse a SnowCoin recharge token', async () => {
    storeRechargeAccessToken('coin-token', expiry());
    const fetch = vi.spyOn(globalThis, 'fetch');
    mount();
    await waitFor(() => expect((screen.getByRole('button', { name: 'Continue to Stripe' }) as HTMLButtonElement).disabled).toBe(true));
    expect(fetch).not.toHaveBeenCalled();
  });

  it('exchanges once under StrictMode and retains the selected app plan', async () => {
    window.location.hash = '#code=single-use&product_id=com.snowpro.carpool.pass.2m';
    const fetch = vi.spyOn(globalThis, 'fetch').mockResolvedValue(new Response(JSON.stringify({ accessToken: 'pass-token', accessTokenExpiresAt: expiry() })));
    mount();
    await waitFor(() => expect(getValidRechargeAccessToken('carpool_pass')).toBe('pass-token'));
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(window.location.hash).toBe('');
    expect((screen.getByRole('radio', { name: /2 month Pass/ }) as HTMLInputElement).checked).toBe(true);
    expect(getValidRechargeAccessToken()).toBeNull();
  });

  it('disables old account checkout during a failing new handoff', async () => {
    storeRechargeAccessToken('old-pass-token', expiry(), 'carpool_pass');
    window.location.hash = '#code=new-account';
    vi.spyOn(globalThis, 'fetch').mockRejectedValue(new Error('native stack https://private.example'));
    mount();
    await screen.findByRole('alert');
    expect(getValidRechargeAccessToken('carpool_pass')).toBeNull();
    expect((screen.getByRole('button', { name: 'Continue to Stripe' }) as HTMLButtonElement).disabled).toBe(true);
    expect(screen.queryByText(/private.example/)).toBeNull();
  });

  it('locks repeated clicks and rejects an untrusted checkout URL', async () => {
    storeRechargeAccessToken('pass-token', expiry(), 'carpool_pass');
    let resolve!: (value: Response) => void;
    const fetch = vi.spyOn(globalThis, 'fetch').mockImplementation(() => new Promise(r => { resolve = r; }));
    mount();
    const button = screen.getByRole('button', { name: 'Continue to Stripe' });
    fireEvent.click(button); fireEvent.click(button);
    expect(fetch).toHaveBeenCalledTimes(1);
    resolve(new Response(JSON.stringify({ stripeCheckoutUrl: 'https://evil.example/pay' })));
    await screen.findByRole('alert');
    expect((screen.getByRole('button', { name: 'Continue to Stripe' }) as HTMLButtonElement).disabled).toBe(false);
  });

  it('never claims that a direct visit to the return page proves payment', () => {
    mount(<CarpoolPassSuccessPage />);
    expect(screen.queryByText('Payment received')).toBeNull();
    expect(screen.getByText(/cannot confirm payment/)).toBeTruthy();
  });

  it('validates the exact Stripe origin', () => {
    expect(stripeCheckoutUrl('https://checkout.stripe.com/c/pay/cs_test_123')).toBeTruthy();
    for (const url of ['javascript:alert(1)', 'https://checkout.stripe.com.evil.test/pay', 'https://user@checkout.stripe.com/pay', 'http://checkout.stripe.com/pay']) expect(stripeCheckoutUrl(url)).toBeNull();
  });
});
