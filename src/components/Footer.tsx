import React from 'react';
import { Mail, Phone, MapPin, Award, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenOtpModal: () => void;
  onOpenCareerDesk: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenOtpModal, onOpenCareerDesk }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1 & 2: Brand & Background */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 to-indigo-600 flex items-center justify-center text-white font-bold text-lg">
                SS
              </div>
              <div>
                <span className="text-lg font-bold text-white tracking-tight block">
                  Smart Skills India
                </span>
                <span className="text-[11px] text-amber-400 font-semibold uppercase tracking-wider">
                  Smartskills Bits & Bytes (P) Ltd.
                </span>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed max-w-sm">
              Chhattisgarh’s pioneer vocational and IT skill development organization, established in 1991 (formerly Bits & Bytes Computers). Approved Training Partner of NSDC and India International Skill Centre (IISC).
            </p>

            <div className="pt-2 text-[11px] text-slate-500 space-y-1">
              <div>Government Empanelled Partner: NSDC · RASCI · LSC · ASDC</div>
              <div>Affiliated with National Occupational Standards (NOS)</div>
            </div>
          </div>

          {/* Col 3: Key Programs */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Announced Programs
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#catalog" className="hover:text-amber-400 transition-colors">
                  GST Practitioner & TallyPrime 4.0
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-amber-400 transition-colors">
                  Full-Stack Web & AI Engineering
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-amber-400 transition-colors">
                  Data Science & Power BI
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-amber-400 transition-colors">
                  Performance Digital Marketing
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-amber-400 transition-colors">
                  Logistics & Supply Chain Diploma
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-amber-400 transition-colors">
                  "Let's Talk in English" Spoken Mastery
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Admissions & Verification */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Admissions & Desk
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={onOpenOtpModal}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Mobile OTP Verification
                </button>
              </li>
              <li>
                <a href="#fab-guide" className="hover:text-amber-400 transition-colors">
                  Course FAB Framework Guide
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenCareerDesk}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Career Desk & Applications
                </button>
              </li>
              <li>
                <a href="#about-institution" className="hover:text-amber-400 transition-colors">
                  Raipur Campus Labs & Faculty
                </a>
              </li>
              <li>
                <a href="#placement-partners" className="hover:text-amber-400 transition-colors">
                  Hiring & Placement Cell
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact Coordinates */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Raipur Head Office
            </h4>
            <div className="flex items-start gap-2.5 text-slate-300">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>
                58, 3rd Floor, Ashirwad Towers, Beside Raj Theater, G.E. Road, Raipur, Chhattisgarh 492001
              </span>
            </div>

            <div className="flex items-center gap-2.5 text-slate-300">
              <Phone className="w-4 h-4 text-amber-400 shrink-0" />
              <span>0771-2535667 / 094255-10953</span>
            </div>

            <div className="flex items-center gap-2.5 text-slate-300">
              <Mail className="w-4 h-4 text-amber-400 shrink-0" />
              <a
                href="mailto:career@smartskillsindia.com"
                className="text-amber-400 hover:underline font-mono"
              >
                career@smartskillsindia.com
              </a>
            </div>

            <div className="pt-2">
              <span className="inline-block px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] text-slate-400">
                Official Placement Desk: career@smartskillsindia.com
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <div>
            © {new Date().getFullYear()} Smartskills Bits & Bytes (P) Ltd. All rights reserved. Registered in Raipur, Chhattisgarh.
          </div>

          <div className="flex items-center gap-4">
            <span>NSDC Partner No. TC004128</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
