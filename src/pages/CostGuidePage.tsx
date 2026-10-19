import React, { useState, useEffect } from 'react';
import { SubpageHeader } from '../components/SubpageHeader';
import { navigateTo } from '../utils/navigation';
import { ArrowRight, ArrowUpRight, Calculator, Check, DollarSign, HelpCircle, Layers, PieChart, ShieldCheck } from 'lucide-react';

interface CostGuidePageProps {
  onOpenConsultation: () => void;
}

export const CostGuidePage: React.FC<CostGuidePageProps> = ({ onOpenConsultation }) => {
  useEffect(() => {
    document.title = 'Interior Design Cost Guide & Calculator — Cinecore';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Calculator State
  const [bhkSize, setBhkSize] = useState<number>(3); // 1, 2, 3, 4
  const [finishTier, setFinishTier] = useState<'bespoke' | 'haute'>('bespoke');
  const [includeStoneIsland, setIncludeStoneIsland] = useState<boolean>(true);
  const [includeBoiserie, setIncludeBoiserie] = useState<boolean>(true);
  const [includeAcousticPanels, setIncludeAcousticPanels] = useState<boolean>(true);
  const [includeSmartAutomation, setIncludeSmartAutomation] = useState<boolean>(true);

  // Dynamic cost calculation
  const baseCostByBhk: Record<number, { bespoke: number; haute: number; sqft: number; timeline: string }> = {
    1: { bespoke: 52000, haute: 72000, sqft: 680, timeline: '6 – 8 Weeks' },
    2: { bespoke: 89000, haute: 125000, sqft: 1280, timeline: '8 – 12 Weeks' },
    3: { bespoke: 148000, haute: 210000, sqft: 2150, timeline: '12 – 16 Weeks' },
    4: { bespoke: 245000, haute: 360000, sqft: 3600, timeline: '16 – 22 Weeks' },
  };

  const currentBase = baseCostByBhk[bhkSize];
  let calculatedTotal = finishTier === 'bespoke' ? currentBase.bespoke : currentBase.haute;

  if (includeStoneIsland) calculatedTotal += bhkSize >= 3 ? 18000 : 9500;
  if (includeBoiserie) calculatedTotal += bhkSize >= 3 ? 16000 : 8500;
  if (includeAcousticPanels) calculatedTotal += bhkSize >= 3 ? 12000 : 6500;
  if (includeSmartAutomation) calculatedTotal += bhkSize >= 3 ? 15000 : 8000;

  const costTiers = [
    {
      name: 'Atelier Essential',
      rate: '$65 – $95 / sq ft',
      desc: 'Selective spatial refinement. Ideal for single-room upgrades, custom kitchen islands, or master bedroom suite transformations.',
      inclusions: [
        'Custom flat-panel oak millwork',
        'Honed travertine countertops',
        'Direct fixture replacement',
        'High-CRI architectural lighting',
      ],
    },
    {
      name: 'European Bespoke',
      rate: '$110 – $175 / sq ft',
      popular: true,
      desc: 'Our signature turnkey service. Full spatial re-zoning, acoustic door portals, boiserie wall paneling, and imported stone.',
      inclusions: [
        'Complete layout reconfiguration',
        'Artisanal boiserie moulding & lime plaster',
        'Bespoke walk-through dressing suites',
        'Lutron 3-scene warm dimming',
        'Solid European white oak flooring',
      ],
    },
    {
      name: 'Haute Architecture & Penthouse',
      rate: '$200 – $350+ / sq ft',
      desc: 'Uncompromising monumentality. Double-height entertaining salons, rare bookmatched Italian marble slabs, and custom European furniture.',
      inclusions: [
        'Structural steel reinforcement',
        'Quarry-selected Calacatta Viola slabs',
        'Temperature-controlled wine galleries',
        'Motorized architectural drapery pockets',
        'Private terrace landscape integration',
      ],
    },
  ];

  const budgetBreakdown = [
    { category: 'Bespoke Millwork & Cabinetry', share: '30%', note: 'Full-height flush storage walls, walk-in dressing rooms, library joinery' },
    { category: 'Noble Stone & Marble Extraction', share: '18%', note: 'Navona travertine islands, bookmatched bathroom slabs, limestone hearths' },
    { category: 'Civil & Architectural Alterations', share: '15%', note: 'Demolition, framing, acoustic insulation, steel casement installations' },
    { category: 'Furniture Curation & Textiles', share: '15%', note: 'Italian modular sectionals, French linen drapery, hand-knotted rugs' },
    { category: 'Flooring & Plaster Finishes', share: '12%', note: 'European oak herringbone parquet, mineral lime marmorino plaster' },
    { category: 'Architectural Lighting & Smart Controls', share: '10%', note: 'Lutron circadian scene control, 2400K indirect coves, 98+ CRI spots' },
  ];

  return (
    <div className="min-h-screen bg-[#171B18] text-[#F5F4EE]">
      <SubpageHeader
        breadcrumbs={[{ label: 'Interior Design Cost Guide' }]}
        eyebrow="TRANSPARENT FINANCIAL ARCHITECTURE"
        title="Interior Design Investment & Cost Guide"
        subtitle="We believe in absolute transparency. Discover how architectural investment is allocated across materials, custom joinery, civil engineering, and acoustic insulation for contemporary residences."
        actionButton={{
          label: 'Request Tailored Itemized Bid',
          onClick: onOpenConsultation,
        }}
        metrics={[
          { label: 'Pricing Model', value: 'Fixed-Bid Lump Sum' },
          { label: 'Cost Overrun History', value: '0% Guaranteed' },
          { label: 'Procurement', value: 'Direct Quarry Sourcing' },
        ]}
      />

      {/* Interactive Calculator Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-12 border-b border-[#222722]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#9DB79A] font-semibold block mb-2">
              INTERACTIVE INVESTMENT ESTIMATOR
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-heading">
              Estimate Your Residence Transformation
            </h2>
            <p className="text-sm text-[#B7B9AF] mt-2 font-body">
              Select your floorplan size, specification tier, and custom architectural features to see an indicative turnkey investment range.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Controls (7 cols) */}
            <div className="lg:col-span-7 p-8 rounded-3xl bg-[#1C201D] border border-white/5 space-y-8">
              {/* Step 1: BHK Size */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#9DB79A] mb-3">
                  1. SELECT RESIDENCE TYPOLOGY
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[1, 2, 3, 4].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setBhkSize(num)}
                      className={`py-3 px-4 rounded-2xl text-xs font-bold uppercase transition-all cursor-pointer font-heading ${
                        bhkSize === num
                          ? 'bg-[#9DB79A] text-[#171B18] shadow-md'
                          : 'bg-[#222722] text-[#B7B9AF] hover:text-white'
                      }`}
                    >
                      {num} BHK Suite
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Finish Tier */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#9DB79A] mb-3">
                  2. CHOOSE ARCHITECTURAL SPECIFICATION TIER
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFinishTier('bespoke')}
                    className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                      finishTier === 'bespoke'
                        ? 'border-[#9DB79A] bg-[#222722]'
                        : 'border-[#222722] bg-[#171B18] text-[#B7B9AF]'
                    }`}
                  >
                    <span className="text-sm font-bold text-white font-heading block mb-1">
                      European Bespoke
                    </span>
                    <span className="text-xs text-[#B7B9AF] block">
                      Honed Navona travertine, smoked oak, boiserie, and Lutron circadian dimming.
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFinishTier('haute')}
                    className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                      finishTier === 'haute'
                        ? 'border-[#9DB79A] bg-[#222722]'
                        : 'border-[#222722] bg-[#171B18] text-[#B7B9AF]'
                    }`}
                  >
                    <span className="text-sm font-bold text-white font-heading block mb-1">
                      Haute Penthouse
                    </span>
                    <span className="text-xs text-[#B7B9AF] block">
                      Bookmatched marble slabs, double-height drapery, private wine vault, and fine joinery.
                    </span>
                  </button>
                </div>
              </div>

              {/* Step 3: Special Additions */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#9DB79A] mb-3">
                  3. BESPOKE ARCHITECTURAL INCLUSIONS
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className="p-3.5 rounded-2xl bg-[#171B18] border border-[#222722] flex items-center gap-3 cursor-pointer text-xs">
                    <input
                      type="checkbox"
                      checked={includeStoneIsland}
                      onChange={(e) => setIncludeStoneIsland(e.target.checked)}
                      className="accent-[#9DB79A] w-4 h-4 rounded"
                    />
                    <span className="text-[#F5F4EE] font-medium">Monolithic Travertine Waterfall Island</span>
                  </label>

                  <label className="p-3.5 rounded-2xl bg-[#171B18] border border-[#222722] flex items-center gap-3 cursor-pointer text-xs">
                    <input
                      type="checkbox"
                      checked={includeBoiserie}
                      onChange={(e) => setIncludeBoiserie(e.target.checked)}
                      className="accent-[#9DB79A] w-4 h-4 rounded"
                    />
                    <span className="text-[#F5F4EE] font-medium">Classical Boiserie Wall Paneling</span>
                  </label>

                  <label className="p-3.5 rounded-2xl bg-[#171B18] border border-[#222722] flex items-center gap-3 cursor-pointer text-xs">
                    <input
                      type="checkbox"
                      checked={includeAcousticPanels}
                      onChange={(e) => setIncludeAcousticPanels(e.target.checked)}
                      className="accent-[#9DB79A] w-4 h-4 rounded"
                    />
                    <span className="text-[#F5F4EE] font-medium">Flax Linen Acoustic Wall Buffering</span>
                  </label>

                  <label className="p-3.5 rounded-2xl bg-[#171B18] border border-[#222722] flex items-center gap-3 cursor-pointer text-xs">
                    <input
                      type="checkbox"
                      checked={includeSmartAutomation}
                      onChange={(e) => setIncludeSmartAutomation(e.target.checked)}
                      className="accent-[#9DB79A] w-4 h-4 rounded"
                    />
                    <span className="text-[#F5F4EE] font-medium">Lutron Multi-Room Lighting & HVAC</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Result Box (5 cols) */}
            <div className="lg:col-span-5 p-8 rounded-3xl bg-[#222722] border border-[#9DB79A]/30 space-y-6 shadow-2xl">
              <span className="text-xs font-mono uppercase tracking-widest text-[#9DB79A] font-semibold block">
                INDICATIVE TURNKEY ESTIMATE
              </span>

              <div>
                <span className="text-xs text-[#B7B9AF] block font-mono">ESTIMATED INVESTMENT BRACKET:</span>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold font-mono text-white mt-1">
                  ${Math.round(calculatedTotal * 0.95 / 1000) * 1000} – ${Math.round(calculatedTotal * 1.08 / 1000) * 1000}
                </div>
                <span className="text-xs text-[#B7B9AF] mt-2 block font-body">
                  Based on approx. {currentBase.sqft} sq ft conditioned area ($
                  {Math.round(calculatedTotal / currentBase.sqft)}/sq ft).
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-[#171B18] border border-white/5 space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-[#B7B9AF]">Selected Footprint:</span>
                  <strong className="text-white font-mono">{bhkSize} BHK Residence</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#B7B9AF]">Specification Tier:</span>
                  <strong className="text-white capitalize">{finishTier} Architecture</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#B7B9AF]">Estimated Timeline:</span>
                  <strong className="text-[#9DB79A] font-mono">{currentBase.timeline}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#B7B9AF]">Billing Structure:</span>
                  <strong className="text-white">Milestone Fixed-Bid</strong>
                </div>
              </div>

              <button
                onClick={onOpenConsultation}
                className="w-full py-4 rounded-full bg-[#9DB79A] hover:bg-[#8ca889] text-[#171B18] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg transition-all font-heading"
              >
                <span>Receive Itemized Proposal For This Footprint</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <p className="text-[10px] text-[#B7B9AF] text-center font-mono leading-relaxed">
                Estimate includes complete architectural design, materials, joinery fabrication, and turnkey installation. Exact pricing verified upon site audit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Core Tiers Breakdown */}
      <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-12 border-b border-[#222722] bg-[#141815]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-[#9DB79A] font-semibold block mb-2">
              BENCHMARK TIERS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-heading">
              Square-Footage Benchmarks & Finish Standards
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {costTiers.map((tier, i) => (
              <div
                key={i}
                className={`p-8 rounded-3xl bg-[#171B18] border flex flex-col justify-between relative ${
                  tier.popular ? 'border-[#9DB79A]' : 'border-[#222722]'
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-8 px-3 py-1 rounded-full bg-[#9DB79A] text-[#171B18] font-mono font-bold text-[10px] uppercase">
                    MOST REQUESTED
                  </span>
                )}
                <div>
                  <h3 className="text-xl font-bold text-white font-heading mb-1">{tier.name}</h3>
                  <div className="text-2xl font-bold font-mono text-[#9DB79A] mb-4">{tier.rate}</div>
                  <p className="text-xs text-[#B7B9AF] leading-relaxed font-body mb-6">{tier.desc}</p>

                  <div className="space-y-2.5 pt-4 border-t border-[#222722]">
                    <span className="text-[10px] font-mono text-[#9DB79A] uppercase tracking-wider block">
                      KEY INCLUSIONS:
                    </span>
                    {tier.inclusions.map((inc, inci) => (
                      <div key={inci} className="flex items-start gap-2 text-xs text-[#F5F4EE]">
                        <Check className="w-3.5 h-3.5 text-[#9DB79A] shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8">
                  <button
                    onClick={onOpenConsultation}
                    className="w-full py-3 rounded-full bg-[#222722] hover:bg-[#9DB79A] text-white hover:text-[#171B18] font-bold text-xs uppercase tracking-wider transition-all cursor-pointer font-heading"
                  >
                    Inquire For This Tier
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Budget Allocation Pie Breakdown */}
      <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-12 border-b border-[#222722]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#9DB79A] font-semibold block mb-2">
              COST ALLOCATION
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-heading">
              Where Your Investment Goes
            </h2>
            <p className="text-sm text-[#B7B9AF] mt-2 font-body">
              A transparent view of how every dollar is deployed across materials, engineering, and craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {budgetBreakdown.map((item, i) => (
              <div key={i} className="p-6 rounded-3xl bg-[#1C201D] border border-white/5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-3xl font-bold font-mono text-[#9DB79A]">{item.share}</span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#9DB79A]" />
                  </div>
                  <h4 className="text-base font-bold text-white font-heading mb-2">{item.category}</h4>
                  <p className="text-xs text-[#B7B9AF] font-body leading-relaxed">{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-12 text-center">
        <div className="max-w-3xl mx-auto p-10 md:p-14 rounded-3xl bg-[#222722] border border-white/5 space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-[#9DB79A] font-semibold block">
            RECEIVE YOUR COMPREHENSIVE DOSSIER
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading">
            Need an exact line-item quotation for your residence?
          </h2>
          <p className="text-sm sm:text-base text-[#B7B9AF] font-body max-w-xl mx-auto">
            Upload your architectural floorplan or schedule a 45-minute discovery consultation to receive a guaranteed fixed-bid proposal.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenConsultation}
              className="px-8 py-4 rounded-full bg-[#9DB79A] hover:bg-[#8ca889] text-[#171B18] font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2 cursor-pointer shadow-xl font-heading"
            >
              <span>Schedule Initial Spatial Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
