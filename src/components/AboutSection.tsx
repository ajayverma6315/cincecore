import React from 'react';
import { Compass, Sparkles, Layers, Award, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Architectural Discovery',
      desc: 'We map the daily rhythms of your household, daylight orientation, and the foundational bones of the building before sketching a single layout.'
    },
    {
      num: '02',
      title: 'Tactile Material Selection',
      desc: 'Every commission develops its own palette of raw travertine, fluted oak, patinated metals, and natural vegetal dyed textiles.'
    },
    {
      num: '03',
      title: 'Spatial Prototyping',
      desc: 'Full-scale material boards and digital spatial walkthroughs ensure sightlines, acoustics, and scale achieve effortless proportion.'
    },
    {
      num: '04',
      title: 'Master Artisan Build',
      desc: 'Our network of European joiners, stonemasons, and upholsterers fabricate each architectural element to generational standards.'
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Intro Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
        <div className="lg:col-span-6 space-y-6">
          <div className="text-xs font-semibold text-emerald-400 uppercase tracking-widest">
            Studio Ethos
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            We design spaces that breathe, endure, and grow more graceful with time.
          </h2>
          <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
            Founded in 2018, Aura Spaces is an interdisciplinary interior architecture and design atelier. We believe authentic luxury lies in the sensory harmony of honest materials, balanced proportions, and lighting that embraces the changing hours of the day.
          </p>
          <div className="grid grid-cols-3 gap-6 pt-4 border-t border-white/10">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-white font-mono tabular-nums">
                140+
              </div>
              <div className="text-xs text-neutral-400 mt-1">Residences Curated</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-white font-mono tabular-nums">
                12
              </div>
              <div className="text-xs text-neutral-400 mt-1">Design Awards</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-white font-mono tabular-nums">
                100%
              </div>
              <div className="text-xs text-neutral-400 mt-1">Bespoke Millwork</div>
            </div>
          </div>
        </div>

        {/* Right Feature Card */}
        <div className="lg:col-span-6 bg-neutral-900/60 rounded-3xl p-8 border border-white/10 relative overflow-hidden">
          <div className="relative z-10 space-y-4">
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block">
              The Aura Commitment
            </span>
            <blockquote className="text-lg md:text-xl text-neutral-200 font-serif italic leading-relaxed">
              &ldquo;Interior architecture is not merely about decorating walls—it is about composing silence, light, and warmth so that returning home feels like a restorative exhale.&rdquo;
            </blockquote>
            <div className="pt-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-900/60 border border-emerald-500/30 flex items-center justify-center text-emerald-300 font-bold text-sm">
                AS
              </div>
              <div>
                <div className="text-sm font-semibold text-white">Elena Vance & Marcus Thorne</div>
                <div className="text-xs text-neutral-400">Principal Design Directors</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The 4-Step Process */}
      <div className="mt-16">
        <div className="mb-10 text-center max-w-xl mx-auto">
          <span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest block mb-2">
            The Design Journey
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            Our Four-Phase Methodology
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-neutral-900/40 border border-white/10 rounded-3xl p-6 flex flex-col justify-between hover:border-white/20 transition-colors"
            >
              <div>
                <span className="text-2xl font-bold font-mono text-emerald-400/80 mb-4 block">
                  {step.num}
                </span>
                <h4 className="text-base font-semibold text-white mb-2">
                  {step.title}
                </h4>
                <p className="text-xs md:text-sm text-neutral-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
