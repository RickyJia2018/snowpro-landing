import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

const copy = {
  en: ['Help Center', 'Help articles will be available here soon.', 'Back to SnowPro'],
  zh: ['帮助中心', '帮助内容即将上线。', '返回 SnowPro'],
  ja: ['ヘルプセンター', 'ヘルプ記事は準備中です。', 'SnowPro に戻る'],
  ko: ['도움말 센터', '도움말을 준비하고 있습니다.', 'SnowPro로 돌아가기'],
  fr: ['Centre d’aide', 'Les articles d’aide seront bientôt disponibles ici.', 'Retour à SnowPro'],
  de: ['Hilfecenter', 'Hilfeartikel sind hier bald verfügbar.', 'Zurück zu SnowPro'],
  es: ['Centro de ayuda', 'Los artículos de ayuda estarán disponibles aquí próximamente.', 'Volver a SnowPro'],
  it: ['Centro assistenza', 'Gli articoli di assistenza saranno disponibili qui prossimamente.', 'Torna a SnowPro'],
  ru: ['Центр помощи', 'Справочные статьи скоро появятся здесь.', 'Вернуться в SnowPro'],
} as const;

type HelpLanguage = keyof typeof copy;

export default function HelpCenterPage() {
  const { language } = useLanguage();
  const [params] = useSearchParams();
  const requested = params.get('lang') ?? '';
  const selected = Object.prototype.hasOwnProperty.call(copy, requested)
    ? requested as HelpLanguage : language;
  const t = copy[selected] ?? copy.en;

  return <main lang={selected} className="min-h-screen bg-slate-950 px-5 py-10 text-slate-100">
    <div className="mx-auto max-w-2xl">
      <Link to="/" aria-label={t[2]} className="text-lg font-semibold text-blue-300">SnowPro</Link>
      <section className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8">
        <h1 className="text-2xl font-bold">{t[0]}</h1>
        <p className="mt-3 text-base leading-7 text-slate-400">{t[1]}</p>
      </section>
    </div>
  </main>;
}
