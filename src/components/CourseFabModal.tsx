import React, { useState } from 'react';
import { Course, BatchSchedule } from '../types';
import {
  X,
  Sparkles,
  CheckCircle2,
  Calendar,
  Clock,
  Award,
  Layers,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  Zap,
  TrendingUp,
  MapPin
} from 'lucide-react';

interface CourseFabModalProps {
  course: Course | null;
  isOpen: boolean;
  onClose: () => void;
  onProceedToApply: (course: Course, selectedBatch?: BatchSchedule) => void;
}

export const CourseFabModal: React.FC<CourseFabModalProps> = ({
  course,
  isOpen,
  onClose,
  onProceedToApply,
}) => {
  const [activeTab, setActiveTab] = useState<'fab' | 'curriculum' | 'batches'>('fab');
  const [selectedBatchId, setSelectedBatchId] = useState<string>('');

  if (!isOpen || !course) return null;

  const currentBatch = course.upcomingBatches.find((b) => b.id === selectedBatchId) || course.upcomingBatches[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-900/70 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-4xl w-full shadow-2xl border border-slate-200 overflow-hidden my-auto flex flex-col max-h-[92vh]">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 p-6 sm:p-8 text-white relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-amber-300 uppercase tracking-wider mb-2">
            <Award className="w-4 h-4" />
            <span>{course.certificationBody}</span>
            <span aria-hidden="true" className="text-white/40">·</span>
            <span>{course.category}</span>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-white pr-10">
            {course.title}
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-3xl leading-relaxed">
            {course.tagline}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-slate-300 pt-3 border-t border-white/10">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              Duration: {course.duration} ({course.totalHours} Hours)
            </span>
            <span aria-hidden="true" className="text-white/20">·</span>
            <span className="flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-amber-400" />
              Level: {course.level}
            </span>
            <span aria-hidden="true" className="text-white/20">·</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              Raipur Ashirwad Towers / Live Online
            </span>
          </div>
        </div>

        {/* Modal Navigation Tabs (Interactive Segmented Controls) */}
        <div className="flex items-center gap-2 px-6 py-3 bg-slate-100/90 border-b border-slate-200 shrink-0 overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveTab('fab')}
            className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'fab'
                ? 'bg-blue-950 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white'
            }`}
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>FAB Framework (F-A-B)</span>
          </button>

          <button
            onClick={() => setActiveTab('curriculum')}
            className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'curriculum'
                ? 'bg-blue-950 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white'
            }`}
          >
            <BookOpen className="w-4 h-4 text-blue-400" />
            <span>Syllabus & Modules ({course.modules.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('batches')}
            className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'batches'
                ? 'bg-blue-950 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white'
            }`}
          >
            <Calendar className="w-4 h-4 text-emerald-400" />
            <span>Upcoming Batches ({course.upcomingBatches.length})</span>
          </button>
        </div>

        {/* Tab Content Body (Scrollable) */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6">
          {/* TAB 1: FAB FRAMEWORK */}
          {activeTab === 'fab' && (
            <div className="space-y-6">
              <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-2xl flex items-start gap-3">
                <div className="p-2 bg-amber-500 text-slate-950 rounded-xl font-bold text-xs shrink-0 mt-0.5">
                  FAB
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-amber-950">
                    Why Examine the FAB Before Applying?
                  </h4>
                  <p className="text-xs text-amber-900/80 mt-0.5 leading-relaxed">
                    We break down every course into <strong>Features</strong> (the curriculum & lab tools), <strong>Advantages</strong> (why Smart Skills India’s 34-year institutional setup is superior), and <strong>Benefits</strong> (what you earn & your career transformation).
                  </p>
                </div>
              </div>

              {/* F - Features */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-xl bg-blue-900 text-white font-black text-sm flex items-center justify-center">
                    F
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-blue-900 uppercase tracking-wider">Features</span>
                    <h4 className="text-base font-bold text-slate-900">{course.fab.features.title}</h4>
                  </div>
                </div>
                <p className="text-xs text-slate-600 mb-4">{course.fab.features.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {course.fab.features.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-800 bg-white p-3 rounded-xl border border-slate-200/80">
                      <Zap className="w-3.5 h-3.5 text-blue-700 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* A - Advantages */}
              <div className="bg-amber-50/40 border border-amber-200/80 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-xl bg-amber-600 text-white font-black text-sm flex items-center justify-center">
                    A
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider">Advantages</span>
                    <h4 className="text-base font-bold text-slate-900">{course.fab.advantages.title}</h4>
                  </div>
                </div>
                <p className="text-xs text-slate-600 mb-4">{course.fab.advantages.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {course.fab.advantages.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-800 bg-white p-3 rounded-xl border border-amber-200/60">
                      <ShieldCheck className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* B - Benefits */}
              <div className="bg-emerald-50/40 border border-emerald-200/80 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-700 text-white font-black text-sm flex items-center justify-center">
                    B
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider">Benefits</span>
                    <h4 className="text-base font-bold text-slate-900">{course.fab.benefits.title}</h4>
                  </div>
                </div>
                <p className="text-xs text-slate-600 mb-4">{course.fab.benefits.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {course.fab.benefits.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-800 bg-white p-3 rounded-xl border border-emerald-200/60">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target Audience & Prerequisites */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="border border-slate-200 rounded-xl p-4 bg-white">
                  <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                    Who Is This Course Ideal For?
                  </h5>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {course.targetAudience.map((aud, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{aud}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border border-slate-200 rounded-xl p-4 bg-white">
                  <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                    Prerequisites & Tools
                  </h5>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    {course.prerequisites}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {course.toolsCovered.map((t, idx) => (
                      <span key={idx} className="text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: CURRICULUM */}
          {activeTab === 'curriculum' && (
            <div className="space-y-4">
              <div className="text-xs text-slate-500 mb-2">
                Detailed module syllabus. Total {course.totalHours} live lab & classroom hours.
              </div>

              {course.modules.map((mod) => (
                <div key={mod.number} className="border border-slate-200 rounded-2xl p-5 bg-white">
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-xs font-bold bg-blue-100 text-blue-900 px-2 py-0.5 rounded-md">
                        Module {mod.number}
                      </span>
                      <h4 className="text-sm font-bold text-slate-900">{mod.title}</h4>
                    </div>
                    <span className="text-xs font-medium text-slate-500 shrink-0">{mod.duration}</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 pt-3 border-t border-slate-100">
                    {mod.topics.map((t, idx) => (
                      <div key={idx} className="text-xs text-slate-700 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-900 shrink-0" />
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: UPCOMING BATCHES */}
          {activeTab === 'batches' && (
            <div className="space-y-4">
              <div className="text-xs text-slate-500 mb-2">
                Select your preferred batch schedule. Seats are allocated on a first-come, first-served basis.
              </div>

              <div className="grid grid-cols-1 gap-4">
                {course.upcomingBatches.map((batch) => {
                  const isSelected = (selectedBatchId || course.upcomingBatches[0].id) === batch.id;
                  return (
                    <div
                      key={batch.id}
                      onClick={() => setSelectedBatchId(batch.id)}
                      className={`p-5 rounded-2xl border-2 transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                        isSelected
                          ? 'border-blue-900 bg-blue-50/40 shadow-xs'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                          <Calendar className="w-3.5 h-3.5 text-blue-900" />
                          <span>Batch Starts: {batch.startDate}</span>
                          <span aria-hidden="true">·</span>
                          <span className="text-blue-900">{batch.mode}</span>
                        </div>
                        <div className="text-base font-bold text-slate-900 mt-1">
                          {batch.timing}
                        </div>
                        <div className="text-xs text-slate-500 mt-0.5">
                          {batch.days}
                        </div>
                      </div>

                      <div className="flex items-center sm:flex-col items-end gap-2 shrink-0">
                        <span className="text-xs font-semibold text-emerald-700 bg-emerald-100/70 px-2.5 py-1 rounded-md">
                          {batch.seatsLeft} seats remaining
                        </span>
                        <button
                          type="button"
                          className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-colors ${
                            isSelected
                              ? 'bg-blue-900 text-white'
                              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                          }`}
                        >
                          {isSelected ? 'Batch Selected' : 'Choose Batch'}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Sticky Action Bar */}
        <div className="p-5 sm:p-6 bg-slate-50 border-t border-slate-200 shrink-0 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-xs text-slate-400 line-through font-mono">
                ₹{course.originalPrice.toLocaleString('en-IN')}
              </span>
              <span className="text-xl sm:text-2xl font-black text-slate-900 font-mono">
                ₹{course.discountedPrice.toLocaleString('en-IN')}
              </span>
              <span className="text-xs text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-md">
                15% Early Bird Offer
              </span>
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">
              Lock seat with Token Fee: <strong>₹{course.tokenFee}</strong> · Balance upon batch orientation
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/3 sm:w-auto px-4 py-3 border border-slate-300 text-slate-700 hover:bg-white rounded-xl text-xs font-semibold transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => onProceedToApply(course, currentBatch)}
              className="w-2/3 sm:w-auto px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Apply for This Course Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
