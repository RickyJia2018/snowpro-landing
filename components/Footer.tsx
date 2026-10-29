import React from 'react';
import { Link } from 'react-router-dom';
import { APP_NAME } from '../constants';
import { Instagram, Twitter, Facebook, Mail, ArrowUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { uiExtraTranslations } from '../uiLocales';

const Footer: React.FC = () => {
  const { t, language } = useLanguage();
  const ui = uiExtraTranslations[language] || uiExtraTranslations.en;

  const productAnchors = [
    { label: t.footer.productLinks[0] || 'Video Analysis', href: '#video-analysis' },
    { label: t.footer.productLinks[1] || 'Carpool', href: '#carpool' },
    { label: t.footer.productLinks[2] || 'Courses', href: '#courses' },
    { label: t.footer.productLinks[3] || 'Ski Buddy', href: '#skibuddy' },
    { label: t.footer.productLinks[4] || 'Token Recharge', href: '/recharge' },
    { label: ui.nav.carpoolPass, href: '/carpool-pass' },
    { label: language === 'zh' ? '退款政策' : 'Refund Policy', href: '/refunds' },
    { label: language === 'zh' ? '代币条款' : 'Token Policy', href: '/terms' },
  ];

  return (
    <footer className="bg-[#02050e] text-slate-400 pt-20 pb-12 border-t border-white/[0.06] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-14">
          {/* Brand Col (6 cols) */}
          <div className="md:col-span-6">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo_icon.png"
                alt="Snow Pro Logo"
                className="w-9 h-9 rounded-xl object-cover shadow-md border border-white/15"
              />
              <h3 className="text-white text-2xl font-extrabold tracking-tight">
                {APP_NAME}
              </h3>
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                {ui.nav.liveTag}
              </span>
            </div>
            <p className="text-slate-400 max-w-md mb-6 leading-relaxed text-sm">
              {t.footer.tagline}
            </p>
            <div className="flex gap-3">
              {[Instagram, Twitter, Facebook].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#download"
                  className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-300 hover:border-cyan-400/40 hover:bg-cyan-500/10 transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links (3 cols) */}
          <div className="md:col-span-3">
            <h4 className="text-white font-mono font-bold mb-4 text-xs uppercase tracking-wider">
              {t.footer.product}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {productAnchors.map((link, i) => {
                const isInternalRoute = link.href.startsWith('/');
                return (
                  <li key={i}>
                    {isInternalRoute ? (
                      <Link
                        to={link.href}
                        className="hover:text-cyan-300 transition-colors"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="hover:text-cyan-300 transition-colors"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Support Links (3 cols) */}
          <div className="md:col-span-3">
            <h4 className="text-white font-mono font-bold mb-4 text-xs uppercase tracking-wider">
              {t.footer.support}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {t.footer.supportLinks.map((link: string, i: number) => (
                <li key={i}>
                  <a
                    href="/privacy.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-300 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>
            &copy; {new Date().getFullYear()} Googuar Technology Inc. {t.footer.rights}
          </p>
          <div className="flex items-center gap-6">
            <a
              href="mailto:contact@snowpro.app"
              className="flex items-center gap-2 hover:text-cyan-300 transition-colors font-mono"
            >
              <Mail size={14} className="text-cyan-400" />
              <span>contact@snowpro.app</span>
            </a>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="p-2 rounded-xl bg-white/[0.04] hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-400/40 text-slate-300 hover:text-cyan-300 transition-all"
              aria-label="Scroll to top"
            >
              <ArrowUp size={15} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
