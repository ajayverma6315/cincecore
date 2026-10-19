import React from 'react';

export const EditorialQuotation: React.FC = () => {
  return (
    <section 
      aria-label="Editorial Design Philosophy"
      className="relative w-full bg-[#171B18] text-[#F5F4EE] py-20 sm:py-24 md:py-28 px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden border-t border-[#222722]"
    >
      {/* Subtle top divider line */}
      <div className="max-w-4xl mx-auto mb-12 sm:mb-16">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#4B5549]/50 to-transparent" />
      </div>

      <div className="max-w-3xl lg:max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Editorial quotation rendered in Cormorant Garamond Italic */}
        <blockquote className="font-editorial italic font-normal text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] xl:text-[2.9rem] leading-[1.3] sm:leading-[1.28] text-[#F5F4EE] tracking-normal text-balance mb-10 sm:mb-12 selection:bg-[#9DB79A] selection:text-[#171B18]">
          &ldquo;An authentic interior is not finished when there is nothing left to add, but when there is nothing left that distracts from the quiet rhythm of the day.&rdquo;
        </blockquote>

        {/* Restrained sage-green attribution in uppercase Inter */}
        <cite className="not-italic text-[11px] sm:text-xs font-medium uppercase tracking-[0.28em] text-[#9DB79A] font-body opacity-90">
          Cinecore Interior Design &middot; Design Direction
        </cite>
      </div>

      {/* Subtle bottom divider line matching composition */}
      <div className="max-w-4xl mx-auto mt-16 sm:mb-0">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#4B5549]/30 to-transparent" />
      </div>
    </section>
  );
};
