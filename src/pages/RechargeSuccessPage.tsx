import { checkoutFetch } from '../lib/checkout';
import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { CheckCircle, ArrowRight, Home, Coins, Loader2, AlertCircle } from 'lucide-react';
import { API_BASE_URL } from '../config/api';
import PurchaseLogin from '../components/PurchaseLogin';
import { clearRechargeAccessToken, getValidRechargeAccessToken } from '../lib/rechargeSession';
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
    failedMessage: "尚未确认这笔订单是否到账。请重试确认；如果已经付款，请勿重复购买。",
    tokenFulfillSuccess: "您的代币已实时确认到账！本次共购得 {amount} 个代币。",
    retryBtn: "重新校验到账状态",
    noSessionTitle: "未找到充值会话",
    noSessionMessage: "未检测到有效的支付订单信息。如果您刚完成了支付，代币会在后台自动入账；或者您可以返回充值页面重新发起充值。",
    sessionExpiredError: "登录已过期。请使用购买时的同一账户重新登录，继续确认原订单，无需再次付款。",
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
    failedMessage: "We have not confirmed whether this order has been credited. Retry verification; if you have paid, do not purchase again.",
    tokenFulfillSuccess: "Tokens credited successfully! You've received {amount} tokens.",
    retryBtn: "Verify Status Again",
    noSessionTitle: "No Active Recharge Session",
    noSessionMessage: "No payment transaction was detected. If you just completed a payment, your tokens will be credited shortly; or you can return to the recharge page.",
    sessionExpiredError: "Your sign-in has expired. Sign in with the same account to verify this order. Do not pay again.",
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
    failedMessage: "この注文の付与状況をまだ確認できません。再度確認してください。お支払い済みの場合は再購入しないでください。",
    tokenFulfillSuccess: "トークンの入金がリアルタイムで確認されました！今回は合計 {amount} トークンを購入しました。",
    retryBtn: "入金状況を再確認する",
    noSessionTitle: "アクティブなチャージセッションがありません",
    noSessionMessage: "有効な支払い取引が検出されませんでした。お支払いが完了している場合、トークンはまもなくアカウントに反映されます。またはチャージページに戻って再試行してください。",
    sessionExpiredError: "ログインの有効期限が切れました。同じアカウントで再ログインして、この注文を確認してください。再度お支払いいただく必要はありません。",
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
    failedMessage: "이 주문의 지급 여부를 아직 확인하지 못했습니다. 다시 확인하세요. 이미 결제했다면 다시 구매하지 마세요.",
    tokenFulfillSuccess: "토큰이 실시간으로 확인 및 지급되었습니다! 총 {amount}개의 토큰을 구매하셨습니다.",
    retryBtn: "지급 상태 다시 확인",
    noSessionTitle: "유효한 충전 세션이 없습니다",
    noSessionMessage: "유효한 결제 거래가 감지되지 않았습니다. 방금 결제를 완료하셨다면 잠시 후 자동으로 지급됩니다. 또는 충전 페이지로 돌아가 다시 시도해 주세요.",
    sessionExpiredError: "로그인이 만료되었습니다. 같은 계정으로 다시 로그인하여 이 주문을 확인하세요. 다시 결제하지 마세요.",
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
    failedMessage: "Nous n’avons pas encore confirmé le crédit de cette commande. Réessayez la vérification. Si vous avez payé, ne rachetez pas.",
    tokenFulfillSuccess: "Jetons crédités avec succès ! Vous avez reçu {amount} jetons.",
    retryBtn: "Revérifier le statut",
    noSessionTitle: "Aucune session de recharge active",
    noSessionMessage: "Aucune transaction de paiement détectée. Si vous venez d'effectuer un paiement, vos jetons seront crédités sous peu.",
    sessionExpiredError: "Votre connexion a expiré. Reconnectez-vous avec le même compte pour vérifier cette commande. Ne payez pas à nouveau.",
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
    failedMessage: "Die Gutschrift dieser Bestellung ist noch nicht bestätigt. Prüfen Sie erneut. Wenn Sie bezahlt haben, kaufen Sie nicht erneut.",
    tokenFulfillSuccess: "Token erfolgreich gutgeschrieben! Sie haben {amount} Token erhalten.",
    retryBtn: "Status erneut prüfen",
    noSessionTitle: "Keine aktive Aufladesitzung",
    noSessionMessage: "Keine Zahlungstransaktion erkannt. Falls Sie gerade bezahlt haben, werden die Token in Kürze gutgeschrieben.",
    sessionExpiredError: "Ihre Anmeldung ist abgelaufen. Melden Sie sich mit demselben Konto an, um diese Bestellung zu prüfen. Zahlen Sie nicht erneut.",
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
    failedMessage: "Aún no hemos confirmado el abono de este pedido. Vuelva a verificar. Si ya pagó, no vuelva a comprar.",
    tokenFulfillSuccess: "¡Tokens acreditados con éxito! Ha recibido {amount} tokens.",
    retryBtn: "Verificar estado nuevamente",
    noSessionTitle: "Sin sesión de recarga activa",
    noSessionMessage: "No se detectó ninguna transacción de pago. Si acaba de pagar, sus tokens se acreditarán en breve.",
    sessionExpiredError: "Su sesión ha caducado. Inicie sesión con la misma cuenta para verificar este pedido. No vuelva a pagar.",
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
    failedMessage: "Зачисление по этому заказу ещё не подтверждено. Повторите проверку. Если вы уже оплатили, не покупайте повторно.",
    tokenFulfillSuccess: "Токены успешно начислены! Вы получили {amount} токенов.",
    retryBtn: "Проверить статус снова",
    noSessionTitle: "Нет активного сеанса пополнения",
    noSessionMessage: "Платежная транзакция не обнаружена. Если вы только что оплатили заказ, токены будут зачислены в ближайшее время.",
    sessionExpiredError: "Срок действия входа истёк. Войдите в тот же аккаунт для проверки этого заказа. Не оплачивайте повторно.",
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
  const [needsLogin, setNeedsLogin] = React.useState(false);
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
      setNeedsLogin(true);
      setStatus('failed');
      setErrorMessage(tLocal.sessionExpiredError);
      return;
    }

    setNeedsLogin(false);
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
          if (getValidRechargeAccessToken() === token) clearRechargeAccessToken();
          setNeedsLogin(true);
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
            <p className="text-slate-400 text-sm leading-relaxed mb-4">{needsLogin ? tLocal.sessionExpiredError : tLocal.failedMessage}</p>
            {errorMessage && !needsLogin && (
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

        {needsLogin && <PurchaseLogin scope="recharge" purpose="verify" zh={language === 'zh'} onSuccess={() => { setNeedsLogin(false); void verifyOrder(); }} />}

        {/* Action Buttons */}
        <div className="space-y-4">
          {status === 'failed' && !needsLogin && (
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
