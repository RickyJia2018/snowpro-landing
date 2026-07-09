import React, { useState, useEffect } from 'react';
import { Play, Pause, Maximize2, MessageCircle, CheckCircle2, AlertCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const VideoDemo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activePointIndex, setActivePointIndex] = useState(0);
  const { t } = useLanguage();

  const demoPoints = t.video.demoPoints;
  // Timestamps are simulation only, hardcoded for demo visualization syncing
  const timestamps = ["00:04", "00:08", "00:12"];

  // Simulate video playback progress for the demo
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setActivePointIndex((prev) => (prev + 1) % (demoPoints.length + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [isPlaying, demoPoints.length]);

  return (
    <div className="py-24 bg-slate-950 border-t border-slate-900 relative overflow-hidden" id="core-feature">
      {/* Decorative Glow Blob */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 font-semibold text-sm mb-6">
              {t.video.tag}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
              {t.video.titlePre} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">{t.video.titleHighlight}</span>
            </h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed font-light">
              {t.video.desc}
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400">
                    <CheckCircle2 size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">{t.video.feature1Title}</h3>
                  <p className="text-slate-400 font-light">{t.video.feature1Desc}</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <MessageCircle size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">{t.video.feature2Title}</h3>
                  <p className="text-slate-400 font-light">{t.video.feature2Desc}</p>
                </div>
              </div>
            </div>

            <button 
              onClick={() => {
                const el = document.getElementById('download');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="mt-10 px-8 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white rounded-xl font-semibold transition-all hover:scale-105 shadow-lg shadow-blue-500/10"
            >
              {t.video.cta}
            </button>
          </div>

          {/* Interactive UI Mockup */}
          <div className="order-1 lg:order-2 relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl blur-lg opacity-25 animate-pulse"></div>
            <div className="relative bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800/80 aspect-[4/3] md:aspect-video">
              
              {/* Fake Video Header */}
              <div className="absolute top-0 w-full p-4 flex justify-between items-center z-20 bg-gradient-to-b from-black/80 to-transparent">
                <div className="text-white font-medium text-xs font-mono opacity-80">2024-02-15 崇礼万龙.mp4</div>
                <Maximize2 className="text-white/80 w-4 h-4" />
              </div>

              {/* Video Placeholder Image */}
              <img 
                src="https://images.unsplash.com/photo-1565992441121-4367c2967103?q=80&w=1000&auto=format&fit=crop" 
                alt="Ski Analysis" 
                className="w-full h-full object-cover opacity-75 select-none"
              />

              {/* Analysis Overlay Graphics (Lines) */}
              <div className={`absolute inset-0 z-10 transition-opacity duration-500 ${activePointIndex % 2 !== 0 ? 'opacity-100' : 'opacity-0'}`}>
                 <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <line x1="40" y1="30" x2="60" y2="80" stroke="#0ea5e9" strokeWidth="0.8" strokeDasharray="3" />
                    <circle cx="60" cy="80" r="1.5" fill="#0ea5e9" className="animate-ping" />
                 </svg>
              </div>

              {/* Playback Controls Mockup */}
              <div className="absolute bottom-0 w-full bg-slate-950/80 backdrop-blur border-t border-slate-800/60 px-4 py-3 z-20">
                <div className="w-full bg-slate-800 h-1 rounded-full mb-3 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-cyan-400 h-full transition-all duration-1000 ease-linear" 
                    style={{ width: `${(activePointIndex / demoPoints.length) * 100}%` }}
                  ></div>
                </div>
                <div className="flex items-center justify-center gap-6">
                  <button onClick={() => setIsPlaying(!isPlaying)} className="text-white hover:text-cyan-400 transition-colors">
                    {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                  </button>
                </div>
              </div>

              {/* Floating Comment Card */}
              <div className="absolute top-1/4 right-4 w-64 z-30 space-y-2">
                {demoPoints.map((point, idx) => (
                  <div 
                    key={idx}
                    className={`transform transition-all duration-500 ease-in-out
                      ${idx === (activePointIndex % demoPoints.length) 
                        ? 'translate-x-0 opacity-100 scale-100' 
                        : 'translate-x-10 opacity-0 scale-95 pointer-events-none absolute'
                      }
                    `}
                  >
                    <div className={`p-3 rounded-xl shadow-lg border-l-4 backdrop-blur-md text-xs
                      ${point.type === 'correction' 
                        ? 'bg-red-950/80 border-red-500 text-red-200' 
                        : 'bg-green-950/80 border-green-500 text-green-200'
                      }
                    `}>
                      <div className="flex items-center gap-2 mb-1 opacity-90 font-mono text-[10px]">
                        {point.type === 'correction' ? <AlertCircle size={10} /> : <CheckCircle2 size={10} />}
                        <span>{timestamps[idx] || "00:00"}</span>
                      </div>
                      {point.comment}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDemo;
