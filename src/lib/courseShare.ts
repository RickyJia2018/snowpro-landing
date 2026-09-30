export const COURSE_SHARE_ORIGIN = 'https://snowpro.googuar.com';
export const IOS_DOWNLOAD_URL = 'https://apps.apple.com/app/id6754150275';
export const ANDROID_DOWNLOAD_URL = 'https://snowpro-public-bucket.googuar.com/snowpro.apk';

export type PublicCourse = {
  id: string;
  title: string;
  description: string;
  cover: string;
  instructor: string;
  price: number;
  videos: { title: string; duration: number; preview: boolean }[];
};

export function validCourseId(value: unknown): value is string {
  return typeof value === 'string' && /^[1-9][0-9]*$/.test(value) &&
    value.length <= 19 && BigInt(value) <= 9223372036854775807n;
}

export function courseUrl(id: string): string {
  if (!validCourseId(id)) throw new Error('Invalid course ID');
  return `${COURSE_SHARE_ORIGIN}/courses/${id}`;
}

export function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[char]!));
}

function publicImage(value: unknown): string {
  if (typeof value !== 'string' || !value) return '';
  try {
    const url = new URL(value, 'https://snowpro-public-bucket.googuar.com/');
    return url.protocol === 'https:' && !url.username && !url.password ? url.href : '';
  } catch { return ''; }
}

function timestamp(value: unknown): number | null {
  if (typeof value !== 'string' || !value) return null;
  const time = Date.parse(value);
  return Number.isFinite(time) ? time : null;
}

// Pick only public presentation fields. Never serialize the raw API response.
export function normalizePublicCourse(data: any, id: string, now = Date.now()): PublicCourse | null {
  const course = data?.course;
  if (!course || course.status !== 'published' || String(course.id) !== id) return null;
  const original = Number(course.price);
  const discount = Number(course.discountPrice ?? course.discount_price);
  const startValue = course.discountStartAt ?? course.discount_start_at;
  const endValue = course.discountEndAt ?? course.discount_end_at;
  const start = timestamp(startValue);
  const end = timestamp(endValue);
  const activeDiscount = Number.isInteger(discount) && discount >= 0 && discount < original &&
    (!startValue || (start !== null && start <= now)) &&
    (!endValue || (end !== null && end >= now));
  return {
    id,
    title: String(course.title || 'Snow Pro Course'),
    description: String(course.description || ''),
    cover: publicImage(course.coverImageUrl ?? course.cover_image_url),
    instructor: String(data.instructor?.nickname || course.instructorNickname || course.instructor_nickname || ''),
    price: Math.max(0, Number.isFinite(original) ? (activeDiscount ? discount : original) : 0),
    videos: (Array.isArray(data.videos) ? data.videos : [])
      .filter((video: any) => !(video.isArchived ?? video.is_archived))
      .map((video: any) => ({
        title: String(video.title || ''),
        duration: Math.max(0, Number(video.duration) || 0),
        preview: Boolean(video.isPreviewable ?? video.is_previewable),
      })),
  };
}

export class CourseShareUnavailable extends Error {
  status: number;
  constructor(status: number) {
    super('Course unavailable');
    this.status = status;
  }
}

export async function fetchPublicCourse(
  id: string, apiBase: string, signal?: AbortSignal,
): Promise<PublicCourse> {
  if (!validCourseId(id)) throw new CourseShareUnavailable(404);
  const url = new URL('/get_course', apiBase);
  url.search = new URLSearchParams({ id, include_detail: 'true' }).toString();
  const response = await fetch(url, { signal, headers: { Accept: 'application/json' } });
  if (!response.ok) throw new CourseShareUnavailable(response.status === 404 ? 404 : 503);
  const course = normalizePublicCourse(await response.json(), id);
  if (!course) throw new CourseShareUnavailable(404);
  return course;
}

export const courseShareStyles = `
  *{box-sizing:border-box}body{margin:0;background:#020617;color:#f1f5f9;font-family:system-ui,-apple-system,sans-serif;line-height:1.6}
  .course-share{max-width:880px;margin:auto;padding:28px 20px 48px}
  .course-share a{color:#93c5fd}.course-share a:focus-visible{outline:3px solid #60a5fa;outline-offset:4px}
  .course-share .brand{display:inline-flex;align-items:center;min-height:44px;text-decoration:none;font-weight:700;margin-bottom:20px}
  .course-share article{border:1px solid #334155;border-radius:24px;overflow:hidden;background:#0f172a}
  .course-share .cover{width:100%;height:auto;aspect-ratio:16/9;object-fit:cover;display:block;background:#1e293b}
  .course-share .cover-placeholder{aspect-ratio:16/9;display:grid;place-items:center;background:#1e293b;font-size:32px;font-weight:700}
  .course-share .content{padding:28px}.course-share h1{font-size:clamp(26px,5vw,38px);line-height:1.25;margin:8px 0 16px;overflow-wrap:anywhere}
  .course-share h2{font-size:20px;margin-top:28px}.course-share .muted{color:#cbd5e1}.course-share .description{white-space:pre-wrap;overflow-wrap:anywhere}
  .course-share .price{font-size:22px;font-weight:700}.course-share .actions{display:flex;flex-wrap:wrap;gap:12px;margin:24px 0}
  .course-share .button{display:inline-flex;justify-content:center;align-items:center;min-height:48px;padding:10px 20px;border-radius:12px;text-decoration:none;border:1px solid #475569;font-weight:600}
  .course-share .primary{background:#2563eb;color:white;border-color:#2563eb;flex:1}.course-share .button:hover{filter:brightness(1.15)}
  .course-share .downloads{display:flex;gap:12px;flex-wrap:wrap}.course-share ol{padding-left:24px}.course-share li{margin-bottom:12px}
  .course-share .badge{font-size:14px;color:#bfdbfe;margin-left:8px}.course-share .hint{padding:16px;background:#1e293b;border-radius:12px}
  .course-share footer{margin-top:24px;font-size:14px}.course-share .error{padding:32px 0}
  @media(max-width:480px){.course-share{padding:16px 12px 32px}.course-share .content{padding:20px}.course-share .downloads .button{flex:1}}
`;

