import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { ArrowRight, AlertCircle, CheckCircle2 } from 'lucide-react';

const localTranslations = {
  zh: {
    title: "PayPal 收款账户绑定",
    subtitle: "授权已成功，正在尝试返回 SnowPro App 完成绑定...",
    redirecting: "正在唤醒 SnowPro App...",
    button: "打开 SnowPro App 完成绑定",
    manualHint: "如果您的设备没有自动跳转，请点击上方按钮返回 App。",
    backHome: "返回官网首页",
    invalidTitle: "PayPal 授权未完成",
    invalidMsg: "未检测到有效的授权码或安全令牌（State）。请返回 SnowPro App 重新发起绑定。",
    errorMsg: "PayPal 授权被取消或发生错误。请返回 SnowPro App 重新发起绑定。",
  },
  en: {
    title: "Connect PayPal Account",
    subtitle: "Authorization successful. Attempting to return to SnowPro App to complete...",
    redirecting: "Opening SnowPro App...",
    button: "Open SnowPro App to Complete",
    manualHint: "If you are not automatically redirected, please click the button above.",
    backHome: "Back to Home",
    invalidTitle: "PayPal Authorization Incomplete",
    invalidMsg: "No valid authorization code or state token found. Please try connecting again from the SnowPro app.",
    errorMsg: "PayPal authorization was cancelled or failed. Please try connecting again from the SnowPro app.",
  },
  ja: {
    title: "PayPal 受取口座連携",
    subtitle: "認証が完了しました。SnowPro アプリに戻っています...",
    redirecting: "SnowPro アプリを開いています...",
    button: "SnowPro アプリを開いて完了",
    manualHint: "自動的に戻らない場合は、上のボタンをタップしてください。",
    backHome: "ホームに戻る",
    invalidTitle: "PayPal 認証が不完全です",
    invalidMsg: "有効な認証コードまたはセキュリティトークンが見つかりません。SnowPro アプリから再度お試しください。",
    errorMsg: "PayPal 認証がキャンセルされたかエラーが発生しました。SnowPro アプリから再度お試しください。",
  },
  ko: {
    title: "PayPal 정산 계좌 연결",
    subtitle: "인증이 완료되었습니다. SnowPro 앱으로 돌아가는 중...",
    redirecting: "SnowPro 앱을 여는 중...",
    button: "SnowPro 앱을 열어 완료하기",
    manualHint: "자동으로 이동하지 않으면 위 버튼을 눌러주세요.",
    backHome: "홈으로 돌아가기",
    invalidTitle: "PayPal 인증 미완료",
    invalidMsg: "유효한 인증 코드 또는 보안 토큰을 찾을 수 없습니다. SnowPro 앱에서 다시 시도해 주세요.",
    errorMsg: "PayPal 인증이 취소되었거나 오류가 발생했습니다. SnowPro 앱에서 다시 시도해 주세요.",
  },
  fr: {
    title: "Lier le compte PayPal",
    subtitle: "Autorisation réussie. Retour à l'application SnowPro pour finaliser...",
    redirecting: "Ouverture de l'application SnowPro...",
    button: "Ouvrir l'application SnowPro pour finaliser",
    manualHint: "Si vous n'êtes pas redirigé automatiquement, veuillez cliquer sur le bouton ci-dessus.",
    backHome: "Retour à l'accueil",
    invalidTitle: "Autorisation PayPal incomplète",
    invalidMsg: "Aucun code d'autorisation ou jeton d'état valide trouvé. Veuillez réessayer depuis l'application SnowPro.",
    errorMsg: "L'autorisation PayPal a été annulée ou a échoué. Veuillez réessayer depuis l'application SnowPro.",
  },
  de: {
    title: "PayPal-Konto verbinden",
    subtitle: "Autorisierung erfolgreich. Rückkehr zur SnowPro App zum Abschluss...",
    redirecting: "SnowPro App wird geöffnet...",
    button: "SnowPro App öffnen zum Abschluss",
    manualHint: "Falls die Weiterleitung nicht automatisch erfolgt, tippen Sie bitte auf den Button oben.",
    backHome: "Zurück zur Startseite",
    invalidTitle: "PayPal-Autorisierung unvollständig",
    invalidMsg: "Kein gültiger Autorisierungscode oder Sicherheitstoken gefunden. Bitte versuchen Sie es in der SnowPro App erneut.",
    errorMsg: "PayPal-Autorisierung wurde abgebrochen oder ist fehlgeschlagen. Bitte versuchen Sie es in der SnowPro App erneut.",
  },
  es: {
    title: "Vincular cuenta PayPal",
    subtitle: "Autorización exitosa. Volviendo a la aplicación SnowPro para completar...",
    redirecting: "Abriendo la aplicación SnowPro...",
    button: "Abrir la aplicación SnowPro para completar",
    manualHint: "Si no es redirigido automáticamente, toque el botón de arriba.",
    backHome: "Volver al inicio",
    invalidTitle: "Autorización de PayPal incompleta",
    invalidMsg: "No se encontró un código de autorización o token de estado válido. Inténtelo de nuevo desde la aplicación SnowPro.",
    errorMsg: "La autorización de PayPal se canceló o falló. Inténtelo de nuevo desde la aplicación SnowPro.",
  },
  ru: {
    title: "Подключение аккаунта PayPal",
    subtitle: "Авторизация прошла успешно. Возвращаемся в SnowPro для завершения...",
    redirecting: "Открытие приложения SnowPro...",
    button: "Открыть приложение SnowPro для завершения",
    manualHint: "Если перенаправление не произошло автоматически, нажмите кнопку выше.",
    backHome: "На главную",
    invalidTitle: "Авторизация PayPal не завершена",
    invalidMsg: "Не найден действительный код авторизации или токен безопасности. Пожалуйста, попробуйте снова из приложения SnowPro.",
    errorMsg: "Авторизация PayPal была отменена или завершилась с ошибкой. Пожалуйста, попробуйте снова из приложения SnowPro.",
  },
};

const LinkPaypalPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { language } = useLanguage();
  const t = localTranslations[language as keyof typeof localTranslations] || localTranslations.en;

  const code = searchParams.get('code');
  const state = searchParams.get('state');
  const error = searchParams.get('error') || searchParams.get('error_description');

  const isValid = Boolean(code && state && !error);
  const [redirected, setRedirected] = useState(false);

  // Both code and state are required by backend HMAC validation and mobile deep link handler
  const appDeepLink = isValid
    ? `snowpro://link-paypal?code=${encodeURIComponent(code!)}&state=${encodeURIComponent(state!)}`
    : '';

  useEffect(() => {
    if (isValid && appDeepLink) {
      const timer = setTimeout(() => {
        try {
          window.location.href = appDeepLink;
          setRedirected(true);
        } catch {
          // Ignored if browser policy blocks programmatic navigation
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [isValid, appDeepLink]);

  const handleOpenApp = () => {
    if (appDeepLink) {
      window.location.href = appDeepLink;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4 text-slate-100">
      <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl max-w-md w-full text-center relative overflow-hidden">
        {/* Glow decoration */}
        <div
          className={`absolute top-0 left-0 right-0 h-1 ${
            isValid
              ? 'bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-500'
              : 'bg-gradient-to-r from-rose-500 via-amber-500 to-rose-500'
          }`}
        />

        {isValid ? (
          <>
            <div className="w-16 h-16 bg-blue-500/10 border border-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-400">
              <CheckCircle2 className="w-8 h-8 text-blue-400" />
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
          </>
        ) : (
          <>
            <div className="w-16 h-16 bg-rose-500/10 border border-rose-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-rose-400">
              <AlertCircle className="w-8 h-8 text-rose-400" />
            </div>

            <h1 className="text-2xl font-bold text-white mb-2">{t.invalidTitle}</h1>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              {error ? t.errorMsg : t.invalidMsg}
            </p>
          </>
        )}

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

export default LinkPaypalPage;
