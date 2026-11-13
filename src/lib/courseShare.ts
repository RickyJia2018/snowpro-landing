export const COURSE_SHARE_ORIGIN = 'https://snowpro.googuar.com';
export const ANDROID_APK_DOWNLOAD_URL = 'https://snowpro-public-bucket.googuar.com/snowpro.apk';
export const IOS_DOWNLOAD_URL = 'https://apps.apple.com/ca/app/snow-pro/id6754150275';
export const ANDROID_PLAY_DOWNLOAD_URL = 'https://play.google.com/store/apps/details?id=com.googuar.snowpro';

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
    title: String(course.title || 'SnowPro Course'),
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

const MONTHS_EN = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Convert sender-formatted Chinese date previews (e.g. "12月5日 ~ 12月7日 (3天)") when viewed in English.
export function localizePreviewText(text: string, zh: boolean): string {
  if (zh || !text) return text;
  return text
    .replace(/(1[0-2]|[1-9])月(3[01]|[12][0-9]|[1-9])日/g, (_, m, d) => `${MONTHS_EN[Number(m) - 1]} ${d}`)
    .replace(/\((\d+)\s*天\)/g, (_, d) => `(${d} ${Number(d) === 1 ? 'day' : 'days'})`);
}

export const shareIcons = {
  star: '<svg viewBox="0 0 20 20" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M10 1.7l2.47 5.01 5.53.8-4 3.9.94 5.51L10 14.3l-4.94 2.62.94-5.51-4-3.9 5.53-.8L10 1.7z"/></svg>',
  pin: '<svg viewBox="0 0 20 20" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 17.5s5.5-4.4 5.5-9A5.5 5.5 0 0 0 4.5 8.5c0 4.6 5.5 9 5.5 9z"/><circle cx="10" cy="8.5" r="1.8"/></svg>',
  globe: '<svg viewBox="0 0 20 20" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="10" cy="10" r="7.5"/><path d="M2.8 10h14.4M10 2.5a11 11 0 0 1 0 15M10 2.5a11 11 0 0 0 0 15"/></svg>',
  clock: '<svg viewBox="0 0 20 20" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="10" cy="10" r="7.5"/><path d="M10 6v4.3l2.8 1.7"/></svg>',
  mountain: '<svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2.5 16L8 6.5l3.3 5.5 2.2-3.3L17.5 16H2.5z"/></svg>',
  calendar: '<svg viewBox="0 0 20 20" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4.5" width="14" height="12.5" rx="2"/><path d="M6.5 2.5v3M13.5 2.5v3M3 8.5h14"/></svg>',
};

export function renderShareHeader(zh: boolean, langSwitchHref = ''): string {
  const switchHref = langSwitchHref || `?lang=${zh ? 'en' : 'zh'}`;
  return `<header class="topbar"><a class="brand" href="/"><img class="brand-icon" src="/logo_icon.png" alt="" width="28" height="28"><span>SnowPro</span></a><a class="lang-switch" href="${escapeHtml(switchHref)}">${zh ? 'EN' : '中文'}</a></header>`;
}

export function renderDownloadSection(zh: boolean, note: string, showNote = true): string {
  const label = (cn: string, en: string) => zh ? cn : en;
  return `<section class="download-section" aria-label="${label('下载 App', 'Download app')}">
    <div class="download-head"><h2>${label('获取 SnowPro App', 'Download SnowPro')}</h2></div>
    <div class="downloads">
      <a class="button download-btn" data-platform="ios" href="${IOS_DOWNLOAD_URL}">App Store · iPhone</a>
      <a class="button download-btn" data-platform="android" href="${ANDROID_PLAY_DOWNLOAD_URL}">Google Play · Android</a>
      <a class="button download-btn" data-platform="apk" href="${ANDROID_APK_DOWNLOAD_URL}">${label('直接下载 APK', 'Download APK')}</a>
    </div>
    ${showNote ? `<p class="download-note muted">${escapeHtml(note)}</p>` : ''}
  </section>`;
}

