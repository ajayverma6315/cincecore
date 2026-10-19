import React, { useState, useEffect, useRef } from 'react';
import { Bell, Search, Menu, X, ArrowUpRight, ChevronDown } from 'lucide-react';
import { navigateTo } from '../utils/navigation';

interface NavbarProps {
  activeTab?: string;
  onSelectTab?: (tab: string) => void;
  onOpenSearch: () => void;
  onOpenNotifications: () => void;
  onOpenConsultation: () => void;
  unreadCount?: number;
}

interface DropdownItem {
  label: string;
  path: string;
  description?: string;
}

const SERVICES_DROPDOWN: DropdownItem[] = [
  {
    label: '1 BHK Interior Design',
    path: '/1-bhk-interior-design/',
    description: 'Pied-à-terre & micro-luxury planning',
  },
  {
    label: '2 BHK Interior Design',
    path: '/2-bhk-interior-design/',
    description: 'Acoustic study & guest suite harmony',
  },
  {
    label: '3 BHK Interior Design',
    path: '/3-bhk-interior-design/',
    description: 'Signature European family residences',
  },
  {
    label: '4 BHK Interior Design',
    path: '/4-bhk-interior-design/',
    description: 'Monumental townhouses & duplexes',
  },
  {
    label: 'Interior Design Cost Guide',
    path: '/interior-design-cost/',
    description: 'Transparent European sq ft estimates',
  },
];

