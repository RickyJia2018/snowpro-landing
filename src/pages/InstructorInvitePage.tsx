import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { courseShareStyles, IOS_DOWNLOAD_URL, ANDROID_APK_DOWNLOAD_URL, ANDROID_PLAY_DOWNLOAD_URL } from '../lib/courseShare';
import { useLanguage } from '../../contexts/LanguageContext';

const copy = {
  en: ['Become a SnowPro instructor', 'Open SnowPro to start your application with this invitation code. If you have already applied, you will see your current application status.', 'Invitation code', 'Open SnowPro', 'Download SnowPro', 'After installing, return to this link to use your invitation.', 'This invitation link is invalid. Ask your instructor for a new link.'],
  zh: ['加入 SnowPro 教练社区', '打开 SnowPro，邀请码将填入申请表。如果你已申请，将显示当前申请状态。', '邀请码', '打开 SnowPro', '下载 SnowPro', '安装后请重新打开此链接，使用邀请码。', '邀请链接无效，请向教练索取新的链接。'],
  ja: ['SnowPro のインストラクターになる', 'SnowPro で招待コード付きの申請を始めましょう。申請済みの場合は現在の状況を表示します。', '招待コード', 'SnowPro を開く', 'SnowPro をダウンロード', 'インストール後、このリンクをもう一度開いてください。', '無効な招待リンクです。新しいリンクを依頼してください。'],
  ko: ['SnowPro 강사로 참여하기', 'SnowPro에서 초대 코드로 신청하세요. 이미 신청했다면 현재 신청 상태가 표시됩니다.', '초대 코드', 'SnowPro 열기', 'SnowPro 다운로드', '설치 후 이 링크를 다시 열어 주세요.', '유효하지 않은 초대 링크입니다. 새 링크를 요청하세요.'],
  fr: ['Devenir moniteur SnowPro', 'Ouvrez SnowPro pour commencer avec ce code. Si vous avez déjà postulé, votre statut actuel sera affiché.', 'Code d’invitation', 'Ouvrir SnowPro', 'Télécharger SnowPro', 'Après installation, ouvrez à nouveau ce lien.', 'Lien invalide. Demandez un nouveau lien à votre moniteur.'],
  de: ['SnowPro-Lehrer werden', 'Öffne SnowPro, um dich mit diesem Code zu bewerben. Bereits beworben? Dein aktueller Status wird angezeigt.', 'Einladungscode', 'SnowPro öffnen', 'SnowPro herunterladen', 'Öffne diesen Link nach der Installation erneut.', 'Ungültiger Link. Bitte um einen neuen Einladungslink.'],
  es: ['Ser instructor de SnowPro', 'Abre SnowPro para solicitar con este código. Si ya enviaste una solicitud, verás su estado actual.', 'Código de invitación', 'Abrir SnowPro', 'Descargar SnowPro', 'Tras instalar, vuelve a abrir este enlace.', 'Enlace inválido. Pide un nuevo enlace a tu instructor.'],
  ru: ['Стать инструктором SnowPro', 'Откройте SnowPro, чтобы подать заявку с этим кодом. Если заявка уже подана, отобразится её текущий статус.', 'Код приглашения', 'Открыть SnowPro', 'Скачать SnowPro', 'После установки откройте эту ссылку снова.', 'Недействительная ссылка. Попросите инструктора прислать новую.'],
};

export function invitationCode(params: URLSearchParams): string | null {
  const values = params.getAll('code');
  const code = values[0]?.trim().toUpperCase();
  return values.length === 1 && /^[A-Z0-9-]{4,12}$/.test(code ?? '') ? code : null;
}

export default function InstructorInvitePage() {
  const [params] = useSearchParams();
  const { language } = useLanguage();
  const t = copy[language] ?? copy.en;
  const code = invitationCode(params);
  return <>
    <style>{courseShareStyles}</style>
    <main className="course-share" data-share-language={language}>
      <header className="topbar">
        <Link to="/" className="brand"><img className="brand-icon" src="/logo_icon.png" alt="" width="28" height="28" /><span>SnowPro</span></Link>
      </header>
      <article><div className="content">
        <h1>{t[0]}</h1>
        <p className="muted">{code ? t[1] : t[6]}</p>
        {code && <>
          <div className="offer-box">
            <p className="offer-note">{t[2]}</p>
            <p className="price" style={{ overflowWrap: 'anywhere', userSelect: 'all' }}>{code}</p>
          </div>
          <div className="actions"><a href={`snowpro://invite/instructor?code=${encodeURIComponent(code)}`} className="button primary">{t[3]}</a></div>
        </>}
        <section className="download-section" aria-label={t[4]}>
          <h2>{t[4]}</h2>
          <div className="downloads"><a className="button download-btn" data-platform="ios" href={IOS_DOWNLOAD_URL}>App Store · iPhone</a><a className="button download-btn" data-platform="android" href={ANDROID_PLAY_DOWNLOAD_URL}>Google Play · Android</a>
              <a className="button download-btn" data-platform="apk" href={ANDROID_APK_DOWNLOAD_URL}>{language === 'zh' ? '直接下载 APK' : 'Download APK'}</a></div>
          {code && <p className="download-note muted">{t[5]}</p>}
        </section>
      </div></article>
    </main>
  </>;
}
