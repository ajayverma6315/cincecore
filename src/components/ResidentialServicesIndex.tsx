import React from 'react';
import { ArrowUpRight, ArrowRight, Sparkles } from 'lucide-react';
import { RESIDENTIAL_SERVICES, ResidentialService } from '../data/servicesData';

interface ResidentialServicesIndexProps {
  onSelectService: (service: ResidentialService) => void;
}

export const ResidentialServicesIndex: React.FC<ResidentialServicesIndexProps> = ({
  onSelectService,
}) => {
  // First 4 core BHK typologies: 1 BHK, 2 BHK, 3 BHK, 4 BHK
  const coreBhkServices = RESIDENTIAL_SERVICES.slice(0, 4);
  const luxuryEstates = RESIDENTIAL_SERVICES.slice(4);

  return (
    <section id="services" className="bg-[#171B18] text-[#F5F4EE] py-20 sm:py-24 md:py-28 px-4 sm:px-6 md:px-8 lg:px-12 border-t border-[#222722]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-[#222722] gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-heading">
              Interior Design by BHK Size
            </h2>
            <p className="text-sm sm:text-base text-[#B7B9AF] mt-3 leading-relaxed font-body">
              Each residential typology follows a dedicated architectural methodology calibrated to footprint, daylight transit, and bespoke domestic rituals.
            </p>
          </div>
          <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-[#9DB79A] shrink-0">
            <Sparkles className="w-3.5 h-3.5" />
            <span>STANDARDIZED ARCHITECTURAL CODES</span>
          </div>
        </div>

        {/* 4-Column Balanced Grid: 1 BHK, 2 BHK, 3 BHK, 4 BHK */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {coreBhkServices.map((service, idx) => (
            <div
              key={service.slug}
              onClick={() => onSelectService(service)}
              className="group flex flex-col justify-between h-full bg-[#222722] hover:bg-[#282f28] rounded-3xl border border-white/10 hover:border-[#9DB79A]/40 p-5 sm:p-6 transition-all duration-300 shadow-xl hover:shadow-2xl cursor-pointer"
            >
              <div>
                {/* Standardized Aspect Ratio Image Container */}
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-[#171B18] mb-5 shadow-inner">
                  <img
                    src={service.image}
                    alt={service.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-3 left-3 bg-[#171B18]/85 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/15 text-[11px] font-mono font-bold text-[#9DB79A] flex items-center gap-1.5 shadow-md">
                    <span>0{idx + 1}</span>
                    <span className="text-white/40">&middot;</span>
                    <span className="text-white">{service.shortTag}</span>
                  </div>
                </div>

                {/* Footprint & Timeline */}
                <div className="text-[11px] font-mono text-[#9DB79A] font-semibold mb-2">
                  {service.areaRange} &middot; {service.timeline}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#9DB79A] transition-colors font-heading mb-2 line-clamp-1">
                  {service.name.replace(' Interior Architecture', '')}
                </h3>

                {/* Tagline */}
                <p className="text-xs text-[#E5E2D9] font-editorial italic mb-3 line-clamp-1">
                  &ldquo;{service.tagline}&rdquo;
                </p>

                {/* Aligned Description */}
                <p className="text-xs text-[#B7B9AF] leading-relaxed line-clamp-3 mb-6 font-body">
                  {service.description}
                </p>
              </div>

              {/* Standardized Bottom-Aligned CTA */}
              <div className="pt-4 border-t border-white/10">
                <div className="w-full py-2.5 px-4 rounded-full bg-white/10 group-hover:bg-[#9DB79A] text-white group-hover:text-[#171B18] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all font-heading shadow-sm">
                  <span>Explore Typology</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Luxury Penthouse & Multi-Level Estate Callout */}
        {luxuryEstates.length > 0 && (
          <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-[#1D221E] border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-widest text-[#9DB79A] font-semibold">
                COMMISSIONING MULTI-LEVEL RESIDENCES?
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-white font-heading">
                Penthouse Suites, Duplexes &amp; Heritage Estates
              </h4>
              <p className="text-xs sm:text-sm text-[#B7B9AF] max-w-xl font-body">
                Custom architectural interventions for properties exceeding 3,000 sq ft requiring structural modifications, mezzanine insertions, or historic conservation.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => onSelectService(luxuryEstates[0])}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#171B18] hover:bg-[#9DB79A] font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer font-heading"
              >
                <span>View Penthouse Typology</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
