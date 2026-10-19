import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: 'How does Cinecore manage residential project timelines and execution?',
    answer:
      'We run fully managed turnkey commissions under a strict critical path schedule. From architectural space planning to bespoke joinery installation and final dressing, each stage has verified milestones with bi-weekly photographic dispatches.'
  },
  {
    question: 'Can your studio calibrate designs specifically for 1 BHK, 2 BHK, 3 BHK, or Penthouse layouts?',
    answer:
      'Yes. Our residential practice index includes tailored methodologies for distinct footprints — optimizing natural sightlines, acoustic compartmentalization, and dual-purpose millwork whether you are commissioning a 650 sq.ft pied-à-terre or a 5,000+ sq.ft multi-level penthouse.'
  },
  {
    question: 'Where are Cinecore’s stones, hardwoods, and architectural textiles sourced?',
    answer:
      'We work directly with certified quarries in Tivoli and Carrara for natural travertines and marbles, sustainably harvested French oak mills in Bourgogne, and heritage textile looms across Northern Italy and Belgium.'
  },
  {
    question: 'What is involved in the initial Private Consultation?',
    answer:
      'The initial consultation is an in-depth spatial discovery session. We evaluate your architectural floor plans, daylight exposures, household rituals, aesthetic preferences, and budget parameters to formulate a preliminary feasibility study and project charter.'
  },
  {
    question: 'Do you offer end-to-end site supervision and quality assurance?',
    answer:
      'Every project is assigned a dedicated Project Architect and Master Craftsman Site Lead who conduct daily quality inspections, ensuring seamless coordination between MEP engineering, structural alterations, and artisan millwork.'
  }
];

export const EditorialFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section 
      id="faqs" 
      aria-label="Frequently Asked Questions"
      className="w-full bg-[#171B18] text-[#F5F4EE] py-24 sm:py-32 md:py-36 px-6 md:px-12 lg:px-16 border-t border-[#4B5549]/30 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#9DB79A] font-body">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>COMMISSION ADVISORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F4EE] font-heading">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#B7B9AF] max-w-xl mx-auto font-body">
            Clarity regarding our architectural process, bespoke millwork charters, and private residential commissions.
          </p>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-[#4B5549]/30 border-y border-[#4B5549]/30">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="transition-colors">
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full py-6 sm:py-7 flex items-center justify-between text-left gap-4 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9DB79A]"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-semibold text-[#F5F4EE] group-hover:text-[#9DB79A] transition-colors font-heading">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#222722] border border-[#4B5549]/40 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#4B5549]/40 text-[#9DB79A]' : 'text-[#B7B9AF]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="pb-6 sm:pb-7 pr-6 text-sm sm:text-base text-[#B7B9AF] leading-relaxed font-body animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
