import React from 'react';
import { beforeEach, afterEach, describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { LanguageProvider } from '../../contexts/LanguageContext';
import CarpoolPassPage from './CarpoolPassPage';
import CarpoolPassSuccessPage from './CarpoolPassSuccessPage';
import { getValidRechargeAccessToken, storeRechargeAccessToken } from '../lib/rechargeSession';
import { stripeCheckoutUrl } from '../lib/checkout';
const expiry=()=>new Date(Date.now()+60000).toISOString();
const catalog={products:[{productId:'com.snowpro.carpool.pass.season',durationMonths:7,priceInCents:'1299',title:'Season pass'},{productId:'com.snowpro.carpool.pass.short',durationMonths:2,priceInCents:299,title:'Short pass'}]};
const response=(v:unknown)=>new Response(JSON.stringify(v));
const mount=(page=<CarpoolPassPage/>)=>render(<React.StrictMode><MemoryRouter><LanguageProvider>{page}</LanguageProvider></MemoryRouter></React.StrictMode>);
beforeEach(()=>{sessionStorage.clear();localStorage.clear();window.history.replaceState({},'','/carpool-pass');vi.restoreAllMocks()});afterEach(cleanup);
function mockFetch(other:(url:string,init?:RequestInit)=>Promise<Response> = async()=>response({})){
 return vi.spyOn(globalThis,'fetch').mockImplementation((input,init)=>String(input).includes('/pass/products')?Promise.resolve(response(catalog)):other(String(input),init));
}
describe('Dynamic Pass purchase',()=>{
 it('loads arbitrary configured durations/prices without reusing recharge credentials',async()=>{
  storeRechargeAccessToken('coin-token',expiry());mockFetch();mount();await screen.findByText(/Season pass/);expect(screen.getByText('$12.99')).toBeTruthy();expect((screen.getByRole('button',{name:'Continue to Stripe'}) as HTMLButtonElement).disabled).toBe(true);expect(screen.getByLabelText('Password')).toBeTruthy();
 });
 it('exchanges an app link once and retains the app-selected plan',async()=>{
  window.location.hash='#code=single-use&product_id=com.snowpro.carpool.pass.short';const fetch=mockFetch(async()=>response({accessToken:'pass-token',accessTokenExpiresAt:expiry()}));mount();
  await waitFor(()=>expect(getValidRechargeAccessToken('carpool_pass')).toBe('pass-token'));await screen.findByText(/Short pass/);
  expect(fetch.mock.calls.filter(([u])=>String(u).includes('exchange_handoff_code'))).toHaveLength(1);expect(window.location.hash).toBe('');expect((screen.getByRole('radio',{name:/Short pass/}) as HTMLInputElement).checked).toBe(true);expect(getValidRechargeAccessToken()).toBeNull();
 });
 it('does not reuse an old account after failed handoff',async()=>{
  storeRechargeAccessToken('old',expiry(),'carpool_pass');window.location.hash='#code=new';mockFetch(async()=>{throw new Error('private.example')});mount();await screen.findByRole('alert');expect(getValidRechargeAccessToken('carpool_pass')).toBeNull();expect(screen.queryByText(/private.example/)).toBeNull();
 });
 it('blocks purchase if catalog fails, without hardcoded fallback',async()=>{
  storeRechargeAccessToken('pass',expiry(),'carpool_pass');vi.spyOn(globalThis,'fetch').mockRejectedValue(new Error('down'));mount();await screen.findByRole('alert');expect(screen.queryAllByRole('radio')).toHaveLength(0);expect((screen.getByRole('button',{name:'Continue to Stripe'}) as HTMLButtonElement).disabled).toBe(true);
 });
 it('locks duplicate checkout and rejects unsafe redirect',async()=>{
  storeRechargeAccessToken('pass',expiry(),'carpool_pass');let resolve!:(v:Response)=>void;const fetch=mockFetch(()=>new Promise(r=>{resolve=r}));mount();await screen.findByText(/Season pass/);
  const button=screen.getByRole('button',{name:'Continue to Stripe'});fireEvent.click(button);fireEvent.click(button);expect(fetch.mock.calls.filter(([u])=>String(u).endsWith('/pass/checkout'))).toHaveLength(1);resolve(response({stripeCheckoutUrl:'https://evil.example/pay'}));await screen.findByRole('alert');expect((button as HTMLButtonElement).disabled).toBe(false);
 });
 it('does not treat a return page as payment confirmation',()=>{mount(<CarpoolPassSuccessPage/>);expect(screen.getByText(/cannot confirm payment/)).toBeTruthy()});
 it('requires exact Stripe origin',()=>{expect(stripeCheckoutUrl('https://checkout.stripe.com/c/pay/abc')).toBeTruthy();for(const u of ['javascript:alert(1)','https://checkout.stripe.com.evil.test/pay','https://user@checkout.stripe.com/pay'])expect(stripeCheckoutUrl(u)).toBeNull()});
});
