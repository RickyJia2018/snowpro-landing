import React from 'react';
import { Star, Quote, ShieldCheck, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { uiExtraTranslations } from '../uiLocales';
import { Reveal, SpotlightCard } from './ui/Effects';

const Testimonials: React.FC = () => {
  const { t, language } = useLanguage();
  const ui = uiExtraTranslations[language] || uiExtraTranslations.en;

  const staticData = [
    {
      avatar:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=250&auto=format&fit=crop',
      rating: 5,
      resortTag: 'Wanlong / Niseko',
    },
    {
      avatar:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=250&auto=format&fit=crop',
      rating: 5,
      resortTag: 'Beidahu /Gentings',
    },
    {
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=250&auto=format&fit=crop',
      rating: 5,
      resortTag: 'Whistler Blackcomb',
    },
  ];

  return (
    <section className="bg-[#050b18] py-28 overflow-hidden relative border-t border-white/[0.06]">
      {/* Decorative Glow Blobs */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] bg-cyan-500/8 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-cyan-300 font-mono font-semibold mb-4 bg-cyan-500/10 border border-cyan-400/25 px-4 py-1.5 rounded-full text-xs uppercase tracking-wider">
            <Sparkles size={14} className="text-cyan-400" />
            <span>{ui.testimonials.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-5 tracking-tight">
            {t.testimonials.title}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            {ui.testimonials.subtitle}
          </p>

          {/* Community Trust Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            {[
              ui.testimonials.statsSatisfaction,
              ui.testimonials.statsActiveRiders,
              ui.testimonials.statsCountries,
            ].map((pill, i) => (
              <span
                key={i}
                className="px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono font-semibold text-slate-300"
              >
                {pill}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.testimonials.reviews.map((review, idx) => (
            <Reveal key={idx} delay={idx * 120}>
              <SpotlightCard
                enableTilt={true}
                spotlightColor="rgba(56, 189, 248, 0.16)"
                className="h-full bg-[#070d1f]/80 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-cyan-400/40 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={15}
                          className={`${
                            i < staticData[idx].rating
                              ? 'fill-amber-400 text-amber-400'
                              : 'text-slate-700'
                          }`}
                        />
                      ))}
                    </div>
                    <Quote size={24} className="text-cyan-500/25" />
                  </div>

                  <p className="text-slate-200 mb-8 font-normal text-sm sm:text-base leading-relaxed">
                    "{review.content}"
                  </p>
                </div>

                <div className="flex items-center justify-between pt-5 border-t border-white/[0.08]">
                  <div className="flex items-center gap-3.5">
                    <img
                      src={staticData[idx].avatar}
                      alt={review.name}
                      className="w-12 h-12 rounded-2xl object-cover border border-cyan-400/30 shadow-md"
                      loading="lazy"
                    />
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-bold text-white text-sm">{review.name}</h4>
                        <ShieldCheck size={14} className="text-cyan-400" />
                      </div>
                      <span className="text-slate-400 text-xs block">{review.role}</span>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 px-2 py-1 rounded-md">
                    {ui.testimonials.verifiedBadge}
                  </span>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
