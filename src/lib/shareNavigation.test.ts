// @vitest-environment jsdom
import { readFileSync } from 'node:fs';
import { afterEach, expect, it, vi } from 'vitest';
import { renderCarpoolDocument } from './carpoolShare';
import { renderCourseShareDocument, shareCountry } from './courseShare';
import { renderInstructorDocument } from './instructorShare';

const source = readFileSync('public/browser-open-guide.js', 'utf8');
const safari = 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 Version/18.0 Mobile/15E148 Safari/604.1';
const android = 'Mozilla/5.0 (Linux; Android 14) AppleWebKit/537.36 Chrome/126.0 Mobile Safari/537.36';
const tripId = '11111111-1111-4111-8111-111111111111';
const runtime = () => (window as any).__snowproBrowserGuide;
const pages = [
  ['/courses/1', renderCourseShareDocument(null, '1', false)],
  ['/instructors/2', renderInstructorDocument(null, '2', false)],
  [`/carpool/detail?id=${tripId}`, renderCarpoolDocument(tripId, 'Mt Seymour', 'Nov 23', false)],
  [`/buddy/detail?id=${tripId}`, renderCarpoolDocument(tripId, 'Mt Seymour', 'Nov 23', false, 'buddy')],
];
function mount(path: string, html: string, ua = safari, country = 'CA') {
  vi.spyOn(navigator, 'userAgent', 'get').mockReturnValue(ua);
  window.history.replaceState({}, '', path);
  document.documentElement.dataset.shareCountry = country;
  document.body.innerHTML = new DOMParser().parseFromString(html, 'text/html').body.innerHTML;
  new Function(source)();
}
afterEach(() => {
  runtime()?.destroy();
  delete (window as any).__snowproNavigate;
  delete document.documentElement.dataset.shareCountry;
  document.body.innerHTML = '';
  vi.useRealTimers();
  vi.restoreAllMocks();
});

it.each(pages)('settles DOM updates and leaves the event loop free on mobile: %s', async (path, html) => {
  // Use native-style MutationObserver microtasks (jsdom), not happy-dom's
  // timer-based delivery. Bound callbacks so a regression fails without hanging.
  const OriginalObserver = window.MutationObserver;
  let deliveries = 0;
  vi.stubGlobal('MutationObserver', class extends OriginalObserver {
    constructor(callback: MutationCallback) {
      super((records, observer) => {
        deliveries++;
        if (deliveries > 20) { observer.disconnect(); return; }
        callback(records, observer);
      });
    }
  });
  try {
    mount(path, html);
    const downloads = document.querySelector('.downloads')!;
    await new Promise(resolve => setTimeout(resolve, 30));
    expect(deliveries).toBeLessThan(5);
    expect(document.querySelector('.sp-browser-platforms')).toBeNull();
    expect(document.querySelector('.brand-icon')?.getAttribute('src')).toBe('/share-app-icon.png');
    const other = document.querySelector('a[data-platform="android"]') as HTMLAnchorElement;
    expect(other.hidden).toBe(true);
    runtime().refresh();
    await new Promise(resolve => setTimeout(resolve, 30));
    expect(other.hidden).toBe(true);
    expect(document.querySelector('.downloads')).toBe(downloads);
    expect(document.querySelector('.sp-browser-platforms')).toBeNull();
    expect(deliveries).toBeLessThan(8);
  } finally { vi.unstubAllGlobals(); }
});

it.each(pages)('keeps the exact content destination and Android store fallback: %s', (path, html) => {
  mount(path, html, android);
  const navigate = (window as any).__snowproNavigate = vi.fn();
  const action = document.querySelector('.actions a[href^="snowpro:"]') as HTMLAnchorElement;
  const destination = action.getAttribute('href')!.slice('snowpro:'.length);
  action.click();
  expect(navigate).toHaveBeenCalledOnce();
  expect(navigate).toHaveBeenCalledWith(`intent:${destination}#Intent;scheme=snowpro;package=com.googuar.snowpro;S.browser_fallback_url=${encodeURIComponent('https://play.google.com/store/apps/details?id=com.googuar.snowpro')};end`);
});

it.each(pages)('falls back on iOS only when the page stays visible: %s', (path, html) => {
  vi.useFakeTimers();
  const hidden = vi.spyOn(document, 'hidden', 'get').mockReturnValue(false);
  mount(path, html);
  const navigate = (window as any).__snowproNavigate = vi.fn();
  const action = document.querySelector('.actions a[href^="snowpro:"]') as HTMLAnchorElement;
  // Suppress jsdom's native navigation after the runtime's capture listener.
  action.addEventListener('click', event => event.preventDefault());
  action.click();
  vi.advanceTimersByTime(1600);
  expect(navigate).toHaveBeenCalledExactlyOnceWith('https://apps.apple.com/ca/app/snow-pro/id6754150275');
  navigate.mockClear();
  action.click();
  hidden.mockReturnValue(true);
  document.dispatchEvent(new Event('visibilitychange'));
  hidden.mockReturnValue(false);
  vi.advanceTimersByTime(2000);
  expect(navigate).not.toHaveBeenCalled();
});

