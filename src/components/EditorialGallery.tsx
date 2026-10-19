import React from 'react';
import { ArrowUpRight, MapPin, Maximize2 } from 'lucide-react';
import { Project } from '../utils/projects';

interface EditorialGalleryProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
  onViewAllProjects: () => void;
}

export const EditorialGallery: React.FC<EditorialGalleryProps> = ({
  projects,
  onSelectProject,
  onViewAllProjects,
}) => {
  const dominantProject = projects[0];
  const supportingProject1 = projects[1];
  const supportingProject2 = projects[2];

  return (
    <section id="projects" className="bg-[#171B18] text-[#F5F4EE] py-24 md:py-36 px-6 md:px-12 lg:px-16 border-t border-[#222722]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#222722] gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#9DB79A] mb-2 font-body">
              <span>SELECTED COMMISSIONS</span>
              <span>&middot;</span>
              <span>01 &mdash; 03</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-heading">
              Architectural Works
            </h2>
          </div>
          <p className="text-sm text-[#B7B9AF] max-w-md leading-relaxed font-body">
            A curated selection of private residences where structural intervention meets bespoke European craftsmanship.
          </p>
        </div>

        {/* Asymmetrical Editorial Gallery Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Dominant Large-Scale Project Image (7 cols) */}
          {dominantProject && (
            <div
              onClick={() => onSelectProject(dominantProject)}
              className="lg:col-span-7 group cursor-pointer relative"
            >
              <div className="relative aspect-[16/11] w-full rounded-2xl overflow-hidden bg-[#222722] shadow-2xl border border-white/10">
                <img
                  src={dominantProject.image}
                  alt={dominantProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171B18]/90 via-[#171B18]/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

                {/* Top overlay tags */}
                <div className="absolute top-5 left-5 flex items-center gap-2 text-xs font-medium text-white/90 bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
                  <span className="text-[#9DB79A] font-semibold">{dominantProject.category} Suite</span>
                  <span aria-hidden="true">&middot;</span>
                  <span className="font-mono">{dominantProject.year}</span>
                </div>

                <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Bottom caption overlay */}
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div className="max-w-lg">
                    <div className="flex items-center gap-1.5 text-xs text-[#9DB79A] font-medium mb-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{dominantProject.location}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-[#9DB79A] transition-colors font-heading">
                      {dominantProject.title}
                    </h3>
                    <p className="text-xs text-[#B7B9AF] mt-1.5 line-clamp-1 font-body">
                      {dominantProject.description}
                    </p>
                  </div>
                  <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shrink-0 ml-4 transition-all">
                    <span>Inspect</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Supporting Images Column with Different Proportions (5 cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            {/* Supporting Project 1: Vertical 4:5 Proportion */}
            {supportingProject1 && (
              <div
                onClick={() => onSelectProject(supportingProject1)}
                className="group cursor-pointer relative"
              >
                <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] w-full rounded-2xl overflow-hidden bg-[#222722] border border-white/10 shadow-xl">
                  <img
                    src={supportingProject1.image}
                    alt={supportingProject1.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                    loading="lazy"
                  decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171B18]/90 via-[#171B18]/20 to-transparent" />

                  <div className="absolute top-4 left-4 text-xs font-medium text-white/90 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                    <span className="text-[#9DB79A]">{supportingProject1.category}</span>
                  </div>

                  <div className="absolute bottom-5 left-5 right-5">
                    <span className="text-[11px] text-[#9DB79A] font-medium block">
                      {supportingProject1.location}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#9DB79A] transition-colors font-heading">
                      {supportingProject1.title}
                    </h3>
                  </div>
                </div>
              </div>
            )}

            {/* Supporting Project 2: Landscape Proportion */}
            {supportingProject2 && (
              <div
                onClick={() => onSelectProject(supportingProject2)}
                className="group cursor-pointer relative"
              >
                <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/10] w-full rounded-2xl overflow-hidden bg-[#222722] border border-white/10 shadow-xl">
                  <img
                    src={supportingProject2.image}
                    alt={supportingProject2.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                    loading="lazy"
                  decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171B18]/90 via-[#171B18]/20 to-transparent" />

                  <div className="absolute top-4 left-4 text-xs font-medium text-white/90 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                    <span className="text-[#9DB79A]">{supportingProject2.category}</span>
                  </div>

                  <div className="absolute bottom-5 left-5 right-5">
                    <span className="text-[11px] text-[#9DB79A] font-medium block">
                      {supportingProject2.location}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#9DB79A] transition-colors font-heading">
                      {supportingProject2.title}
                    </h3>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Clear link to full portfolio */}
        <div className="pt-12 mt-12 border-t border-[#222722] flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-[#B7B9AF]">
            Viewing 3 of 14 verified European residential commissions.
          </span>
          <button
            onClick={onViewAllProjects}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-white hover:text-[#9DB79A] transition-colors cursor-pointer"
          >
            <span>Explore Complete Architectural Index</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
