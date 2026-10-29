import React, { useState } from 'react';
import {
  Car,
  MapPin,
  Calendar,
  Users,
  PackageCheck,
  Fuel,
  ArrowRight,
  ShieldCheck,
  Navigation,
  Sparkles,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { uiExtraTranslations } from '../uiLocales';
import { Reveal, SpotlightCard } from './ui/Effects';

const CarpoolDemo: React.FC = () => {
  const { t, language } = useLanguage();
  const ui = uiExtraTranslations[language] || uiExtraTranslations.en;
  const [selectedRouteIndex, setSelectedRouteIndex] = useState(0);

  const routes = t.carpool.routes;
  const activeRoute = routes[selectedRouteIndex] || routes[0];

  const routeDistances = ['248 km · 2h 45m', '1,120 km · Trip', '195 km · 2h 20m'];

  return (
    <section
      className="py-28 bg-[#050b18] border-t border-white/[0.06] relative overflow-hidden"
      id="carpool"
    >
      {/* Ambient Cyber Glows */}
      <div className="absolute top-1/4 -right-24 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[420px] h-[420px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-alpine-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Value Props & CTA (5 cols) */}
          <Reveal direction="right" className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/25 text-cyan-300 font-mono font-semibold text-xs uppercase tracking-wider mb-6 shadow-[0_0_20px_rgba(6,182,212,0.15)]">
              <Car size={14} className="text-cyan-400" />
              <span>{t.carpool.tag}</span>
              <span className="text-slate-500">·</span>
              <span className="text-teal-300">{ui.carpool.instantMatch}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold text-white mb-6 leading-[1.15] tracking-tight">
              {t.carpool.titlePre} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-300 to-blue-400">
                {t.carpool.titleHighlight}
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300/90 mb-8 leading-relaxed">
              {t.carpool.desc}
            </p>

            <div className="space-y-4 mb-10">
              {/* Feature 1 */}
              <SpotlightCard
                className="p-4 sm:p-5 rounded-2xl bg-slate-900/50 border border-white/10 hover:border-cyan-500/40 transition-colors"
                spotlightColor="rgba(6, 182, 212, 0.14)"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-11 h-11 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                      <Users size={20} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base mb-1">
                      {t.carpool.feature1Title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {t.carpool.feature1Desc}
                    </p>
                  </div>
                </div>
              </SpotlightCard>

              {/* Feature 2 */}
              <SpotlightCard
                className="p-4 sm:p-5 rounded-2xl bg-slate-900/50 border border-white/10 hover:border-blue-500/40 transition-colors"
                spotlightColor="rgba(59, 130, 246, 0.14)"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-11 h-11 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400">
                      <PackageCheck size={20} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base mb-1">
                      {t.carpool.feature2Title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {t.carpool.feature2Desc}
                    </p>
                  </div>
                </div>
              </SpotlightCard>

              {/* Feature 3 */}
              <SpotlightCard
                className="p-4 sm:p-5 rounded-2xl bg-slate-900/50 border border-white/10 hover:border-emerald-500/40 transition-colors"
                spotlightColor="rgba(16, 185, 129, 0.14)"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-11 h-11 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                      <Fuel size={20} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base mb-1">
                      {t.carpool.feature3Title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {t.carpool.feature3Desc}
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
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500 text-slate-950 rounded-2xl font-extrabold text-sm sm:text-base transition-all hover:scale-[1.03] active:scale-[0.98] shadow-[0_0_30px_rgba(6,182,212,0.3)]"
            >
              <span>{t.carpool.cta}</span>
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </Reveal>

          {/* Right Column: Interactive Route Radar & Departure Board (7 cols) */}
          <Reveal direction="left" delay={140} className="lg:col-span-7">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-tr from-cyan-500/20 via-blue-500/15 to-teal-400/20 rounded-[2rem] blur-xl opacity-75 pointer-events-none" />

              <div className="relative bg-[#070e20]/90 backdrop-blur-2xl rounded-[1.75rem] p-5 sm:p-7 border border-white/15 shadow-[0_25px_70px_rgba(0,0,0,0.8)]">
                {/* Console Header Bar */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-5 border-b border-white/10 mb-5">
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-400" />
                    </span>
                    <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                      SNOW PRO CARPOOL RADAR
                    </span>
                  </div>
                  <span className="text-[11px] font-mono font-semibold px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 flex items-center gap-1.5">
                    <Sparkles size={11} />
                    <span>{ui.carpool.liveFeedBadge}</span>
                  </span>
                </div>

                {/* Active Route Interactive Telemetry Map Banner */}
                <div className="mb-5 p-4 rounded-2xl bg-slate-950/90 border border-cyan-500/30 relative overflow-hidden">
                  <div className="absolute inset-0 bg-dot-matrix opacity-20 pointer-events-none" />
                  <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 mb-1 flex items-center gap-1.5">
                        <Navigation size={11} />
                        <span>{ui.carpool.routeMapLabel}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm sm:text-base font-extrabold text-white">
                        <span>{activeRoute.from}</span>
                        <span className="text-cyan-400 font-mono">━━━✈</span>
                        <span className="text-cyan-300">{activeRoute.to}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 self-start sm:self-center">
                      <div className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-right">
                        <div className="text-[10px] font-mono text-slate-400">EST. ROUTE</div>
                        <div className="text-xs font-mono font-bold text-slate-200">
                          {routeDistances[selectedRouteIndex]}
                        </div>
                      </div>
                      <div className="px-3 py-1.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-right">
                        <div className="text-[10px] font-mono text-emerald-300">
                          {ui.carpool.departureIn}
                        </div>
                        <div className="text-xs font-mono font-extrabold text-emerald-400">
                          {activeRoute.price}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Route Cards List */}
                <div className="space-y-3.5">
                  {routes.map((route: any, idx: number) => {
                    const isSelected = selectedRouteIndex === idx;
                    return (
                      <div
                        key={idx}
                        onClick={() => setSelectedRouteIndex(idx)}
                        className={`group p-5 rounded-2xl border transition-all duration-300 cursor-pointer relative overflow-hidden ${
                          isSelected
                            ? 'bg-gradient-to-r from-slate-900 via-[#0b1730] to-slate-900 border-cyan-400/70 shadow-[0_0_30px_rgba(6,182,212,0.18)] ring-1 ring-cyan-400/30'
                            : 'bg-slate-900/45 border-white/10 hover:border-white/25 hover:bg-slate-900/75'
                        }`}
                      >
                        {/* Active Left Accent Bar */}
                        {isSelected && (
                          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-cyan-400 to-blue-500" />
                        )}

                        {/* Top row: Route & Price */}
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <div className="flex flex-wrap items-center gap-2 text-white font-bold text-base sm:text-lg">
                            <MapPin
                              size={17}
                              className={
                                isSelected ? 'text-cyan-400 shrink-0' : 'text-slate-400 shrink-0'
                              }
                            />
                            <span>{route.from}</span>
                            <ArrowRight size={15} className="text-slate-500 shrink-0" />
                            <span className="text-cyan-300">{route.to}</span>
                          </div>
                          <div className="text-right shrink-0">
                            <span className="inline-block px-3 py-1 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-sm sm:text-base font-extrabold text-cyan-300 font-mono">
                              {route.price}
                            </span>
                          </div>
                        </div>

                        {/* Middle row: Badges & Gear Specs */}
                        <div className="flex flex-wrap items-center gap-2 mb-3.5 text-xs">
                          <span className="flex items-center gap-1.5 bg-slate-800/90 border border-white/10 px-2.5 py-1 rounded-lg text-slate-200 font-mono">
                            <Calendar size={12} className="text-cyan-400" />
                            {route.date}
                          </span>
                          <span className="bg-cyan-500/15 text-cyan-200 border border-cyan-500/30 px-2.5 py-1 rounded-lg font-semibold">
                            {route.seats}
                          </span>
                          <span className="bg-blue-500/15 text-blue-200 border border-blue-500/30 px-2.5 py-1 rounded-lg font-semibold flex items-center gap-1">
                            <PackageCheck size={12} className="text-blue-400" />
                            {route.boardCapacity}
                          </span>
                        </div>

                        {/* Bottom row: Driver & Vehicle */}
                        <div className="flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-white/[0.08]">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-slate-950 text-[11px] font-extrabold">
                              {route.driver.charAt(0)}
                            </div>
                            <span className="text-slate-200 font-semibold">{route.driver}</span>
                            <span className="inline-flex items-center gap-1 text-[10px] text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.5 rounded">
                              <ShieldCheck size={11} className="text-emerald-400" />
                              <span className="hidden sm:inline">{ui.carpool.verifiedDriver}</span>
                            </span>
                          </div>
                          <span className="text-slate-300 font-mono text-[11px] bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
                            {route.car}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-4 text-center text-[11px] font-mono text-slate-400">
                  {ui.carpool.selectRouteHint}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default CarpoolDemo;
