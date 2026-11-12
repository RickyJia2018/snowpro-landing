import React from 'react';
import { afterEach, describe, expect, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { LanguageProvider } from '../../contexts/LanguageContext';
import InstructorInvitePage from './InstructorInvitePage';

function mount(query: string) {
  render(<MemoryRouter initialEntries={[`/invite/instructor?${query}`]}><LanguageProvider><InstructorInvitePage /></LanguageProvider></MemoryRouter>);
}

afterEach(cleanup);
describe('instructor invitation fallback', () => {
  it('opens the same invitation in the app and explains post-install return', () => {
    mount('code=sp-r91cqi');
    expect(screen.getByRole('link', { name: 'Open SnowPro' }).getAttribute('href')).toBe('snowpro://invite/instructor?code=SP-R91CQI');
    expect(screen.getByText(/After installing/)).toBeTruthy();
    expect(screen.getByText(/already applied/)).toBeTruthy();
    expect(screen.getByRole('link', { name: 'App Store · iPhone' }).getAttribute('href')).toBe('https://apps.apple.com/ca/app/snow-pro/id6754150275');
    expect(screen.getByRole('link', { name: 'Google Play · Android' }).getAttribute('href')).toBe('https://play.google.com/store/apps/details?id=com.googuar.snowpro');
    expect(screen.getByRole('link', { name: 'Download APK' }).getAttribute('href')).toBe('https://snowpro-public-bucket.googuar.com/snowpro.apk');
  });
  it.each(['code=', 'code=FIRST&code=SECOND', 'code=BAD%2FCODE'])('does not open malformed codes: %s', (query) => {
    mount(query);
    expect(screen.queryByRole('link', { name: 'Open SnowPro' })).toBeNull();
    expect(screen.getByText(/invalid/)).toBeTruthy();
  });
});
