import React, { useEffect, useState, useRef } from 'react';

export const LuxuryCursor: React.FC = () => {
  const [enabled, setEnabled] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  const pos = useRef({ x: -100, y: -100 });
  const target = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Only enable on desktop devices with fine pointer (mouse)
    const hasPointer = window.matchMedia('(pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!hasPointer || reducedMotion) return;

    setEnabled(true);

    const onMouseMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    // Check if hovering interactive element
    const onMouseOver = (e: MouseEvent) => {
      const targetEl = e.target as HTMLElement | null;
      if (!targetEl) return;
      const isInteractive = targetEl.closest('button, a, input, select, textarea, [role="button"], .cursor-pointer');
      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('mouseover', onMouseOver, { passive: true });

    // Smooth lerp RAF loop matching luxe-heroconcept smooth dampening
    let rafId: number;
    const updateCursor = () => {
      // Linear interpolation (speed = 0.18 for silky luxury response)
      pos.current.x += (target.current.x - pos.current.x) * 0.18;
      pos.current.y += (target.current.y - pos.current.y) * 0.18;

      if (cursorRef.current && dotRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
        dotRef.current.style.transform = `translate3d(${target.current.x}px, ${target.current.y}px, 0)`;
      }

      rafId = requestAnimationFrame(updateCursor);
    };

    rafId = requestAnimationFrame(updateCursor);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(rafId);
    };
  }, [isVisible]);

  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 pointer-events-none z-[9999] transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Outer Smooth Following Ring in Cinecore Sage/Olive Palette */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 -ml-4 -mt-4 rounded-full border pointer-events-none transition-all duration-300 ease-out ${
          isHovered
            ? 'w-12 h-12 -ml-6 -mt-6 border-[#9DB79A] bg-[#9DB79A]/15 backdrop-blur-[1px] scale-110'
            : 'w-8 h-8 border-[#9DB79A]/60 bg-transparent'
        }`}
      />

      {/* Center Precise Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 -ml-1 -mt-1 w-2 h-2 rounded-full pointer-events-none transition-colors duration-200 ${
          isHovered ? 'bg-[#F5F4EE]' : 'bg-[#9DB79A]'
        }`}
      />
    </div>
  );
};
