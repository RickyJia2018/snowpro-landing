import { checkoutFetch } from '../lib/checkout';
import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { CheckCircle, ArrowRight, Home, Coins, Loader2, AlertCircle } from 'lucide-react';
import { API_BASE_URL } from '../config/api';
import { getValidRechargeAccessToken } from '../lib/rechargeSession';
import { removePendingStripeSessionId } from '../lib/pendingStripeSessions';
import { parseTokenAmount } from '../lib/tokenConversion';

const localTranslations = {
  zh: {
    successTitle: "充值成功！",
    successMessage: "您的代币已成功充值。现在您可以返回 Snow Pro App 中刷新页面查看最新余额。",
    backHome: "返回官网首页",
    openApp: "打开 Snow Pro App",
    backToRecharge: "继续充值代币",
    verifyingTitle: "正在确认到账...",
    verifyingMessage: "正在联系支付通道确认您的订单入账状态，请稍候...",
    failedTitle: "到账确认中...",
    failedMessage: "您的付款已成功提交！由于支付通道确认稍有延迟，代币可能需要 1~2 分钟入账。请放心，系统正在自动为您补单。您可以稍后返回 App 查看最新余额。",
    tokenFulfillSuccess: "您的代币已实时确认到账！本次共购得 {amount} 个代币。",
    retryBtn: "重新校验到账状态",
    noSessionTitle: "未找到充值会话",
    noSessionMessage: "未检测到有效的支付订单信息。如果您刚完成了支付，代币会在后台自动入账；或者您可以返回充值页面重新发起充值。",
    sessionExpiredError: "充值会话已过期，请在 App 中重新点击充值。",
    clearanceDelayed: "支付网络确认延迟，请稍后刷新 App 页面查看最新余额。",
  },
  en: {
    successTitle: "Recharge Successful!",
    successMessage: "Your tokens have been successfully credited to your account. You can now return to the Snow Pro App and refresh to see your updated balance.",
    backHome: "Back to Home",
    openApp: "Open Snow Pro App",
    backToRecharge: "Buy More Tokens",
    verifyingTitle: "Verifying Fulfill...",
    verifyingMessage: "Checking your payment status with the payment processor, please wait...",
    failedTitle: "Fulfillment Pending...",
    failedMessage: "Your payment was submitted! However, due to payment network latency, the tokens haven't credited yet. Don't worry, the system will automatically fulfill it in 1-2 minutes. You can return to the App and refresh later.",
    tokenFulfillSuccess: "Tokens credited successfully! You've received {amount} tokens.",
    retryBtn: "Verify Status Again",
    noSessionTitle: "No Active Recharge Session",
    noSessionMessage: "No payment transaction was detected. If you just completed a payment, your tokens will be credited shortly; or you can return to the recharge page.",
    sessionExpiredError: "Your recharge session has expired. Please reopen recharge from the app.",
    clearanceDelayed: "Payment clearance delayed. Please check balance in App later.",
  },
  ja: {
    successTitle: "チャージ完了！",
    successMessage: "トークンがアカウントに正常にチャージされました。Snow Pro アプリに戻って最新の残高をご確認ください。",
    backHome: "トップページへ戻る",
    openApp: "Snow Pro アプリを開く",
    backToRecharge: "さらにトークンを購入",
    verifyingTitle: "入金確認中...",
    verifyingMessage: "決済代行機関と支払い状況を確認しています。少々お待ちください...",
    failedTitle: "入金確認保留中...",
    failedMessage: "お支払いは正常に送信されました。決済ネットワークの反映遅延により、トークンの付与に1〜2分程度かかる場合があります。システムが自動的に補正処理を行っておりますのでご安心ください。後ほどアプリで残高をご確認いただけます。",
    tokenFulfillSuccess: "トークンの入金がリアルタイムで確認されました！今回は合計 {amount} トークンを購入しました。",
    retryBtn: "入金状況を再確認する",
    noSessionTitle: "アクティブなチャージセッションがありません",
    noSessionMessage: "有効な支払い取引が検出されませんでした。お支払いが完了している場合、トークンはまもなくアカウントに反映されます。またはチャージページに戻って再試行してください。",
    sessionExpiredError: "チャージセッションの有効期限が切れました。アプリから再度チャージを開いてください。",
    clearanceDelayed: "決済ネットワークの確認が遅延しています。後ほどアプリで残高をご確認ください。",
  },
  ko: {
    successTitle: "충전 성공!",
    successMessage: "토큰이 계정에 성공적으로 충전되었습니다. 이제 Snow Pro 앱으로 돌아가 최신 잔액을 확인하실 수 있습니다.",
    backHome: "홈으로 돌아가기",
    openApp: "Snow Pro 앱 열기",
    backToRecharge: "토큰 추가 충전",
    verifyingTitle: "지급 확인 중...",
    verifyingMessage: "결제 대행사와 주문 처리 상태를 확인하고 있습니다. 잠시만 기다려 주세요...",
    failedTitle: "지급 처리 대기 중...",
    failedMessage: "결제가 성공적으로 제출되었습니다! 결제망 지연으로 인해 토큰 지급에 1~2분 정도 소요될 수 있습니다. 시스템이 자동으로 보정하고 있으니 안심하세요. 잠시 후 앱에서 최신 잔액을 확인해 주세요.",
    tokenFulfillSuccess: "토큰이 실시간으로 확인 및 지급되었습니다! 총 {amount}개의 토큰을 구매하셨습니다.",
    retryBtn: "지급 상태 다시 확인",
    noSessionTitle: "유효한 충전 세션이 없습니다",
    noSessionMessage: "유효한 결제 거래가 감지되지 않았습니다. 방금 결제를 완료하셨다면 잠시 후 자동으로 지급됩니다. 또는 충전 페이지로 돌아가 다시 시도해 주세요.",
    sessionExpiredError: "충전 세션이 만료되었습니다. 앱에서 다시 충전을 열어주세요.",
    clearanceDelayed: "결제망 확인이 지연되고 있습니다. 잠시 후 앱에서 잔액을 확인해 주세요.",
  },
  fr: {
    successTitle: "Recharge réussie !",
    successMessage: "Vos jetons ont été crédités avec succès sur votre compte. Vous pouvez maintenant retourner dans l'application Snow Pro pour voir votre solde mis à jour.",
    backHome: "Retour à l'accueil",
    openApp: "Ouvrir l'application Snow Pro",
    backToRecharge: "Acheter d'autres jetons",
    verifyingTitle: "Vérification en cours...",
    verifyingMessage: "Vérification du statut de votre paiement auprès du processeur, veuillez patienter...",
    failedTitle: "Traitement en attente...",
    failedMessage: "Votre paiement a été soumis ! En raison de la latence du réseau bancaire, les jetons peuvent prendre 1 à 2 minutes pour apparaître. Le système effectue le traitement automatique. Vous pourrez vérifier votre solde dans l'application un peu plus tard.",
    tokenFulfillSuccess: "Jetons crédités avec succès ! Vous avez reçu {amount} jetons.",
    retryBtn: "Revérifier le statut",
    noSessionTitle: "Aucune session de recharge active",
    noSessionMessage: "Aucune transaction de paiement détectée. Si vous venez d'effectuer un paiement, vos jetons seront crédités sous peu.",
    sessionExpiredError: "Votre session de recharge a expiré. Veuillez rouvrir la recharge depuis l'application.",
    clearanceDelayed: "Délai de confirmation du paiement. Veuillez vérifier votre solde dans l'application ultérieurement.",
  },
  de: {
    successTitle: "Aufladung erfolgreich!",
    successMessage: "Ihre Token wurden Ihrem Konto erfolgreich gutgeschrieben. Sie können jetzt zur Snow Pro App zurückkehren, um Ihr aktualisiertes Guthaben zu sehen.",
    backHome: "Zurück zur Startseite",
    openApp: "Snow Pro App öffnen",
    backToRecharge: "Weitere Token kaufen",
    verifyingTitle: "Gutschrift wird überprüft...",
    verifyingMessage: "Zahlungsstatus wird beim Zahlungsdienstleister überprüft, bitte warten...",
    failedTitle: "Bearbeitung ausstehend...",
    failedMessage: "Ihre Zahlung wurde übermittelt! Aufgrund von Netzwerkverzögerungen kann es 1-2 Minuten dauern, bis die Token gutgeschrieben sind. Das System bucht diese automatisch nach. Sie können Ihr Guthaben in Kürze in der App überprüfen.",
    tokenFulfillSuccess: "Token erfolgreich gutgeschrieben! Sie haben {amount} Token erhalten.",
    retryBtn: "Status erneut prüfen",
    noSessionTitle: "Keine aktive Aufladesitzung",
    noSessionMessage: "Keine Zahlungstransaktion erkannt. Falls Sie gerade bezahlt haben, werden die Token in Kürze gutgeschrieben.",
    sessionExpiredError: "Ihre Aufladesitzung ist abgelaufen. Bitte öffnen Sie die Aufladung erneut in der App.",
    clearanceDelayed: "Zahlungsbestätigung verzögert. Bitte überprüfen Sie das Guthaben später in der App.",
  },
  es: {
    successTitle: "¡Recarga exitosa!",
    successMessage: "Sus tokens han sido acreditados exitosamente en su cuenta. Ya puede regresar a la app Snow Pro para ver su saldo actualizado.",
    backHome: "Volver al inicio",
    openApp: "Abrir app Snow Pro",
    backToRecharge: "Comprar más tokens",
    verifyingTitle: "Verificando acreditación...",
    verifyingMessage: "Verificando el estado de su pago con la pasarela, por favor espere...",
    failedTitle: "Acreditación pendiente...",
    failedMessage: "¡Su pago fue enviado con éxito! Debido a la latencia de la red, los tokens pueden demorar 1-2 minutos en acreditarse. El sistema los acreditará automáticamente. Puede consultar su saldo en la app en unos momentos.",
    tokenFulfillSuccess: "¡Tokens acreditados con éxito! Ha recibido {amount} tokens.",
    retryBtn: "Verificar estado nuevamente",
    noSessionTitle: "Sin sesión de recarga activa",
    noSessionMessage: "No se detectó ninguna transacción de pago. Si acaba de pagar, sus tokens se acreditarán en breve.",
    sessionExpiredError: "Su sesión de recarga ha caducado. Vuelva a abrir la recarga desde la aplicación.",
    clearanceDelayed: "Confirmación de pago demorada. Por favor, verifique su saldo en la app más tarde.",
  },
  ru: {
    successTitle: "Пополнение успешно!",
    successMessage: "Токены успешно зачислены на ваш баланс. Вы можете вернуться в приложение Snow Pro, чтобы увидеть обновленный баланс.",
    backHome: "На главную",
    openApp: "Открыть Snow Pro",
    backToRecharge: "Купить еще токены",
    verifyingTitle: "Подтверждение зачисления...",
    verifyingMessage: "Проверяем статус оплаты в платежной системе, пожалуйста, подождите...",
    failedTitle: "Зачисление в процессе...",
    failedMessage: "Ваш платеж успешно принят! Из-за задержки подтверждения платежной сети начисление токенов может занять 1-2 минуты. Система начислит их автоматически. Проверьте баланс в приложении чуть позже.",
    tokenFulfillSuccess: "Токены успешно начислены! Вы получили {amount} токенов.",
    retryBtn: "Проверить статус снова",
    noSessionTitle: "Нет активного сеанса пополнения",
    noSessionMessage: "Платежная транзакция не обнаружена. Если вы только что оплатили заказ, токены будут зачислены в ближайшее время.",
    sessionExpiredError: "Срок действия сеанса пополнения истек. Пожалуйста, откройте пополнение заново из приложения.",
    clearanceDelayed: "Подтверждение платежа задерживается. Пожалуйста, проверьте баланс в приложении позже.",
  },
};

