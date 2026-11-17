import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Coins, CreditCard, Globe, Home, LogOut, ShieldCheck } from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { Language } from '../../locales';
import PurchaseLogin from '../components/PurchaseLogin';
import { clearRechargeAccessToken, getValidRechargeAccessToken } from '../lib/rechargeSession';
import CarpoolPassPage from './CarpoolPassPage';
import RechargePage from './RechargePage';

type StoreTab = 'coins' | 'pass';

const languages: { code: Language; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'zh', label: '中文' },
  { code: 'ja', label: '日本語' },
  { code: 'ko', label: '한국어' },
  { code: 'fr', label: 'Français' },
  { code: 'de', label: 'Deutsch' },
  { code: 'es', label: 'Español' },
  { code: 'ru', label: 'Русский' },
];

interface StoreLocale {
  storeTitle: string;
  backToHome: string;
  endSession: string;
  coinsTab: string;
  passTab: string;
}

const localTranslations: Record<Language, StoreLocale> = {
  en: {
    storeTitle: 'Snow Pro Store',
    backToHome: 'Back to Home',
    endSession: 'End Session',
    coinsTab: 'Snow Coins',
    passTab: 'Carpool Pass',
  },
  zh: {
    storeTitle: 'Snow Pro 商店',
    backToHome: '返回首页',
    endSession: '退出会话',
    coinsTab: 'Snow Coins 充值',
    passTab: 'Carpool 通行卡',
  },
  ja: {
    storeTitle: 'Snow Pro ストア',
    backToHome: 'ホームへ戻る',
    endSession: 'セッション終了',
    coinsTab: 'Snow Coins',
    passTab: 'Carpool パス',
  },
  ko: {
    storeTitle: 'Snow Pro 스토어',
    backToHome: '홈으로',
    endSession: '세션 종료',
    coinsTab: 'Snow Coins',
    passTab: 'Carpool 패스',
  },
  fr: {
    storeTitle: 'Boutique Snow Pro',
    backToHome: 'Accueil',
    endSession: 'Terminer la session',
    coinsTab: 'Snow Coins',
    passTab: 'Pass Carpool',
  },
  de: {
    storeTitle: 'Snow Pro Store',
    backToHome: 'Startseite',
    endSession: 'Sitzung beenden',
    coinsTab: 'Snow Coins',
    passTab: 'Carpool-Pass',
  },
  es: {
    storeTitle: 'Tienda Snow Pro',
    backToHome: 'Inicio',
    endSession: 'Cerrar sesión',
    coinsTab: 'Snow Coins',
    passTab: 'Pase Carpool',
  },
  ru: {
    storeTitle: 'Магазин Snow Pro',
    backToHome: 'На главную',
    endSession: 'Завершить сеанс',
    coinsTab: 'Snow Coins',
    passTab: 'Пропуск Carpool',
  },
};

const hasBothStoreTokens = () =>
  Boolean(getValidRechargeAccessToken('recharge') && getValidRechargeAccessToken('carpool_pass'));

