import { ANDROID_DOWNLOAD_URL, COURSE_SHARE_ORIGIN, IOS_DOWNLOAD_URL, CourseShareUnavailable, courseShareStyles, escapeHtml, validCourseId } from './courseShare';

export type SharedInstructor = {
  id: string; name: string; intro: string; avatar: string; cover: string;
  price: number; active: boolean; reviews: number; rating: number;
  certificates: string[];
  base: string; tags: string[]; teachingSince: number; skiingSince: number;
};

function image(value: unknown): string {
  if (typeof value !== 'string') return '';
  try {
    const url = new URL(value);
    return url.protocol === 'https:' && !url.username && !url.password ? url.href : '';
  } catch { return ''; }
}

export function normalizeInstructor(data: any, id: string): SharedInstructor | null {
  const raw = data?.instructor;
  if (!validCourseId(id) || !raw || String(raw.userId ?? raw.user_id) !== id) return null;
  const number = (value: unknown) => Number.isFinite(Number(value)) ? Math.max(0, Number(value)) : 0;
  return {
    id, name: String(raw.username || 'Snow Pro Instructor'),
    intro: String(raw.selfIntro ?? raw.self_intro ?? ''),
    avatar: image(raw.avatarUrl ?? raw.avatar_url),
    cover: Array.isArray(raw.media) ? raw.media.map(image).find(Boolean) || '' : '',
    price: number(raw.price), active: raw.active === true,
    reviews: number(raw.totalReviews ?? raw.total_reviews), rating: Math.min(5, number(raw.star) / 10),
    base: String(raw.baseAt ?? raw.base_at ?? ''),
    tags: Array.isArray(raw.tags) ? raw.tags.map(String) : [],
    teachingSince: number(raw.teachingSince ?? raw.teaching_since),
    skiingSince: number(raw.skiingSince ?? raw.skiing_since),
    // Public certificate endpoint already filters approval. Never copy proof images.
    certificates: (Array.isArray(data.certificates) ? data.certificates : [])
      .filter((cert: any) => cert.status === undefined || cert.status === 1 || cert.status === 'APPROVED')
      .map((cert: any) => [cert.acronym || cert.name, cert.level].filter(Boolean).join(' ')),
  };
}

export async function fetchSharedInstructor(id: string, apiBase: string, signal?: AbortSignal): Promise<SharedInstructor> {
  if (!validCourseId(id)) throw new CourseShareUnavailable(404);
  const response = await fetch(new URL(`/v1/public/instructors/${id}`, apiBase), { signal, headers: { Accept: 'application/json' } });
  if (!response.ok) throw new CourseShareUnavailable(response.status === 404 ? 404 : 503);
  const result = normalizeInstructor(await response.json(), id);
  if (!result) throw new CourseShareUnavailable(404);
  return result;
}

export function renderInstructorDocument(coach: SharedInstructor | null, id: string, zh: boolean, unavailable = false): string {
  const label = (cn: string, en: string) => zh ? cn : en;
  const safe = escapeHtml;
  const canonical = validCourseId(id) ? `${COURSE_SHARE_ORIGIN}/instructors/${id}` : COURSE_SHARE_ORIGIN;
  const title = coach ? `${coach.name} · Snow Pro` : label('Snow Pro · 教练', 'Snow Pro · Instructor');
  const description = coach?.intro.slice(0, 200) || label('在 Snow Pro 预约滑雪教练', 'Discover ski and snowboard instructors on Snow Pro');

  return `<!doctype html><html lang="${zh ? 'zh-CN' : 'en'}"><head>
    <meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${safe(title)}</title><meta name="description" content="${safe(description)}">
    <link rel="canonical" href="${canonical}"><meta property="og:type" content="profile">
    <meta property="og:site_name" content="Snow Pro"><meta property="og:title" content="${safe(title)}">
    <meta property="og:description" content="${safe(description)}"><meta property="og:url" content="${canonical}">
    <meta property="og:image" content="${safe(coach?.cover || coach?.avatar || COURSE_SHARE_ORIGIN + '/logo_icon.png')}">
    <meta name="twitter:card" content="summary_large_image"><meta name="apple-itunes-app" content="app-id=6754150275, app-argument=${canonical}">
    ${coach ? '' : '<meta name="robots" content="noindex">'}<style>${courseShareStyles}</style>
    </head><body>${renderInstructorShare(coach, zh, unavailable)}</body></html>`;
}

export function renderInstructorShare(coach: SharedInstructor | null, zh: boolean, unavailable = false): string {
  const label = (cn: string, en: string) => zh ? cn : en;
  const safe = escapeHtml;
  const content = coach ? `<article>
    ${coach.cover ? `<img class="cover" src="${safe(coach.cover)}" alt="${safe(coach.name)}">` : '<div class="cover-placeholder">Snow Pro</div>'}
    <div class="content">
      ${coach.avatar ? `<img src="${safe(coach.avatar)}" alt="" width="64" height="64" style="border-radius:50%;object-fit:cover">` : ''}
      <h1>${safe(coach.name)}</h1>
      <p class="muted">${coach.active ? label('接单中', 'Available for booking') : label('暂停接单', 'Not accepting bookings')}</p>
      ${coach.certificates.length ? `<p>${coach.certificates.map(safe).join(' · ')}</p>` : ''}
      ${coach.base ? `<p>${label('驻场雪场', 'Resort base')} · ${safe(coach.base)}</p>` : ''}
      ${coach.tags.length ? `<p>${coach.tags.map(safe).join(' · ')}</p>` : ''}
      ${coach.teachingSince ? `<p>${label('开始执教', 'Teaching since')} · ${coach.teachingSince}</p>` : ''}
      ${coach.skiingSince ? `<p>${label('开始滑雪', 'Skiing since')} · ${coach.skiingSince}</p>` : ''}
      ${coach.reviews > 0 ? `<p>${coach.rating.toFixed(1)} / 5 · ${coach.reviews} ${label('条评价', 'reviews')}</p>` : ''}
      <p class="price">${label('视频指导价格', 'Video coaching')} · ¥${(coach.price / 100).toFixed(2)}</p>
      <h2>${label('教练介绍', 'About the instructor')}</h2><p class="description">${safe(coach.intro)}</p>
      <div class="actions"><a class="button primary" href="snowpro://instructors/${coach.id}">${label('打开 Snow Pro 预约', 'Open Snow Pro to book')}</a></div>
    </div></article>` : `<section class="error" role="status"><h1>${unavailable ? label('教练暂不可用', 'Instructor unavailable') : label('暂时无法加载教练', 'Could not load instructor')}</h1><p>${label('请稍后重试，或在 App 中查看。', 'Try again later or check in the app.')}</p></section>`;
  return `<main class="course-share"><a class="brand" href="/">Snow Pro</a>${content}
    <section><h2>${label('下载 Snow Pro', 'Download Snow Pro')}</h2><div class="downloads">
      <a class="button" href="${IOS_DOWNLOAD_URL}">App Store · iPhone</a><a class="button" href="${ANDROID_DOWNLOAD_URL}">Android APK</a>
    </div><p class="hint">${label('微信等内置浏览器可能无法打开 App，请从右上角菜单选择“在浏览器中打开”。尚未安装？下载后返回此链接，再打开教练主页。', 'In-app browsers may block opening the app. Choose Open in browser from the menu. After installing, return to this link to open the instructor profile.')}</p></section>
    </main>`;
}
