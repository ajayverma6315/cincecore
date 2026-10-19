import React, { useState } from 'react';
import { ArrowUpRight, Compass, CheckCircle2, Layers } from 'lucide-react';

interface SignatureProjectStoryProps {
  onOpenCaseStudy: () => void;
}

export const SignatureProjectStory: React.FC<SignatureProjectStoryProps> = ({
  onOpenCaseStudy,
}) => {
  const [activeTab, setActiveTab] = useState<'brief' | 'approach' | 'materials'>('approach');

  return (
    <section id="signature-story" className="bg-[#222722] text-[#F5F4EE] py-24 md:py-36 px-6 md:px-12 lg:px-16 border-t border-[#171B18] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Eyebrow */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#9DB79A] mb-2 font-body">
              <span>STANDOUT CASE STUDY</span>
              <span>&middot;</span>
              <span>RESIDENTIAL MONOGRAPH</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-heading">
              The Olive Botanical Salon
            </h2>
            <div className="text-xs text-[#B7B9AF] mt-2 font-mono">
              West Kensington, London &middot; Private Townhouse Living Suite
            </div>
          </div>

          {/* Tab Switcher */}
          <div className="flex items-center gap-1.5 p-1 rounded-full bg-[#171B18] border border-white/10">
            <button
              onClick={() => setActiveTab('brief')}
              className={`px-4 py-2 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                activeTab === 'brief' ? 'bg-white text-[#171B18] shadow' : 'text-[#B7B9AF] hover:text-white'
              }`}
            >
              01. The Challenge
            </button>
            <button
              onClick={() => setActiveTab('approach')}
              className={`px-4 py-2 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                activeTab === 'approach' ? 'bg-white text-[#171B18] shadow' : 'text-[#B7B9AF] hover:text-white'
              }`}
            >
              02. Architectural Approach
            </button>
            <button
              onClick={() => setActiveTab('materials')}
              className={`px-4 py-2 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                activeTab === 'materials' ? 'bg-white text-[#171B18] shadow' : 'text-[#B7B9AF] hover:text-white'
              }`}
            >
              03. Material Palette
            </button>
          </div>
        </div>

        {/* Split-Screen Magazine Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Architectural Photo with Editorial Vignette (7 cols) */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[16/11] w-full rounded-3xl overflow-hidden shadow-2xl bg-[#171B18] border border-white/10">
              <img
                src="/src/assets/images/hero_olive_living_room_1792337181639.webp"
                alt="The Olive Botanical Salon completed interior architecture"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171B18]/80 via-transparent to-black/20" />

              {/* Floating Architectural Annotation */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/15 text-xs text-white flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#9DB79A] block mb-0.5">
                    Structural Intervention
                  </span>
                  <span className="font-medium">
                    3.2m Blackened Steel French Casement with Garden Alignment
                  </span>
                </div>
                <button
                  onClick={onOpenCaseStudy}
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-[#171B18] font-semibold text-[11px] hover:bg-[#9DB79A] transition-colors"
                >
                  <span>Read Story</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: In-depth Story Narrative (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {activeTab === 'brief' && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <span className="text-xs uppercase tracking-widest text-[#9DB79A] font-semibold block">
                  The Brief &amp; Challenge
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                  Reclaiming volume and daylight in a heritage envelope.
                </h3>
                <p className="text-sm text-[#B7B9AF] leading-relaxed font-body">
                  The owners sought to transform an introverted 1890s Victorian drawing room. The existing space was encumbered by heavy chimney flues, dark timber partitions, and single-pane draughty windows that choked off natural light by mid-afternoon.
                </p>
                <div className="p-4 rounded-2xl bg-[#171B18] border border-white/5 space-y-2 text-xs text-[#B7B9AF]">
                  <div className="text-white font-medium">Conservation Constraints:</div>
                  <p>All exterior facades and original ceiling cornice mouldings were Grade II designated, requiring surgical structural intervention without compromising historical plasterwork.</p>
                </div>
              </div>
            )}

            {activeTab === 'approach' && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <span className="text-xs uppercase tracking-widest text-[#9DB79A] font-semibold block">
                  Architectural Solution
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                  Saturating the volume in olive lime plaster and steel light.
                </h3>
                <p className="text-sm text-[#B7B9AF] leading-relaxed font-body">
                  Rather than erasing the Victorian mouldings, we enveloped walls, cornices, and window surrounds in a continuous mineral olive wash. By inserting a concealed structural steel beam, we opened a full 3.2m French casement wall connecting the salon to a tranquil walled garden.
                </p>
                <ul className="space-y-2.5 text-xs text-[#F5F4EE] pt-2">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#9DB79A] shrink-0 mt-0.5" />
                    <span>Acoustic French oak herringbone parquet with sound-dampening wool underlay</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#9DB79A] shrink-0 mt-0.5" />
                    <span>Low-profile Belgian linen seating ensuring uninterrupted garden sightlines</span>
                  </li>
                </ul>
              </div>
            )}

            {activeTab === 'materials' && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <span className="text-xs uppercase tracking-widest text-[#9DB79A] font-semibold block">
                  Materiality &amp; Tactile Composition
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                  Four living materials that age in harmony.
                </h3>
                <div className="space-y-2.5 text-xs">
                  <div className="p-3 rounded-xl bg-[#171B18] border border-white/5 flex items-center justify-between">
                    <span className="font-semibold text-white">Mineral Olive Lime Plaster</span>
                    <span className="text-[#9DB79A] font-mono">Custom Pigment #3B4D3F</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#171B18] border border-white/5 flex items-center justify-between">
                    <span className="font-semibold text-white">Honed Navona Travertine</span>
                    <span className="text-[#9DB79A] font-mono">Tivoli, Italy</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#171B18] border border-white/5 flex items-center justify-between">
                    <span className="font-semibold text-white">European Smoked Oak</span>
                    <span className="text-[#9DB79A] font-mono">FSC Solid Parquet</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#171B18] border border-white/5 flex items-center justify-between">
                    <span className="font-semibold text-white">Raw Belgian Flax Linen</span>
                    <span className="text-[#9DB79A] font-mono">Libeco Natural</span>
                  </div>
                </div>
              </div>
            )}

            <div className="pt-4 border-t border-white/10">
              <button
                onClick={onOpenCaseStudy}
                className="w-full py-3.5 bg-white text-[#171B18] hover:bg-[#9DB79A] font-semibold text-xs sm:text-sm rounded-full flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg"
              >
                <span>View Complete Architectural Monograph</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
