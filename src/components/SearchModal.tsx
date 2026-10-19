import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowUpRight, MapPin } from 'lucide-react';
import { Project, filterProjects } from '../utils/projects';
import { navigateTo } from '../utils/navigation';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

const SITE_PAGES = [
  { title: '1 BHK Interior Design', path: '/1-bhk-interior-design/', desc: 'Pied-à-terre precision, micro-spatial flow, 550–850 sq ft' },
  { title: '2 BHK Interior Design', path: '/2-bhk-interior-design/', desc: 'Balanced proportion, acoustic study/guest suite, 1,100–1,450 sq ft' },
  { title: '3 BHK Interior Design', path: '/3-bhk-interior-design/', desc: 'Signature European family residence, classical boiserie, 1,800–2,600 sq ft' },
  { title: '4 BHK Interior Design', path: '/4-bhk-interior-design/', desc: 'Monumental penthouse & townhouse luxury, 3,000–4,500+ sq ft' },
  { title: 'Projects Portfolio', path: '/projects/', desc: 'Survey of completed residential architecture commissions' },
  { title: 'Interior Design Services', path: '/interior-design-services/', desc: 'Full architectural packages and dedicated space design' },
  { title: 'Interior Design Cost Guide', path: '/interior-design-cost/', desc: 'Interactive investment calculator & price per sq ft breakdown' },
  { title: 'About Atelier', path: '/about/', desc: 'Our Paris & London architectural heritage, team, and ethos' },
  { title: 'Cinecore Journal & Blog', path: '/blog/', desc: 'Quarterly essays on stone, acoustics, and daylight' },
  { title: 'Contact & Book Consultation', path: '/contact/', desc: 'Schedule a discovery session with our senior architects' },
];

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

  const q = query.trim().toLowerCase();
  const results = filterProjects(projects, 'All', query);
  const matchingPages = q
    ? SITE_PAGES.filter((p) => p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q))
    : [];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-start justify-center pt-20 px-4 animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-[#171B18] text-[#F5F4EE] border border-[#222722] rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 sm:p-6 border-b border-[#222722] flex items-center gap-3">
          <Search className="w-5 h-5 text-[#8E9287] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by space, material (e.g. Travertine, Oak), or location..."
            className="w-full bg-transparent text-[#F5F4EE] placeholder-[#8E9287] text-sm sm:text-base focus:outline-none font-body"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-[#B7B9AF] hover:text-white text-xs px-2 cursor-pointer font-body"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center shrink-0 cursor-pointer"
            aria-label="Close search"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Popular searches pills */}
        {!query && (
          <div className="p-4 sm:p-6 border-b border-[#222722] bg-[#222722]/40">
            <span className="text-xs text-[#B7B9AF] block mb-2 font-medium font-body">
              Quick Directory &amp; Popular Searches:
            </span>
            <div className="flex flex-wrap gap-2">
              {[
                { label: '1 BHK Design', path: '/1-bhk-interior-design/' },
                { label: '2 BHK Design', path: '/2-bhk-interior-design/' },
                { label: '3 BHK Design', path: '/3-bhk-interior-design/' },
                { label: '4 BHK Design', path: '/4-bhk-interior-design/' },
                { label: 'Cost Guide', path: '/interior-design-cost/' },
                { label: 'Journal', path: '/blog/' },
                { label: 'About Atelier', path: '/about/' },
                { label: 'Consultation', path: '/contact/' },
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    onClose();
                    navigateTo(item.path);
                  }}
                  className="px-3 py-1 text-xs rounded-full bg-[#222722] hover:bg-[#9DB79A] text-[#F5F4EE] hover:text-[#171B18] border border-white/10 transition-colors cursor-pointer font-body font-semibold"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results List */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-3">
          {matchingPages.length > 0 && (
            <div className="mb-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#9DB79A] block mb-2">
                SITE PAGES &amp; TYPOLOGIES
              </span>
              <div className="space-y-2">
                {matchingPages.map((pg) => (
                  <div
                    key={pg.path}
                    onClick={() => {
                      onClose();
                      navigateTo(pg.path);
                    }}
                    className="p-3 rounded-2xl bg-[#222722]/70 hover:bg-[#282f28] border border-white/5 hover:border-[#9DB79A]/40 transition-all flex items-center justify-between cursor-pointer"
                  >
                    <div>
                      <h4 className="text-sm font-semibold text-white font-heading">{pg.title}</h4>
                      <p className="text-xs text-[#B7B9AF]">{pg.desc}</p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#9DB79A]" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {matchingPages.length === 0 && results.length === 0 ? (
            <div className="text-center py-8 text-[#B7B9AF] text-sm font-body">
              No architectural spaces or pages found for &ldquo;{query}&rdquo;.
            </div>
          ) : (
            results.map((project) => (
              <div
                key={project.id}
                onClick={() => {
                  onClose();
                  onSelectProject(project);
                }}
                className="group p-3.5 rounded-2xl bg-[#222722] hover:bg-[#282f28] border border-white/5 hover:border-[#9DB79A]/40 transition-all flex items-center justify-between cursor-pointer"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-14 h-14 rounded-xl object-cover shrink-0"
                  />
                  <div className="min-w-0">
                    <div className="text-xs text-[#9DB79A] font-medium font-body">
                      {project.category} Space &middot; Case Study
                    </div>
                    <h4 className="text-sm font-semibold text-white truncate group-hover:text-[#9DB79A] transition-colors font-heading">
                      {project.title}
                    </h4>
                    <span className="text-xs text-[#B7B9AF] flex items-center gap-1 truncate font-body">
                      <MapPin className="w-3 h-3 text-[#9DB79A] shrink-0" />
                      {project.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0 ml-3">
                  <span className="text-xs text-[#B7B9AF] hidden sm:inline font-body">Inspect</span>
                  <ArrowUpRight className="w-4 h-4 text-white group-hover:text-[#9DB79A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
