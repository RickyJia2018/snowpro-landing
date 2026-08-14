import React, { useState } from 'react';
import { Car, MapPin, Calendar, Users, PackageCheck, Fuel, ArrowRight, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const CarpoolDemo: React.FC = () => {
  const { t } = useLanguage();
  const [selectedRouteIndex, setSelectedRouteIndex] = useState(0);

  const routes = t.carpool.routes;

  return (
    <div className="py-24 bg-slate-900/60 border-t border-slate-800/80 relative overflow-hidden" id="carpool">
      {/* Decorative Glow Blobs */}
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Description & Value Props */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-semibold text-sm mb-6">
              <Car size={16} />
              <span>{t.carpool.tag}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
              {t.carpool.titlePre} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                {t.carpool.titleHighlight}
              </span>
            </h2>

            <p className="text-lg text-slate-300 mb-8 leading-relaxed font-light">
              {t.carpool.desc}
            </p>

            <div className="space-y-6 mb-10">
              {/* Feature 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Users size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">{t.carpool.feature1Title}</h3>
                  <p className="text-slate-400 font-light">{t.carpool.feature1Desc}</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <PackageCheck size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">{t.carpool.feature2Title}</h3>
                  <p className="text-slate-400 font-light">{t.carpool.feature2Desc}</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Fuel size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">{t.carpool.feature3Title}</h3>
                  <p className="text-slate-400 font-light">{t.carpool.feature3Desc}</p>
                </div>
              </div>
            </div>

            <button 
              onClick={() => {
                const el = document.getElementById('download');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-xl font-semibold transition-all hover:scale-105 shadow-lg shadow-cyan-500/10 inline-flex items-center gap-2"
            >
              <span>{t.carpool.cta}</span>
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Right Column: Interactive UI Showcase Cards */}
          <div className="relative">
            <div className="bg-slate-950/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl shadow-cyan-500/5">
              
              {/* Card Header Bar */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-800/80 mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></div>
                  <span className="text-xs font-mono font-medium text-slate-300 uppercase tracking-wider">
                    Snow Pro Carpool Feed
                  </span>
                </div>
                <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-slate-800 text-slate-400 border border-slate-700/50">
                  实时行程
                </span>
              </div>

              {/* Route Cards */}
              <div className="space-y-4">
                {routes.map((route: any, idx: number) => {
                  const isSelected = selectedRouteIndex === idx;
                  return (
                    <div 
                      key={idx}
                      onClick={() => setSelectedRouteIndex(idx)}
                      className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                        isSelected 
                          ? 'bg-slate-900 border-cyan-500/60 shadow-[0_0_25px_rgba(6,182,212,0.15)] ring-1 ring-cyan-500/30' 
                          : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/70'
                      }`}
                    >
                      {/* Top row: Route & Price */}
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div className="flex items-center gap-2 text-white font-bold text-base sm:text-lg">
                          <MapPin size={16} className="text-cyan-400 flex-shrink-0" />
                          <span>{route.from}</span>
                          <ArrowRight size={16} className="text-slate-500 flex-shrink-0" />
                          <span className="text-cyan-300">{route.to}</span>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <span className="text-base sm:text-lg font-bold text-cyan-400 font-mono">
                            {route.price}
                          </span>
                        </div>
                      </div>

                      {/* Middle row: Badges & Time */}
                      <div className="flex flex-wrap items-center gap-2 mb-3 text-xs text-slate-300">
                        <span className="flex items-center gap-1 bg-slate-800 px-2.5 py-1 rounded-md text-slate-300 font-light">
                          <Calendar size={12} className="text-slate-400" />
                          {route.date}
                        </span>
                        <span className="bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 px-2.5 py-1 rounded-md font-medium">
                          {route.seats}
                        </span>
                        <span className="bg-blue-500/10 text-blue-300 border border-blue-500/20 px-2.5 py-1 rounded-md font-medium">
                          {route.boardCapacity}
                        </span>
                      </div>

                      {/* Bottom row: Driver & Vehicle */}
                      <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800/60">
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-500 flex items-center justify-center text-white text-[10px] font-bold">
                            {route.driver.charAt(0)}
                          </div>
                          <span className="text-slate-300 font-medium">{route.driver}</span>
                          <ShieldCheck size={13} className="text-cyan-400" />
                        </div>
                        <span className="text-slate-400 font-light">{route.car}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CarpoolDemo;
