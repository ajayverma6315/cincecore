import React, { useState, useEffect } from 'react';
import { SubpageHeader } from '../components/SubpageHeader';
import { projectsData } from '../data/projectsData';
import { Project, filterProjects } from '../utils/projects';
import { navigateTo } from '../utils/navigation';
import { ArrowUpRight, Filter, Search, Sparkles, MapPin, Layers } from 'lucide-react';

interface ProjectsPortfolioPageProps {
  onOpenConsultation: () => void;
  onSelectProjectModal?: (project: Project) => void;
}

export const ProjectsPortfolioPage: React.FC<ProjectsPortfolioPageProps> = ({
  onOpenConsultation,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    document.title = 'Projects Portfolio — Cinecore Interior Design';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const categories = ['All', 'Living', 'Dining', 'Bedroom', 'Kitchen', 'Study'];
  const filteredProjects = filterProjects(projectsData, selectedCategory, searchQuery);

  return (
    <div className="min-h-screen bg-[#171B18] text-[#F5F4EE]">
      <SubpageHeader
        breadcrumbs={[{ label: 'Selected Projects' }]}
        eyebrow="COMMISSIONS ARCHIVE &middot; 2024–2026"
        title="Residential Portfolio & Spatial Studies"
        subtitle="A curated survey of private apartments, townhouses, and country residences crafted across London, Paris, and New York. Each project is an exercise in noble materiality, acoustic quiet, and golden proportions."
        actionButton={{
          label: 'Commission Similar Project',
          onClick: onOpenConsultation,
        }}
        metrics={[
          { label: 'Total Commissions', value: '140+ Projects' },
          { label: 'Published In', value: 'AD, Elle Decor, Wallpaper*' },
          { label: 'Materials Featured', value: '100% Noble Stone & Timber' },
        ]}
      />

      {/* Filter and Search Bar */}
      <section className="py-8 px-4 sm:px-6 md:px-8 lg:px-12 border-b border-[#222722] bg-[#141815]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Category Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            <Filter className="w-4 h-4 text-[#9DB79A] mr-1 shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-[#9DB79A] text-[#171B18] shadow-md font-bold'
                    : 'bg-[#222722] text-[#B7B9AF] hover:text-white hover:bg-[#2C322C]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B7B9AF]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by city, stone, or typology..."
              className="w-full bg-[#171B18] border border-[#222722] rounded-full pl-10 pr-4 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#9DB79A]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#B7B9AF] hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-24 rounded-3xl bg-[#1C201D] border border-[#222722]">
              <Layers className="w-10 h-10 text-[#9DB79A] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white font-heading mb-2">No projects match your query</h3>
              <p className="text-sm text-[#B7B9AF] max-w-md mx-auto mb-6">
                Try searching for materials like &ldquo;Travertine&rdquo;, &ldquo;Oak&rdquo;, or locations like &ldquo;London&rdquo; or &ldquo;New York&rdquo;.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="px-6 py-2.5 rounded-full bg-[#9DB79A] text-[#171B18] font-bold text-xs uppercase"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => navigateTo(`/projects/${project.id}/`)}
                  className="group rounded-3xl bg-[#1C201D] border border-white/5 hover:border-[#9DB79A]/40 overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 cursor-pointer shadow-xl"
                >
                  {/* Project Image */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#171B18]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#171B18]/85 backdrop-blur-md border border-white/10 text-xs font-mono text-[#9DB79A]">
                      {project.category}
                    </div>
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#171B18]/85 backdrop-blur-md border border-white/10 text-xs font-mono text-[#F5F4EE]">
                      {project.year}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs text-[#B7B9AF] mb-2 font-mono">
                        <MapPin className="w-3.5 h-3.5 text-[#9DB79A]" />
                        <span>{project.location}</span>
                        <span aria-hidden="true">&middot;</span>
                        <span>{project.areaSqFt} sq ft</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-heading group-hover:text-[#9DB79A] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#B7B9AF] leading-relaxed line-clamp-2 font-body mb-6">
                        {project.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#222722] space-y-3">
                      {/* Materials List */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.materials.slice(0, 3).map((mat, mi) => (
                          <span
                            key={mi}
                            className="text-[10px] uppercase font-mono tracking-wider px-2.5 py-1 rounded-full bg-[#222722] text-[#B7B9AF]"
                          >
                            {mat}
                          </span>
                        ))}
                      </div>

                      {/* Palette Chips & Link */}
                      <div className="flex items-center justify-between pt-1">
                        <div className="flex items-center gap-1.5">
                          {project.palette.map((color, ci) => (
                            <span
                              key={ci}
                              className="w-4 h-4 rounded-full border border-white/20 shadow-xs"
                              style={{ backgroundColor: color }}
                              title={`Palette color ${color}`}
                            />
                          ))}
                        </div>
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#9DB79A] group-hover:translate-x-0.5 transition-transform">
                          <span>View Case Study</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Inquire Bottom Banner */}
      <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-12 border-t border-[#222722] bg-[#141815]">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-[#9DB79A] font-semibold block">
            BESPOKE ARCHITECTURAL COMMISSIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading">
            Envisioning your own residential transformation?
          </h2>
          <p className="text-sm sm:text-base text-[#B7B9AF] max-w-xl mx-auto font-body">
            Every Cinecore project begins with a confidential spatial feasibility study. We review your property floorplans, assess natural light transit, and draft a tailored architectural concept.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenConsultation}
              className="px-8 py-4 rounded-full bg-[#9DB79A] hover:bg-[#8ca889] text-[#171B18] font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2 cursor-pointer shadow-xl font-heading"
            >
              <span>Schedule Initial Spatial Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