it('recognizes an iPad using its desktop Safari user agent', () => {
  const original = Object.getOwnPropertyDescriptor(navigator, 'maxTouchPoints');
  Object.defineProperty(navigator, 'maxTouchPoints', { configurable: true, value: 5 });
  try {
    mount(pages[0][0], pages[0][1], 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15) AppleWebKit/605.1.15 Version/18.0 Safari/605.1.15');
    expect(document.querySelector('main')?.dataset.sharePlatform).toBe('ios');
    expect((document.querySelector('a[data-platform="ios"]') as HTMLAnchorElement).hidden).toBe(false);
    expect((document.querySelector('a[data-platform="android"]') as HTMLAnchorElement).hidden).toBe(true);
    expect((document.querySelector('a[data-platform="apk"]') as HTMLAnchorElement).hidden).toBe(true);
  } finally {
    if (original) Object.defineProperty(navigator, 'maxTouchPoints', original);
    else delete (navigator as any).maxTouchPoints;
  }
});

it.each(['CN', 'CA'])('uses edge country %s ahead of a phone’s time zone for Android', country => {
  vi.spyOn(Intl, 'DateTimeFormat').mockReturnValue({ resolvedOptions: () => ({ timeZone: country === 'CN' ? 'America/Vancouver' : 'Asia/Shanghai' }) } as any);
  mount(pages[0][0], pages[0][1], android, country);
  const navigate = (window as any).__snowproNavigate = vi.fn();
  (document.querySelector('.primary') as HTMLAnchorElement).click();
  const target = country === 'CN' ? 'https://snowpro.googuar.com/download' : 'https://play.google.com/store/apps/details?id=com.googuar.snowpro';
  expect(navigate).toHaveBeenCalledWith(expect.stringContaining(`S.browser_fallback_url=${encodeURIComponent(target)};end`));
});

it('sends desktop visitors directly to downloads without trying a mobile scheme', () => {
  mount(pages[0][0], pages[0][1], 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) Chrome/126.0');
  const navigate = (window as any).__snowproNavigate = vi.fn();
  (document.querySelector('.primary') as HTMLAnchorElement).click();
  expect(navigate).toHaveBeenCalledExactlyOnceWith('https://snowpro.googuar.com/download');
});

it('retains WeChat browser guidance instead of attempting blocked navigation', () => {
  mount(pages[0][0], pages[0][1], `${safari} MicroMessenger/8.0`);
  const navigate = (window as any).__snowproNavigate = vi.fn();
  (document.querySelector('.primary') as HTMLAnchorElement).click();
  expect(document.querySelector('[role="dialog"]')).not.toBeNull();
  expect(navigate).not.toHaveBeenCalled();
});

it('validates and embeds the edge country in all four server-rendered documents', () => {
  expect(shareCountry({ 'x-vercel-ip-country': 'cn' })).toBe('CN');
  for (const invalid of ['CN\" onload=alert(1)', ['CN', 'CA'], 'unknown']) {
    expect(shareCountry({ 'x-vercel-ip-country': invalid })).toBe('');
  }
  for (const html of [
    renderCourseShareDocument(null, '1', false, true, 'CN'),
    renderInstructorDocument(null, '2', false, true, 'CN'),
    renderCarpoolDocument(tripId, '', '', false, 'carpool', 'CN'),
    renderCarpoolDocument(tripId, '', '', false, 'buddy', 'CN'),
  ]) expect(html).toContain('data-share-country="CN"');
});

it.each(['course', 'instructor', 'carpool', 'buddy'])('passes the edge country through the %s function', async kind => {
  vi.spyOn(globalThis, 'fetch').mockResolvedValue(new Response('', { status: 503 }));
  const { default: handler } = await import(`../../api/${kind}-share.ts`);
  const res = { setHeader: vi.fn(), status: vi.fn().mockReturnThis(), send: vi.fn() };
  await handler({ query: { id: kind === 'course' || kind === 'instructor' ? '1' : tripId }, headers: { 'x-vercel-ip-country': 'CN' } }, res);
  expect(res.send).toHaveBeenCalledWith(expect.stringContaining('data-share-country="CN"'));
});
