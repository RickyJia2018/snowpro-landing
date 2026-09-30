import { describe, expect, it, vi, afterEach } from 'vitest';
import { CourseShareUnavailable, fetchPublicCourse, normalizePublicCourse, renderCourseShareDocument, validCourseId } from './courseShare';
import handler from '../../api/course-share';

const apiResponse = () => ({
  course: {
    id: '9223372036854775807', status: 'published', title: 'Carving <script>bad()</script>',
    description: 'Safe & clear', coverImageUrl: 'covers/one.webp', price: 1000,
    discountPrice: 500, discountEndAt: '2020-01-01T00:00:00Z',
  },
  instructor: { nickname: 'Coach' },
  videos: [{ title: 'Lesson 1', duration: 61, isPreviewable: true, decryptKey: 'PRIVATE_SECRET' }],
});

afterEach(() => vi.restoreAllMocks());

describe('Public course sharing', () => {
  it('preserves int64 IDs and rejects malformed/overflow IDs', () => {
    expect(validCourseId('9223372036854775807')).toBe(true);
    for (const id of ['0', '-1', '01', 'abc', '9223372036854775808', '1/edit']) {
      expect(validCourseId(id)).toBe(false);
    }
  });

  it('uses live public fields, active pricing and correct safe metadata', () => {
    const course = normalizePublicCourse(apiResponse(), '9223372036854775807')!;
    expect(course.price).toBe(1000);
    const html = renderCourseShareDocument(course, course.id, false);
    expect(html).toContain('og:title');
    expect(html).toContain('Carving &lt;script&gt;bad()&lt;/script&gt;');
    expect(html).not.toContain('<script>bad()');
    expect(html).not.toContain('PRIVATE_SECRET');
    expect(html).toContain('snowpro://courses/9223372036854775807');
    expect(html).toContain('app-id=6754150275');
    expect(html).toContain('Free preview');
    expect(html).toContain('covers/one.webp');
  });

  it('does not show unpublished courses or wrong course identities', () => {
    const response = apiResponse();
    response.course.status = 'pending_review';
    expect(normalizePublicCourse(response, response.course.id)).toBeNull();
    expect(normalizePublicCourse(apiResponse(), '1')).toBeNull();
  });

  it('rejects unsafe image URLs', () => {
    const response = apiResponse();
    response.course.coverImageUrl = 'javascript:alert(1)';
    expect(normalizePublicCourse(response, response.course.id)?.cover).toBe('');
  });

  it('requests published detail without credentials and handles unavailable courses', async () => {
    const fetch = vi.spyOn(globalThis, 'fetch').mockResolvedValue(new Response(JSON.stringify(apiResponse())));
    await fetchPublicCourse('9223372036854775807', 'https://api.example');
    const [url, options] = fetch.mock.calls[0];
    expect(String(url)).toContain('include_detail=true');
    expect(options?.headers).toEqual({ Accept: 'application/json' });
    fetch.mockResolvedValue(new Response('', { status: 404 }));
    await expect(fetchPublicCourse('1', 'https://api.example')).rejects.toBeInstanceOf(CourseShareUnavailable);
  });

  it.each([404, 503])('server response keeps useful fallback and correct HTTP status %s', async status => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(new Response('', { status }));
    const send = vi.fn();
    const setHeader = vi.fn();
    const res: any = { setHeader, send, status: vi.fn().mockReturnThis() };
    await handler({ query: { id: '1' }, headers: { 'accept-language': 'zh-CN' } }, res);
    expect(res.status).toHaveBeenCalledWith(status);
    expect(send.mock.calls[0][0]).toContain('noindex');
    expect(send.mock.calls[0][0]).toContain('App Store');
    expect(setHeader).toHaveBeenCalledWith('Cache-Control', 'no-store');
  });

  it('server renders metadata and content for social crawlers without JavaScript', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(new Response(JSON.stringify(apiResponse())));
    const res: any = { setHeader: vi.fn(), send: vi.fn(), status: vi.fn().mockReturnThis() };
    await handler({ query: { id: '9223372036854775807' }, headers: {} }, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send.mock.calls[0][0]).toContain('<h1>Carving');
    expect(res.send.mock.calls[0][0]).toContain('og:image');
  });
});
