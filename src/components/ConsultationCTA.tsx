import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, MapPin, Mail, Phone, ShieldCheck } from 'lucide-react';

export const ConsultationCTA: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please provide your name.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate instant smooth submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 400);
  };

  return (
    <section 
      id="contact" 
      aria-label="Contact our team"
      className="w-full bg-[#F5F4EE] text-[#222722] py-24 sm:py-32 md:py-36 px-6 md:px-12 lg:px-16 border-t border-[#E5E2D9] relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto">
        
        {/* Editorial Heading matching the reference screenshot */}
        <div className="text-center space-y-3 mb-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#222722] font-editorial">
            Contact our team
          </h2>
          <p className="text-sm sm:text-base text-[#4B5549] max-w-xl mx-auto leading-relaxed font-body">
            If you&rsquo;re interested in talking to us about a potential design project, please reach out below. We aim to respond within one business day.
          </p>

          {/* Thin subtle divider line matching screenshot */}
          <div className="pt-2">
            <div className="w-14 h-[1px] bg-[#4B5549]/35 mx-auto" />
          </div>
        </div>

        {/* Form Container matching reference screenshot */}
        <div className="max-w-2xl mx-auto">
          {isSubmitted ? (
            <div className="py-12 px-8 rounded-3xl bg-[#EAE8E1]/80 border border-[#D8D4C8] text-center space-y-4 shadow-sm animate-in fade-in duration-300">
              <div className="w-14 h-14 rounded-full bg-[#4B5549]/15 border border-[#4B5549]/30 flex items-center justify-center text-[#222722] mx-auto">
                <CheckCircle2 className="w-7 h-7 text-[#4B5549]" />
              </div>
              <h3 className="text-2xl font-normal text-[#222722] font-editorial">
                Thank you, {formData.name}.
              </h3>
              <p className="text-sm text-[#4B5549] max-w-md mx-auto leading-relaxed font-body">
                We have received your message regarding your potential design project. Our design directors will review your inquiry and reach out to <strong className="text-[#222722] font-medium">{formData.email}</strong> within one business day.
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', email: '', message: '' });
                  }}
                  className="text-xs uppercase font-mono tracking-wider text-[#4B5549] hover:text-[#222722] underline underline-offset-4 cursor-pointer"
                >
                  Send another message &rarr;
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-7">
              {/* Field 1: NAME */}
              <div>
                <label 
                  htmlFor="contact-name"
                  className="block text-xs font-mono uppercase tracking-[0.2em] text-[#4B5549] font-medium mb-2.5"
                >
                  NAME
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your full name"
                  className={`w-full px-4 py-3.5 rounded-lg bg-[#EAE8E1]/85 border text-[#222722] text-sm font-body placeholder:text-neutral-400 focus:outline-none focus:bg-white focus:border-[#222722] transition-all ${
                    errors.name ? 'border-red-500 bg-red-50/50' : 'border-[#D5D2C7]'
                  }`}
                />
                {errors.name && (
                  <p className="text-xs text-red-600 mt-1 font-body">{errors.name}</p>
                )}
              </div>

              {/* Field 2: EMAIL ADDRESS */}
              <div>
                <label 
                  htmlFor="contact-email"
                  className="block text-xs font-mono uppercase tracking-[0.2em] text-[#4B5549] font-medium mb-2.5"
                >
                  EMAIL ADDRESS
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@example.com"
                  className={`w-full px-4 py-3.5 rounded-lg bg-[#EAE8E1]/85 border text-[#222722] text-sm font-body placeholder:text-neutral-400 focus:outline-none focus:bg-white focus:border-[#222722] transition-all ${
                    errors.email ? 'border-red-500 bg-red-50/50' : 'border-[#D5D2C7]'
                  }`}
                />
                {errors.email && (
                  <p className="text-xs text-red-600 mt-1 font-body">{errors.email}</p>
                )}
              </div>

              {/* Field 3: MESSAGE (OPTIONAL) */}
              <div>
                <label 
                  htmlFor="contact-message"
                  className="block text-xs font-mono uppercase tracking-[0.2em] text-[#4B5549] font-medium mb-2.5"
                >
                  MESSAGE (OPTIONAL)
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your property, location, timeline, or spatial requirements..."
                  className="w-full px-4 py-3.5 rounded-lg bg-[#EAE8E1]/85 border border-[#D5D2C7] text-[#222722] text-sm font-body placeholder:text-neutral-400 focus:outline-none focus:bg-white focus:border-[#222722] transition-all resize-y min-h-[140px]"
                />
              </div>

              {/* Action Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-9 py-4 rounded-full bg-[#222722] text-[#F5F4EE] hover:bg-[#171B18] font-medium text-xs sm:text-sm tracking-wide transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-3 cursor-pointer group"
                >
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#9DB79A]" />
                </button>

                <div className="flex items-center gap-2 text-xs text-[#4B5549] font-mono">
                  <ShieldCheck className="w-4 h-4 text-[#4B5549] shrink-0" />
                  <span>Strict confidentiality for all private commissions</span>
                </div>
              </div>
            </form>
          )}

          {/* Understated Studio Atelier Reference Bar */}
          <div className="mt-16 pt-8 border-t border-[#E5E2D9] grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-[#4B5549] font-body">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#222722] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-[#222722] block font-heading">London &middot; Paris</span>
                <span>42 Kensington Church St, London</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Mail className="w-4 h-4 text-[#222722] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-[#222722] block font-heading">Direct Inquiries</span>
                <span>atelier@cinecore-design.com</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Phone className="w-4 h-4 text-[#222722] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-[#222722] block font-heading">Atelier Phone</span>
                <span>+44 20 7946 0912</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
