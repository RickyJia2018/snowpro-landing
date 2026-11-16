import React from 'react';
import { Users, Mountain, Video, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const SkiBuddyDemo: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="py-24 bg-slate-950 border-t border-slate-900 relative overflow-hidden" id="skibuddy">
      {/* Decorative Glow Blobs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute -bottom-10 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          
          {/* Title & Descriptions */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 font-semibold text-sm mb-6">
              <Users size={16} />
              <span>{t.skibuddy.tag}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
              {t.skibuddy.titlePre} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">
                {t.skibuddy.titleHighlight}
              </span>
            </h2>

            <p className="text-lg text-slate-300 mb-8 leading-relaxed font-light">
              {t.skibuddy.desc}
            </p>

            <div className="space-y-6 mb-10">
              {/* Feature 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                    <Mountain size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">{t.skibuddy.feature1Title}</h3>
                  <p className="text-slate-400 font-light">{t.skibuddy.feature1Desc}</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400">
                    <Video size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">{t.skibuddy.feature2Title}</h3>
                  <p className="text-slate-400 font-light">{t.skibuddy.feature2Desc}</p>
                </div>
              </div>
            </div>

            <button 
              onClick={() => {
                const el = document.getElementById('download');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-xl font-semibold transition-all hover:scale-105 shadow-lg shadow-purple-500/10 inline-flex items-center gap-2"
            >
              <span>{t.skibuddy.cta}</span>
              <ArrowRight size={18} />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SkiBuddyDemo;
