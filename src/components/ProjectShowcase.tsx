import React, { useState, useMemo } from 'react';
import { ArrowUpRight, SlidersHorizontal, MapPin, Maximize2 } from 'lucide-react';
import { Project, filterProjects, formatArea } from '../utils/projects';

interface ProjectShowcaseProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

const CATEGORIES = ['All', 'Living', 'Dining', 'Bedroom', 'Kitchen', 'Study'] as const;

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  projects,
  onSelectProject,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProjects = useMemo(() => {
    return filterProjects(projects, selectedCategory, searchQuery);
  }, [projects, selectedCategory, searchQuery]);

  return (
    <section id="projects" className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10 gap-6">
        <div>
          <div className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-2">
            Selected Portfolio
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Curated Architectural Works
          </h2>
        </div>
        <p className="text-sm md:text-base text-neutral-400 max-w-md leading-relaxed">
          Each commission represents a rigorous dialogue between natural materials, ambient light,
          and enduring bespoke craftsmanship.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-10">
        {/* Category Buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs md:text-sm font-medium rounded-full transition-all duration-200 whitespace-nowrap cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-white text-neutral-900 shadow-md'
                  : 'bg-white/5 text-neutral-300 hover:bg-white/10 hover:text-white border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Quick inline search filter */}
        <div className="relative min-w-[220px]">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter by material or room..."
            className="w-full bg-neutral-900/80 border border-white/10 text-white placeholder-neutral-500 text-xs md:text-sm rounded-full py-2 pl-4 pr-9 focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/40 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white text-xs"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Grid of Projects */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-16 bg-neutral-900/40 rounded-3xl border border-white/5">
          <p className="text-neutral-400 text-base mb-2">No projects match the selected criteria.</p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="text-xs text-white underline underline-offset-4 hover:text-emerald-400 cursor-pointer"
          >
            Reset all filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group relative bg-neutral-900/60 rounded-3xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 flex flex-col cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-950">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Category & Year badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 text-xs font-medium text-white/90 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15">
                  <span>{project.category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="tabular-nums">{project.year}</span>
                </div>

                {/* Inspect Action */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Location overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/90">
                  <span className="flex items-center gap-1.5 truncate">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="truncate">{project.location}</span>
                  </span>
                  <span className="tabular-nums font-mono text-white/70">
                    {formatArea(project.areaSqFt)}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white tracking-tight mb-2 group-hover:text-emerald-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs md:text-sm text-neutral-400 line-clamp-2 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Materials preview & CTA */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 overflow-hidden">
                    {project.palette.map((color, idx) => (
                      <span
                        key={idx}
                        className="w-3.5 h-3.5 rounded-full border border-white/20"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                    <span className="text-[11px] text-neutral-400 ml-1 truncate">
                      {project.materials[0]}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-medium text-white group-hover:translate-x-0.5 transition-transform">
                    <span>View Case</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};
