import {
  COURSE_SHARE_ORIGIN,
  courseShareStyles,
  escapeHtml,
  localizePreviewText,
  renderDownloadSection,
  renderShareHeader,
  shareIcons,
} from './courseShare.js';

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
  const localizedTitle = valid && title ? localizePreviewText(title, zh) : '';
  const localizedDesc = valid && description ? localizePreviewText(description, zh) : '';
  const pageTitle = localizedTitle || (buddy ? label('在 SnowPro 中查看雪友帖子', 'View the Ski Buddy post in SnowPro') : label('在 SnowPro 中查看拼车行程', 'View the carpool trip in SnowPro'));
  const summary = localizedDesc || (buddy ? label('登录 App 查看帖子详情并联系雪友。', 'Sign in to the app to view the post and contact your ski buddy.') : label('登录 App 查看当前行程信息和座位情况。', 'Sign in to the app to view the current trip and available seats.'));
  const query = new URLSearchParams({ id });
  const appUrl = `snowpro://${kind}/detail?${query}`;
  const canonical = valid ? `${COURSE_SHARE_ORIGIN}/${kind}/detail?${query}` : COURSE_SHARE_ORIGIN;
  const langQuery = new URLSearchParams();
  if (valid) langQuery.set('id', id);
  if (title) langQuery.set('title', title);
  if (description) langQuery.set('description', description);
  langQuery.set('lang', zh ? 'en' : 'zh');
  const langHref = `/${kind}/detail?${langQuery}`;
  const eyebrow = buddy ? label('雪友约滑', 'Ski Buddy') : label('雪场拼车', 'Carpool Trip');
  const subtitle = buddy
    ? label('登录 SnowPro App 查看帖子详情并联系雪友。', 'Sign in to SnowPro to view post details and contact your ski buddy.')
    : label('登录 SnowPro App 查看实时座位与出发安排。', 'Sign in to SnowPro to check live seat availability and trip details.');

  const body = valid ? `
    <span class="eyebrow">${eyebrow}</span>
    <h1>${safe(pageTitle)}</h1>
    ${localizedDesc ? `<div class="summary-card"><div class="summary-sub">${shareIcons.calendar}<span>${safe(localizedDesc)}</span></div></div>` : ''}
    <p class="muted">${subtitle}</p>
    <div class="actions"><a class="button primary" href="${safe(appUrl)}">${buddy ? label('打开雪友帖子', 'Open Ski Buddy post') : label('打开拼车行程', 'Open carpool trip')}</a></div>
  ` : `<div class="error" role="alert"><h1>${buddy ? label('雪友链接无效', 'Invalid Ski Buddy link') : label('拼车链接无效', 'Invalid carpool link')}</h1><p class="muted">${label('请向分享者索取完整的链接。', 'Ask the sender for the complete link.')}</p></div>`;

  return `<!doctype html><html lang="${zh ? 'zh-CN' : 'en'}"><head>
    <meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
    <title>${safe(pageTitle)}</title><meta name="description" content="${safe(summary)}">
    <link rel="icon" href="/logo_icon.png"><link rel="canonical" href="${safe(canonical)}">
    <meta property="og:type" content="website"><meta property="og:site_name" content="SnowPro">
    <meta property="og:title" content="${safe(pageTitle)}"><meta property="og:description" content="${safe(summary)}">
    <meta property="og:url" content="${safe(canonical)}"><meta property="og:image" content="${COURSE_SHARE_ORIGIN}/logo_icon.png">
    <meta name="twitter:card" content="summary"><meta name="robots" content="noindex">
    <style>${courseShareStyles}</style><script defer src="/browser-open-guide.js"></script>
  </head><body style="margin:0"><main class="course-share" data-share-language="${zh ? 'zh' : 'en'}">
    ${renderShareHeader(zh, langHref)}<article><div class="content">
    ${body}
    ${renderDownloadSection(zh, label('安装后返回这条分享链接，即可打开帖子。', 'After installing, return to this shared link to open the post.'), valid)}
  </div></article></main></body></html>`;
}
