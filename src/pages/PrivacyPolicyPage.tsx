import React, { useEffect } from 'react';
import { SubpageHeader } from '../components/SubpageHeader';
import { ShieldCheck, Lock, Eye, FileText, Check } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Privacy Policy & Confidentiality Charter — Cinecore';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const sections = [
    {
      title: '1. Commitment to Client Discretion & Confidentiality',
      body: [
        'At Cinecore Interior Design Atelier, we specialize in high-value private residential commissions. We recognize that property floorplans, security layouts, interior photography, and private addresses represent sensitive personal information.',
        'All client interactions—from preliminary feasibility consultations to on-site project handover—are treated under strict confidentiality protocols. Non-Disclosure Agreements (NDAs) are executed prior to reviewing sensitive building blueprints upon request.',
      ],
    },
    {
      title: '2. Information We Collect',
      body: [
        'Contact Credentials: Name, email address, telephone number, and communication preferences provided through our inquiry forms.',
        'Residential Specifications: Property address, unit number, square footage, CAD floorplans, structural engineering reports, and lifestyle usage briefs.',
        'Billing & Financial Details: Payment schedules, milestone transaction records, and invoicing credentials managed through PCI-DSS compliant financial conduits.',
      ],
    },
    {
      title: '3. How Your Information Is Utilized',
      body: [
        'Architectural Feasibility Audits: Evaluating space planning, daylight analysis, and structural partition viability.',
        'Turnkey Project Execution: Coordinating bespoke joinery fabrication, noble stone block extraction from European quarries, and on-site craftsman scheduling.',
        'Client Communication: Transmitting milestone 3D rendering updates, material palette options, and formal project documentation.',
      ],
    },
    {
      title: '4. Photography & Publication Rights',
      body: [
        'We never publish residential photographs, room locations, or owner names without express written authorization. Where projects are featured in architectural journals (such as Architectural Digest or Elle Decor), all identifying personal artefacts, family portraits, and property numbers are meticulously obscured or curated in advance.',
      ],
    },
    {
      title: '5. Subcontractor & Craftsmen Disclosures',
      body: [
        'To execute our commissions, we work with trusted structural engineers, MEP consultants, Italian stone carvers, and French master joiners. These collaborators are bound by reciprocal confidentiality covenants and are granted access solely to relevant technical drawings without personal identifiers.',
      ],
    },
    {
      title: '6. Digital Vaults & Data Retention',
      body: [
        'All CAD drawings, 3D models, and contract documents are stored in encrypted cloud vaults with role-based access restrictions. Client project files are archived for the duration of the 10-year craftsmanship warranty period to support future maintenance or interior additions.',
      ],
    },
    {
      title: '7. Your Rights under GDPR and International Law',
      body: [
        'You maintain the absolute right to inspect, correct, export, or request the deletion of your personal contact data at any time. To exercise these rights or request an executed NDA, contact our atelier legal desk at legal@cinecore-design.com.',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#171B18] text-[#F5F4EE]">
      <SubpageHeader
        breadcrumbs={[{ label: 'Privacy Policy' }]}
        eyebrow="CLIENT DISCRETION CHARTER"
        title="Privacy Policy & Data Protection"
        subtitle="How Cinecore safeguards client identity, property blueprints, and confidential residential commissions across our London, Paris, and New York ateliers."
        metrics={[
          { label: 'Effective Date', value: 'October 2026' },
          { label: 'Standard', value: 'GDPR & Global Privacy' },
          { label: 'NDA Availability', value: 'Prior to Floorplan Review' },
        ]}
      />

      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {sections.map((sec, i) => (
            <div key={i} className="p-8 rounded-3xl bg-[#1C201D] border border-white/5 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white font-heading">
                {sec.title}
              </h2>
              {sec.body.map((p, pi) => (
                <p key={pi} className="text-sm sm:text-base text-[#B7B9AF] leading-relaxed font-body">
                  {p}
                </p>
              ))}
            </div>
          ))}

          <div className="p-8 rounded-3xl bg-[#141815] border border-[#222722] text-center space-y-4">
            <h3 className="text-lg font-bold text-white font-heading">Have questions regarding client confidentiality?</h3>
            <p className="text-xs sm:text-sm text-[#B7B9AF] font-body max-w-lg mx-auto">
              Our studio managing partner is available to discuss custom NDA terms for high-profile residences and estate portfolios.
            </p>
            <p className="text-xs font-mono text-[#9DB79A]">atelier-legal@cinecore-design.com &middot; +44 20 7946 0912</p>
          </div>
        </div>
      </section>
    </div>
  );
};
