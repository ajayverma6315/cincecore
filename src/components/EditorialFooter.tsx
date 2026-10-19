import React, { useState } from 'react';
import { ArrowUpRight, Check, MapPin, Mail, Phone } from 'lucide-react';
import { RESIDENTIAL_SERVICES, ResidentialService } from '../data/servicesData';

interface EditorialFooterProps {
  onNavClick: (id: string) => void;
  onSelectService: (service: ResidentialService) => void;
  onOpenConsultation: () => void;
}

export const EditorialFooter: React.FC<EditorialFooterProps> = ({
  onNavClick,
  onSelectService,
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
    <footer className="bg-[#171B18] text-[#F5F4EE] border-t border-[#222722] py-20 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Top Banner Callout */}
        <div className="p-8 md:p-12 rounded-3xl bg-[#222722] border border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#9DB79A] font-semibold block mb-2">
              COMMISSIONS CALENDAR &middot; 2026/2027
            </span>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white font-heading">
              Ready to transform your residence with architectural calm?
            </h3>
          </div>
          <button
            onClick={onOpenConsultation}
            className="self-start md:self-center inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#9DB79A] hover:bg-[#8ca889] text-[#171B18] font-bold text-sm transition-all shadow-xl cursor-pointer font-heading"
          >
            <span>Begin Commission Dialogue</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

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
            <div className="pt-2 text-xs text-[#B7B9AF] space-y-1 font-mono">
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

          {/* Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h5 className="text-xs font-semibold uppercase tracking-wider text-[#9DB79A] font-heading">
              Architecture
            </h5>
            <ul className="space-y-2 text-xs text-[#B7B9AF] font-body">
              <li>
                <button
                  onClick={() => onNavClick('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('projects')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Selected Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('why-choose-us')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Why Choose Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Atelier
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  BHK Typologies
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('process')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Our Design Process
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenConsultation}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Private Consultation
                </button>
              </li>
            </ul>
          </div>

          {/* Residential Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="text-xs font-semibold uppercase tracking-wider text-[#9DB79A] font-heading">
              Residential Services
            </h5>
            <ul className="space-y-2 text-xs text-[#B7B9AF] font-body">
              {RESIDENTIAL_SERVICES.slice(0, 5).map((service) => (
                <li key={service.slug}>
                  <button
                    onClick={() => onSelectService(service)}
                    className="hover:text-white transition-colors cursor-pointer text-left truncate block w-full"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => onSelectService(RESIDENTIAL_SERVICES[5])}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Modular Kitchen Design
                </button>
              </li>
            </ul>
          </div>

          {/* Monograph Newsletter (3 cols) */}
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
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 border-t border-[#222722] flex flex-col sm:flex-row items-center justify-between text-xs text-[#B7B9AF] gap-4 font-body">
          <p>&copy; {new Date().getFullYear()} Cinecore Interior Design Atelier. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Charter</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Engagement</span>
            <span className="hover:text-white transition-colors cursor-pointer">Press Dossier</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
