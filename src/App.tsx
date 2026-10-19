import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUsSection } from './components/AboutUsSection';
import { EditorialQuotation } from './components/EditorialQuotation';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Spatial3DExperience } from './components/Spatial3DExperience';
import { ResidentialServicesIndex } from './components/ResidentialServicesIndex';
import { StudioAuthority } from './components/StudioAuthority';
import { EditorialGallery } from './components/EditorialGallery';
import { DesignApproach } from './components/DesignApproach';
import { ConsultationCTA } from './components/ConsultationCTA';
import { EditorialFAQ } from './components/EditorialFAQ';
import { EditorialFooter } from './components/EditorialFooter';
import { PageEntranceLoader } from './components/PageEntranceLoader';
import { LuxuryCursor } from './components/LuxuryCursor';
import { SiteDirectoryDrawer } from './components/SiteDirectoryDrawer';
import { projectsData, notificationsData } from './data/projectsData';
import { RESIDENTIAL_SERVICES, ResidentialService, getServiceBySlug } from './data/servicesData';
import { Project } from './utils/projects';
import { navigateTo, ROUTE_NAVIGATE_EVENT } from './utils/navigation';

// Lazy load overlay modals to minimize bundle size
const ProjectModal = lazy(() =>
  import('./components/ProjectModal').then((m) => ({ default: m.ProjectModal }))
);
const ContactDrawer = lazy(() =>
  import('./components/ContactDrawer').then((m) => ({ default: m.ContactDrawer }))
);
const SearchModal = lazy(() =>
  import('./components/SearchModal').then((m) => ({ default: m.SearchModal }))
);
const NotificationDrawer = lazy(() =>
  import('./components/NotificationDrawer').then((m) => ({ default: m.NotificationDrawer }))
);

