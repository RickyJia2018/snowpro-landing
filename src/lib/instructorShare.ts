import { ANDROID_DOWNLOAD_URL, COURSE_SHARE_ORIGIN, IOS_DOWNLOAD_URL, CourseShareUnavailable, escapeHtml, validCourseId } from './courseShare.js';

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
    </head><body style="margin:0">${renderInstructorShare(coach, zh, unavailable, id)}</body></html>`;
}

const icons = {
  arrow: '<path d="M5 12h14m-5-5 5 5-5 5"/>',
  mountain: '<path d="m3 19 6-12 4 7 3-5 5 10H3Z"/><path d="m7 11 2 2 2-2"/>',
  award: '<circle cx="12" cy="8" r="5"/><path d="m8 12-1 9 5-3 5 3-1-9"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c5 5 5 13 0 18-5-5-5-13 0-18Z"/>',
  pin: '<path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z"/><circle cx="12" cy="10" r="2"/>',
  phone: '<rect x="6" y="2" width="12" height="20" rx="3"/><path d="M10 18h4"/>',
  download: '<path d="M12 3v12m-4-4 4 4 4-4M5 16v5h14v-5"/>',
  retry: '<path d="M3 11a9 9 0 1 1 2 7M3 4v7h7"/>',
  star: '<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z"/>',
};
const icon = (name: keyof typeof icons) => `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name]}</svg>`;

const mountains = `<svg class="is-mountains" viewBox="0 0 1100 290" preserveAspectRatio="xMidYMid slice" fill="none" aria-hidden="true">
  <circle cx="835" cy="65" r="36" fill="#d7ecf6" opacity=".8"/>
  <path d="M400 300 665 30l125 140L900 80l220 220" fill="#466d88"/>
  <path d="m665 30-87 89 72-14 24 34 25-29 40 2Z" fill="#e6f3fa"/>
  <path d="m900 80-66 77 53-16 27 23 31-35Z" fill="#d3e7f2"/>
  <path d="M150 300 454 108l145 148 138-86 189 130" fill="#244b66"/>
  <path d="m454 108-74 47 55-5 28 35 22-12 21 10Z" fill="#54748a"/>
  <path d="M-40 300 248 215l256 85 188-50 180 50" fill="#173c55"/>
  <path d="M750 198c-85 35-11 41 20 59 15 8 9 17-15 33" stroke="#c5e2ee" stroke-width="2" opacity=".45"/>
