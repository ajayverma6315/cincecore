import React, { useState } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';

interface FooterProps {
  onNavClick: (id: string) => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick, onOpenContact }) => {
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
    <footer className="border-t border-white/10 bg-neutral-950 text-neutral-300 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Top Call to Action Banner */}
        <div className="rounded-3xl p-8 md:p-12 bg-gradient-to-br from-neutral-900 to-neutral-950 border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold block mb-2">
              Ready to Transform Your Residence?
            </span>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Let&rsquo;s craft a timeless space tailored to your daily ritual.
            </h3>
          </div>
          <button
            onClick={onOpenContact}
            className="self-start md:self-center inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-neutral-950 font-semibold text-sm hover:bg-neutral-100 transition-all shadow-xl cursor-pointer"
          >
            <span>Begin Commission</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Multi-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xl font-bold text-white font-sans">Aura Spaces</h4>
            <p className="text-xs md:text-sm text-neutral-400 max-w-sm leading-relaxed">
              Crafting timeless interiors with modern elegance. Blending contemporary architectural discipline with classic organic comfort.
            </p>
            <div className="pt-2 text-xs text-neutral-500">
              Licensed Architectural Interior Studio &middot; London &middot; New York
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h5 className="text-xs font-semibold text-white uppercase tracking-wider">Explore</h5>
            <ul className="space-y-2 text-xs md:text-sm text-neutral-400">
              <li>
                <button
                  onClick={() => onNavClick('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home Showcase
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('projects')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Architectural Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('gallery')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Spatial Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Studio Ethos & Method
                </button>
              </li>
            </ul>
          </div>

          {/* Ateliers */}
          <div className="space-y-3">
            <h5 className="text-xs font-semibold text-white uppercase tracking-wider">Ateliers</h5>
            <div className="space-y-3 text-xs text-neutral-400">
              <div>
                <strong className="text-white block font-medium">London Atelier</strong>
                <span>42 Kensington Church Street, London W8</span>
              </div>
              <div>
                <strong className="text-white block font-medium">New York Atelier</strong>
                <span>184 Franklin Street, Tribeca, NY</span>
              </div>
            </div>
          </div>

          {/* Gazette Newsletter */}
          <div className="space-y-3">
            <h5 className="text-xs font-semibold text-white uppercase tracking-wider">Aura Journal</h5>
            <p className="text-xs text-neutral-400">
              Quarterly reflections on materials, light, and architectural craft.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-2 text-xs text-emerald-400 py-2">
                <Check className="w-4 h-4" />
                <span>Subscribed to Aura Journal.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address"
                  className="w-full bg-neutral-900 border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-white/30"
                  required
                />
                <button
                  type="submit"
                  className="w-full py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-medium transition-colors cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>&copy; {new Date().getFullYear()} Aura Spaces Studio Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-neutral-400 transition-colors cursor-pointer">Privacy Charter</span>
            <span className="hover:text-neutral-400 transition-colors cursor-pointer">Terms of Engagement</span>
            <span className="hover:text-neutral-400 transition-colors cursor-pointer">Press Inquiries</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
