import React, { useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { FounderVisionSection } from '../components/FounderVisionSection';
import { navigateTo } from '../utils/navigation';

interface AboutUsPageProps {
  onOpenConsultation: () => void;
}

export const AboutUsPage: React.FC<AboutUsPageProps> = ({ onOpenConsultation }) => {
  useEffect(() => {
    document.title = 'About Us — Cinecore Interior Design';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const principles = [
    {
      num: '01',
      title: 'Thoughtful Space Planning',
      desc: 'Make the best use of available space with practical layouts and considered movement.',
    },
    {
      num: '02',
      title: 'Functional & Timeless Design',
      desc: 'Balance visual appeal with practical choices that work for everyday living.',
    },
    {
      num: '03',
      title: 'Personalized Interiors',
      desc: 'Shape each design around the client’s preferences, lifestyle, and requirements.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#171B18] text-[#F5F4EE]">
      {/* SECTION 1: WHO WE ARE (2-Column Editorial Design) */}
      <section 
        aria-label="About Cinecore"
        className="pt-28 sm:pt-32 md:pt-36 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 md:px-8 lg:px-12 border-b border-[#222722]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-center">
            {/* Left side: Large high-quality interior design photograph (~50% width) */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#1D221E]">
                <img
                  src="/src/assets/images/hero_olive_living_room_1792337181639.webp"
                  alt="Cinecore architectural living interior with natural light and bespoke millwork"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right side: Vertically centered editorial typography */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-5 sm:space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#9DB79A] font-semibold font-mono">
                ABOUT CINECORE
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-heading leading-[1.18]">
                Designing Spaces That Feel Like Home
              </h1>

              <p className="text-base sm:text-lg text-[#B7B9AF] font-body leading-relaxed max-w-xl">
                We believe that great interiors balance enduring beauty with effortless daily function. Our studio crafts personalized residential environments shaped thoughtfully around how you actually live, move, and unwind.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => navigateTo('/interior-design-services/')}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#9DB79A] hover:text-white transition-colors group cursor-pointer font-heading"
                >
                  <span>Explore Our Services</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: OUR APPROACH (Three Clean Feature Columns in One Horizontal Row) */}
      <section 
        aria-label="Our Approach"
        className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 border-b border-[#222722] bg-[#141815]"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Heading & Supporting Text */}
          <div className="max-w-2xl mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white font-heading mb-3 sm:mb-4">
              Good Design Goes Beyond Looks
            </h2>
            <p className="text-sm sm:text-base text-[#B7B9AF] font-body leading-relaxed">
              Every space should balance aesthetics, everyday functionality, and the people who live in it.
            </p>
          </div>

          {/* Three Feature Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
            {principles.map((principle, index) => (
              <div
                key={principle.num}
                className={`flex flex-col space-y-3 sm:space-y-4 ${
                  index !== 0 ? 'md:border-l md:border-[#222722] md:pl-8 lg:pl-10' : ''
                }`}
              >
                <span className="text-xs font-mono font-semibold tracking-wider text-[#9DB79A]">
                  {principle.num}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white font-heading">
                  {principle.title}
                </h3>
                <p className="text-sm text-[#B7B9AF] font-body leading-relaxed">
                  {principle.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO ESTABLISHED THIS IDEA: FOUNDER & VISION SECTION */}
      <FounderVisionSection />

      {/* CHOOSE OUR STUDIO (Why Choose Us Section placed right after design approach & founder vision) */}
      <WhyChooseUs onConsultClick={onOpenConsultation} />

      {/* SECTION 3: FINAL CTA (Full-Width, Visually Distinct Consultation Banner) */}
      <section 
        aria-label="Book a Consultation"
        className="relative py-20 sm:py-24 md:py-28 px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden border-t border-[#222722] bg-[#121613]"
      >
        {/* Subtle Architectural Ambient Backdrop */}
        <div 
          aria-hidden="true" 
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, #9DB79A 0%, transparent 65%)`,
          }}
        />

        <div className="relative max-w-3xl mx-auto text-center flex flex-col items-center space-y-5 sm:space-y-6">
          <span className="text-xs uppercase tracking-widest text-[#9DB79A] font-semibold font-mono">
            LET'S CREATE SOMETHING MEANINGFUL
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-heading">
            Let's Design Your Space
          </h2>

          <p className="text-base sm:text-lg text-[#B7B9AF] font-body leading-relaxed max-w-xl">
            Tell us about your home, your ideas, and what you need from your space.
          </p>

          <div className="pt-3">
            <button
              onClick={() => navigateTo('/contact/')}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#9DB79A] hover:bg-[#8ca889] text-[#171B18] font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-lg hover:shadow-xl font-heading active:scale-[0.98]"
            >
              <span>Book a Consultation</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
