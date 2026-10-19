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
    <section id="process" className="bg-[#171B18] text-[#F5F4EE] py-24 md:py-36 px-6 md:px-12 lg:px-16 border-t border-[#222722]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold text-[#9DB79A] uppercase tracking-[0.2em] block mb-2 font-body">
            OUR DESIGN PROCESS &middot; 4-STAGE METHODOLOGY
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4 font-heading">
            Our Design Process
          </h2>
          <p className="text-[#B7B9AF] text-sm md:text-base leading-relaxed font-body">
            How an empty shell or historic residence transforms into an enduring spatial sanctuary through rigorous planning, authentic materials, and turnkey artisanal craftsmanship.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.step}
                className="p-8 sm:p-10 rounded-3xl bg-[#222722] border border-white/5 hover:border-[#9DB79A]/30 transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-bold font-mono text-[#9DB79A]">
                      {pillar.step}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-[#171B18] border border-white/10 flex items-center justify-center text-[#9DB79A] group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5 tracking-tight font-heading">
                    {pillar.title}
                  </h3>
                  <span className="text-xs text-[#9DB79A] font-medium block mb-4 font-body">
                    {pillar.subtitle}
                  </span>

                  <p className="text-xs sm:text-sm text-[#B7B9AF] leading-relaxed mb-6 font-body">
                    {pillar.desc}
                  </p>

                  <div className="pt-4 border-t border-white/10 space-y-2.5">
                    {pillar.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs text-[#B7B9AF] font-body">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#9DB79A] shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
