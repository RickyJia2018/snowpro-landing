import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Snowflake, ArrowUpRight } from 'lucide-react';
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
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-5 py-12">
      <section className="w-full max-w-md rounded-3xl border border-slate-700 bg-slate-900 p-7 sm:p-9 shadow-xl">
        <Link to="/" className="inline-flex items-center gap-2 text-sky-400 font-semibold mb-8"><Snowflake size={25} /> SnowPro</Link>
        <h1 className="text-2xl font-bold leading-tight mb-4">{t[0]}</h1>
        <p className="text-slate-300 leading-relaxed mb-7">{code ? t[1] : t[6]}</p>
        {code && <>
          <div className="rounded-2xl border border-sky-900 bg-sky-950/30 p-5 mb-6">
            <p className="text-sm text-slate-400 mb-2">{t[2]}</p>
            <p className="text-3xl font-bold tracking-wider text-sky-400 select-all break-all">{code}</p>
          </div>
          <a href={`snowpro://invite/instructor?code=${encodeURIComponent(code)}`} className="flex items-center justify-center gap-2 rounded-2xl bg-blue-600 hover:bg-blue-500 min-h-12 px-5 py-3 font-semibold">{t[3]}<ArrowUpRight size={20} /></a>
        </>}
        <a href="/#download" className="flex justify-center py-4 text-sky-400 font-medium">{t[4]}</a>
        {code && <p className="text-sm text-slate-400 text-center leading-relaxed">{t[5]}</p>}
      </section>
    </main>
  );
}
