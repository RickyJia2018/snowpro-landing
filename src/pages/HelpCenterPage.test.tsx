import React from 'react';
import { afterEach, describe, expect, it } from 'vitest';
import { cleanup, fireEvent, render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../../App';

afterEach(() => {
  cleanup();
});

function renderHelpCenter(initialEntry = '/help-center') {
  return render(
    <MemoryRouter initialEntries={[initialEntry]}>
      <App />
    </MemoryRouter>,
  );
}

describe('HelpCenterPage', () => {
  it('renders all 6 core SnowPro help categories and falls back cleanly to English when ?lang=zh is passed', () => {
    renderHelpCenter('/help-center?lang=zh');

    const main = screen.getByRole('main');
    expect(main.getAttribute('lang')).toBe('en');

    expect(screen.getByRole('heading', { level: 1, name: /How can we help/i })).toBeTruthy();
    expect(screen.getByRole('heading', { level: 2, name: /1-on-1 Video Analysis/i })).toBeTruthy();
    expect(screen.getByRole('heading', { level: 2, name: /Video Courses/i })).toBeTruthy();
    expect(screen.getByRole('heading', { level: 2, name: /Snow Coins, Purchases & Refunds/i })).toBeTruthy();
    expect(screen.getByRole('heading', { level: 2, name: /For Instructors/i })).toBeTruthy();
    expect(screen.getByRole('heading', { level: 2, name: /Resort Carpool & Ski Buddy/i })).toBeTruthy();
    expect(screen.getByRole('heading', { level: 2, name: /Account, Privacy & Community Safety/i })).toBeTruthy();
  });

  it('enforces Instructor terminology, Earned Snow Coin wording, and standard LV0-LV4 fees only (no Founding 10% promo)', () => {
    renderHelpCenter();

    // Expand all FAQs so full body copy and fee tables are inspected
    fireEvent.click(screen.getByRole('button', { name: /Expand all/i }));

    const fullText = document.body.textContent || '';

    // Never use Coach in English copy
    expect(fullText).toMatch(/instructor/i);
    expect(fullText).not.toMatch(/\bcoach(es|ing)?\b/i);

    // Accurate Snow Coin distinction
    expect(fullText).toMatch(/1 Earned Snow Coin = \$1(\.00)? USD/);
    expect(fullText).not.toMatch(/(^|[^a-zA-Z])1 Snow Coin = \$1(\.00)? USD/);

    // Standard LV0-LV4 fee table only — no Founding Instructor / First 50 / 10% fee
    expect(fullText).not.toMatch(/Founding Instructor/i);
    expect(fullText).not.toMatch(/First 50/i);
    expect(fullText).not.toContain('10%');

    const feeTable = screen.getByRole('table', { name: /Standard Instructor Level & Platform Fee Table/i });
    const tableText = feeTable.textContent || '';
    expect(tableText).toContain('LV0');
    expect(tableText).toContain('0 – 199 pts');
    expect(tableText).toContain('20%');
    expect(tableText).toContain('30%');
    expect(tableText).toContain('LV1');
    expect(tableText).toContain('18%');
    expect(tableText).toContain('28%');
    expect(tableText).toContain('LV2');
    expect(tableText).toContain('16%');
    expect(tableText).toContain('25%');
    expect(tableText).toContain('LV3');
    expect(tableText).toContain('14%');
    expect(tableText).toContain('22%');
    expect(tableText).toContain('LV4');
    expect(tableText).toContain('10,000+ pts');
    expect(tableText).toContain('12%');

    // Ground-truth app timers & point rules
    expect(fullText).toMatch(/Resting/);
    expect(fullText).toMatch(/7 days/i);
    expect(fullText).toMatch(/3 days/i);
    expect(fullText).toContain('+50 pts');
    expect(fullText).toMatch(/7-day recovery period/i);
  });

  it('preserves all required store, refund, deletion, child-safety, legal, and support links', () => {
    renderHelpCenter();

    const html = document.body.innerHTML;
    expect(html).toContain('mailto:snowpro-support@googuar.com');
    expect(html).toContain('href="/store"');
    expect(html).toContain('href="/refunds"');
    expect(html).toContain('href="/account-deletion.html"');
    expect(html).toContain('href="/community-guidelines.html"');
    expect(html).toContain('href="/privacy.html"');
    expect(html).toContain('href="/terms-of-service.html"');
    expect(document.body.textContent).toContain('Googuar Technology Inc.');

    // Support card places the Email CTA button at the bottom of the card (after the emergency notice)
    const supportCard = screen.getByTestId('help-contact-card');
    const emergencyNote = within(supportCard).getByText(/Support email is not an emergency service/i);
    const emailBtn = within(supportCard).getByRole('link', { name: /Email snowpro-support@googuar\.com/i });
    expect(
      Boolean(emergencyNote.compareDocumentPosition(emailBtn) & Node.DOCUMENT_POSITION_FOLLOWING),
    ).toBe(true);
  });

  it('supports category filtering, accordion toggling, and live keyword search with empty-state reset', () => {
    renderHelpCenter();

    // Accordion toggle check
    const restingBtn = screen.getByRole('button', { name: /Why does an instructor show as "Resting"\?/i });
    expect(restingBtn.getAttribute('aria-expanded')).toBe('false');
    expect(document.getElementById('faq-panel-va-resting-status')).toBeNull();
    fireEvent.click(restingBtn);
    expect(restingBtn.getAttribute('aria-expanded')).toBe('true');
    const restingPanel = document.getElementById('faq-panel-va-resting-status');
    expect(restingPanel?.textContent).toMatch(/Accepting Orders switch/i);

    // Category filter check
    const carpoolFilter = screen.getByRole('button', { name: /Carpool & Ski Buddy/i });
    fireEvent.click(carpoolFilter);
    expect(screen.getByRole('heading', { level: 2, name: /Resort Carpool & Ski Buddy/i })).toBeTruthy();
    expect(screen.queryByRole('heading', { level: 2, name: /Video Courses/i })).toBeNull();

    // Reset back to All Topics
    fireEvent.click(screen.getByRole('button', { name: /All Topics/i }));
    expect(screen.getByRole('heading', { level: 2, name: /Video Courses/i })).toBeTruthy();

    // Live search auto-expands matching items across categories
    const searchInput = screen.getByRole('searchbox', { name: /Search help articles/i });
    fireEvent.change(searchInput, { target: { value: 'PayPal' } });
    expect(screen.getByText(/Stripe Connect/i)).toBeTruthy();
    expect(screen.queryByRole('heading', { level: 2, name: /Resort Carpool & Ski Buddy/i })).toBeNull();

    // Unmatched search shows empty state and Clear search button restores content
    fireEvent.change(searchInput, { target: { value: 'xyznonexistentquery999' } });
    const emptyRegion = screen.getByTestId('help-search-empty');
    expect(emptyRegion).toBeTruthy();
    fireEvent.click(within(emptyRegion).getByRole('button', { name: /Clear search/i }));
    expect((searchInput as HTMLInputElement).value).toBe('');
    expect(screen.getByRole('heading', { level: 2, name: /1-on-1 Video Analysis/i })).toBeTruthy();
  });
});
