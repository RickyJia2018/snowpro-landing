import React, { useState } from 'react';
import { ArrowRight, Car, CloudSnow, MapPin, PackageCheck } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Reveal, SpotlightCard } from './Motion';
import PhoneFrame from './PhoneFrame';

const CARPOOL_SCREENSHOTS: Record<'list' | 'detail' | 'map', string> = {
  list: '/screenshots/carpool-list.jpg',
  detail: '/screenshots/carpool-detail.jpg',
  map: '/screenshots/carpool-map.jpg',
};

const CarpoolDemo: React.FC = () => {
  const { t } = useLanguage();
  const [activeTabId, setActiveTabId] = useState<'list' | 'detail' | 'map'>('list');

  const activeTab = t.carpool.tabs.find((tab) => tab.id === activeTabId) || t.carpool.tabs[0];

  const tabIcons = {
    list: CloudSnow,
    detail: PackageCheck,
    map: MapPin,
  };

  return (
    <section
      id="carpool"
      className="py-24 bg-slate-950 border-t border-slate-900 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="flex flex-wrap items-center gap-2.5 mb-5">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 font-semibold text-xs sm:text-sm">
                  <Car size={15} />
                  <span>{t.carpool.tag}</span>
                </span>
                <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/35 text-emerald-300 font-bold text-xs tracking-wide uppercase">
                  {t.carpool.freeBadge}
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-5">
                {t.carpool.titlePre}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300">
                  {t.carpool.titleHighlight}
                </span>
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6 max-w-2xl">
                {t.carpool.desc}
              </p>

              {/* Animated Route Visual Bar */}
              <div className="mb-7 max-w-xl rounded-2xl border border-cyan-500/20 bg-slate-900/60 px-4 py-3 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-sky-300 shrink-0">
                  <span className="h-2.5 w-2.5 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
                  <span>Pickup</span>
                </div>
                <svg className="h-4 flex-1" viewBox="0 0 200 12" preserveAspectRatio="none" aria-hidden="true">
                  <line
                    x1="4"
                    y1="6"
                    x2="196"
                    y2="6"
                    stroke="#22d3ee"
                    strokeWidth="2"
                    strokeDasharray="6 6"
                    className="animate-route-dash"
                  />
                </svg>
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-300 shrink-0">
                  <span>Resort</span>
                  <MapPin size={14} className="text-emerald-400" />
                </div>
              </div>
            </Reveal>

            {/* Interactive Carpool Tabs */}
            <div className="space-y-3 mb-8">
              {t.carpool.tabs.map((tab, idx) => {
                const Icon = tabIcons[tab.id];
                const isSelected = activeTabId === tab.id;
                return (
                  <Reveal key={tab.id} delayMs={idx * 70}>
                    <SpotlightCard
                      glowColor="rgba(34, 211, 238, 0.14)"
                      className={`rounded-2xl border transition-all ${
                        isSelected
                          ? 'border-cyan-400/60 bg-cyan-500/10 shadow-lg shadow-cyan-500/10'
                          : 'border-slate-800/80 bg-slate-900/50 hover:border-slate-700 hover:bg-slate-900'
                      }`}
                    >
                      <button
                        type="button"
                        data-testid={`carpool-tab-${tab.id}`}
                        onClick={() => setActiveTabId(tab.id)}
                        className="w-full text-left p-4 sm:p-5 flex items-start gap-4"
                      >
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${
                            isSelected
                              ? 'bg-cyan-500/20 border-cyan-400/40 text-cyan-300'
                              : 'bg-slate-950 border-slate-800 text-slate-400'
                          }`}
                        >
                          <Icon size={18} />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                              {tab.label}
                            </span>
                          </div>
                          <h3 className="font-bold text-white text-base mb-1">{tab.title}</h3>
                          <p className="text-sm text-slate-400 leading-relaxed">{tab.desc}</p>
                        </div>
                      </button>
                    </SpotlightCard>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delayMs={220}>
              <button
                type="button"
                onClick={() =>
                  document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-6 py-3.5 text-sm sm:text-base transition-all hover:scale-[1.02] shadow-lg shadow-cyan-500/20"
              >
                <span>{t.carpool.cta}</span>
                <ArrowRight size={17} />
              </button>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal direction="right">
              <PhoneFrame
                src={CARPOOL_SCREENSHOTS[activeTab.id]}
                alt={activeTab.caption}
                caption={activeTab.caption}
                testId="carpool-showcase-image"
                accent="cyan"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarpoolDemo;
