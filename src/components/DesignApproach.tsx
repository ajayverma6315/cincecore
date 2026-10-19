import React from 'react';
import { Compass, Layers, SunMedium, Hammer } from 'lucide-react';

export const DesignApproach: React.FC = () => {
  const pillars = [
    {
      step: '01',
      icon: Compass,
      title: 'Planning & Spatial Flow',
      subtitle: 'Sightlines, circulation, and micro-climates',
      desc: 'We never plan furniture against static walls without studying natural transit paths. Every room layout is engineered with breathing room, intuitive furniture groupings, and uncompromised focal sightlines.',
      details: ['Sun azimuth & natural light orientation mapping', 'Acoustic zoning between social & private quarters', 'Human-scale ergonomics for seating & dining']
    },
    {
      step: '02',
      icon: Layers,
      title: 'Honest Tactile Materials',
      subtitle: 'Living stones, hardwoods, and organic weaves',
      desc: 'Synthetic finishes fatigue the senses. We specify Roman Navona travertine, unsealed white and smoked oak, French flax linen, and aged patinated brass that grow richer through human touch.',
      details: ['100% natural FSC-certified sustainably harvested timber', 'Low-VOC mineral lime washes and breathable plasters', 'Hand-knitted pure wool and jute textile layers']
    },
    {
      step: '03',
      icon: SunMedium,
      title: 'Architectural Lighting',
      subtitle: 'Circadian rhythm & shadow composition',
      desc: 'Lighting is not an afterthought of fixtures on a ceiling—it is how form reveals itself. We layer daylight harvesting with discreet 2400K–2700K warm washes, low-glare architectural spots, and sculptural art luminaires.',
      details: ['Three distinct scene states: Dawn, Entertaining, and Nocturne', 'Deep-recessed micro spots that eliminate glare', 'Concealed warm perimeter cove washes']
    },
    {
      step: '04',
      icon: Hammer,
      title: 'Artisanal Execution',
      subtitle: 'Millimeter joinery & generational craftsmanship',
      desc: 'Flawless design requires master hands. Our dedicated European cabinetmakers, stonemasons, and metal artisans craft every bespoke element with sub-millimeter tolerances and hidden joinery.',
      details: ['Concealed flush-to-wall pocket millwork', 'Hand-turned fluting and bookmatched stone slabs', 'Turnkey site supervision by senior project architects']
    }
  ];

  return (
    <section className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10">
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest block mb-2">
          The Four Pillars
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
          Our Architectural Design Approach
        </h2>
        <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
          How an empty shell or historic residence transforms into a timeless spatial experience.
        </p>
      </div>

      {/* 4 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <div
              key={pillar.step}
              className="p-8 rounded-3xl bg-neutral-900/40 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-bold font-mono text-emerald-400/80">
                    {pillar.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-1 tracking-tight">
                  {pillar.title}
                </h3>
                <span className="text-xs text-emerald-400 font-medium block mb-3">
                  {pillar.subtitle}
                </span>

                <p className="text-xs md:text-sm text-neutral-300 leading-relaxed mb-6">
                  {pillar.desc}
                </p>

                <div className="pt-4 border-t border-white/5 space-y-2">
                  {pillar.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-neutral-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
