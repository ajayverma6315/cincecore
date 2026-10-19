import React, { useState, useEffect } from 'react';
import { SubpageHeader } from '../components/SubpageHeader';
import { ArrowUpRight, CheckCircle2, Clock, Mail, MapPin, Phone, ShieldCheck, Sparkles } from 'lucide-react';

interface ContactConsultationPageProps {
  initialSubject?: string;
}

export const ContactConsultationPage: React.FC<ContactConsultationPageProps> = ({
  initialSubject = '',
}) => {
  useEffect(() => {
    document.title = 'Contact & Book Consultation — Cinecore Interior Design';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: initialSubject || '3 BHK Interior Design',
    location: '',
    budgetTier: '$100k – $250k',
    timeline: '3 – 6 Months',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 600);
  };

  const steps = [
    {
      step: '01',
      title: 'Architectural Dossier Review',
      desc: 'Our senior interior architects examine your property plans and requirements within 24 hours.',
    },
    {
      step: '02',
      title: '45-Min Discovery Dialogue',
      desc: 'A private video or in-studio session to explore volumetric flow, stone preferences, and acoustic requirements.',
    },
    {
      step: '03',
      title: 'Concept Blueprint & Fixed Bid',
      desc: 'We present a preliminary 3D concept sketch, physical material board, and a transparent itemized quotation.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#171B18] text-[#F5F4EE]">
      <SubpageHeader
        breadcrumbs={[{ label: 'Contact & Book Consultation' }]}
        eyebrow="ATELIER COMMISSIONS CALENDAR"
        title="Begin Your Residential Dialogue"
        subtitle="We invite you to discuss your residence with our principal architects. Every project begins with a careful exploration of spatial flow, natural daylight angles, and material aspirations."
        metrics={[
          { label: 'Initial Review', value: 'Within 24 Hours' },
          { label: 'Consultation Mode', value: 'In-Studio or Video' },
          { label: 'Confidentiality', value: '100% NDA Protected' },
        ]}
      />

      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#1C201D] border border-white/5 shadow-2xl">
              {submitted ? (
                <div className="text-center py-12 space-y-6 animate-in fade-in zoom-in-95 duration-400">
                  <div className="w-16 h-16 rounded-full bg-[#9DB79A]/20 text-[#9DB79A] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                    Consultation Dossier Received
                  </h3>
                  <p className="text-sm text-[#B7B9AF] max-w-md mx-auto font-body leading-relaxed">
                    Thank you, <strong className="text-white">{form.name}</strong>. Your inquiry regarding <strong className="text-[#9DB79A]">{form.serviceType}</strong> has been routed to our Senior Architectural Partner. We will reach out within 24 hours to schedule your discovery session.
                  </p>
                  <div className="p-4 rounded-2xl bg-[#171B18] border border-[#222722] text-xs font-mono text-[#B7B9AF] max-w-xs mx-auto">
                    REFERENCE ID: CIN-{Math.floor(100000 + Math.random() * 900000)}
                  </div>
                  <div className="pt-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-full bg-[#222722] hover:bg-[#2C322C] text-xs font-semibold text-white uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-white font-heading mb-1">
                      Private Commission Inquiry
                    </h2>
                    <p className="text-xs text-[#B7B9AF] font-body">
                      Please provide details about your property footprint and timeline.
                    </p>
                  </div>

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#B7B9AF] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="e.g. Alexandra Sterling"
                        className="w-full bg-[#171B18] border border-[#222722] rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#9DB79A]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#B7B9AF] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="alexandra@example.com"
                        className="w-full bg-[#171B18] border border-[#222722] rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#9DB79A]"
                      />
                    </div>
                  </div>

                  {/* Phone and Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#B7B9AF] mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+44 20 7000 0000"
                        className="w-full bg-[#171B18] border border-[#222722] rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#9DB79A]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#B7B9AF] mb-2">
                        Property City & Country *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.location}
                        onChange={(e) => setForm({ ...form, location: e.target.value })}
                        placeholder="e.g. Kensington, London"
                        className="w-full bg-[#171B18] border border-[#222722] rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#9DB79A]"
                      />
                    </div>
                  </div>

                  {/* Service Type Selection */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#B7B9AF] mb-2">
                      Residential Service Typology *
                    </label>
                    <select
                      value={form.serviceType}
                      onChange={(e) => setForm({ ...form, serviceType: e.target.value })}
                      className="w-full bg-[#171B18] border border-[#222722] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#9DB79A]"
                    >
                      <option value="1 BHK Interior Design">1 BHK Interior Design (550 – 850 sq ft)</option>
                      <option value="2 BHK Interior Design">2 BHK Interior Design (1,100 – 1,450 sq ft)</option>
                      <option value="3 BHK Interior Design">3 BHK Interior Design (1,800 – 2,600 sq ft)</option>
                      <option value="4 BHK Interior Design">4 BHK Interior Design (3,000 – 4,500 sq ft)</option>
                      <option value="Penthouse & Private Villa">Penthouse & Private Villa Architecture (5,000+ sq ft)</option>
                      <option value="Culinary & Kitchen Studio">Architectural Kitchen & Culinary Studio</option>
                      <option value="Master Bedroom Sanctuary">Master Bedroom Sanctuary Suite</option>
                    </select>
                  </div>

                  {/* Budget & Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#B7B9AF] mb-2">
                        Estimated Budget Bracket
                      </label>
                      <select
                        value={form.budgetTier}
                        onChange={(e) => setForm({ ...form, budgetTier: e.target.value })}
                        className="w-full bg-[#171B18] border border-[#222722] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#9DB79A]"
                      >
                        <option value="$45k – $75k">$45,000 – $75,000 (1 BHK / Single Sanctuary)</option>
                        <option value="$75k – $130k">$75,000 – $130,000 (2 BHK Full Overhaul)</option>
                        <option value="$130k – $220k">$130,000 – $220,000 (3 BHK Signature Residence)</option>
                        <option value="$220k – $400k+">$220,000 – $400,000+ (4 BHK Penthouse / Haute)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#B7B9AF] mb-2">
                        Target Timeline
                      </label>
                      <select
                        value={form.timeline}
                        onChange={(e) => setForm({ ...form, timeline: e.target.value })}
                        className="w-full bg-[#171B18] border border-[#222722] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#9DB79A]"
                      >
                        <option value="Immediate (Next 4 weeks)">Immediate (Next 4 weeks)</option>
                        <option value="3 – 6 Months">3 – 6 Months</option>
                        <option value="6 – 12 Months">6 – 12 Months</option>
                        <option value="Planning & Exploration Phase">Planning & Exploration Phase</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#B7B9AF] mb-2">
                      Architectural Vision & Spatial Notes
                    </label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Share notes regarding existing layout, structural walls, natural lighting, or specific stone preferences..."
                      className="w-full bg-[#171B18] border border-[#222722] rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#9DB79A]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-full bg-[#9DB79A] hover:bg-[#8ca889] text-[#171B18] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg transition-all font-heading"
                  >
                    <span>{isSubmitting ? 'Transmitting Dossier...' : 'Confirm Consultation Request'}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-[#B7B9AF] text-center font-mono">
                    All plans and communications are bound by our strict Client Privacy Charter.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Right Studios & Process Info (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Direct Studio Contacts */}
            <div className="p-8 rounded-3xl bg-[#1C201D] border border-white/5 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#9DB79A] font-semibold block">
                ATELIER STUDIOS
              </span>
              <div className="space-y-4">
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-white font-heading">London Kensington</h4>
                  <p className="text-xs text-[#B7B9AF] font-body">42 Kensington Church Street, London W8 4DB</p>
                  <p className="text-xs font-mono text-[#9DB79A]">+44 20 7946 0912</p>
                </div>
                <div className="pt-3 border-t border-[#222722] space-y-1">
                  <h4 className="text-base font-bold text-white font-heading">Paris Saint-Germain</h4>
                  <p className="text-xs text-[#B7B9AF] font-body">18 Rue de l’Université, 75007 Paris</p>
                  <p className="text-xs font-mono text-[#9DB79A]">+33 1 42 68 55 00</p>
                </div>
                <div className="pt-3 border-t border-[#222722] space-y-1">
                  <h4 className="text-base font-bold text-white font-heading">New York Tribeca</h4>
                  <p className="text-xs text-[#B7B9AF] font-body">54 Franklin Street, Tribeca, New York NY 10013</p>
                  <p className="text-xs font-mono text-[#9DB79A]">+1 212 555 0198</p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#222722] flex items-center gap-3 text-xs text-[#B7B9AF]">
                <Mail className="w-4 h-4 text-[#9DB79A]" />
                <span>atelier@cinecore-design.com</span>
              </div>
            </div>

            {/* What Happens Next */}
            <div className="p-8 rounded-3xl bg-[#141815] border border-[#222722] space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#9DB79A] font-semibold block">
                WHAT HAPPENS NEXT
              </span>
              <div className="space-y-4">
                {steps.map((st) => (
                  <div key={st.step} className="flex items-start gap-3">
                    <span className="text-xs font-mono font-bold text-[#9DB79A] mt-0.5">{st.step}</span>
                    <div>
                      <h5 className="text-xs font-bold text-white font-heading">{st.title}</h5>
                      <p className="text-xs text-[#B7B9AF] font-body">{st.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
