import React, { useState, useEffect } from 'react';
import { X, CheckCircle, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { InquiryForm, validateInquiryForm } from '../utils/projects';

interface ContactDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  initialProjectInterest?: string;
}

export const ContactDrawer: React.FC<ContactDrawerProps> = ({
  isOpen,
  onClose,
  initialProjectInterest = '',
}) => {
  const [formData, setFormData] = useState<Partial<InquiryForm>>({
    name: '',
    email: '',
    phone: '',
    serviceType: 'Full Residence',
    spaceType: 'Entire Home',
    budgetTier: '$50,000 - $100,000',
    timeline: 'Within 3 months',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [bookingRef, setBookingRef] = useState<string>('');

  useEffect(() => {
    if (initialProjectInterest) {
      setFormData((prev) => ({
        ...prev,
        message: `I am interested in designing a space inspired by "${initialProjectInterest}".`,
      }));
    }
  }, [initialProjectInterest]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateInquiryForm(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    const refCode = `AS-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(refCode);
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setBookingRef('');
    setFormData({
      name: '',
      email: '',
      phone: '',
      serviceType: 'Full Residence',
      spaceType: 'Entire Home',
      budgetTier: '$50,000 - $100,000',
      timeline: 'Within 3 months',
      message: '',
    });
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-drawer-title"
      className="fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-xl h-full bg-neutral-900 border-l border-white/10 shadow-2xl flex flex-col overflow-y-auto animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-6 md:p-8 border-b border-white/10 flex items-center justify-between sticky top-0 bg-neutral-900/90 backdrop-blur-md z-10">
          <div>
            <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-widest block mb-1">
              Private Commission
            </span>
            <h2 id="contact-drawer-title" className="text-xl md:text-2xl font-bold text-white">
              Studio Consultation
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer transition-colors"
            aria-label="Close contact drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8 flex-1">
          {isSubmitted ? (
            <div className="py-12 flex flex-col items-center text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <CheckCircle className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold block mb-2">
                  Inquiry Logged
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">
                  We look forward to creating your space.
                </h3>
                <p className="text-sm text-neutral-300 max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Reference ID{' '}
                  <code className="text-emerald-300 font-mono font-semibold">{bookingRef}</code> has been assigned.
                  Our senior design partner will contact you within 24 hours.
                </p>
              </div>

              <div className="w-full bg-neutral-950 p-4 rounded-2xl border border-white/10 text-left text-xs space-y-2">
                <div className="flex justify-between text-neutral-400">
                  <span>Selected Service:</span>
                  <span className="text-white font-medium">{formData.serviceType}</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>Estimated Budget:</span>
                  <span className="text-white font-medium">{formData.budgetTier}</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>Contact Email:</span>
                  <span className="text-white font-medium">{formData.email}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={resetForm}
                className="w-full py-3 bg-white hover:bg-neutral-100 text-neutral-900 rounded-full font-medium text-sm transition-all cursor-pointer"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Service Type Selection */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                  Scope of Commission <span className="text-emerald-400">*</span>
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    'Full Residence',
                    'Single Space',
                    'Spatial Architecture',
                    'Material Consultation',
                  ].map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => setFormData({ ...formData, serviceType: service as any })}
                      className={`py-2.5 px-3 text-xs font-medium rounded-xl border text-left transition-colors cursor-pointer ${
                        formData.serviceType === service
                          ? 'border-emerald-500 bg-emerald-500/10 text-white font-semibold'
                          : 'border-white/10 bg-neutral-950/40 text-neutral-300 hover:border-white/20'
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
                {errors.serviceType && (
                  <p className="text-rose-400 text-xs mt-1">{errors.serviceType}</p>
                )}
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Your Full Name <span className="text-emerald-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name || ''}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Julian Vance"
                    className="w-full bg-neutral-950 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/40"
                  />
                  {errors.name && <p className="text-rose-400 text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Email Address <span className="text-emerald-400">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email || ''}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="julian@example.com"
                    className="w-full bg-neutral-950 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/40"
                  />
                  {errors.email && <p className="text-rose-400 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Phone and Space Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    value={formData.phone || ''}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-neutral-950 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white/40"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Target Room / Space
                  </label>
                  <select
                    value={formData.spaceType || 'Entire Home'}
                    onChange={(e) => setFormData({ ...formData, spaceType: e.target.value })}
                    className="w-full bg-neutral-950 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-white/40"
                  >
                    <option value="Entire Home">Entire Home / Villa</option>
                    <option value="Living Salon">Living Salon</option>
                    <option value="Dining Room">Dining Room</option>
                    <option value="Master Suite">Master Suite</option>
                    <option value="Kitchen & Pantry">Kitchen & Pantry</option>
                    <option value="Private Library / Study">Private Library / Study</option>
                  </select>
                </div>
              </div>

              {/* Budget Tier */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                  Investment Allocation <span className="text-emerald-400">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['$25k - $50k', '$50k - $100k', '$100k - $250k', '$250k+'].map((tier) => (
                    <button
                      key={tier}
                      type="button"
                      onClick={() => setFormData({ ...formData, budgetTier: tier })}
                      className={`py-2 px-2 text-xs font-medium rounded-xl border text-center transition-colors cursor-pointer ${
                        formData.budgetTier === tier
                          ? 'border-emerald-500 bg-emerald-500/10 text-white font-semibold'
                          : 'border-white/10 bg-neutral-950/40 text-neutral-300 hover:border-white/20'
                      }`}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                  Project Notes & Aesthetic Vision
                </label>
                <textarea
                  rows={3}
                  value={formData.message || ''}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about the property, natural lighting, preferred woods or stones..."
                  className="w-full bg-neutral-950 border border-white/10 rounded-xl p-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white/40"
                />
              </div>

              {/* Privacy note */}
              <div className="flex items-center gap-2 text-xs text-neutral-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Strict confidentiality guaranteed for all client residences.</span>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-4 bg-white hover:bg-neutral-100 text-neutral-950 font-semibold rounded-full text-sm shadow-xl flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <span>Submit Consultation Request</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
