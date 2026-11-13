import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { fireEvent, screen, waitFor } from '@testing-library/dom';
import { renderCourseShareDocument } from './courseShare';
import { renderInstructorDocument } from './instructorShare';

const source = readFileSync(resolve('public/browser-open-guide.js'), 'utf8');
const safari = 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 Version/18.0 Mobile/15E148 Safari/604.1';
const wechat = `${safari} MicroMessenger/8.0`;
const runtime = () => (window as any).__snowproBrowserGuide;
let clipboardDescriptor: PropertyDescriptor | undefined;
function mount(ua = wechat, path = '/invite/instructor?code=SP-R91CQI&lang=zh', lang = 'zh') {
  vi.spyOn(navigator, 'userAgent', 'get').mockReturnValue(ua);
  window.history.replaceState({}, '', path);
  document.body.innerHTML = `<main class="course-share" data-share-language="${lang}"><a href="/" class="brand">SnowPro</a><article><div class="actions"><a href="snowpro://invite/instructor?code=SP-R91CQI">Open SnowPro</a></div><div class="downloads"><a href="https://apps.apple.com/ca/app/snow-pro/id6754150275">App Store</a></div></article></main>`;
  new Function(source)();
}
beforeEach(() => { clipboardDescriptor = Object.getOwnPropertyDescriptor(navigator, 'clipboard'); });
afterEach(() => {
  runtime()?.destroy();
  document.body.innerHTML = '';
  if (clipboardDescriptor) Object.defineProperty(navigator, 'clipboard', clipboardDescriptor);
  else delete (navigator as any).clipboard;
  vi.restoreAllMocks();
});

