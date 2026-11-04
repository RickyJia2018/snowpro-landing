import React, { useEffect, useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const localTranslations = {
  zh: {
    title: "Stripe 收款账户绑定",
    subtitle: "请返回 SnowPro App 检查收款账号状态。Stripe 可能仍需补充资料或完成身份验证。",
    redirecting: "正在打开 SnowPro App，账号状态将在 App 中检查。",
    button: "打开 SnowPro App",
    manualHint: "如果您的设备没有自动跳转，请点击上方按钮返回 App。",
    backHome: "返回官网首页",
  },
  en: {
    title: "Stripe Payout Setup",
    subtitle: "Return to SnowPro to check your payout account status. Stripe may still require more information or identity verification.",
    redirecting: "Opening SnowPro to check your account status...",
    button: "Open SnowPro App",
    manualHint: "If you are not automatically redirected, please click the button above.",
    backHome: "Back to Home",
  },
  ja: {
    title: "Stripe 受取口座設定",
    subtitle: "SnowPro に戻って受取口座の状態を確認してください。Stripe で追加情報や本人確認が必要な場合があります。",
    redirecting: "SnowPro アプリを開いています...",
    button: "SnowPro アプリを開く",
    manualHint: "自動的に戻らない場合は、上のボタンをタップしてください。",
    backHome: "ホームに戻る",
  },
  ko: {
    title: "Stripe 정산 계좌 연결",
    subtitle: "SnowPro로 돌아가 수취 계정 상태를 확인하세요. Stripe에서 추가 정보나 본인 확인을 요구할 수 있습니다.",
    redirecting: "SnowPro 앱을 여는 중...",
    button: "SnowPro 앱 열기",
    manualHint: "자동으로 이동하지 않으면 위 버튼을 눌러주세요.",
    backHome: "홈으로 돌아가기",
  },
  fr: {
    title: "Configuration des paiements Stripe",
    subtitle: "Revenez dans SnowPro pour vérifier votre compte. Stripe peut encore demander des renseignements ou une vérification d’identité.",
    redirecting: "Ouverture de l'application SnowPro...",
    button: "Ouvrir l'application SnowPro",
    manualHint: "Si vous n'êtes pas redirigé automatiquement, veuillez cliquer sur le bouton ci-dessus.",
    backHome: "Retour à l'accueil",
  },
  de: {
    title: "Stripe Auszahlungskonto-Einrichtung",
    subtitle: "Kehren Sie zu SnowPro zurück, um den Kontostatus zu prüfen. Stripe benötigt möglicherweise weitere Angaben oder eine Identitätsprüfung.",
    redirecting: "SnowPro App wird geöffnet...",
    button: "SnowPro App öffnen",
    manualHint: "Falls die Weiterleitung nicht automatisch erfolgt, tippen Sie bitte auf den Button oben.",
    backHome: "Zurück zur Startseite",
  },
  es: {
    title: "Configuración de pagos Stripe",
    subtitle: "Vuelve a SnowPro para comprobar el estado de tu cuenta. Stripe podría necesitar más información o verificar tu identidad.",
    redirecting: "Abriendo la aplicación SnowPro...",
    button: "Abrir la aplicación SnowPro",
    manualHint: "Si no es redirigido automáticamente, toque el botón de arriba.",
    backHome: "Volver al inicio",
  },
  ru: {
    title: "Настройка выплат Stripe",
    subtitle: "Вернитесь в SnowPro, чтобы проверить состояние счёта. Stripe может запросить дополнительные сведения или проверку личности.",
    redirecting: "Открытие приложения SnowPro...",
    button: "Открыть приложение SnowPro",
    manualHint: "Если перенаправление не произошло автоматически, нажмите кнопку выше.",
    backHome: "На главную",
  },
};

const LinkStripePage: React.FC = () => {
  const { language } = useLanguage();
  const t = localTranslations[language as keyof typeof localTranslations] || localTranslations.en;
  const [redirected, setRedirected] = useState(false);

  const appDeepLink = 'snowpro://link-stripe';

  useEffect(() => {
    // Attempt automatic redirect to SnowPro app
    const timer = setTimeout(() => {
      try {
        window.location.href = appDeepLink;
        setRedirected(true);
      } catch {
        // Fallback silently if browser blocks programmatic navigation
      }
    }, 150);
    return () => clearTimeout(timer);
  }, [appDeepLink]);

  const handleOpenApp = () => {
    window.location.href = appDeepLink;
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4 text-slate-100">
      <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl max-w-md w-full text-center relative overflow-hidden">
        {/* Glow decoration */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-500" />

        <div className="w-16 h-16 bg-blue-500/10 border border-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-400">
          <ArrowRight className="w-8 h-8 text-blue-400" />
        </div>

        <h1 className="text-2xl font-bold text-white mb-2">{t.title}</h1>
        <p className="text-slate-400 text-sm mb-6 leading-relaxed">
          {redirected ? t.redirecting : t.subtitle}
        </p>

        <button
          onClick={handleOpenApp}
          className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3.5 px-6 rounded-xl transition-all shadow-lg shadow-blue-600/20 active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>{t.button}</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <p className="text-xs text-slate-500 mt-4 leading-normal">
          {t.manualHint}
        </p>

        <div className="mt-8 pt-4 border-t border-slate-800/80">
          <Link
            to="/"
            className="text-xs text-slate-400 hover:text-slate-300 transition-colors"
          >
            {t.backHome}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LinkStripePage;
