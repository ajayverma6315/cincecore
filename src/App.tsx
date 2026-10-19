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
import { SignatureProjectStory } from './components/SignatureProjectStory';
import { ConsultationCTA } from './components/ConsultationCTA';
import { EditorialFAQ } from './components/EditorialFAQ';
import { EditorialFooter } from './components/EditorialFooter';
import { PageEntranceLoader } from './components/PageEntranceLoader';
import { LuxuryCursor } from './components/LuxuryCursor';
import { projectsData, notificationsData } from './data/projectsData';
import { RESIDENTIAL_SERVICES, ResidentialService, getServiceBySlug } from './data/servicesData';
import { Project } from './utils/projects';

// Lazy load overlay modals and dedicated subpages to minimize initial bundle size and maximize loading speed
const ServiceDetailPage = lazy(() =>
  import('./components/ServiceDetailPage').then((m) => ({ default: m.ServiceDetailPage }))
);
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

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeService, setActiveService] = useState<ResidentialService | null>(null);
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);
  const [contactProjectInterest, setContactProjectInterest] = useState<string>('');
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState<boolean>(false);
  const [notifications, setNotifications] = useState(notificationsData);

  const unreadCount = notifications.filter((n) => !n.read).length;

  // Sync with browser URL for dedicated service pages (e.g. /services/2-bhk)
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path.startsWith('/services/')) {
        const slug = path.replace('/services/', '');
        const found = getServiceBySlug(slug);
        if (found) {
          setActiveService(found);
          return;
        }
      }
      setActiveService(null);
    };

    handlePopState();
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleSelectService = (service: ResidentialService) => {
    setActiveService(service);
    window.history.pushState({}, '', `/services/${service.slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setActiveService(null);
    window.history.pushState({}, '', '/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenContactWithSubject = (subject: string) => {
    setContactProjectInterest(subject);
    setIsContactOpen(true);
  };

  const handleMarkAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const scrollToSection = (id: string) => {
    if (activeService) {
      handleBackToHome();
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }

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

  // If viewing a dedicated BHK / service page, render the standalone service experience
  if (activeService) {
    return (
      <div className="min-h-screen bg-[#171B18] text-[#F5F4EE] flex flex-col font-sans selection:bg-[#9DB79A] selection:text-[#171B18]">
        <Navbar
          activeTab="services"
          onSelectTab={scrollToSection}
          onOpenSearch={() => setIsSearchOpen(true)}
          onOpenNotifications={() => setIsNotificationsOpen(true)}
          onOpenConsultation={() => handleOpenContactWithSubject(activeService.name)}
          unreadCount={unreadCount}
        />

        <main className="flex-1">
          <Suspense fallback={<div className="min-h-screen bg-[#171B18] flex items-center justify-center text-[#9DB79A] font-mono text-xs">LOADING SERVICE...</div>}>
            <ServiceDetailPage
              service={activeService}
              onBack={handleBackToHome}
              onInquire={(serviceName) => handleOpenContactWithSubject(serviceName)}
            />
          </Suspense>
        </main>

        <EditorialFooter
          onNavClick={scrollToSection}
          onSelectService={handleSelectService}
          onOpenConsultation={() => handleOpenContactWithSubject(activeService.name)}
        />

        <ContactDrawer
          isOpen={isContactOpen}
          onClose={() => setIsContactOpen(false)}
          initialProjectInterest={contactProjectInterest}
        />
      </div>
    );
  }

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

        {/* 2. About Us (Matching reference image composition) */}
        <AboutUsSection onLearnMore={() => scrollToSection('studio')} />

        {/* 3. Our Services (Residential Practice Index with dedicated BHK navigation) */}
        <ResidentialServicesIndex
          onSelectService={handleSelectService}
        />

        {/* 4. Section A: Editorial Design Quotation */}
        <EditorialQuotation />

        {/* Why Choose Us: The Cinecore Standard & Architectural Excellence (Placed directly above Spatial Study) */}
        <WhyChooseUs onConsultClick={() => handleOpenContactWithSubject('Private Consultation')} />

        {/* 5. Section B: Spatial Depth & Proportions Interactive Experience */}
        <Spatial3DExperience />

        {/* 6. Studio Authority & Client Endorsements */}
        <StudioAuthority />

        {/* 7. Selected Projects (Architectural Editorial Gallery) */}
        <EditorialGallery
          projects={projectsData}
          onSelectProject={(project) => setSelectedProject(project)}
          onViewAllProjects={() => setSelectedProject(projectsData[0])}
        />

        {/* 8. Design Process & Project Storytelling */}
        <SignatureProjectStory
          onOpenCaseStudy={() => setSelectedProject(projectsData[0])}
        />

        {/* 9. Contact / Consultation */}
        <ConsultationCTA />

        {/* 10. Frequently Asked Questions */}
        <EditorialFAQ />
      </main>

      {/* Section 10: Premium Editorial Footer */}
      <EditorialFooter
        onNavClick={scrollToSection}
        onSelectService={handleSelectService}
        onOpenConsultation={() => handleOpenContactWithSubject('Private Consultation')}
      />

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
