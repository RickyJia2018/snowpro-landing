import React, { useState } from 'react';
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Coins,
  DollarSign,
  MessageSquareOff,
  PenTool,
  Power,
  TrendingDown,
  Video,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Reveal, SpotlightCard } from './Motion';
import PhoneFrame from './PhoneFrame';

type SubScreenKey = 'levelPanel' | 'profile' | 'request' | 'followup' | 'guaranteed';

const SUB_SCREENSHOTS: Record<SubScreenKey, string> = {
  levelPanel: '/screenshots/level-commission-rules.png',
  profile: '/screenshots/instructor-profile.jpg',
  request: '/screenshots/request-instruction.jpg',
  followup: '/screenshots/lesson-followup-limit.jpg',
  guaranteed: '/screenshots/order-placed.jpg',
};

const VideoDemo: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeTabId, setActiveTabId] = useState<'earn' | 'annotate' | 'control' | 'autonomy'>('earn');
  const [activeSubScreen, setActiveSubScreen] = useState<SubScreenKey | null>(null);

  const tabScreenshots: Record<'earn' | 'annotate' | 'control' | 'autonomy', string> = {
    earn: '/screenshots/earnings-hub.jpg',
    annotate: '/screenshots/video-annotation.jpg',
    control: '/screenshots/lesson-instructor.jpg',
    autonomy:
      language === 'zh'
        ? '/screenshots/level-commission-rules.png'
        : '/screenshots/instructor-center.jpg',
  };

  const activeTab = t.video.tabs.find((tab) => tab.id === activeTabId) || t.video.tabs[0];

  const displayedSrc = activeSubScreen
    ? SUB_SCREENSHOTS[activeSubScreen]
    : tabScreenshots[activeTab.id];

  const displayedCaption = activeSubScreen
    ? t.video.subScreens[activeSubScreen]
    : activeTab.caption;

  const tabIcons = {
    earn: DollarSign,
    annotate: PenTool,
    control: MessageSquareOff,
    autonomy: Power,
  };

  const pillarIcons = [Coins, Power, MessageSquareOff, TrendingDown];

  return (
    <section
      id="video-analysis"
      className="py-24 bg-slate-950 border-t border-slate-900 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/25 text-sky-300 font-semibold text-xs sm:text-sm mb-5">
              <Video size={15} />
              <span>{t.video.tag}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
              {t.video.titlePre}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-300">
                {t.video.titleHighlight}
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {t.video.desc}
            </p>
          </div>
        </Reveal>

        {/* Two Key Transparency & Early-Instructor Bento Cards */}
        <Reveal delayMs={80}>
          <div id="founding-offer" className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-12 scroll-mt-24">
            <SpotlightCard
              glowColor="rgba(16, 185, 129, 0.16)"
              className="lg:col-span-5 rounded-2xl border border-emerald-500/25 bg-emerald-500/[0.06] px-5 py-5"
            >
              <div className="flex flex-col justify-center h-full">
                <div className="inline-flex items-center gap-2 self-start rounded-xl bg-emerald-500/15 border border-emerald-500/30 px-3 py-1.5 text-emerald-300 font-bold text-xs sm:text-sm mb-2.5">
                  <Coins size={15} />
                  <span>{t.video.coinNoteTitle}</span>
                </div>
                <p className="text-sm text-slate-200 leading-relaxed">{t.video.coinNoteDesc}</p>
              </div>
            </SpotlightCard>

            <SpotlightCard
              glowColor="rgba(251, 191, 36, 0.16)"
              className="lg:col-span-7 rounded-2xl border border-amber-400/30 bg-gradient-to-r from-amber-500/[0.1] via-amber-500/[0.05] to-slate-900/60 px-5 py-5"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 h-full">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-amber-300 text-xs font-bold uppercase tracking-wider mb-1.5">
                    <Award size={14} />
                    <span>{t.video.founderOffer.badge}</span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-1">{t.video.founderOffer.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {t.video.founderOffer.desc}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="shrink-0 inline-flex items-center gap-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm px-4 py-2.5 transition-all hover:scale-[1.03] self-start sm:self-center shadow-lg shadow-amber-500/15"
                >
                  <span>{t.video.founderOffer.cta}</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </SpotlightCard>
          </div>
        </Reveal>

        {/* Sticky Interactive Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <Reveal delayMs={120}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {t.video.tabs.map((tab) => {
                  const Icon = tabIcons[tab.id];
                  const isSelected = !activeSubScreen && activeTabId === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      data-testid={`video-tab-${tab.id}`}
                      onClick={() => {
                        setActiveTabId(tab.id);
                        setActiveSubScreen(null);
                      }}
                      className={`flex flex-col items-start gap-2 rounded-2xl border p-3.5 text-left transition-all ${
                        isSelected
                          ? 'border-sky-400/60 bg-sky-500/15 text-white shadow-lg shadow-sky-500/10 -translate-y-0.5'
                          : 'border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700 hover:bg-slate-900'
                      }`}
                    >
                      <Icon
                        size={18}
                        className={isSelected ? 'text-sky-400' : 'text-slate-400'}
                      />
                      <span className="text-xs sm:text-sm font-semibold leading-snug">
                        {tab.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </Reveal>

            <Reveal delayMs={160}>
              <SpotlightCard className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  {activeTab.title}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  {activeTab.desc}
                </p>

                <ul className="space-y-3">
                  {activeTab.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-200">
                      <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-emerald-400" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 pt-5 border-t border-slate-800/80">
                  <p className="text-xs font-medium text-slate-400 mb-3">
                    {t.video.subScreensLabel}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {(Object.keys(SUB_SCREENSHOTS) as SubScreenKey[]).map((key) => {
                      const selected = activeSubScreen === key;
                      return (
                        <button
                          key={key}
                          type="button"
                          data-testid={`video-subscreen-${key}`}
                          onClick={() => setActiveSubScreen(selected ? null : key)}
                          className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all border ${
                            selected
                              ? 'border-emerald-400/60 bg-emerald-500/15 text-emerald-300 shadow-sm shadow-emerald-500/20'
                              : 'border-slate-800 bg-slate-950/60 text-slate-300 hover:border-slate-700 hover:text-white'
                          }`}
                        >
                          {t.video.subScreens[key]}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>

            <Reveal delayMs={200}>
              <button
                type="button"
                onClick={() =>
                  document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="px-6 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm sm:text-base transition-all hover:scale-[1.02] shadow-lg shadow-sky-500/20"
              >
                {t.video.cta}
              </button>
            </Reveal>
          </div>

          {/* Sticky Phone Frame on Desktop */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <Reveal delayMs={140} direction="right">
              <PhoneFrame
                src={displayedSrc}
                alt={displayedCaption}
                caption={displayedCaption}
                testId="video-showcase-image"
                accent={
                  activeSubScreen === 'levelPanel'
                    ? 'amber'
                    : activeTabId === 'earn' && !activeSubScreen
                    ? 'emerald'
                    : 'blue'
                }
              />
            </Reveal>
          </div>
        </div>

        {/* 4 Instructor Autonomy & Fee Bento Pillars */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.video.pillars.map((pillar, idx) => {
            const Icon = pillarIcons[idx] || CheckCircle2;
            const isFeeCard = idx === 3;
            return (
              <Reveal key={idx} delayMs={idx * 70}>
                <SpotlightCard
                  glowColor={isFeeCard ? 'rgba(251, 191, 36, 0.16)' : 'rgba(56, 189, 248, 0.14)'}
                  className={`h-full rounded-2xl border p-6 transition-colors ${
                    isFeeCard
                      ? 'border-amber-400/30 bg-gradient-to-b from-amber-500/[0.08] to-slate-900/60'
                      : 'border-slate-800/90 bg-slate-900/50 hover:border-sky-500/30'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-4 ${
                      isFeeCard
                        ? 'bg-amber-400/15 border-amber-400/30 text-amber-300'
                        : 'bg-sky-500/10 border-sky-500/20 text-sky-400'
                    }`}
                  >
                    <Icon size={19} />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{pillar.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{pillar.desc}</p>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VideoDemo;
