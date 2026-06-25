import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { CheckCircle, ArrowRight, Home, Coins } from 'lucide-react';

const localTranslations = {
  zh: {
    successTitle: "充值成功！",
    successMessage: "您的代币已成功充值。现在您可以返回 SnowPro App 中刷新页面查看最新余额。",
    backHome: "返回官网首页",
    openApp: "打开 SnowPro App",
    backToRecharge: "继续充值代币",
  },
  en: {
    successTitle: "Recharge Successful!",
    successMessage: "Your tokens have been successfully credited to your account. You can now return to the SnowPro App and refresh to see your updated balance.",
    backHome: "Back to Home",
    openApp: "Open SnowPro App",
    backToRecharge: "Buy More Tokens",
  }
};

export default function RechargeSuccessPage() {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const tLocal = localTranslations[language === 'zh' ? 'zh' : 'en'];

  const handleOpenApp = () => {
    window.location.href = "snowpro://";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-slate-100 flex flex-col items-center justify-center p-4 selection:bg-blue-500 selection:text-white">
      <div className="max-w-md w-full bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-2xl text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
        
        {/* Animated Green Checkmark */}
        <div className="w-20 h-20 bg-green-500/15 border border-green-500/30 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-green-500/5 animate-pulse">
          <CheckCircle className="h-10 w-10 text-green-400" />
        </div>
        
        <h1 className="text-3xl font-black text-white mb-3 tracking-tight">{tLocal.successTitle}</h1>
        <p className="text-slate-400 text-sm leading-relaxed mb-10">{tLocal.successMessage}</p>

        <div className="space-y-4">
          <button 
            onClick={handleOpenApp}
            className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-4 px-6 rounded-2xl hover:shadow-lg hover:shadow-blue-500/25 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            <span>{tLocal.openApp}</span>
            <ArrowRight className="h-4 w-4" />
          </button>

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
