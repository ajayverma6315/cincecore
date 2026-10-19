import React from 'react';
import { 
  Building2, 
  Users, 
  Leaf, 
  Check, 
  ArrowRight
} from 'lucide-react';

interface WhyChooseUsProps {
  onConsultClick?: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onConsultClick }) => {
  return (
    <section
      id="why-choose-us"
      aria-label="Why Choose Cinecore Interior Design"
      className="w-full bg-[#171B18] text-[#F5F4EE] py-20 sm:py-24 md:py-28 px-4 sm:px-6 md:px-8 lg:px-12 border-t border-[#222722] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading, Subtitle, and 3 Structured Pillars */}
          <div className="lg:col-span-6 space-y-8 sm:space-y-10">
            {/* Eyebrow with Solid Underline matching reference */}
            <div>
              <div className="inline-block border-b-2 border-[#9DB79A] pb-1 mb-4">
                <span className="text-xs sm:text-sm font-bold tracking-wide text-[#9DB79A] uppercase font-heading">
                  Why Choose Our Studio
                </span>
              </div>
              
              {/* Main Headline */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-heading leading-[1.15]">
                Building Trust, One Project at a Time
              </h2>
            </div>

            {/* 3 Pillars List */}
            <div className="space-y-8 sm:space-y-9 pt-2">
              
              {/* Pillar 1: Unmatched Expertise */}
              <div className="flex items-start gap-4 sm:gap-5">
                {/* Dark circular badge with architectural icon */}
                <div 
                  aria-hidden="true" 
                  className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#222722] flex items-center justify-center shrink-0 shadow-md border border-white/10"
                >
                  <Building2 className="w-6 h-6 text-[#E5A93C]" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold text-white font-heading">
                    Unmatched Expertise
                  </h3>
                  <ul className="space-y-2 text-sm sm:text-[15px] text-[#B7B9AF] font-body">
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#9DB79A] shrink-0 mt-1 stroke-[2.5]" />
                      <span>360° Solutions: From home interiors to mega infrastructure</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#9DB79A] shrink-0 mt-1 stroke-[2.5]" />
                      <span>100+ Certified Professionals</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#9DB79A] shrink-0 mt-1 stroke-[2.5]" />
                      <span>ISO-Certified Processes</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Pillar 2: Client-Centric Approach */}
              <div className="flex items-start gap-4 sm:gap-5">
                {/* Dark circular badge with client / people icon */}
                <div 
                  aria-hidden="true" 
                  className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#222722] flex items-center justify-center shrink-0 shadow-md border border-white/10"
                >
                  <Users className="w-6 h-6 text-[#E5A93C]" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold text-white font-heading">
                    Client-Centric Approach
                  </h3>
                  <ul className="space-y-2 text-sm sm:text-[15px] text-[#B7B9AF] font-body">
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#9DB79A] shrink-0 mt-1 stroke-[2.5]" />
                      <span>Transparent Pricing with detailed breakdowns</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#9DB79A] shrink-0 mt-1 stroke-[2.5]" />
                      <span>Dedicated project managers</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#9DB79A] shrink-0 mt-1 stroke-[2.5]" />
                      <span>95% projects completed on/before deadline</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Pillar 3: Future-Ready Construction */}
              <div className="flex items-start gap-4 sm:gap-5">
                {/* Dark circular badge with eco-tech icon */}
                <div 
                  aria-hidden="true" 
                  className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#222722] flex items-center justify-center shrink-0 shadow-md border border-white/10"
                >
                  <Leaf className="w-6 h-6 text-[#E5A93C]" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold text-white font-heading">
                    Future-Ready Construction
                  </h3>
                  <ul className="space-y-2 text-sm sm:text-[15px] text-[#B7B9AF] font-body">
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#9DB79A] shrink-0 mt-1 stroke-[2.5]" />
                      <span>Eco-friendly sustainable materials</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#9DB79A] shrink-0 mt-1 stroke-[2.5]" />
                      <span>Smart home technology integration</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#9DB79A] shrink-0 mt-1 stroke-[2.5]" />
                      <span>BIM modeling & advanced techniques</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>

            {/* Optional Call to Action */}
            {onConsultClick && (
              <div className="pt-2">
                <button
                  type="button"
                  onClick={onConsultClick}
                  className="inline-flex items-center gap-2.5 min-h-[44px] px-7 py-3.5 rounded-full bg-[#9DB79A] text-[#171B18] hover:bg-[#8ca889] transition-all font-bold text-xs sm:text-sm tracking-wide shadow-xl cursor-pointer font-heading"
                >
                  <span>Book Architectural Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* Right Column: 2x2 Image Grid with Warm Amber Ambient Rim Glow */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-3.5 sm:gap-5">
              
              {/* Tile 1: Modern Modular Kitchen */}
              <div className="group relative aspect-[4/3] sm:aspect-square rounded-2xl overflow-hidden shadow-[0_0_24px_rgba(245,158,11,0.22)] ring-1 ring-amber-400/30 bg-[#222722] border border-white/5 transition-all duration-300 hover:shadow-[0_0_36px_rgba(245,158,11,0.38)]">
                <img
                  src="/src/assets/images/why_choose_kitchen.webp"
                  alt="Modern modular kitchen interior with yellow cabinetry and designer backsplash"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3.5">
                  <span className="text-[11px] font-mono text-[#E5A93C] font-semibold">Modular Culinary Suites</span>
                </div>
              </div>

              {/* Tile 2: Walk-in Dressing Wardrobe & Closet */}
              <div className="group relative aspect-[4/3] sm:aspect-square rounded-2xl overflow-hidden shadow-[0_0_24px_rgba(245,158,11,0.22)] ring-1 ring-amber-400/30 bg-[#222722] border border-white/5 transition-all duration-300 hover:shadow-[0_0_36px_rgba(245,158,11,0.38)]">
                <img
                  src="/src/assets/images/why_choose_wardrobe.webp"
                  alt="Custom walk-in dressing wardrobe with organized compartments and lighting"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3.5">
                  <span className="text-[11px] font-mono text-[#E5A93C] font-semibold">Bespoke Walk-in Dressing</span>
                </div>
              </div>

              {/* Tile 3: Living Room / Media Wall with TV and Cove Lighting */}
              <div className="group relative aspect-[4/3] sm:aspect-square rounded-2xl overflow-hidden shadow-[0_0_24px_rgba(245,158,11,0.22)] ring-1 ring-amber-400/30 bg-[#222722] border border-white/5 transition-all duration-300 hover:shadow-[0_0_36px_rgba(245,158,11,0.38)]">
                <img
                  src="/src/assets/images/why_choose_living_tv.webp"
                  alt="Living room media wall with polished marble cladding, TV, and perimeter warm cove lighting"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3.5">
                  <span className="text-[11px] font-mono text-[#E5A93C] font-semibold">Acoustic Media Architecture</span>
                </div>
              </div>

              {/* Tile 4: Architectural Joinery & Storage Units */}
              <div className="group relative aspect-[4/3] sm:aspect-square rounded-2xl overflow-hidden shadow-[0_0_24px_rgba(245,158,11,0.22)] ring-1 ring-amber-400/30 bg-[#222722] border border-white/5 transition-all duration-300 hover:shadow-[0_0_36px_rgba(245,158,11,0.38)]">
                <img
                  src="/src/assets/images/why_choose_joinery.webp"
                  alt="Bespoke architectural joinery with vertical handles, display niche, and curated ceramics"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3.5">
                  <span className="text-[11px] font-mono text-[#E5A93C] font-semibold">Millimeter European Joinery</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
