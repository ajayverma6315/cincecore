import React, { useState } from 'react';
import { Compass, X, ArrowUpRight, ChevronRight, Home, Building2, BookOpen, ShieldCheck, DollarSign } from 'lucide-react';
import { navigateTo } from '../utils/navigation';

export const SiteDirectoryDrawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const pages = [
    {
      category: 'Core Pages',
      items: [
        { label: 'Home Overview', path: '/' },
        { label: 'About Us Atelier', path: '/about/' },
        { label: 'Projects Portfolio', path: '/projects/' },
        { label: 'Interior Design Services', path: '/interior-design-services/' },
        { label: 'Contact / Consultation', path: '/contact/' },
      ],
    },
    {
      category: 'BHK Service Deep Dives',
      items: [
        { label: '1 BHK Interior Design (550–850 sq ft)', path: '/1-bhk-interior-design/' },
        { label: '2 BHK Interior Design (1,100–1,450 sq ft)', path: '/2-bhk-interior-design/' },
        { label: '3 BHK Interior Design (1,800–2,600 sq ft)', path: '/3-bhk-interior-design/' },
        { label: '4 BHK Interior Design (3,000–4,500 sq ft)', path: '/4-bhk-interior-design/' },
      ],
    },
    {
      category: 'Supporting Pages & Editorial',
      items: [
        { label: 'Individual Project: Olive Botanical Salon', path: '/projects/olive-botanical-salon/' },
        { label: 'Individual Project: Chelsea Culinary Studio', path: '/projects/minimalist-travertine-kitchen/' },
        { label: 'Interior Design Cost Guide & Calculator', path: '/interior-design-cost/' },
        { label: 'Cinecore Journal (Blog Index)', path: '/blog/' },
        { label: 'Essay: Haussmannian Parisian Proportions', path: '/blog/paris-proportions-contemporary-flats/' },
        { label: 'Essay: Travertine vs. Marble Kitchen Islands', path: '/blog/travertine-vs-marble-culinary-islands/' },
        { label: 'Privacy Policy & Discretion Charter', path: '/privacy-policy/' },
        { label: 'Terms of Engagement & Conditions', path: '/terms-and-conditions/' },
      ],
    },
  ];

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-4 py-2.5 rounded-full bg-[#171B18]/90 hover:bg-[#222722] text-[#F5F4EE] hover:text-[#9DB79A] border border-white/15 backdrop-blur-md shadow-2xl flex items-center gap-2 text-xs font-mono font-semibold transition-all cursor-pointer group"
          aria-label="Open site directory navigation"
        >
          <Compass className="w-4 h-4 text-[#9DB79A] group-hover:rotate-45 transition-transform" />
          <span>Site Directory</span>
          <span className="px-1.5 py-0.5 rounded-full bg-[#9DB79A]/20 text-[#9DB79A] text-[10px] font-bold">
            14 Pages
          </span>
        </button>
      </div>

      {/* Directory Modal / Drawer */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-end sm:items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-xl bg-[#171B18] text-[#F5F4EE] border border-[#222722] rounded-3xl overflow-hidden shadow-2xl max-h-[85vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-5 sm:p-6 border-b border-[#222722] flex items-center justify-between bg-[#141815]">
              <div className="flex items-center gap-2">
                <Compass className="w-5 h-5 text-[#9DB79A]" />
                <h3 className="text-base font-bold text-white font-heading">
                  Cinecore Architecture &middot; Site Directory
                </h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer transition-colors"
                aria-label="Close directory"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* List */}
            <div className="overflow-y-auto p-5 sm:p-6 space-y-6">
              {pages.map((cat, ci) => (
                <div key={ci}>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#9DB79A] block mb-2 font-bold">
                    {cat.category}
                  </span>
                  <div className="grid grid-cols-1 gap-1.5">
                    {cat.items.map((item, ii) => (
                      <button
                        key={ii}
                        onClick={() => {
                          setIsOpen(false);
                          navigateTo(item.path);
                        }}
                        className="w-full text-left p-3 rounded-xl bg-[#222722]/50 hover:bg-[#222722] hover:text-white border border-white/5 hover:border-[#9DB79A]/30 transition-all text-xs font-medium flex items-center justify-between cursor-pointer group"
                      >
                        <span className="text-[#F5F4EE] group-hover:text-[#9DB79A] transition-colors">
                          {item.label}
                        </span>
                        <ChevronRight className="w-3.5 h-3.5 text-[#B7B9AF] group-hover:text-[#9DB79A] group-hover:translate-x-0.5 transition-transform" />
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-[#222722] bg-[#141815] text-center">
              <span className="text-[10px] font-mono text-[#B7B9AF]">
                Cinecore Interior Design Atelier &middot; London &middot; Paris &middot; New York
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