// Runtime/SSR CSS bypasses the site's PostCSS cascade-layer transform.
// Match its reset specificity so React fallback pages keep the same spacing.
export const SHARE_PAGE_SELECTOR = '.course-share:not(#snowpro-share-reset):not(#snowpro-share-reset)';
export const courseShareStyles = `
  *{box-sizing:border-box}
  body{margin:0;background:#020617;background-image:radial-gradient(ellipse 80% 45% at 50% -10%,rgba(56,189,248,0.14),transparent 70%);color:#f1f5f9;font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;line-height:1.55;-webkit-font-smoothing:antialiased}
  .course-share{max-width:560px;margin:auto;padding:calc(env(safe-area-inset-top,0px) + 18px) 18px calc(env(safe-area-inset-bottom,0px) + 40px)}
  .course-share [hidden]{display:none!important}
  .course-share a{color:#93c5fd}.course-share a:focus-visible,.course-share button:focus-visible,.course-share summary:focus-visible{outline:2px solid #60a5fa;outline-offset:3px}
  .course-share .topbar{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:14px;min-height:40px}
  .course-share .brand{display:inline-flex;align-items:center;gap:10px;min-height:36px;text-decoration:none;font-weight:700;font-size:17px;letter-spacing:-0.01em;color:#f8fafc}
  .course-share .brand-icon{width:28px;height:28px;border-radius:8px;object-fit:cover;display:block;border:1px solid rgba(148,163,184,0.25);background:#0f172a}
  .course-share .lang-switch{display:inline-flex;align-items:center;justify-content:center;min-height:30px;padding:4px 12px;border-radius:999px;border:1px solid rgba(148,163,184,0.24);background:rgba(15,23,42,0.8);color:#cbd5e1;text-decoration:none;font-size:12px;font-weight:600;transition:border-color .15s,color .15s}
  .course-share .lang-switch:hover{border-color:#60a5fa;color:#f8fafc}
  .course-share article{border:1px solid rgba(148,163,184,0.18);border-radius:22px;overflow:hidden;background:linear-gradient(180deg,#0f172a 0%,#0b1222 100%);box-shadow:0 20px 50px rgba(2,6,23,0.65)}
  .course-share .cover{width:100%;height:auto;aspect-ratio:16/9;object-fit:cover;display:block;background:#1e293b}
  .course-share .cover-placeholder{aspect-ratio:16/9;display:grid;place-items:center;background:linear-gradient(135deg,#0f172a,#1e293b);font-size:28px;font-weight:700;color:#93c5fd}
  .course-share .content{padding:24px}
  .course-share .eyebrow{display:inline-flex;align-items:center;gap:6px;padding:4px 10px;border-radius:999px;background:rgba(56,189,248,0.12);border:1px solid rgba(56,189,248,0.25);color:#7dd3fc;font-size:12px;font-weight:600;margin:0 0 10px}
  .course-share h1{font-size:clamp(22px,4.5vw,30px);line-height:1.25;font-weight:700;letter-spacing:-0.015em;margin:4px 0 10px;color:#f8fafc;overflow-wrap:anywhere}
  .course-share h2{font-size:15px;font-weight:600;color:#e2e8f0;margin:20px 0 8px;letter-spacing:0.01em}
  .course-share p{margin:8px 0}
  .course-share .muted{color:#94a3b8;font-size:14px}
  .course-share .description{white-space:pre-wrap;overflow-wrap:anywhere;color:#cbd5e1;font-size:15px;line-height:1.6}
  .course-share .offer-box{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px 16px;margin:18px 0 0;padding:14px 16px;border-radius:14px;background:rgba(30,41,59,0.55);border:1px solid rgba(148,163,184,0.16)}
  .course-share .price{font-size:20px;font-weight:700;color:#f8fafc;margin:0}
  .course-share .offer-note{color:#94a3b8;font-size:13px;margin:0}
  .course-share .actions{display:flex;flex-wrap:wrap;gap:10px;margin:18px 0 6px}
  .course-share .button{display:inline-flex;justify-content:center;align-items:center;gap:8px;min-height:46px;padding:10px 16px;border-radius:12px;text-decoration:none;border:1px solid rgba(148,163,184,0.26);background:rgba(30,41,59,0.45);color:#e2e8f0;font-weight:600;font-size:14px;transition:transform .15s,filter .15s,border-color .15s}
  .course-share .button:hover{filter:brightness(1.12);border-color:rgba(148,163,184,0.45)}
  .course-share .primary{background:linear-gradient(135deg,#2563eb 0%,#0284c7 100%);color:white;border-color:transparent;flex:1;min-height:48px;font-size:15px;box-shadow:0 8px 24px rgba(37,99,235,0.28)}
  .course-share .download-section{margin-top:20px;padding-top:18px;border-top:1px solid rgba(148,163,184,0.14)}
  .course-share .download-section h2{margin:0 0 10px;font-size:13px;font-weight:600;color:#94a3b8;text-transform:uppercase;letter-spacing:0.04em}
  .course-share .downloads{display:grid;grid-template-columns:repeat(auto-fit,minmax(148px,1fr));gap:8px}
  .course-share .download-btn{white-space:nowrap;min-height:42px;padding:8px 12px;font-size:13px}
  .course-share .download-note{font-size:13px;margin:10px 0 0}
  .course-share .lessons{padding:0;margin:8px 0 0;list-style:none;display:grid;gap:8px}
  .course-share .lesson-item{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:10px 12px;border-radius:10px;background:rgba(15,23,42,0.6);border:1px solid rgba(148,163,184,0.12);font-size:14px}
  .course-share .lesson-main{display:flex;align-items:center;gap:8px;min-width:0;flex:1}
  .course-share .lesson-idx{flex:none;width:22px;height:22px;border-radius:6px;background:rgba(56,189,248,0.12);color:#7dd3fc;display:grid;place-items:center;font-size:12px;font-weight:700}
  .course-share .lesson-title{color:#e2e8f0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
  .course-share .lesson-meta{display:flex;align-items:center;gap:8px;flex:none;font-size:12px;color:#94a3b8}
  .course-share .badge{font-size:11px;font-weight:600;padding:2px 7px;border-radius:999px;background:rgba(56,189,248,0.15);color:#7dd3fc;border:1px solid rgba(56,189,248,0.28)}
  .course-share .more-lessons{margin-top:8px}
  .course-share .more-lessons summary{cursor:pointer;color:#93c5fd;font-size:13px;font-weight:600;padding:6px 0;list-style:none}
  .course-share .more-lessons summary::-webkit-details-marker{display:none}
  .course-share .summary-card{margin:14px 0 6px;padding:16px;border-radius:16px;background:rgba(30,41,59,0.55);border:1px solid rgba(148,163,184,0.18);display:grid;gap:8px}
  .course-share .summary-row{display:flex;align-items:center;gap:10px;color:#f1f5f9;font-weight:600;font-size:16px}
  .course-share .summary-sub{display:flex;align-items:center;gap:8px;color:#cbd5e1;font-size:14px}
  .course-share .summary-row svg,.course-share .summary-sub svg{flex:none;color:#7dd3fc}
  .course-share footer{margin-top:16px;text-align:center;font-size:12px;color:#64748b}
  .course-share .error{padding:16px 0}
  @media(max-width:480px){
    .course-share{padding:calc(env(safe-area-inset-top,0px) + 14px) 14px calc(env(safe-area-inset-bottom,0px) + 28px)}
    .course-share .content{padding:20px 18px}
    .course-share .downloads{grid-template-columns:1fr}
  }
`.replaceAll('.course-share', SHARE_PAGE_SELECTOR);

