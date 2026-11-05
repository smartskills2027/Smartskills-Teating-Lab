import React, { useState } from 'react';
import { CourseApplication } from '../types';
import {
  X,
  Inbox,
  Download,
  Mail,
  Phone,
  Calendar,
  CheckCircle2,
  Clock,
  Search,
  Filter,
  Building2,
  ChevronDown,
  UserCheck
} from 'lucide-react';

interface CareerDeskDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  applications: CourseApplication[];
}

export const CareerDeskDrawer: React.FC<CareerDeskDrawerProps> = ({
  isOpen,
  onClose,
  applications,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedApp, setSelectedApp] = useState<CourseApplication | null>(null);

  if (!isOpen) return null;

  const filteredApps = applications.filter(
    (app) =>
      app.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.courseTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.mobile.includes(searchTerm) ||
      app.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleExportCsv = () => {
    if (applications.length === 0) return;
    const headers = [
      'Application ID',
      'Course Title',
      'Student Name',
      'Verified Mobile',
      'Email',
      'City',
      'State',
      'Qualification',
      'Status',
      'Training Mode',
      'Timing Slot',
      'Payment Plan',
      'Submission Timestamp',
      'Sent To',
    ];

    const rows = applications.map((a) => [
      `"${a.id}"`,
      `"${a.courseTitle}"`,
      `"${a.studentName}"`,
      `"+91 ${a.mobile}"`,
      `"${a.email}"`,
      `"${a.city}"`,
      `"${a.state}"`,
      `"${a.qualification}"`,
      `"${a.currentStatus}"`,
      `"${a.preferredMode}"`,
      `"${a.preferredBatchTiming}"`,
      `"${a.paymentPlan}"`,
      `"${new Date(a.submittedAt).toLocaleString('en-IN')}"`,
      `"career@smartskillsindia.com"`,
    ]);

    const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `SmartSkills_Applications_career@smartskillsindia.com_${Date.now()}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white w-full max-w-2xl h-full shadow-2xl flex flex-col border-l border-slate-200 animate-slide-left">
        {/* Drawer Header */}
        <div className="p-6 bg-slate-900 text-white shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <Inbox className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Career & Admissions Desk</h3>
                <span className="text-xs text-blue-300 font-mono">
                  Inbox: career@smartskillsindia.com
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="mt-4 flex items-center justify-between text-xs text-slate-300 pt-3 border-t border-slate-800">
            <span>
              Total Candidate Dossiers Collected:{' '}
              <strong className="text-white font-mono">{applications.length}</strong>
            </span>
            <button
              onClick={handleExportCsv}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-700 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="p-4 border-b border-slate-200 bg-slate-50 shrink-0">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Filter by candidate, mobile, or course..."
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900"
            />
          </div>
        </div>

        {/* Application List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {filteredApps.length === 0 ? (
            <div className="text-center py-12 text-slate-400">
              <Inbox className="w-10 h-10 mx-auto text-slate-300 mb-2" />
              <p className="text-sm font-medium text-slate-600">No applications found.</p>
              <p className="text-xs text-slate-400 mt-1">
                When students apply after viewing the FAB, their dossiers arrive here.
              </p>
            </div>
          ) : (
            filteredApps.map((app) => (
              <div
                key={app.id}
                onClick={() => setSelectedApp(selectedApp?.id === app.id ? null : app)}
                className="bg-white border border-slate-200 hover:border-blue-300 rounded-2xl p-4 shadow-xs transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="font-mono font-bold text-blue-900">{app.id}</span>
                      <span aria-hidden="true" className="text-slate-300">·</span>
                      <span className="text-slate-500">
                        {new Date(app.submittedAt).toLocaleDateString('en-IN', {
                          day: 'numeric',
                          month: 'short',
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 mt-1">
                      {app.studentName}
                    </h4>
                    <div className="text-xs text-slate-600 mt-0.5 font-medium">
                      {app.courseTitle}
                    </div>
                  </div>

                  <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md shrink-0">
                    Received
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-slate-100 text-xs text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-slate-400" />
                    <span>+91 {app.mobile}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-slate-400" />
                    <span>{app.city}, {app.state}</span>
                  </div>
                </div>

                {/* Expanded dossier view */}
                {selectedApp?.id === app.id && (
                  <div className="mt-4 pt-4 border-t border-slate-200 space-y-3 bg-slate-50 p-3 rounded-xl text-xs">
                    <div>
                      <span className="text-slate-500">Qualification & Background:</span>
                      <div className="font-semibold text-slate-800">
                        {app.qualification} ({app.currentStatus})
                      </div>
                    </div>
                    <div>
                      <span className="text-slate-500">Batch & Mode:</span>
                      <div className="font-semibold text-slate-800">
                        {app.preferredMode} · {app.preferredBatchTiming}
                      </div>
                    </div>
                    <div>
                      <span className="text-slate-500">Enrollment Plan:</span>
                      <div className="font-semibold text-slate-800">{app.paymentPlan}</div>
                    </div>
                    <div>
                      <span className="text-slate-500">Career Aspirations:</span>
                      <div className="text-slate-700 mt-0.5 italic">"{app.careerGoal}"</div>
                    </div>
                    <div className="pt-2 border-t border-slate-200">
                      <div className="text-[11px] text-slate-500 mb-1 font-mono">
                        Official Transmission to career@smartskillsindia.com
                      </div>
                      <pre className="text-[10px] bg-slate-900 text-slate-200 p-2.5 rounded-lg overflow-x-auto font-mono">
                        {app.emailBodyPreview}
                      </pre>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-100 border-t border-slate-200 shrink-0 text-center text-xs text-slate-600">
          Smartskills Bits & Bytes (P) Ltd. · 58, 3rd Floor, Ashirwad Towers, G.E. Road, Raipur
        </div>
      </div>
    </div>
  );
};
