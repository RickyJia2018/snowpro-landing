import React from 'react';
import {
  Clock,
  Award,
  Coins,
  Sparkles,
  GraduationCap,
  Video,
  CheckCircle2,
  Play,
  Star,
  Users,
  ArrowUpRight,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { uiExtraTranslations } from '../uiLocales';
import { Reveal, SpotlightCard } from './ui/Effects';

const Courses: React.FC = () => {
  const { t, language } = useLanguage();
  const ui = uiExtraTranslations[language] || uiExtraTranslations.en;

  const courseVisuals = [
    {
      image:
        'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=900&auto=format&fit=crop',
      cert: 'CSIA Level 4',
      rating: '4.9',
      enrolled: '1,420',
      duration: '4h 30m',
      accent: 'from-blue-500/30 to-cyan-500/20',
    },
    {
      image:
        'https://images.unsplash.com/photo-1522056615691-da7b8106c665?q=80&w=900&auto=format&fit=crop',
      cert: 'CASI Level 3',
      rating: '4.9',
      enrolled: '2,180',
      duration: '3h 15m',
      accent: 'from-emerald-500/30 to-teal-500/20',
    },
    {
      image:
        'https://images.unsplash.com/photo-1605540436563-5bca919ae766?q=80&w=900&auto=format&fit=crop',
      cert: 'FWT Pro Guide',
      rating: '5.0',
      enrolled: '890',
      duration: '5h 10m',
      accent: 'from-purple-500/30 to-indigo-500/20',
    },
  ];

  const getCategoryStyles = (style: string) => {
    const s = style.toLowerCase();
    if (s.includes('刻滑') || s.includes('carving')) {
      return 'bg-blue-500/20 text-cyan-200 border-cyan-400/40';
    }
    if (s.includes('野雪') || s.includes('freeride')) {
      return 'bg-purple-500/20 text-purple-200 border-purple-400/40';
    }
    return 'bg-emerald-500/20 text-emerald-200 border-emerald-400/40';
  };

  const getLevelStyles = (level: string) => {
    const l = level.toLowerCase();
    if (l.includes('专家') || l.includes('expert') || l.includes('上級')) {
      return 'bg-rose-500/20 text-rose-200 border-rose-400/40';
    }
    if (
      l.includes('高级') ||
      l.includes('advanced') ||
      l.includes('avancé') ||
      l.includes('fortgeschritten')
    ) {
      return 'bg-amber-500/20 text-amber-200 border-amber-400/40';
    }
    return 'bg-sky-500/20 text-sky-200 border-sky-400/40';
  };

  return (
    <section
      className="bg-[#030712] py-28 border-t border-white/[0.06] relative overflow-hidden"
      id="courses"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/8 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-80 h-80 bg-cyan-500/8 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute inset-0 bg-dot-matrix opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Block */}
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-cyan-300 font-mono font-semibold mb-5 bg-cyan-500/10 border border-cyan-400/25 px-4 py-1.5 rounded-full text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(6,182,212,0.15)]">
            <GraduationCap size={15} className="text-cyan-400" />
            <span>{t.courses.tag}</span>
            <span className="text-slate-500">·</span>
            <span className="text-amber-300">{ui.courses.tokenEconomyBadge}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            {t.courses.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed">
            {t.courses.desc}
          </p>

          {/* Two-sided Value Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 max-w-2xl mx-auto text-left">
            <SpotlightCard
              className="bg-slate-900/60 border border-white/10 p-5 rounded-2xl"
              spotlightColor="rgba(59, 130, 246, 0.15)"
            >
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-blue-500/15 border border-blue-500/30 text-blue-400 shrink-0">
                  <Video size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm mb-1">
                    {t.courses.feature1Title}
                  </h4>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {t.courses.feature1Desc}
                  </p>
                </div>
              </div>
            </SpotlightCard>

            <SpotlightCard
              className="bg-slate-900/60 border border-white/10 p-5 rounded-2xl"
              spotlightColor="rgba(6, 182, 212, 0.15)"
            >
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 shrink-0">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm mb-1">
                    {t.courses.feature2Title}
                  </h4>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {t.courses.feature2Desc}
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </div>
        </Reveal>

        {/* Masterclass Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {t.courses.list.map((course: any, index: number) => {
            const visual = courseVisuals[index % courseVisuals.length];
            return (
              <Reveal key={index} delay={index * 120}>
                <SpotlightCard
                  enableTilt={true}
                  spotlightColor="rgba(56, 189, 248, 0.18)"
                  onClick={() => {
                    const el = document.getElementById('download');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group h-full bg-[#070d1e]/90 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-cyan-400/50 shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all duration-300 flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    {/* Course Cinema Thumbnail Header */}
                    <div className="relative h-52 w-full overflow-hidden">
                      <img
                        src={visual.image}
                        alt={course.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#070d1e] via-[#070d1e]/40 to-transparent" />

                      {/* Top Badges Overlay */}
                      <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5">
                          <span
                            className={`text-[10px] font-mono font-bold tracking-wider px-2.5 py-1 rounded-lg border backdrop-blur-md ${getCategoryStyles(
                              course.style
                            )}`}
                          >
                            {course.style}
                          </span>
                          <span
                            className={`text-[10px] font-mono font-bold tracking-wider px-2.5 py-1 rounded-lg border backdrop-blur-md ${getLevelStyles(
                              course.level
                            )}`}
                          >
                            {course.level}
                          </span>
                        </div>

                        <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md border border-white/10 text-amber-400 text-xs font-mono font-bold">
                          <Star size={11} className="fill-amber-400" />
                          <span>{visual.rating}</span>
                        </div>
                      </div>

                      {/* Center Floating Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-85 group-hover:opacity-100 transition-opacity">
                        <div className="w-12 h-12 rounded-full bg-slate-950/70 backdrop-blur-md border border-cyan-400/50 flex items-center justify-center text-cyan-300 group-hover:scale-110 group-hover:bg-cyan-400 group-hover:text-slate-950 transition-all shadow-[0_0_25px_rgba(6,182,212,0.4)]">
                          <Play size={18} className="fill-current ml-0.5" />
                        </div>
                      </div>

                      {/* Bottom Thumbnail Meta */}
                      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-slate-300">
                        <span className="flex items-center gap-1">
                          <Users size={12} className="text-cyan-400" />
                          {visual.enrolled} {ui.courses.enrolledCount}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-black/50 border border-white/10">
                          {visual.duration}
                        </span>
                      </div>
                    </div>

                    {/* Course Body */}
                    <div className="p-6 pb-4">
                      <h3 className="text-xl font-extrabold text-white mb-3 group-hover:text-cyan-300 transition-colors leading-snug">
                        {course.title}
                      </h3>

                      {/* Instructor Row */}
                      <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-slate-950 font-extrabold text-xs">
                            {course.instructor.charAt(0)}
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white">
                              {course.instructor}
                            </div>
                            <div className="text-[10px] font-mono text-cyan-400 flex items-center gap-1">
                              <Award size={10} />
                              <span>{visual.cert}</span>
                            </div>
                          </div>
                        </div>
                        <ArrowUpRight
                          size={16}
                          className="text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="px-6 py-4 border-t border-white/[0.08] flex items-center justify-between bg-slate-950/40">
                    <div className="flex items-center gap-1.5 text-slate-300 text-xs font-mono">
                      <Clock size={14} className="text-cyan-400" />
                      <span>
                        {course.lessons} {t.courses.lessonsLabel}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-mono font-extrabold shadow-[0_0_15px_rgba(245,158,11,0.15)]">
                      <Coins size={13} className="text-amber-400" />
                      <span>{course.price}</span>
                    </div>
                  </div>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>

        {/* Explore CTA Button */}
        <Reveal className="text-center">
          <button
            onClick={() => {
              const el = document.getElementById('download');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 text-slate-950 font-extrabold py-4 px-9 rounded-2xl shadow-[0_0_35px_rgba(6,182,212,0.3)] hover:shadow-[0_0_50px_rgba(6,182,212,0.5)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
          >
            <Sparkles size={18} className="fill-slate-950" />
            <span>{t.courses.btnText}</span>
          </button>
        </Reveal>
      </div>
    </section>
  );
};

export default Courses;
