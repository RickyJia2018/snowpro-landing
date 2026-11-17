import React, { useEffect, useState } from 'react';
import { Expand, X } from 'lucide-react';

interface PhoneFrameProps {
  src: string;
  alt: string;
  caption?: string;
  testId?: string;
  className?: string;
  accent?: 'blue' | 'emerald' | 'cyan' | 'purple' | 'amber';
  priority?: boolean;
  tilt?: boolean;
}

const glowByAccent = {
  blue: 'from-blue-500/25 via-sky-400/15 to-transparent',
  emerald: 'from-emerald-500/25 via-cyan-400/15 to-transparent',
  cyan: 'from-cyan-500/25 via-blue-500/15 to-transparent',
  purple: 'from-indigo-500/25 via-purple-400/15 to-transparent',
  amber: 'from-amber-400/25 via-sky-400/10 to-transparent',
};

const PhoneFrame: React.FC<PhoneFrameProps> = ({
  src,
  alt,
  caption,
  testId,
  className = '',
  accent = 'blue',
  priority = false,
  tilt = true,
}) => {
  const [transform, setTransform] = useState('perspective(1100px) rotateX(0deg) rotateY(0deg)');
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    if (!zoomed) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setZoomed(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [zoomed]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tilt) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    const rotateY = x * 8;
    const rotateX = -y * 8;
    setTransform(`perspective(1100px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`);
  };

  const resetTilt = () => {
    if (!tilt) return;
    setTransform('perspective(1100px) rotateX(0deg) rotateY(0deg)');
  };

  return (
    <>
      <div className={`relative mx-auto w-full max-w-[300px] sm:max-w-[320px] ${className}`}>
        <div
          className={`pointer-events-none absolute -inset-7 rounded-[3.2rem] bg-gradient-to-b ${glowByAccent[accent]} blur-2xl transition-all duration-500`}
          aria-hidden="true"
        />

        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={resetTilt}
          style={{ transform }}
          className="group relative rounded-[2.6rem] border border-slate-700/80 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 p-2.5 shadow-[0_30px_80px_-18px_rgba(0,0,0,0.9)] ring-1 ring-white/15 transition-transform duration-300 ease-out will-change-transform"
        >
          {/* Metallic outer highlight */}
          <div
            className="pointer-events-none absolute inset-0 rounded-[2.6rem] bg-gradient-to-tr from-white/[0.04] via-transparent to-white/[0.12]"
            aria-hidden="true"
          />

          <div className="relative overflow-hidden rounded-[2.05rem] bg-slate-950 aspect-[9/19.5]">
            <img
              key={src}
              src={src}
              alt={alt}
              data-testid={testId}
              loading={priority ? 'eager' : 'lazy'}
              onClick={() => setZoomed(true)}
              className="animate-screen-in h-full w-full cursor-zoom-in object-cover object-top select-none"
            />

            <button
              type="button"
              onClick={() => setZoomed(true)}
              aria-label={`Inspect ${alt}`}
              className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-full border border-white/15 bg-slate-950/75 px-2.5 py-1 text-[11px] font-medium text-slate-200 opacity-0 backdrop-blur-md transition-opacity group-hover:opacity-100"
            >
              <Expand size={12} />
            </button>
          </div>
        </div>

        {caption && (
          <p className="mt-3.5 text-center text-xs font-medium tracking-wide text-slate-400">
            {caption}
          </p>
        )}
      </div>

      {zoomed && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={() => setZoomed(false)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-xl animate-screen-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-[420px] flex flex-col items-center"
          >
            <button
              type="button"
              aria-label="Close preview"
              onClick={() => setZoomed(false)}
              className="mb-3 self-end inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/90 p-2 text-slate-200 hover:bg-slate-800 hover:text-white transition-colors"
            >
              <X size={18} />
            </button>
            <div className="overflow-hidden rounded-[2rem] border border-slate-700 bg-slate-950 shadow-2xl">
              <img
                src={src}
                alt={alt}
                className="max-h-[80vh] w-auto object-contain"
              />
            </div>
            {caption && (
              <p className="mt-3 text-center text-sm font-medium text-slate-300">{caption}</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default PhoneFrame;
