import React from 'react';
import {
  Clock,
  Ticket,
  ShieldCheck,
  Award,
  ShoppingBag,
  Sparkles,
  Compass,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { uiExtraTranslations } from '../uiLocales';
import { Reveal, SpotlightCard } from './ui/Effects';

const Roadmap: React.FC = () => {
  const { t, language } = useLanguage();
  const ui = uiExtraTranslations[language] || uiExtraTranslations.en;

  const icons = [Ticket, ShieldCheck, Award, ShoppingBag];
  const progressValues = ['85%', '72%', '68%', '60%'];
  const accents = [
    {
      iconBg: 'from-cyan-500/20 to-blue-500/10 border-cyan-500/30 text-cyan-400',
      bar: 'from-cyan-400 to-blue-500',
      spotlight: 'rgba(6, 182, 212, 0.16)',
    },
    {
      iconBg: 'from-blue-500/20 to-indigo-500/10 border-blue-500/30 text-blue-400',
      bar: 'from-blue-400 to-indigo-500',
      spotlight: 'rgba(59, 130, 246, 0.16)',
    },
    {
      iconBg: 'from-purple-500/20 to-pink-500/10 border-purple-500/30 text-purple-400',
      bar: 'from-purple-400 to-pink-500',
      spotlight: 'rgba(168, 85, 247, 0.16)',
    },
    {
      iconBg: 'from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-400',
      bar: 'from-emerald-400 to-teal-500',
      spotlight: 'rgba(16, 185, 129, 0.16)',
    },
  ];

  const features = t.roadmap.features.map((f: any, i: number) => ({
    ...f,
    icon: icons[i] || Sparkles,
    phase: ui.roadmap.phaseLabels[i] || `Phase 0${i + 1}`,
    progress: progressValues[i] || '75%',
    accent: accents[i % accents.length],
  }));

  return (
    <section
      className="bg-[#030712] py-28 border-t border-white/[0.06] relative overflow-hidden"
      id="roadmap"
    >
      {/* Decorative Light Halos */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/8 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-blue-600/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-dot-matrix opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-blue-300 font-mono font-semibold mb-5 bg-blue-500/10 border border-blue-400/25 px-4 py-1.5 rounded-full text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(59,130,246,0.15)]">
            <Clock size={14} className="text-cyan-400" />
            <span>{t.roadmap.tag}</span>
            <span className="text-slate-500">·</span>
            <span className="text-cyan-300 flex items-center gap-1">
              <Compass size={12} />
              {ui.roadmap.partnerResorts}
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight">
            {t.roadmap.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed">
            {t.roadmap.desc}
          </p>
        </Reveal>

        {/* Connected Pipeline Grid */}
        <div className="relative">
          {/* Desktop Horizontal Connecting Laser Line */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-px bg-gradient-to-r from-cyan-500/20 via-blue-500/40 to-emerald-500/20 -translate-y-1/2 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature: any, index: number) => {
              const Icon = feature.icon;
              return (
                <Reveal key={index} delay={index * 110}>
                  <SpotlightCard
                    enableTilt={true}
                    spotlightColor={feature.accent.spotlight}
                    className="group h-full bg-[#070d1e]/85 backdrop-blur-xl p-7 rounded-3xl border border-white/10 hover:border-cyan-400/40 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-300 flex flex-col justify-between"
                  >
                    {/* Large Watermark Step Number */}
                    <div className="absolute top-3 right-5 text-5xl font-mono font-extrabold text-white/[0.03] group-hover:text-cyan-400/[0.08] transition-colors select-none pointer-events-none">
                      0{index + 1}
                    </div>

                    <div className="relative z-10">
                      {/* Phase Tag */}
                      <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-4">
                        {feature.phase}
                      </div>

                      {/* Icon Box */}
                      <div
                        className={`w-13 h-13 rounded-2xl bg-gradient-to-br ${feature.accent.iconBg} border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        <Icon size={24} />
                      </div>

                      <h3 className="text-lg font-extrabold text-white mb-3 leading-snug group-hover:text-cyan-200 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-slate-400 leading-relaxed text-xs sm:text-sm">
                        {feature.desc}
                      </p>
                    </div>

                    {/* Footer Progress & Status */}
                    <div className="mt-6 pt-4 border-t border-white/[0.08]">
                      <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-1.5">
                        <span>{ui.roadmap.ecosystemProgress}</span>
                        <span className="text-cyan-300 font-bold">{feature.progress}</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-800/90 rounded-full overflow-hidden mb-3">
                        <div
                          className={`h-full bg-gradient-to-r ${feature.accent.bar} rounded-full`}
                          style={{ width: feature.progress }}
                        />
                      </div>

                      <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-wider text-cyan-300 uppercase bg-cyan-500/10 border border-cyan-500/25 px-2.5 py-1 rounded-lg">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                        {t.roadmap.status}
                      </span>
                    </div>
                  </SpotlightCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