export default function StorePage() {
  const { language, setLanguage } = useLanguage();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const zh = language === 'zh';
  const tLocal = localTranslations[language] || localTranslations.en;

  const initialTab: StoreTab = searchParams.get('tab') === 'pass' ? 'pass' : 'coins';
  const [activeTab, setActiveTab] = useState<StoreTab>(initialTab);
  const [sessionKey, setSessionKey] = useState(0);
  const [authenticated, setAuthenticated] = useState<boolean>(hasBothStoreTokens);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!langMenuOpen) return;
    const handleOutsideClick = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setLangMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [langMenuOpen]);

  const selectTab = (tab: StoreTab) => {
    if (!hasBothStoreTokens()) {
      setAuthenticated(false);
      return;
    }
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
    <div className="min-h-screen min-h-[100dvh] bg-gradient-to-b from-slate-950 to-slate-900 text-slate-100 flex flex-col justify-between selection:bg-sky-500 selection:text-slate-950">
      <header className="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 py-3 sm:py-3.5 flex items-center justify-between gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="flex items-center gap-2 sm:gap-2.5 text-left cursor-pointer min-w-0"
          >
            <img
              src="/logo_icon.png"
              alt="Snow Pro Logo"
              className="w-8 h-8 rounded-xl object-cover border border-white/15 shrink-0"
            />
            <span className="text-base sm:text-lg font-bold tracking-tight text-white truncate">
              {tLocal.storeTitle}
            </span>
          </button>

          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            <div ref={langMenuRef} className="relative">
              <button
                type="button"
                aria-label="Language selector"
                aria-expanded={langMenuOpen}
                onClick={() => setLangMenuOpen((open) => !open)}
                className="min-h-[36px] px-2 sm:px-2.5 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 border border-transparent hover:border-slate-800 transition-colors flex items-center gap-1.5 cursor-pointer touch-manipulation"
              >
                <Globe size={15} />
                <span className="text-xs uppercase font-mono">{language}</span>
              </button>

              {langMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-36 bg-slate-900/95 backdrop-blur-xl rounded-xl shadow-2xl py-1.5 border border-slate-800 text-slate-300 text-sm max-h-72 overflow-y-auto z-50">
                  {languages.map((lang) => (
                    <button
                      type="button"
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setLangMenuOpen(false);
                      }}
                      className={`block w-full text-left px-3.5 py-2.5 sm:py-2 hover:bg-white/5 transition-colors cursor-pointer touch-manipulation ${
                        language === lang.code ? 'text-sky-400 font-semibold bg-sky-500/10' : ''
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              type="button"
              aria-label={tLocal.backToHome}
              onClick={() => navigate('/')}
              className="min-h-[36px] text-xs sm:text-sm text-slate-400 hover:text-white transition-colors px-2 py-1.5 rounded-lg hover:bg-white/5 cursor-pointer touch-manipulation flex items-center gap-1.5 whitespace-nowrap"
            >
              <Home className="h-4 w-4 sm:hidden" />
              <span className="hidden sm:inline">{tLocal.backToHome}</span>
            </button>

            {authenticated && (
              <button
                type="button"
                onClick={handleLogout}
                className="min-h-[36px] flex items-center gap-1.5 text-xs sm:text-sm text-slate-300 hover:text-red-400 transition-colors px-2.5 sm:px-3 py-1.5 rounded-lg hover:bg-red-500/10 border border-slate-800 hover:border-red-500/25 cursor-pointer touch-manipulation whitespace-nowrap"
              >
                <LogOut className="h-4 w-4 shrink-0" />
                <span>{tLocal.endSession}</span>
              </button>
            )}
          </div>
        </div>
      </header>

      <main
        className={
          authenticated
            ? 'max-w-lg w-full mx-auto px-3 sm:px-4 py-4 sm:py-10 flex-grow'
            : 'max-w-md w-full mx-auto px-3 sm:px-4 py-6 sm:py-10 flex-grow flex flex-col justify-center'
        }
      >
        {!authenticated ? (
          <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden text-center">
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-3xl -mr-16 -mt-16" />

            <div className="mx-auto w-14 h-14 sm:w-16 sm:h-16 bg-sky-500/10 border border-sky-500/20 rounded-2xl flex items-center justify-center mb-5 sm:mb-6 text-sky-400">
              <ShieldCheck className="h-7 w-7 sm:h-8 sm:w-8" />
            </div>

            <PurchaseLogin
              key={`login-${sessionKey}`}
              scope="recharge"
              extraScopes={['carpool_pass']}
              requireExtraScopes
              zh={zh}
              onSuccess={() => {
                setAuthenticated(hasBothStoreTokens());
                setSessionKey((k) => k + 1);
              }}
            />

            <button
              type="button"
              onClick={() => navigate('/')}
              className="w-full bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 text-slate-300 hover:text-white font-semibold py-3.5 sm:py-4 rounded-2xl hover:border-slate-600 transition-all active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer touch-manipulation mt-3"
            >
              <span>{tLocal.backToHome}</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        ) : (
          <div className="space-y-4 sm:space-y-6">
            {/* Store Tab Switcher (aligned flush with max-w-lg store cards) */}
            <div className="w-full p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800 grid grid-cols-2 gap-1.5 shadow-lg">
              <button
                type="button"
                data-testid="store-tab-coins"
                onClick={() => selectTab('coins')}
                className={`min-h-[44px] flex items-center justify-center gap-2 rounded-xl py-2.5 px-3 text-xs sm:text-sm font-semibold transition-all cursor-pointer touch-manipulation ${
                  activeTab === 'coins'
                    ? 'bg-gradient-to-r from-sky-500 to-cyan-400 text-slate-950 shadow-md shadow-sky-500/20'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <Coins size={16} />
                <span className="truncate">{tLocal.coinsTab}</span>
              </button>

              <button
                type="button"
                data-testid="store-tab-pass"
                onClick={() => selectTab('pass')}
                className={`min-h-[44px] flex items-center justify-center gap-2 rounded-xl py-2.5 px-3 text-xs sm:text-sm font-semibold transition-all cursor-pointer touch-manipulation ${
                  activeTab === 'pass'
                    ? 'bg-gradient-to-r from-sky-500 to-cyan-400 text-slate-950 shadow-md shadow-sky-500/20'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <CreditCard size={16} />
                <span className="truncate">{tLocal.passTab}</span>
              </button>
            </div>

            {activeTab === 'coins' ? (
              <RechargePage
                key={`coins-${sessionKey}`}
                embedded
                extraScopes={['carpool_pass']}
                onAuthSuccess={() => setAuthenticated(true)}
                onAuthRequired={handleLogout}
              />
            ) : (
              <CarpoolPassPage
                key={`pass-${sessionKey}`}
                embedded
                extraScopes={['recharge']}
                onAuthSuccess={() => setAuthenticated(true)}
                onAuthRequired={handleLogout}
              />
            )}
          </div>
        )}
      </main>

      <footer className="border-t border-slate-800/80 py-5 pb-[calc(1.25rem+env(safe-area-inset-bottom))] bg-slate-950/30 text-center text-xs text-slate-500">
        <p>&copy; {new Date().getFullYear()} Googuar Technology Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}
