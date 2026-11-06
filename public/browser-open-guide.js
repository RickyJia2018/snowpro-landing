/* One shared runtime for React and server-rendered public share pages. */
(() => {
  if (window.__snowproBrowserGuide) return;
  const copy = {
    en: ['Open in your browser', 'This in-app browser may block app links.', 'Can’t open the app?', 'Tap the page menu ···', 'Choose “Open in browser”, then open SnowPro.', 'Copy this page link', 'Paste it into Safari or Chrome. If needed, install SnowPro first, then return to this link.', 'Copy link', 'Link copied', 'Continue browsing', 'Close', 'Touch and hold the link to copy it.'],
    zh: ['请在浏览器中打开', '内置浏览器可能无法唤起 App。', '打不开 App？', '点击页面右上角的 ··· 菜单', '选择“在浏览器中打开”，再打开 SnowPro。', '复制本页链接', '粘贴到 Safari 或 Chrome 中打开。如未安装 SnowPro，请先安装，再返回此链接。', '复制链接', '链接已复制', '继续浏览', '关闭', '请长按下方链接并选择复制。'],
    ja: ['ブラウザで開いてください', 'アプリ内ブラウザではリンクを開けない場合があります。', 'アプリを開けませんか？', 'ページのメニュー ··· をタップ', '「ブラウザで開く」を選び、SnowPro を開いてください。', 'このページのリンクをコピー', 'Safari または Chrome に貼り付けてください。必要に応じて SnowPro をインストールし、このリンクに戻ってください。', 'リンクをコピー', 'コピーしました', '閲覧を続ける', '閉じる', '下のリンクを長押ししてコピーしてください。'],
    ko: ['브라우저에서 열어 주세요', '앱 내 브라우저가 앱 링크를 차단할 수 있습니다.', '앱이 열리지 않나요?', '페이지 메뉴 ··· 를 누르세요', '“브라우저에서 열기”를 선택한 후 SnowPro를 여세요.', '이 페이지 링크 복사', 'Safari 또는 Chrome에 붙여 넣으세요. 필요한 경우 SnowPro를 설치한 후 이 링크로 돌아오세요.', '링크 복사', '복사되었습니다', '계속 보기', '닫기', '아래 링크를 길게 눌러 복사하세요.'],
    fr: ['Ouvrir dans un navigateur', 'Ce navigateur intégré peut bloquer les liens vers l’app.', 'L’app ne s’ouvre pas ?', 'Touchez le menu de la page ···', 'Choisissez « Ouvrir dans le navigateur », puis ouvrez SnowPro.', 'Copiez le lien de cette page', 'Collez-le dans Safari ou Chrome. Si nécessaire, installez SnowPro puis revenez à ce lien.', 'Copier le lien', 'Lien copié', 'Continuer la lecture', 'Fermer', 'Appuyez longuement sur le lien pour le copier.'],
    de: ['Im Browser öffnen', 'Dieser In-App-Browser kann App-Links blockieren.', 'Die App öffnet sich nicht?', 'Tippe auf das Seitenmenü ···', 'Wähle „Im Browser öffnen“ und öffne dann SnowPro.', 'Kopiere den Link dieser Seite', 'Füge ihn in Safari oder Chrome ein. Installiere bei Bedarf SnowPro und kehre zu diesem Link zurück.', 'Link kopieren', 'Link kopiert', 'Weiterlesen', 'Schließen', 'Halte den Link gedrückt, um ihn zu kopieren.'],
    es: ['Abrir en el navegador', 'Este navegador integrado puede bloquear enlaces a la app.', '¿No se abre la app?', 'Toca el menú de la página ···', 'Elige “Abrir en el navegador” y abre SnowPro.', 'Copia el enlace de esta página', 'Pégalo en Safari o Chrome. Si es necesario, instala SnowPro y vuelve a este enlace.', 'Copiar enlace', 'Enlace copiado', 'Seguir navegando', 'Cerrar', 'Mantén pulsado el enlace para copiarlo.'],
    ru: ['Откройте в браузере', 'Встроенный браузер может блокировать ссылки на приложение.', 'Приложение не открывается?', 'Нажмите меню страницы ···', 'Выберите «Открыть в браузере», затем откройте SnowPro.', 'Скопируйте ссылку страницы', 'Вставьте её в Safari или Chrome. При необходимости установите SnowPro и вернитесь к ссылке.', 'Копировать ссылку', 'Ссылка скопирована', 'Продолжить просмотр', 'Закрыть', 'Нажмите и удерживайте ссылку, чтобы скопировать её.'],
  };
  const ua = navigator.userAgent || '';
  const blocked = /MicroMessenger|\bQQ\//i.test(ua);
  const embedded = blocked || /FBAN|FBAV|Instagram|Line\/|BytedanceWebview|TikTok|DingTalk|AlipayClient/i.test(ua);
  const mobile = embedded || /iPhone|iPad|iPod|Android/i.test(ua);
  const publicShare = () => /^\/(?:invite\/instructor\/?|courses\/[^/]+\/?|instructors\/[^/]+\/?|carpool\/detail\/?)$/.test(location.pathname);
  const icon = '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 3h7v7M21 3l-9 9"/><path d="M10 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5"/></svg>';
  const style = document.createElement('style');
  style.dataset.snowproBrowserGuide = '';
  style.textContent = `
    .sp-browser-hint{display:flex;width:100%;align-items:center;gap:12px;margin:0 0 20px;padding:16px;text-align:left;border:1px solid #315384;border-radius:16px;background:#13233c;color:#93c5fd;font:inherit;cursor:pointer}
    .sp-browser-hint>svg{flex:none}.sp-browser-hint strong{display:block;color:#eff6ff;font-size:15px;line-height:1.5}.sp-browser-hint small{display:block;color:#b7c8df;font-size:13px;line-height:1.5;margin-top:2px}
    .sp-browser-help{display:block;min-height:44px;margin:-12px 0 16px;padding:8px 0;background:none;border:0;color:#93c5fd;font:inherit;font-size:14px;text-decoration:underline;text-underline-offset:4px;cursor:pointer}
    .sp-browser-overlay{position:fixed;inset:0;z-index:10000;display:flex;align-items:flex-start;justify-content:center;padding:calc(env(safe-area-inset-top,0px) + 64px) 20px 24px;background:rgba(2,6,23,.78);backdrop-filter:blur(6px);overflow-y:auto;color:#f1f5f9;font-family:system-ui,-apple-system,sans-serif;line-height:1.55}
    .sp-browser-sheet{position:relative;width:100%;max-width:420px;padding:28px 24px 16px;border:1px solid #334155;border-radius:24px;background:#0f172a;box-shadow:0 24px 80px #0006;box-sizing:border-box;margin:0 auto}
    .sp-browser-sheet *{box-sizing:border-box}.sp-browser-sheet h2{font-size:23px;line-height:1.3;margin:8px 32px 24px 0;font-weight:700;overflow-wrap:anywhere}.sp-browser-sheet h2:focus{outline:0}
    .sp-browser-close{position:absolute;right:10px;top:10px;width:44px;height:44px;display:grid;place-items:center;border:0;border-radius:50%;background:none;color:#a7b8ce;font-size:26px;cursor:pointer}
    .sp-browser-steps{display:grid;gap:20px;list-style:none;padding:0;margin:0 0 28px}.sp-browser-steps li{display:flex;gap:12px;align-items:flex-start;font-size:15px;color:#d5dfed}.sp-browser-step{flex:none;display:grid;place-items:center;width:28px;height:28px;border-radius:9px;color:#93c5fd;background:#1e3557;font-size:13px;font-weight:700}.sp-browser-steps p{margin:1px 0 0}
    .sp-browser-copy,.sp-browser-done{display:block;width:100%;min-height:48px;padding:12px 16px;border:0;border-radius:12px;font:inherit;font-size:15px;font-weight:600;cursor:pointer}.sp-browser-copy{background:#2563eb;color:white}.sp-browser-done{background:none;color:#cbd5e1;margin-top:4px}
    .sp-browser-status{font-size:13px;color:#93c5fd;margin:12px 0 0}.sp-browser-url{display:block;width:100%;margin-top:12px;padding:12px;border:1px solid #475569;border-radius:10px;background:#020617;color:#e2e8f0;font:inherit;font-size:13px;resize:none;word-break:break-all}
    .sp-browser-hint:focus-visible,.sp-browser-help:focus-visible,.sp-browser-sheet button:focus-visible,.sp-browser-url:focus-visible{outline:3px solid #60a5fa;outline-offset:3px}
    @media(max-width:360px){.sp-browser-overlay{padding-left:12px;padding-right:12px}.sp-browser-sheet{padding:24px 20px 12px}.sp-browser-sheet h2{font-size:21px}}
  `.replace(/\.sp-browser-[a-z-]+/g, selector =>
    `${selector}:not(#snowpro-browser-reset):not(#snowpro-browser-reset)`);
  // Match the share pages' specificity guard against the compiled Tailwind
  // cascade-layer reset, including on older iOS without native CSS layers.
  document.head.append(style);
  let overlay = null;
  let restoreFocus = null;
  let dialogUrl = '';
  let dialogRoot = null;
  let previousOverflow = '';
  let scheduled = false;
  let destroyed = false;
  const text = root => {
    const language = root?.dataset.shareLanguage || document.documentElement.lang || navigator.language;
    return copy[String(language).toLowerCase().split('-')[0]] || copy.en;
  };
  function close() {
    if (!overlay) return;
    overlay.remove();
    overlay = null;
    document.body.style.overflow = previousOverflow;
    if (restoreFocus?.isConnected) restoreFocus.focus();
  }
  function show(root) {
    if (overlay) return;
    const t = text(root);
    restoreFocus = document.activeElement;
    dialogUrl = location.href;
    dialogRoot = root;
    previousOverflow = document.body.style.overflow;
    overlay = document.createElement('div');
    overlay.className = 'sp-browser-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-labelledby', 'sp-browser-title');
    const sheet = document.createElement('div');
    sheet.className = 'sp-browser-sheet';
    // Only fixed icon markup is parsed as HTML; translated strings and URLs
    // are always assigned as text, never interpolated into HTML.
    sheet.innerHTML = icon;
    const heading = document.createElement('h2');
    heading.id = 'sp-browser-title'; heading.tabIndex = -1; heading.textContent = t[0];
    const dismiss = document.createElement('button');
    dismiss.type = 'button'; dismiss.className = 'sp-browser-close'; dismiss.textContent = '×'; dismiss.setAttribute('aria-label', t[10]); dismiss.onclick = close;
    const steps = document.createElement('ol'); steps.className = 'sp-browser-steps';
    for (const [index, label] of (embedded ? [t[3], t[4]] : [t[5], t[6]]).entries()) {
      const step = document.createElement('li'); const number = document.createElement('span'); number.className = 'sp-browser-step'; number.textContent = String(index + 1);
      const description = document.createElement('p'); description.textContent = label; step.append(number, description); steps.append(step);
    }
    const copyButton = document.createElement('button'); copyButton.type = 'button'; copyButton.className = 'sp-browser-copy'; copyButton.textContent = t[7];
    const status = document.createElement('p'); status.className = 'sp-browser-status'; status.setAttribute('role', 'status'); status.setAttribute('aria-live', 'polite'); status.hidden = true;
    copyButton.onclick = async () => {
      const currentOverlay = overlay;
      const url = location.href;
      try {
        if (!navigator.clipboard?.writeText) throw new Error('clipboard unavailable');
        await navigator.clipboard.writeText(url);
        if (!currentOverlay?.isConnected) return;
        status.hidden = false; status.textContent = t[8]; copyButton.textContent = t[8];
      } catch {
        if (!currentOverlay?.isConnected) return;
        status.hidden = false; status.textContent = t[11];
        let input = sheet.querySelector('textarea');
        if (!input) { input = document.createElement('textarea'); input.className = 'sp-browser-url'; input.readOnly = true; input.rows = 3; input.setAttribute('aria-label', t[5]); status.after(input); }
        input.value = url; input.focus(); input.select();
      }
    };
    const done = document.createElement('button'); done.type = 'button'; done.className = 'sp-browser-done'; done.textContent = t[9]; done.onclick = close;
    sheet.append(dismiss, heading, steps, copyButton, status, done); overlay.append(sheet); overlay.onclick = event => { if (event.target === overlay) close(); };
    overlay.onkeydown = event => {
      if (event.key === 'Escape') { event.preventDefault(); close(); }
      if (event.key !== 'Tab') return;
      const focusable = [...sheet.querySelectorAll('button,textarea')];
      const first = focusable[0], last = focusable[focusable.length - 1];
      if (event.shiftKey && (document.activeElement === first || document.activeElement === heading)) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && (document.activeElement === last || document.activeElement === heading)) { event.preventDefault(); first.focus(); }
    };
    document.body.style.overflow = 'hidden'; document.body.append(overlay); heading.focus();
  }
  function refresh() {
    scheduled = false;
    if (destroyed) return;
    if (!publicShare()) { close(); return; }
    if (overlay && (dialogUrl !== location.href || !dialogRoot?.isConnected)) close();
    for (const root of document.querySelectorAll('main.course-share,main[data-snowpro-share-page]')) {
      const t = text(root);
      if (root.dataset.browserGuideReady === t[0]) continue;
      root.querySelectorAll('.sp-browser-hint,.sp-browser-help').forEach(node => node.remove());
      const action = root.querySelector('a[href^="snowpro:"]');
      if (mobile && embedded) {
        const hint = document.createElement('button'); hint.type = 'button'; hint.className = 'sp-browser-hint'; hint.innerHTML = icon;
        const labels = document.createElement('span'); const title = document.createElement('strong'); const description = document.createElement('small'); title.textContent = t[0]; description.textContent = t[1]; labels.append(title, description); hint.append(labels); hint.onclick = () => show(root);
        (root.querySelector('article') || root.firstElementChild)?.before(hint);
      }
      if (mobile && action && !embedded) {
        const help = document.createElement('button'); help.type = 'button'; help.className = 'sp-browser-help'; help.textContent = t[2]; help.onclick = () => show(root);
        (action.closest('.actions') || action).after(help);
      }
      root.dataset.browserGuideReady = t[0];
    }
  }
  function click(event) {
    if (!blocked || !publicShare()) return;
    const anchor = event.target instanceof Element ? event.target.closest('a') : null;
    const root = anchor?.closest('main.course-share,main[data-snowpro-share-page]');
    if (root && (anchor.getAttribute('href')?.startsWith('snowpro:') || anchor.closest('.downloads'))) {
      event.preventDefault(); show(root);
    }
  }
  function schedule() { if (!scheduled) { scheduled = true; queueMicrotask(refresh); } }
  const observer = new MutationObserver(schedule);
  observer.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['data-share-language'] });
  document.addEventListener('click', click, true);
  window.addEventListener('popstate', schedule);
  window.__snowproBrowserGuide = { refresh, destroy() { destroyed = true; observer.disconnect(); document.removeEventListener('click', click, true); window.removeEventListener('popstate', schedule); close(); style.remove(); document.querySelectorAll('.sp-browser-hint,.sp-browser-help').forEach(node => node.remove()); delete window.__snowproBrowserGuide; } };
  refresh();
})();
