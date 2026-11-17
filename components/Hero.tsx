import React, { useState } from 'react';
import { ArrowRight, Award, Car, DollarSign, Globe2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Reveal } from './Motion';
import PhoneFrame from './PhoneFrame';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const [activePreview, setActivePreview] = useState<'center' | 'annotation' | 'earnings'>('center');

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const previews = [
    {
      key: 'center' as const,
      src: '/screenshots/instructor-center.jpg',
      label: t.hero.screenCaptions.center,
    },
    {
      key: 'annotation' as const,
      src: '/screenshots/video-annotation.jpg',
      label: t.hero.screenCaptions.annotation,
    },
    {
      key: 'earnings' as const,
      src: '/screenshots/earnings-hub.jpg',
      label: t.hero.screenCaptions.earnings,
    },
  ];

  const currentPreview = previews.find((p) => p.key === activePreview) || previews[0];
  const secondaryPreview =
    activePreview === 'center'
      ? previews[1]
      : activePreview === 'annotation'
      ? previews[2]
      : previews[0];

  return (
    <section className="relative min-h-[94vh] w-full overflow-hidden flex items-center pt-28 pb-16 sm:pt-32 sm:pb-24 border-b border-slate-900">
      {/* Ambient Alpine Backdrop + Aurora */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/hero_bg.jpg"
          alt=""
          className="w-full h-full object-cover opacity-30 select-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/82 to-slate-950" />
        <div className="animate-aurora absolute -top-24 left-1/4 h-[420px] w-[560px] rounded-full bg-sky-500/15 blur-[130px]" />
        <div
          className="animate-aurora absolute bottom-0 right-1/6 h-[360px] w-[460px] rounded-full bg-emerald-500/12 blur-[130px]"
          style={{ animationDelay: '-6s' }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <div className="lg:col-span-7 text-left">
            <Reveal delayMs={40}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 mb-6 backdrop-blur-md">
                <DollarSign size={14} className="shrink-0" />
                <span className="text-xs sm:text-sm font-medium tracking-wide">{t.hero.badge}</span>
              </div>
            </Reveal>

            <Reveal delayMs={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-6">
                {t.hero.titlePre}{' '}
                <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-300">
                  {t.hero.titleHighlight}
                </span>
              </h1>
            </Reveal>

            <Reveal delayMs={160}>
              <p className="text-base sm:text-lg text-slate-300 max-w-xl mb-7 leading-relaxed">
                {t.hero.subtitle}
              </p>
            </Reveal>

            <Reveal delayMs={220}>
              <div className="flex flex-wrap items-center gap-3.5 mb-7">
                <button
                  type="button"
                  onClick={() => scrollTo('download')}
                  className="inline-flex items-center gap-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold px-6 py-3.5 text-sm sm:text-base transition-all hover:scale-[1.03] shadow-lg shadow-sky-500/25"
                >
                  <span>{t.hero.ctaDownload}</span>
                  <ArrowRight size={17} />
                </button>

                <button
                  type="button"
                  onClick={() => scrollTo('video-analysis')}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/70 hover:bg-slate-800 text-white font-semibold px-5 py-3.5 text-sm sm:text-base transition-all hover:border-slate-600"
                >
                  <span>{t.hero.ctaInstructor}</span>
                </button>

                <button
                  type="button"
                  onClick={() => scrollTo('carpool')}
                  className="inline-flex items-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-200 font-semibold px-5 py-3.5 text-sm sm:text-base transition-all"
                >
                  <Car size={16} />
                  <span>{t.hero.ctaCarpool}</span>
                </button>
              </div>

              <div className="flex flex-col gap-2.5">
                <button
                  type="button"
                  onClick={() => scrollTo('founding-offer')}
                  className="inline-flex items-center gap-2 self-start text-xs font-medium text-amber-300 hover:text-amber-200 transition-colors"
                >
                  <Award size={14} className="shrink-0" />
                  <span>{t.hero.founderCallout}</span>
                  <ArrowRight size={13} className="shrink-0" />
                </button>

                <p className="inline-flex items-center gap-2 text-xs text-slate-400">
                  <Globe2 size={14} className="text-sky-400 shrink-0" />
                  <span>{t.hero.multiLangBadge}</span>
                </p>
              </div>
            </Reveal>
          </div>

          {/* Layered 3D Phone Stage */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <Reveal delayMs={180} direction="right" className="w-full flex flex-col items-center">
              <div className="mb-5 flex flex-wrap justify-center gap-2">
                {previews.map((preview) => {
                  const active = preview.key === activePreview;
                  return (
                    <button
                      key={preview.key}
                      type="button"
                      onClick={() => setActivePreview(preview.key)}
                      className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                        active
                          ? 'bg-sky-500/20 text-sky-300 border border-sky-400/50 shadow-sm shadow-sky-500/20'
                          : 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-slate-200'
                      }`}
                    >
                      {preview.label}
                    </button>
                  );
                })}
              </div>

              <div className="relative w-full max-w-[340px] flex justify-center">
                {/* Secondary depth peek device on desktop */}
                <button
                  type="button"
                  aria-label={secondaryPreview.label}
                  onClick={() => setActivePreview(secondaryPreview.key)}
                  className="hidden sm:block absolute -right-10 top-10 w-[230px] rotate-[7deg] opacity-40 hover:opacity-75 transition-all duration-500 rounded-[2.2rem] border border-slate-700/70 bg-slate-900 p-2 shadow-2xl overflow-hidden cursor-pointer"
                >
                  <div className="overflow-hidden rounded-[1.75rem] aspect-[9/19.5] bg-slate-950">
                    <img
                      src={secondaryPreview.src}
                      alt=""
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                </button>

                <PhoneFrame
                  src={currentPreview.src}
                  alt={currentPreview.label}
                  caption={currentPreview.label}
                  testId="hero-showcase-image"
                  accent={activePreview === 'earnings' ? 'emerald' : 'blue'}
                  priority
                />

                {/* Subtle floating real-feature glass pill */}
                <div className="animate-float-slow hidden sm:flex items-center gap-2 rounded-2xl border border-emerald-400/30 bg-slate-950/90 px-3.5 py-2 text-xs font-semibold text-emerald-300 shadow-2xl backdrop-blur-xl absolute -left-8 bottom-24 z-20">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span>{t.hero.payoutPill}</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
