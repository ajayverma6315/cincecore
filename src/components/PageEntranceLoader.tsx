import React, { useState, useEffect } from 'react';

interface PageEntranceLoaderProps {
  onComplete?: () => void;
}

export const PageEntranceLoader: React.FC<PageEntranceLoaderProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'intro' | 'reveal' | 'exit' | 'complete'>('intro');
  const [progress, setProgress] = useState<number>(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);

  useEffect(() => {
    // Check reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setPrefersReducedMotion(true);
      setPhase('complete');
      onComplete?.();
      return;
    }

    // Lock body scroll during initial reveal
    document.body.style.overflow = 'hidden';

    // Sequence timing matching luxe-heroconcept:
    // 1. Start progress counter
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 5;
      });
    }, 45);

    // 2. Trigger text slide-up into view
    const t1 = setTimeout(() => {
      setPhase('reveal');
    }, 120);

    // 3. Trigger curtain wipe exit
    const t2 = setTimeout(() => {
      setPhase('exit');
    }, 1450);

    // 4. Complete and unmount
    const t3 = setTimeout(() => {
      setPhase('complete');
      document.body.style.overflow = '';
      onComplete?.();
    }, 2250);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  // Handle immediate skip on click or keypress
  const handleSkip = () => {
    setPhase('complete');
    document.body.style.overflow = '';
    onComplete?.();
  };

  if (phase === 'complete') return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Cinecore architectural entrance loading experience"
      onClick={handleSkip}
      className={`fixed inset-0 z-[100] flex flex-col justify-between p-6 sm:p-10 select-none cursor-pointer transition-transform duration-[850ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
        phase === 'exit' ? '-translate-y-full' : 'translate-y-0'
      }`}
      style={{
        backgroundColor: '#171B18',
      }}
    >
      {/* Background Architectural Grid Lines (Subtle luxe atmosphere) */}
      <div 
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.06] bg-[linear-gradient(to_right,#9DB79A_1px,transparent_1px),linear-gradient(to_bottom,#9DB79A_1px,transparent_1px)] bg-[size:4rem_4rem]" 
      />

      {/* Top Bar: Studio Brand Coordinates */}
      <div className="relative z-10 flex items-center justify-between text-[11px] sm:text-xs font-mono text-[#9DB79A] tracking-widest uppercase">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#9DB79A] animate-ping" />
          <span>PARIS &middot; LONDON ATELIERS</span>
        </div>
        <div className="flex items-center gap-4 text-[#B7B9AF]">
          <span className="hidden sm:inline">2.5D SPATIAL CALIBRATION</span>
          <span className="text-[10px] text-[#9DB79A]/80 border border-[#4B5549]/60 px-2 py-0.5 rounded-full hover:border-[#9DB79A] transition-colors">
            CLICK TO ENTER &rarr;
          </span>
        </div>
      </div>

      {/* Center: Masked Typographic Logo Reveal matching luxe-heroconcept */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center">
        {/* Overflow clip mask */}
        <div className="overflow-hidden py-2 px-4">
          <h1
            className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-[-0.03em] sm:tracking-[-0.02em] text-[#F5F4EE] font-heading uppercase transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
              phase === 'intro'
                ? 'translate-y-full opacity-0'
                : phase === 'reveal'
                ? 'translate-y-0 opacity-100'
                : '-translate-y-12 opacity-0'
            }`}
          >
            CINECORE
          </h1>
        </div>

        {/* Editorial Subtitle with Cormorant Garamond italic flair */}
        <div className="overflow-hidden mt-1 sm:mt-2">
          <p
            className={`text-base sm:text-xl md:text-2xl font-editorial italic text-[#9DB79A] tracking-wide transition-all duration-[900ms] delay-100 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              phase === 'intro'
                ? 'translate-y-full opacity-0'
                : phase === 'reveal'
                ? 'translate-y-0 opacity-100'
                : '-translate-y-8 opacity-0'
            }`}
          >
            Interior Architecture &middot; Contemporary European Luxury
          </p>
        </div>

        {/* Expanding Accent Divider */}
        <div className="w-32 sm:w-48 h-[1px] bg-[#4B5549] mt-6 overflow-hidden relative">
          <div
            className={`absolute inset-0 bg-[#9DB79A] transition-all duration-700 ease-out origin-left ${
              phase === 'intro' ? 'scale-x-0' : 'scale-x-100'
            }`}
          />
        </div>
      </div>

      {/* Bottom Bar: Loading Index & Architectural Citation */}
      <div className="relative z-10 flex items-end justify-between text-xs font-mono">
        <div className="space-y-1 text-[#B7B9AF]">
          <div className="text-[10px] text-[#4B5549] uppercase tracking-wider">
            ATMOSPHERE INITIALIZATION
          </div>
          <div className="text-[11px] text-[#F5F4EE] flex items-center gap-2">
            <span>RESIDENTIAL PROPORTIONS</span>
            <span className="text-[#9DB79A]">&middot;</span>
            <span className="text-[#9DB79A]">NATURAL LIGHTING 4200K</span>
          </div>
        </div>

        {/* Counter Badge */}
        <div className="flex items-baseline gap-1 text-[#F5F4EE]">
          <span className="text-2xl sm:text-3xl font-bold font-mono tracking-tighter text-[#9DB79A]">
            {progress.toString().padStart(2, '0')}
          </span>
          <span className="text-xs text-[#B7B9AF] font-mono">%</span>
        </div>
      </div>
    </div>
  );
};
