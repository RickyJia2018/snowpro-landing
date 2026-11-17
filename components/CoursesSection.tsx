import React from 'react';
import { ArrowRight, DollarSign, GraduationCap, Layers } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Reveal, SpotlightCard } from './Motion';
import PhoneFrame from './PhoneFrame';

const CoursesSection: React.FC = () => {
  const { t } = useLanguage();
  const icons = [Layers, DollarSign, GraduationCap];

  return (
    <section
      id="courses"
      className="py-24 bg-slate-900/45 border-t border-slate-900 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-[2.25rem] border border-slate-800/80 bg-gradient-to-br from-slate-900/80 via-slate-950/90 to-indigo-950/30 p-6 sm:p-10 lg:p-14 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <Reveal direction="left">
                <PhoneFrame
                  src="/screenshots/courses-list.jpg"
                  alt={t.courses.screenCaption}
                  caption={t.courses.screenCaption}
                  accent="blue"
                />
              </Reveal>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2">
              <Reveal>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-300 font-semibold text-xs sm:text-sm mb-5">
                  <GraduationCap size={15} />
                  <span>{t.courses.tag}</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-5">
                  {t.courses.titlePre}{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-300">
                    {t.courses.titleHighlight}
                  </span>
                </h2>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">
                  {t.courses.desc}
                </p>
              </Reveal>

              <div className="space-y-4 mb-9">
                {t.courses.points.map((point, idx) => {
                  const Icon = icons[idx] || Layers;
                  return (
                    <Reveal key={idx} delayMs={idx * 80}>
                      <SpotlightCard
                        glowColor="rgba(129, 140, 248, 0.16)"
                        className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-4"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/25 text-indigo-300 flex items-center justify-center shrink-0">
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
                  className="inline-flex items-center gap-2 rounded-xl border border-indigo-400/35 bg-indigo-500/15 hover:bg-indigo-500/25 text-white font-semibold px-6 py-3.5 text-sm sm:text-base transition-all hover:scale-[1.02]"
                >
                  <span>{t.courses.cta}</span>
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

export default CoursesSection;