export default function RechargeSuccessPage() {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  
  const [status, setStatus] = React.useState<'idle' | 'verifying' | 'success' | 'failed' | 'no_session'>(
    sessionId ? 'verifying' : 'no_session'
  );
  const [tokenAmount, setTokenAmount] = React.useState<number>(0);
  const [errorMessage, setErrorMessage] = React.useState<string>('');

  const tLocal = localTranslations[language] || localTranslations.en;

  const verificationInFlight = React.useRef(false);
  const mounted = React.useRef(false);
  React.useEffect(() => { mounted.current = true; return () => { mounted.current = false; }; }, []);

  const verifyOrder = async () => {
    if (!sessionId || verificationInFlight.current) return;
    verificationInFlight.current = true;
    try {
    setStatus('verifying');
    setErrorMessage('');
    
    const token = getValidRechargeAccessToken();
    if (!token) {
      setStatus('failed');
      setErrorMessage(tLocal.sessionExpiredError);
      return;
    }

    const delays = [2000, 3000, 5000, 8000, 10000];

    for (let attempt = 0; attempt < delays.length; attempt++) {
      if (!mounted.current) return;
      try {
        const response = await checkoutFetch(`${API_BASE_URL}/token/purchases/verify_stripe`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            session_id: sessionId
          })
        });

        if (!mounted.current) return;
        if (getValidRechargeAccessToken() !== token || response.status === 401) {
          setStatus('failed');
          setErrorMessage(tLocal.sessionExpiredError);
          return;
        }
        if (!response.ok) {
          const errData = await response.json().catch(() => ({}));
          throw new Error(errData.message || "Fulfillment verification failed");
        }

        const data = await response.json();
        if (!mounted.current || getValidRechargeAccessToken() !== token) return;
        if (data.success) {
          const amt = parseTokenAmount(data);
          setTokenAmount(amt);
          setStatus('success');
          removePendingStripeSessionId(sessionId);
          // Clean up URL parameter to prevent session_id exposure or re-trigger on refresh
          const newUrl = window.location.pathname + window.location.hash;
          window.history.replaceState({}, document.title, newUrl);
          return;
        }

        if (attempt < delays.length - 1) {
          console.log(`[Snow Pro Recharge] Verification pending (attempt ${attempt + 1}/${delays.length}), retrying in ${delays[attempt]}ms...`);
          await new Promise((resolve) => setTimeout(resolve, delays[attempt]));
        } else {
          setStatus('failed');
          setErrorMessage(tLocal.clearanceDelayed);
        }
      } catch (err: any) {
        if (!mounted.current) return;
        console.error(`Order verification error (attempt ${attempt + 1}/${delays.length}):`, err);
        if (attempt < delays.length - 1) {
          await new Promise((resolve) => setTimeout(resolve, delays[attempt]));
        } else {
          setStatus('failed');
          setErrorMessage(tLocal.clearanceDelayed);
        }
      }
    }
    } finally { verificationInFlight.current = false; }
  };

  React.useEffect(() => {
    if (sessionId) {
      verifyOrder();
    }
  }, [sessionId]);

  const handleOpenApp = () => {
    window.location.href = "snowpro://";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-slate-100 flex flex-col items-center justify-center p-4 selection:bg-blue-500 selection:text-white">
      <div className="max-w-md w-full bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-2xl text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
        
        {/* State 1: Verifying */}
        {status === 'verifying' && (
          <>
            <div className="w-20 h-20 bg-blue-500/15 border border-blue-500/30 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-blue-500/5">
              <Loader2 className="h-10 w-10 text-blue-400 animate-spin" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-3 tracking-tight">{tLocal.verifyingTitle}</h1>
            <p className="text-slate-400 text-sm leading-relaxed mb-10">{tLocal.verifyingMessage}</p>
          </>
        )}

        {/* State 2: Success */}
        {status === 'success' && (
          <>
            <div className="w-20 h-20 bg-green-500/15 border border-green-500/30 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-green-500/5">
              <CheckCircle className="h-10 w-10 text-green-400" />
            </div>
            <h1 className="text-3xl font-black text-white mb-3 tracking-tight">{tLocal.successTitle}</h1>
            <p className="text-slate-200 text-sm font-semibold mb-4 bg-green-500/10 border border-green-500/20 py-2.5 px-4 rounded-xl inline-flex items-center gap-2">
              <Coins className="h-4 w-4 text-amber-400" />
              {tLocal.tokenFulfillSuccess.replace('{amount}', tokenAmount.toString())}
            </p>
            <p className="text-slate-400 text-sm leading-relaxed mb-10">{tLocal.successMessage}</p>
          </>
        )}

        {/* State 3: Failed / Latency */}
        {status === 'failed' && (
          <>
            <div className="w-20 h-20 bg-amber-500/15 border border-amber-500/30 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-amber-500/5">
              <AlertCircle className="h-10 w-10 text-amber-400" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-3 tracking-tight">{tLocal.failedTitle}</h1>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">{tLocal.failedMessage}</p>
            {errorMessage && (
              <p className="text-red-400/90 text-xs font-mono bg-slate-950 p-3 rounded-xl border border-slate-800 text-left overflow-x-auto whitespace-pre-wrap leading-normal mb-8">
                {errorMessage}
              </p>
            )}
          </>
        )}

        {/* State 4: No Session / Direct Visit */}
        {status === 'no_session' && (
          <>
            <div className="w-20 h-20 bg-slate-800/50 border border-slate-700/60 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
              <AlertCircle className="h-10 w-10 text-slate-400" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-3 tracking-tight">{tLocal.noSessionTitle}</h1>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">{tLocal.noSessionMessage}</p>
          </>
        )}

        {/* Action Buttons */}
        <div className="space-y-4">
          {status === 'failed' && (
            <button 
              onClick={verifyOrder}
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-4 px-6 rounded-2xl hover:shadow-lg hover:shadow-blue-500/25 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <Loader2 className="h-4 w-4 animate-spin hidden" />
              <span>{tLocal.retryBtn}</span>
            </button>
          )}

          {status === 'success' && (
            <button 
              onClick={handleOpenApp}
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-4 px-6 rounded-2xl hover:shadow-lg hover:shadow-blue-500/25 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <span>{tLocal.openApp}</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          )}

          <button 
            onClick={() => navigate('/recharge')}
            className="w-full bg-blue-600/10 border border-blue-500/30 text-blue-400 hover:text-blue-300 font-bold py-4 px-6 rounded-2xl hover:bg-blue-600/20 hover:border-blue-500/50 transition-all flex items-center justify-center gap-2"
          >
            <Coins className="h-4 w-4" />
            <span>{tLocal.backToRecharge}</span>
          </button>
          
          <button 
            onClick={() => navigate('/')}
            className="w-full bg-slate-950 border border-slate-800 text-slate-400 hover:text-white font-bold py-4 px-6 rounded-2xl hover:bg-slate-900/50 hover:border-slate-700 transition-all flex items-center justify-center gap-2"
          >
            <Home className="h-4 w-4" />
            <span>{tLocal.backHome}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
