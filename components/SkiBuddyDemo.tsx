import React from 'react';
import { ArrowRight, CalendarDays, MessageCircle, Mountain, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Reveal, SpotlightCard } from './Motion';
import PhoneFrame from './PhoneFrame';

const SkiBuddyDemo: React.FC = () => {
  const { t } = useLanguage();
  const icons = [CalendarDays, Mountain, MessageCircle];

  return (
    <section
      id="skibuddy"
      className="py-24 bg-slate-900/45 border-t border-slate-900 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-[2.25rem] border border-slate-800/80 bg-gradient-to-bl from-purple-950/25 via-slate-950/90 to-slate-900/75 p-6 sm:p-10 lg:p-14 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <Reveal direction="left">
                <PhoneFrame
                  src="/screenshots/ski-buddy.png"
                  alt={t.skibuddy.screenCaption}
                  caption={t.skibuddy.screenCaption}
                  accent="purple"
                />
              </Reveal>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2">
              <Reveal>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 font-semibold text-xs sm:text-sm mb-5">
                  <Users size={15} />
                  <span>{t.skibuddy.tag}</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-5">
                  {t.skibuddy.titlePre}{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-sky-300">
                    {t.skibuddy.titleHighlight}
                  </span>
                </h2>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">
                  {t.skibuddy.desc}
                </p>
              </Reveal>

              <div className="space-y-4 mb-9">
                {t.skibuddy.points.map((point, idx) => {
                  const Icon = icons[idx] || Users;
                  return (
                    <Reveal key={idx} delayMs={idx * 80}>
                      <SpotlightCard
                        glowColor="rgba(192, 132, 252, 0.16)"
                        className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-4"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/25 text-purple-300 flex items-center justify-center shrink-0">
                            <Icon size={18} />
                          </div>
                          <div>
                            <h3 className="font-bold text-white text-base mb-1">{point.title}</h3>
                            <p className="text-sm text-slate-400 leading-relaxed">{point.desc}</p>
                          </div>
                        </div>
                      </SpotlightCard>
                    </Reveal>
                  );
                })}
              </div>

              <Reveal delayMs={240}>
                <button
                  type="button"
                  onClick={() =>
                    document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="inline-flex items-center gap-2 rounded-xl border border-purple-500/35 bg-purple-500/15 hover:bg-purple-500/25 text-purple-200 font-semibold px-6 py-3.5 text-sm sm:text-base transition-all hover:scale-[1.02]"
                >
                  <span>{t.skibuddy.cta}</span>
                  <ArrowRight size={17} />
                </button>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkiBuddyDemo;
