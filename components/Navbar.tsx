import React, { useState, useEffect } from 'react';
import { Menu, X, Snowflake, Globe } from 'lucide-react';
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
            <div className={`p-2 rounded-lg ${scrolled ? 'bg-brand-primary text-white' : 'bg-white text-brand-primary'}`}>
              <Snowflake size={24} />
            </div>
            <span className={`font-bold text-2xl tracking-tight ${scrolled ? 'text-slate-900' : 'text-white'}`}>
              {APP_NAME}
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 
                    ${scrolled 
                      ? 'text-slate-600 hover:text-brand-primary hover:bg-blue-50' 
                      : 'text-slate-200 hover:text-white hover:bg-white/10'
                    }`}
                >
                  {item.label}
                </a>
              ))}
              
              {/* Language Switcher */}
              <div className="relative group">
                <button className={`p-2 rounded-full transition-colors ${scrolled ? 'text-slate-600 hover:bg-blue-50' : 'text-white hover:bg-white/10'}`}>
                  <Globe size={20} />
                </button>
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-xl py-2 hidden group-hover:block border border-gray-100 text-sm text-slate-700">
                   {languages.map((lang) => (
                     <button 
                        key={lang.code}
                        onClick={() => setLanguage(lang.code)}
                        className={`block w-full text-left px-4 py-2 hover:bg-blue-50 ${language === lang.code ? 'text-brand-primary font-bold' : ''}`}
                     >
                       {lang.label}
                     </button>
                   ))}
                </div>
              </div>

              <button className={`px-5 py-2 rounded-full font-semibold text-sm transition-all shadow-md hover:shadow-lg
                 ${scrolled 
                   ? 'bg-slate-900 text-white hover:bg-slate-800' 
                   : 'bg-white text-brand-primary hover:bg-gray-100'
                 }`}>
                {t.nav.appDownload}
              </button>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none 
              ${scrolled ? 'text-slate-800' : 'text-white'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-slate-600 hover:text-brand-primary hover:bg-blue-50 block px-3 py-2 rounded-md text-base font-medium"
              >
                {item.label}
              </a>
            ))}
            
            <div className="border-t border-gray-100 my-2 pt-2">
              <div className="px-3 text-xs text-slate-400 uppercase font-bold mb-2">Select Language</div>
              <div className="grid grid-cols-3 gap-2 px-2">
                {languages.map((lang) => (
                  <button 
                    key={lang.code}
                    onClick={() => { setLanguage(lang.code); setIsOpen(false); }}
                    className={`text-sm py-1 px-2 rounded ${language === lang.code ? 'bg-blue-100 text-blue-600' : 'text-slate-600'}`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>

            <button className="w-full mt-4 bg-brand-primary text-white px-5 py-3 rounded-lg font-semibold">
              {t.nav.appDownload}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
