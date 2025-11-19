import React from 'react';
import { Clock, Car, Users, PlayCircle, ShoppingBag, MessageSquare } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Roadmap: React.FC = () => {
  const { t } = useLanguage();
  
  // Map the simple text array from translation to icons
  // Order in translation file must match this order:
  // 0: Carpooling (Car)
  // 1: Buddy (Users)
  // 2: Courses (PlayCircle)
  // 3: Shop (ShoppingBag)
  // 4: Community (MessageSquare)
  const icons = [Car, Users, PlayCircle, ShoppingBag, MessageSquare];

  const features = t.roadmap.features.map((f, i) => ({
    ...f,
    icon: icons[i]
  }));

  return (
    <div className="bg-slate-50 py-24" id="roadmap">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-brand-secondary font-semibold mb-4 bg-blue-50 px-4 py-1 rounded-full">
             <Clock size={16} />
             <span>{t.roadmap.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            {t.roadmap.title}
          </h2>
          <p className="text-lg text-slate-600">
            {t.roadmap.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Decoration Circle */}
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500"></div>

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-slate-50 text-brand-primary flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                  <feature.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-500 leading-relaxed">
                  {feature.desc}
                </p>
                <div className="mt-6 inline-block text-xs font-semibold tracking-wider text-slate-400 uppercase bg-slate-100 px-2 py-1 rounded">
                  {t.roadmap.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
