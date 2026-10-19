import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface AboutUsSectionProps {
  onLearnMore?: () => void;
}

export const AboutUsSection: React.FC<AboutUsSectionProps> = ({ onLearnMore }) => {
  const checkmarks = [
    'Experienced Team of Architects & Engineers',
    'Timely Delivery',
    'Transparent Processes',
    'End-to-End Project Management',
  ];

  return (
    <section 
      id="about" 
      aria-label="About Cinecore Interior Design"
      className="w-full bg-[#F5F4EE] text-[#222722] py-24 sm:py-32 md:py-36 px-6 md:px-12 lg:px-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Overlapping Architectural Image Composition from Reference */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md sm:max-w-lg lg:max-w-none">
              {/* Decorative Muted Olive Offset Backdrop Card */}
              <div 
                aria-hidden="true"
                className="absolute -top-4 -left-4 w-4/5 h-4/5 rounded-3xl sm:rounded-[32px] bg-[#4B5549]/70 -z-0 transform -rotate-1"
              />

              {/* Main Primary Photograph: Minimalist Master Bedroom Sanctuary */}
              <div className="relative z-10 aspect-[4/3] sm:aspect-[1.15/1] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-black/5 bg-[#E8E6DE]">
                <img
                  src="/src/assets/images/project_minimalist_bedroom_1792337182811.webp"
                  alt="Cinecore master suite with fluted acoustic panelling and bespoke lighting"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Secondary Overlapping Inset Card (Bottom-Right Composition) */}
              <div className="absolute -bottom-6 sm:-bottom-8 -right-3 sm:-right-6 z-20 w-3/5 sm:w-1/2 aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 border-[#F5F4EE] bg-[#E8E6DE]">
                <img
                  src="/src/assets/images/project_reading_lounge_1792337182414.webp"
                  alt="Architectural study of residential suite reading niche"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy, Checklist, and Action */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-7 lg:pl-6">
            {/* Eyebrow with underline from reference */}
            <div className="inline-block">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#222722] border-b-2 border-[#222722] pb-1 font-body">
                About Us
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#222722] leading-[1.15] font-heading">
              About Cinecore<br />
              <span className="text-[#4B5549]">Crafting Timeless Interiors</span>
            </h2>

            {/* Editorial Body Copy */}
            <p className="text-sm sm:text-base text-[#4B5549] leading-relaxed font-body">
              At <strong className="font-semibold text-[#222722]">Cinecore</strong> we don&apos;t just build &mdash; we create environments that inspire. With a legacy of excellence and architectural discipline, we offer comprehensive solutions from private residences to master estates. Whether it&apos;s your dream home, a residential salon, or large-scale private infrastructure, we deliver quality with sub-millimeter precision.
            </p>

            {/* Checklist items with circular check icons */}
            <div className="space-y-3.5 pt-2">
              {checkmarks.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#222722] text-[#F5F4EE] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#9DB79A]" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-[#222722] font-body">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Learn More Action Button matching screenshot */}
            <div className="pt-4">
              <button
                type="button"
                onClick={onLearnMore}
                className="inline-flex items-center justify-center gap-3 bg-[#4B5549] hover:bg-[#222722] text-[#F5F4EE] font-medium text-xs sm:text-sm uppercase tracking-wider px-8 py-3.5 rounded-lg shadow-md hover:shadow-xl transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-[#9DB79A]/40"
              >
                <span>LEARN MORE</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
