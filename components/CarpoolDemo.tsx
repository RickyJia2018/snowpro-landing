import React from 'react';
import { Car, Users, PackageCheck, Fuel, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const CarpoolDemo: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="py-24 bg-slate-900/60 border-t border-slate-800/80 relative overflow-hidden" id="carpool">
      {/* Decorative Glow Blobs */}
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          
          {/* Description & Value Props */}
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


        </div>
      </div>
    </div>
  );
};

export default CarpoolDemo;
