import React from 'react';
import { Sparkles, Eye, Compass, Feather, Check, X as XIcon } from 'lucide-react';

export const StudioPositioning: React.FC = () => {
  const differentiators = [
    {
      icon: Feather,
      title: 'Tactile Warm Minimalism',
      desc: 'We reject sterile clinical modernism. Our interiors engage the fingertips: raw Roman travertine, fluted English oak, hand-knitted bouclé, and natural lime plaster.'
    },
    {
      icon: Eye,
      title: 'Acoustic Calm as Architecture',
      desc: 'Visual beauty is hollow if a room echoes like a gallery. We engineer quiet spaces through integrated acoustic slats, heavy linen drapes, and concealed sound baffling.'
    },
    {
      icon: Compass,
      title: 'Generational Patina Over Trends',
      desc: 'No peel-and-stick veneers or disposable fast furniture. Every material is specified to mature gracefully—unlacquered brass that deepens, timber that warms with sun.'
    }
  ];

  const comparisonRows = [
    {
      dimension: 'Material Sourcing',
      conventional: 'Synthetic veneers, MDF millwork, catalog furniture',
      aura: 'Solid European hardwoods, raw travertine, bespoke artisan joinery'
    },
    {
      dimension: 'Daylight & Lighting',
      conventional: 'Harsh 4000K overhead downlights in a grid pattern',
      aura: 'Circadian 2400K–2700K concealed warm wash, glare-free architectural spots'
    },
    {
      dimension: 'Space Planning',
      conventional: 'Decorating around existing walls without flow study',
      aura: 'Rigorous architectural sightline analysis, circulation, and daylight axis'
    },
    {
      dimension: 'Acoustics',
      conventional: 'Ignored, resulting in harsh echoing open spaces',
      aura: 'Integrated micro-perforated wood and fabric wall acoustic dampening'
    }
  ];

  return (
    <section id="studio" className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10">
      {/* Positioning Header */}
      <div className="max-w-3xl mb-16">
        <span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest block mb-2">
          Studio Positioning &amp; Philosophy
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
          Beyond Decoration. Architectural Calm Crafted for Daily Rituals.
        </h2>
        <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
          Most residential design is driven by fleeting internet aesthetics. Cinecore / Aura Spaces approaches interior architecture as the tactile composition of light, sound, and material weight—creating environments where time slows down.
        </p>
      </div>

      {/* 3 Core Differentiator Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {differentiators.map((diff, idx) => {
          const Icon = diff.icon;
          return (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-neutral-900/50 border border-white/10 hover:border-white/25 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-950/70 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                  {diff.title}
                </h3>
                <p className="text-xs md:text-sm text-neutral-400 leading-relaxed">
                  {diff.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Philosophy Comparison Matrix */}
      <div className="bg-neutral-900/60 rounded-3xl border border-white/10 p-6 md:p-10 overflow-hidden">
        <div className="mb-8">
          <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block mb-1">
            Comparative Standard
          </span>
          <h3 className="text-2xl font-bold text-white tracking-tight">
            How The Aura Studio Standard Differs
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs md:text-sm">
            <thead>
              <tr className="border-b border-white/10 text-neutral-400 uppercase text-[11px] tracking-wider">
                <th className="pb-4 font-semibold w-1/4">Design Dimension</th>
                <th className="pb-4 font-semibold w-3/8 text-neutral-400">Conventional Interior Decorating</th>
                <th className="pb-4 font-semibold w-3/8 text-emerald-400">The Aura Spaces Method</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {comparisonRows.map((row, idx) => (
                <tr key={idx} className="group hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 font-medium text-white">{row.dimension}</td>
                  <td className="py-4 text-neutral-400 pr-6 flex items-start gap-2">
                    <span className="text-neutral-500 mt-0.5">✕</span>
                    <span>{row.conventional}</span>
                  </td>
                  <td className="py-4 text-neutral-200 font-medium">
                    <div className="flex items-start gap-2 text-emerald-300">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{row.aura}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
