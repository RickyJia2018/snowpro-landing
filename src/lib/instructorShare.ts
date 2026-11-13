import {
  COURSE_SHARE_ORIGIN,
  CourseShareUnavailable,
  SHARE_PAGE_SELECTOR,
  courseShareStyles,
  escapeHtml,
  renderDownloadSection,
  renderShareHeader,
  shareIcons,
  validCourseId,
} from './courseShare.js';

export type SharedInstructor = {
  id: string; name: string; intro: string; tagline?: string; highestCertificate?: string; avatar: string; cover: string;
  price: number; active: boolean; reviews: number; rating: number;
  certificates: string[];
  base: string; tags: string[]; teachingSince: number; skiingSince: number; languages: string[];
};

function image(value: unknown): string {
  if (typeof value !== 'string') return '';
  try {
    const url = new URL(value);
    return url.protocol === 'https:' && !url.username && !url.password &&
      !/\.(mp4|mov|m4v|webm|m3u8)$/i.test(url.pathname) ? url.href : '';
  } catch { return ''; }
}

export function normalizeInstructor(data: any, id: string): SharedInstructor | null {
  const raw = data?.instructor;
  if (!validCourseId(id) || !raw || String(raw.userId ?? raw.user_id) !== id) return null;
  const number = (value: unknown) => Number.isFinite(Number(value)) ? Math.max(0, Number(value)) : 0;
  const certificates = (Array.isArray(data.certificates) ? data.certificates : [])
    .filter((cert: any) => cert.status === undefined || cert.status === 1 || cert.status === 'APPROVED');
  const highest = certificates.filter((cert: any) =>
    cert.category === undefined || cert.category === 0 || cert.category === 'TEACHING')
    .filter((cert: any) => String(cert.acronym || cert.name || '').trim())
    .sort((a: any, b: any) => number(b.level) - number(a.level))[0];
  return {
    id, name: String(raw.username || 'SnowPro Instructor'),
    intro: String(raw.selfIntro ?? raw.self_intro ?? ''),
    tagline: String(raw.tagline || '').trim(),
    highestCertificate: highest ? [highest.acronym || highest.name,
      number(highest.level) > 0 ? `L${number(highest.level)}` : ''].filter(Boolean).join(' ') : '',
    avatar: image(raw.avatarUrl ?? raw.avatar_url),
    cover: Array.isArray(raw.media) ? raw.media.map(image).find(Boolean) || '' : '',
    price: number(raw.price), active: raw.active === true,
    reviews: number(raw.totalReviews ?? raw.total_reviews), rating: Math.min(5, number(raw.star) / 10),
    languages: Array.isArray(data.languages) ? data.languages.map((item: any) => typeof item?.name === 'string' ? item.name : '').filter(Boolean) : [],
    base: String(raw.baseAt ?? raw.base_at ?? ''),
    tags: Array.isArray(raw.tags) ? raw.tags.map(String).filter(Boolean) : [],
    teachingSince: number(raw.teachingSince ?? raw.teaching_since),
    skiingSince: number(raw.skiingSince ?? raw.skiing_since),
    // Public certificate endpoint already filters approval. Never copy proof images.
    certificates: certificates
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
  const title = coach ? [coach.name, coach.highestCertificate, 'SnowPro'].filter(Boolean).join(' · ') : label('SnowPro · 教练', 'SnowPro · Instructor');
  const years = coach ? new Date().getFullYear() - coach.teachingSince : -1;
  const description = (coach ? [
    coach.highestCertificate,
    coach.teachingSince > 0 && years >= 0 ? label(`${years}年教学经验`, `${years} yrs teaching`) : '',
    coach.tagline?.trim() || coach.intro.trim(),
  ].filter(Boolean).join(' · ').replace(/\s+/g, ' ').slice(0, 200) : '') || label('在 SnowPro 预约滑雪教练', 'Discover ski and snowboard instructors on SnowPro');
  const thumbnail = coach?.avatar || coach?.cover || COURSE_SHARE_ORIGIN + '/logo_icon.png';

  return `<!doctype html><html lang="${zh ? 'zh-CN' : 'en'}"><head>
    <meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
    <title>${safe(title)}</title><meta name="description" content="${safe(description)}">
    <link rel="canonical" href="${canonical}"><meta property="og:type" content="profile">
    <meta property="og:site_name" content="SnowPro"><meta property="og:title" content="${safe(title)}">
    <meta property="og:description" content="${safe(description)}"><meta property="og:url" content="${canonical}">
    <meta property="og:image" content="${safe(thumbnail)}">
    <meta property="og:image:secure_url" content="${safe(thumbnail)}">
    <link rel="icon" href="/logo_icon.png"><link rel="apple-touch-icon" href="/logo_icon.png">
    <meta name="twitter:title" content="${safe(title)}"><meta name="twitter:description" content="${safe(description)}">
    <meta name="twitter:image" content="${safe(thumbnail)}">
    <meta name="twitter:card" content="summary_large_image"><meta name="apple-itunes-app" content="app-id=6754150275, app-argument=${canonical}">
    ${coach ? '' : '<meta name="robots" content="noindex">'}<style>${instructorShareStyles}</style>
    <script defer src="/browser-open-guide.js"></script></head><body style="margin:0">${renderInstructorShare(coach, zh, unavailable, id)}</body></html>`;
}

// Share pages use one compact layout; the full profile stays in the app.
export const instructorShareStyles = courseShareStyles + `
  .course-share .hero-banner{position:relative;aspect-ratio:16/7;max-height:190px;width:100%;overflow:hidden;background:#0f172a}
  .course-share .hero-banner img{width:100%;height:100%;object-fit:cover;display:block}
  .course-share .hero-banner::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,transparent 35%,#0f172a 100%)}
  .course-share .person{display:flex;align-items:center;gap:14px;margin-bottom:14px}
  .course-share .avatar{width:68px;height:68px;border-radius:18px;object-fit:cover;background:#1e293b;border:1px solid rgba(148,163,184,0.28);display:grid;place-items:center;font-size:26px;font-weight:700;color:#93c5fd;flex-shrink:0}
  .course-share .person-text{min-width:0;flex:1}
  .course-share .name-row{display:flex;align-items:center;flex-wrap:wrap;gap:8px}
  .course-share .person h1{margin:0;font-size:clamp(22px,4.5vw,28px)}
  .course-share .cert-badge{display:inline-flex;align-items:center;padding:3px 9px;border-radius:999px;background:rgba(56,189,248,0.14);border:1px solid rgba(56,189,248,0.34);color:#7dd3fc;font-size:12px;font-weight:700;letter-spacing:0.02em}
  .course-share .tagline{margin:4px 0 0;color:#cbd5e1;font-size:14px;line-height:1.4}
  .course-share .meta-pills{display:flex;flex-wrap:wrap;gap:8px;margin:12px 0 0;padding:0;list-style:none}
  .course-share .meta-pill{display:inline-flex;align-items:center;gap:6px;padding:5px 10px;border-radius:10px;background:rgba(30,41,59,0.7);border:1px solid rgba(148,163,184,0.16);color:#e2e8f0;font-size:13px;line-height:1.3}
  .course-share .meta-pill svg{flex:none;color:#7dd3fc}
  .course-share .meta-pill.rating svg{color:#fbbf24}
  .course-share .certificates,.course-share .tags{display:flex;gap:6px;flex-wrap:wrap;list-style:none;padding:0;margin:12px 0 0}
  .course-share .certificates li{border:1px solid rgba(96,165,250,0.32);background:rgba(37,99,235,0.1);color:#bfdbfe;padding:4px 10px;border-radius:8px;font-size:12px;font-weight:600}
  .course-share .tags li{border:1px solid rgba(148,163,184,0.18);background:rgba(15,23,42,0.55);color:#cbd5e1;padding:3px 9px;border-radius:999px;font-size:12px}
`.replaceAll('.course-share', SHARE_PAGE_SELECTOR);

export function renderInstructorShare(coach: SharedInstructor | null, zh: boolean, unavailable = false, requestedId = ''): string {
  const label = (cn: string, en: string) => zh ? cn : en;
  const safe = escapeHtml;
  const id = coach?.id || (validCourseId(requestedId) ? requestedId : '');
  const appUrl = id ? `snowpro://instructors/${id}` : 'snowpro://';
  const pageUrl = id ? `/instructors/${id}` : '/';
  const langHref = `${pageUrl}?lang=${zh ? 'en' : 'zh'}`;
  const years = coach ? new Date().getFullYear() - coach.teachingSince : -1;
  const metaPills = coach ? [
    coach.reviews > 0 && coach.rating > 0
      ? `<li class="meta-pill rating">${shareIcons.star}<span>${coach.rating.toFixed(1)} / 5 · ${coach.reviews} ${label('条评价', 'reviews')}</span></li>`
      : '',
    coach.base
      ? `<li class="meta-pill">${shareIcons.pin}<span>${safe(coach.base)}</span></li>`
      : '',
    coach.languages.length
      ? `<li class="meta-pill">${shareIcons.globe}<span>${safe(coach.languages.join(' · '))}</span></li>`
      : '',
    coach.teachingSince > 0 && years >= 0
      ? `<li class="meta-pill">${shareIcons.clock}<span>${years === 0 ? label('今年开始执教', 'Teaching this year') : label(`${years} 年教龄`, `${years} yrs teaching`)}</span></li>`
      : '',
  ].filter(Boolean) : [];
  const profile = coach ? `
    <div class="person">
      ${coach.avatar ? `<img class="avatar" src="${safe(coach.avatar)}" alt="" width="68" height="68">` : `<span class="avatar" aria-hidden="true">${safe(Array.from(coach.name)[0] || 'S')}</span>`}
      <div class="person-text">
        <div class="name-row">
          <h1>${safe(coach.name)}</h1>
          ${coach.highestCertificate ? `<span class="cert-badge">${safe(coach.highestCertificate)}</span>` : ''}
        </div>
        ${coach.tagline ? `<p class="tagline">${safe(coach.tagline)}</p>` : ''}
      </div>
    </div>
    ${metaPills.length ? `<ul class="meta-pills" aria-label="${label('教练信息', 'Instructor highlights')}">${metaPills.join('')}</ul>` : ''}
    ${coach.certificates.length ? `<ul class="certificates" aria-label="${label('专业认证', 'Instructor certifications')}">${coach.certificates.map(cert => `<li>${safe(cert)}</li>`).join('')}</ul>` : ''}
    ${coach.tags.length ? `<ul class="tags" aria-label="${label('教学专长', 'Specialties')}">${coach.tags.slice(0, 6).map(tag => `<li>${safe(tag)}</li>`).join('')}</ul>` : ''}
    ${coach.intro ? `<h2>${label('教练简介', 'About the instructor')}</h2><p class="description">${safe(coach.intro)}</p>` : ''}
    ${coach.price > 0 ? `<div class="offer-box"><p class="price">${(coach.price / 100).toFixed(2)} ${label('雪币', 'Snow Coins')}</p><p class="offer-note">${label('视频指导 · 详情请在 App 内确认', 'Video coaching · Confirm details in app')}</p></div>` : ''}
  ` : `<div class="error" role="status"><h1>${unavailable ? label('教练暂不可查看', 'Instructor unavailable') : label('暂时无法加载教练资料', 'Unable to load instructor')}</h1><p class="muted">${unavailable ? label('主页可能已不可见，或链接无效。', 'This profile may no longer be available, or the link is invalid.') : label('请刷新重试，或在 App 中查看。', 'Refresh to try again, or view the profile in the app.')}</p></div>`;
  const banner = coach?.cover ? `<div class="hero-banner"><img src="${safe(coach.cover)}" alt="" loading="eager"></div>` : '';
  return `<main data-share-language="${zh ? 'zh' : 'en'}" class="course-share instructor-share">
    ${renderShareHeader(zh, langHref)}
    <article>${banner}<div class="content">
      ${profile}
      <div class="actions"><a class="button primary" href="${appUrl}">${label('在 App 中查看教练', 'View instructor in app')}</a>${!coach && !unavailable && id ? `<a class="button" href="${pageUrl}?lang=${zh ? 'zh' : 'en'}">${label('重新加载', 'Try again')}</a>` : ''}</div>
      ${renderDownloadSection(zh, label('安装后返回这条分享链接，即可打开教练主页。', 'After installing, return to this shared link to open the instructor profile.'))}
    </div></article>
  </main>`;
}
