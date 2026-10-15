import React from 'react';
import { beforeEach, afterEach, describe, it, expect, vi } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { LanguageProvider } from '../../contexts/LanguageContext';
import LinkPaypalPage from './LinkPaypalPage';

const mount = (initialEntries = ['/linkpaypal']) =>
  render(
    <React.StrictMode>
      <MemoryRouter initialEntries={initialEntries}>
        <LanguageProvider>
          <LinkPaypalPage />
        </LanguageProvider>
      </MemoryRouter>
    </React.StrictMode>
  );

describe('LinkPaypalPage', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(cleanup);

  it('renders button and valid title when both code and state are present', () => {
    mount(['/linkpaypal?code=test_code_123&state=test_state_456']);
    expect(screen.getByRole('button', { name: /Open App/i })).toBeTruthy();
  });

  it('renders invalid message when state is missing', () => {
    mount(['/linkpaypal?code=test_code_123']);
    expect(screen.queryByRole('button', { name: /Open App/i })).toBeNull();
    expect(screen.getByText(/Invalid callback/i)).toBeTruthy();
  });

  it('renders invalid message when code is missing', () => {
    mount(['/linkpaypal?state=test_state_456']);
    expect(screen.queryByRole('button', { name: /Open App/i })).toBeNull();
    expect(screen.getByText(/Invalid callback/i)).toBeTruthy();
  });

  it('renders error message when error query param is present', () => {
    mount(['/linkpaypal?error=access_denied&error_description=User+cancelled']);
    expect(screen.queryByRole('button', { name: /Open App/i })).toBeNull();
    expect(screen.getByText(/Invalid callback/i)).toBeTruthy();
  });

  it('preserves the existing callback page and retry guidance', () => {
    mount(['/linkpaypal']);
    expect(screen.getByText('Connect PayPal')).toBeTruthy();
    expect(screen.getByText(/Invalid callback/i)).toBeTruthy();
  });
});
