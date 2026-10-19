import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onContactClick }) => {
  return (
    <section className="relative w-full min-h-[92vh] lg:min-h-[96vh] flex items-center justify-center p-3 sm:p-5 md:p-6 lg:p-8">
      {/* Outer rounded card frame matching reference image */}
      <div className="relative w-full h-full min-h-[86vh] lg:min-h-[90vh] rounded-[24px] sm:rounded-[32px] md:rounded-[40px] overflow-hidden flex flex-col justify-between shadow-2xl border border-white/10">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/hero_olive_living_room_1792337181639.webp"
            alt="Cinecore Interior Design modern olive living room with sectional sofa and botanical art"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center transform scale-100 transition-transform duration-1000 ease-out animate-luxe-hero-bg"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            width="1920"
            height="1080"
          />
          {/* Measured gradient scrims for pristine legibility while preserving the rich interior colors */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/50" />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Top spacer so header content has breath */}
        <div className="pt-28 md:pt-32" />

        {/* Centered Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center justify-center my-auto">
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold text-white tracking-tight leading-[1.12] sm:leading-[1.15] text-balance mb-4 md:mb-5 drop-shadow-sm font-sans animate-luxe-rise-1">
            Crafting Timeless Interiors With Modern Elegance
          </h1>

          {/* Subheadline */}
          <p className="text-sm sm:text-base md:text-lg text-white/90 font-normal max-w-2xl leading-relaxed text-balance mb-8 md:mb-10 drop-shadow animate-luxe-rise-2">
            Blending Contemporary Style With Classic Comfort. We Create Spaces That Inspire And Endure.
          </p>

          {/* Center Explore More CTA */}
          <button
            type="button"
            onClick={onExploreClick}
            className="group inline-flex items-center gap-3.5 bg-white text-neutral-900 font-medium text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 rounded-full shadow-xl hover:shadow-2xl hover:bg-neutral-50 transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-white/40 animate-luxe-rise-3"
            aria-label="Explore More interior projects"
          >
            <span>Explore More</span>
            <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-neutral-950 text-white flex items-center justify-center transition-transform duration-200 group-hover:rotate-45">
              <ArrowUpRight className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
            </span>
          </button>
        </div>

        {/* Bottom Bar Area with Floating "Contact Us ↗" Button */}
        <div className="relative z-10 w-full px-6 sm:px-10 pb-6 sm:pb-8 flex items-center justify-between">
          {/* Left subtle indicator */}
          <div className="hidden sm:flex items-center gap-2 text-xs text-white/60 tracking-wider uppercase font-medium">
            <span>Residential & Hospitality</span>
            <span aria-hidden="true">·</span>
            <span>Est. 2018</span>
          </div>

          {/* Right Floating "Contact Us ↗" Pill Button */}
          <div className="ml-auto">
            <button
              type="button"
              onClick={onContactClick}
              className="group inline-flex items-center gap-2.5 bg-neutral-950/70 hover:bg-neutral-950/90 text-white border border-white/20 text-xs sm:text-sm font-medium px-5 sm:px-6 py-2.5 sm:py-3 rounded-full backdrop-blur-md shadow-lg transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              aria-label="Contact Us for design consultation"
            >
              <span>Contact Us</span>
              <ArrowUpRight className="w-4 h-4 text-white/90 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
