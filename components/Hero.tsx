import React, { useEffect, useRef, useState } from 'react';
import {
  ChevronDown,
  Apple,
  Smartphone,
  Video,
  Car,
  GraduationCap,
  Users,
  Activity,
  Compass,
  Award,
  Sparkles,
  Play,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { uiExtraTranslations } from '../uiLocales';
import { SpotlightCard } from './ui/Effects';

const Hero: React.FC = () => {
  const { t, language } = useLanguage();
  const ui = uiExtraTranslations[language] || uiExtraTranslations.en;
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const fov = 380;
    let centerX = width / 2;
    let centerY = height / 2;

    const mouse = { x: -1000, y: -1000, active: false, rx: 0, ry: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
      mouse.rx = ((e.clientX - centerX) / width) * 0.14;
      mouse.ry = ((e.clientY - centerY) / height) * 0.14;
      setParallax({
        x: ((e.clientX - centerX) / width) * 24,
        y: ((e.clientY - centerY) / height) * 24,
      });
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.rx = 0;
      mouse.ry = 0;
      setParallax({ x: 0, y: 0 });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      centerX = width / 2;
      centerY = height / 2;
    };
    window.addEventListener('resize', handleResize);

    interface Particle {
      x: number;
      y: number;
      z: number;
      speedY: number;
      speedX: number;
      speedZ: number;
      size: number;
      color: string;
      alpha: number;
      streak: boolean;
    }

    const particleCount = 210;
    const particles: Particle[] = [];

    const colors = [
      'rgb(224, 242, 254)',
      'rgb(165, 243, 252)',
      'rgb(56, 189, 248)',
      'rgb(255, 255, 255)',
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: (Math.random() - 0.5) * 1800,
        y: (Math.random() - 0.5) * 1100 - 100,
        z: Math.random() * 1000,
        speedY: Math.random() * 1.5 + 0.6,
        speedX: (Math.random() - 0.5) * 0.8,
        speedZ: -Math.random() * 2.2 - 0.8,
        size: Math.random() * 2.6 + 0.7,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.65 + 0.3,
        streak: Math.random() > 0.82,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.y += p.speedY;
        p.x += p.speedX;
        p.z += p.speedZ;

        if (mouse.active) {
          const scale = fov / (fov + p.z);
          const px = (mouse.x - centerX) / scale;
          const py = (mouse.y - centerY) / scale;

          const dx = p.x - px;
          const dy = p.y - py;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 200 && dist > 1) {
            const force = ((200 - dist) / 200) * 3.2;
            p.x += (dx / dist) * force;
            p.y += (dy / dist) * force;
          }
        }

        let rx = p.x;
        let ry = p.y;
        if (mouse.active) {
          const cosY = Math.cos(mouse.rx);
          const sinY = Math.sin(mouse.rx);
          rx = p.x * cosY - p.z * sinY;

          const cosX = Math.cos(mouse.ry);
          const sinX = Math.sin(mouse.ry);
          ry = p.y * cosX - p.z * sinX;
        }

        if (p.z <= 10) {
          p.z = 1000;
          p.x = (Math.random() - 0.5) * 1800;
          p.y = (Math.random() - 0.5) * 1100 - 250;
        }
        if (p.y > 650) {
          p.y = -650;
          p.z = Math.random() * 1000;
          p.x = (Math.random() - 0.5) * 1800;
        }

        const scale = fov / (fov + p.z);
        const sx = centerX + rx * scale;
        const sy = centerY + ry * scale;

        if (sx >= -20 && sx <= width + 20 && sy >= -20 && sy <= height + 20) {
          const depthAlpha = (1000 - p.z) / 1000;
          const finalAlpha = p.alpha * depthAlpha * 0.85;
          const size = Math.max(0.3, p.size * scale * 1.45);

          ctx.globalAlpha = finalAlpha;
          ctx.fillStyle = p.color;

          if (p.streak && p.z < 500) {
            ctx.beginPath();
            ctx.strokeStyle = p.color;
            ctx.lineWidth = size * 0.75;
            ctx.lineCap = 'round';
            ctx.moveTo(sx, sy);
            ctx.lineTo(sx - p.speedX * 4 * scale, sy - p.speedY * 7 * scale);
            ctx.stroke();
          } else {
            ctx.beginPath();
            ctx.arc(sx, sy, size, 0, Math.PI * 2);
            if (p.z < 300) {
              ctx.shadowColor = p.color;
              ctx.shadowBlur = 12;
            }
            ctx.fill();
            ctx.shadowBlur = 0;
          }
        }
      }

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const featurePills = [
    {
      id: 'video-analysis',
      label: t.hero.pills.video,
      icon: Video,
      tag: '240 FPS AI/Pro',
      color: 'from-blue-500/20 to-cyan-500/10 border-blue-400/30 text-blue-200 hover:border-cyan-400/70',
      iconColor: 'text-cyan-400',
    },
    {
      id: 'carpool',
      label: t.hero.pills.carpool,
      icon: Car,
      tag: 'Smart Gear Match',
      color: 'from-cyan-500/20 to-teal-500/10 border-cyan-400/30 text-cyan-200 hover:border-teal-400/70',
      iconColor: 'text-teal-400',
    },
    {
      id: 'courses',
      label: t.hero.pills.courses,
      icon: GraduationCap,
      tag: 'CSIA / CASI Pro',
      color: 'from-indigo-500/20 to-blue-500/10 border-indigo-400/30 text-indigo-200 hover:border-indigo-400/70',
      iconColor: 'text-indigo-400',
    },
    {
      id: 'skibuddy',
      label: t.hero.pills.skibuddy,
      icon: Users,
      tag: 'Live Squads',
      color: 'from-purple-500/20 to-pink-500/10 border-purple-400/30 text-purple-200 hover:border-purple-400/70',
      iconColor: 'text-purple-400',
    },
  ];

  const statsList = [
    {
      label: t.hero.stats.coaches,
      value: ui.hero.coachesValue,
      icon: Award,
      accent: 'text-cyan-400',
    },
    {
      label: t.hero.stats.analysis,
      value: ui.hero.analysisValue,
      icon: Activity,
      accent: 'text-blue-400',
    },
    {
      label: ui.hero.resortsLabel,
      value: ui.hero.resortsValue,
      icon: Compass,
      accent: 'text-emerald-400',
    },
    {
      label: t.hero.stats.rating,
      value: ui.hero.ratingValue,
      icon: Sparkles,
      accent: 'text-amber-400',
    },
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col justify-between pt-28 pb-12 select-none">
      {/* Layered Cyber-Alpine Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero_bg.jpg"
          alt="Alpine Night Skiing"
          className="w-full h-full object-cover scale-105 transition-transform duration-700 ease-out opacity-55"
          style={{
            transform: `scale(1.06) translate3d(${-parallax.x * 0.5}px, ${-parallax.y * 0.5}px, 0)`,
          }}
        />
        {/* Deep Spatial Vignette & Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/90 via-[#030712]/45 to-[#030712]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#030712_90%)]" />

        {/* Alpine Coordinate Grid */}
        <div className="absolute inset-0 bg-alpine-grid opacity-50 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

        {/* Dynamic Aurora Light Beams */}
        <div
          className="absolute -top-32 left-1/4 w-[650px] h-[420px] bg-gradient-to-r from-blue-600/25 via-cyan-400/20 to-emerald-400/15 rounded-full blur-[130px] pointer-events-none animate-pulse-glow"
          style={{
            transform: `translate3d(${parallax.x * 1.2}px, ${parallax.y * 1.2}px, 0)`,
          }}
        />
        <div
          className="absolute bottom-24 right-1/5 w-[500px] h-[380px] bg-gradient-to-tr from-indigo-600/20 via-purple-500/15 to-cyan-400/20 rounded-full blur-[140px] pointer-events-none"
          style={{
            transform: `translate3d(${-parallax.x}px, ${-parallax.y}px, 0)`,
          }}
        />

        {/* 3D Interactive Snow & Speed-Streak Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none"
        />
      </div>

      {/* Floating 3D HUD Telemetry Widgets (Desktop Left & Right) */}
      <div
        className="hidden 2xl:block absolute left-10 top-1/3 z-20 pointer-events-none"
        style={{
          transform: `translate3d(${parallax.x * 0.9}px, ${parallax.y * 0.9}px, 0)`,
        }}
      >
        <div className="glass-panel rounded-2xl p-4 border border-cyan-500/25 shadow-[0_0_40px_rgba(6,182,212,0.12)] w-60 animate-float">
          <div className="flex items-center justify-between text-[10px] font-mono text-cyan-400 uppercase tracking-wider mb-2">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              TELEMETRY HUD
            </span>
            <span>00:08.14</span>
          </div>
          <div className="grid grid-cols-2 gap-2 my-2">
            <div className="bg-slate-950/70 rounded-xl p-2.5 border border-white/5">
              <div className="text-[10px] text-slate-400">{ui.hero.edgeAngle}</div>
              <div className="text-lg font-mono font-bold text-cyan-300">52.4°</div>
            </div>
            <div className="bg-slate-950/70 rounded-xl p-2.5 border border-white/5">
              <div className="text-[10px] text-slate-400">{ui.hero.gForce}</div>
              <div className="text-lg font-mono font-bold text-blue-300">1.84 G</div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-[11px] text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1.5 rounded-lg">
            <Activity size={13} className="text-emerald-400 shrink-0" />
            <span className="truncate font-mono">{ui.hero.coachVoiceActive}</span>
          </div>
        </div>
      </div>

      <div
        className="hidden 2xl:block absolute right-10 top-2/5 z-20 pointer-events-none"
        style={{
          transform: `translate3d(${-parallax.x * 0.8}px, ${-parallax.y * 0.8}px, 0)`,
        }}
      >
        <div
          className="glass-panel rounded-2xl p-4 border border-purple-500/25 shadow-[0_0_40px_rgba(168,85,247,0.12)] w-60 animate-float"
          style={{ animationDelay: '2s' }}
        >
          <div className="flex items-center justify-between text-[10px] font-mono text-purple-300 uppercase tracking-wider mb-2">
            <span>CARVE SCORE</span>
            <span className="text-emerald-400 font-bold">PRO LEVEL</span>
          </div>
          <div className="flex items-end justify-between mb-2">
            <span className="text-3xl font-extrabold font-mono text-white">94.8</span>
            <span className="text-xs text-cyan-400 font-mono">+12.4% vs last run</span>
          </div>
          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div className="w-[92%] h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-400 rounded-full" />
          </div>
        </div>
      </div>

      {/* Main Center Hero Content */}
      <div className="relative z-10 my-auto text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-8">
        {/* Glowing Ecosystem Live Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/75 backdrop-blur-xl border border-cyan-500/30 text-cyan-200 mb-8 shadow-[0_0_30px_rgba(6,182,212,0.18)] hover:border-cyan-400/60 transition-all cursor-pointer group"
          onClick={() => scrollToSection('video-analysis')}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400"></span>
          </span>
          <span className="text-xs sm:text-sm font-semibold tracking-wide">
            {t.hero.badge}
          </span>
          <span className="text-xs text-cyan-400 font-mono group-hover:translate-x-0.5 transition-transform">
            →
          </span>
        </div>

        {/* Display Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-[5.25rem] font-extrabold text-white tracking-tight mb-6 leading-[1.08]">
          <span className="block drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
            {t.hero.titlePre}
          </span>
          <span className="mt-1 inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-300 text-glow-cyan pb-2">
            {t.hero.titleHighlight}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-2 text-base sm:text-xl text-slate-300/90 max-w-3xl mx-auto mb-10 font-normal leading-relaxed">
          {t.hero.subtitle}
        </p>

        {/* 4 Core Ecosystems Interactive Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto mb-10">
          {featurePills.map((pill) => {
            const Icon = pill.icon;
            return (
              <button
                key={pill.id}
                onClick={() => scrollToSection(pill.id)}
                className={`group relative flex flex-col items-center sm:items-start p-3.5 rounded-2xl bg-gradient-to-br ${pill.color} backdrop-blur-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(6,182,212,0.3)] text-left`}
              >
                <div className="flex items-center justify-between w-full mb-1.5">
                  <div className="p-2 rounded-xl bg-slate-950/60 border border-white/10">
                    <Icon size={16} className={pill.iconColor} />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider opacity-70 hidden sm:inline">
                    {pill.tag}
                  </span>
                </div>
                <span className="text-xs sm:text-sm font-bold text-white group-hover:text-cyan-200 transition-colors">
                  {pill.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Primary & Secondary CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14">
          <button
            onClick={() => window.open('https://apps.apple.com/app/id6754150275', '_blank')}
            className="w-full sm:w-auto group relative flex items-center justify-center gap-3 bg-white text-slate-950 px-8 py-4 rounded-2xl font-extrabold text-base sm:text-lg transition-all duration-300 hover:bg-cyan-50 hover:scale-[1.03] active:scale-[0.98] shadow-[0_0_40px_rgba(255,255,255,0.28)]"
          >
            <Apple size={22} className="fill-current" />
            <span>{t.hero.ctaIos}</span>
            <span className="ml-1 text-[10px] font-mono uppercase px-2 py-0.5 rounded-md bg-slate-900/10 text-slate-700">
              iOS
            </span>
          </button>

          <button
            onClick={() => scrollToSection('download')}
            className="w-full sm:w-auto group flex items-center justify-center gap-3 bg-slate-900/75 hover:bg-slate-800/90 backdrop-blur-xl border border-cyan-500/30 hover:border-cyan-400/60 text-white px-8 py-4 rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-[0_0_30px_rgba(6,182,212,0.15)]"
          >
            <Smartphone size={20} className="text-cyan-400" />
            <span>{t.hero.ctaAndroid}</span>
            <span className="ml-1 text-[10px] font-mono uppercase px-2 py-0.5 rounded-md bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
              APK
            </span>
          </button>

          <button
            onClick={() => scrollToSection('video-analysis')}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 text-slate-200 hover:text-cyan-300 font-semibold text-sm transition-all"
          >
            <span className="w-7 h-7 rounded-full bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300">
              <Play size={12} className="fill-current ml-0.5" />
            </span>
            <span>{t.video.cta}</span>
          </button>
        </div>
      </div>

      {/* Bottom Live Telemetry Stats Dock */}
      <div className="relative z-10 max-w-5xl w-full mx-auto px-4 sm:px-6">
        <SpotlightCard
          className="rounded-3xl bg-slate-950/70 backdrop-blur-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.7)] p-4 sm:p-6"
          spotlightColor="rgba(34, 211, 238, 0.14)"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {statsList.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className={`flex items-center gap-3.5 ${
                    idx > 0 ? 'pt-3 sm:pt-0 sm:pl-6' : ''
                  }`}
                >
                  <div className="w-11 h-11 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0">
                    <Icon size={20} className={stat.accent} />
                  </div>
                  <div className="text-left">
                    <div className="text-xl sm:text-2xl font-extrabold font-mono text-white tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-400 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </SpotlightCard>

        {/* Scroll Indicator */}
        <div
          onClick={() => scrollToSection('video-analysis')}
          className="mt-6 flex flex-col items-center justify-center gap-1 text-slate-400 hover:text-cyan-300 cursor-pointer transition-colors group"
        >
          <span className="text-[10px] font-mono uppercase tracking-widest opacity-75">
            {ui.hero.scrollExplore}
          </span>
          <ChevronDown size={18} className="animate-bounce text-cyan-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
