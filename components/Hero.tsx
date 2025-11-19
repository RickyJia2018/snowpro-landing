import React from 'react';
import { ChevronRight, Apple, Smartphone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="relative h-screen min-h-[600px] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=2070&auto=format&fit=crop" 
          alt="Skiing Background"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-200 mb-8">
          <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
          <span className="text-sm font-medium tracking-wide">{t.hero.badge}</span>
        </div>
        
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6 leading-tight">
          {t.hero.titlePre} <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            {t.hero.titleHighlight}
          </span>
        </h1>
        
        <p className="mt-4 text-xl text-slate-300 max-w-2xl mx-auto mb-10 font-light">
          {t.hero.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group relative flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-xl font-bold text-lg transition-all hover:bg-blue-50 hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            <Apple size={24} className="fill-current" />
            <span>{t.hero.ctaIos}</span>
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-white whitespace-nowrap">
              {t.hero.ctaIosNote}
            </div>
          </button>
          
          <button className="group flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:bg-white/20 hover:scale-105">
            <Smartphone size={24} />
            <span>{t.hero.ctaAndroid}</span>
          </button>
        </div>

        <div className="mt-16 flex justify-center gap-8 text-slate-400 text-sm">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-white">500+</span>
            <span>{t.hero.stats.coaches}</span>
          </div>
          <div className="w-px h-10 bg-white/20"></div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-white">10k+</span>
            <span>{t.hero.stats.analysis}</span>
          </div>
          <div className="w-px h-10 bg-white/20"></div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-white">4.9</span>
            <span>{t.hero.stats.rating}</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
        <ChevronRight size={32} className="rotate-90" />
      </div>
    </div>
  );
};

export default Hero;
