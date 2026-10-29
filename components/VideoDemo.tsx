import React, { useState, useEffect } from 'react';
import {
  Play,
  Pause,
  CheckCircle2,
  AlertCircle,
  Video,
  SkipBack,
  SkipForward,
  Volume2,
  Crosshair,
  Activity,
  Award,
  Layers,
  ArrowRight,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { uiExtraTranslations } from '../uiLocales';
import { Reveal, SpotlightCard } from './ui/Effects';

const VideoDemo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activePointIndex, setActivePointIndex] = useState(1);
  const [showHudVectors, setShowHudVectors] = useState(true);

  const { t, language } = useLanguage();
  const ui = uiExtraTranslations[language] || uiExtraTranslations.en;

  const demoPoints = t.video.demoPoints;
  const timestamps = ['00:04.12', '00:08.48', '00:12.05'];

  // Frame telemetry data per keyframe
  const telemetryFrames = [
    {
      edgeAngle: '31.4°',
      hipAngle: '142°',
      speed: '46 km/h',
      statusColor: 'text-rose-400',
      badgeBg: 'bg-rose-500/15 border-rose-500/40 text-rose-300',
      strokeColor: '#f43f5e',
      secondaryStroke: '#fbbf24',
      // SVG coordinates for Keyframe 0 (High center of gravity)
      shoulder: { x: 46, y: 26 },
      hip: { x: 49, y: 45 },
      knee: { x: 53, y: 63 },
      board: { x: 58, y: 79 },
      idealLine: 'M 25 85 Q 52 68 82 50',
      actualLine: 'M 25 85 Q 55 75 84 68',
    },
    {
      edgeAngle: '54.8°',
      hipAngle: '112°',
      speed: '62 km/h',
      statusColor: 'text-emerald-400',
      badgeBg: 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300',
      strokeColor: '#10b981',
      secondaryStroke: '#06b6d4',
      // SVG coordinates for Keyframe 1 (Deep Apex Carve)
      shoulder: { x: 42, y: 34 },
      hip: { x: 46, y: 50 },
      knee: { x: 54, y: 64 },
      board: { x: 62, y: 78 },
      idealLine: 'M 20 84 Q 52 65 85 45',
      actualLine: 'M 20 84 Q 52 65 85 45',
    },
    {
      edgeAngle: '38.2°',
      hipAngle: '134°',
      speed: '54 km/h',
      statusColor: 'text-amber-400',
      badgeBg: 'bg-amber-500/15 border-amber-500/40 text-amber-300',
      strokeColor: '#f59e0b',
      secondaryStroke: '#38bdf8',
      // SVG coordinates for Keyframe 2 (Early exit)
      shoulder: { x: 50, y: 29 },
      hip: { x: 52, y: 47 },
      knee: { x: 56, y: 64 },
      board: { x: 60, y: 78 },
      idealLine: 'M 22 82 Q 55 62 86 42',
      actualLine: 'M 22 82 Q 48 52 74 34',
    },
  ];

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setActivePointIndex((prev) => (prev + 1) % demoPoints.length);
    }, 3600);

    return () => clearInterval(interval);
  }, [isPlaying, demoPoints.length]);

  const currentFrame = telemetryFrames[activePointIndex % telemetryFrames.length];
  const currentPoint = demoPoints[activePointIndex % demoPoints.length];

  return (
    <section
      className="py-28 bg-[#030712] relative overflow-hidden border-t border-white/[0.06]"
      id="video-analysis"
    >
      {/* Background Cyber-Alpine Ambient Lighting */}
      <div className="absolute top-1/4 -left-32 w-[520px] h-[520px] bg-blue-600/12 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[460px] h-[460px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-dot-matrix opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Feature Breakdown (5 cols) */}
          <Reveal direction="right" className="lg:col-span-5 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/25 text-cyan-300 font-mono font-semibold text-xs uppercase tracking-wider mb-6 shadow-[0_0_20px_rgba(59,130,246,0.15)]">
              <Video size={14} className="text-cyan-400" />
              <span>{t.video.tag}</span>
              <span className="text-slate-500">·</span>
              <span className="text-blue-300">{ui.video.frameStep}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold text-white mb-6 leading-[1.15] tracking-tight">
              {t.video.titlePre} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-300">
                {t.video.titleHighlight}
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300/90 mb-8 leading-relaxed font-normal">
              {t.video.desc}
            </p>

            {/* Feature Cards */}
            <div className="space-y-4 mb-10">
              <SpotlightCard
                className="p-5 rounded-2xl bg-slate-900/50 border border-white/10 hover:border-cyan-500/40 transition-colors"
                spotlightColor="rgba(6, 182, 212, 0.14)"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-inner">
                      <Crosshair size={20} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-white text-base">
                        {t.video.feature1Title}
                      </h3>
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                        240 FPS
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {t.video.feature1Desc}
                    </p>
                  </div>
                </div>
              </SpotlightCard>

              <SpotlightCard
                className="p-5 rounded-2xl bg-slate-900/50 border border-white/10 hover:border-blue-500/40 transition-colors"
                spotlightColor="rgba(59, 130, 246, 0.14)"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shadow-inner">
                      <Volume2 size={20} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-white text-base">
                        {t.video.feature2Title}
                      </h3>
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">
                        HD VOICE
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {t.video.feature2Desc}
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </div>

            <button
              onClick={() => {
                const el = document.getElementById('download');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 text-slate-950 rounded-2xl font-extrabold text-sm sm:text-base transition-all hover:scale-[1.03] active:scale-[0.98] shadow-[0_0_30px_rgba(6,182,212,0.3)]"
            >
              <span>{t.video.cta}</span>
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </Reveal>

          {/* Right Column: Interactive Pro HUD Telemetry Studio (7 cols) */}
          <Reveal direction="left" delay={120} className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative group">
              {/* Outer Neon Halo */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/30 via-cyan-400/25 to-emerald-400/20 rounded-[2rem] blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative bg-[#070d1f] rounded-[1.75rem] overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.85)] border border-white/15">
                {/* Studio Top Telemetry Bar */}
                <div className="px-4 sm:px-5 py-3 bg-slate-950/90 border-b border-white/10 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-slate-300 font-mono text-xs truncate max-w-[200px] sm:max-w-xs">
                      {ui.video.fileName}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setShowHudVectors(!showHudVectors)}
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-mono font-semibold border transition-all ${
                        showHudVectors
                          ? 'bg-cyan-500/15 text-cyan-300 border-cyan-500/40'
                          : 'bg-white/5 text-slate-400 border-white/10'
                      }`}
                    >
                      <Layers size={12} />
                      <span>{ui.video.hudMode}</span>
                    </button>
                    <span className="px-2.5 py-1 rounded-lg bg-blue-500/15 border border-blue-500/30 text-blue-300 font-mono text-[11px] font-bold">
                      {timestamps[activePointIndex]}
                    </span>
                  </div>
                </div>

                {/* Video Viewport with Biomechanical Vector Overlay */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950 select-none">
                  <img
                    src="https://images.unsplash.com/photo-1565992441121-4367c2967103?q=80&w=1200&auto=format&fit=crop"
                    alt="Ski Biomechanical Analysis"
                    className="w-full h-full object-cover opacity-80 transition-transform duration-700"
                    style={{
                      transform:
                        activePointIndex === 1
                          ? 'scale(1.06) translate(-1%, 1%)'
                          : activePointIndex === 2
                          ? 'scale(1.03) translate(1%, -1%)'
                          : 'scale(1)',
                    }}
                  />

                  {/* Subtle Vignette & Scanline */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050b1a] via-transparent to-black/50" />

                  {/* Interactive Vector & Skeleton SVG Overlay */}
                  {showHudVectors && (
                    <svg
                      className="absolute inset-0 w-full h-full z-10 pointer-events-none"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <linearGradient id="idealGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.2" />
                          <stop offset="50%" stopColor="#10b981" stopOpacity="0.9" />
                          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.3" />
                        </linearGradient>
                      </defs>

                      {/* Target Carving Line */}
                      <path
                        d={currentFrame.idealLine}
                        fill="none"
                        stroke="url(#idealGrad)"
                        strokeWidth="0.7"
                        strokeDasharray="2 1.5"
                      />

                      {/* Actual Skier Trajectory Line */}
                      {activePointIndex !== 1 && (
                        <path
                          d={currentFrame.actualLine}
                          fill="none"
                          stroke={currentFrame.strokeColor}
                          strokeWidth="0.9"
                        />
                      )}

                      {/* Edge Angle Protractor Reference Plane */}
                      <line
                        x1={currentFrame.board.x - 16}
                        y1={currentFrame.board.y + 4}
                        x2={currentFrame.board.x + 16}
                        y2={currentFrame.board.y - 6}
                        stroke="#38bdf8"
                        strokeWidth="0.5"
                        strokeDasharray="1.5 1.5"
                      />

                      {/* Center of Gravity Plumb Line */}
                      <line
                        x1={currentFrame.shoulder.x}
                        y1={currentFrame.shoulder.y}
                        x2={currentFrame.board.x}
                        y2={currentFrame.board.y}
                        stroke={currentFrame.secondaryStroke}
                        strokeWidth="0.6"
                        strokeDasharray="1.5 1.5"
                      />

                      {/* Biomechanical Skeleton Segments */}
                      <polyline
                        points={`${currentFrame.shoulder.x},${currentFrame.shoulder.y} ${currentFrame.hip.x},${currentFrame.hip.y} ${currentFrame.knee.x},${currentFrame.knee.y} ${currentFrame.board.x},${currentFrame.board.y}`}
                        fill="none"
                        stroke={currentFrame.strokeColor}
                        strokeWidth="1.1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                      {/* Joint Keypoints */}
                      {[
                        currentFrame.shoulder,
                        currentFrame.hip,
                        currentFrame.knee,
                        currentFrame.board,
                      ].map((pt, i) => (
                        <g key={i}>
                          <circle
                            cx={pt.x}
                            cy={pt.y}
                            r="2.2"
                            fill="none"
                            stroke={currentFrame.strokeColor}
                            strokeWidth="0.4"
                            opacity="0.7"
                          />
                          <circle
                            cx={pt.x}
                            cy={pt.y}
                            r="1.1"
                            fill="#ffffff"
                            stroke={currentFrame.strokeColor}
                            strokeWidth="0.6"
                          />
                        </g>
                      ))}
                    </svg>
                  )}

                  {/* Top-Left Live Telemetry HUD Readouts */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20 flex flex-col gap-2">
                    <div className="bg-slate-950/80 backdrop-blur-md border border-white/10 rounded-xl p-2.5 sm:p-3 flex items-center gap-4 shadow-lg">
                      <div>
                        <div className="text-[10px] font-mono text-slate-400 uppercase">
                          {ui.video.edgeAngleLabel}
                        </div>
                        <div
                          className={`text-sm sm:text-base font-mono font-extrabold ${currentFrame.statusColor}`}
                        >
                          {currentFrame.edgeAngle}
                        </div>
                      </div>
                      <div className="h-6 w-px bg-white/10" />
                      <div>
                        <div className="text-[10px] font-mono text-slate-400 uppercase">
                          {ui.video.hipAngulationLabel}
                        </div>
                        <div className="text-sm sm:text-base font-mono font-extrabold text-cyan-300">
                          {currentFrame.hipAngle}
                        </div>
                      </div>
                      <div className="hidden sm:block h-6 w-px bg-white/10" />
                      <div className="hidden sm:block">
                        <div className="text-[10px] font-mono text-slate-400 uppercase">
                          {ui.video.speedLabel}
                        </div>
                        <div className="text-sm sm:text-base font-mono font-extrabold text-white">
                          {currentFrame.speed}
                        </div>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-950/75 backdrop-blur-md border border-white/10 text-[11px] font-mono text-slate-300 w-fit">
                      <Activity size={12} className="text-cyan-400" />
                      <span>
                        {ui.video.turnPhaseLabel}:{' '}
                        <strong className="text-cyan-300">
                          {ui.video.turnPhases[activePointIndex]}
                        </strong>
                      </span>
                    </div>
                  </div>

                  {/* Floating Coach Feedback Callout Card */}
                  <div className="absolute bottom-3 right-3 left-3 sm:left-auto sm:bottom-4 sm:right-4 sm:w-80 z-20">
                    <div
                      className={`p-3.5 sm:p-4 rounded-2xl shadow-2xl border backdrop-blur-xl transition-all duration-300 ${
                        currentPoint.type === 'correction'
                          ? 'bg-rose-950/85 border-rose-500/50 text-rose-100'
                          : 'bg-emerald-950/85 border-emerald-500/50 text-emerald-100'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-1.5 font-mono text-[11px] font-bold">
                          {currentPoint.type === 'correction' ? (
                            <AlertCircle size={14} className="text-rose-400 shrink-0" />
                          ) : (
                            <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                          )}
                          <span>@{timestamps[activePointIndex]}</span>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/30 border border-white/10">
                          {ui.video.coachName} · {ui.video.coachCert}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm font-medium leading-snug">
                        {currentPoint.comment}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Timeline & Voice Waveform Console */}
                <div className="bg-[#050a18] border-t border-white/10 p-4 sm:p-5">
                  <div className="text-[11px] font-mono text-slate-400 mb-2.5 flex items-center justify-between">
                    <span>{ui.video.interactiveHint}</span>
                    <span className="flex items-center gap-1.5 text-cyan-400">
                      <Award size={12} />
                      <span>{ui.video.voiceTrack}</span>
                    </span>
                  </div>

                  {/* Interactive Keyframe Timeline Scrubber */}
                  <div className="relative h-9 bg-slate-900/90 rounded-xl border border-white/10 px-3 flex items-center mb-4">
                    {/* Simulated Audio Waveform Background */}
                    <div className="absolute inset-x-3 flex items-center justify-between gap-0.5 opacity-25 pointer-events-none">
                      {Array.from({ length: 48 }).map((_, i) => {
                        const h = 20 + ((i * 17) % 65);
                        return (
                          <div
                            key={i}
                            className="w-1 bg-cyan-400 rounded-full"
                            style={{ height: `${h * 0.25}px` }}
                          />
                        );
                      })}
                    </div>

                    {/* Progress Fill */}
                    <div
                      className="h-1.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 rounded-full transition-all duration-500 relative z-10"
                      style={{
                        width: `${((activePointIndex + 1) / demoPoints.length) * 100}%`,
                      }}
                    />

                    {/* Keyframe Marker Pins */}
                    <div className="absolute inset-x-6 flex items-center justify-between z-20">
                      {demoPoints.map((pt: any, idx: number) => {
                        const isActive = idx === activePointIndex;
                        const isCorrection = pt.type === 'correction';
                        return (
                          <button
                            key={idx}
                            onClick={() => {
                              setIsPlaying(false);
                              setActivePointIndex(idx);
                            }}
                            className={`group/pin flex items-center gap-1.5 px-2.5 py-1 rounded-lg font-mono text-[11px] font-bold transition-all ${
                              isActive
                                ? isCorrection
                                  ? 'bg-rose-500 text-white shadow-[0_0_15px_rgba(244,63,94,0.6)] scale-105'
                                  : 'bg-emerald-500 text-slate-950 shadow-[0_0_15px_rgba(16,185,129,0.6)] scale-105'
                                : 'bg-slate-800/90 text-slate-300 hover:bg-slate-700 border border-white/10'
                            }`}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${
                                isActive
                                  ? 'bg-white'
                                  : isCorrection
                                  ? 'bg-rose-400'
                                  : 'bg-emerald-400'
                              }`}
                            />
                            <span>{timestamps[idx]}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Playback Transport Controls */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          setIsPlaying(false);
                          setActivePointIndex(
                            (prev) => (prev - 1 + demoPoints.length) % demoPoints.length
                          );
                        }}
                        className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
                        aria-label="Previous Frame"
                      >
                        <SkipBack size={16} />
                      </button>

                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                      >
                        {isPlaying ? <Pause size={15} /> : <Play size={15} />}
                        <span className="font-mono">{isPlaying ? 'PAUSE' : 'PLAY'}</span>
                      </button>

                      <button
                        onClick={() => {
                          setIsPlaying(false);
                          setActivePointIndex((prev) => (prev + 1) % demoPoints.length);
                        }}
                        className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
                        aria-label="Next Frame"
                      >
                        <SkipForward size={16} />
                      </button>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                      <span className="hidden sm:inline text-cyan-400">0.25x SLOW-MO</span>
                      <span className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300">
                        FRAME {activePointIndex + 1} / {demoPoints.length}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default VideoDemo;
