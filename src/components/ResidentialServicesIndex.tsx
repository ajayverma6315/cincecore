import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight, Home } from 'lucide-react';
import { RESIDENTIAL_SERVICES, ResidentialService } from '../data/servicesData';

interface ResidentialServicesIndexProps {
  onSelectService: (service: ResidentialService) => void;
}

export const ResidentialServicesIndex: React.FC<ResidentialServicesIndexProps> = ({
  onSelectService,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number>(2); // Default to 3 BHK
  const activeService = RESIDENTIAL_SERVICES[hoveredIndex] || RESIDENTIAL_SERVICES[0];

  return (
    <section id="services" className="bg-[#171B18] text-[#F5F4EE] py-24 md:py-36 px-6 md:px-12 lg:px-16 border-t border-[#222722]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#222722] gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#9DB79A] mb-2 font-body">
              <Home className="w-3.5 h-3.5" />
              <span>RESIDENTIAL SERVICES &middot; BY BHK SIZE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-heading">
              Interior Design by BHK Size
            </h2>
          </div>
          <p className="text-sm text-[#B7B9AF] max-w-md leading-relaxed font-body">
            Each residential typology follows a dedicated architectural methodology calibrated to footprint, daylighting, and domestic rituals.
          </p>
        </div>

        {/* Typographic Architectural Index Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Typographic Service List (7 cols) */}
          <div className="lg:col-span-7 divide-y divide-[#222722]">
            {RESIDENTIAL_SERVICES.map((service, idx) => {
              const isHovered = hoveredIndex === idx;
              return (
                <div
                  key={service.slug}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onClick={() => onSelectService(service)}
                  className={`py-5 sm:py-6 flex items-center justify-between group cursor-pointer transition-all duration-200 ${
                    isHovered ? 'pl-3 sm:pl-4 text-white' : 'text-[#B7B9AF] hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-4 sm:gap-6 min-w-0">
                    <span className="font-mono text-xs text-[#9DB79A] opacity-60 group-hover:opacity-100 shrink-0">
                      0{idx + 1}
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight group-hover:text-[#9DB79A] transition-colors truncate font-heading">
                          {service.name}
                        </h3>
                      </div>
                      <span className="text-xs text-[#4B5549] font-mono block mt-0.5">
                        {service.areaRange} &middot; {service.timeline}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 ml-4">
                    <span className="hidden sm:inline text-xs text-[#B7B9AF] group-hover:text-white font-medium">
                      Dedicated Page
                    </span>
                    <span className="w-8 h-8 rounded-full border border-white/10 group-hover:border-[#9DB79A] flex items-center justify-center transition-all group-hover:bg-[#9DB79A] group-hover:text-[#171B18]">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Preview Panel (5 cols) */}
          <div className="lg:col-span-5 sticky top-32">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#222722] border border-white/10 shadow-2xl space-y-6">
              {/* Photo */}
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-[#171B18] shadow-inner">
                <img
                  src={activeService.image}
                  alt={activeService.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#9DB79A] block mb-1">
                    {activeService.areaRange} &middot; {activeService.timeline}
                  </span>
                  <div className="text-sm font-bold text-white font-heading truncate">
                    {activeService.name}
                  </div>
                </div>
              </div>

              {/* Tagline & Teaser */}
              <div className="space-y-3">
                <p className="text-xs sm:text-sm text-[#F5F4EE] font-editorial italic text-balance leading-relaxed">
                  &ldquo;{activeService.tagline}&rdquo;
                </p>
                <p className="text-xs text-[#B7B9AF] leading-relaxed line-clamp-3 font-body">
                  {activeService.description}
                </p>
              </div>

              {/* Action Button to Dedicated Service Page */}
              <div className="pt-4 border-t border-white/10">
                <button
                  onClick={() => onSelectService(activeService)}
                  className="w-full py-3.5 bg-white text-[#171B18] hover:bg-[#9DB79A] font-semibold text-xs rounded-full flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg"
                >
                  <span>Open Dedicated {activeService.shortTag} Page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
