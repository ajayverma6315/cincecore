import React, { useState } from 'react';
import { Check, MapPin, Mail, ArrowUpRight } from 'lucide-react';
import { navigateTo } from '../utils/navigation';

interface EditorialFooterProps {
  onNavClick: (id: string) => void;
  onSelectService?: (service: any) => void;
  onOpenConsultation: () => void;
}

export const EditorialFooter: React.FC<EditorialFooterProps> = ({
  onNavClick,
  onOpenConsultation,
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#171B18] text-[#F5F4EE] border-t border-[#222722] py-14 md:py-16 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto space-y-12 md:space-y-14">
        {/* Multi-Column Sitemap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Studio Ethos (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-2xl font-bold tracking-tight text-white font-heading">
              Cinecore Interior Design
            </h4>
            <p className="text-xs sm:text-sm text-[#B7B9AF] leading-relaxed max-w-sm font-body">
              Parisian-inspired contemporary European interior architecture and bespoke residential design. Sculpting light, proportion, and noble materials for quiet everyday living.
            </p>
            <div className="pt-2 text-xs text-[#B7B9AF] space-y-1.5 font-mono">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#9DB79A]" />
                <span>London &middot; Paris &middot; New York</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#9DB79A]" />
                <span>atelier@cinecore-design.com</span>
              </div>
            </div>
          </div>

          {/* Architecture & Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h5 className="text-xs font-semibold uppercase tracking-wider text-[#9DB79A] font-heading">
              Studio &amp; Works
            </h5>
            <ul className="space-y-2 text-xs text-[#B7B9AF] font-body">
              <li>
                <button
                  onClick={() => {
                    if (window.location.pathname === '/') {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                      onNavClick('home');
                    } else {
                      navigateTo('/');
                    }
                  }}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Home Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('/about/')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  About Atelier
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('/projects/')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Selected Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('/interior-design-services/')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Design Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('/interior-design-cost/')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Cost Feasibility Guide
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('/contact/')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Book Consultation
                </button>
              </li>
            </ul>
          </div>

          {/* Residential BHK Typologies (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="text-xs font-semibold uppercase tracking-wider text-[#9DB79A] font-heading">
              BHK Typologies
            </h5>
            <ul className="space-y-2 text-xs text-[#B7B9AF] font-body">
              <li>
                <button
                  onClick={() => navigateTo('/1-bhk-interior-design/')}
                  className="hover:text-white transition-colors cursor-pointer text-left flex items-center justify-between w-full group"
                >
                  <span>1 BHK Interior Design</span>
                  <ArrowUpRight className="w-3 h-3 text-[#9DB79A] opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('/2-bhk-interior-design/')}
                  className="hover:text-white transition-colors cursor-pointer text-left flex items-center justify-between w-full group"
                >
                  <span>2 BHK Interior Design</span>
                  <ArrowUpRight className="w-3 h-3 text-[#9DB79A] opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('/3-bhk-interior-design/')}
                  className="hover:text-white transition-colors cursor-pointer text-left flex items-center justify-between w-full group"
                >
                  <span>3 BHK Interior Design</span>
                  <ArrowUpRight className="w-3 h-3 text-[#9DB79A] opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('/4-bhk-interior-design/')}
                  className="hover:text-white transition-colors cursor-pointer text-left flex items-center justify-between w-full group"
                >
                  <span>4 BHK Interior Design</span>
                  <ArrowUpRight className="w-3 h-3 text-[#9DB79A] opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('/interior-design-services/')}
                  className="hover:text-white transition-colors cursor-pointer text-left text-neutral-400 group flex items-center justify-between w-full"
                >
                  <span>Modular Kitchen &amp; Wardrobes</span>
                  <ArrowUpRight className="w-3 h-3 text-[#9DB79A] opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('/interior-design-services/')}
                  className="hover:text-white transition-colors cursor-pointer text-left text-neutral-400 group flex items-center justify-between w-full"
                >
                  <span>Bespoke Penthouse Architecture</span>
                  <ArrowUpRight className="w-3 h-3 text-[#9DB79A] opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
            </ul>
          </div>

          {/* Monograph Newsletter & Blog (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="text-xs font-semibold uppercase tracking-wider text-[#9DB79A] font-heading">
              Cinecore Journal
            </h5>
            <p className="text-xs text-[#B7B9AF] leading-relaxed font-body">
              Quarterly reflections on European spatial design, stone extraction, and daylight choreography.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 text-xs text-[#9DB79A] py-2">
                <Check className="w-4 h-4" />
                <span>Subscribed to the Cinecore Journal.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="atelier@domain.com"
                  className="w-full bg-[#222722] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#9DB79A]"
                  required
                />
                <button
                  type="submit"
                  className="w-full py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-semibold transition-colors cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            )}
            <button
              onClick={() => navigateTo('/blog/')}
              className="text-xs text-[#9DB79A] hover:text-white transition-colors cursor-pointer block pt-1 font-mono"
            >
              &rarr; View All Journal Articles
            </button>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 border-t border-[#222722] flex flex-col sm:flex-row items-center justify-between text-xs text-[#B7B9AF] gap-4 font-body">
          <p>&copy; {new Date().getFullYear()} Cinecore Interior Design Atelier. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <button
              onClick={() => navigateTo('/about/')}
              className="hover:text-white transition-colors cursor-pointer text-left"
            >
              About Us
            </button>
            <button
              onClick={() => navigateTo('/projects/')}
              className="hover:text-white transition-colors cursor-pointer text-left"
            >
              Projects
            </button>
            <button
              onClick={() => navigateTo('/contact/')}
              className="hover:text-white transition-colors cursor-pointer text-left"
            >
              Contact
            </button>
            <button
              onClick={() => navigateTo('/privacy-policy/')}
              className="hover:text-white transition-colors cursor-pointer text-left"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => navigateTo('/terms-and-conditions/')}
              className="hover:text-white transition-colors cursor-pointer text-left"
            >
              Terms &amp; Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
