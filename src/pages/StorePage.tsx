import React, { useState } from 'react';
import { ArrowRight, Coins, CreditCard, LogOut, ShieldCheck } from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import PurchaseLogin from '../components/PurchaseLogin';
import { clearRechargeAccessToken, getValidRechargeAccessToken } from '../lib/rechargeSession';
import CarpoolPassPage from './CarpoolPassPage';
import RechargePage from './RechargePage';

type StoreTab = 'coins' | 'pass';

export default function StorePage() {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const zh = language === 'zh';

  const initialTab: StoreTab = searchParams.get('tab') === 'pass' ? 'pass' : 'coins';
  const [activeTab, setActiveTab] = useState<StoreTab>(initialTab);
  const [sessionKey, setSessionKey] = useState(0);
  const [authenticated, setAuthenticated] = useState<boolean>(() =>
    Boolean(getValidRechargeAccessToken('recharge') || getValidRechargeAccessToken('carpool_pass')),
  );

  const selectTab = (tab: StoreTab) => {
    setActiveTab(tab);
    setSearchParams(tab === 'pass' ? { tab: 'pass' } : {});
  };

  const handleLogout = () => {
    clearRechargeAccessToken('recharge');
    clearRechargeAccessToken('carpool_pass');
    sessionStorage.removeItem('recharge_session_id');
    setAuthenticated(false);
    setSessionKey((k) => k + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-slate-100 flex flex-col justify-between selection:bg-sky-500 selection:text-slate-950">
      <header className="border-b border-slate-800 bg-slate-950/75 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="flex items-center gap-2.5 text-left cursor-pointer"
          >
            <img
              src="/logo_icon.png"
              alt="Snow Pro Logo"
              className="w-8 h-8 rounded-xl object-cover border border-white/15"
            />
            <span className="text-lg font-bold tracking-tight text-white">
              {zh ? 'Snow Pro 商店' : 'Snow Pro Store'}
            </span>
          </button>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => navigate('/')}
              className="text-xs sm:text-sm text-slate-400 hover:text-white transition-colors"
            >
              {zh ? '返回首页' : 'Back to Home'}
            </button>
            {authenticated && (
              <button
                type="button"
                onClick={handleLogout}
                className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-400 hover:text-red-400 transition-colors px-3 py-1.5 rounded-lg hover:bg-red-500/10 border border-slate-800 hover:border-red-500/20"
              >
                <LogOut className="h-4 w-4" />
                <span>{zh ? '退出会话' : 'End Session'}</span>
              </button>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-3xl w-full mx-auto px-4 py-10 flex-grow flex flex-col justify-center">
        {!authenticated ? (
          <div className="max-w-md w-full mx-auto bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden text-center">
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-3xl -mr-16 -mt-16" />

            <div className="mx-auto w-16 h-16 bg-sky-500/10 border border-sky-500/20 rounded-2xl flex items-center justify-center mb-6 text-sky-400">
              <ShieldCheck className="h-8 w-8" />
            </div>

            <PurchaseLogin
              key={`login-${sessionKey}`}
              scope="recharge"
              extraScopes={['carpool_pass']}
              zh={zh}
              onSuccess={() => {
                setAuthenticated(true);
                setSessionKey((k) => k + 1);
              }}
            />

            <button
              type="button"
              onClick={() => navigate('/')}
              className="w-full bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 text-slate-300 hover:text-white font-semibold py-4 rounded-2xl hover:border-slate-600 transition-all active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer mt-3"
            >
              <span>{zh ? '返回首页' : 'Back to Home'}</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        ) : (
          <div>
            {/* Store Tab Switcher (shown only after authentication) */}
            <div className="max-w-md mx-auto mb-8 p-1.5 rounded-2xl bg-slate-900 border border-slate-800 grid grid-cols-2 gap-1.5">
              <button
                type="button"
                data-testid="store-tab-coins"
                onClick={() => selectTab('coins')}
                className={`flex items-center justify-center gap-2 rounded-xl py-2.5 px-3 text-sm font-semibold transition-all ${
                  activeTab === 'coins'
                    ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/20'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <Coins size={16} />
                <span>{zh ? 'Snow Coins 充值' : 'Snow Coins'}</span>
              </button>

              <button
                type="button"
                data-testid="store-tab-pass"
                onClick={() => selectTab('pass')}
                className={`flex items-center justify-center gap-2 rounded-xl py-2.5 px-3 text-sm font-semibold transition-all ${
                  activeTab === 'pass'
                    ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/20'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <CreditCard size={16} />
                <span>{zh ? 'Carpool 通行卡' : 'Carpool Pass'}</span>
              </button>
            </div>

            {activeTab === 'coins' ? (
              <RechargePage
                key={`coins-${sessionKey}`}
                embedded
                extraScopes={['carpool_pass']}
                onAuthSuccess={() => setAuthenticated(true)}
              />
            ) : (
              <CarpoolPassPage
                key={`pass-${sessionKey}`}
                embedded
                extraScopes={['recharge']}
                onAuthSuccess={() => setAuthenticated(true)}
              />
            )}
          </div>
        )}
      </main>

      <footer className="border-t border-slate-800 py-6 bg-slate-950/30 text-center text-xs text-slate-500">
        <p>&copy; {new Date().getFullYear()} Googuar Technology Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}
