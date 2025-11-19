import React from 'react';
import { APP_NAME } from '../constants';
import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white text-2xl font-bold mb-4">{APP_NAME}</h3>
            <p className="text-slate-400 max-w-xs mb-6">
              {t.footer.tagline}
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.product}</h4>
            <ul className="space-y-2 text-sm">
              {t.footer.productLinks.map((link, i) => (
                <li key={i}><a href="#" className="hover:text-brand-accent transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.support}</h4>
            <ul className="space-y-2 text-sm">
              {t.footer.supportLinks.map((link, i) => (
                <li key={i}><a href="#" className="hover:text-brand-accent transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} {APP_NAME} Inc. {t.footer.rights}</p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <Mail size={16} />
            <span>contact@snowpro.app</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
