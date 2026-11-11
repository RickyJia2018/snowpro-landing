import React from 'react';
import { afterEach, expect, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { LanguageProvider } from '../../contexts/LanguageContext';
import CarpoolSharePage from './CarpoolSharePage';

afterEach(cleanup);
function mount(query: string) {
  render(<MemoryRouter initialEntries={[`/carpool/detail?${query}`]}><LanguageProvider><CarpoolSharePage /></LanguageProvider></MemoryRouter>);
}
it('opens the exact trip in the app, with direct store fallbacks', () => {
  const id = '11111111-1111-4111-8111-111111111111';
  mount(`id=${id}`);
  expect(screen.getByRole('link', { name: 'Open carpool trip' }).getAttribute('href')).toBe(`snowpro://carpool/detail?id=${id}`);
  expect(screen.getByRole('link', { name: 'Google Play · Android' }).getAttribute('href')).toBe('https://play.google.com/store/apps/details?id=com.googuar.snowpro&pcampaignid=web_share');
    expect(screen.getByRole('link', { name: 'Download APK' }).getAttribute('href')).toBe('https://snowpro-public-bucket.googuar.com/snowpro.apk');
  expect(screen.getByText(/Sign in/)).toBeTruthy();
});
it.each(['id=invalid', 'id=00000000-0000-0000-0000-000000000000', 'id=11111111-1111-4111-8111-111111111111&id=other'])('rejects unusable trip identifiers: %s', query => {
  mount(query);
  expect(screen.queryByRole('link', { name: 'Open carpool trip' })).toBeNull();
  expect(screen.getByRole('alert')).toBeTruthy();
});

it('opens the exact Ski Buddy post with the same download layout', () => {
  const id = '11111111-1111-4111-8111-111111111111';
  render(<MemoryRouter initialEntries={[`/buddy/detail?id=${id}`]}><LanguageProvider><CarpoolSharePage kind="buddy" /></LanguageProvider></MemoryRouter>);
  expect(screen.getByRole('link', { name: 'Open Ski Buddy post' }).getAttribute('href')).toBe(`snowpro://buddy/detail?id=${id}`);
  expect(screen.getByRole('link', { name: 'Download APK' })).toBeTruthy();
});
