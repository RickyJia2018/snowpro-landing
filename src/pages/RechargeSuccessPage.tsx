import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { CheckCircle, ArrowRight, Home, Coins, Loader2, AlertCircle } from 'lucide-react';

const localTranslations = {
  zh: {
    successTitle: "充值成功！",
    successMessage: "您的代币已成功充值。现在您可以返回 SnowPro App 中刷新页面查看最新余额。",
    backHome: "返回官网首页",
    openApp: "打开 SnowPro App",
    backToRecharge: "继续充值代币",
    
    verifyingTitle: "正在确认到账...",
    verifyingMessage: "正在联系支付通道确认您的订单入账状态，请稍候...",
    failedTitle: "到账确认中...",
    failedMessage: "您的付款已成功提交！由于支付通道确认稍有延迟，代币可能需要 1~2 分钟入账。请放心，系统正在自动为您补单。您可以稍后返回 App 查看最新余额。",
    tokenFulfillSuccess: "您的代币已实时确认到账！本次共购得 {amount} 个代币。",
    retryBtn: "重新校验到账状态"
  },
  en: {
    successTitle: "Recharge Successful!",
    successMessage: "Your tokens have been successfully credited to your account. You can now return to the SnowPro App and refresh to see your updated balance.",
    backHome: "Back to Home",
    openApp: "Open SnowPro App",
    backToRecharge: "Buy More Tokens",
    
    verifyingTitle: "Verifying Fulfill...",
    verifyingMessage: "Checking your payment status with the payment processor, please wait...",
    failedTitle: "Fulfillment Pending...",
    failedMessage: "Your payment was submitted! However, due to payment network latency, the tokens haven't credited yet. Don't worry, the system will automatically fulfill it in 1-2 minutes. You can return to the App and refresh later.",
    tokenFulfillSuccess: "Tokens credited successfully! You've received {amount} tokens.",
    retryBtn: "Verify Status Again"
  }
};

export default function RechargeSuccessPage() {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  
  const [status, setStatus] = React.useState<'idle' | 'verifying' | 'success' | 'failed'>(
    sessionId ? 'verifying' : 'idle'
  );
  const [tokenAmount, setTokenAmount] = React.useState<number>(0);
  const [errorMessage, setErrorMessage] = React.useState<string>('');

  const tLocal = localTranslations[language === 'zh' ? 'zh' : 'en'];
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://peakpal-server-dev-786618190531.us-west2.run.app';

  const verifyOrder = async () => {
    if (!sessionId) return;
    setStatus('verifying');
    setErrorMessage('');
    
    const token = localStorage.getItem('accessToken');
    if (!token) {
      setStatus('failed');
      setErrorMessage(language === 'zh' ? '未找到登录 Token，请重新登录' : 'Session token not found, please log in again.');
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/token/purchases/verify_stripe`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          session_id: sessionId
        })
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.message || "Fulfillment verification failed");
      }

      const data = await response.json();
      if (data.success) {
        setTokenAmount(data.purchasedTokenAmount || data.purchased_token_amount || 0);
        setStatus('success');
        localStorage.removeItem('pending_stripe_session_id');
      } else {
        setStatus('failed');
        setErrorMessage(data.message || 'Payment not cleared yet');
      }
    } catch (err: any) {
      console.error("Order verification error:", err);
      setStatus('failed');
      setErrorMessage(err.message || 'Verification error');
    }
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
                Error details: {errorMessage}
              </p>
            )}
          </>
        )}

        {/* State 4: Idle (Fallback Static Page) */}
        {status === 'idle' && (
          <>
            <div className="w-20 h-20 bg-green-500/15 border border-green-500/30 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-green-500/5">
              <CheckCircle className="h-10 w-10 text-green-400" />
            </div>
            <h1 className="text-3xl font-black text-white mb-3 tracking-tight">{tLocal.successTitle}</h1>
            <p className="text-slate-400 text-sm leading-relaxed mb-10">{tLocal.successMessage}</p>
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

          {status !== 'failed' && (
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
