import React from 'react';
import { Download, Play, QrCode } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { AppleLogo, AndroidLogo } from './BrandIcons';
import { Reveal, SpotlightCard } from './Motion';
import {
  ANDROID_APK_DOWNLOAD_URL,
  ANDROID_PLAY_DOWNLOAD_URL,
  IOS_DOWNLOAD_URL,
} from '../src/lib/courseShare';

const DownloadSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="download"
      className="py-24 bg-slate-900/50 border-t border-slate-900 relative overflow-hidden"
    >
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[540px] h-[540px] rounded-full bg-sky-500/10 blur-[140px]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-5">
              {t.download.title}
            </h2>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              {t.download.desc}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Reveal delayMs={60}>
            <SpotlightCard className="h-full rounded-3xl border border-slate-800 bg-slate-950/85 p-8 hover:border-sky-500/40 transition-colors">
              <div className="flex flex-col items-center h-full">
                <div className="p-3 bg-sky-500/10 border border-sky-500/20 rounded-2xl text-sky-400 mb-4">
                  <AppleLogo size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-1.5">{t.download.iosLabel}</h3>
                <p className="text-slate-400 text-xs text-center mb-6">{t.download.iosDesc}</p>

                <div className="bg-white p-3 rounded-2xl shadow-xl mb-4 transition-transform duration-300 hover:scale-105">
                  <img
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
                      IOS_DOWNLOAD_URL,
                    )}`}
                    alt="iOS App Store QR Code"
                    className="w-[144px] h-[144px] rounded-lg"
                    loading="lazy"
                  />
                </div>

                <span className="text-slate-400 text-xs flex items-center gap-1.5 mb-6">
                  <QrCode size={14} />
                  <span>{t.download.scanIos}</span>
                </span>

                <a
                  href={IOS_DOWNLOAD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto w-full bg-white text-slate-950 hover:bg-slate-100 font-bold py-3.5 px-6 rounded-2xl flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
                >
                  <AppleLogo size={20} />
                  <span>{t.download.btnIos}</span>
                </a>
              </div>
            </SpotlightCard>
          </Reveal>

          <Reveal delayMs={140}>
            <SpotlightCard
              glowColor="rgba(34, 211, 238, 0.14)"
              className="h-full rounded-3xl border border-slate-800 bg-slate-950/85 p-8 hover:border-cyan-500/40 transition-colors"
            >
              <div className="flex flex-col items-center h-full">
                <div className="p-3 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl text-cyan-400 mb-4">
                  <AndroidLogo size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-1.5">{t.download.androidLabel}</h3>
                <p className="text-slate-400 text-xs text-center mb-6">{t.download.androidDesc}</p>

                <div className="bg-white p-3 rounded-2xl shadow-xl mb-4 transition-transform duration-300 hover:scale-105">
                  <img
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
                      ANDROID_PLAY_DOWNLOAD_URL,
                    )}`}
                    alt="Google Play QR Code"
                    className="w-[144px] h-[144px] rounded-lg"
                    loading="lazy"
                  />
                </div>

                <span className="text-slate-400 text-xs flex items-center gap-1.5 mb-6">
                  <QrCode size={14} />
                  <span>{t.download.scanGooglePlay}</span>
                </span>

                <div className="w-full flex flex-col gap-3 mt-auto">
                  <a
                    href={ANDROID_PLAY_DOWNLOAD_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-sky-500 to-cyan-400 hover:from-sky-400 hover:to-cyan-300 text-slate-950 font-bold py-3.5 px-6 rounded-2xl flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
                  >
                    <Play size={18} fill="currentColor" />
                    <span>{t.download.btnGooglePlay}</span>
                  </a>
                  <a
                    href={ANDROID_APK_DOWNLOAD_URL}
                    className="w-full border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-900 text-slate-200 font-medium py-3 px-6 rounded-2xl flex items-center justify-center gap-2 transition-colors"
                  >
                    <Download size={17} />
                    <span>{t.download.directApk}</span>
                  </a>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
