import { beforeEach, afterEach, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor, cleanup } from '@testing-library/react';
import PurchaseLogin from './PurchaseLogin';
import { getValidRechargeAccessToken } from '../lib/rechargeSession';
beforeEach(()=>{sessionStorage.clear();localStorage.clear();vi.restoreAllMocks()});afterEach(cleanup);
for(const scope of ['recharge','carpool_pass'] as const){
 it(`logs in for ${scope}, exchanges scope, stores no password or full token`,async()=>{
 const fetch=vi.spyOn(globalThis,'fetch').mockResolvedValueOnce(new Response(JSON.stringify({access_token:'full-access-secret'}))).mockResolvedValueOnce(new Response(JSON.stringify({handoff_code:'one-use-code'}))).mockResolvedValueOnce(new Response(JSON.stringify({access_token:'purchase-only',access_token_expires_at:new Date(Date.now()+60000).toISOString(),user:{ID:'7'}})));
 const done=vi.fn();render(<PurchaseLogin scope={scope} zh={false} onSuccess={done}/>);fireEvent.change(screen.getByLabelText('Email'),{target:{value:'test@example.com'}});fireEvent.change(screen.getByLabelText('Password'),{target:{value:'password-secret'}});fireEvent.click(screen.getByRole('button',{name:'Sign in'}));
 await waitFor(()=>expect(done).toHaveBeenCalledTimes(1));expect(fetch).toHaveBeenCalledTimes(3);expect(String(fetch.mock.calls[1][0])).toContain('/v1/auth/web_handoff_code');expect(JSON.parse(String(fetch.mock.calls[1][1]?.body))).toEqual({scope});expect(getValidRechargeAccessToken(scope)).toBe('purchase-only');expect(JSON.stringify(sessionStorage)).not.toMatch(/full-access-secret|password-secret/);expect((screen.getByLabelText('Password') as HTMLInputElement).value).toBe('');
 });
}
it('does not create a purchase session on authentication failure',async()=>{
 vi.spyOn(globalThis,'fetch').mockResolvedValue(new Response('{}',{status:401}));const done=vi.fn();render(<PurchaseLogin scope="carpool_pass" zh={false} onSuccess={done}/>);fireEvent.change(screen.getByLabelText('Email'),{target:{value:'test@example.com'}});fireEvent.change(screen.getByLabelText('Password'),{target:{value:'bad'}});fireEvent.click(screen.getByRole('button',{name:'Sign in'}));await screen.findByRole('alert');expect(done).not.toHaveBeenCalled();expect(getValidRechargeAccessToken('carpool_pass')).toBeNull();
});

it('rejects a recharge exchange without account data before storing the token',async()=>{
 vi.spyOn(globalThis,'fetch').mockResolvedValueOnce(new Response(JSON.stringify({accessToken:'full'}))).mockResolvedValueOnce(new Response(JSON.stringify({handoffCode:'code'}))).mockResolvedValueOnce(new Response(JSON.stringify({accessToken:'short',accessTokenExpiresAt:new Date(Date.now()+60000).toISOString()})));
 const done=vi.fn();render(<PurchaseLogin scope="recharge" zh={false} onSuccess={done}/>);
 fireEvent.change(screen.getByLabelText('Email'),{target:{value:'test@example.com'}});fireEvent.change(screen.getByLabelText('Password'),{target:{value:'secret'}});fireEvent.click(screen.getByRole('button',{name:'Sign in'}));
 await screen.findByRole('alert');expect(done).not.toHaveBeenCalled();expect(getValidRechargeAccessToken('recharge')).toBeNull();
});
