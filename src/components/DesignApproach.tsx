import React from 'react';
import { Compass, Layers, SunMedium, Hammer, CheckCircle2 } from 'lucide-react';

export const DesignApproach: React.FC = () => {
  const steps = [
    {
      number: '01',
      icon: Compass,
      title: 'Consultation & Spatial Planning',
      subtitle: 'Sightlines, circulation, and lifestyle discovery',
      desc: 'We analyze natural transit paths, sun azimuth, and household rituals before allocating furnishings. Every room is engineered with intuitive circulation and breathing room.',
      deliverables: ['Daylight orientation & solar study', 'Acoustic zoning between public & quiet wings', 'Ergonomic scale furniture layouts']
    },
    {
      number: '02',
      icon: Layers,
      title: '3D Design & Material Curation',
      subtitle: 'Living stones, noble hardwoods & tactile weaves',
      desc: 'Synthetic finishes fatigue the senses. We specify Roman Navona travertine, unsealed white and smoked French oak, pure flax linen, and aged patinated brass.',
      deliverables: ['Photorealistic 3D spatial elevations', 'Physical sample box delivered to your address', 'Sub-millimeter joinery blueprints']
    },
    {
      number: '03',
      icon: SunMedium,
      title: 'Architectural Lighting & MEP',
      subtitle: 'Circadian lighting & shadow composition',
      desc: 'Lighting is how form reveals itself. We layer daylight harvesting with discreet warm washes (2400K–2700K), low-glare micro spots, and sculptural art luminaires.',
      deliverables: ['Three scene states: Dawn, Entertaining, Nocturne', 'Deep-recessed micro spots that eliminate glare', 'Concealed warm cove & reveal washes']
    },
    {
      number: '04',
      icon: Hammer,
      title: 'Turnkey Execution & Handover',
      subtitle: 'Master cabinetmakers & white-glove site delivery',
      desc: 'Our dedicated European cabinetmakers, stonemasons, and MEP leads oversee site progress with bi-weekly photographic dispatches, delivering turnkey perfection.',
      deliverables: ['Turnkey on-site project architect supervision', 'Bookmatched stone & millimeter flush millwork', 'White-glove styling & deep handover walk-through']
    }
  ];

  return (
    <section id="process" className="bg-[#171B18] text-[#F5F4EE] py-20 sm:py-24 md:py-28 px-4 sm:px-6 md:px-8 lg:px-12 border-t border-[#222722]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4 font-heading">
            Our Design Process
          </h2>
          <p className="text-[#B7B9AF] text-sm sm:text-base leading-relaxed font-body">
            How an empty shell or historic residence transforms into an enduring spatial sanctuary through four disciplined, transparent phases.
          </p>
        </div>

        {/* 4-Step Grid with Standardized Equal-Height Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="p-6 sm:p-7 rounded-3xl bg-[#222722] hover:bg-[#282f28] border border-white/10 hover:border-[#9DB79A]/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  {/* Top Bar with Number and Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-bold font-mono text-[#9DB79A]">
                      {step.number}
                    </span>
                    <div className="w-11 h-11 rounded-2xl bg-[#171B18] border border-white/10 flex items-center justify-center text-[#9DB79A] group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5 tracking-tight font-heading group-hover:text-[#9DB79A] transition-colors">
                    {step.title}
                  </h3>
                  <span className="text-xs text-[#9DB79A] font-medium block mb-3.5 font-body">
                    {step.subtitle}
                  </span>

                  {/* Body */}
                  <p className="text-xs sm:text-[13px] text-[#B7B9AF] leading-relaxed mb-6 font-body">
                    {step.desc}
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div className="pt-4 border-t border-white/10 space-y-2 mt-auto">
                  {step.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#B7B9AF] font-body">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#9DB79A] shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
