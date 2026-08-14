import React, { useEffect, useRef } from 'react';
import { ChevronRight, Apple, Smartphone, Video, Car, GraduationCap, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Camera/3D configuration
    const fov = 350; // Focal length
    const centerX = width / 2;
    const centerY = height / 2;

    // Mouse tracking for interactive wind field and parallax
    const mouse = { x: -1000, y: -1000, active: false, rx: 0, ry: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
      // Target rotation based on mouse position (subtle 3D parallax)
      mouse.rx = (e.clientX - centerX) / width * 0.12;
      mouse.ry = (e.clientY - centerY) / height * 0.12;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.rx = 0;
      mouse.ry = 0;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', handleResize);

    // 3D Particles Definition
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
    }

    const particleCount = 180;
    const particles: Particle[] = [];

    // Helper to generate a random bluish/white color
    const getRandomColor = () => {
      const r = Math.floor(Math.random() * 50) + 180; // 180-230
      const g = Math.floor(Math.random() * 50) + 210; // 210-260
      const b = 255;
      return `rgb(${r}, ${g}, ${b})`;
    };

    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 1600;
      const y = (Math.random() - 0.5) * 1000 - 100;
      const z = Math.random() * 1000; // 0 to 1000 depth
      particles.push({
        x,
        y,
        z,
        speedY: Math.random() * 1.6 + 0.8, // Fall speed
        speedX: (Math.random() - 0.5) * 0.6,
        speedZ: -Math.random() * 1.5 - 0.6, // Moving forward (closer to camera)
        size: Math.random() * 2.5 + 0.8,
        color: getRandomColor(),
        alpha: Math.random() * 0.6 + 0.4
      });
    }

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Update and draw 3D snow particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Apply constant velocity + simulated ski wind field
        p.y += p.speedY;
        p.x += p.speedX;
        p.z += p.speedZ;

        // Interactive wind effect from cursor
        if (mouse.active) {
          const scale = fov / (fov + p.z);
          const px = (mouse.x - centerX) / scale;
          const py = (mouse.y - centerY) / scale;
          
          const dx = p.x - px;
          const dy = p.y - py;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 180) {
            const force = (180 - dist) / 180 * 2.8;
            p.x += (dx / dist) * force;
            p.y += (dy / dist) * force;
          }
        }

        // Parallax rotation based on mouse
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

        // Boundary recycling
        if (p.z <= 0) {
          p.z = 1000;
          p.x = (Math.random() - 0.5) * 1600;
          p.y = (Math.random() - 0.5) * 1000 - 300;
        }
        if (p.y > 600) {
          p.y = -600;
          p.z = Math.random() * 1000;
          p.x = (Math.random() - 0.5) * 1600;
        }

        // 3D projection rendering
        const scale = fov / (fov + p.z);
        const sx = centerX + rx * scale;
        const sy = centerY + ry * scale;

        // Render particle if on-screen
        if (sx >= 0 && sx <= width && sy >= 0 && sy <= height) {
          const depthAlpha = (1000 - p.z) / 1000;
          const finalAlpha = p.alpha * depthAlpha * 0.8;
          const size = p.size * scale * 1.5;

          ctx.beginPath();
          ctx.arc(sx, sy, Math.max(0.2, size), 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = finalAlpha;
          
          if (p.z < 350) {
            ctx.shadowColor = p.color;
            ctx.shadowBlur = 10;
          }
          
          ctx.fill();
          ctx.shadowBlur = 0;
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

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center pt-24 pb-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero_bg.jpg" 
          alt="Skiing Background"
          className="w-full h-full object-cover select-none"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-900/50 to-slate-950/98"></div>
        
        {/* Tech Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.07] mix-blend-overlay"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }}
        ></div>

        {/* 3D Interactive Snow Storm Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none"
        />

        {/* Neon Gradient Blobs */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px] animate-pulse"></div>
        <div className="absolute bottom-10 -right-20 w-80 h-80 bg-cyan-500/20 rounded-full blur-[96px] animate-pulse" style={{ animationDuration: '8s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto animate-fade-in-up">
        
        {/* Version Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-200 mb-8 shadow-lg shadow-blue-500/5">
          <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
          <span className="text-xs sm:text-sm font-medium tracking-wide">{t.hero.badge}</span>
        </div>
        
        {/* Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight mb-6 leading-tight">
          {t.hero.titlePre} <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300">
            {t.hero.titleHighlight}
          </span>
        </h1>
        
        {/* Subtitle */}
        <p className="mt-4 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-8 font-light leading-relaxed">
          {t.hero.subtitle}
        </p>

        {/* 4 Core Features Quick Navigation Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <button 
            onClick={() => scrollToSection('video-analysis')}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/15 hover:bg-blue-500/25 border border-blue-500/30 text-blue-200 text-xs sm:text-sm font-medium transition-all hover:scale-105"
          >
            <Video size={15} className="text-blue-400" />
            <span>{t.hero.pills.video}</span>
          </button>

          <button 
            onClick={() => scrollToSection('carpool')}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/30 text-cyan-200 text-xs sm:text-sm font-medium transition-all hover:scale-105"
          >
            <Car size={15} className="text-cyan-400" />
            <span>{t.hero.pills.carpool}</span>
          </button>

          <button 
            onClick={() => scrollToSection('courses')}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/15 hover:bg-indigo-500/25 border border-indigo-500/30 text-indigo-200 text-xs sm:text-sm font-medium transition-all hover:scale-105"
          >
            <GraduationCap size={15} className="text-indigo-400" />
            <span>{t.hero.pills.courses}</span>
          </button>

          <button 
            onClick={() => scrollToSection('skibuddy')}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/15 hover:bg-purple-500/25 border border-purple-500/30 text-purple-200 text-xs sm:text-sm font-medium transition-all hover:scale-105"
          >
            <Users size={15} className="text-purple-400" />
            <span>{t.hero.pills.skibuddy}</span>
          </button>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => window.open('https://apps.apple.com/app/id6754150275', '_blank')}
            className="group relative flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold text-base sm:text-lg transition-all hover:bg-blue-50 hover:scale-105 shadow-[0_0_25px_rgba(255,255,255,0.25)]"
          >
            <Apple size={22} className="fill-current" />
            <span>{t.hero.ctaIos}</span>
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-slate-300 whitespace-nowrap">
              {t.hero.ctaIosNote}
            </div>
          </button>
          
          <button 
            onClick={() => scrollToSection('download')}
            className="group flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-2xl font-bold text-base sm:text-lg transition-all hover:bg-white/20 hover:scale-105"
          >
            <Smartphone size={22} />
            <span>{t.hero.ctaAndroid}</span>
          </button>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div 
        onClick={() => scrollToSection('video-analysis')}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50 cursor-pointer hover:text-white transition-colors"
      >
        <ChevronRight size={28} className="rotate-90" />
      </div>
    </div>
  );
};

export default Hero;