export function renderCourseShare(course: PublicCourse | null, zh: boolean, unavailable = false): string {
  const label = (cn: string, en: string) => zh ? cn : en;
  const actions = `<section aria-label="${label('下载 App', 'Download app')}">
    <h2>${label('下载 Snow Pro', 'Download Snow Pro')}</h2>
    <div class="downloads">
      <a class="button" href="${IOS_DOWNLOAD_URL}">App Store · iPhone</a>
      <a class="button" href="${ANDROID_DOWNLOAD_URL}">Android · APK</a>
    </div>
    <p class="muted">${label('安装后返回这条分享链接，即可打开该课程。', 'After installing, return to this shared link to open the course.')}</p>
  </section>`;
  if (!course) return `<main class="course-share"><a class="brand" href="/">Snow Pro</a>
    <div class="error" role="alert"><h1>${unavailable ? label('课程暂不可查看', 'Course unavailable') : label('暂时无法加载课程', 'Unable to load course')}</h1>
    <p class="muted">${unavailable ? label('课程可能已下架，或分享链接无效。', 'The course may no longer be published, or the link is invalid.') : label('请稍后刷新页面重试。', 'Please refresh this page to try again.')}</p></div>${actions}</main>`;
  const safe = escapeHtml;
  return `<main class="course-share">
    <a class="brand" href="/">Snow Pro</a>
    <article>
      ${course.cover ? `<img class="cover" src="${safe(course.cover)}" alt="${safe(course.title)}" width="880" height="495">` : '<div class="cover-placeholder" aria-hidden="true">Snow Pro</div>'}
      <div class="content">
        <p class="muted">${label('滑雪视频课程', 'Ski & snowboard video course')}</p>
        <h1>${safe(course.title)}</h1>
        ${course.instructor ? `<p class="muted">${label('教练', 'Instructor')} · ${safe(course.instructor)}</p>` : ''}
        <p class="price">${course.price === 0 ? label('免费课程', 'Free course') : `${(course.price / 100).toFixed(2)} Tokens`}</p>
        <div class="actions"><a class="button primary" href="snowpro://courses/${course.id}">${label('在 Snow Pro 中打开课程', 'Open course in Snow Pro')}</a></div>
        <p class="hint">${label('如果微信或其他 App 内置浏览器无法打开，请从右上角菜单选择“在浏览器中打开”。', 'If an in-app browser cannot open Snow Pro, choose “Open in browser” from its menu.')}</p>
        <h2>${label('课程简介', 'About this course')}</h2>
        <div class="description">${safe(course.description)}</div>
        ${course.videos.length ? `<h2>${label('课程章节', 'Lessons')} · ${course.videos.length}</h2><ol>${course.videos.map(video => `<li>${safe(video.title)} <span class="muted">${Math.ceil(video.duration / 60)} min</span>${video.preview ? `<span class="badge">${label('免费试看', 'Free preview')}</span>` : ''}</li>`).join('')}</ol>` : ''}
        ${actions}
      </div>
    </article>
    <footer class="muted">${label('课程学习、免费试看和购买请在 Snow Pro App 内完成。', 'Learn, watch free previews, and purchase in the Snow Pro app.')}</footer>
  </main>`;
}

// Server-rendered metadata lets chat/social crawlers see the actual course.
export function renderCourseShareDocument(course: PublicCourse | null, id: string, zh: boolean, unavailable = false): string {
  const title = course ? `${course.title} · Snow Pro` : 'Snow Pro · Course';
  const description = course?.description.slice(0, 200) || 'Discover ski and snowboard courses on Snow Pro.';
  const canonical = validCourseId(id) ? courseUrl(id) : COURSE_SHARE_ORIGIN;
  const safe = escapeHtml;
  return `<!doctype html><html lang="${zh ? 'zh-CN' : 'en'}"><head>
    <meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${safe(title)}</title><meta name="description" content="${safe(description)}">
    <link rel="canonical" href="${canonical}">
    <meta property="og:type" content="website"><meta property="og:site_name" content="Snow Pro">
    <meta property="og:title" content="${safe(title)}"><meta property="og:description" content="${safe(description)}">
    <meta property="og:url" content="${canonical}">
    <meta property="og:image" content="${safe(course?.cover || COURSE_SHARE_ORIGIN + '/logo_icon.png')}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="apple-itunes-app" content="app-id=6754150275, app-argument=${canonical}">
    ${course ? '' : '<meta name="robots" content="noindex">'}
    <style>${courseShareStyles}</style>
  </head><body>${renderCourseShare(course, zh, unavailable)}</body></html>`;
}
