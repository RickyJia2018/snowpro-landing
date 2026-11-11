import { expect, it, vi } from 'vitest';
import handler from '../../api/carpool-share';

const id = '11111111-1111-4111-8111-111111111111';
function response(query: Record<string, string | string[]>) {
  const res = { setHeader: vi.fn(), status: vi.fn().mockReturnThis(), send: vi.fn() };
  handler({ query, headers: {} }, res);
  return { res, html: res.send.mock.calls[0][0] as string };
}
it('serves resort-only title, date and area plus app icon without JavaScript', () => {
  const { res, html } = response({ id, title: 'Mt Seymour', description: '11月23日 07:25 · 本拿比', lang: 'zh' });
  expect(res.status).toHaveBeenCalledWith(200);
  expect(html).toContain('<meta property="og:title" content="Mt Seymour">');
  expect(html).toContain('<meta property="og:description" content="11月23日 07:25 · 本拿比">');
  expect(html).toContain('https://snowpro.googuar.com/logo_icon.png');
  expect(html).toContain(`snowpro://carpool/detail?id=${id}`);
  expect(html).toContain('Google Play · Android');
  expect(html).toContain('直接下载 APK');
  expect(html).toContain('browser-open-guide.js');
  expect(html).not.toContain('拼车去');
});
it('retains app and download entry points for old links', () => {
  const { html } = response({ id });
  expect(html).toContain('Open carpool trip');
  expect(html).toContain('Download APK');
});
it('escapes preview labels and rejects invalid or repeated trip IDs', () => {
  const { html } = response({ id, title: '"><script>alert(1)</script>', description: '<img src=x onerror=alert(1)>' });
  expect(html).not.toContain('<script>alert(1)</script>');
  expect(html).not.toContain('<img src=x');
  for (const invalid of ['bad', '00000000-0000-0000-0000-000000000000', [id, id]]) {
    const result = response({ id: invalid });
    expect(result.res.status).toHaveBeenCalledWith(404);
    expect(result.html).not.toContain('href="snowpro://');
  }
});

it('opens the exact Ski Buddy post from its poster link', async () => {
  const { default: buddyHandler } = await import('../../api/buddy-share');
  const res = { setHeader: vi.fn(), status: vi.fn().mockReturnThis(), send: vi.fn() };
  buddyHandler({ query: { id, title: 'Mt Seymour', description: 'Nov 23' }, headers: {} }, res);
  expect(res.status).toHaveBeenCalledWith(200);
  const html = res.send.mock.calls[0][0] as string;
  expect(html).toContain(`snowpro://buddy/detail?id=${id}`);
  expect(html).toContain('Open Ski Buddy post');
  expect(html).toContain('<meta property="og:title" content="Mt Seymour">');
  expect(html).not.toContain('snowpro://carpool');
});
