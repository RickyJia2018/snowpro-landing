import React from 'react';
import { Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Testimonials: React.FC = () => {
  const { t } = useLanguage();
  
  // We'll map the translated reviews to the static avatars/ratings
  const staticData = [
    { avatar: "https://picsum.photos/100/100?random=1", rating: 5 },
    { avatar: "https://picsum.photos/100/100?random=2", rating: 4 },
    { avatar: "https://picsum.photos/100/100?random=3", rating: 5 }
  ];

  return (
    <div className="bg-white py-24 overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none">
         <svg width="100%" height="100%">
            <pattern id="pattern-circles" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
               <circle cx="2" cy="2" r="1" className="text-slate-900" fill="currentColor" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#pattern-circles)" />
         </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">
          {t.testimonials.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.testimonials.reviews.map((review, idx) => (
            <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={`${i < staticData[idx].rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <p className="text-slate-700 mb-6 italic">"{review.content}"</p>
              <div className="flex items-center gap-4">
                <img src={staticData[idx].avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{review.name}</h4>
                  <span className="text-slate-500 text-xs">{review.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
