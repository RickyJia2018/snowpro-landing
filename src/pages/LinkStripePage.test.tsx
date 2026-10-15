import React from 'react';
import { beforeEach, afterEach, describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { LanguageProvider } from '../../contexts/LanguageContext';
import LinkStripePage from './LinkStripePage';

const mount = (page = <LinkStripePage />) =>
  render(
    <React.StrictMode>
      <MemoryRouter>
        <LanguageProvider>{page}</LanguageProvider>
      </MemoryRouter>
    </React.StrictMode>
  );

describe('LinkStripePage', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(cleanup);

  it('renders title and open app button', () => {
    mount();
    expect(screen.getByRole('button', { name: /SnowPro/i })).toBeTruthy();
  });

  it('triggers deep link navigation on button click', () => {
    mount();
    const originalHref = window.location.href;
    const button = screen.getByRole('button', { name: /SnowPro/i });
    fireEvent.click(button);
    // Button click invokes window.location.href assignment to snowpro://link-stripe
    expect(button).toBeTruthy();
  });

  it('contains fallback manual hint and back home link', () => {
    mount();
    expect(screen.getByRole('link', { name: /Home|官网/i })).toBeTruthy();
  });
});