function renderLessonItem(video: { title: string; duration: number; preview: boolean }, index: number, zh: boolean): string {
  const safe = escapeHtml;
  const label = (cn: string, en: string) => zh ? cn : en;
  const mins = video.duration > 0 ? Math.ceil(video.duration / 60) : 0;
  return `<li class="lesson-item"><span class="lesson-main"><span class="lesson-idx">${index + 1}</span><span class="lesson-title">${safe(video.title)}</span></span><span class="lesson-meta">${video.preview ? `<span class="badge">${label('免费试看', 'Free preview')}</span>` : ''}${mins > 0 ? `<span>${mins} min</span>` : ''}</span></li>`;
}

export function renderCourseShare(course: PublicCourse | null, zh: boolean, unavailable = false, requestedId = ''): string {
  const label = (cn: string, en: string) => zh ? cn : en;
  const appId = course?.id || (validCourseId(requestedId) ? requestedId : '');
  const langHref = appId ? `/courses/${appId}?lang=${zh ? 'en' : 'zh'}` : `?lang=${zh ? 'en' : 'zh'}`;
  const actions = renderDownloadSection(zh, label('安装后返回这条分享链接，即可打开该课程。', 'After installing, return to this shared link to open the course.'));
  const openApp = appId ? `<div class="actions"><a class="button primary" href="snowpro://courses/${appId}">${label('在 SnowPro 中打开课程', 'Open course in SnowPro')}</a></div>` : '';
  if (!course) return `<main data-share-language="${zh ? 'zh' : 'en'}" class="course-share">${renderShareHeader(zh, langHref)}<article><div class="content">
    <div class="error" role="alert"><h1>${unavailable ? label('课程暂不可查看', 'Course unavailable') : label('暂时无法加载课程', 'Unable to load course')}</h1>
    <p class="muted">${unavailable ? label('课程可能已下架，或分享链接无效。', 'The course may no longer be published, or the link is invalid.') : label('请稍后刷新页面重试。', 'Please refresh this page to try again.')}</p></div>${openApp}${actions}</div></article></main>`;
  const safe = escapeHtml;
  const visibleLessons = course.videos.slice(0, 4);
  const extraLessons = course.videos.slice(4);
  const lessonsHtml = course.videos.length ? `<h2>${label('课程章节', 'Lessons')} · ${course.videos.length}</h2>
    <ol class="lessons">${visibleLessons.map((video, i) => renderLessonItem(video, i, zh)).join('')}</ol>
    ${extraLessons.length ? `<details class="more-lessons"><summary>${label(`查看全部 ${course.videos.length} 节课程`, `View all ${course.videos.length} lessons`)}</summary><ol class="lessons">${extraLessons.map((video, i) => renderLessonItem(video, i + 4, zh)).join('')}</ol></details>` : ''}` : '';
  return `<main data-share-language="${zh ? 'zh' : 'en'}" class="course-share">
    ${renderShareHeader(zh, langHref)}
    <article>
      ${course.cover ? `<img class="cover" src="${safe(course.cover)}" alt="${safe(course.title)}" width="880" height="495">` : '<div class="cover-placeholder" aria-hidden="true">SnowPro</div>'}
      <div class="content">
        <span class="eyebrow">${label('滑雪视频课程', 'Ski & snowboard video course')}</span>
        <h1>${safe(course.title)}</h1>
        ${course.instructor ? `<p class="muted">${label('教练', 'Instructor')} · ${safe(course.instructor)}</p>` : ''}
        <div class="offer-box">
          <p class="price">${course.price === 0 ? label('免费课程', 'Free course') : `${(course.price / 100).toFixed(2)} ${label('雪币', 'Snow Coins')}`}</p>
          <p class="offer-note">${label('App 内支持试看与学习', 'Watch & learn in SnowPro')}</p>
        </div>
        <div class="actions"><a class="button primary" href="snowpro://courses/${course.id}">${label('在 SnowPro 中打开课程', 'Open course in SnowPro')}</a></div>
        ${course.description ? `<h2>${label('课程简介', 'About this course')}</h2><div class="description">${safe(course.description)}</div>` : ''}
        ${lessonsHtml}
        ${actions}
      </div>
    </article>
    <footer>${label('课程学习、免费试看和购买请在 SnowPro App 内完成。', 'Learn, watch free previews, and purchase in the SnowPro app.')}</footer>
  </main>`;
}

