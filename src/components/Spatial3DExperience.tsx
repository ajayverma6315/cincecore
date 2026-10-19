import React, { useState, useRef, useEffect, useCallback, MouseEvent, TouchEvent } from 'react';
import { RotateCcw, Sun, Moon, Sunset, Layers, Grid3X3, Sparkles, Compass } from 'lucide-react';

type LightingPreset = 'dawn' | 'afternoon' | 'nocturne';
type DisplayMode = 'all' | 'grid' | 'materials';

export const Spatial3DExperience: React.FC = () => {
  const [pitch, setPitch] = useState<number>(0.0);
  const [yaw, setYaw] = useState<number>(0.0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number } | null>(null);
  const [activeLighting, setActiveLighting] = useState<LightingPreset>('afternoon');
  const [activeMode, setActiveMode] = useState<DisplayMode>('all');
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);

  // Check reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Mouse move handler for subtle 2.5D tilt
  const handleMouseMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const relY = (e.clientY - rect.top) / rect.height - 0.5; // -0.5 to 0.5

    // Restrained perspective angles (-6 deg to +6 deg)
    const newYaw = Number((relX * 12).toFixed(1));
    const newPitch = Number((-relY * 8).toFixed(1));

    setYaw(newYaw);
    setPitch(newPitch);
  }, [prefersReducedMotion]);

  // Touch drag handlers for tablet/mobile
  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) return;
    setIsDragging(true);
    const touch = e.touches[0];
    setDragStart({ x: touch.clientX, y: touch.clientY });
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (!isDragging || !dragStart || !containerRef.current || prefersReducedMotion) return;
    const touch = e.touches[0];
    const dx = touch.clientX - dragStart.x;
    const dy = touch.clientY - dragStart.y;
    const rect = containerRef.current.getBoundingClientRect();

    const newYaw = Math.max(-8, Math.min(8, Number(((dx / rect.width) * 16).toFixed(1))));
    const newPitch = Math.max(-6, Math.min(6, Number(((-dy / rect.height) * 12).toFixed(1))));

    setYaw(newYaw);
    setPitch(newPitch);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setDragStart(null);
  };

  const handleMouseLeave = () => {
    if (!prefersReducedMotion) {
      setPitch(0.0);
      setYaw(0.0);
    }
  };

  // Keyboard navigation for accessibility
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) return;
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setYaw((prev) => Math.max(-8, Number((prev - 1.5).toFixed(1))));
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      setYaw((prev) => Math.min(8, Number((prev + 1.5).toFixed(1))));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setPitch((prev) => Math.min(6, Number((prev + 1.5).toFixed(1))));
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setPitch((prev) => Math.max(-6, Number((prev - 1.5).toFixed(1))));
    }
  };

  const handleReset = () => {
    setPitch(0.0);
    setYaw(0.0);
    setActiveLighting('afternoon');
    setActiveMode('all');
  };

  const lightingData: Record<LightingPreset, { label: string; activeSceneText: string; overlayClass: string; icon: typeof Sun }> = {
    dawn: {
      label: 'Dawn',
      activeSceneText: 'Golden Dawn (2800K)',
      overlayClass: 'bg-amber-950/25 mix-blend-color backdrop-brightness-95 backdrop-contrast-105',
      icon: Sunset,
    },
    afternoon: {
      label: 'Afternoon',
      activeSceneText: 'Solar Daylight (4200K)',
      overlayClass: 'bg-[#9DB79A]/10 mix-blend-soft-light backdrop-brightness-100',
      icon: Sun,
    },
    nocturne: {
      label: 'Nocturne',
      activeSceneText: 'Intimate Nocturne (2200K)',
      overlayClass: 'bg-[#171B18]/60 mix-blend-multiply backdrop-brightness-75 backdrop-contrast-120',
      icon: Moon,
    },
  };

  const materialsData = [
    { title: 'Roman Navona Travertine', subtitle: 'Honed waterfall plinth & hearth', top: '70%', left: '32%' },
    { title: 'Smoked French Oak Boiserie', subtitle: 'Acoustic fluted wall panelling', top: '35%', left: '22%' },
    { title: 'Bouclé Wool Seating Core', subtitle: 'High-density down conversational lounge', top: '65%', left: '60%' },
    { title: 'Brushed Antique Brass', subtitle: 'Pendant armatures & shadow reveals', top: '22%', left: '72%' },
  ];

  return (
    <section 
      id="spatial-study"
      aria-label="Spatial Depth and Proportions Interactive Study"
      className="w-full bg-[#FFFFFF] text-[#222722] py-20 sm:py-28 md:py-32 px-6 md:px-12 lg:px-16 border-t border-[#E5E5E0] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Two-column Header Layout */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 pb-8 border-b border-[#E5E5E0]">
          <div className="space-y-3">
            {/* Eyebrows */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-[#4B5549] font-body">
              <span>INTERACTIVE SPATIAL STUDY</span>
              <span className="text-neutral-400">&middot;</span>
              <span>2.5D VOLUMETRIC PROJECTION</span>
            </div>

            {/* Section Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#222722] font-heading uppercase">
              Spatial Depth &amp; Proportions
            </h2>
          </div>

          {/* Supporting Text */}
          <div className="lg:max-w-md">
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-body">
              Interact with the volume below to observe architectural sightlines, daylight penetration, and layered French boiserie.
            </p>
          </div>
        </div>

        {/* Compact Interactive Control Toolbar */}
        <div className="mt-8 mb-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            {/* 1. Lighting Presets */}
            <div 
              role="group" 
              aria-label="Lighting presets" 
              className="inline-flex items-center gap-1 p-1 bg-[#F5F4EE] rounded-full border border-[#E5E5E0] shadow-xs"
            >
              {(['dawn', 'afternoon', 'nocturne'] as const).map((key) => {
                const isSelected = activeLighting === key;
                const Icon = lightingData[key].icon;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setActiveLighting(key)}
                    className={`inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-medium font-body transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 ${
                      isSelected
                        ? 'bg-[#171B18] text-[#F5F4EE] shadow-md font-semibold'
                        : 'text-neutral-600 hover:text-neutral-900'
                    }`}
                    aria-pressed={isSelected}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-[#9DB79A]' : 'text-neutral-500'}`} />
                    <span>{lightingData[key].label}</span>
                  </button>
                );
              })}
            </div>

            {/* 2. Display Modes */}
            <div 
              role="group" 
              aria-label="Display modes" 
              className="inline-flex items-center gap-1 p-1 bg-[#F5F4EE] rounded-full border border-[#E5E5E0] shadow-xs"
            >
              <button
                type="button"
                onClick={() => setActiveMode('all')}
                className={`inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-medium font-body transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 ${
                  activeMode === 'all'
                    ? 'bg-[#171B18] text-[#F5F4EE] shadow-md font-semibold'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
                aria-pressed={activeMode === 'all'}
              >
                <Layers className={`w-3.5 h-3.5 ${activeMode === 'all' ? 'text-[#9DB79A]' : 'text-neutral-500'}`} />
                <span>All Layers</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveMode('grid')}
                className={`inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-medium font-body transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 ${
                  activeMode === 'grid'
                    ? 'bg-[#171B18] text-[#F5F4EE] shadow-md font-semibold'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
                aria-pressed={activeMode === 'grid'}
              >
                <Grid3X3 className={`w-3.5 h-3.5 ${activeMode === 'grid' ? 'text-[#9DB79A]' : 'text-neutral-500'}`} />
                <span>Volumetric Grid</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveMode('materials')}
                className={`inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-medium font-body transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 ${
                  activeMode === 'materials'
                    ? 'bg-[#171B18] text-[#F5F4EE] shadow-md font-semibold'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
                aria-pressed={activeMode === 'materials'}
              >
                <Sparkles className={`w-3.5 h-3.5 ${activeMode === 'materials' ? 'text-[#9DB79A]' : 'text-neutral-500'}`} />
                <span>Material Skin</span>
              </button>
            </div>
          </div>

          {/* 3. Reset View */}
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium font-body bg-[#F5F4EE] border border-[#E5E5E0] text-neutral-700 hover:text-neutral-900 hover:border-neutral-400 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 shadow-xs"
          >
            <RotateCcw className="w-3.5 h-3.5 text-[#4B5549]" />
            <span>Reset View</span>
          </button>
        </div>

        {/* Architectural Viewport */}
        <div
          ref={containerRef}
          tabIndex={0}
          role="region"
          aria-label="2.5D Volumetric Architectural Viewport. Use arrow keys to inspect perspective or move pointer."
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onKeyDown={handleKeyDown}
          style={{ perspective: prefersReducedMotion ? 'none' : '1200px' }}
          className="relative w-full min-h-[380px] sm:min-h-[460px] md:min-h-[520px] aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/9] max-h-[640px] rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-300 shadow-2xl cursor-crosshair select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
        >
          {/* Main Visual Asset: Layered 2.5D Interior Photograph */}
          <div
            style={{
              transform: prefersReducedMotion
                ? 'none'
                : `translate3d(${yaw * -0.6}px, ${pitch * 0.6}px, -15px) rotateX(${pitch * 0.35}deg) rotateY(${yaw * 0.35}deg)`,
              transition: isDragging ? 'none' : 'transform 0.2s cubic-bezier(0.2, 0, 0, 1)'
            }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src="/src/assets/images/hero_olive_living_room_1792337181639.webp"
              alt="Cinecore architectural study - The Olive Botanical Salon"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-[center_30%] sm:object-center scale-[1.04]"
              loading="eager"
              decoding="async"
            />
          </div>

          {/* Dynamic Lighting Preset Overlay */}
          <div
            className={`absolute inset-0 pointer-events-none transition-all duration-700 ${lightingData[activeLighting].overlayClass}`}
          />

          {/* Mode 1: Volumetric Grid Overlay */}
          {activeMode === 'grid' && (
            <div className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-300">
              {/* Perspective grid lines */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#9DB79A_1px,transparent_1px),linear-gradient(to_bottom,#9DB79A_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] opacity-35 mix-blend-overlay" />
              
              {/* Architectural dimension callouts */}
              <div className="absolute top-1/4 left-6 sm:left-10 flex items-center gap-2 text-[10px] font-mono text-[#9DB79A] bg-black/60 px-2 py-1 rounded backdrop-blur">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9DB79A]" />
                <span>CEILING HEIGHT: 3.40m CLEAR</span>
              </div>
              <div className="absolute bottom-1/3 right-6 sm:right-12 flex items-center gap-2 text-[10px] font-mono text-[#9DB79A] bg-black/60 px-2 py-1 rounded backdrop-blur">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9DB79A]" />
                <span>CONVERSATIONAL CORE: &Oslash; 4.80m</span>
              </div>
              {/* Sightline ray indicator */}
              <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#9DB79A]/40 to-transparent" />
              <div className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-[#9DB79A]/30 to-transparent" />
            </div>
          )}

          {/* Mode 2: Material Skin Inspection Badges */}
          {activeMode === 'materials' && (
            <div className="absolute inset-0 pointer-events-none z-10">
              {materialsData.map((mat, i) => (
                <div
                  key={mat.title}
                  style={{ top: mat.top, left: mat.left }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
                >
                  <div className="group relative">
                    <div className="w-6 h-6 rounded-full bg-white/90 border border-neutral-800 flex items-center justify-center cursor-pointer shadow-lg hover:scale-110 transition-transform">
                      <span className="w-2 h-2 rounded-full bg-[#171B18] animate-ping" />
                      <span className="absolute w-2 h-2 rounded-full bg-[#171B18]" />
                    </div>
                    {/* Tooltip Card */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 sm:w-56 p-2.5 rounded-xl bg-white/95 backdrop-blur-md border border-neutral-200 shadow-xl opacity-90 group-hover:opacity-100 transition-opacity">
                      <span className="text-[9px] uppercase tracking-wider font-semibold text-[#4B5549] block font-body">
                        Material Spec 0{i + 1}
                      </span>
                      <h4 className="text-xs font-bold text-[#171B18] font-heading">
                        {mat.title}
                      </h4>
                      <p className="text-[10px] text-neutral-600 font-body mt-0.5">
                        {mat.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Floating Information Labels (Layer 2 Parallax) */}
          <div
            style={{
              transform: prefersReducedMotion
                ? 'none'
                : `translate3d(${yaw * 1.0}px, ${pitch * -1.0}px, 20px)`,
              transition: isDragging ? 'none' : 'transform 0.2s cubic-bezier(0.2, 0, 0, 1)'
            }}
            className="absolute inset-0 pointer-events-none p-3.5 sm:p-6 md:p-8 flex flex-col justify-between z-20"
          >
            {/* Top HUD Data Bar */}
            <div className="flex items-center justify-between gap-2 text-xs font-mono">
              {/* Spatial Model Label */}
              <div className="bg-white/95 backdrop-blur-md px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full border border-black/10 text-neutral-900 flex items-center gap-1.5 shadow-lg text-[10px] sm:text-xs font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#171B18] animate-pulse" />
                <span className="tracking-wider">THE OLIVE SALON</span>
              </div>

              {/* Pitch / Yaw / Focal Depth */}
              <div className="flex items-center gap-2 sm:gap-3 bg-white/95 backdrop-blur-md px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full border border-black/10 text-neutral-800 shadow-lg text-[10px] sm:text-xs font-medium">
                <span className="hidden sm:inline">PITCH: {pitch.toFixed(1)}&deg; / YAW: {yaw.toFixed(1)}&deg; / </span>
                <span className="text-[#4B5549] font-bold">DEPTH: 3.2m</span>
              </div>
            </div>

            {/* Bottom Floating Info Area */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mt-auto">
              {/* Desktop-Only In-Viewport Instruction Card (preventing mobile room obstruction) */}
              <div className="hidden sm:block bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border border-black/10 max-w-md shadow-2xl">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] uppercase tracking-widest font-semibold text-[#4B5549] font-body">
                    Architectural Coordinate
                  </span>
                  <span className="text-[9px] font-mono text-neutral-500">X: 104.2 / Y: 88.0</span>
                </div>
                <p className="text-xs sm:text-[13px] text-neutral-800 leading-relaxed font-body">
                  Move the cursor or drag across the frame to inspect the relationship between the window casement and the conversational seating core.
                </p>
              </div>

              {/* Active Scene Indicator (Sleek and compact so room stays visible) */}
              <div className="self-end sm:self-end bg-white/95 backdrop-blur-md px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-lg sm:rounded-xl border border-black/10 text-[10px] sm:text-xs font-mono text-neutral-900 shadow-xl flex items-center gap-1.5 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#171B18]" />
                <span>ACTIVE SCENE: {lightingData[activeLighting].activeSceneText}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile-Only Instruction Card: Rendered outside viewport so background room is 100% visible on mobile */}
        <div className="sm:hidden mt-3 p-3.5 rounded-xl bg-[#F5F4EE] border border-[#E5E5E0] text-xs text-[#222722] flex items-center gap-3 shadow-xs">
          <div className="p-1.5 rounded-lg bg-white border border-neutral-200 text-neutral-900 shrink-0 shadow-xs">
            <Compass className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <span className="text-[10px] uppercase font-mono tracking-wider text-[#4B5549] font-semibold block mb-0.5">
              Interactive 2.5D Viewport
            </span>
            <p className="text-xs text-neutral-600 leading-relaxed font-body">
              Drag across the frame to inspect architectural sightlines between the window casement and conversational seating core.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