export const Navbar: React.FC<NavbarProps> = ({
  activeTab: propActiveTab = 'home',
  onSelectTab,
  onOpenSearch,
  onOpenNotifications,
  onOpenConsultation,
  unreadCount = 2,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<number | null>(null);

  // Compute active item from current location or prop
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/';
  const normPath = currentPath.replace(/\/+$/, '') || '/';

  let currentActive = propActiveTab;
  if (normPath === '/') {
    currentActive = 'home';
  } else if (normPath === '/about') {
    currentActive = 'about';
  } else if (normPath.startsWith('/projects')) {
    currentActive = 'projects';
  } else if (
    normPath.startsWith('/1-bhk') ||
    normPath.startsWith('/2-bhk') ||
    normPath.startsWith('/3-bhk') ||
    normPath.startsWith('/4-bhk') ||
    normPath.startsWith('/interior-design-services') ||
    normPath.startsWith('/interior-design-cost') ||
    normPath.startsWith('/services')
  ) {
    currentActive = 'services';
  } else if (normPath.startsWith('/contact')) {
    currentActive = 'contact';
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle outside clicks and Escape key to close the Services dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setServicesDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleNavNavigation = (destination: 'home' | 'about' | 'projects' | 'services' | 'contact') => {
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);

    if (destination === 'home') {
      if (normPath === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (onSelectTab) onSelectTab('home');
      } else {
        navigateTo('/');
      }
      return;
    }

    if (destination === 'about') {
      navigateTo('/about/');
      return;
    }

    if (destination === 'projects') {
      navigateTo('/projects/');
      return;
    }

    if (destination === 'services') {
      navigateTo('/interior-design-services/');
      return;
    }

    if (destination === 'contact') {
      navigateTo('/contact/');
      return;
    }
  };

  const handleSubmenuClick = (path: string) => {
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
    navigateTo(path);
  };

  const handleConsultationCTA = () => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    navigateTo('/contact/');
    if (onOpenConsultation) {
      onOpenConsultation();
    }
  };

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = window.setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 180);
  };

  return (
    <>
      <header
        className={`w-full transition-all duration-300 z-40 ${
          isScrolled
            ? 'fixed top-0 left-0 right-0 bg-[#171B18]/92 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3 sm:py-3.5 px-4 sm:px-6 md:px-8 lg:px-12'
            : 'absolute top-0 left-0 right-0 py-5 sm:py-6 px-4 sm:px-6 md:px-8 lg:px-12'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo */}
          <div className="flex items-center">
            <button
              onClick={() => handleNavNavigation('home')}
              className="text-white text-xl sm:text-2xl font-bold tracking-tight hover:opacity-90 transition-opacity cursor-pointer font-heading flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9DB79A]"
              aria-label="Cinecore Interior Design Home"
            >
              <span>Cinecore</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#9DB79A]" aria-hidden="true" />
            </button>
          </div>

          {/* Desktop Navigation Links matching exact required structure */}
          <nav
            className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm font-medium text-white/90"
            aria-label="Primary Navigation"
          >
            {/* 1. Home */}
            <button
              onClick={() => handleNavNavigation('home')}
              className={`relative py-1.5 text-xs uppercase tracking-wider font-semibold transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9DB79A] rounded-sm ${
                currentActive === 'home' ? 'text-white' : 'text-white/75 hover:text-white'
              }`}
              aria-current={currentActive === 'home' ? 'page' : undefined}
            >
              Home
              {currentActive === 'home' && (
                <span
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#9DB79A] rounded-full transition-all"
                  aria-hidden="true"
                />
              )}
            </button>

            {/* 2. About Us */}
            <button
              onClick={() => handleNavNavigation('about')}
              className={`relative py-1.5 text-xs uppercase tracking-wider font-semibold transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9DB79A] rounded-sm ${
                currentActive === 'about' ? 'text-white' : 'text-white/75 hover:text-white'
              }`}
              aria-current={currentActive === 'about' ? 'page' : undefined}
            >
              About Us
              {currentActive === 'about' && (
                <span
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#9DB79A] rounded-full transition-all"
                  aria-hidden="true"
                />
              )}
            </button>

            {/* 3. Projects */}
            <button
              onClick={() => handleNavNavigation('projects')}
              className={`relative py-1.5 text-xs uppercase tracking-wider font-semibold transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9DB79A] rounded-sm ${
                currentActive === 'projects' ? 'text-white' : 'text-white/75 hover:text-white'
              }`}
              aria-current={currentActive === 'projects' ? 'page' : undefined}
            >
              Projects
              {currentActive === 'projects' && (
                <span
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#9DB79A] rounded-full transition-all"
                  aria-hidden="true"
                />
              )}
            </button>

            {/* 4. Services with Interactive Dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center">
                <button
                  type="button"
                  onClick={() => handleNavNavigation('services')}
                  className={`relative py-1.5 text-xs uppercase tracking-wider font-semibold transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9DB79A] rounded-sm flex items-center gap-1 ${
                    currentActive === 'services' ? 'text-white' : 'text-white/75 hover:text-white'
                  }`}
                  aria-current={currentActive === 'services' ? 'page' : undefined}
                  aria-haspopup="true"
                  aria-expanded={servicesDropdownOpen}
                >
                  <span>Services</span>
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setServicesDropdownOpen(!servicesDropdownOpen);
                  }}
                  className="p-1 text-white/75 hover:text-white cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#9DB79A]"
                  aria-label="Toggle Services menu"
                >
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      servicesDropdownOpen ? 'rotate-180 text-[#9DB79A]' : ''
                    }`}
                  />
                </button>
              </div>

              {currentActive === 'services' && (
                <span
                  className="absolute bottom-0 left-0 right-6 h-[2px] bg-[#9DB79A] rounded-full transition-all"
                  aria-hidden="true"
                />
              )}

              {/* Desktop Dropdown Menu Panel */}
              {servicesDropdownOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-[#171B18]/98 backdrop-blur-2xl border border-white/15 rounded-2xl p-2.5 shadow-2xl z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                  role="menu"
                  aria-label="Services Submenu"
                >
                  {/* Services Overview Parent Link */}
                  <button
                    role="menuitem"
                    onClick={() => handleSubmenuClick('/interior-design-services/')}
                    className="w-full text-left px-3.5 py-2.5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer group flex items-center justify-between border-b border-white/10 mb-1"
                  >
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-[#9DB79A] transition-colors flex items-center gap-1.5 font-heading">
                        <span>Services Overview</span>
                        <ArrowUpRight className="w-3 h-3 text-[#9DB79A]" />
                      </div>
                      <p className="text-[11px] text-[#B7B9AF] font-body">
                        Full architectural overview &amp; typologies
                      </p>
                    </div>
                  </button>

                  {/* BHK & Cost Dropdown Items */}
                  <div className="space-y-0.5">
                    {SERVICES_DROPDOWN.map((item) => {
                      const isItemActive = currentPath === item.path || currentPath === item.path.replace(/\/$/, '');
                      return (
                        <button
                          key={item.path}
                          role="menuitem"
                          onClick={() => handleSubmenuClick(item.path)}
                          className={`w-full text-left px-3.5 py-2 rounded-xl transition-all cursor-pointer group ${
                            isItemActive
                              ? 'bg-white/10 text-white font-semibold'
                              : 'text-white/80 hover:text-white hover:bg-white/5'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-medium font-body group-hover:text-white transition-colors">
                              {item.label}
                            </span>
                            <ArrowUpRight className="w-3 h-3 text-[#9DB79A] opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          {item.description && (
                            <span className="text-[10px] text-[#B7B9AF]/80 block font-sans">
                              {item.description}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* 5. Contact */}
            <button
              onClick={() => handleNavNavigation('contact')}
              className={`relative py-1.5 text-xs uppercase tracking-wider font-semibold transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9DB79A] rounded-sm ${
                currentActive === 'contact' ? 'text-white' : 'text-white/75 hover:text-white'
              }`}
              aria-current={currentActive === 'contact' ? 'page' : undefined}
            >
              Contact
              {currentActive === 'contact' && (
                <span
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#9DB79A] rounded-full transition-all"
                  aria-hidden="true"
                />
              )}
            </button>
          </nav>

          {/* Actions: Bell & Search & Consultation CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Notification Button */}
            <button
              type="button"
              onClick={onOpenNotifications}
              className="relative w-10 h-10 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9DB79A]"
              aria-label={`Open notifications (${unreadCount} unread)`}
            >
              <Bell className="w-4 h-4" />
              {unreadCount > 0 && (
                <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#9DB79A] ring-2 ring-[#171B18]" />
              )}
            </button>

            {/* Search Button */}
            <button
              type="button"
              onClick={onOpenSearch}
              className="w-10 h-10 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9DB79A]"
              aria-label="Open search dialog"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Consultation CTA button linked to /contact/ */}
            <button
              type="button"
              onClick={handleConsultationCTA}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#171B18] bg-white hover:bg-[#9DB79A] rounded-full transition-all shadow-md cursor-pointer ml-1 font-heading focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9DB79A]"
            >
              <span>Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#171B18]" />
            </button>

            {/* Mobile hamburger toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-10 h-10 rounded-full border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9DB79A]"
              aria-label="Toggle mobile navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-5 rounded-2xl bg-[#171B18]/95 backdrop-blur-2xl border border-white/15 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200 max-h-[85vh] overflow-y-auto">
            <nav className="flex flex-col space-y-1.5" aria-label="Mobile Navigation">
              {/* Home */}
              <button
                onClick={() => handleNavNavigation('home')}
                className={`text-left text-sm py-2.5 px-3.5 rounded-xl font-medium transition-colors ${
                  currentActive === 'home'
                    ? 'text-white bg-white/10 font-bold'
                    : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
              >
                Home
              </button>

              {/* About Us */}
              <button
                onClick={() => handleNavNavigation('about')}
                className={`text-left text-sm py-2.5 px-3.5 rounded-xl font-medium transition-colors ${
                  currentActive === 'about'
                    ? 'text-white bg-white/10 font-bold'
                    : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
              >
                About Us
              </button>

              {/* Projects */}
              <button
                onClick={() => handleNavNavigation('projects')}
                className={`text-left text-sm py-2.5 px-3.5 rounded-xl font-medium transition-colors ${
                  currentActive === 'projects'
                    ? 'text-white bg-white/10 font-bold'
                    : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
              >
                Projects
              </button>

              {/* Services Accordion */}
              <div className="rounded-xl overflow-hidden bg-white/5 border border-white/10">
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex items-center justify-between text-left text-sm py-2.5 px-3.5 text-white/90 font-medium hover:bg-white/5 transition-colors cursor-pointer"
                  aria-expanded={mobileServicesOpen}
                >
                  <span className={currentActive === 'services' ? 'font-bold text-white' : ''}>
                    Services
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#9DB79A] transition-transform duration-200 ${
                      mobileServicesOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {mobileServicesOpen && (
                  <div className="px-3 pb-3 pt-1 space-y-1 border-t border-white/10 bg-[#171B18]/60">
                    <button
                      onClick={() => handleSubmenuClick('/interior-design-services/')}
                      className="w-full text-left text-xs py-2 px-3 rounded-lg text-[#9DB79A] font-semibold hover:bg-white/10 flex items-center justify-between"
                    >
                      <span>Overview: All Services</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                    {SERVICES_DROPDOWN.map((item) => (
                      <button
                        key={item.path}
                        onClick={() => handleSubmenuClick(item.path)}
                        className="w-full text-left text-xs py-2 px-3 rounded-lg text-white/80 hover:text-white hover:bg-white/5 flex items-center justify-between"
                      >
                        <span>{item.label}</span>
                        <ArrowUpRight className="w-3 h-3 text-[#9DB79A]/60" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Contact */}
              <button
                onClick={() => handleNavNavigation('contact')}
                className={`text-left text-sm py-2.5 px-3.5 rounded-xl font-medium transition-colors ${
                  currentActive === 'contact'
                    ? 'text-white bg-white/10 font-bold'
                    : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
              >
                Contact
              </button>

              {/* Book Private Consultation Button */}
              <div className="pt-3">
                <button
                  onClick={handleConsultationCTA}
                  className="w-full py-3.5 bg-[#9DB79A] hover:bg-[#8ca889] text-[#171B18] rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg font-heading"
                >
                  <span>Book Private Consultation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>
      {/* Spacer when scrolled so content doesn't abruptly jump */}
      {isScrolled && <div className="h-16 w-full" aria-hidden="true" />}
    </>
  );
};
