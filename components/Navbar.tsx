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
    { label: t.nav.features, href: "#core-feature" },
    { label: t.nav.roadmap, href: "#roadmap" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.recharge, href: "/recharge" },
    { label: t.nav.download, href: "#download" },
  ];

  const languages: {code: Language, label: string}[] = [
    { code: 'zh', label: '中文' },
    { code: 'en', label: 'English' },
    { code: 'ja', label: '日本語' },
    { code: 'ko', label: '한국어' },
    { code: 'fr', label: 'Français' },
    { code: 'de', label: 'Deutsch' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <img 
              src="/logo_icon.png" 
              alt="Snow Pro Logo" 
              className="w-10 h-10 rounded-xl object-cover shadow-md"
            />
            <span className="font-bold text-2xl tracking-tight text-white">
              {APP_NAME}
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {navItems.map((item) => {
                const isRoute = item.href.startsWith('/');
                return isRoute ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 
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
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 
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
                <button className={`p-2 rounded-full transition-colors ${scrolled ? 'text-slate-300 hover:bg-white/5' : 'text-white hover:bg-white/10'}`}>
                  <Globe size={20} />
                </button>
                <div className="absolute right-0 top-full pt-2 w-32 hidden group-hover:block text-sm text-slate-700">
                  <div className="bg-slate-900/95 backdrop-blur-md rounded-xl shadow-xl py-2 border border-slate-800 text-slate-300">
                    {languages.map((lang) => (
                      <button 
                        key={lang.code}
                        onClick={() => setLanguage(lang.code)}
                        className={`block w-full text-left px-4 py-2 hover:bg-white/5 ${language === lang.code ? 'text-cyan-400 font-bold' : ''}`}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <button 
                onClick={() => {
                  const el = document.getElementById('download');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`px-5 py-2 rounded-full font-semibold text-sm transition-all shadow-md hover:shadow-lg
                  ${scrolled 
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:from-blue-500 hover:to-cyan-400 border-0 shadow-blue-500/10' 
                    : 'bg-white text-slate-900 hover:bg-gray-100'
                  }`}
              >
                {t.nav.appDownload}
              </button>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none 
              ${scrolled ? 'text-slate-200' : 'text-white'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-md shadow-xl border-t border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => {
              const isRoute = item.href.startsWith('/');
              return isRoute ? (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-slate-350 hover:text-white hover:bg-slate-800 block px-3 py-2 rounded-md text-base font-medium"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-slate-350 hover:text-white hover:bg-slate-800 block px-3 py-2 rounded-md text-base font-medium"
                >
                  {item.label}
                </a>
              );
            })}
            
            <div className="border-t border-slate-800 my-2 pt-2">
              <div className="px-3 text-xs text-slate-400 uppercase font-bold mb-2">Select Language</div>
              <div className="grid grid-cols-3 gap-2 px-2">
                {languages.map((lang) => (
                  <button 
                    key={lang.code}
                    onClick={() => { setLanguage(lang.code); setIsOpen(false); }}
                    className={`text-sm py-1 px-2 rounded ${language === lang.code ? 'bg-blue-500/20 text-cyan-400' : 'text-slate-400'}`}
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
               className="w-full mt-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-5 py-3 rounded-xl font-semibold"
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
