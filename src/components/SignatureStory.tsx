import React, { useState } from 'react';
import { ArrowUpRight, Compass, Lightbulb, CheckCircle2, Sparkles, Layers } from 'lucide-react';

interface SignatureStoryProps {
  onInquire: () => void;
}

export const SignatureStory: React.FC<SignatureStoryProps> = ({ onInquire }) => {
  const [activeTab, setActiveTab] = useState<'concept' | 'challenge' | 'result'>('result');

  return (
    <section id="signature-story" className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10">
      {/* Kicker */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10 gap-6">
        <div>
          <span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-2 block">
            Signature Project Case Study
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            The Olive Botanical Salon
          </h2>
          <div className="text-xs text-neutral-400 mt-2 flex items-center gap-2">
            <span>West Kensington, London</span>
            <span>&middot;</span>
            <span>Victorian Townhouse Transformation</span>
            <span>&middot;</span>
            <span>Completed 2026</span>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1.5 p-1 rounded-full bg-neutral-900 border border-white/10">
          <button
            onClick={() => setActiveTab('challenge')}
            className={`px-4 py-2 text-xs font-semibold rounded-full transition-all cursor-pointer ${
              activeTab === 'challenge'
                ? 'bg-neutral-800 text-white shadow'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            01. The Challenge
          </button>
          <button
            onClick={() => setActiveTab('concept')}
            className={`px-4 py-2 text-xs font-semibold rounded-full transition-all cursor-pointer ${
              activeTab === 'concept'
                ? 'bg-neutral-800 text-white shadow'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            02. Design Concept
          </button>
          <button
            onClick={() => setActiveTab('result')}
            className={`px-4 py-2 text-xs font-semibold rounded-full transition-all cursor-pointer ${
              activeTab === 'result'
                ? 'bg-white text-neutral-950 shadow'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            03. Completed Result
          </button>
        </div>
      </div>

      {/* Main Feature Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left: Large Image with Highlight Badge */}
        <div className="lg:col-span-7 relative rounded-3xl overflow-hidden border border-white/15 bg-neutral-950 aspect-[16/10] shadow-2xl">
          <img
            src="/src/assets/images/hero_olive_living_room_1792337181639.webp"
            alt="The Olive Botanical Salon - Signature Living Room by Aura Spaces"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

          {/* Floating Callout on image */}
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-white bg-black/60 backdrop-blur-md p-4 rounded-2xl border border-white/15">
            <div>
              <span className="text-emerald-400 font-semibold block text-[11px] uppercase tracking-wider">
                Architectural Key
              </span>
              <span className="font-medium">
                Custom Boiserie &amp; 3.2m Black Steel French Casement Glazing
              </span>
            </div>
            <div className="font-mono text-neutral-300 text-right">
              <div>860 sq ft</div>
              <div className="text-[10px] text-emerald-400">+240% Daylight</div>
            </div>
          </div>
        </div>

        {/* Right: Narrative Detail based on Active Tab */}
        <div className="lg:col-span-5 bg-neutral-900/40 border border-white/10 rounded-3xl p-8 space-y-6">
          {activeTab === 'challenge' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <span className="text-xs font-semibold text-rose-400 uppercase tracking-wider block">
                The Architectural Challenge
              </span>
              <h3 className="text-2xl font-bold text-white">
                A dark, compartmentalized 1890s Victorian drawing room.
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                The original residence suffered from narrow, gloomy circulation, draughty single-pane sash windows overlooking an overgrown courtyard, and boxed-in chimney breasts that obstructed sightlines.
              </p>
              <ul className="space-y-2 text-xs text-neutral-400 pt-2 border-t border-white/10">
                <li className="flex items-center gap-2">
                  <span className="text-rose-400">✕</span> Daylight penetration restricted to less than 1.5 meters from window
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-rose-400">✕</span> Rigid heritage moulding rules preventing standard open-plan demolition
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-rose-400">✕</span> High acoustic echo off bare plastered walls
                </li>
              </ul>
            </div>
          )}

          {activeTab === 'concept' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block">
                The Creative Concept
              </span>
              <h3 className="text-2xl font-bold text-white">
                Honoring historic boiserie with botanical modernism.
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Rather than stripping Victorian character, we restored the wall mouldings and saturated the entire architectural envelope in a bespoke mineral olive lime wash. A structural steel beam enabled a continuous 3.2m high black steel casement window.
              </p>
              <ul className="space-y-2 text-xs text-neutral-300 pt-2 border-t border-white/10">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>Custom botanical art prints framed in minimal blackened steel</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>Low-profile Belgian linen sectional to keep eye lines clear to garden</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>Smoked herringbone walnut parquet with acoustic wool underlay</span>
                </li>
              </ul>
            </div>
          )}

          {activeTab === 'result' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest block">
                The Completed Result
              </span>
              <h3 className="text-2xl font-bold text-white">
                A serene botanical haven where light changes every hour.
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                The living salon is now the beating heart of the home. Sunlight cascades across the herringbone floor throughout the day, while warm 2400K architectural pendant clusters create an intimate cocoon by night.
              </p>

              {/* Outcome stats */}
              <div className="grid grid-cols-2 gap-4 pt-3 border-t border-white/10">
                <div className="p-3 bg-white/5 rounded-2xl">
                  <span className="text-xl font-bold text-white font-mono block">+240%</span>
                  <span className="text-[11px] text-neutral-400">Natural Daylight Ingress</span>
                </div>
                <div className="p-3 bg-white/5 rounded-2xl">
                  <span className="text-xl font-bold text-emerald-400 font-mono block">Cover Story</span>
                  <span className="text-[11px] text-neutral-400">European Living Review</span>
                </div>
              </div>

              {/* Client quote */}
              <blockquote className="text-xs text-neutral-300 italic border-l-2 border-emerald-500 pl-3 pt-1">
                &ldquo;Walking into this salon at 4 PM when the light streams through the steel glass is the purest form of meditation.&rdquo;
                <footer className="text-[10px] text-neutral-400 not-italic mt-1">— Lord &amp; Lady Vance</footer>
              </blockquote>
            </div>
          )}

          {/* Action button */}
          <div className="pt-4 border-t border-white/10">
            <button
              onClick={onInquire}
              className="w-full py-3.5 bg-white hover:bg-neutral-100 text-neutral-950 font-semibold rounded-full text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
            >
              <span>Commission a Similar Transformation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
