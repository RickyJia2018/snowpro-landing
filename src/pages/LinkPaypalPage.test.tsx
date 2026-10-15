import React from 'react';
import { beforeEach, afterEach, describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
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
    expect(screen.getByRole('button', { name: /SnowPro/i })).toBeTruthy();
  });

  it('renders invalid message when state is missing', () => {
    mount(['/linkpaypal?code=test_code_123']);
    expect(screen.queryByRole('button', { name: /SnowPro/i })).toBeNull();
    expect(screen.getByText(/未完成|Incomplete/i)).toBeTruthy();
  });

  it('renders invalid message when code is missing', () => {
    mount(['/linkpaypal?state=test_state_456']);
    expect(screen.queryByRole('button', { name: /SnowPro/i })).toBeNull();
    expect(screen.getByText(/未完成|Incomplete/i)).toBeTruthy();
  });

  it('renders error message when error query param is present', () => {
    mount(['/linkpaypal?error=access_denied&error_description=User+cancelled']);
    expect(screen.queryByRole('button', { name: /SnowPro/i })).toBeNull();
    expect(screen.getByText(/取消|cancelled|failed/i)).toBeTruthy();
  });

  it('includes home link on all states', () => {
    mount(['/linkpaypal']);
    expect(screen.getByRole('link', { name: /Home|官网/i })).toBeTruthy();
  });
});
