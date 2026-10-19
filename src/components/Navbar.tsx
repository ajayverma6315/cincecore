import React, { useState } from 'react';
import { Bell, Search, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  onSelectTab: (tab: string) => void;
  onOpenSearch: () => void;
  onOpenNotifications: () => void;
  onOpenConsultation: () => void;
  unreadCount?: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onSelectTab,
  onOpenSearch,
  onOpenNotifications,
  onOpenConsultation,
  unreadCount = 2,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Exact matching links matching user's specification:
  // Logo, Projects, Services, Studio, Contact + Consultation CTA
  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Projects', id: 'projects' },
    { label: 'Services', id: 'services' },
    { label: 'Studio', id: 'studio' },
    { label: 'Story', id: 'signature-story' },
    { label: 'Contact', id: 'consultation' },
  ];

  const handleNavClick = (id: string) => {
    onSelectTab(id);
    setMobileMenuOpen(false);

    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-30 w-full px-6 md:px-12 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Zone */}
        <div className="flex items-center">
          <button
            onClick={() => handleNavClick('home')}
            className="text-white text-xl md:text-2xl font-semibold tracking-tight hover:opacity-90 transition-opacity cursor-pointer font-sans"
            aria-label="Cinecore Home"
          >
            Cinecore
          </button>
        </div>

        {/* Center Nav Links - exact typography & underline matching reference image */}
        <nav
          className="hidden md:flex items-center space-x-7 lg:space-x-9 text-sm font-medium text-white/90"
          aria-label="Primary Navigation"
        >
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative py-1 cursor-pointer transition-colors duration-200 ${
                  isActive ? 'text-white font-semibold' : 'text-white/80 hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-white rounded-full transition-all"
                    aria-hidden="true"
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Zone: Bell & Search & Consultation CTA */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Notification Button */}
          <button
            type="button"
            onClick={onOpenNotifications}
            className="relative w-10 h-10 md:w-11 md:h-11 rounded-full border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            aria-label={`Open notifications (${unreadCount} unread)`}
          >
            <Bell className="w-4 h-4 md:w-4.5 md:h-4.5" />
            {unreadCount > 0 && (
              <span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-emerald-400 ring-2 ring-black/40" />
            )}
          </button>

          {/* Search Button */}
          <button
            type="button"
            onClick={onOpenSearch}
            className="w-10 h-10 md:w-11 md:h-11 rounded-full border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            aria-label="Open search dialog"
          >
            <Search className="w-4 h-4 md:w-4.5 md:h-4.5" />
          </button>

          {/* Consultation CTA button */}
          <button
            type="button"
            onClick={onOpenConsultation}
            className="hidden lg:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-neutral-900 bg-white hover:bg-neutral-100 rounded-full transition-all shadow-md cursor-pointer ml-1"
          >
            <span>Consultation</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-neutral-900" />
          </button>

          {/* Mobile hamburger toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-full border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Toggle mobile navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 mx-2 p-6 rounded-2xl bg-neutral-900/95 backdrop-blur-xl border border-white/10 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left text-base py-2 px-3 rounded-lg transition-colors ${
                  activeTab === item.id
                    ? 'text-white bg-white/10 font-semibold'
                    : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="mt-3 w-full py-3 bg-white text-neutral-900 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Book Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
