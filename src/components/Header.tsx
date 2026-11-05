import React from 'react';
import { VerifiedUser } from '../types';
import { ShieldCheck, PhoneCall, UserCheck, Inbox, LogOut } from 'lucide-react';

interface HeaderProps {
  verifiedUser: VerifiedUser | null;
  onOpenOtpModal: () => void;
  onOpenCareerDesk: () => void;
  onSwitchMobile: () => void;
  onNavigateToCatalog: () => void;
  applicationsCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  verifiedUser,
  onOpenOtpModal,
  onOpenCareerDesk,
  onSwitchMobile,
  onNavigateToCatalog,
  applicationsCount,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-18">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 shrink-0 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-900 to-indigo-700 flex items-center justify-center text-white font-bold text-lg shadow-sm">
              SS
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-blue-900 transition-colors whitespace-nowrap">
                Smart Skills India
              </span>
              <span className="text-[11px] font-medium text-amber-700 uppercase tracking-wider">
                NSDC Approved Partner · Est. 1991
              </span>
            </div>
          </a>

          {/* Zone 2: 4-5 clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
            <button
              onClick={onNavigateToCatalog}
              className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
            >
              Announced Courses
            </button>
            <a
              href="#fab-guide"
              className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
            >
              FAB Framework
            </a>
            <a
              href="#about-institution"
              className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
            >
              Raipur Campus
            </a>
            <a
              href="#placement-partners"
              className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
            >
              Placement Partners
            </a>
            <button
              onClick={onOpenCareerDesk}
              className="flex items-center gap-1.5 text-blue-800 hover:text-blue-950 transition-colors whitespace-nowrap shrink-0"
            >
              <Inbox className="w-4 h-4" />
              <span>Career Desk ({applicationsCount})</span>
            </button>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            {verifiedUser ? (
              <div className="flex items-center gap-2">
                <div className="hidden sm:flex flex-col text-right">
                  <span className="text-xs font-semibold text-slate-800 flex items-center gap-1 justify-end">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    +91 {verifiedUser.mobile}
                  </span>
                  <span className="text-[11px] text-slate-600 truncate max-w-[130px]">
                    {verifiedUser.fullName}
                  </span>
                </div>
                <button
                  onClick={onSwitchMobile}
                  title="Switch Mobile Number"
                  className="p-2 text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                </button>
                <button
                  onClick={onNavigateToCatalog}
                  className="px-4 py-2 text-xs font-semibold text-white bg-blue-900 hover:bg-blue-800 rounded-lg shadow-sm transition-colors whitespace-nowrap shrink-0"
                >
                  Explore Courses
                </button>
              </div>
            ) : (
              <button
                onClick={onOpenOtpModal}
                className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-amber-600 hover:bg-amber-700 rounded-lg shadow-sm transition-colors whitespace-nowrap shrink-0"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Verify Mobile & Access</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
