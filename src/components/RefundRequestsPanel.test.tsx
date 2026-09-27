import React from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import RefundRequestsPanel from './RefundRequestsPanel';
import { storeRechargeAccessToken } from '../lib/rechargeSession';
const json = (value: unknown) => new Response(JSON.stringify(value));
beforeEach(() => { sessionStorage.clear(); vi.restoreAllMocks(); });
afterEach(cleanup);
const login = () => storeRechargeAccessToken('recharge-token', new Date(Date.now() + 60000).toISOString());
describe('Refund request intake', () => {
  it('keeps optional details optional and reuses the request ID after an uncertain result', async () => {
    login(); const bodies: Record<string, string>[] = [];
    vi.spyOn(globalThis, 'fetch').mockImplementation(async (_url, init) => {
      if (init?.method !== 'POST') return json({ requests: [] });
      bodies.push(JSON.parse(String(init.body)));
      if (bodies.length === 1) throw new Error('connection lost after send');
      return json({ id: 'request-123' });
    });
    render(<RefundRequestsPanel zh={false} />);
    await screen.findByText('No requests found');
    fireEvent.click(screen.getByRole('button', { name: 'Submit refund or withdrawal request' }));
    await screen.findByRole('alert');
    fireEvent.click(screen.getByRole('button', { name: 'Submit refund or withdrawal request' }));
    await screen.findByText('Request received: request-123');
    expect(bodies).toHaveLength(2); expect(bodies[0].client_request_id).toBe(bodies[1].client_request_id);
    expect(bodies[0].order_reference).toBe(''); expect(bodies[0].customer_message).toBe(''); expect(bodies[0].reason).toBe('WITHDRAWAL');
    expect(bodies[0]).not.toHaveProperty('amount');
  });
  it('prevents double submission and discards a response after changing purchase scope', async () => {
    login(); let finish!: (response: Response) => void; let posts = 0;
    vi.spyOn(globalThis, 'fetch').mockImplementation(async (_url, init) => {
      if (init?.method !== 'POST') return json({ requests: [] });
      posts++; return new Promise<Response>(resolve => { finish = resolve; });
    });
    render(<RefundRequestsPanel zh={false} />); await screen.findByText('No requests found');
    const button = screen.getByRole('button', { name: 'Submit refund or withdrawal request' });
    fireEvent.click(button); fireEvent.click(button); expect(posts).toBe(1);
    fireEvent.change(screen.getByLabelText('Purchase type'), { target: { value: 'carpool_pass' } });
    await screen.findByText('Sign in to submit or view refund requests');
    finish(json({ id: 'old-private-request' })); await waitFor(() => expect(screen.queryByText(/old-private-request/)).toBeNull());
  });
  it('clears private request details and history when signing out', async () => {
    login(); vi.spyOn(globalThis, 'fetch').mockResolvedValue(json({ requests: [{ id: 'private-case', status: 'IN_REVIEW', customerResponse: 'Private reply' }] }));
    render(<RefundRequestsPanel zh={false} />); await screen.findByText('Private reply');
    fireEvent.change(screen.getByLabelText('Order number (optional)'), { target: { value: 'private-order' } });
    fireEvent.click(screen.getByRole('button', { name: 'Sign out of this purchase session' }));
    expect(screen.queryByText('Private reply')).toBeNull(); expect(screen.queryByDisplayValue('private-order')).toBeNull();
    expect(screen.getByText('Sign in to submit or view refund requests')).toBeTruthy();
  });
});


it('accepts an omitted repeated field from the real protobuf gateway as empty history', async () => {
  login(); vi.spyOn(globalThis, 'fetch').mockResolvedValue(json({}));
  render(<RefundRequestsPanel zh={false} />);
  expect(await screen.findByText('No requests found')).toBeTruthy();
  expect(screen.queryByRole('alert')).toBeNull();
});
for (const body of [{ requests: null }, { requests: {} }, { requests: [{ id: 'bad' }] }]) {
  it(`rejects malformed refund history ${JSON.stringify(body)}`, async () => {
    login(); vi.spyOn(globalThis, 'fetch').mockResolvedValue(json(body));
    render(<RefundRequestsPanel zh={false} />);
    expect((await screen.findByRole('alert')).textContent).toContain('Could not load requests');
    expect(screen.queryByText('No requests found')).toBeNull();
  });
}
it('does not mistake a failed HTTP response for empty refund history', async () => {
  login(); vi.spyOn(globalThis, 'fetch').mockResolvedValue(new Response('{}', { status: 503 }));
  render(<RefundRequestsPanel zh={false} />);
  expect((await screen.findByRole('alert')).textContent).toContain('Could not load requests');
  expect(screen.queryByText('No requests found')).toBeNull();
});
