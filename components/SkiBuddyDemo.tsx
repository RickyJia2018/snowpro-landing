import React, { useState } from 'react';
import {
  Users,
  Mountain,
  Calendar,
  Sparkles,
  Video,
  ArrowRight,
  UserPlus,
  Check,
  Flame,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { uiExtraTranslations } from '../uiLocales';
import { Reveal, SpotlightCard } from './ui/Effects';

const SkiBuddyDemo: React.FC = () => {
  const { t, language } = useLanguage();
  const ui = uiExtraTranslations[language] || uiExtraTranslations.en;

  const [joinedPosts, setJoinedPosts] = useState<{ [key: number]: boolean }>({});
  const [activeFilter, setActiveFilter] = useState<number>(0);

  const posts = t.skibuddy.posts;
  const matchScores = ['98%', '95%', '94%'];
  const fillWidths = ['w-3/4', 'w-2/5', 'w-2/3'];

  const handleToggleJoin = (index: number) => {
    setJoinedPosts((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const getLevelBadgeStyles = (level: string) => {
    const l = level.toLowerCase();
    if (l.includes('专家') || l.includes('expert') || l.includes('上級')) {
      return 'bg-rose-500/15 text-rose-300 border-rose-500/30';
    }
    if (
      l.includes('中') ||
      l.includes('intermediate') ||
      l.includes('intermédiaire')
    ) {
      return 'bg-amber-500/15 text-amber-300 border-amber-500/30';
    }
    return 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30';
  };

  const filters = [
    ui.skibuddy.filterAll,
    ui.skibuddy.filterCarving,
    ui.skibuddy.filterPowder,
    ui.skibuddy.filterPark,
  ];

  return (
    <section
      className="py-28 bg-[#050b18] border-t border-white/[0.06] relative overflow-hidden"
      id="skibuddy"
    >
      {/* Decorative Glow Blobs */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-10 right-10 w-[420px] h-[420px] bg-indigo-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-alpine-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Recruitment Live Console (7 cols) */}
          <Reveal direction="right" delay={100} className="lg:col-span-7 order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 via-pink-500/15 to-indigo-500/20 rounded-[2rem] blur-xl opacity-75 pointer-events-none" />

              <div className="relative bg-[#080d21]/90 backdrop-blur-2xl rounded-[1.75rem] p-5 sm:p-7 border border-white/15 shadow-[0_25px_70px_rgba(0,0,0,0.8)]">
                {/* Header Bar */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-5 border-b border-white/10 mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-400" />
                    </span>
                    <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                      SKIBUDDY SQUAD RADAR
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono font-semibold text-purple-200 bg-purple-500/15 border border-purple-500/30 px-3 py-1 rounded-full">
                    <Sparkles size={12} className="text-purple-400" />
                    <span>{ui.skibuddy.activeSquadsBadge}</span>
                  </div>
                </div>

                {/* Interactive Filter Tabs */}
                <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-4 no-scrollbar">
                  {filters.map((f, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveFilter(i)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                        activeFilter === i
                          ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(147,51,234,0.4)]'
                          : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5'
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>

                {/* Recruitment Squad Cards */}
                <div className="space-y-4">
                  {posts.map((post: any, idx: number) => {
                    const isJoined = joinedPosts[idx];
                    const isHighlighted = activeFilter === 0 || activeFilter - 1 === idx;
                    return (
                      <div
                        key={idx}
                        className={`bg-slate-950/80 p-5 rounded-2xl border transition-all duration-300 ${
                          isHighlighted
                            ? 'border-purple-500/40 shadow-[0_0_25px_rgba(168,85,247,0.12)] opacity-100'
                            : 'border-white/5 opacity-55 hover:opacity-90'
                        }`}
                      >
                        {/* Top Badges & Vibe Match */}
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="flex items-center gap-1 text-[11px] bg-purple-500/15 text-purple-200 border border-purple-500/30 px-2.5 py-0.5 rounded-lg font-semibold">
                              <Mountain size={12} className="text-purple-400" />
                              {post.resort}
                            </span>
                            <span className="flex items-center gap-1 text-[11px] bg-slate-800/90 border border-white/10 text-slate-300 px-2.5 py-0.5 rounded-lg font-mono">
                              <Calendar size={11} className="text-slate-400" />
                              {post.date}
                            </span>
                            <span
                              className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md border ${getLevelBadgeStyles(
                                post.level
                              )}`}
                            >
                              {post.level}
                            </span>
                            <span className="text-[10px] font-mono bg-blue-500/15 text-blue-200 border border-blue-500/30 px-2 py-0.5 rounded-md font-semibold">
                              {post.style}
                            </span>
                          </div>

                          <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-pink-300 bg-pink-500/15 border border-pink-500/30 px-2 py-0.5 rounded-md">
                            <Flame size={11} className="text-pink-400" />
                            {matchScores[idx]} {ui.skibuddy.matchRate}
                          </span>
                        </div>

                        {/* Post Title */}
                        <h4 className="text-base sm:text-lg font-bold text-white mb-2.5 leading-snug">
                          {post.title}
                        </h4>

                        {/* Goal / Target Pill */}
                        <div className="flex items-center gap-2 text-xs text-slate-300 mb-4 bg-slate-900/90 px-3.5 py-2 rounded-xl border border-white/[0.07]">
                          <Video size={14} className="text-cyan-400 shrink-0" />
                          <span>
                            <strong className="text-slate-400 font-normal">
                              {ui.skibuddy.targetLabel}{' '}
                            </strong>
                            <span className="text-cyan-200 font-medium">{post.target}</span>
                          </span>
                        </div>

                        {/* Footer: Author, Squad Capacity Bar & Join Action */}
                        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/[0.08]">
                          <div className="flex items-center gap-3">
                            {/* Stacked Squad Avatars */}
                            <div className="flex -space-x-2">
                              <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 border-2 border-slate-950 flex items-center justify-center text-white text-[11px] font-extrabold">
                                {post.author.charAt(0)}
                              </div>
                              <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-500 border-2 border-slate-950 flex items-center justify-center text-slate-950 text-[10px] font-extrabold">
                                +
                              </div>
                            </div>

                            <div>
                              <div className="flex items-center gap-2 text-xs">
                                <span className="text-slate-200 font-bold">{post.author}</span>
                                <span className="text-purple-300 font-mono text-[11px] font-bold">
                                  {post.members}
                                </span>
                              </div>
                              <div className="w-24 h-1.5 bg-slate-800 rounded-full overflow-hidden mt-1">
                                <div
                                  className={`h-full bg-gradient-to-r from-purple-500 to-pink-400 rounded-full ${fillWidths[idx]}`}
                                />
                              </div>
                            </div>
                          </div>

                          <button
                            onClick={() => handleToggleJoin(idx)}
                            className={`text-xs px-4 py-2 rounded-xl font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                              isJoined
                                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.2)]'
                                : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-lg shadow-purple-500/25 hover:scale-105'
                            }`}
                          >
                            {isJoined ? (
                              <>
                                <Check size={14} />
                                <span>{ui.skibuddy.joinedBtn}</span>
                              </>
                            ) : (
                              <>
                                <UserPlus size={14} />
                                <span>{ui.skibuddy.joinBtn}</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Title & Descriptions (5 cols) */}
          <Reveal direction="left" className="lg:col-span-5 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-400/25 text-purple-300 font-mono font-semibold text-xs uppercase tracking-wider mb-6 shadow-[0_0_20px_rgba(168,85,247,0.15)]">
              <Users size={14} className="text-purple-400" />
              <span>{t.skibuddy.tag}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold text-white mb-6 leading-[1.15] tracking-tight">
              {t.skibuddy.titlePre} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300">
                {t.skibuddy.titleHighlight}
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300/90 mb-8 leading-relaxed">
              {t.skibuddy.desc}
            </p>

            <div className="space-y-4 mb-10">
              {/* Feature 1 */}
              <SpotlightCard
                className="p-5 rounded-2xl bg-slate-900/50 border border-white/10 hover:border-purple-500/40 transition-colors"
                spotlightColor="rgba(168, 85, 247, 0.15)"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-11 h-11 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400">
                      <Mountain size={20} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base mb-1">
                      {t.skibuddy.feature1Title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {t.skibuddy.feature1Desc}
                    </p>
                  </div>
                </div>
              </SpotlightCard>

              {/* Feature 2 */}
              <SpotlightCard
                className="p-5 rounded-2xl bg-slate-900/50 border border-white/10 hover:border-pink-500/40 transition-colors"
                spotlightColor="rgba(236, 72, 153, 0.15)"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-11 h-11 rounded-xl bg-pink-500/15 border border-pink-500/30 flex items-center justify-center text-pink-400">
                      <Video size={20} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base mb-1">
                      {t.skibuddy.feature2Title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {t.skibuddy.feature2Desc}
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </div>

            <button
              onClick={() => {
                const el = document.getElementById('download');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 text-white rounded-2xl font-extrabold text-sm sm:text-base transition-all hover:scale-[1.03] active:scale-[0.98] shadow-[0_0_30px_rgba(168,85,247,0.35)]"
            >
              <span>{t.skibuddy.cta}</span>
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default SkiBuddyDemo;
