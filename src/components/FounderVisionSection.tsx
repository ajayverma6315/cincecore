import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Camera, Edit3, Check, X, Quote, Sparkles } from 'lucide-react';
import { navigateTo } from '../utils/navigation';

interface FounderData {
  name: string;
  role: string;
  story: string;
  quote: string;
  photoUrl: string;
}

const DEFAULT_FOUNDER: FounderData = {
  name: 'Your Name',
  role: 'Founder & Principal Designer',
  story: 'Cinecore was established from a simple yet powerful idea: that interior design should never feel complex or cookie-cutter. Every space has its own rhythm, and every homeowner deserves an environment designed thoughtfully around how they actually live, move, and unwind.',
  quote: 'True luxury in a home is not about excess—it is the feeling of entering a space where light, proportion, and materials exist in quiet harmony.',
  photoUrl: '/src/assets/images/project_reading_lounge_1792337182414.webp',
};

const STORAGE_KEY = 'cinecore_founder_profile_v1';

export const FounderVisionSection: React.FC = () => {
  const [profile, setProfile] = useState<FounderData>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      // Ignore fallback
    }
    return DEFAULT_FOUNDER;
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<FounderData>(profile);
  const [isSavedNotice, setIsSavedNotice] = useState(false);

  // Sync formData when opening edit modal
  const handleOpenEdit = () => {
    setFormData(profile);
    setIsEditing(true);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setFormData((prev) => ({ ...prev, photoUrl: reader.result as string }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setProfile(formData);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    } catch (e) {
      // localStorage quota safeguard
    }
    setIsEditing(false);
    setIsSavedNotice(true);
    setTimeout(() => setIsSavedNotice(false), 3000);
  };

  const handleReset = () => {
    setProfile(DEFAULT_FOUNDER);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {}
    setIsEditing(false);
  };

  return (
    <section
      aria-label="Who Established Cinecore"
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 border-b border-[#222722] bg-[#161B17] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Subtle Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-14">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#9DB79A] font-semibold font-mono block mb-2">
              THE VISION BEHIND CINECORE
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white font-heading">
              Who Established This Studio
            </h2>
          </div>

          {/* Quick Edit Details Button */}
          <div className="flex items-center gap-3">
            {isSavedNotice && (
              <span className="text-xs text-[#9DB79A] font-mono flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> Details Updated
              </span>
            )}
            <button
              onClick={handleOpenEdit}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#222722] hover:bg-[#2c322c] text-xs font-mono text-[#B7B9AF] hover:text-white border border-white/10 transition-colors cursor-pointer"
              title="Click to customize founder photo and name details"
            >
              <Edit3 className="w-3 h-3 text-[#9DB79A]" />
              <span>Edit Details</span>
            </button>
          </div>
        </div>

        {/* 2-Column Founder Profile Card */}
        <div className="rounded-3xl bg-[#1C201D] border border-white/10 p-6 sm:p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Decorative Glow */}
          <div 
            aria-hidden="true"
            className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#9DB79A]/10 blur-3xl pointer-events-none"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">
            {/* Left Column: Portrait Photo with Refined Architectural Framing */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-sm lg:max-w-none">
                <div className="relative aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-[#121613]">
                  <img
                    src={profile.photoUrl}
                    alt={profile.name}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121613]/85 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Bottom Portrait Name Plaque */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#171B18]/90 backdrop-blur-md border border-white/10 text-left">
                    <p className="text-base font-bold text-white font-heading truncate">
                      {profile.name}
                    </p>
                    <p className="text-xs text-[#9DB79A] font-mono tracking-wide truncate">
                      {profile.role}
                    </p>
                  </div>
                </div>

                {/* Corner Quick Photo Trigger */}
                <button
                  onClick={handleOpenEdit}
                  className="absolute top-3 right-3 p-2.5 rounded-full bg-[#171B18]/80 hover:bg-[#171B18] text-white/80 hover:text-white backdrop-blur-md border border-white/15 transition-all cursor-pointer shadow-lg"
                  title="Change photo and details"
                >
                  <Camera className="w-4 h-4 text-[#9DB79A]" />
                </button>
              </div>
            </div>

            {/* Right Column: Founder Story, Philosophy, and Vision */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#9DB79A] font-mono font-semibold block mb-2">
                  FOUNDER’S STATEMENT
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white font-heading leading-tight">
                  {profile.name}
                </h3>
                <p className="text-sm font-mono text-[#B7B9AF] mt-1">
                  {profile.role}
                </p>
              </div>

              {/* The Origin / Idea Story */}
              <p className="text-base sm:text-lg text-[#E0E2D9] font-body leading-relaxed">
                {profile.story}
              </p>

              {/* Signature Quote Callout */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#141815] border-l-2 border-[#9DB79A] border-y border-r border-white/5 space-y-2 relative">
                <Quote className="w-6 h-6 text-[#9DB79A]/40 absolute top-4 right-4" />
                <p className="text-sm sm:text-base italic text-[#F5F4EE] font-body leading-relaxed pr-8">
                  “{profile.quote}”
                </p>
              </div>

              {/* Three Founder Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-3.5 rounded-xl bg-[#141815] border border-white/5">
                  <span className="text-xs font-mono text-[#9DB79A] block mb-1">01 &middot; VISION</span>
                  <p className="text-xs text-white/90 font-medium font-heading">
                    Spatial Harmony
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-[#141815] border border-white/5">
                  <span className="text-xs font-mono text-[#9DB79A] block mb-1">02 &middot; CRAFT</span>
                  <p className="text-xs text-white/90 font-medium font-heading">
                    Noble Materials
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-[#141815] border border-white/5">
                  <span className="text-xs font-mono text-[#9DB79A] block mb-1">03 &middot; PROMISE</span>
                  <p className="text-xs text-white/90 font-medium font-heading">
                    Personal Oversight
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => navigateTo('/contact/')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#9DB79A] hover:bg-[#8ca889] text-[#171B18] font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-md font-heading"
                >
                  <span>Connect With Our Team</span>
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </button>
                <button
                  onClick={handleOpenEdit}
                  className="text-xs text-[#B7B9AF] hover:text-[#9DB79A] transition-colors underline underline-offset-4 cursor-pointer font-mono"
                >
                  Personalize photo & text details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* EDIT MODAL / DRAWER */}
      {isEditing && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="founder-edit-title"
        >
          <div className="bg-[#1C201D] border border-white/10 rounded-3xl w-full max-w-xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl text-[#F5F4EE] relative">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#9DB79A]" />
                <h3 id="founder-edit-title" className="text-lg font-bold font-heading text-white">
                  Customize Founder Details
                </h3>
              </div>
              <button
                onClick={() => setIsEditing(false)}
                className="p-1.5 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-5">
              {/* Photo Upload or URL */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#9DB79A] mb-2 font-semibold">
                  Founder Photo
                </label>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-20 rounded-xl overflow-hidden border border-white/15 shrink-0 bg-[#141815]">
                    <img
                      src={formData.photoUrl}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 space-y-2">
                    <label className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#222722] hover:bg-[#2c322c] border border-white/10 text-xs font-semibold cursor-pointer text-white transition-colors">
                      <Camera className="w-3.5 h-3.5 text-[#9DB79A]" />
                      <span>Upload from Device</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </label>
                    <input
                      type="text"
                      placeholder="Or enter image URL"
                      value={formData.photoUrl}
                      onChange={(e) => setFormData({ ...formData, photoUrl: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-[#141815] border border-white/10 text-xs text-white focus:outline-none focus:border-[#9DB79A]"
                    />
                  </div>
                </div>
              </div>

              {/* Full Name */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#9DB79A] mb-1.5 font-semibold">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Rahul Sharma / Elena Mercier"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#141815] border border-white/10 text-sm text-white focus:outline-none focus:border-[#9DB79A]"
                />
              </div>

              {/* Role / Designation */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#9DB79A] mb-1.5 font-semibold">
                  Designation / Role
                </label>
                <input
                  type="text"
                  required
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  placeholder="e.g. Founder & Principal Designer"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#141815] border border-white/10 text-sm text-white focus:outline-none focus:border-[#9DB79A]"
                />
              </div>

              {/* Story / Who established the idea */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#9DB79A] mb-1.5 font-semibold">
                  Origin Story / Vision
                </label>
                <textarea
                  rows={3}
                  required
                  value={formData.story}
                  onChange={(e) => setFormData({ ...formData, story: e.target.value })}
                  placeholder="How and why you established Cinecore..."
                  className="w-full px-4 py-2.5 rounded-xl bg-[#141815] border border-white/10 text-sm text-white focus:outline-none focus:border-[#9DB79A] leading-relaxed resize-none"
                />
              </div>

              {/* Personal Quote */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#9DB79A] mb-1.5 font-semibold">
                  Personal Quote
                </label>
                <textarea
                  rows={2}
                  required
                  value={formData.quote}
                  onChange={(e) => setFormData({ ...formData, quote: e.target.value })}
                  placeholder="Your personal design philosophy..."
                  className="w-full px-4 py-2.5 rounded-xl bg-[#141815] border border-white/10 text-sm text-white focus:outline-none focus:border-[#9DB79A] leading-relaxed resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs text-red-400 hover:text-red-300 font-mono transition-colors cursor-pointer"
                >
                  Reset to Default
                </button>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-xs font-semibold text-white/80 cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-full bg-[#9DB79A] hover:bg-[#8ca889] text-[#171B18] text-xs font-bold uppercase tracking-wider cursor-pointer shadow-md"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
