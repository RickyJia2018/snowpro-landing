import React from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../../App';

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

describe('/download route', () => {
  it('renders HomePage and scrolls smoothly to the #download APK/store section', () => {
    const scrollIntoView = vi.fn();
    Element.prototype.scrollIntoView = scrollIntoView;
    render(
      <MemoryRouter initialEntries={['/download']}>
        <App />
      </MemoryRouter>,
    );
    const section = document.getElementById('download');
    expect(section).toBeTruthy();
    expect(scrollIntoView).toHaveBeenCalled();
  });
});
