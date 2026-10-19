import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowUpRight, MapPin } from 'lucide-react';
import { Project, filterProjects } from '../utils/projects';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  projects,
  onSelectProject,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = '';
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const results = filterProjects(projects, 'All', query);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-start justify-center pt-20 px-4 animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-neutral-900 border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 sm:p-6 border-b border-white/10 flex items-center gap-3">
          <Search className="w-5 h-5 text-neutral-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by space, material (e.g. Travertine, Oak), or location..."
            className="w-full bg-transparent text-white placeholder-neutral-500 text-sm sm:text-base focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-neutral-400 hover:text-white text-xs px-2"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Popular searches pills */}
        {!query && (
          <div className="p-4 sm:p-6 border-b border-white/5 bg-white/[0.02]">
            <span className="text-xs text-neutral-400 block mb-2 font-medium">
              Popular Material & Space Inquiries:
            </span>
            <div className="flex flex-wrap gap-2">
              {['Olive', 'Travertine', 'Living', 'Fluted Oak', 'Tribeca', 'Bedroom'].map((term) => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  className="px-3 py-1 text-xs rounded-full bg-white/5 hover:bg-white/10 text-neutral-300 border border-white/10 transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results List */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-3">
          {results.length === 0 ? (
            <div className="text-center py-8 text-neutral-400 text-sm">
              No architectural spaces found for &ldquo;{query}&rdquo;.
            </div>
          ) : (
            results.map((project) => (
              <div
                key={project.id}
                onClick={() => {
                  onClose();
                  onSelectProject(project);
                }}
                className="group p-3.5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-white/20 transition-all flex items-center justify-between cursor-pointer"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-14 h-14 rounded-xl object-cover shrink-0"
                  />
                  <div className="min-w-0">
                    <div className="text-xs text-emerald-400 font-medium">
                      {project.category} Space
                    </div>
                    <h4 className="text-sm font-semibold text-white truncate group-hover:text-emerald-300 transition-colors">
                      {project.title}
                    </h4>
                    <span className="text-xs text-neutral-400 flex items-center gap-1 truncate">
                      <MapPin className="w-3 h-3 text-neutral-500 shrink-0" />
                      {project.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0 ml-3">
                  <span className="text-xs text-neutral-400 hidden sm:inline">Inspect</span>
                  <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
