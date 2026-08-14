import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { APP_NAME } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../locales';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t.nav.video, href: "#video-analysis" },
    { label: t.nav.carpool, href: "#carpool" },
    { label: t.nav.courses, href: "#courses" },
    { label: t.nav.skibuddy, href: "#skibuddy" },
    { label: t.nav.roadmap, href: "#roadmap" },
    { label: t.nav.recharge, href: "/recharge" },
  ];

  const languages: {code: Language, label: string}[] = [
    { code: 'zh', label: '中文' },
    { code: 'en', label: 'English' },
    { code: 'ja', label: '日本語' },
    { code: 'ko', label: '한국어' },
    { code: 'fr', label: 'Français' },
    { code: 'de', label: 'Deutsch' },
    { code: 'es', label: 'Español' },
    { code: 'ru', label: 'Русский' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3 shadow-xl backdrop-blur-xl bg-slate-950/85 border-b border-slate-800/80' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <div className="flex items-center gap-2.5 cursor-pointer select-none" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img 
              src="/logo_icon.png" 
              alt="Snow Pro Logo" 
              className="w-10 h-10 rounded-2xl object-cover shadow-lg shadow-blue-500/10 border border-slate-700/50"
            />
            <span className="font-black text-2xl tracking-tight text-white">
              {APP_NAME}
            </span>
          </div>
          
          {/* Desktop Navigation Links */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item) => {
                const isRoute = item.href.startsWith('/');
                return isRoute ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`px-3 py-1.5 rounded-xl text-sm font-medium transition-colors duration-200 
                      ${scrolled 
                        ? 'text-slate-300 hover:text-white hover:bg-white/5' 
                        : 'text-slate-200 hover:text-white hover:bg-white/10'
                      }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`px-3 py-1.5 rounded-xl text-sm font-medium transition-colors duration-200 
                      ${scrolled 
                        ? 'text-slate-300 hover:text-white hover:bg-white/5' 
                        : 'text-slate-200 hover:text-white hover:bg-white/10'
                      }`}
                  >
                    {item.label}
                  </a>
                );
              })}
              
              {/* Language Switcher */}
              <div className="relative group">
                <button className={`p-2 rounded-full transition-colors flex items-center gap-1.5 ${scrolled ? 'text-slate-300 hover:bg-white/5' : 'text-white hover:bg-white/10'}`}>
                  <Globe size={18} />
                  <span className="text-xs uppercase font-mono">{language}</span>
                </button>
                <div className="absolute right-0 top-full pt-2 w-36 hidden group-hover:block text-sm">
                  <div className="bg-slate-900/95 backdrop-blur-xl rounded-2xl shadow-2xl py-2 border border-slate-800 text-slate-300 max-h-72 overflow-y-auto">
                    {languages.map((lang) => (
                      <button 
                        key={lang.code}
                        onClick={() => setLanguage(lang.code)}
                        className={`block w-full text-left px-4 py-2 hover:bg-white/5 transition-colors ${language === lang.code ? 'text-cyan-400 font-bold bg-cyan-500/10' : ''}`}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Download App CTA */}
              <button 
                onClick={() => {
                  const el = document.getElementById('download');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-5 py-2 rounded-full font-bold text-sm bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:from-blue-500 hover:to-cyan-400 border-0 shadow-md shadow-blue-500/20 hover:scale-105 transition-all"
              >
                {t.nav.appDownload}
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-xl focus:outline-none 
              ${scrolled ? 'text-slate-200' : 'text-white'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-slate-950/98 backdrop-blur-xl shadow-2xl border-t border-slate-800 max-h-[85vh] overflow-y-auto">
          <div className="px-4 pt-3 pb-6 space-y-1.5">
            {navItems.map((item) => {
              const isRoute = item.href.startsWith('/');
              return isRoute ? (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-slate-300 hover:text-white hover:bg-slate-900 block px-3 py-2.5 rounded-xl text-base font-medium"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-slate-300 hover:text-white hover:bg-slate-900 block px-3 py-2.5 rounded-xl text-base font-medium"
                >
                  {item.label}
                </a>
              );
            })}
            
            <div className="border-t border-slate-800 my-3 pt-3">
              <div className="px-3 text-xs text-slate-400 uppercase font-bold mb-2">Select Language</div>
              <div className="grid grid-cols-4 gap-2 px-2">
                {languages.map((lang) => (
                  <button 
                    key={lang.code}
                    onClick={() => { setLanguage(lang.code); setIsOpen(false); }}
                    className={`text-xs py-1.5 px-1 rounded-xl text-center transition-colors truncate ${language === lang.code ? 'bg-blue-500/20 text-cyan-400 font-bold border border-cyan-500/30' : 'text-slate-400 bg-slate-900'}`}
                  >
                    {lang.label}
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
               className="w-full mt-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-5 py-3 rounded-2xl font-bold shadow-lg shadow-blue-500/20"
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