// Server-rendered metadata lets chat/social crawlers see the actual course.
export function renderCourseShareDocument(course: PublicCourse | null, id: string, zh: boolean, unavailable = false): string {
  const title = course ? `${course.title} · SnowPro` : 'SnowPro · Course';
  const description = (course ? [course.instructor, course.description].filter(Boolean)
    .join(' · ').replace(/\s+/g, ' ').slice(0, 200) : '') || 'Discover ski and snowboard courses on SnowPro.';
  const thumbnail = course?.cover || COURSE_SHARE_ORIGIN + '/logo_icon.png';
  const canonical = validCourseId(id) ? courseUrl(id) : COURSE_SHARE_ORIGIN;
  const safe = escapeHtml;
  return `<!doctype html><html lang="${zh ? 'zh-CN' : 'en'}"><head>
    <meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
    <title>${safe(title)}</title><meta name="description" content="${safe(description)}">
    <link rel="canonical" href="${canonical}">
    <meta property="og:type" content="website"><meta property="og:site_name" content="SnowPro">
    <meta property="og:title" content="${safe(title)}"><meta property="og:description" content="${safe(description)}">
    <meta property="og:url" content="${canonical}">
    <meta property="og:image" content="${safe(thumbnail)}">
    <meta property="og:image:secure_url" content="${safe(thumbnail)}">
    <link rel="icon" href="/logo_icon.png"><link rel="apple-touch-icon" href="/logo_icon.png">
    <meta name="twitter:title" content="${safe(title)}"><meta name="twitter:description" content="${safe(description)}">
    <meta name="twitter:image" content="${safe(thumbnail)}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="apple-itunes-app" content="app-id=6754150275, app-argument=${canonical}">
    ${course ? '' : '<meta name="robots" content="noindex">'}
    <style>${courseShareStyles}</style>
  <script defer src="/browser-open-guide.js"></script></head><body>${renderCourseShare(course, zh, unavailable, id)}</body></html>`;
}
