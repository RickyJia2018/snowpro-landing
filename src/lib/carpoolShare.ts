import { ANDROID_APK_DOWNLOAD_URL, ANDROID_PLAY_DOWNLOAD_URL, COURSE_SHARE_ORIGIN, IOS_DOWNLOAD_URL, courseShareStyles, escapeHtml } from './courseShare.js';

export function validCarpoolId(value: unknown): value is string {
  return typeof value === 'string' &&
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(value) &&
    value !== '00000000-0000-0000-0000-000000000000';
}

// These are sender-supplied preview labels, never authoritative trip details.
// Current availability and protected pickup details stay in the authenticated app.
export function previewLabel(value: unknown, maxLength: number): string {
  return typeof value === 'string' ? Array.from(value.replace(/[\u0000-\u001f\u007f]/g, ' ').trim()).slice(0, maxLength).join('') : '';
}

export function renderCarpoolDocument(id: string, title: string, description: string, zh: boolean, kind: 'carpool' | 'buddy' = 'carpool'): string {
  const label = (cn: string, en: string) => zh ? cn : en;
  const valid = validCarpoolId(id);
  const buddy = kind === 'buddy';
  const safe = escapeHtml;
  const pageTitle = valid && title ? title : (buddy ? label('在 SnowPro 中查看雪友帖子', 'View the Ski Buddy post in SnowPro') : label('在 SnowPro 中查看拼车行程', 'View the carpool trip in SnowPro'));
  const summary = valid && description ? description : (buddy ? label('登录 App 查看帖子详情并联系雪友。', 'Sign in to the app to view the post and contact your ski buddy.') : label('登录 App 查看当前行程信息和座位情况。', 'Sign in to the app to view the current trip and available seats.'));
  const query = new URLSearchParams({ id });
  const appUrl = `snowpro://${kind}/detail?${query}`;
  const canonical = valid ? `${COURSE_SHARE_ORIGIN}/${kind}/detail?${query}` : COURSE_SHARE_ORIGIN;
  return `<!doctype html><html lang="${zh ? 'zh-CN' : 'en'}"><head>
    <meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${safe(pageTitle)}</title><meta name="description" content="${safe(summary)}">
    <link rel="icon" href="/logo_icon.png"><link rel="canonical" href="${safe(canonical)}">
    <meta property="og:type" content="website"><meta property="og:site_name" content="SnowPro">
    <meta property="og:title" content="${safe(pageTitle)}"><meta property="og:description" content="${safe(summary)}">
    <meta property="og:url" content="${safe(canonical)}"><meta property="og:image" content="${COURSE_SHARE_ORIGIN}/logo_icon.png">
    <meta name="twitter:card" content="summary"><meta name="robots" content="noindex">
    <style>${courseShareStyles}</style><script defer src="/browser-open-guide.js"></script>
  </head><body style="margin:0"><main class="course-share" data-share-language="${zh ? 'zh' : 'en'}">
    <a class="brand" href="/">SnowPro</a><article><div class="content">
    ${valid ? `<h1>${safe(pageTitle)}</h1>
      ${description ? `<p class="muted">${safe(summary)}</p>` : ''}
      <p class="muted">${(buddy ? label('登录 App 查看帖子详情并联系雪友。', 'Sign in to the app to view the post and contact your ski buddy.') : label('登录 App 查看当前行程信息和座位情况。', 'Sign in to the app to view the current trip and available seats.'))}</p>
      <div class="actions"><a class="button primary" href="${safe(appUrl)}">${(buddy ? label('打开雪友帖子', 'Open Ski Buddy post') : label('打开拼车行程', 'Open carpool trip'))}</a></div>
      <p class="hint">${label('如果内置浏览器无法打开，请从菜单选择“在浏览器中打开”。', 'If an in-app browser cannot open SnowPro, choose “Open in browser” from its menu.')}</p>`
      : `<div class="error" role="alert"><h1>${(buddy ? label('雪友链接无效', 'Invalid Ski Buddy link') : label('拼车链接无效', 'Invalid carpool link'))}</h1><p class="muted">${label('请向分享者索取完整的链接。', 'Ask the sender for the complete link.')}</p></div>`}
    <section><h2>${label('下载 SnowPro', 'Download SnowPro')}</h2><div class="downloads">
      <a class="button" href="${IOS_DOWNLOAD_URL}">App Store · iPhone</a>
      <a class="button" href="${ANDROID_PLAY_DOWNLOAD_URL}">Google Play · Android</a>
      <a class="button" href="${ANDROID_APK_DOWNLOAD_URL}">${label('直接下载 APK', 'Download APK')}</a>
    </div>${valid ? `<p class="muted">${label('安装后返回这条分享链接，再打开帖子。', 'After installing, return to this shared link to open the post.')}</p>` : ''}</section>
  </div></article></main></body></html>`;
}
