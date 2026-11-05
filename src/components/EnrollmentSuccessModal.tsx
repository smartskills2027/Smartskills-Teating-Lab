import React, { useState } from 'react';
import { CourseApplication } from '../types';
import {
  CheckCircle2,
  Mail,
  Copy,
  Download,
  Phone,
  ArrowRight,
  ExternalLink,
  Building,
  Check
} from 'lucide-react';

interface EnrollmentSuccessModalProps {
  application: CourseApplication | null;
  emailDispatch?: { recipient: string; subject: string; body: string };
  isOpen: boolean;
  onClose: () => void;
  onViewCareerDesk: () => void;
}

export const EnrollmentSuccessModal: React.FC<EnrollmentSuccessModalProps> = ({
  application,
  emailDispatch,
  isOpen,
  onClose,
  onViewCareerDesk,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen || !application) return null;

  const mailtoLink = `mailto:career@smartskillsindia.com?subject=${encodeURIComponent(
    emailDispatch?.subject || `Course Application ${application.id} - ${application.studentName}`
  )}&body=${encodeURIComponent(emailDispatch?.body || application.emailBodyPreview || '')}`;

  const handleCopy = () => {
    const text = emailDispatch?.body || application.emailBodyPreview || '';
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadReceipt = () => {
    const content = emailDispatch?.body || application.emailBodyPreview || '';
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `SmartSkills_Application_${application.id}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/75 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden my-auto flex flex-col max-h-[92vh]">
        {/* Celebration Header */}
        <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-blue-950 p-6 sm:p-8 text-white text-center shrink-0">
          <div className="w-14 h-14 bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 rounded-2xl flex items-center justify-center mx-auto mb-3">
            <CheckCircle2 className="w-8 h-8 text-emerald-400" />
          </div>

          <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-300">
            Application Transmitted Successfully
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-1">
            Enrollment Dossier Dispatched
          </h2>
          <p className="text-xs sm:text-sm text-teal-100 mt-1 max-w-md mx-auto">
            All candidate information has been compiled and routed to{' '}
            <strong className="text-white underline">career@smartskillsindia.com</strong>.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 text-white font-mono text-xs font-bold border border-white/20">
            Application ID: {application.id}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6">
          {/* Summary Box */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div>
                <span className="text-xs text-slate-500">Course Applied</span>
                <div className="text-sm font-bold text-slate-900">{application.courseTitle}</div>
              </div>
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                Verified Lead
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs pt-1">
              <div>
                <span className="text-slate-500">Candidate Name</span>
                <div className="font-semibold text-slate-900">{application.studentName}</div>
              </div>
              <div>
                <span className="text-slate-500">Verified Mobile</span>
                <div className="font-semibold text-slate-900">+91 {application.mobile}</div>
              </div>
              <div>
                <span className="text-slate-500">Training Mode</span>
                <div className="font-semibold text-slate-900">{application.preferredMode}</div>
              </div>
              <div>
                <span className="text-slate-500">Timing Slot</span>
                <div className="font-semibold text-slate-900">{application.preferredBatchTiming}</div>
              </div>
              <div>
                <span className="text-slate-500">Payment Option</span>
                <div className="font-semibold text-slate-900">{application.paymentPlan}</div>
              </div>
              <div>
                <span className="text-slate-500">Official Recipient</span>
                <div className="font-semibold text-blue-900">career@smartskillsindia.com</div>
              </div>
            </div>
          </div>

          {/* Email dispatch preview */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-blue-900" />
                Dispatched Email Payload to career@smartskillsindia.com
              </span>
              <button
                onClick={handleCopy}
                className="text-xs text-slate-600 hover:text-slate-900 flex items-center gap-1 cursor-pointer"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? 'Copied!' : 'Copy Summary'}</span>
              </button>
            </div>
            <pre className="p-4 bg-slate-900 text-slate-200 rounded-xl text-[11px] font-mono leading-relaxed overflow-x-auto max-h-48 border border-slate-800">
              {emailDispatch?.body || application.emailBodyPreview}
            </pre>
          </div>

          {/* Next steps timeline */}
          <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100 space-y-2">
            <h4 className="text-xs font-bold text-blue-950 uppercase tracking-wider">
              Next Steps for Admission
            </h4>
            <ul className="text-xs text-slate-700 space-y-1.5">
              <li className="flex items-start gap-2">
                <span className="w-4 h-4 rounded-full bg-blue-900 text-white text-[10px] flex items-center justify-center shrink-0 mt-0.5">1</span>
                <span>Our Senior Academic Counselor will call on <strong>+91 {application.mobile}</strong> within 2 hours.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-4 h-4 rounded-full bg-blue-900 text-white text-[10px] flex items-center justify-center shrink-0 mt-0.5">2</span>
                <span>You will receive the batch welcome package, syllabus PDF, and lab orientation guide.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-4 h-4 rounded-full bg-blue-900 text-white text-[10px] flex items-center justify-center shrink-0 mt-0.5">3</span>
                <span>For in-person admissions, visit our Raipur center at Ashirwad Towers, G.E. Road.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="p-6 bg-slate-50 border-t border-slate-200 shrink-0 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadReceipt}
              className="px-3.5 py-2.5 bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-semibold rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Receipt</span>
            </button>

            <a
              href={mailtoLink}
              className="px-3.5 py-2.5 bg-white border border-slate-300 hover:bg-slate-100 text-blue-900 text-xs font-semibold rounded-xl transition-colors flex items-center gap-1.5"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open in Mail Client</span>
            </a>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onViewCareerDesk}
              className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
            >
              View in Career Desk
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              Done & Return
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
