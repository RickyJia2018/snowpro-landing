import React from 'react';
import { Award, Clock, ShieldCheck, ShoppingBag, Sparkles, Ticket } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Reveal, SpotlightCard } from './Motion';

const Roadmap: React.FC = () => {
  const { t } = useLanguage();
  const icons = [Ticket, ShieldCheck, Award, ShoppingBag];

  return (
    <section
      id="roadmap"
      className="py-24 bg-slate-950 border-t border-slate-900 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/25 text-sky-300 font-semibold text-xs sm:text-sm mb-4">
                <Clock size={15} />
                <span>{t.roadmap.tag}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                {t.roadmap.title}
              </h2>
              <p className="text-base text-slate-400 leading-relaxed">{t.roadmap.desc}</p>
            </div>
            <div className="inline-flex items-center gap-2 self-start md:self-auto rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-cyan-300">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>{t.roadmap.status}</span>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.roadmap.features.map((feature, index) => {
            const Icon = icons[index] || Sparkles;
            return (
              <Reveal key={index} delayMs={index * 70}>
                <SpotlightCard className="group h-full rounded-3xl border border-slate-800/90 bg-slate-900/50 p-6 hover:border-sky-500/40 transition-all hover:-translate-y-1">
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-11 h-11 rounded-2xl bg-slate-950 border border-slate-800 text-sky-400 flex items-center justify-center group-hover:bg-sky-500 group-hover:text-slate-950 group-hover:border-transparent transition-colors">
                          <Icon size={20} />
                        </div>
                        <span className="font-mono text-xs text-slate-500">0{index + 1}</span>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2.5 leading-snug">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-slate-400 leading-relaxed">{feature.desc}</p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-800/70">
                      <span className="inline-block text-[11px] font-semibold tracking-wider text-cyan-300 uppercase">
                        {t.roadmap.status}
                      </span>
                    </div>
                  </div>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
