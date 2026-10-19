import React from 'react';
import { Star, ShieldCheck, Award, Building2, Quote } from 'lucide-react';

export const TrustEvidence: React.FC = () => {
  const testimonials = [
    {
      quote:
        'Aura Spaces transformed our Victorian townhouse into a sanctuary of light. Their decision to formulate a custom sage lime wash and install full-height steel casements gave our home a calm dignity we never dreamed possible.',
      author: 'Lord Julian & Claire Vance',
      residence: 'The Olive Botanical Salon · West Kensington, London',
      completion: 'Spring 2026',
      rating: 5
    },
    {
      quote:
        'In Manhattan penthouses, interior designers often default to cold, sterile glass boxes. Aura Spaces brought warm acoustic fluting, Roman travertine, and circadian lighting that feels grounded and intimately residential.',
      author: 'Dr. Aris Thorne',
      residence: 'Tribeca High-Rise Salon · New York City',
      completion: 'Winter 2025',
      rating: 5
    },
    {
      quote:
        'Their respect for architectural bones is peerless. Not a single historical cornice was sacrificed, yet the whole house functions with effortless contemporary ease. Their artisans executed millwork to sub-millimeter perfection.',
      author: 'Marcus & Helena Sterling',
      residence: 'Cotswolds Master Sanctuary · Gloucestershire, UK',
      completion: 'Autumn 2026',
      rating: 5
    }
  ];

  const credentials = [
    { metric: '140+', label: 'Private Residences Completed' },
    { metric: '12', label: 'International Design Accolades' },
    { metric: '100%', label: 'Bespoke Artisan Millwork' },
    { metric: '98.6%', label: 'Turnkey Schedule Adherence' }
  ];

  const publications = [
    'Architectural Digest',
    'Elle Decor',
    'Wallpaper*',
    'Dezeen',
    'The World of Interiors',
    'Monocle'
  ];

  return (
    <section className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-6">
        <div>
          <span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-2 block">
            Endorsements &amp; Provenance
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Verified Client Experiences
          </h2>
        </div>
        <p className="text-sm md:text-base text-neutral-400 max-w-md leading-relaxed">
          Every commission is backed by obsessive design supervision, transparent budgeting, and
          lifelong client stewardship.
        </p>
      </div>

      {/* Credential Metrics Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {credentials.map((cred, i) => (
          <div
            key={i}
            className="p-6 rounded-3xl bg-neutral-900/40 border border-white/10 flex flex-col justify-between"
          >
            <div className="text-3xl sm:text-4xl font-bold font-mono text-white tabular-nums mb-1">
              {cred.metric}
            </div>
            <div className="text-xs text-neutral-400">{cred.label}</div>
          </div>
        ))}
      </div>

      {/* Testimonials 3-Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="p-8 rounded-3xl bg-neutral-900/60 border border-white/10 flex flex-col justify-between hover:border-white/20 transition-all"
          >
            <div>
              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-4 text-emerald-400">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>

              {/* Quote text */}
              <blockquote className="text-xs md:text-sm text-neutral-300 leading-relaxed mb-6 font-normal">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
            </div>

            {/* Author info */}
            <div className="pt-4 border-t border-white/10">
              <div className="font-semibold text-white text-sm">{t.author}</div>
              <div className="text-[11px] text-neutral-400 mt-0.5">{t.residence}</div>
              <div className="text-[10px] text-emerald-400 font-mono mt-1">Verified Client &middot; {t.completion}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Press Publications Banner */}
      <div className="p-8 rounded-3xl bg-neutral-900/30 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider block mb-1">
            Editorial Publications
          </span>
          <p className="text-xs text-neutral-400">
            Featured on leading European and global architectural reviews.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 text-sm font-semibold text-neutral-400 tracking-wider">
          {publications.map((pub, i) => (
            <span key={i} className="hover:text-white transition-colors">
              {pub}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
