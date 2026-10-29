import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale';
  duration?: number;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 700,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const getInitialTransform = () => {
    switch (direction) {
      case 'up':
        return 'translate3d(0, 36px, 0)';
      case 'down':
        return 'translate3d(0, -36px, 0)';
      case 'left':
        return 'translate3d(36px, 0, 0)';
      case 'right':
        return 'translate3d(-36px, 0, 0)';
      case 'scale':
        return 'scale(0.94) translate3d(0, 20px, 0)';
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate3d(0, 0, 0) scale(1)' : getInitialTransform(),
        filter: isVisible ? 'blur(0px)' : 'blur(6px)',
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, filter ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: 'opacity, transform, filter',
      }}
    >
      {children}
    </div>
  );
};

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  enableTilt?: boolean;
  onClick?: () => void;
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = '',
  spotlightColor = 'rgba(56, 189, 248, 0.16)',
  enableTilt = false,
  onClick,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });

    if (enableTilt) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const ry = ((x - centerX) / centerX) * 4.5;
      const rx = -((y - centerY) / centerY) * 4.5;
      setTilt({ rx, ry });
    }
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
    if (enableTilt) {
      setTilt({ rx: 0, ry: 0 });
    }
  };

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: enableTilt
          ? `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`
          : undefined,
        transition: opacity
          ? 'transform 120ms ease-out'
          : 'transform 500ms cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Dynamic Radial Mouse Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px z-0 transition-opacity duration-500 rounded-[inherit]"
        style={{
          opacity,
          background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, ${spotlightColor}, transparent 45%)`,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};

export const SectionHorizon: React.FC<{ accent?: 'blue' | 'cyan' | 'purple' | 'emerald' }> = ({
  accent = 'cyan',
}) => {
  const gradientMap = {
    blue: 'from-transparent via-blue-500/50 to-transparent',
    cyan: 'from-transparent via-cyan-400/50 to-transparent',
    purple: 'from-transparent via-purple-500/50 to-transparent',
    emerald: 'from-transparent via-emerald-400/50 to-transparent',
  };

  return (
    <div className="relative w-full h-px overflow-hidden">
      <div className="absolute inset-0 bg-slate-900/90" />
      <div
        className={`absolute inset-0 bg-gradient-to-r ${gradientMap[accent]} opacity-70`}
      />
    </div>
  );
};
