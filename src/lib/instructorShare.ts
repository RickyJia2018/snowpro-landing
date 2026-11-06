import { ANDROID_APK_DOWNLOAD_URL, ANDROID_PLAY_DOWNLOAD_URL, COURSE_SHARE_ORIGIN, IOS_DOWNLOAD_URL, CourseShareUnavailable, SHARE_PAGE_SELECTOR, courseShareStyles, escapeHtml, validCourseId } from './courseShare.js';

export type SharedInstructor = {
  id: string; name: string; intro: string; avatar: string; cover: string;
  price: number; active: boolean; reviews: number; rating: number;
  certificates: string[];
  base: string; tags: string[]; teachingSince: number; skiingSince: number; languages: string[];
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
    languages: Array.isArray(data.languages) ? data.languages.map((item: any) => typeof item?.name === 'string' ? item.name : '').filter(Boolean) : [],
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
    ${coach ? '' : '<meta name="robots" content="noindex">'}<style>${instructorShareStyles}</style>
    <script defer src="/browser-open-guide.js"></script></head><body style="margin:0">${renderInstructorShare(coach, zh, unavailable, id)}</body></html>`;
}

// Share pages use one compact layout; the full profile stays in the app.
export const instructorShareStyles = courseShareStyles + `
  .course-share .person{display:flex;align-items:center;gap:16px;margin-bottom:20px}
  .course-share .avatar{width:72px;height:72px;border-radius:16px;object-fit:cover;background:#1e293b;display:grid;place-items:center;font-size:28px;flex-shrink:0}
  .course-share .person h1{margin:0}.course-share .facts{margin:8px 0;color:#cbd5e1}
  .course-share .certificates{display:flex;gap:8px;flex-wrap:wrap;list-style:none;padding:0}
  .course-share .certificates li{border:1px solid #475569;padding:5px 10px;border-radius:8px;font-size:14px}
`.replaceAll('.course-share', SHARE_PAGE_SELECTOR);

export function renderInstructorShare(coach: SharedInstructor | null, zh: boolean, unavailable = false, requestedId = ''): string {
  const label = (cn: string, en: string) => zh ? cn : en;
  const safe = escapeHtml;
  const id = coach?.id || (validCourseId(requestedId) ? requestedId : '');
  const appUrl = id ? `snowpro://instructors/${id}` : 'snowpro://';
  const pageUrl = id ? `/instructors/${id}` : '/';
  const profile = coach ? `
    <div class="person">
      ${coach.avatar ? `<img class="avatar" src="${safe(coach.avatar)}" alt="" width="72" height="72">` : `<span class="avatar" aria-hidden="true">${safe(Array.from(coach.name)[0] || 'S')}</span>`}
      <h1>${safe(coach.name)}</h1>
    </div>
    ${coach.reviews > 0 && coach.rating > 0 ? `<p class="facts">${coach.rating.toFixed(1)} / 5 · ${coach.reviews} ${label('条评价','reviews')}</p>` : ''}
    ${coach.languages.length ? `<p class="facts">${safe(coach.languages.join(' · '))}</p>` : ''}
    ${coach.base ? `<p class="facts">${safe(coach.base)}</p>` : ''}
    ${coach.certificates.length ? `<ul class="certificates" aria-label="${label('专业认证','Instructor certifications')}">${coach.certificates.map(cert => `<li>${safe(cert)}</li>`).join('')}</ul>` : ''}
    ${coach.intro ? `<h2>${label('教练简介','About the instructor')}</h2><p class="description muted">${safe(coach.intro)}</p>` : ''}
    ${coach.price > 0 ? `<p class="price">${(coach.price / 100).toFixed(2)} ${label('雪币','Snow Coins')}</p><p class="muted">${label('视频指导，具体服务请在 App 内确认。','Video coaching. Confirm service details in the app.')}</p>` : ''}
  ` : `<div role="status"><h1>${unavailable ? label('教练暂不可查看','Instructor unavailable') : label('暂时无法加载教练资料','Unable to load instructor')}</h1><p class="muted">${unavailable ? label('主页可能已不可见，或链接无效。','This profile may no longer be available, or the link is invalid.') : label('请刷新重试，或在 App 中查看。','Refresh to try again, or view the profile in the app.')}</p></div>`;
  return `<main data-share-language="${zh ? 'zh' : 'en'}" class="course-share instructor-share">
    <a class="brand" href="/">SnowPro</a>
    <article><div class="content">
      ${profile}
      <div class="actions"><a class="button primary" href="${appUrl}">${label('在 App 中查看教练','View instructor in app')}</a>${!coach && !unavailable && id ? `<a class="button" href="${pageUrl}?lang=${zh ? 'zh' : 'en'}">${label('重新加载','Try again')}</a>` : ''}</div>
      <p class="hint">${label('如果内置浏览器无法打开 App，请从菜单选择“在浏览器中打开”。','If an in-app browser cannot open SnowPro, choose “Open in browser” from its menu.')}</p>
      <section aria-label="${label('下载 App','Download app')}">
        <h2>${label('下载 SnowPro','Download SnowPro')}</h2>
        <div class="downloads"><a class="button" href="${IOS_DOWNLOAD_URL}">App Store · iPhone</a><a class="button" href="${ANDROID_PLAY_DOWNLOAD_URL}">Google Play · Android</a><a class="button" href="${ANDROID_APK_DOWNLOAD_URL}">${label('直接下载 APK', 'Download APK')}</a></div>
        <p class="muted">${label('安装后返回这条分享链接，再打开教练主页。','After installing, return to this shared link to open the instructor profile.')}</p>
      </section>
    </div></article>
  </main>`;
}
