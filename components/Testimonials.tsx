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
    <div className="bg-slate-950 py-24 overflow-hidden relative border-t border-slate-900">
      {/* Decorative Glow Blob */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl font-bold text-center text-white mb-16">
          {t.testimonials.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.testimonials.reviews.map((review, idx) => (
            <div 
              key={idx} 
              className="bg-slate-900/40 backdrop-blur-md p-8 rounded-2xl border border-slate-800/80 hover:border-blue-500/30 hover:shadow-[0_0_25px_rgba(59,130,246,0.08)] transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={15} 
                    className={`${i < staticData[idx].rating ? 'fill-yellow-400 text-yellow-400' : 'text-slate-700'}`} 
                  />
                ))}
              </div>
              <p className="text-slate-300 mb-6 italic font-light text-sm leading-relaxed">"{review.content}"</p>
              <div className="flex items-center gap-4">
                <img 
                  src={staticData[idx].avatar} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-slate-800 shadow-md" 
                />
                <div>
                  <h4 className="font-bold text-white text-sm">{review.name}</h4>
                  <span className="text-slate-400 text-xs">{review.role}</span>
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
