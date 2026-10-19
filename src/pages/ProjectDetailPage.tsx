import React, { useEffect } from 'react';
import { SubpageHeader } from '../components/SubpageHeader';
import { projectsData } from '../data/projectsData';
import { navigateTo } from '../utils/navigation';
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Compass, Layers, MapPin, Sparkles } from 'lucide-react';

interface ProjectDetailPageProps {
  projectSlug: string;
  onOpenConsultation: () => void;
  onInquireWithProject: (projectName: string) => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({
  projectSlug,
  onOpenConsultation,
  onInquireWithProject,
}) => {
  // Find project by id
  const projectIndex = projectsData.findIndex((p) => p.id === projectSlug);
  const project = projectsData[projectIndex >= 0 ? projectIndex : 0];
  const prevProject = projectIndex > 0 ? projectsData[projectIndex - 1] : projectsData[projectsData.length - 1];
  const nextProject = projectIndex < projectsData.length - 1 ? projectsData[projectIndex + 1] : projectsData[0];

  useEffect(() => {
    if (project) {
      document.title = `${project.title} — Cinecore Architectural Case Study`;
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#171B18] text-[#F5F4EE] flex flex-col items-center justify-center p-8">
        <h2 className="text-2xl font-bold font-heading mb-4">Project Not Found</h2>
        <button
          onClick={() => navigateTo('/projects/')}
          className="px-6 py-2.5 rounded-full bg-[#9DB79A] text-[#171B18] font-bold text-xs uppercase"
        >
          Back to Projects Portfolio
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#171B18] text-[#F5F4EE]">
      <SubpageHeader
        breadcrumbs={[
          { label: 'Selected Projects', path: '/projects/' },
          { label: project.title },
        ]}
        eyebrow={`ARCHITECTURAL CASE STUDY &middot; ${project.category.toUpperCase()}`}
        title={project.title}
        subtitle={project.description}
        actionButton={{
          label: `Inquire About ${project.title}`,
          onClick: () => onInquireWithProject(project.title),
        }}
        metrics={[
          { label: 'Location', value: project.location },
          { label: 'Year Completed', value: `${project.year}` },
          { label: 'Conditioned Floor Area', value: `${project.areaSqFt} sq ft` },
        ]}
      />

      {/* Hero Showcase Photography */}
      <section className="py-12 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="aspect-[16/9] w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative bg-[#1C201D]">
            <img
              src={project.image}
              alt={`${project.title} interior architecture by Cinecore`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#171B18]/70 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="px-4 py-2 rounded-2xl bg-[#171B18]/90 backdrop-blur-md border border-white/10 text-xs text-[#B7B9AF] font-mono">
                <span className="text-[#9DB79A] font-bold">COMMISSION SPECS:</span> {project.materials.join(' · ')}
              </div>
              <div className="flex items-center gap-2">
                {project.palette.map((hex, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#171B18]/90 backdrop-blur-md border border-white/10 text-[10px] font-mono text-[#F5F4EE]"
                  >
                    <span className="w-3 h-3 rounded-full border border-white/20" style={{ backgroundColor: hex }} />
                    <span>{hex}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Details Grid */}
      <section className="py-16 px-4 sm:px-6 md:px-8 lg:px-12 border-b border-[#222722]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#9DB79A] font-semibold block mb-2">
                THE ARCHITECTURAL BRIEF
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4 font-heading">
                Balancing classical Parisian proportions with contemporary restraint.
              </h2>
              <p className="text-base text-[#B7B9AF] leading-relaxed font-body">
                The client approached Cinecore seeking to transform an underutilized residential floorplan into a serene, tactile sanctuary. The primary mandate was to eliminate visual fragmentation, replace standard plasterboard walls with continuous fluted boiserie and concealed storage joinery, and maximize the transit of natural daylight through high-performance blackened steel portals.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#1C201D] border border-[#222722]">
              <span className="text-xs font-mono uppercase tracking-widest text-[#9DB79A] font-semibold block mb-4">
                KEY ARCHITECTURAL HIGHLIGHTS
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.keyFeatures.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#9DB79A]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-[#9DB79A]" />
                    </div>
                    <span className="text-sm text-[#F5F4EE] font-body">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#9DB79A] font-semibold block mb-2">
                SPATIAL ENGINEERING & ACOUSTICS
              </span>
              <h3 className="text-xl font-bold text-white mb-3 font-heading">
                Invisible mechanical integration and circadian light control.
              </h3>
              <p className="text-sm text-[#B7B9AF] leading-relaxed font-body mb-4">
                All mechanical HVAC infrastructure was routed through concealed perimeter soffits, paired with linear slot diffusers that integrate directly into the architectural crown moulding. Sound transmission class (STC) ratings were upgraded using double-layer acoustic drywall with resilient channel decoupling and 44mm solid-core timber doors with automated drop seals.
              </p>
              <p className="text-sm text-[#B7B9AF] leading-relaxed font-body">
                Architectural lighting was calibrated to 2400K warm dimming via a Lutron Homeworks QS system, transitioning automatically from bright daylight focus to amber evening calm.
              </p>
            </div>
          </div>

          {/* Sidebar Specs (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-3xl bg-[#1C201D] border border-[#222722] space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-[#9DB79A] font-mono">
                SPECIFICATIONS SUMMARY
              </h4>
              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-2 border-b border-[#222722]">
                  <span className="text-[#B7B9AF]">Typology:</span>
                  <span className="font-semibold text-white">{project.category} Suite</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#222722]">
                  <span className="text-[#B7B9AF]">Location:</span>
                  <span className="font-semibold text-white">{project.location}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#222722]">
                  <span className="text-[#B7B9AF]">Completion:</span>
                  <span className="font-semibold text-white">{project.year}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#222722]">
                  <span className="text-[#B7B9AF]">Total Area:</span>
                  <span className="font-mono text-white">{project.areaSqFt} sq ft</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#222722]">
                  <span className="text-[#B7B9AF]">Primary Stone:</span>
                  <span className="font-semibold text-white">{project.materials[0]}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-[#B7B9AF]">Architectural Timber:</span>
                  <span className="font-semibold text-white">{project.materials[1] || 'Smoked Oak'}</span>
                </div>
              </div>

              <button
                onClick={() => onInquireWithProject(project.title)}
                className="w-full py-3.5 rounded-full bg-[#9DB79A] hover:bg-[#8ca889] text-[#171B18] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg transition-all font-heading"
              >
                <span>Inquire About This Commission</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 rounded-3xl bg-[#141815] border border-[#222722]">
              <span className="text-xs font-mono uppercase tracking-widest text-[#9DB79A] font-semibold block mb-2">
                RELATED BHK SERVICE
              </span>
              <p className="text-xs text-[#B7B9AF] mb-4">
                This project was executed as part of Cinecore’s bespoke residential architecture services.
              </p>
              <button
                onClick={() => navigateTo('/interior-design-services/')}
                className="text-xs text-white font-semibold flex items-center gap-1.5 hover:text-[#9DB79A] transition-colors"
              >
                <span>View All BHK Typologies</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Prev / Next Navigation Bar */}
      <section className="py-12 px-4 sm:px-6 md:px-8 lg:px-12 border-b border-[#222722] bg-[#141815]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={() => navigateTo(`/projects/${prevProject.id}/`)}
            className="flex items-center gap-3 text-left group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full bg-[#222722] flex items-center justify-center group-hover:bg-[#9DB79A] group-hover:text-[#171B18] transition-colors">
              <ArrowLeft className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-[#B7B9AF] uppercase block">PREVIOUS PROJECT</span>
              <span className="text-sm font-bold text-white group-hover:text-[#9DB79A] transition-colors font-heading hidden sm:block">
                {prevProject.title}
              </span>
            </div>
          </button>

          <button
            onClick={() => navigateTo('/projects/')}
            className="px-4 py-2 rounded-full border border-white/10 text-xs uppercase font-mono text-[#B7B9AF] hover:text-white hover:border-white/30 transition-all cursor-pointer"
          >
            All Projects
          </button>

          <button
            onClick={() => navigateTo(`/projects/${nextProject.id}/`)}
            className="flex items-center gap-3 text-right group cursor-pointer"
          >
            <div>
              <span className="text-[10px] font-mono text-[#B7B9AF] uppercase block">NEXT PROJECT</span>
              <span className="text-sm font-bold text-white group-hover:text-[#9DB79A] transition-colors font-heading hidden sm:block">
                {nextProject.title}
              </span>
            </div>
            <div className="w-10 h-10 rounded-full bg-[#222722] flex items-center justify-center group-hover:bg-[#9DB79A] group-hover:text-[#171B18] transition-colors">
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>
        </div>
      </section>

      {/* Inquire Section */}
      <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-12 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-[#9DB79A] font-semibold block">
            CREATE YOUR OWN HAVEN
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading">
            Commission an interior tailored to your life rituals.
          </h2>
          <p className="text-sm sm:text-base text-[#B7B9AF] font-body max-w-xl mx-auto">
            Book an initial architectural dialogue to review your floorplans and discuss finishes, stone slabs, and timeline.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onInquireWithProject(project.title)}
              className="px-8 py-4 rounded-full bg-[#9DB79A] hover:bg-[#8ca889] text-[#171B18] font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2 cursor-pointer shadow-xl font-heading"
            >
              <span>Schedule Spatial Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
