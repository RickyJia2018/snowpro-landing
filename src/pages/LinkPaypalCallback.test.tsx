import React from 'react';
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { LanguageProvider } from '../../contexts/LanguageContext';
import LinkPaypalPage from './LinkPaypalPage';

const mount = (query: string) => render(
  <React.StrictMode>
    <MemoryRouter initialEntries={[`/linkpaypal?${query}`]}>
      <LanguageProvider><LinkPaypalPage /></LanguageProvider>
    </MemoryRouter>
  </React.StrictMode>,
);

describe('PayPal browser-to-app callback contract', () => {
  let destinations: string[];
  beforeEach(() => {
    vi.useFakeTimers();
    destinations = [];
    vi.spyOn(window.location, 'href', 'set').mockImplementation(value => {
      destinations.push(value);
    });
  });
  afterEach(() => {
    cleanup();
    vi.clearAllTimers();
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  for (const mode of ['automatic', 'manual']) {
    for (const encoded of [false, true]) {
      it(`${mode} returns the original code and state (${encoded ? 'encoded' : 'plain'})`, () => {
        const code = encoded ? 'code+/ ?&=#雪' : 'authorization-code';
        const state = encoded ? '42:1792060000:revision:signature+/=' : 'signed-state';
        mount(new URLSearchParams({ code, state }).toString());
        if (mode === 'automatic') {
          act(() => vi.advanceTimersByTime(200));
        } else {
          destinations.length = 0;
          fireEvent.click(screen.getByRole('button', { name: /Open.*App|打开.*App/i }));
        }
        expect(destinations.length).toBeGreaterThan(0);
        for (const destination of destinations) {
          const uri = new URL(destination);
          expect(uri.protocol).toBe('snowpro:');
          expect(uri.hostname).toBe('link-paypal');
          expect(uri.searchParams.getAll('code')).toEqual([code]);
          expect(uri.searchParams.getAll('state')).toEqual([state]);
          expect(uri.hash).toBe('');
        }
      });
    }
  }
  for (const query of [
    'code=authorization-code',
    'state=signed-state',
    'code=authorization-code&state=signed-state&error=access_denied',
  ]) {
    it(`does not return an incomplete or denied authorization: ${query}`, () => {
      mount(query);
      act(() => vi.advanceTimersByTime(200));
      expect(destinations).toEqual([]);
      expect(screen.queryByRole('button', { name: /Open.*App|打开.*App/i })).toBeNull();
    });
  }
});
