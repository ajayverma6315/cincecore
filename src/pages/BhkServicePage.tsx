import React, { useState, useEffect } from 'react';
import { SubpageHeader } from '../components/SubpageHeader';
import { getBhkConfig, BhkServiceConfig } from '../data/bhkData';
import { navigateTo } from '../utils/navigation';
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, ChevronDown, Compass, Layers, ShieldCheck, Sparkles } from 'lucide-react';

interface BhkServicePageProps {
  bhkSlug: string; // e.g. '1-bhk', '2-bhk', '3-bhk', '4-bhk'
  onOpenConsultation: () => void;
  onInquireWithService: (serviceName: string) => void;
}

export const BhkServicePage: React.FC<BhkServicePageProps> = ({
  bhkSlug,
  onOpenConsultation,
  onInquireWithService,
}) => {
  const config = getBhkConfig(bhkSlug) || getBhkConfig('2-bhk')!;
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    document.title = `${config.name} — Cinecore European Architecture`;
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [config]);

  const otherBhks = [1, 2, 3, 4]
    .filter((n) => n !== config.bhkNumber)
    .map((n) => getBhkConfig(`${n}-bhk`)!);

  return (
    <div className="min-h-screen bg-[#171B18] text-[#F5F4EE]">
      <SubpageHeader
        breadcrumbs={[
          { label: 'Services', path: '/interior-design-services/' },
          { label: `${config.bhkNumber} BHK Interior Design` },
        ]}
        eyebrow={`ARCHITECTURAL TYPOLOGY &middot; ${config.badge.toUpperCase()}`}
        title={config.name}
        subtitle={config.overviewSummary}
        actionButton={{
          label: `Book ${config.bhkNumber} BHK Spatial Consultation`,
          onClick: () => onInquireWithService(config.name),
        }}
        metrics={[
          { label: 'Floorplan Area', value: config.areaRange },
          { label: 'Turnkey Timeline', value: config.timeline },
          { label: 'Typical Investment', value: config.investmentGuide.split('(')[0] },
        ]}
      />

      {/* Hero Showcase Visual */}
      <section className="py-12 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="aspect-[16/9] w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative bg-[#1C201D]">
            <img
              src={config.heroImage}
              alt={`${config.name} by Cinecore Interior Design`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#171B18]/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="p-4 rounded-2xl bg-[#171B18]/90 backdrop-blur-md border border-white/10 max-w-lg">
                <span className="text-[10px] font-mono text-[#9DB79A] uppercase tracking-wider block mb-1">
                  IDEAL CLIENT PROFILE
                </span>
                <p className="text-xs text-[#F5F4EE] font-body leading-relaxed">
                  {config.idealProfile}
                </p>
              </div>
              <button
                onClick={() => navigateTo(`/projects/${config.caseStudyRef.slug}/`)}
                className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 text-xs font-semibold flex items-center gap-2 cursor-pointer transition-all"
              >
                <span>View {config.caseStudyRef.title}</span>
                <ArrowUpRight className="w-4 h-4 text-[#9DB79A]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Space Planning Strategy */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-12 border-b border-[#222722]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#9DB79A] font-semibold block">
              SPATIAL PLANNING PHILOSOPHY
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-heading">
              How We Solve the {config.bhkNumber} BHK Footprint
            </h2>
            <p className="text-sm sm:text-base text-[#B7B9AF] leading-relaxed font-body">
              {config.spacePlanningStrategy.philosophy}
            </p>
            <div className="pt-2">
              <button
                onClick={() => onInquireWithService(config.name)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#9DB79A] text-[#171B18] font-bold text-xs uppercase tracking-wider transition-all cursor-pointer font-heading shadow-md"
              >
                <span>Request {config.bhkNumber} BHK Blueprint Review</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {config.spacePlanningStrategy.keyTechniques.map((technique, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-[#1C201D] border border-white/5 flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-full bg-[#222722] text-[#9DB79A] flex items-center justify-center shrink-0 font-mono text-xs font-bold mt-0.5">
                  0{i + 1}
                </div>
                <p className="text-sm text-[#F5F4EE] leading-relaxed font-body">
                  {technique}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Room Layout Breakdown */}
      <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-12 border-b border-[#222722] bg-[#141815]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-[#9DB79A] font-semibold block mb-2">
              ROOM-BY-ROOM SPECIFICATIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-heading">
              Zoned Proportions & Architectural Deliverables
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {config.roomLayoutBreakdown.map((room, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl bg-[#171B18] border border-[#222722] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white font-heading">{room.room}</h3>
                    <span className="px-3 py-1 rounded-full bg-[#222722] text-xs font-mono text-[#9DB79A]">
                      {room.areaEst}
                    </span>
                  </div>
                  <p className="text-sm text-[#B7B9AF] leading-relaxed font-body mb-6">
                    {room.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-[#222722]">
                    <span className="text-[10px] font-mono text-[#9DB79A] uppercase tracking-wider block">
                      ARCHITECTURAL INCLUSIONS:
                    </span>
                    {room.architecturalHighlights.map((hl, hli) => (
                      <div key={hli} className="flex items-start gap-2 text-xs text-[#F5F4EE]">
                        <Check className="w-3.5 h-3.5 text-[#9DB79A] shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bespoke Storage Innovations */}
      <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-12 border-b border-[#222722]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-[#9DB79A] font-semibold block mb-2">
              CONCEALED MILLWORK
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-heading">
              Bespoke Storage Innovations for {config.bhkNumber} BHK Living
            </h2>
            <p className="text-sm text-[#B7B9AF] mt-2 font-body">
              Clutter is the enemy of calm. Our millwork engineers design storage that disappears seamlessly into walls.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {config.bespokeStorageInnovations.map((storage, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl bg-[#1C201D] border border-white/5 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-[#222722] flex items-center justify-center text-[#9DB79A] font-mono font-bold text-xs mb-6">
                    S0{i + 1}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 font-heading">
                    {storage.title}
                  </h3>
                  <p className="text-sm text-[#B7B9AF] leading-relaxed font-body">
                    {storage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials & Palette */}
      <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-12 border-b border-[#222722] bg-[#141815]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-[#9DB79A] font-semibold block mb-2">
              MATERIAL TAXONOMY
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-heading">
              Noble Finishes Curated for {config.bhkNumber} BHK Residences
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="p-6 rounded-3xl bg-[#171B18] border border-[#222722]">
              <span className="text-[10px] font-mono text-[#9DB79A] uppercase tracking-wider block mb-2">01 &middot; STONE</span>
              <p className="text-sm font-semibold text-white font-heading mb-1">{config.materialsAndFinishes.stone}</p>
            </div>
            <div className="p-6 rounded-3xl bg-[#171B18] border border-[#222722]">
              <span className="text-[10px] font-mono text-[#9DB79A] uppercase tracking-wider block mb-2">02 &middot; TIMBER</span>
              <p className="text-sm font-semibold text-white font-heading mb-1">{config.materialsAndFinishes.timber}</p>
            </div>
            <div className="p-6 rounded-3xl bg-[#171B18] border border-[#222722]">
              <span className="text-[10px] font-mono text-[#9DB79A] uppercase tracking-wider block mb-2">03 &middot; METAL</span>
              <p className="text-sm font-semibold text-white font-heading mb-1">{config.materialsAndFinishes.metal}</p>
            </div>
            <div className="p-6 rounded-3xl bg-[#171B18] border border-[#222722]">
              <span className="text-[10px] font-mono text-[#9DB79A] uppercase tracking-wider block mb-2">04 &middot; TEXTILES</span>
              <p className="text-sm font-semibold text-white font-heading mb-1">{config.materialsAndFinishes.textile}</p>
            </div>
            <div className="p-6 rounded-3xl bg-[#171B18] border border-[#222722]">
              <span className="text-[10px] font-mono text-[#9DB79A] uppercase tracking-wider block mb-2">05 &middot; PLASTER</span>
              <p className="text-sm font-semibold text-white font-heading mb-1">{config.materialsAndFinishes.wallFinish}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Scope Inclusions */}
      <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-12 border-b border-[#222722]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#9DB79A] font-semibold block mb-2">
              TURNKEY DELIVERABLES
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-heading">
              Complete {config.bhkNumber} BHK Architectural Scope
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {config.designScopeInclusions.map((inc, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[#1C201D] border border-white/5 flex items-start gap-4"
              >
                <div className="w-6 h-6 rounded-full bg-[#9DB79A]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#9DB79A]" />
                </div>
                <span className="text-sm text-[#F5F4EE] leading-relaxed font-body">{inc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BHK-Specific FAQs */}
      <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-12 border-b border-[#222722] bg-[#141815]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-[#9DB79A] font-semibold block mb-2">
              CLIENT INQUIRIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-heading">
              Frequently Asked Questions About {config.bhkNumber} BHK Transformations
            </h2>
          </div>

          <div className="space-y-4">
            {config.faqs.map((faq, i) => {
              const isOpen = openFaqIndex === i;
              return (
                <div
                  key={i}
                  className="rounded-2xl bg-[#171B18] border border-[#222722] overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#1C201D] transition-colors"
                  >
                    <span className="text-base font-bold text-white font-heading">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#9DB79A] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-sm text-[#B7B9AF] leading-relaxed font-body border-t border-[#222722]/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Other BHK Tiers Navigation */}
      <section className="py-16 px-4 sm:px-6 md:px-8 lg:px-12 border-b border-[#222722]">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-widest text-[#9DB79A] font-semibold block mb-4">
            EXPLORE ALTERNATIVE FOOTPRINTS
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherBhks.map((other) => (
              <div
                key={other.slug}
                onClick={() => navigateTo(other.routePath)}
                className="p-6 rounded-3xl bg-[#1C201D] border border-white/5 hover:border-[#9DB79A]/40 transition-all cursor-pointer group flex items-center justify-between"
              >
                <div>
                  <span className="text-xs font-mono text-[#B7B9AF] block mb-1">
                    {other.areaRange} &middot; {other.timeline}
                  </span>
                  <h4 className="text-lg font-bold text-white font-heading group-hover:text-[#9DB79A] transition-colors">
                    {other.name}
                  </h4>
                </div>
                <ArrowRight className="w-5 h-5 text-[#9DB79A] group-hover:translate-x-1 transition-transform" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Action Footer */}
      <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-12 text-center">
        <div className="max-w-3xl mx-auto p-10 md:p-14 rounded-3xl bg-[#222722] border border-white/5 space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-[#9DB79A] font-semibold block">
            READY FOR YOUR {config.bhkNumber} BHK TRANSFORMATION?
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading">
            Schedule your private spatial feasibility consultation.
          </h2>
          <p className="text-sm sm:text-base text-[#B7B9AF] font-body max-w-xl mx-auto">
            We will review your floorplan layout, verify daylight transit, and prepare an itemized architectural proposal.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onInquireWithService(config.name)}
              className="px-8 py-4 rounded-full bg-[#9DB79A] hover:bg-[#8ca889] text-[#171B18] font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2 cursor-pointer shadow-xl font-heading"
            >
              <span>Book {config.bhkNumber} BHK Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigateTo('/interior-design-cost/')}
              className="px-8 py-4 rounded-full bg-[#171B18] hover:bg-[#2c322c] text-white border border-white/10 font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Review Cost Guide</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
