import React from 'react';
import { Calendar } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { previewLabel, validCarpoolId } from '../lib/carpoolShare';
import { ANDROID_APK_DOWNLOAD_URL, ANDROID_PLAY_DOWNLOAD_URL, IOS_DOWNLOAD_URL, courseShareStyles, localizePreviewText } from '../lib/courseShare';

// Keep protected trip details in the authenticated app. This page only helps
// recipients open the shared destination or install the app and return here.
export default function CarpoolSharePage({ kind = 'carpool' }: { kind?: 'carpool' | 'buddy' }) {
  const buddy = kind === 'buddy';
  const { search } = useLocation();
  const { language } = useLanguage();
  const params = new URLSearchParams(search);
  const langParam = params.get('lang');
  const zh = langParam === 'zh' || (langParam !== 'en' && language === 'zh');
  const label = (cn: string, en: string) => zh ? cn : en;
  const ids = params.getAll('id');
  const id = ids.length === 1 && validCarpoolId(ids[0]) ? ids[0] : null;
  const appUrl = id ? `snowpro://${kind}/detail?${new URLSearchParams({ id })}` : null;
  const rawTitle = previewLabel(params.get('title'), 120);
  const rawDescription = previewLabel(params.get('description'), 180);
  const title = id && rawTitle ? localizePreviewText(rawTitle, zh) : '';
  const description = id && rawDescription ? localizePreviewText(rawDescription, zh) : '';

  const langParams = new URLSearchParams(params);
  langParams.set('lang', zh ? 'en' : 'zh');

  return <>
    <style>{courseShareStyles}</style>
    <main className="course-share" data-share-language={zh ? 'zh' : 'en'}>
      <header className="topbar">
        <Link className="brand" to="/"><img className="brand-icon" src="/share-app-icon.png" alt="" width="28" height="28" /><span>SnowPro</span></Link>
        <Link className="lang-switch" to={`/${kind}/detail?${langParams}`}>{zh ? 'EN' : '中文'}</Link>
      </header>
      <article>
        <div className="content">
          {appUrl ? <>
            <span className="eyebrow">{buddy ? label('雪友约滑', 'Ski Buddy') : label('雪场拼车', 'Carpool Trip')}</span>
            <h1>{title || (buddy ? label('在 SnowPro 中查看雪友帖子', 'View the Ski Buddy post in SnowPro') : label('在 SnowPro 中查看拼车行程', 'View the carpool trip in SnowPro'))}</h1>
            {description && <div className="summary-card">
              <div className="summary-sub"><Calendar size={15} aria-hidden="true" /><span>{description}</span></div>
            </div>}
            <p className="muted">{buddy ? label('在 App 中查看帖子详情并联系雪友。', 'View post details and contact your ski buddy in the app.') : label('在 App 中查看实时座位与行程详情。', 'View live seat availability and trip details in the app.')}</p>
            <div className="actions">
              <a className="button primary" href={appUrl}>{buddy ? label('打开雪友帖子', 'Open Ski Buddy post') : label('打开拼车行程', 'Open carpool trip')}</a>
            </div>
          </> : <div className="error" role="alert">
            <h1>{buddy ? label('雪友链接无效', 'Invalid Ski Buddy link') : label('拼车链接无效', 'Invalid carpool link')}</h1>
            <p className="muted">{label('请向分享者索取完整的链接。', 'Ask the sender for the complete link.')}</p>
          </div>}
          <section className="download-section" aria-label={label('下载 App', 'Download app')}>
            <h2>{label('获取 SnowPro App', 'Download SnowPro')}</h2>
            <div className="downloads">
              <a className="button download-btn" data-platform="ios" href={IOS_DOWNLOAD_URL}>App Store · iPhone</a>
              <a className="button download-btn" data-platform="android" href={ANDROID_PLAY_DOWNLOAD_URL}>Google Play · Android</a>
              <a className="button download-btn" data-platform="apk" href={ANDROID_APK_DOWNLOAD_URL}>{label('直接下载 APK', 'Download APK')}</a>
            </div>
            {appUrl && <p className="download-note muted">{label('安装后返回这条分享链接，即可打开帖子。', 'After installing, return to this shared link to open the post.')}</p>}
          </section>
        </div>
      </article>
    </main>
  </>;
}
