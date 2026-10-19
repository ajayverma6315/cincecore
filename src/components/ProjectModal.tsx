import React, { useEffect } from 'react';
import { X, MapPin, Calendar, Maximize, ArrowUpRight, Check } from 'lucide-react';
import { Project, formatArea } from '../utils/projects';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onInquire: (projectName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onInquire,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-4xl bg-neutral-900 border border-white/15 rounded-3xl overflow-hidden shadow-2xl my-auto flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 flex items-center justify-center backdrop-blur-md cursor-pointer transition-colors"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto">
          {/* Main Hero Photo in Modal */}
          <div className="relative aspect-[16/9] w-full bg-neutral-950">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-black/30" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-1">
                <span>{project.category} Space</span>
                <span>·</span>
                <span>{project.year}</span>
              </div>
              <h2
                id="modal-project-title"
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight"
              >
                {project.title}
              </h2>
            </div>
          </div>

          {/* Details Body */}
          <div className="p-6 sm:p-8 space-y-8">
            {/* Meta Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 text-xs sm:text-sm">
              <div>
                <span className="text-neutral-400 block text-[11px] uppercase tracking-wider mb-1">
                  Location
                </span>
                <span className="text-white font-medium flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  {project.location}
                </span>
              </div>
              <div>
                <span className="text-neutral-400 block text-[11px] uppercase tracking-wider mb-1">
                  Spatial Area
                </span>
                <span className="text-white font-medium tabular-nums">
                  {formatArea(project.areaSqFt)}
                </span>
              </div>
              <div>
                <span className="text-neutral-400 block text-[11px] uppercase tracking-wider mb-1">
                  Typology
                </span>
                <span className="text-white font-medium">{project.category} Suite</span>
              </div>
              <div>
                <span className="text-neutral-400 block text-[11px] uppercase tracking-wider mb-1">
                  Status
                </span>
                <span className="text-emerald-400 font-medium">Completed {project.year}</span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-2">
                Architectural Narrative
              </h3>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Materials Palette */}
            <div>
              <h3 className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-3">
                Materiality & Color Swatches
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {project.materials.map((mat, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 p-2.5 rounded-xl bg-neutral-950/50 border border-white/5"
                  >
                    <span
                      className="w-5 h-5 rounded-full border border-white/20 shrink-0"
                      style={{ backgroundColor: project.palette[i] || '#333' }}
                    />
                    <span className="text-xs text-neutral-200 font-medium truncate">{mat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-3">
                Design Execution Notes
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-neutral-300">
                {project.keyFeatures.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer action */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-neutral-400">
                Interested in tailoring this aesthetic to your residence?
              </span>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onInquire(project.title);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-neutral-100 text-neutral-900 font-medium px-6 py-3 rounded-full text-sm shadow-md transition-all cursor-pointer"
              >
                <span>Request Consultation for This Style</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
