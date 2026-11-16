import React from 'react';
import { Sparkles, GraduationCap, Video, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Courses: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-slate-900/40 py-24 border-t border-slate-800/80 relative overflow-hidden" id="courses">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute -top-10 right-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-cyan-300 font-semibold mb-4 bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 rounded-full text-sm">
            <GraduationCap size={16} />
            <span>{t.courses.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">
            {t.courses.title}
          </h2>
          <p className="text-lg text-slate-300 font-light leading-relaxed">
            {t.courses.desc}
          </p>

          {/* Two-sided Value Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 max-w-2xl mx-auto text-left">
            <div className="bg-slate-900/70 border border-slate-800 p-4 rounded-2xl flex items-start gap-3">
              <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 mt-0.5">
                <Video size={18} />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">{t.courses.feature1Title}</h4>
                <p className="text-slate-400 text-xs mt-0.5 font-light">{t.courses.feature1Desc}</p>
              </div>
            </div>
            <div className="bg-slate-900/70 border border-slate-800 p-4 rounded-2xl flex items-start gap-3">
              <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 mt-0.5">
                <CheckCircle2 size={18} />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">{t.courses.feature2Title}</h4>
                <p className="text-slate-400 text-xs mt-0.5 font-light">{t.courses.feature2Desc}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Explore CTA Button */}
        <div className="text-center">
          <button
            onClick={() => {
              const el = document.getElementById('download');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-4 px-8 rounded-2xl hover:shadow-[0_0_30px_rgba(59,130,246,0.25)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
          >
            <Sparkles size={18} className="text-blue-200 animate-pulse" />
            <span>{t.courses.btnText}</span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default Courses;
