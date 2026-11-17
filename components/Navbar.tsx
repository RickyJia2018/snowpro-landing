import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { APP_NAME } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../locales';

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

const SECTION_IDS = ['video-analysis', 'courses', 'carpool', 'skibuddy', 'roadmap'];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState<string>('');
  const { t, language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? Math.min(1, Math.max(0, y / docHeight)) : 0);

      let current = '';
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180) current = `#${id}`;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t.nav.video, href: '#video-analysis' },
    { label: t.nav.courses, href: '#courses' },
    { label: t.nav.carpool, href: '#carpool' },
    { label: t.nav.skibuddy, href: '#skibuddy' },
    { label: t.nav.roadmap, href: '#roadmap' },
    { label: t.nav.store, href: '/store' },
  ];

  const scrollToDownload = () => {
    setIsOpen(false);
    document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/80 py-3 shadow-2xl shadow-black/40'
          : 'bg-slate-950/35 backdrop-blur-md border-b border-white/5 py-4'
      }`}
    >
      {/* Top Scroll Progress Line */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-400 transition-transform duration-150"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-11">
          <button
            type="button"
            className="flex items-center gap-2.5 cursor-pointer select-none text-left"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img
              src="/logo_icon.png"
              alt="Snow Pro Logo"
              className="w-9 h-9 rounded-xl object-cover border border-white/15 shadow-sm"
            />
            <span className="font-bold text-xl tracking-tight text-white">
              {APP_NAME}
            </span>
          </button>

          <div className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href;
              return item.href.startsWith('/') ? (
                <Link
                  key={item.href}
                  to={item.href}
                  className="px-3 py-1.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-sky-500/15 text-sky-300 border border-sky-400/25'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}

            <div className="relative group ml-2">
              <button
                type="button"
                aria-label="Language selector"
                className="px-2.5 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-colors flex items-center gap-1.5"
              >
                <Globe size={16} />
                <span className="text-xs uppercase font-mono">{language}</span>
              </button>
              <div className="absolute right-0 top-full pt-2 w-36 hidden group-hover:block text-sm">
                <div className="bg-slate-900/95 backdrop-blur-xl rounded-xl shadow-2xl py-1.5 border border-slate-800 text-slate-300 max-h-72 overflow-y-auto">
                  {languages.map((lang) => (
                    <button
                      type="button"
                      key={lang.code}
                      onClick={() => setLanguage(lang.code)}
                      className={`block w-full text-left px-3.5 py-2 hover:bg-white/5 transition-colors ${
                        language === lang.code ? 'text-sky-400 font-semibold bg-sky-500/10' : ''
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={scrollToDownload}
              className="ml-2 px-4 py-2 rounded-full font-semibold text-sm bg-sky-500 hover:bg-sky-400 text-slate-950 transition-all hover:scale-[1.03] shadow-md shadow-sky-500/20"
            >
              {t.nav.appDownload}
            </button>
          </div>

          <div className="flex xl:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-200 hover:bg-white/10"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-slate-950/98 backdrop-blur-xl shadow-2xl border-b border-slate-800 max-h-[85vh] overflow-y-auto">
          <div className="px-4 pt-3 pb-6 space-y-1">
            {navItems.map((item) =>
              item.href.startsWith('/') ? (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-slate-200 hover:text-white hover:bg-slate-900 block px-3 py-2.5 rounded-xl text-base font-medium"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-slate-200 hover:text-white hover:bg-slate-900 block px-3 py-2.5 rounded-xl text-base font-medium"
                >
                  {item.label}
                </a>
              ),
            )}

            <div className="border-t border-slate-800 my-3 pt-3">
              <div className="px-3 text-xs text-slate-400 uppercase font-semibold mb-2">
                Language
              </div>
              <div className="grid grid-cols-4 gap-2 px-1">
                {languages.map((lang) => (
                  <button
                    type="button"
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setIsOpen(false);
                    }}
                    className={`text-xs py-1.5 px-1 rounded-lg text-center transition-colors truncate ${
                      language === lang.code
                        ? 'bg-sky-500/20 text-sky-300 font-semibold border border-sky-500/30'
                        : 'text-slate-400 bg-slate-900'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={scrollToDownload}
              className="w-full mt-3 bg-sky-500 hover:bg-sky-400 text-slate-950 px-5 py-3 rounded-xl font-bold"
            >
              {t.nav.appDownload}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
