import React, { useEffect } from 'react';
import { SubpageHeader } from '../components/SubpageHeader';
import { BHK_CONFIGURATIONS } from '../data/bhkData';
import { RESIDENTIAL_SERVICES } from '../data/servicesData';
import { navigateTo } from '../utils/navigation';
import { ArrowRight, ArrowUpRight, Check, Compass, Layers, ShieldCheck, Sparkles } from 'lucide-react';

interface ServicesOverviewPageProps {
  onOpenConsultation: () => void;
}

export const ServicesOverviewPage: React.FC<ServicesOverviewPageProps> = ({ onOpenConsultation }) => {
  useEffect(() => {
    document.title = 'Interior Design Services & BHK Typologies — Cinecore';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const bhkList = [
    BHK_CONFIGURATIONS['1-bhk'],
    BHK_CONFIGURATIONS['2-bhk'],
    BHK_CONFIGURATIONS['3-bhk'],
    BHK_CONFIGURATIONS['4-bhk'],
  ];

  const dedicatedSpaces = RESIDENTIAL_SERVICES.filter((s) => s.category === 'Dedicated Spaces');

  const comparisonRows = [
    {
      feature: 'Conditioned Spatial Range',
      b1: '550 – 850 sq ft',
      b2: '1,100 – 1,450 sq ft',
      b3: '1,800 – 2,600 sq ft',
      b4: '3,000 – 4,500+ sq ft',
    },
    {
      feature: 'Turnkey Project Timeline',
      b1: '6 – 8 Weeks',
      b2: '8 – 12 Weeks',
      b3: '12 – 16 Weeks',
      b4: '16 – 22 Weeks',
    },
    {
      feature: 'Primary Living Strategy',
      b1: 'Open salon with concealed multi-function joinery & pocket desk',
      b2: 'Dual-zone salon with formal dining & acoustic study/guest suite',
      b3: 'Formal drawing salon, 8-seat dining, boiserie & family lounge',
      b4: 'Double-height great room, 3.6m travertine island, wine gallery & library',
    },
    {
      feature: 'Master Suite Sanctuary',
      b1: 'Integrated storage platform & acoustic flax wall',
      b2: 'Acoustic fluted headboard wall & walk-through wardrobe',
      b3: 'Expansive master wing with 14m² dressing room & 5-fixture ensuite',
      b4: 'Presidential wing with his-and-hers boutique dressing suites & spa bath',
    },
    {
      feature: 'Acoustic Insulation Rating',
      b1: 'STC 48 (perimeter drop seals)',
      b2: 'STC 54 (double-stud decoupling)',
      b3: 'STC 58 (linen boiserie & acoustic plaster)',
      b4: 'STC 62+ (multi-zone acoustic vestibules)',
    },
    {
      feature: 'Typical Investment Bracket',
      b1: '$45k – $75k',
      b2: '$75k – $130k',
      b3: '$130k – $220k',
      b4: '$220k – $400k+',
    },
  ];

  const workflowPhases = [
    {
      step: '01',
      title: 'Feasibility & Spatial Audit',
      desc: 'Laser-accurate measured site audit, review of building bylaws, natural daylight mapping, and structural verification for wall openings.',
    },
    {
      step: '02',
      title: '3D Concept & Material Selection',
      desc: 'Photorealistic volumetric renderings, custom joinery blueprints, and physical material palette boards featuring quarry stone slabs and timber.',
    },
    {
      step: '03',
      title: 'Technical Detailing & Procurement',
      desc: 'Full MEP schematics, Lutron lighting schedules, HVAC slot integration, and direct stone block reservation from European quarries.',
    },
    {
      step: '04',
      title: 'Craftsman Execution & Handover',
      desc: 'Dedicated on-site project architect supervision, precision joinery installation, white-glove styling, and comprehensive 10-year warranty handover.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#171B18] text-[#F5F4EE]">
      <SubpageHeader
        breadcrumbs={[{ label: 'Interior Design Services' }]}
        eyebrow="RESIDENTIAL ARCHITECTURE & INTERIORS"
        title="Bespoke Residential Services by Footprint"
        subtitle="Every residence possesses its own volumetric rhythm. We offer four distinct BHK architectural packages engineered specifically for your floorplan’s proportions, complemented by dedicated single-space transformations."
        actionButton={{
          label: 'Book Service Consultation',
          onClick: onOpenConsultation,
        }}
        metrics={[
          { label: 'Turnkey Scope', value: 'Concept to Handover' },
          { label: 'Craftsmanship Warranty', value: '10 Years' },
          { label: 'Cost Transparency', value: 'Itemized Fixed-Bid' },
        ]}
      />

      {/* BHK 4-Column Feature Grid */}
      <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-12 border-b border-[#222722]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#9DB79A] font-semibold block mb-2">
                CORE TYPOLOGIES
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-heading">
                Four Differentiated BHK Residential Experiences
              </h2>
            </div>
            <button
              onClick={() => navigateTo('/interior-design-cost/')}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#9DB79A] hover:text-white transition-colors font-mono"
            >
              <span>View Transparent Cost Guide</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bhkList.map((bhk) => (
              <div
                key={bhk.slug}
                onClick={() => navigateTo(bhk.routePath)}
                className="group rounded-3xl bg-[#1C201D] border border-white/5 hover:border-[#9DB79A]/40 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 cursor-pointer shadow-xl"
              >
                <div>
                  {/* Card Photo */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#171B18]">
                    <img
                      src={bhk.heroImage}
                      alt={bhk.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-[#171B18]/85 backdrop-blur-md border border-white/10 text-[10px] font-mono text-[#9DB79A] font-bold">
                      {bhk.bhkNumber} BHK RESIDENCE
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <span className="text-[11px] font-mono text-[#B7B9AF] uppercase block mb-1">
                      {bhk.areaRange} &middot; {bhk.timeline}
                    </span>
                    <h3 className="text-xl font-bold text-white font-heading mb-2 group-hover:text-[#9DB79A] transition-colors">
                      {bhk.name}
                    </h3>
                    <p className="text-xs text-[#B7B9AF] leading-relaxed line-clamp-3 font-body mb-4">
                      {bhk.overviewSummary}
                    </p>

                    <div className="space-y-1.5 pt-3 border-t border-[#222722]">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#9DB79A] block">
                        SIGNATURE FOCUS:
                      </span>
                      <p className="text-xs text-white/90 font-medium font-body">
                        {bhk.spacePlanningStrategy.philosophy}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="w-full py-3 rounded-full bg-[#222722] group-hover:bg-[#9DB79A] text-white group-hover:text-[#171B18] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all font-heading">
                    <span>Explore {bhk.bhkNumber} BHK Deep Dive</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Comparison Table */}
      <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-12 border-b border-[#222722] bg-[#141815]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#9DB79A] font-semibold block mb-2">
              ARCHITECTURAL SPECIFICATIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-heading">
              Comparative Analysis Across BHK Tiers
            </h2>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-[#222722] bg-[#171B18]">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#222722] text-[#F5F4EE] font-mono border-b border-[#2C322C]">
                <tr>
                  <th className="p-4 sm:p-5 font-semibold text-[#9DB79A]">Specification Criteria</th>
                  <th className="p-4 sm:p-5 font-semibold">1 BHK Residence</th>
                  <th className="p-4 sm:p-5 font-semibold">2 BHK Residence</th>
                  <th className="p-4 sm:p-5 font-semibold">3 BHK Residence</th>
                  <th className="p-4 sm:p-5 font-semibold">4 BHK Penthouse</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#222722] font-body text-[#B7B9AF]">
                {comparisonRows.map((row, i) => (
                  <tr key={i} className="hover:bg-[#1C201D] transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-white font-heading whitespace-nowrap">
                      {row.feature}
                    </td>
                    <td className="p-4 sm:p-5">{row.b1}</td>
                    <td className="p-4 sm:p-5">{row.b2}</td>
                    <td className="p-4 sm:p-5">{row.b3}</td>
                    <td className="p-4 sm:p-5">{row.b4}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Dedicated Spaces Section */}
      <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-12 border-b border-[#222722]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-[#9DB79A] font-semibold block mb-2">
              DEDICATED SINGLE-SPACE COMMISSIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-heading">
              Architectural Sanctuaries & Culinary Studios
            </h2>
            <p className="text-sm text-[#B7B9AF] mt-2 font-body">
              For clients seeking surgical, high-impact transformations of single key rooms without vacating their entire residence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dedicatedSpaces.map((space) => (
              <div
                key={space.slug}
                onClick={() => navigateTo(`/services/${space.slug}`)}
                className="group rounded-3xl bg-[#1C201D] border border-white/5 hover:border-[#9DB79A]/40 overflow-hidden flex flex-col justify-between transition-all duration-300 cursor-pointer shadow-xl"
              >
                <div>
                  <div className="aspect-[4/3] w-full overflow-hidden relative">
                    <img
                      src={space.image}
                      alt={space.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#171B18]/85 backdrop-blur-md border border-white/10 text-xs font-mono text-[#9DB79A]">
                      {space.shortTag}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 font-heading group-hover:text-[#9DB79A] transition-colors">
                      {space.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#B7B9AF] leading-relaxed line-clamp-3 font-body">
                      {space.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="flex items-center justify-between text-xs font-semibold text-[#9DB79A]">
                    <span>View Dedicated Space Specifications</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Phase Delivery Methodology */}
      <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-12 border-b border-[#222722] bg-[#141815]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-[#9DB79A] font-semibold block mb-2">
              THE ATELIER PROTOCOL
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-heading">
              Four Stages of Turnkey Execution
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowPhases.map((phase) => (
              <div
                key={phase.step}
                className="p-8 rounded-3xl bg-[#171B18] border border-[#222722] flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-bold font-mono text-[#9DB79A] block mb-4">
                    {phase.step}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2 font-heading">
                    {phase.title}
                  </h3>
                  <p className="text-xs text-[#B7B9AF] leading-relaxed font-body">
                    {phase.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-12 text-center">
        <div className="max-w-3xl mx-auto p-10 md:p-14 rounded-3xl bg-[#222722] border border-white/5 space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-[#9DB79A] font-semibold block">
            NEXT STEPS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading">
            Not sure which typology matches your floorplan?
          </h2>
          <p className="text-sm sm:text-base text-[#B7B9AF] font-body max-w-xl mx-auto">
            Send us your architectural floorplan for a complimentary 48-hour volumetric review and preliminary feasibility estimate.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="px-8 py-4 rounded-full bg-[#9DB79A] hover:bg-[#8ca889] text-[#171B18] font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2 cursor-pointer shadow-xl font-heading"
            >
              <span>Submit Floorplans For Review</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigateTo('/interior-design-cost/')}
              className="px-8 py-4 rounded-full bg-[#171B18] hover:bg-[#2c322c] text-white border border-white/10 font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Explore Cost Calculator</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
