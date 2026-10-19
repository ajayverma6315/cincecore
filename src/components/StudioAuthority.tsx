import React from 'react';
import { Star, Shield, Award, Check } from 'lucide-react';

export const StudioAuthority: React.FC = () => {
  const verifiedReviews = [
    {
      quote:
        'Cinecore’s mastery over natural light and historic volumes is extraordinary. Saturating our Victorian drawing room in mineral olive plaster and installing floor-to-ceiling blackened steel casements gave our home a calm dignity that feels timeless.',
      author: 'Lord Julian & Claire Vance',
      residence: 'The Olive Botanical Salon &middot; West Kensington, London',
      period: 'Completed Spring 2026'
    },
    {
      quote:
        'In Manhattan high-rises, designers often default to cold, clinical glass. Cinecore brought acoustic timber fluting, Roman travertine, and 2400K circadian lighting that grounds the entire penthouse in warmth.',
      author: 'Dr. Aris Thorne',
      residence: 'Tribeca Dining & Great Room Salon &middot; New York City',
      period: 'Completed Winter 2025'
    },
    {
      quote:
        'Their respect for structural bones and historic mouldings is peerless. Not a single original plaster cornice was harmed, yet the house functions with seamless contemporary elegance.',
      author: 'Marcus & Helena Sterling',
      residence: 'Cotswolds Master Sanctuary &middot; Gloucestershire, UK',
      period: 'Completed Autumn 2026'
    }
  ];

  const editorialPublications = [
    'Architectural Digest',
    'Wallpaper*',
    'The World of Interiors',
    'Elle Decor',
    'Dezeen',
    'Monocle'
  ];

  return (
    <section className="bg-[#171B18] text-[#F5F4EE] py-20 sm:py-24 md:py-28 px-4 sm:px-6 md:px-8 lg:px-12 border-t border-[#222722]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-[#222722] gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-heading">
              Studio Authority &amp; Trust
            </h2>
          </div>
          <p className="text-sm text-[#B7B9AF] max-w-md leading-relaxed font-body">
            Grounded in rigorous architectural execution, transparent budget stewardship, and generational client relationships.
          </p>
        </div>

        {/* 3 Authentic Client Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 items-stretch">
          {verifiedReviews.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-[#222722] border border-white/10 flex flex-col justify-between hover:border-[#9DB79A]/40 transition-all shadow-xl h-full"
            >
              <div>
                <div className="flex items-center gap-1 text-[#9DB79A] mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                <blockquote className="text-xs sm:text-sm text-[#F5F4EE] leading-relaxed mb-6 font-body">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
              </div>

              <div className="pt-4 border-t border-white/5">
                <div className="font-bold text-white text-sm font-heading">{item.author}</div>
                <div
                  className="text-[11px] text-[#B7B9AF] mt-0.5"
                  dangerouslySetInnerHTML={{ __html: item.residence }}
                />
                <div className="text-[10px] text-[#9DB79A] font-mono mt-1">
                  Verified Client &middot; {item.period}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ateliers & Practice Principles Strip */}
        <div className="p-8 md:p-10 rounded-3xl bg-[#222722]/50 border border-white/5 grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div>
            <span className="text-xs font-mono uppercase text-[#9DB79A] block mb-1">
              PRACTICE LOCATION
            </span>
            <h4 className="text-base font-bold text-white font-heading">London &amp; New York Ateliers</h4>
            <p className="text-xs text-[#B7B9AF] mt-1 font-body">
              Dual-location studio facilitating turnkey architectural design and European material procurement.
            </p>
          </div>
          <div>
            <span className="text-xs font-mono uppercase text-[#9DB79A] block mb-1">
              DESIGN DIRECTION
            </span>
            <h4 className="text-base font-bold text-white font-heading">Elena Vance &amp; Marcus Thorne</h4>
            <p className="text-xs text-[#B7B9AF] mt-1 font-body">
              Principal architects overseeing every commission from initial spatial study to final lighting balance.
            </p>
          </div>
          <div>
            <span className="text-xs font-mono uppercase text-[#9DB79A] block mb-1">
              MATERIAL STANDARDS
            </span>
            <h4 className="text-base font-bold text-white font-heading">Zero Synthetic Laminates</h4>
            <p className="text-xs text-[#B7B9AF] mt-1 font-body">
              Strict material charter specifying unsealed solid hardwoods, raw travertine, and mineral lime plasters.
            </p>
          </div>
        </div>

        {/* Editorial Press Recognition */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-[#222722] text-center md:text-left">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#9DB79A] block">
              EDITORIAL REVIEWS &amp; PUBLICATIONS
            </span>
            <p className="text-xs text-[#B7B9AF]">
              Featured across leading international architectural surveys.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 text-xs sm:text-sm font-semibold text-[#B7B9AF] tracking-wider">
            {editorialPublications.map((pub, idx) => (
              <span key={idx} className="hover:text-white transition-colors">
                {pub}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
