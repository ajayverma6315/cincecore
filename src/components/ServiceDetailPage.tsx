import React, { useEffect } from 'react';
import { ArrowLeft, ArrowUpRight, CheckCircle2, Clock, Maximize2, ShieldCheck } from 'lucide-react';
import { ResidentialService } from '../data/servicesData';

interface ServiceDetailPageProps {
  service: ResidentialService;
  onBack: () => void;
  onInquire: (serviceName: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  service,
  onBack,
  onInquire,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const originalTitle = document.title;
    document.title = `${service.name} — Cinecore Interior Design`;
    return () => {
      document.title = originalTitle;
    };
  }, [service]);

  return (
    <div className="min-h-screen bg-[#171B18] text-[#F5F4EE] pt-28 pb-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb & Back */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#B7B9AF] mb-8">
          <button
            onClick={onBack}
            className="hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <span aria-hidden="true">&middot;</span>
          <span>Services</span>
          <span aria-hidden="true">&middot;</span>
          <span className="text-[#9DB79A] font-medium">{service.shortTag}</span>
        </nav>

        {/* Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-12 border-b border-[#222722] mb-12">
          <div className="lg:col-span-8">
            <span className="text-xs uppercase tracking-widest text-[#9DB79A] font-semibold block mb-3">
              Residential Architectural Service &middot; {service.category}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 font-heading">
              {service.name}
            </h1>
            <p className="text-lg md:text-xl text-[#B7B9AF] font-editorial italic leading-relaxed">
              &ldquo;{service.tagline}&rdquo;
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
            <div className="p-4 rounded-2xl bg-[#222722] border border-white/5 flex justify-between items-center text-xs">
              <span className="text-[#B7B9AF]">Spatial Range:</span>
              <strong className="text-white font-mono">{service.areaRange}</strong>
            </div>
            <div className="p-4 rounded-2xl bg-[#222722] border border-white/5 flex justify-between items-center text-xs">
              <span className="text-[#B7B9AF]">Project Timeline:</span>
              <strong className="text-white">{service.timeline}</strong>
            </div>
            <button
              onClick={() => onInquire(service.name)}
              className="w-full py-4 bg-[#9DB79A] hover:bg-[#8ca889] text-[#171B18] font-semibold text-sm rounded-full flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg"
            >
              <span>Consult For This Service</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Hero Photo for this Service */}
        <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden mb-16 border border-white/10 bg-[#222722] shadow-2xl">
          <img
            src={service.image}
            alt={service.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171B18]/90 via-transparent to-black/30" />
          <div className="absolute bottom-6 left-6 right-6">
            <span className="text-xs text-[#9DB79A] uppercase tracking-wider font-semibold block mb-1">
              Architectural Concept Execution
            </span>
            <p className="text-sm md:text-base text-white/90 max-w-2xl">
              {service.idealFor}
            </p>
          </div>
        </div>

        {/* Detailed Narrative & Inclusions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white font-heading">
              Spatial Philosophy &amp; Scope
            </h2>
            <p className="text-sm md:text-base text-[#B7B9AF] leading-relaxed">
              {service.description}
            </p>

            <div className="pt-6 border-t border-[#222722] space-y-4">
              <h3 className="text-xs uppercase tracking-widest text-[#9DB79A] font-semibold">
                Architectural Execution Pillars
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.architecturalPillars.map((pillar, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-[#222722] border border-white/5 space-y-2">
                    <h4 className="text-sm font-semibold text-white">{pillar.title}</h4>
                    <p className="text-xs text-[#B7B9AF] leading-relaxed">{pillar.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#222722] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#9DB79A] font-semibold block mb-2">
                Deliverables Included
              </span>
              <h3 className="text-xl font-bold text-white mb-6 font-heading">
                Comprehensive Commission Package
              </h3>
              <ul className="space-y-3.5 text-xs sm:text-sm text-[#F5F4EE]">
                {service.keyDeliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#9DB79A] mt-0.5 shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-xs text-[#B7B9AF]">
                <ShieldCheck className="w-4 h-4 text-[#9DB79A] shrink-0" />
                <span>Fixed-scope contract with dedicated project architect.</span>
              </div>
              <button
                onClick={() => onInquire(service.name)}
                className="w-full py-3.5 bg-white text-[#171B18] font-semibold text-xs sm:text-sm rounded-full flex items-center justify-center gap-2 hover:bg-neutral-100 transition-all cursor-pointer shadow-md"
              >
                <span>Request Consultation for {service.shortTag}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Back link */}
        <div className="pt-8 border-t border-[#222722] flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm text-[#B7B9AF] hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Cinecore Homepage</span>
          </button>
        </div>
      </div>
    </div>
  );
};
