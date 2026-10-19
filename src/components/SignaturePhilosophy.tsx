import React from 'react';
import { Sun, VolumeX, Scaling, Compass } from 'lucide-react';

export const SignaturePhilosophy: React.FC = () => {
  const tenets = [
    {
      num: '01',
      icon: Sun,
      title: 'Solar Choreography',
      desc: 'We do not illuminate rooms with arbitrary ceiling grids. We study solar angles from equinox to solstice, positioning reading alcoves in low morning rays and dining salons in lingering dusk warmth.'
    },
    {
      num: '02',
      icon: VolumeX,
      title: 'Acoustic Sanctuary',
      desc: 'True luxury is perceived by the ears before the eyes. We layer concealed micro-perforated acoustic timber, dense Belgian linen drapery, and tactile lime plaster to reduce harsh resonance to a serene murmur.'
    },
    {
      num: '03',
      icon: Scaling,
      title: 'Volumetric Balance',
      desc: 'Drawing on classic Parisian Haussmann proportions, we balance ceiling height with grounded horizontal joinery. Furniture sits low to the parquet, preserving uninterrupted views through steel portals.'
    },
    {
      num: '04',
      icon: Compass,
      title: 'Generational Patina',
      desc: 'We eliminate synthetic coatings and laminate veneers. Unlacquered bronze deepens through human contact; Navona travertine softens; quarter-sawn oak cures under daylight.'
    }
  ];

  return (
    <section id="studio" className="bg-[#171B18] text-[#F5F4EE] py-24 md:py-36 px-6 md:px-12 lg:px-16 border-t border-[#222722] relative overflow-hidden">
      {/* Subtle architectural grid lines in background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#222722_1px,transparent_1px),linear-gradient(to_bottom,#222722_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Editorial Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-[1px] bg-[#9DB79A]" aria-hidden="true" />
          <span className="text-xs uppercase tracking-[0.2em] text-[#9DB79A] font-semibold font-body">
            THE CINECORE MANIFESTO &middot; VOL. 2026
          </span>
        </div>

        {/* Section Heading & Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          <div className="lg:col-span-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] font-heading">
              Space as an Instrument of Quiet Living.
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-sm md:text-base text-[#B7B9AF] leading-relaxed font-body">
              Rather than treating an interior as a showroom of disconnected objects, we sculpt the container first. Architecture, natural illumination, and raw materiality precede decoration.
            </p>
          </div>
        </div>

        {/* 4 Tenets Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {tenets.map((tenet) => {
            const Icon = tenet.icon;
            return (
              <div
                key={tenet.num}
                className="p-8 rounded-2xl bg-[#222722]/60 border border-white/5 hover:border-white/15 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-xs font-mono text-[#9DB79A] font-semibold tracking-widest">
                      {tenet.num}
                    </span>
                    <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-[#9DB79A] group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight font-heading">
                    {tenet.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#B7B9AF] leading-relaxed font-body">
                    {tenet.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Center Editorial Quote */}
        <div className="mt-20 pt-16 border-t border-[#222722] text-center max-w-3xl mx-auto">
          <blockquote className="text-xl sm:text-2xl md:text-3xl text-white font-editorial italic leading-relaxed text-balance">
            &ldquo;An authentic interior is not finished when there is nothing left to add, but when there is nothing left that distracts from the quiet rhythm of the day.&rdquo;
          </blockquote>
          <footer className="text-xs uppercase tracking-widest text-[#9DB79A] font-semibold mt-4">
            Cinecore Interior Design &middot; Design Direction
          </footer>
        </div>
      </div>
    </section>
  );
};
