import React from 'react';
import { VerifiedUser } from '../types';
import { ArrowRight, CheckCircle, MapPin, Building, ShieldCheck, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  verifiedUser: VerifiedUser | null;
  onExploreCourses: () => void;
  onOpenOtpModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  verifiedUser,
  onExploreCourses,
  onOpenOtpModal,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white py-16 lg:py-24">
      {/* Decorative ambient background */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-blue-500 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-amber-500 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-900/60 border border-blue-700/50 text-xs font-medium text-amber-300">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>NSDC Approved Training Partner · Est. 1991 Raipur</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Master High-Demand Career Skills with Real Corporate Mentorship.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Smart Skills India (formerly Bits & Bytes Computers) provides practical, project-driven certifications in <span className="text-amber-300 font-semibold">GST & TallyPrime</span>, <span className="text-amber-300 font-semibold">Full-Stack Development</span>, <span className="text-amber-300 font-semibold">Data Science & AI</span>, and <span className="text-amber-300 font-semibold">Logistics</span> with direct placement assistance.
            </p>

            {/* Quick Proof Matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2 pb-2">
              <div className="border border-slate-800 bg-slate-900/60 rounded-xl p-3">
                <div className="text-2xl font-bold font-mono text-amber-400 tabular-nums">34+</div>
                <div className="text-xs text-slate-400 mt-0.5">Years Legacy</div>
              </div>
              <div className="border border-slate-800 bg-slate-900/60 rounded-xl p-3">
                <div className="text-2xl font-bold font-mono text-white tabular-nums">35K+</div>
                <div className="text-xs text-slate-400 mt-0.5">Trained Alumni</div>
              </div>
              <div className="border border-slate-800 bg-slate-900/60 rounded-xl p-3">
                <div className="text-2xl font-bold font-mono text-emerald-400 tabular-nums">120+</div>
                <div className="text-xs text-slate-400 mt-0.5">Hiring Partners</div>
              </div>
              <div className="border border-slate-800 bg-slate-900/60 rounded-xl p-3">
                <div className="text-2xl font-bold font-mono text-amber-400 tabular-nums">100%</div>
                <div className="text-xs text-slate-400 mt-0.5">Lab Practice</div>
              </div>
            </div>

            {/* CTA row */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreCourses}
                className="px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm rounded-xl shadow-lg transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>View Announced Courses & FAB</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {!verifiedUser ? (
                <button
                  onClick={onOpenOtpModal}
                  className="px-5 py-3.5 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-200 font-semibold text-sm rounded-xl transition-all flex items-center gap-2 cursor-pointer"
                >
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Verify Mobile for Admission Counseling</span>
                </button>
              ) : (
                <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/40 border border-emerald-800/60 px-3.5 py-2 rounded-xl">
                  <CheckCircle className="w-4 h-4" />
                  <span>Verified as +91 {verifiedUser.mobile} ({verifiedUser.fullName})</span>
                </div>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-6 text-xs text-slate-400 pt-3">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                Ashirwad Towers, G.E. Road, Raipur
              </span>
              <span className="flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                Classroom Labs & Live Interactive Online
              </span>
            </div>
          </div>

          {/* Right Column: Campus Imagery */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl group">
              <img
                src="/src/assets/images/hero_smart_skills_campus_1793859144760.jpg"
                alt="Smart Skills India training classroom and laboratory in Raipur"
                className="w-full h-84 sm:h-96 object-cover transform group-hover:scale-102 transition-transform duration-500"
                loading="eager"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/60">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-bold text-white">Advanced Computing & Skill Labs</div>
                  <div className="text-[11px] text-amber-400 font-semibold">Raipur Center</div>
                </div>
                <p className="text-[11px] text-slate-300 mt-1">
                  Equipped with live GST filing sandboxes, developer workstations, dual displays, and high-speed gigabit connectivity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
