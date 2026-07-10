import React from 'react';
import { BookOpen, Clock, Award, Coins, Sparkles, GraduationCap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Courses: React.FC = () => {
  const { t } = useLanguage();

  // Define course category color helpers
  const getCategoryStyles = (style: string) => {
    const s = style.toLowerCase();
    if (s.includes('刻滑') || s.includes('carving')) {
      return 'bg-blue-500/10 text-blue-300 border-blue-500/20';
    }
    if (s.includes('野雪') || s.includes('freeride')) {
      return 'bg-purple-500/10 text-purple-300 border-purple-500/20';
    }
    return 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20';
  };

  // Define level badge color helpers
  const getLevelStyles = (level: string) => {
    const l = level.toLowerCase();
    if (l.includes('专家') || l.includes('expert') || l.includes('エキスパート')) {
      return 'bg-rose-500/10 text-rose-300 border-rose-500/20';
    }
    if (l.includes('高级') || l.includes('advanced') || l.includes('上級') || l.includes('avancé') || l.includes('fortgeschritten')) {
      return 'bg-amber-500/10 text-amber-300 border-amber-500/20';
    }
    return 'bg-sky-500/10 text-sky-300 border-sky-500/20';
  };

  return (
    <div className="bg-slate-950 py-24 border-t border-slate-900 relative overflow-hidden" id="courses">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute -top-10 right-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-cyan-300 font-semibold mb-4 bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 rounded-full text-sm">
            <GraduationCap size={16} />
            <span>{t.courses.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">
            {t.courses.title}
          </h2>
          <p className="text-lg text-slate-400 font-light leading-relaxed">
            {t.courses.desc}
          </p>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {t.courses.list.map((course: any, index: number) => (
            <div
              key={index}
              className="group bg-slate-900/40 backdrop-blur-md p-8 rounded-3xl border border-slate-800/80 hover:border-blue-500/40 hover:shadow-[0_0_35px_rgba(59,130,246,0.15)] hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
            >
              {/* Card Gradient Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div>
                {/* Course Badges */}
                <div className="flex items-center gap-2 mb-6">
                  <span className={`text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-md border ${getCategoryStyles(course.style)}`}>
                    {course.style}
                  </span>
                  <span className={`text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-md border ${getLevelStyles(course.level)}`}>
                    {course.level}
                  </span>
                </div>

                {/* Course Title */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                  {course.title}
                </h3>

                {/* Instructor Info */}
                <p className="text-xs text-slate-400 font-light mb-6 flex items-center gap-1.5">
                  <Award size={14} className="text-blue-400" />
                  <span>授课教练: <strong>{course.instructor}</strong></span>
                </p>
              </div>

              {/* Footer details */}
              <div className="border-t border-slate-800/60 pt-4 flex items-center justify-between mt-auto">
                <div className="flex items-center gap-1.5 text-slate-400 text-xs font-light">
                  <Clock size={14} className="text-slate-500" />
                  <span>{course.lessons} 课时</span>
                </div>
                <div className="flex items-center gap-1.5 text-amber-400 text-sm font-semibold">
                  <Coins size={14} className="text-amber-500" />
                  <span>{course.price}</span>
                </div>
              </div>
            </div>
          ))}
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
