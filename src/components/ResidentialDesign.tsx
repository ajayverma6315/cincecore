import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Clock, Maximize, Home } from 'lucide-react';
import { RESIDENTIAL_TYPOLOGIES, ResidentialTypology } from '../utils/projects';

interface ResidentialDesignProps {
  onSelectBhkConsult: (bhkTag: string) => void;
}

export const ResidentialDesign: React.FC<ResidentialDesignProps> = ({
  onSelectBhkConsult,
}) => {
  const [selectedBhkId, setSelectedBhkId] = useState<'2bhk' | '3bhk' | '4bhk' | 'estate'>('3bhk');

  const currentTypology: ResidentialTypology =
    RESIDENTIAL_TYPOLOGIES.find((t) => t.id === selectedBhkId) || RESIDENTIAL_TYPOLOGIES[1];

  return (
    <section id="services" className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10 gap-6">
        <div>
          <div className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
            <Home className="w-3.5 h-3.5" />
            <span>Residential Architecture &amp; Interiors</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Tailored Home Typologies
          </h2>
        </div>
        <p className="text-sm md:text-base text-neutral-400 max-w-md leading-relaxed">
          From compact luxury apartments to sweeping multi-level residences, we tailor our spatial
          discipline and materials to the specific footprint of your home.
        </p>
      </div>

      {/* BHK Switcher Navigation Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
        {RESIDENTIAL_TYPOLOGIES.map((typology) => {
          const isActive = typology.id === selectedBhkId;
          return (
            <button
              key={typology.id}
              onClick={() => setSelectedBhkId(typology.id)}
              className={`px-5 py-3 rounded-2xl text-xs md:text-sm font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer border ${
                isActive
                  ? 'bg-white text-neutral-950 border-white shadow-xl scale-[1.02]'
                  : 'bg-neutral-900/60 text-neutral-400 hover:text-white border-white/10 hover:border-white/20'
              }`}
            >
              {typology.tag}
            </button>
          );
        })}
      </div>

      {/* Active BHK Detail Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left: Large Visual Photo */}
        <div className="lg:col-span-7 rounded-3xl overflow-hidden relative min-h-[380px] lg:min-h-[520px] bg-neutral-950 border border-white/10">
          <img
            src={currentTypology.image}
            alt={currentTypology.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

          {/* Overlay details */}
          <div className="absolute bottom-6 left-6 right-6">
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest block mb-1">
              {currentTypology.typicalArea} &middot; {currentTypology.avgTimeline}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              {currentTypology.name}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 line-clamp-2 max-w-xl">
              {currentTypology.overview}
            </p>
          </div>
        </div>

        {/* Right: Specifications & Room Breakdown */}
        <div className="lg:col-span-5 bg-neutral-900/50 border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
          <div className="space-y-6">
            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/5 text-xs">
              <div>
                <span className="text-neutral-400 block text-[11px] uppercase tracking-wider mb-0.5">
                  Footprint Scale
                </span>
                <span className="text-white font-semibold tabular-nums">
                  {currentTypology.typicalArea}
                </span>
              </div>
              <div>
                <span className="text-neutral-400 block text-[11px] uppercase tracking-wider mb-0.5">
                  Execution Window
                </span>
                <span className="text-white font-semibold">
                  {currentTypology.avgTimeline}
                </span>
              </div>
            </div>

            {/* Suited For */}
            <div>
              <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold block mb-1">
                Ideal Typology For
              </span>
              <p className="text-xs sm:text-sm text-neutral-300">
                {currentTypology.suitedFor}
              </p>
            </div>

            {/* Key Inclusions */}
            <div>
              <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold block mb-2">
                Curated Room Architecture
              </span>
              <div className="space-y-2">
                {currentTypology.roomBreakdown.map((item, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-neutral-950/40 border border-white/5 text-xs flex flex-col"
                  >
                    <span className="font-semibold text-white mb-0.5">{item.room}</span>
                    <span className="text-neutral-400 text-[11px] leading-relaxed">
                      {item.spec}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Consultation button for this BHK */}
          <div className="pt-6 mt-6 border-t border-white/10">
            <button
              onClick={() => onSelectBhkConsult(currentTypology.tag)}
              className="w-full py-3.5 bg-white hover:bg-neutral-100 text-neutral-950 font-semibold rounded-full text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xl transition-all cursor-pointer"
            >
              <span>Consult For This {currentTypology.tag}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
