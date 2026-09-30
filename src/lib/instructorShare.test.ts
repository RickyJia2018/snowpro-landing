import { afterEach, describe, expect, it, vi } from 'vitest';
import { fetchSharedInstructor, normalizeInstructor, renderInstructorDocument } from './instructorShare';
import handler from '../../api/instructor-share';

const response = () => ({ instructor: { userId: '9223372036854775807', username: 'Coach <script>alert(1)</script>', selfIntro: 'Ski & snowboard', price: 12000, star: 45, totalReviews: 20, active: true, avatarUrl: 'https://images.example/avatar.png', media: ['https://images.example/cover.png'], privateNotes: 'PRIVATE' }, certificates: [{ acronym: 'CASI', level: 2, status: 1, proveImage: 'SECRET_PROOF' }, { acronym: 'REJECTED', status: 2 }] });
afterEach(() => vi.restoreAllMocks());

describe('Instructor sharing', () => {
  it('renders safe public metadata, price, certificates and correct app destination', () => {
    const coach = normalizeInstructor(response(), '9223372036854775807')!;
    const html = renderInstructorDocument(coach, coach.id, true);
    expect(html).toContain('¥120.00');
    expect(html).toContain('4.5 / 5');
    expect(html).toContain('CASI 2');
    expect(html).toContain('og:title');
    expect(html).toContain('Coach &lt;script&gt;');
    expect(html).not.toContain('<script>alert');
    expect(html).not.toContain('SECRET_PROOF');
    expect(html).not.toContain('PRIVATE');
    expect(html).not.toContain('REJECTED');
    expect(html).toContain('snowpro://instructors/9223372036854775807');
    expect(html).toContain('app-argument=https://snowpro.googuar.com/instructors/9223372036854775807');
  });
  it('rejects malformed IDs, wrong identities and unsafe images', () => {
    expect(normalizeInstructor(response(), '1')).toBeNull();
    expect(normalizeInstructor(response(), '9223372036854775808')).toBeNull();
    const data = response();
    data.instructor.avatarUrl = 'javascript:alert(1)';
    data.instructor.media = ['data:text/html,evil'];
    const coach = normalizeInstructor(data, data.instructor.userId)!;
    expect(coach.avatar).toBe('');
    expect(coach.cover).toBe('');
  });
  it('only requests public data without auth', async () => {
    const fetch = vi.spyOn(globalThis, 'fetch').mockResolvedValue(new Response(JSON.stringify(response())));
    await fetchSharedInstructor('9223372036854775807', 'https://api.example');
    expect(String(fetch.mock.calls[0][0])).toBe('https://api.example/v1/public/instructors/9223372036854775807');
    expect(fetch.mock.calls[0][1]?.headers).toEqual({ Accept: 'application/json' });
  });
  it.each([404, 503])('keeps downloads visible when server returns %s', async code => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(new Response('', { status: code }));
    const res: any = { setHeader: vi.fn(), status: vi.fn().mockReturnThis(), send: vi.fn() };
    await handler({ query: { id: '1' }, headers: {} }, res);
    expect(res.status).toHaveBeenCalledWith(code);
    expect(res.send.mock.calls[0][0]).toContain('noindex');
    expect(res.send.mock.calls[0][0]).toContain('App Store');
  });
  it('serves crawler-ready HTML on success and does not fetch invalid IDs', async () => {
    const fetch = vi.spyOn(globalThis, 'fetch').mockResolvedValue(new Response(JSON.stringify(response())));
    const res: any = { setHeader: vi.fn(), status: vi.fn().mockReturnThis(), send: vi.fn() };
    await handler({ query: { id: '9223372036854775807' }, headers: {} }, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send.mock.calls[0][0]).toContain('og:image');
    fetch.mockClear();
    await handler({ query: { id: 'bad' }, headers: {} }, res);
    expect(res.status).toHaveBeenCalledWith(404);
    expect(fetch).not.toHaveBeenCalled();
  });
});
