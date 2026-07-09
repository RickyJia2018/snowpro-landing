import React, { useEffect, useRef } from 'react';
import { ChevronRight, Apple, Smartphone } from 'lucide-react';
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

    // 3D Skiing Carving Trails Definition
    // We model 3 parallel carving lines scrolling down in 3D space
    interface TrailPoint {
      x: number;
      y: number;
      z: number;
    }

    // Renders a smooth 3D glowing ribbon representing carving ski lines
    const draw3DTrail = (
      ctx: CanvasRenderingContext2D,
      offsetX: number,
      color: string,
      time: number
    ) => {
      const segments = 45;
      const points: TrailPoint[] = [];
      
      // Calculate 3D points along a sine wave terrain curve
      for (let i = 0; i < segments; i++) {
        const progress = i / (segments - 1);
        const z = (1 - progress) * 900 + 50; // Depth from 950 down to 50
        
        // Dynamic carving curve shape (sine waves simulating skiing turns)
        const wave1 = Math.sin(progress * 4.5 + time * 0.8) * 160;
        const wave2 = Math.cos(progress * 2.0 - time * 0.4) * 80;
        
        const x = offsetX + wave1 + wave2;
        // Mountain slope profile (inclined down)
        const y = (progress - 0.4) * 350 + Math.sin(progress * 3 + time * 0.5) * 20 + 150;
        
        points.push({ x, y, z });
      }

      ctx.beginPath();
      let first = true;

      // Project all points to 2D screen coordinates
      for (let i = 0; i < points.length; i++) {
        const pt = points[i];
        
        // 3D Parallax Rotation based on mouse
        let rx = pt.x;
        let ry = pt.y;
        if (mouse.active) {
          // Rotate slightly around Y axis
          const cosY = Math.cos(mouse.rx);
          const sinY = Math.sin(mouse.rx);
          rx = pt.x * cosY - pt.z * sinY;
          
          // Rotate slightly around X axis
          const cosX = Math.cos(mouse.ry);
          const sinX = Math.sin(mouse.ry);
          ry = pt.y * cosX - pt.z * sinX;
        }

        const scale = fov / (fov + pt.z);
        const sx = centerX + rx * scale;
        const sy = centerY + ry * scale;

        if (first) {
          ctx.moveTo(sx, sy);
          first = false;
        } else {
          ctx.lineTo(sx, sy);
        }
      }

      ctx.strokeStyle = color;
      ctx.lineWidth = 3;
      ctx.shadowColor = color;
      ctx.shadowBlur = 18;
      ctx.stroke();
      ctx.shadowBlur = 0; // Reset glow
    };

    let time = 0;

    // Render loop
    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // 1. Draw glowing 3D ski carving lines in space
      draw3DTrail(ctx, -250, 'rgba(14, 165, 233, 0.75)', time); // Cyan carving path
      draw3DTrail(ctx, 250, 'rgba(59, 130, 246, 0.65)', time + Math.PI / 2); // Blue carving path
      draw3DTrail(ctx, 0, 'rgba(255, 255, 255, 0.55)', time - Math.PI / 4); // White carving path

      // 2. Update and draw 3D snow particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Apply constant velocity + simulated ski wind field
        p.y += p.speedY;
        p.x += p.speedX;
        p.z += p.speedZ;

        // Interactive wind effect from cursor
        if (mouse.active) {
          // Project mouse coordinates back into a virtual depth
          const scale = fov / (fov + p.z);
          const px = (mouse.x - centerX) / scale;
          const py = (mouse.y - centerY) / scale;
          
          // Distance in 2D projected space
          const dx = p.x - px;
          const dy = p.y - py;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 180) {
            // Push particles away in 3D direction (wind gust)
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
          // Reached camera plane, respawn in far distance
          p.z = 1000;
          p.x = (Math.random() - 0.5) * 1600;
          p.y = (Math.random() - 0.5) * 1000 - 300;
        }
        if (p.y > 600) {
          // Reached bottom, respawn at top
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
          // Depth factor (far is smaller and dimmer)
          const depthAlpha = (1000 - p.z) / 1000;
          const finalAlpha = p.alpha * depthAlpha * 0.8;
          const size = p.size * scale * 1.5;

          ctx.beginPath();
          ctx.arc(sx, sy, Math.max(0.2, size), 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = finalAlpha;
          
          // Far particles look regular, close ones have light glow
          if (p.z < 350) {
            ctx.shadowColor = p.color;
            ctx.shadowBlur = 10;
          }
          
          ctx.fill();
          ctx.shadowBlur = 0; // Reset glow
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

  return (
    <div className="relative h-screen min-h-[600px] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=2070&auto=format&fit=crop" 
          alt="Skiing Background"
          className="w-full h-full object-cover select-none"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/40 to-slate-950/95"></div>
        
        {/* Tech Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.07] mix-blend-overlay"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }}
        ></div>

        {/* 3D Interactive Ski Trails & Snow Storm Canvas */}
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
          <button 
            onClick={() => window.open('https://apps.apple.com/app/id6754150275', '_blank')}
            className="group relative flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-xl font-bold text-lg transition-all hover:bg-blue-50 hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            <Apple size={24} className="fill-current" />
            <span>{t.hero.ctaIos}</span>
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-white whitespace-nowrap">
              {t.hero.ctaIosNote}
            </div>
          </button>
          
          <button 
            onClick={() => {
              const el = document.getElementById('download');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="group flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:bg-white/20 hover:scale-105"
          >
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
