import React from 'react';
import { afterEach, describe, expect, it } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../../App';

afterEach(() => {
  cleanup();
});

function renderHome() {
  return render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>,
  );
}

describe('Snow Pro Landing Page', () => {
  it('uses Instructor terminology everywhere and never uses Coach in English copy', () => {
    renderHome();
    const mainText = document.body.textContent || '';
    expect(mainText).toMatch(/instructor/i);
    expect(mainText).not.toMatch(/\bcoach(es|ing)?\b/i);
  });

  it('removes fabricated testimonials and placeholder avatars', () => {
    renderHome();
    const mainText = document.body.textContent || '';
    expect(mainText).not.toContain('Alex Zhang');
    expect(mainText).not.toContain('Sarah Li');
    expect(mainText).not.toContain('Coach Mike');
    expect(document.querySelector('img[src*="picsum.photos"]')).toBeNull();
    expect(document.querySelector('img[src*="unsplash.com"]')).toBeNull();
  });

  it('highlights 1 Earned Snow Coin = $1 USD payout rate, Founding Instructor 10% lifetime fee, and level-based lower fees', () => {
    renderHome();
    const mainText = document.body.textContent || '';
    expect(mainText).toContain('1 Earned Snow Coin = $1 USD');
    expect(mainText).not.toMatch(/(^|[^a-zA-Z])1 Snow Coin = \$1 USD/);
    expect(mainText).toMatch(/store or payment channel/i);
    expect(mainText).toMatch(/Instructor Payouts in USD/i);
    expect(mainText).toMatch(/Earn in USD/i);
    expect(mainText).toMatch(/Set Your Own Price/i);
    expect(mainText).toMatch(/Accepting Orders/i);
    expect(mainText).toMatch(/Finish Lesson/i);
    expect(mainText).toMatch(/Founding Instructor/i);
    expect(mainText).toMatch(/First 50/i);
    expect(mainText).toMatch(/10%/);
    expect(mainText).toMatch(/20%.*12%|20%.*to 12%/i);
    expect(mainText).toMatch(/30%.*20%|30%.*to 20%/i);
    expect(mainText).toMatch(/contribution points/i);
    expect(mainText).not.toContain('5% Fee');
  });

  it('switches real app screenshots interactively including the level & fee control panel', () => {
    renderHome();

    const heroImg = screen.getByTestId('hero-showcase-image') as HTMLImageElement;
    expect(heroImg.getAttribute('src')).toBe('/screenshots/instructor-center.jpg');

    const videoImg = screen.getByTestId('video-showcase-image') as HTMLImageElement;
    expect(videoImg.getAttribute('src')).toBe('/screenshots/earnings-hub.jpg');

    fireEvent.click(screen.getByTestId('video-tab-annotate'));
    expect((screen.getByTestId('video-showcase-image') as HTMLImageElement).getAttribute('src')).toBe(
      '/screenshots/video-annotation.jpg',
    );

    fireEvent.click(screen.getByTestId('video-tab-control'));
    expect((screen.getByTestId('video-showcase-image') as HTMLImageElement).getAttribute('src')).toBe(
      '/screenshots/lesson-instructor.jpg',
    );

    fireEvent.click(screen.getByTestId('video-subscreen-levelPanel'));
    expect((screen.getByTestId('video-showcase-image') as HTMLImageElement).getAttribute('src')).toBe(
      '/screenshots/level-commission-rules.png',
    );

    const carpoolImg = screen.getByTestId('carpool-showcase-image') as HTMLImageElement;
    expect(carpoolImg.getAttribute('src')).toBe('/screenshots/carpool-list.jpg');

    fireEvent.click(screen.getByTestId('carpool-tab-detail'));
    expect((screen.getByTestId('carpool-showcase-image') as HTMLImageElement).getAttribute('src')).toBe(
      '/screenshots/carpool-detail.jpg',
    );

    fireEvent.click(screen.getByTestId('carpool-tab-map'));
    expect((screen.getByTestId('carpool-showcase-image') as HTMLImageElement).getAttribute('src')).toBe(
      '/screenshots/carpool-map.jpg',
    );
  });

  it('renders Courses, Ski Buddy, Roadmap, Download links, and Googuar footer', () => {
    renderHome();
    expect(document.getElementById('courses')).toBeTruthy();
    expect(document.getElementById('carpool')).toBeTruthy();
    expect(document.getElementById('skibuddy')).toBeTruthy();
    expect(document.getElementById('roadmap')).toBeTruthy();
    expect(document.getElementById('download')).toBeTruthy();

    const html = document.body.innerHTML;
    expect(html).toContain('href="/store"');
    expect(html).not.toContain('Token Recharge');
    expect(html).toContain('apps.apple.com/ca/app/snow-pro/id6754150275');
    expect(html).toContain('play.google.com/store/apps/details?id=com.googuar.snowpro');
    expect(html).toContain('snowpro-public-bucket.googuar.com/snowpro.apk');
    expect(html).toContain('Googuar Technology Inc.');
    expect(html).toContain('snowpro-support@googuar.com');
  });

  it('supports clicking a phone screenshot to open and close the full-resolution preview modal', () => {
    renderHome();
    const videoImg = screen.getByTestId('video-showcase-image');
    fireEvent.click(videoImg);

    const dialog = screen.getByRole('dialog');
    expect(dialog).toBeTruthy();

    fireEvent.click(screen.getByLabelText('Close preview'));
    expect(screen.queryByRole('dialog')).toBeNull();
  });
});