</svg>`;

export const instructorShareStyles = `
.instructor-share{--is-bg:#f3f7fa;--is-surface:#fff;--is-ink:#172e3f;--is-muted:#536978;--is-line:#e0e9ef;--is-blue:#0868c9;--is-soft:#edf5fb;box-sizing:border-box;min-height:100vh;background:var(--is-bg);color:var(--is-ink);font:16px/1.6 -apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;padding:0 24px 32px}
.instructor-share *{box-sizing:border-box}.instructor-share a{color:inherit;text-decoration:none}.instructor-share a:focus-visible{outline:3px solid #287ce4;outline-offset:4px}.instructor-share svg{flex-shrink:0}.instructor-share h1,.instructor-share h2,.instructor-share p{margin:0}.is-container{max-width:1056px;margin:auto}
.is-header{display:flex;justify-content:space-between;align-items:center;min-height:90px;gap:16px}.is-brand{display:inline-flex;align-items:center;gap:10px;min-height:44px;font-size:21px;font-weight:750;letter-spacing:-.7px}.is-brand img{border-radius:12px;width:37px;height:37px}.is-header-links{display:flex;align-items:center;gap:18px}.is-language{font-size:13px;color:var(--is-muted)!important;display:inline-flex;align-items:center;min-height:44px}.is-home{font-size:13px;font-weight:650;display:inline-flex;align-items:center;gap:8px;min-height:44px}
.is-cover{height:266px;position:relative;overflow:hidden;border-radius:24px;background:#15384f;color:#fff}.is-cover-photo,.is-mountains{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}.is-cover-shade{position:absolute;inset:0;background:linear-gradient(90deg,rgba(14,39,57,.9),rgba(14,39,57,.12))}.is-cover-copy{position:relative;padding:34px 40px;z-index:1}.is-eyebrow{font-size:10px;font-weight:750;letter-spacing:2.4px;text-transform:uppercase}.is-cover-copy .is-eyebrow{color:#c7dfed}.is-cover-copy p:last-child{font-size:clamp(25px,3.5vw,39px);font-weight:630;line-height:1.18;letter-spacing:-1px;margin-top:17px;max-width:430px}
.is-profile{position:relative;margin:-36px 28px 0;background:var(--is-surface);border:1px solid var(--is-line);border-radius:20px;box-shadow:0 12px 35px #173b5410;display:grid;grid-template-columns:minmax(0,1fr) 290px;overflow:hidden}.is-main{min-width:0;padding:32px}.is-person{display:flex;gap:18px;align-items:center}.is-avatar{width:82px;height:82px;flex:0 0 82px;position:relative;overflow:hidden;display:grid;place-items:center;border-radius:22px;background:#e6f1f8;color:#2e6285;font-weight:650;font-size:34px;border:4px solid #fff;box-shadow:0 0 0 1px var(--is-line)}.is-avatar img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}.is-identity{min-width:0}.is-identity .is-eyebrow{color:var(--is-muted);letter-spacing:1.6px;font-size:9px;margin-bottom:5px}.is-identity h1{font-size:clamp(24px,3.4vw,32px);font-weight:750;letter-spacing:-1.2px;line-height:1.2;overflow-wrap:anywhere}.is-presence{display:flex;align-items:center;gap:6px;margin-top:9px!important;font-size:12px;color:#20674c}.is-dot{height:6px;width:6px;border-radius:50%;background:#308567}.is-rating{display:flex;align-items:center;gap:7px;font-size:13px;margin-top:9px!important;color:var(--is-muted)}.is-rating svg{height:15px;width:15px;color:#a46d16}
.is-section{margin-top:26px;padding-top:23px;border-top:1px solid var(--is-line)}.is-section h2{font-size:13px;letter-spacing:.2px;font-weight:750;margin-bottom:12px}.is-intro{font-size:15px;color:var(--is-muted);white-space:pre-wrap;overflow-wrap:anywhere;line-height:1.8}.is-certificates{display:flex;flex-wrap:wrap;gap:9px;list-style:none;padding:0;margin:0}.is-certificates li{display:flex;align-items:center;gap:8px;padding:9px 12px;background:var(--is-soft);border:1px solid #d9e8f3;border-radius:10px;font-size:12px;font-weight:650;overflow-wrap:anywhere;max-width:100%}.is-certificates svg{width:17px;height:17px;color:#2777b3}.is-facts{display:flex;flex-wrap:wrap;gap:10px 24px;margin-top:20px;font-size:12px;color:var(--is-muted)}.is-facts span{display:inline-flex;align-items:center;gap:7px;overflow-wrap:anywhere}.is-facts svg{width:16px;height:16px}.is-tags{display:flex;gap:7px;flex-wrap:wrap;margin-top:17px}.is-tag{font-size:11px;color:var(--is-muted);border:1px solid var(--is-line);border-radius:7px;padding:3px 9px}
.is-coaching{background:#f8fbfd;border-left:1px solid var(--is-line);padding:32px 24px;display:flex;flex-direction:column;justify-content:center}.is-coaching>.is-eyebrow{color:#3a718e;letter-spacing:1.7px;margin-bottom:13px}.is-coaching h2{font-size:23px;font-weight:700;letter-spacing:-.8px;line-height:1.25}.is-coaching-description{font-size:13px;color:var(--is-muted);margin-top:12px!important}.is-price{font-size:27px;letter-spacing:-.8px;font-weight:750;margin-top:20px!important;line-height:1.25}.is-price small{font-size:12px;letter-spacing:0;font-weight:550;color:var(--is-muted)}.is-price-caption{font-size:11px;color:var(--is-muted);margin-top:5px!important}.is-button{min-height:48px;display:inline-flex;justify-content:center;align-items:center;gap:10px;border-radius:11px;padding:12px 18px;font-size:13px;line-height:1.4;font-weight:700;transition:background .18s,box-shadow .18s;cursor:pointer}.is-primary{background:var(--is-blue);color:#fff!important;box-shadow:0 4px 12px #0868c91a}.is-primary:hover{background:#0055ad}.is-primary:active{background:#004b9d}.is-secondary{background:var(--is-surface);border:1px solid #d4e0e9;color:var(--is-ink)}.is-secondary:hover{background:#edf4f9}.is-coaching .is-button{margin-top:23px;align-self:stretch}.is-coaching-note{font-size:11px;line-height:1.6;color:var(--is-muted);text-align:center;margin-top:11px!important}
.is-download{margin:30px 28px 0;display:flex;align-items:center;justify-content:space-between;gap:22px;padding:24px 4px;border-top:1px solid #dce6ed}.is-download h2{font-size:16px;font-weight:700;letter-spacing:-.3px}.is-download p{font-size:12px;color:var(--is-muted);margin-top:4px;max-width:470px}.is-download-links{display:flex;gap:9px;flex-shrink:0}.is-download-links .is-button{font-size:12px;padding:10px 14px;min-height:44px}.is-hint{font-size:11px!important;color:var(--is-muted);max-width:720px;text-align:center;margin:8px auto 0!important;line-height:1.7}.is-footer{display:flex;justify-content:center;align-items:center;gap:7px;margin-top:28px;color:var(--is-muted);font-size:10px;letter-spacing:.8px}.is-footer svg{width:15px;height:15px}.is-error{margin-top:22px;padding:38px;min-height:260px;text-align:center;display:flex;align-items:center;flex-direction:column;justify-content:center;border-radius:18px;background:var(--is-surface);border:1px solid var(--is-line)}.is-error>svg{height:40px;width:40px;color:#4a7896;margin-bottom:18px}.is-error h1{font-size:27px;line-height:1.3;letter-spacing:-.7px}.is-error p{font-size:14px;color:var(--is-muted);max-width:440px;margin-top:13px}.is-error-actions{display:flex;flex-wrap:wrap;justify-content:center;gap:10px;margin-top:23px}
@media(max-width:760px){.instructor-share{padding:0 16px 26px}.is-header{min-height:75px}.is-brand{font-size:19px}.is-brand img{width:33px;height:33px;border-radius:10px}.is-home span{display:none}.is-header-links{gap:16px}.is-cover{height:208px;border-radius:18px}.is-cover-copy{padding:25px 25px}.is-cover-copy p:last-child{font-size:28px;max-width:285px}.is-mountains{width:140%;left:0}.is-profile{margin:-24px 8px 0;display:block;border-radius:16px}.is-main{padding:24px 21px}.is-avatar{width:65px;height:65px;flex-basis:65px;border-radius:18px;font-size:29px}.is-person{gap:13px;align-items:flex-start}.is-identity h1{font-size:20px;letter-spacing:-.6px}.is-identity .is-eyebrow{font-size:8px;letter-spacing:1.4px}.is-section{margin-top:22px;padding-top:20px}.is-coaching{border-left:0;border-top:1px solid var(--is-line);padding:23px 21px}.is-coaching h2{font-size:21px}.is-coaching>.is-eyebrow{margin-bottom:9px}.is-coaching-description{margin-top:8px!important}.is-coaching .is-button{margin-top:18px}.is-price{font-size:25px;margin-top:14px!important}.is-download{margin:25px 12px 0;padding:22px 0;display:block}.is-download-links{margin-top:15px;display:flex}.is-download-links .is-button{flex:1;padding:11px 9px;gap:6px}.is-hint{padding:0 12px}.is-error{padding:28px 20px}.is-error h1{font-size:24px}}
@media(prefers-reduced-motion:reduce){.instructor-share *{transition:none!important;scroll-behavior:auto!important}}
`;

export function renderInstructorShare(coach: SharedInstructor | null, zh: boolean, unavailable = false, requestedId = ''): string {
  const label = (cn: string, en: string) => zh ? cn : en;
  const safe = escapeHtml;
  const id = coach?.id || (validCourseId(requestedId) ? requestedId : '');
  const appUrl = id ? `snowpro://instructors/${id}` : 'snowpro://';
  const pageUrl = id ? `/instructors/${id}` : '/';
  const facts = coach ? [
    coach.languages.length ? `<span>${icon('globe')}${safe(coach.languages.join(' · '))}</span>` : '',
    coach.base ? `<span>${icon('pin')}${safe(coach.base)}</span>` : '',
    coach.teachingSince ? `<span>${icon('mountain')}${label('开始执教于', 'Teaching since')} ${coach.teachingSince}</span>` : '',
    coach.skiingSince ? `<span>${label('开始滑雪于', 'Skiing since')} ${coach.skiingSince}</span>` : '',
  ].filter(Boolean).join('') : '';
  const content = coach ? `<article class="is-profile" aria-label="${label('教练资料','Instructor profile')}">
    <div class="is-main"><div class="is-person">
      <div class="is-avatar"><span aria-hidden="true">${safe(Array.from(coach.name)[0] || 'S')}</span>${coach.avatar ? `<img src="${safe(coach.avatar)}" alt="${safe(coach.name)}" width="82" height="82" decoding="async">` : ''}</div>
      <div class="is-identity"><p class="is-eyebrow">${label('你的雪上进阶伙伴','YOUR NEXT MOUNTAIN MENTOR')}</p><h1>${safe(coach.name)}</h1>
        ${coach.active ? `<p class="is-presence"><span class="is-dot" aria-hidden="true"></span>${label('正在接受教学订单','Accepting coaching requests')}</p>` : ''}
        ${coach.reviews > 0 && coach.rating > 0 ? `<p class="is-rating">${icon('star')}<strong>${coach.rating.toFixed(1)} / 5</strong><span>· ${coach.reviews} ${label('条评价','reviews')}</span></p>` : ''}
      </div></div>
      ${facts ? `<div class="is-facts">${facts}</div>` : ''}
      ${coach.intro ? `<section class="is-section"><h2>${label('认识这位教练','Meet your instructor')}</h2><p class="is-intro">${safe(coach.intro)}</p></section>` : ''}
      ${coach.certificates.length ? `<section class="is-section"><h2>${label('专业认证','Instructor certifications')}</h2><ul class="is-certificates">${coach.certificates.map(cert => `<li>${icon('award')}<span>${safe(cert)}</span></li>`).join('')}</ul></section>` : ''}
      ${coach.tags.length ? `<div class="is-tags">${coach.tags.map(tag => `<span class="is-tag">${safe(tag)}</span>`).join('')}</div>` : ''}
    </div>
    <aside class="is-coaching"><p class="is-eyebrow">${label('从这里，滑得更好','A LITTLE GUIDANCE GOES A LONG WAY')}</p><h2>${label('把下一次进步，\n交给专业指导。','Make your next turn\na better one.')}</h2><p class="is-coaching-description">${label('在 SnowPro 查看教练完整资料，通过视频分析获得针对你的滑雪指导。','Explore the full profile and get personal feedback on your skiing or snowboarding videos in SnowPro.')}</p>
      ${coach.price > 0 ? `<p class="is-price">${(coach.price / 100).toFixed(2)} <small>${label('雪币','Snow Coins')}</small></p><p class="is-price-caption">${label('视频指导 · 具体服务请在 App 内确认','Video coaching · View service details in the app')}</p>` : ''}
      <a class="is-button is-primary" href="${appUrl}">${label('在 App 中查看教练','View instructor in app')}${icon('arrow')}</a><p class="is-coaching-note">${label('已经安装 SnowPro？直接打开这位教练的主页。','Already have SnowPro? Go straight to this profile.')}</p>
    </aside></article>` : `<section class="is-error" role="status">${icon('mountain')}<h1>${unavailable ? label('这位教练暂不可用','This instructor is unavailable') : label('教练资料暂时没有加载成功','A fresh start for this page')}</h1><p>${unavailable ? label('主页可能暂不可见。你仍然可以在 SnowPro 中探索更多教练。','This profile may no longer be available. You can still explore instructors in SnowPro.') : label('连接暂时遇到了一点问题，请重试，或直接在 App 中查看这位教练。','We couldn’t load the profile right now. Try again, or open the instructor directly in SnowPro.')}</p><div class="is-error-actions"><a class="is-button is-primary" href="${appUrl}">${label('打开 SnowPro','Open SnowPro')}${icon('arrow')}</a>${!unavailable && id ? `<a class="is-button is-secondary" href="${pageUrl}?lang=${zh ? 'zh' : 'en'}">${icon('retry')}${label('重新加载','Try again')}</a>` : ''}</div></section>`;
  return `<main class="instructor-share"><div class="is-container">
    <header class="is-header"><a class="is-brand" href="/" aria-label="SnowPro ${label('首页','home')}"><img src="/logo_icon.png" alt="" width="37" height="37">SnowPro</a><nav class="is-header-links" aria-label="${label('页面导航','Page navigation')}"><a class="is-language" href="${pageUrl}?lang=${zh ? 'en' : 'zh'}" lang="${zh ? 'en' : 'zh-CN'}">${zh ? 'English' : '中文'}</a><a class="is-home" href="/"><span>${label('探索 SnowPro','Explore SnowPro')}</span>${icon('arrow')}</a></nav></header>
    <div class="is-cover">${coach?.cover ? `<img class="is-cover-photo" src="${safe(coach.cover)}" alt="" decoding="async"><div class="is-cover-shade"></div>` : mountains}<div class="is-cover-copy"><p class="is-eyebrow">SNOWPRO / ${label('滑雪教练','INSTRUCTORS')}</p><p>${label('每一个好弯，<br>都有更好的开始。','A little guidance.<br>A better next turn.')}</p></div></div>
    ${content}
    <section class="is-download" aria-label="${label('下载 SnowPro','Download SnowPro')}"><div><h2>${label('雪上热爱，随时相连。','Your mountain journey, all in one app.')}</h2><p>${label('还没有 SnowPro？下载后回到这个链接，继续了解这位教练。','New to SnowPro? Download the app, then return to this link to meet your instructor.')}</p></div><div class="is-download-links"><a class="is-button is-secondary" href="${IOS_DOWNLOAD_URL}">${icon('phone')}App Store</a><a class="is-button is-secondary" href="${ANDROID_DOWNLOAD_URL}">${icon('download')}Android APK</a></div></section>
    <p class="is-hint">${label('在微信等内置浏览器中无法打开 App？请从右上角菜单选择“在浏览器中打开”。','If your in-app browser blocks opening SnowPro, choose “Open in browser” from its menu.')}</p>
    <footer class="is-footer">${icon('mountain')}SNOWPRO · MASTER THE MOUNTAIN</footer>
  </div></main>`;
}
