import React from 'react';
import { APP_NAME } from '../constants';
import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const productAnchors = [
    { label: t.footer.productLinks[0] || "视频分析", href: "#video-analysis" },
    { label: t.footer.productLinks[1] || "雪场拼车", href: "#carpool" },
    { label: t.footer.productLinks[2] || "名师课程", href: "#courses" },
    { label: t.footer.productLinks[3] || "雪友招募", href: "#skibuddy" },
    { label: t.footer.productLinks[4] || "代币充值", href: "/recharge" },
    { label: "Carpool Pass", href: "/carpool-pass" },
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <img 
                src="/logo_icon.png" 
                alt="Snow Pro Logo" 
                className="w-8 h-8 rounded-xl object-cover shadow-sm border border-slate-800"
              />
              <h3 className="text-white text-2xl font-black">{APP_NAME}</h3>
            </div>
            <p className="text-slate-400 max-w-sm mb-6 font-light leading-relaxed text-sm">
              {t.footer.tagline}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"><Instagram size={18} /></a>
              <a href="#" className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"><Twitter size={18} /></a>
              <a href="#" className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"><Facebook size={18} /></a>
            </div>
          </div>
          
          {/* Product Links */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">{t.footer.product}</h4>
            <ul className="space-y-2.5 text-sm font-light">
              {productAnchors.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="hover:text-cyan-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">{t.footer.support}</h4>
            <ul className="space-y-2.5 text-sm font-light">
              {t.footer.supportLinks.map((link: string, i: number) => (
                <li key={i}>
                  <a href="/privacy.html" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>&copy; {new Date().getFullYear()} {APP_NAME} Inc. {t.footer.rights}</p>
          <div className="flex items-center gap-2">
            <Mail size={14} />
            <span>contact@snowpro.app</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
