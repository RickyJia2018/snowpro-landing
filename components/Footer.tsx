import React from 'react';
import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { APP_NAME } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const productAnchors = [
    { label: t.footer.productLinks[0], href: '#video-analysis', isRoute: false },
    { label: t.footer.productLinks[1], href: '#courses', isRoute: false },
    { label: t.footer.productLinks[2], href: '#carpool', isRoute: false },
    { label: t.footer.productLinks[3], href: '#skibuddy', isRoute: false },
    { label: t.footer.productLinks[4], href: '/store', isRoute: true },
  ];

  const supportLinks = [
    { label: t.footer.supportLinks[0], href: '/help-center', external: false },
    { label: t.footer.supportLinks[1], href: 'mailto:snowpro-support@googuar.com', external: false },
    { label: t.footer.supportLinks[2], href: '/privacy.html', external: true },
    { label: t.footer.supportLinks[3], href: '/terms-of-service.html', external: true },
    { label: t.footer.refundPolicy, href: '/refunds', external: false },
    { label: t.footer.deleteAccount, href: '/account-deletion.html', external: true },
    { label: t.footer.communitySafety, href: '/community-guidelines.html', external: true },
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-6">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo_icon.png"
                alt="Snow Pro Logo"
                className="w-9 h-9 rounded-xl object-cover border border-slate-800"
              />
              <h3 className="text-white text-2xl font-bold tracking-tight">{APP_NAME}</h3>
            </div>
            <p className="text-slate-400 max-w-md text-sm leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-white font-semibold mb-4 text-xs uppercase tracking-wider">
              {t.footer.product}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {productAnchors.map((link) => (
                <li key={link.href}>
                  {link.isRoute ? (
                    <Link to={link.href} className="hover:text-sky-400 transition-colors">
                      {link.label}
                    </Link>
                  ) : (
                    <a href={link.href} className="hover:text-sky-400 transition-colors">
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-white font-semibold mb-4 text-xs uppercase tracking-wider">
              {t.footer.support}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {supportLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="hover:text-sky-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>
            &copy; {new Date().getFullYear()} Googuar Technology Inc. {t.footer.rights}
          </p>
          <a
            href="mailto:snowpro-support@googuar.com"
            className="flex items-center gap-2 hover:text-slate-300 transition-colors"
          >
            <Mail size={14} />
            <span>snowpro-support@googuar.com</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
