import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Globe, Sparkles, ArrowUpRight, Coins, Ticket } from 'lucide-react';
import { Link } from 'react-router-dom';
import { APP_NAME } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../locales';
import { uiExtraTranslations } from '../uiLocales';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('');
  const langMenuRef = useRef<HTMLDivElement>(null);

  const { t, language, setLanguage } = useLanguage();
  const ui = uiExtraTranslations[language] || uiExtraTranslations.en;

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);

      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (y / docHeight) * 100)));
      }

      const sections = ['video-analysis', 'carpool', 'courses', 'skibuddy', 'roadmap'];
      let current = '';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 240 && rect.bottom >= 200) {
            current = `#${id}`;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const anchorItems = [
    { label: t.nav.video, href: '#video-analysis' },
    { label: t.nav.carpool, href: '#carpool' },
    { label: t.nav.courses, href: '#courses' },
    { label: t.nav.skibuddy, href: '#skibuddy' },
    { label: t.nav.roadmap, href: '#roadmap' },
  ];

  const routeItems = [
    { label: t.nav.recharge, href: '/recharge', icon: Coins, accent: 'amber' },
    { label: ui.nav.carpoolPass, href: '/carpool-pass', icon: Ticket, accent: 'cyan' },
  ];

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'zh', label: '简体中文', flag: '🇨🇳' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'ja', label: '日本語', flag: '🇯🇵' },
    { code: 'ko', label: '한국어', flag: '🇰🇷' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'ru', label: 'Русский', flag: '🇷🇺' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
      {/* Top Laser Scroll Progress Bar */}
      <div className="h-[2px] w-full bg-transparent overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 shadow-[0_0_12px_rgba(34,211,238,0.8)] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div
        className={`mx-auto transition-all duration-500 ${
          scrolled
            ? 'max-w-6xl px-3 sm:px-6 pt-3'
            : 'max-w-7xl px-4 sm:px-6 lg:px-8 pt-5'
        }`}
      >
        <nav
          className={`transition-all duration-500 rounded-2xl px-4 sm:px-6 ${
            scrolled
              ? 'bg-[#050b1a]/80 backdrop-blur-2xl border border-white/10 shadow-[0_12px_40px_-10px_rgba(0,0,0,0.7),0_0_25px_rgba(6,182,212,0.08)] py-2.5'
              : 'bg-slate-950/30 backdrop-blur-md border border-white/5 py-3.5'
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <div
              className="flex items-center gap-3 cursor-pointer select-none group"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="relative">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 opacity-30 blur group-hover:opacity-75 transition-opacity duration-300" />
                <img
                  src="/logo_icon.png"
                  alt="Snow Pro Logo"
                  className="relative w-10 h-10 rounded-xl object-cover border border-white/20 shadow-lg"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-white via-slate-100 to-cyan-200 bg-clip-text text-transparent">
                    {APP_NAME}
                  </span>
                  <span className="hidden sm:inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 rounded-md">
                    {ui.nav.liveTag}
                  </span>
                </div>
              </div>
            </div>

            {/* Desktop Center Navigation Pills */}
            <div className="hidden xl:flex items-center bg-white/[0.03] border border-white/[0.07] rounded-xl p-1 gap-0.5">
              {anchorItems.map((item) => {
                const isActive = activeSection === item.href;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-600/80 to-cyan-500/80 text-white shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                        : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>

            {/* Desktop Right Actions */}
            <div className="hidden lg:flex items-center gap-2.5">
              {/* Special Route Links (Recharge & Carpool Pass) */}
              {routeItems.map((item) => {
                const Icon = item.icon;
                const isAmber = item.accent === 'amber';
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`group flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all duration-200 ${
                      isAmber
                        ? 'bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border-amber-500/25 hover:border-amber-400/50'
                        : 'bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border-cyan-500/25 hover:border-cyan-400/50'
                    }`}
                  >
                    <Icon size={13} className={isAmber ? 'text-amber-400' : 'text-cyan-400'} />
                    <span>{item.label}</span>
                    <ArrowUpRight
                      size={12}
                      className="opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </Link>
                );
              })}

              {/* Language Switcher */}
              <div className="relative" ref={langMenuRef}>
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className="px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 transition-colors flex items-center gap-1.5 text-slate-200"
                >
                  <Globe size={15} className="text-cyan-400" />
                  <span className="text-xs uppercase font-mono font-bold">{language}</span>
                </button>

                {langOpen && (
                  <div className="absolute right-0 top-full mt-2 w-44 bg-[#070d1f]/95 backdrop-blur-2xl rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] py-2 border border-white/15 text-slate-200 z-50 overflow-hidden">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setLangOpen(false);
                        }}
                        className={`flex items-center justify-between w-full text-left px-4 py-2 text-xs transition-colors ${
                          language === lang.code
                            ? 'text-cyan-300 font-bold bg-cyan-500/15 border-l-2 border-cyan-400'
                            : 'hover:bg-white/5 text-slate-300'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span>{lang.flag}</span>
                          <span>{lang.label}</span>
                        </span>
                        <span className="font-mono text-[10px] uppercase opacity-50">{lang.code}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Download App CTA */}
              <button
                onClick={() => {
                  const el = document.getElementById('download');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="relative group overflow-hidden px-5 py-2 rounded-xl font-bold text-xs bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 text-slate-950 shadow-[0_0_25px_rgba(6,182,212,0.35)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  <Sparkles size={13} className="fill-slate-950" />
                  <span>{t.nav.appDownload}</span>
                </span>
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:text-white focus:outline-none"
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="lg:hidden mx-4 mt-2 rounded-2xl bg-[#060c1d]/95 backdrop-blur-2xl shadow-2xl border border-white/15 max-h-[82vh] overflow-y-auto">
          <div className="p-4 space-y-2">
            {anchorItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-slate-200 hover:text-cyan-300 hover:bg-white/5 block px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors"
              >
                {item.label}
              </a>
            ))}

            <div className="grid grid-cols-2 gap-2 pt-2">
              {routeItems.map((item) => {
                const Icon = item.icon;
                const isAmber = item.accent === 'amber';
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-bold border ${
                      isAmber
                        ? 'bg-amber-500/10 text-amber-300 border-amber-500/30'
                        : 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30'
                    }`}
                  >
                    <Icon size={14} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>

            <div className="border-t border-white/10 my-3 pt-3">
              <div className="px-2 text-[11px] text-slate-400 uppercase font-mono font-bold mb-2 flex items-center gap-1.5">
                <Globe size={12} className="text-cyan-400" />
                <span>Language</span>
              </div>
              <div className="grid grid-cols-4 gap-1.5">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setIsOpen(false);
                    }}
                    className={`text-xs py-2 px-2 rounded-xl text-center transition-all truncate ${
                      language === lang.code
                        ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/40'
                        : 'text-slate-400 bg-white/5 hover:bg-white/10'
                    }`}
                  >
                    {lang.flag} {lang.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                setIsOpen(false);
                const el = document.getElementById('download');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full mt-2 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 text-slate-950 px-5 py-3.5 rounded-xl font-extrabold text-sm shadow-lg shadow-cyan-500/25"
            >
              {t.nav.appDownload}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
