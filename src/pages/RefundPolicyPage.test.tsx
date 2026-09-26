import React from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { LanguageProvider } from '../../contexts/LanguageContext';
import RefundPolicyPage from './RefundPolicyPage';
import RefundNotice from '../components/RefundNotice';

afterEach(() => { cleanup(); vi.restoreAllMocks(); });
const mount = () => render(<LanguageProvider><RefundPolicyPage /></LanguageProvider>);
describe('Refund access', () => {
  it('keeps a direct contact channel available when the policy service fails and retries', async () => {
    const fetch = vi.spyOn(globalThis, 'fetch').mockRejectedValueOnce(new Error('offline')).mockResolvedValueOnce(new Response(JSON.stringify({ content: 'Current statutory refund rights', version: 'refunds-2026-09-26' })));
    mount();
    await screen.findByRole('alert');
    const link = screen.getByRole('link', { name: 'Email a refund or withdrawal request' });
    expect(link.getAttribute('href')).toContain('mailto:contact@snowpro.app');
    expect(decodeURIComponent(link.getAttribute('href')!)).toContain('no reason is required');
    fireEvent.click(screen.getByRole('button', { name: 'Retry' }));
    await screen.findByText('Current statutory refund rights');
    expect(screen.queryByRole('alert')).toBeNull();
    expect(String(fetch.mock.calls[0][0])).toContain('policy_type=CANCELLATION_AND_REFUND_POLICY');
  });
  it('does not present an empty policy as successfully loaded', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(new Response(JSON.stringify({ content: '', version: 'x' })));
    mount(); await screen.findByRole('alert');
    expect(screen.getByRole('link', { name: 'Email a refund or withdrawal request' })).toBeTruthy();
  });
  it.each([false, true])('provides pre-purchase access without implying a waiver (Chinese=%s)', zh => {
    render(<RefundNotice zh={zh} />);
    const link = screen.getByRole('link');
    expect(link.getAttribute('href')).toBe('/refunds');
    expect(screen.getByText(zh ? /不表示放弃法定权利/ : /does not waive these rights/)).toBeTruthy();
  });
});