// Lazy load dedicated new pages
const AboutUsPage = lazy(() =>
  import('./pages/AboutUsPage').then((m) => ({ default: m.AboutUsPage }))
);
const ProjectsPortfolioPage = lazy(() =>
  import('./pages/ProjectsPortfolioPage').then((m) => ({ default: m.ProjectsPortfolioPage }))
);
const ProjectDetailPage = lazy(() =>
  import('./pages/ProjectDetailPage').then((m) => ({ default: m.ProjectDetailPage }))
);
const ServicesOverviewPage = lazy(() =>
  import('./pages/ServicesOverviewPage').then((m) => ({ default: m.ServicesOverviewPage }))
);
const BhkServicePage = lazy(() =>
  import('./pages/BhkServicePage').then((m) => ({ default: m.BhkServicePage }))
);
const ContactConsultationPage = lazy(() =>
  import('./pages/ContactConsultationPage').then((m) => ({ default: m.ContactConsultationPage }))
);
const CostGuidePage = lazy(() =>
  import('./pages/CostGuidePage').then((m) => ({ default: m.CostGuidePage }))
);
const BlogIndexPage = lazy(() =>
  import('./pages/BlogIndexPage').then((m) => ({ default: m.BlogIndexPage }))
);
const BlogArticlePage = lazy(() =>
  import('./pages/BlogArticlePage').then((m) => ({ default: m.BlogArticlePage }))
);
const PrivacyPolicyPage = lazy(() =>
  import('./pages/PrivacyPolicyPage').then((m) => ({ default: m.PrivacyPolicyPage }))
);
const TermsConditionsPage = lazy(() =>
  import('./pages/TermsConditionsPage').then((m) => ({ default: m.TermsConditionsPage }))
);
const ServiceDetailPage = lazy(() =>
  import('./components/ServiceDetailPage').then((m) => ({ default: m.ServiceDetailPage }))
);

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(
    typeof window !== 'undefined' ? window.location.pathname : '/'
  );
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);
  const [contactProjectInterest, setContactProjectInterest] = useState<string>('');
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState<boolean>(false);
  const [notifications, setNotifications] = useState(notificationsData);

  const unreadCount = notifications.filter((n) => !n.read).length;

  // Listen to popstate and custom route events for client-side routing
  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname;
      setCurrentPath(path);

      // Handle hash scrolling if on homepage
      if (path === '/' && window.location.hash) {
        const id = window.location.hash.replace('#', '');
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 80);
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener(ROUTE_NAVIGATE_EVENT, handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener(ROUTE_NAVIGATE_EVENT, handleLocationChange);
    };
  }, []);

  const handleSelectService = (service: ResidentialService) => {
    // If it's a standard BHK service, route to dedicated BHK page
    if (service.slug === '1-bhk') {
      navigateTo('/1-bhk-interior-design/');
      return;
    }
    if (service.slug === '2-bhk') {
      navigateTo('/2-bhk-interior-design/');
      return;
    }
    if (service.slug === '3-bhk') {
      navigateTo('/3-bhk-interior-design/');
      return;
    }
    if (service.slug === '4-bhk') {
      navigateTo('/4-bhk-interior-design/');
      return;
    }
    navigateTo(`/services/${service.slug}`);
  };

  const handleBackToHome = () => {
    navigateTo('/');
  };

  const handleOpenContactWithSubject = (subject: string) => {
    setContactProjectInterest(subject);
    setIsContactOpen(true);
  };

  const handleMarkAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const scrollToSection = (id: string) => {
    // If not on the homepage, navigate accordingly
    if (currentPath !== '/' && currentPath !== '') {
      if (id === 'home') {
        navigateTo('/');
        return;
      }
      if (id === 'projects') {
        navigateTo('/projects/');
        return;
      }
      if (id === 'about') {
        navigateTo('/about/');
        return;
      }
      if (id === 'services') {
        navigateTo('/interior-design-services/');
        return;
      }
      if (id === 'contact') {
        navigateTo('/contact/');
        return;
      }
      navigateTo(`/#${id}`);
      return;
    }

    // ON THE HOMEPAGE: Keep exact behavior
    setActiveTab(id);
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Helper to normalize path without trailing slash for matching
  const normPath = currentPath.replace(/\/+$/, '') || '/';

  // Subpage Route Matching
  let subpageContent: React.ReactNode = null;
  let activeNavTab = activeTab;

  if (normPath === '/about') {
    activeNavTab = 'about';
    subpageContent = (
      <AboutUsPage onOpenConsultation={() => handleOpenContactWithSubject('Atelier Discovery')} />
    );
  } else if (normPath === '/projects') {
    activeNavTab = 'projects';
    subpageContent = (
      <ProjectsPortfolioPage
        onOpenConsultation={() => handleOpenContactWithSubject('Portfolio Commission')}
        onSelectProjectModal={(p) => setSelectedProject(p)}
      />
    );
  } else if (normPath.startsWith('/projects/')) {
    activeNavTab = 'projects';
    const slug = normPath.replace('/projects/', '');
    subpageContent = (
      <ProjectDetailPage
        projectSlug={slug}
        onOpenConsultation={() => handleOpenContactWithSubject('Project Commission')}
        onInquireWithProject={(title) => handleOpenContactWithSubject(`Inquiry: ${title}`)}
      />
    );
  } else if (normPath === '/interior-design-services') {
    activeNavTab = 'services';
    subpageContent = (
      <ServicesOverviewPage
        onOpenConsultation={() => handleOpenContactWithSubject('BHK Services')}
      />
    );
  } else if (normPath === '/1-bhk-interior-design') {
    activeNavTab = 'services';
    subpageContent = (
      <BhkServicePage
        bhkSlug="1-bhk"
        onOpenConsultation={() => handleOpenContactWithSubject('1 BHK Interior Design')}
        onInquireWithService={handleOpenContactWithSubject}
      />
    );
  } else if (normPath === '/2-bhk-interior-design') {
    activeNavTab = 'services';
    subpageContent = (
      <BhkServicePage
        bhkSlug="2-bhk"
        onOpenConsultation={() => handleOpenContactWithSubject('2 BHK Interior Design')}
        onInquireWithService={handleOpenContactWithSubject}
      />
    );
  } else if (normPath === '/3-bhk-interior-design') {
    activeNavTab = 'services';
    subpageContent = (
      <BhkServicePage
        bhkSlug="3-bhk"
        onOpenConsultation={() => handleOpenContactWithSubject('3 BHK Interior Design')}
        onInquireWithService={handleOpenContactWithSubject}
      />
    );
  } else if (normPath === '/4-bhk-interior-design') {
    activeNavTab = 'services';
    subpageContent = (
      <BhkServicePage
        bhkSlug="4-bhk"
        onOpenConsultation={() => handleOpenContactWithSubject('4 BHK Interior Design')}
        onInquireWithService={handleOpenContactWithSubject}
      />
    );
  } else if (normPath === '/contact') {
    activeNavTab = 'contact';
    subpageContent = (
      <ContactConsultationPage initialSubject={contactProjectInterest} />
    );
  } else if (normPath === '/interior-design-cost') {
    activeNavTab = 'services';
    subpageContent = (
      <CostGuidePage
        onOpenConsultation={() => handleOpenContactWithSubject('Cost Feasibility Review')}
      />
    );
  } else if (normPath === '/blog') {
    activeNavTab = 'about';
    subpageContent = <BlogIndexPage />;
  } else if (normPath.startsWith('/blog/')) {
    activeNavTab = 'about';
    const slug = normPath.replace('/blog/', '');
    subpageContent = (
      <BlogArticlePage
        articleSlug={slug}
        onOpenConsultation={() => handleOpenContactWithSubject('Journal Inquiry')}
      />
    );
  } else if (normPath === '/privacy-policy') {
    subpageContent = <PrivacyPolicyPage />;
  } else if (normPath === '/terms-and-conditions') {
    subpageContent = <TermsConditionsPage />;
  } else if (normPath.startsWith('/services/')) {
    activeNavTab = 'services';
    const slug = normPath.replace('/services/', '');
    const found = getServiceBySlug(slug);
    if (found) {
      subpageContent = (
        <ServiceDetailPage
          service={found}
          onBack={handleBackToHome}
          onInquire={(serviceName) => handleOpenContactWithSubject(serviceName)}
        />
      );
    }
  }

  // If viewing any dedicated subpage, render it within the consistent Atelier architecture
  if (subpageContent) {
    return (
      <div className="min-h-screen bg-[#171B18] text-[#F5F4EE] flex flex-col font-sans selection:bg-[#9DB79A] selection:text-[#171B18] relative">
        <LuxuryCursor />

        <Navbar
          activeTab={activeNavTab}
          onSelectTab={scrollToSection}
          onOpenSearch={() => setIsSearchOpen(true)}
          onOpenNotifications={() => setIsNotificationsOpen(true)}
          onOpenConsultation={() => handleOpenContactWithSubject('Private Consultation')}
          unreadCount={unreadCount}
        />

        <main className="flex-1 w-full">
          <Suspense
            fallback={
              <div className="min-h-screen bg-[#171B18] flex items-center justify-center text-[#9DB79A] font-mono text-xs">
                LOADING ARCHITECTURAL VIEW...
              </div>
            }
          >
            {subpageContent}
          </Suspense>
        </main>

        <EditorialFooter
          onNavClick={scrollToSection}
          onSelectService={handleSelectService}
          onOpenConsultation={() => handleOpenContactWithSubject('Private Consultation')}
        />

        <SiteDirectoryDrawer />

        <Suspense fallback={null}>
          {selectedProject && (
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
              onInquire={handleOpenContactWithSubject}
            />
          )}

          <ContactDrawer
            isOpen={isContactOpen}
            onClose={() => setIsContactOpen(false)}
            initialProjectInterest={contactProjectInterest}
          />

          <SearchModal
            isOpen={isSearchOpen}
            onClose={() => setIsSearchOpen(false)}
            projects={projectsData}
            onSelectProject={(project) => {
              navigateTo(`/projects/${project.id}/`);
            }}
          />

          <NotificationDrawer
            isOpen={isNotificationsOpen}
            onClose={() => setIsNotificationsOpen(false)}
            notifications={notifications}
            onMarkAllAsRead={handleMarkAllRead}
          />
        </Suspense>
      </div>
    );
  }

  // 100% INTACT & PRESERVED APPROVED HOMEPAGE (URL '/')
  return (
    <div className="min-h-screen bg-[#171B18] text-[#F5F4EE] flex flex-col font-sans selection:bg-[#9DB79A] selection:text-[#171B18] relative">
      {/* 0. Luxe Webflow-Style Architectural Page Entrance Animation */}
      <PageEntranceLoader />

      {/* Smooth Luxury Cursor Follower matching luxe-heroconcept */}
      <LuxuryCursor />

      {/* Top Navigation Bar with exact logo, links, circular icons, and consultation CTA */}
      <Navbar
        activeTab={activeTab}
        onSelectTab={scrollToSection}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenNotifications={() => setIsNotificationsOpen(true)}
        onOpenConsultation={() => handleOpenContactWithSubject('Private Consultation')}
        unreadCount={unreadCount}
      />

      {/* Main Architectural Flow */}
      <main className="flex-1 w-full flex flex-col">
        {/* 1. PRESERVED APPROVED HERO SECTION (100% Intact as mandated) */}
        <Hero
          onExploreClick={() => scrollToSection('projects')}
          onContactClick={() => handleOpenContactWithSubject('Private Consultation')}
        />

        {/* 2. Selected Projects (Placed #2 before About section as requested) */}
        <EditorialGallery
          projects={projectsData}
          onSelectProject={(project) => setSelectedProject(project)}
          onViewAllProjects={() => navigateTo('/projects/')}
        />

        {/* 3. Why Choose Our Studio */}
        <WhyChooseUs onConsultClick={() => handleOpenContactWithSubject('Private Consultation')} />

        {/* 4. About Us */}
        <AboutUsSection onLearnMore={() => navigateTo('/about/')} />

        {/* 5. Interior Design by BHK Size */}
        <ResidentialServicesIndex
          onSelectService={handleSelectService}
        />

        {/* 6. Our Design Process */}
        <DesignApproach />

        {/* 7. Editorial Design Quotation */}
        <EditorialQuotation />

        {/* 8. Spatial Depth & Proportions 3D Interactive Experience */}
        <Spatial3DExperience />

        {/* 9. Studio Authority & Client Endorsements */}
        <StudioAuthority />

        {/* 10. Contact / Consultation */}
        <ConsultationCTA />

        {/* 11. Frequently Asked Questions */}
        <EditorialFAQ />
      </main>

      {/* Section 10: Premium Editorial Footer */}
      <EditorialFooter
        onNavClick={scrollToSection}
        onSelectService={handleSelectService}
        onOpenConsultation={() => handleOpenContactWithSubject('Private Consultation')}
      />

      {/* Discreet floating site directory */}
      <SiteDirectoryDrawer />

      {/* Lazy-Loaded Modals and Drawers (Suspense-wrapped so they do not block page initialization) */}
      <Suspense fallback={null}>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            onInquire={handleOpenContactWithSubject}
          />
        )}

        <ContactDrawer
          isOpen={isContactOpen}
          onClose={() => setIsContactOpen(false)}
          initialProjectInterest={contactProjectInterest}
        />

        <SearchModal
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
          projects={projectsData}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        <NotificationDrawer
          isOpen={isNotificationsOpen}
          onClose={() => setIsNotificationsOpen(false)}
          notifications={notifications}
          onMarkAllAsRead={handleMarkAllRead}
        />
      </Suspense>
    </div>
  );
}
