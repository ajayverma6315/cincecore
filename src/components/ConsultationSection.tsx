import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Calendar, Phone, Mail } from 'lucide-react';
import { InquiryForm, validateInquiryForm } from '../utils/projects';

export const ConsultationSection: React.FC = () => {
  const [formData, setFormData] = useState<Partial<InquiryForm>>({
    name: '',
    email: '',
    phone: '',
    serviceType: 'Full Residence',
    spaceType: '3 BHK Residence',
    budgetTier: '$50,000 - $100,000',
    timeline: 'Within 30–60 Days',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [bookingRef, setBookingRef] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateInquiryForm(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    const ref = `AS-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(ref);
    setIsSubmitted(true);
  };

  return (
    <section id="consultation" className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: Headline & Information */}
        <div className="lg:col-span-5 space-y-6">
          <span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest block">
            Private Commission
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Schedule a Design Consultation
          </h2>
          <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
            Every commission begins with a discovery dialogue. We discuss your residence’s architectural bones, spatial aspirations, lighting, and timeline.
          </p>

          <div className="space-y-4 pt-4 border-t border-white/10 text-xs sm:text-sm text-neutral-400">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0">
                <Calendar className="w-4 h-4 text-emerald-400" />
              </div>
              <div>
                <strong className="text-white block font-medium">Initial Spatial Walkthrough</strong>
                <span>45-minute virtual or in-atelier session with a senior design director.</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
              </div>
              <div>
                <strong className="text-white block font-medium">Confidential &amp; Tailored</strong>
                <span>Non-disclosure guaranteed for high-profile private properties.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: The Interactive Consultation Form */}
        <div className="lg:col-span-7 bg-neutral-900/60 rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl">
          {isSubmitted ? (
            <div className="py-10 text-center space-y-6 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold block mb-1">
                  Commission Inquired
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Thank You, {formData.name}.
                </h3>
                <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                  Your consultation request <strong className="text-emerald-400 font-mono">{bookingRef}</strong> has been logged with our London &amp; New York ateliers. We will contact you within 24 business hours.
                </p>
              </div>

              <div className="bg-neutral-950 p-4 rounded-2xl border border-white/10 text-left text-xs max-w-md mx-auto space-y-2">
                <div className="flex justify-between text-neutral-400">
                  <span>Scope:</span>
                  <span className="text-white font-medium">{formData.spaceType}</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>Allocation Tier:</span>
                  <span className="text-white font-medium">{formData.budgetTier}</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>Contact:</span>
                  <span className="text-white font-medium">{formData.email}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="text-xs text-neutral-400 hover:text-white underline underline-offset-4 cursor-pointer"
              >
                Submit another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* BHK / Typology Selector */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                  Residence Scale / Typology <span className="text-emerald-400">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['2 BHK Suite', '3 BHK Residence', '4 BHK Penthouse', 'Estate Villa'].map((scale) => (
                    <button
                      key={scale}
                      type="button"
                      onClick={() => setFormData({ ...formData, spaceType: scale })}
                      className={`py-2 px-2 text-xs font-medium rounded-xl border text-center transition-colors cursor-pointer ${
                        formData.spaceType === scale
                          ? 'border-emerald-500 bg-emerald-500/10 text-white font-semibold'
                          : 'border-white/10 bg-neutral-950/40 text-neutral-400 hover:border-white/20'
                      }`}
                    >
                      {scale}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Full Name <span className="text-emerald-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name || ''}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Lord / Lady / Dr. / Mr. / Ms."
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
                    placeholder="client@residence.com"
                    className="w-full bg-neutral-950 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/40"
                  />
                  {errors.email && <p className="text-rose-400 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Phone and Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Phone Contact (Optional)
                  </label>
                  <input
                    type="tel"
                    value={formData.phone || ''}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+44 20 7946 0912"
                    className="w-full bg-neutral-950 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white/40"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Estimated Budget Tier
                  </label>
                  <select
                    value={formData.budgetTier}
                    onChange={(e) => setFormData({ ...formData, budgetTier: e.target.value })}
                    className="w-full bg-neutral-950 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-white/40"
                  >
                    <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                    <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                    <option value="$100,000 - $250,000">$100,000 - $250,000</option>
                    <option value="$250,000+">$250,000+ (Turnkey Estate)</option>
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                  Property Notes &amp; Preferred Atmosphere
                </label>
                <textarea
                  rows={3}
                  value={formData.message || ''}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about the property location, natural lighting, or specific styles like the Olive Botanical Salon..."
                  className="w-full bg-neutral-950 border border-white/10 rounded-xl p-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white/40"
                />
              </div>

              {/* Submit CTA Button */}
              <button
                type="submit"
                className="w-full py-4 bg-white hover:bg-neutral-100 text-neutral-950 font-semibold rounded-full text-sm shadow-xl flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <span>Request Private Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
