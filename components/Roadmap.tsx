import React from 'react';
import { Clock, Ticket, ShieldCheck, Award, ShoppingBag, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Roadmap: React.FC = () => {
  const { t } = useLanguage();
  
  // Map icons for future roadmap features:
  // 0: Discounted Lift Tickets (Ticket)
  // 1: Gear Rental Deals (ShieldCheck)
  // 2: Official Instructor Booking (Award)
  // 3: Community & Gear Shop (ShoppingBag)
  const icons = [Ticket, ShieldCheck, Award, ShoppingBag];

  const features = t.roadmap.features.map((f: any, i: number) => ({
    ...f,
    icon: icons[i] || Sparkles
  }));

  return (
    <div className="bg-slate-900 py-24 border-t border-slate-800 relative overflow-hidden" id="roadmap">
      {/* Decorative Light Halos */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[128px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-blue-300 font-semibold mb-4 bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full text-sm">
             <Clock size={16} />
             <span>{t.roadmap.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            {t.roadmap.title}
          </h2>
          <p className="text-lg text-slate-400 font-light">
            {t.roadmap.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature: any, index: number) => (
            <div 
              key={index}
              className="group bg-slate-950/50 backdrop-blur-md p-7 rounded-3xl border border-slate-800/80 hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.12)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
            >
              {/* Decoration Circle */}
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full opacity-40 group-hover:scale-150 transition-transform duration-500"></div>

              <div className="relative z-10">
                <div className="w-13 h-13 rounded-2xl bg-slate-900 border border-slate-800 text-blue-400 flex items-center justify-center mb-6 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:text-white group-hover:border-transparent transition-all duration-300">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-slate-400 leading-relaxed font-light text-xs sm:text-sm">
                  {feature.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/60">
                <span className="inline-block text-[10px] font-bold tracking-wider text-cyan-400 uppercase bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-1 rounded-md">
                  {t.roadmap.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