describe('public share browser guidance', () => {
  it('detects WeChat and intercepts app opening with accessible instructions', () => {
    mount();
    expect(screen.getByRole('button', { name: /请在浏览器中打开/ })).toBeTruthy();
    const anchor = screen.getByRole('link', { name: 'Open SnowPro' });
    expect(fireEvent.click(anchor)).toBe(false);
    expect(screen.getByRole('dialog', { name: '请在浏览器中打开' })).toBeTruthy();
    expect(screen.getByText(/点击页面右上角/)).toBeTruthy();
    expect(document.body.style.overflow).toBe('hidden');
    fireEvent.keyDown(document.activeElement!, { key: 'Escape' });
    expect(screen.queryByRole('dialog')).toBeNull();
    expect(document.body.style.overflow).toBe('');
  });
  it('preserves invitation and query parameters when copying', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, 'clipboard', { configurable: true, value: { writeText } });
    mount();
    fireEvent.click(screen.getByRole('link', { name: 'Open SnowPro' }));
    fireEvent.click(screen.getByRole('button', { name: '复制链接' }));
    await waitFor(() => expect(writeText).toHaveBeenCalledWith(window.location.href));
    await waitFor(() => expect(screen.getByRole('status').textContent).toBe('链接已复制'));
    expect(writeText.mock.calls[0][0]).toContain('code=SP-R91CQI&lang=zh');
  });
  it('offers a selectable URL if clipboard permission is denied', async () => {
    Object.defineProperty(navigator, 'clipboard', { configurable: true, value: { writeText: vi.fn().mockRejectedValue(new Error('denied')) } });
    mount();
    fireEvent.click(screen.getByRole('link', { name: 'Open SnowPro' }));
    fireEvent.click(screen.getByRole('button', { name: '复制链接' }));
    const input = await screen.findByRole('textbox', { name: '复制本页链接' });
    expect((input as HTMLTextAreaElement).value).toBe(window.location.href);
    expect(screen.getByRole('status').textContent).toContain('长按');
  });
  it('leaves Safari app links unchanged and offers a manual fallback', () => {
    mount(safari, '/invite/instructor?code=SP-R91CQI', 'en');
    expect(screen.queryByRole('button', { name: /This in-app browser/ })).toBeNull();
    expect(fireEvent.click(screen.getByRole('link', { name: 'Open SnowPro' }))).toBe(true);
    fireEvent.click(screen.getByRole('button', { name: 'Can’t open the app?' }));
    expect(screen.getByRole('dialog')).toBeTruthy();
    expect(screen.getByText(/Paste it into Safari or Chrome/)).toBeTruthy();
  });
  it('does not act on OAuth, payment or other private callback pages', () => {
    mount(wechat, '/linkstripe?state=private');
    expect(screen.queryByRole('button')).toBeNull();
    expect(fireEvent.click(screen.getByRole('link', { name: 'Open SnowPro' }))).toBe(true);
  });
  it('also guides blocked App Store and APK download taps', () => {
    mount();
    expect(fireEvent.click(screen.getByRole('link', { name: 'App Store' }))).toBe(false);
    expect(screen.getByRole('dialog')).toBeTruthy();
  });
  it('is idempotent, reacts to new share content, and falls back to English', async () => {
    mount(wechat, '/carpool/detail?id=abc', 'it');
    new Function(source)();
    expect(document.querySelectorAll('.sp-browser-hint')).toHaveLength(1);
    document.querySelector('main')!.setAttribute('data-share-language', 'zh');
    await waitFor(() => expect(screen.getByRole('button', { name: /请在浏览器中打开/ })).toBeTruthy());
    expect(document.querySelectorAll('.sp-browser-hint')).toHaveLength(1);
  });
  it('serves the same self-hosted runtime in server-rendered share documents', () => {
    for (const html of [renderCourseShareDocument(null, '1', true), renderInstructorDocument(null, '1', true)]) {
      expect(html).toContain('<script defer src="/browser-open-guide.js"></script>');
      expect(html).toContain('data-share-language="zh"');
      expect(html).not.toContain('onclick=');
    }
  });

  it('supports /buddy/detail route and adapts download buttons by device OS', () => {
    vi.spyOn(navigator, 'userAgent', 'get').mockReturnValue(safari);
    window.history.replaceState({}, '', '/buddy/detail?id=11111111-1111-4111-8111-111111111111&lang=en');
    document.body.innerHTML = `<main class="course-share" data-share-language="en"><a href="/" class="brand">SnowPro</a><article><div class="actions"><a href="snowpro://buddy/detail?id=1">Open Ski Buddy post</a></div><div class="downloads"><a class="button" data-platform="ios" href="https://apps.apple.com/ca/app/snow-pro/id6754150275">App Store · iPhone</a><a class="button" data-platform="android" href="https://play.google.com/store/apps/details?id=com.googuar.snowpro">Google Play · Android</a><a class="button" data-platform="apk" href="https://snowpro-public-bucket.googuar.com/snowpro.apk">Download APK</a></div></article></main>`;
    new Function(source)();
    const main = document.querySelector('main')!;
    expect(main.dataset.sharePlatform).toBe('ios');
    expect(screen.getByRole('button', { name: 'Can’t open the app?' })).toBeTruthy();
    const iosLink = main.querySelector('a[data-platform="ios"]') as HTMLElement;
    const androidLink = main.querySelector('a[data-platform="android"]') as HTMLElement;
    const apkLink = main.querySelector('a[data-platform="apk"]') as HTMLElement;
    expect(iosLink.hidden).toBe(false);
    expect(androidLink.hidden).toBe(true);
    expect(apkLink.hidden).toBe(true);
    const toggle = screen.getByRole('button', { name: /Other platforms/ });
    fireEvent.click(toggle);
    expect(androidLink.hidden).toBe(false);
    expect(apkLink.hidden).toBe(false);
  });

  it('shows Google Play and APK for Android devices and hides App Store until expanded', () => {
    const androidUa = 'Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 Chrome/126.0.0.0 Mobile Safari/537.36';
    vi.spyOn(navigator, 'userAgent', 'get').mockReturnValue(androidUa);
    window.history.replaceState({}, '', '/instructors/1002?lang=en');
    document.body.innerHTML = `<main class="course-share" data-share-language="en"><article><div class="actions"><a href="snowpro://instructors/1002">Open</a></div><div class="downloads"><a class="button" data-platform="ios" href="https://apps.apple.com/ca/app/snow-pro/id6754150275">App Store · iPhone</a><a class="button" data-platform="android" href="https://play.google.com/store/apps/details?id=com.googuar.snowpro">Google Play · Android</a><a class="button" data-platform="apk" href="https://snowpro-public-bucket.googuar.com/snowpro.apk">Download APK</a></div></article></main>`;
    new Function(source)();
    const main = document.querySelector('main')!;
    expect(main.dataset.sharePlatform).toBe('android');
    expect((main.querySelector('a[data-platform="ios"]') as HTMLElement).hidden).toBe(true);
    expect((main.querySelector('a[data-platform="android"]') as HTMLElement).hidden).toBe(false);
    expect((main.querySelector('a[data-platform="apk"]') as HTMLElement).hidden).toBe(false);
  });
});
