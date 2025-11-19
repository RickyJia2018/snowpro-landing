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
    <div className="py-24 bg-white" id="core-feature">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-6">
              {t.video.tag}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              {t.video.titlePre} <br/>
              <span className="text-brand-secondary">{t.video.titleHighlight}</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              {t.video.desc}
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <CheckCircle2 size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">{t.video.feature1Title}</h3>
                  <p className="text-slate-500">{t.video.feature1Desc}</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                    <MessageCircle size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">{t.video.feature2Title}</h3>
                  <p className="text-slate-500">{t.video.feature2Desc}</p>
                </div>
              </div>
            </div>

            <button className="mt-10 px-8 py-3 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors shadow-lg">
              {t.video.cta}
            </button>
          </div>

          {/* Interactive UI Mockup */}
          <div className="order-1 lg:order-2 relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl blur-lg opacity-30 animate-pulse"></div>
            <div className="relative bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800 aspect-[4/3] md:aspect-video">
              
              {/* Fake Video Header */}
              <div className="absolute top-0 w-full p-4 flex justify-between items-center z-20 bg-gradient-to-b from-black/70 to-transparent">
                <div className="text-white font-medium text-sm">2024-02-15 崇礼万龙.mp4</div>
                <Maximize2 className="text-white/80 w-5 h-5" />
              </div>

              {/* Video Placeholder Image */}
              <img 
                src="https://images.unsplash.com/photo-1565992441121-4367c2967103?q=80&w=1000&auto=format&fit=crop" 
                alt="Ski Analysis" 
                className="w-full h-full object-cover opacity-80"
              />

              {/* Analysis Overlay Graphics (Lines) */}
              <div className={`absolute inset-0 z-10 transition-opacity duration-500 ${activePointIndex % 2 !== 0 ? 'opacity-100' : 'opacity-0'}`}>
                 <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <line x1="40" y1="30" x2="60" y2="80" stroke="#ef4444" strokeWidth="0.5" strokeDasharray="2" />
                    <circle cx="60" cy="80" r="1" fill="#ef4444" className="animate-ping" />
                 </svg>
              </div>

              {/* Playback Controls Mockup */}
              <div className="absolute bottom-0 w-full bg-slate-900/90 backdrop-blur px-4 py-3 z-20">
                <div className="w-full bg-slate-700 h-1 rounded-full mb-3 overflow-hidden">
                  <div 
                    className="bg-brand-accent h-full transition-all duration-1000 ease-linear" 
                    style={{ width: `${(activePointIndex / demoPoints.length) * 100}%` }}
                  ></div>
                </div>
                <div className="flex items-center justify-center gap-6">
                  <button onClick={() => setIsPlaying(!isPlaying)} className="text-white hover:text-brand-accent">
                    {isPlaying ? <Pause size={24} /> : <Play size={24} />}
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
                    <div className={`p-3 rounded-lg shadow-lg border-l-4 backdrop-blur-md text-sm
                      ${point.type === 'correction' 
                        ? 'bg-red-500/90 border-red-300 text-white' 
                        : 'bg-green-500/90 border-green-300 text-white'
                      }
                    `}>
                      <div className="flex items-center gap-2 mb-1 opacity-90 font-mono text-xs">
                        {point.type === 'correction' ? <AlertCircle size={12} /> : <CheckCircle2 size={12} />}
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
