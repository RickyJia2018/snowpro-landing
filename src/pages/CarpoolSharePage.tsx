import React from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { ANDROID_DOWNLOAD_URL, IOS_DOWNLOAD_URL, courseShareStyles } from '../lib/courseShare';

// Keep protected trip details in the authenticated app. This page only helps
// recipients open the shared destination or install the app and return here.
export default function CarpoolSharePage() {
  const { search } = useLocation();
  const { language } = useLanguage();
  const label = (zh: string, en: string) => language === 'zh' ? zh : en;
  const ids = new URLSearchParams(search).getAll('id');
  const id = ids.length === 1 &&
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(ids[0]) &&
    ids[0] !== '00000000-0000-0000-0000-000000000000' ? ids[0] : null;
  const appUrl = id ? `snowpro://carpool/detail?${new URLSearchParams({ id })}` : null;

  return <>
    <style>{courseShareStyles}</style>
    <main className="course-share">
      <a className="brand" href="/">Snow Pro</a>
      <article>
        <div className="content">
          {appUrl ? <>
            <h1>{label('在 Snow Pro 中查看拼车行程', 'View the carpool trip in Snow Pro')}</h1>
            <p className="muted">{label('登录 App 查看当前行程信息和座位情况。', 'Sign in to the app to view the current trip and available seats.')}</p>
            <div className="actions">
              <a className="button primary" href={appUrl}>{label('打开拼车行程', 'Open carpool trip')}</a>
            </div>
            <p className="hint">{label('如果内置浏览器无法打开，请从菜单选择“在浏览器中打开”。', 'If an in-app browser cannot open Snow Pro, choose “Open in browser” from its menu.')}</p>
          </> : <div className="error" role="alert">
            <h1>{label('拼车链接无效', 'Invalid carpool link')}</h1>
            <p className="muted">{label('请向分享者索取完整的行程链接。', 'Ask the sender for the complete trip link.')}</p>
          </div>}
          <section aria-label={label('下载 App', 'Download app')}>
            <h2>{label('下载 Snow Pro', 'Download Snow Pro')}</h2>
            <div className="downloads">
              <a className="button" href={IOS_DOWNLOAD_URL}>App Store · iPhone</a>
              <a className="button" href={ANDROID_DOWNLOAD_URL}>Android · APK</a>
            </div>
            {appUrl && <p className="muted">{label('安装后返回这条分享链接，再打开行程。', 'After installing, return to this shared link to open the trip.')}</p>}
          </section>
        </div>
      </article>
    </main>
  </>;
}
