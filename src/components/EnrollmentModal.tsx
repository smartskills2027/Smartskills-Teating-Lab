import React, { useState, useEffect } from 'react';
import { Course, BatchSchedule, VerifiedUser, CourseApplication } from '../types';
import { apiService } from '../services/api';
import {
  X,
  ShieldCheck,
  Send,
  RotateCw,
  Mail,
  User,
  GraduationCap,
  Calendar,
  CreditCard,
  Building2,
  CheckCircle,
  HelpCircle
} from 'lucide-react';

interface EnrollmentModalProps {
  course: Course | null;
  selectedBatch?: BatchSchedule;
  verifiedUser: VerifiedUser | null;
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (application: CourseApplication, emailDispatch: { recipient: string; subject: string; body: string }) => void;
  onRequireVerification: () => void;
}

export const EnrollmentModal: React.FC<EnrollmentModalProps> = ({
  course,
  selectedBatch,
  verifiedUser,
  isOpen,
  onClose,
  onSuccess,
  onRequireVerification,
}) => {
  const [studentName, setStudentName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('Raipur');
  const [state, setState] = useState('Chhattisgarh');
  const [qualification, setQualification] = useState('Graduate (B.Com / BCA / B.E.)');
  const [currentStatus, setCurrentStatus] = useState<CourseApplication['currentStatus']>('Job Seeker');
  const [preferredMode, setPreferredMode] = useState<CourseApplication['preferredMode']>('Classroom Raipur Campus');
  const [preferredBatchTiming, setPreferredBatchTiming] = useState<CourseApplication['preferredBatchTiming']>('Morning (8:00 AM - 10:00 AM)');
  const [paymentPlan, setPaymentPlan] = useState<CourseApplication['paymentPlan']>('Token Registration (₹999)');
  const [careerGoal, setCareerGoal] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (verifiedUser) {
      setMobile(verifiedUser.mobile);
      if (verifiedUser.fullName && !studentName) {
        setStudentName(verifiedUser.fullName);
      }
    }
    if (selectedBatch) {
      if (selectedBatch.mode === 'Classroom Raipur') setPreferredMode('Classroom Raipur Campus');
      if (selectedBatch.mode === 'Online Live') setPreferredMode('Live Online Interactive');
      if (selectedBatch.mode === 'Hybrid (Lab + Live)') setPreferredMode('Hybrid Flexi');
    }
  }, [verifiedUser, selectedBatch, isOpen]);

  if (!isOpen || !course) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!verifiedUser) {
      onRequireVerification();
      return;
    }

    if (!studentName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }

    if (!email.trim() || !email.includes('@')) {
      setErrorMessage('Please enter a valid email address for admission confirmation.');
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await apiService.submitApplication({
        courseId: course.id,
        courseTitle: course.title,
        studentName: studentName.trim(),
        mobile: verifiedUser.mobile,
        email: email.trim(),
        city: city.trim() || 'Raipur',
        state: state.trim() || 'Chhattisgarh',
        qualification,
        currentStatus,
        preferredMode,
        preferredBatchTiming,
        paymentPlan,
        careerGoal: careerGoal.trim() || 'Seeking professional certification and career placement assistance.',
      });

      onSuccess(result.application, result.emailDispatch);
    } catch (err: any) {
      setErrorMessage(err.message || 'Submission failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/70 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden my-auto flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 px-6 py-6 text-white relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-[11px] font-bold text-amber-400 uppercase tracking-wider mb-1">
            Application for Enrollment · Smart Skills India
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            {course.title}
          </h2>

          <div className="mt-2 flex items-center gap-2 text-xs text-blue-200">
            <span className="font-mono font-bold text-white text-sm">
              ₹{course.discountedPrice.toLocaleString('en-IN')}
            </span>
            <span>(Standard: ₹{course.originalPrice.toLocaleString('en-IN')})</span>
            <span aria-hidden="true">·</span>
            <span className="text-amber-300 font-medium">Recipient: career@smartskillsindia.com</span>
          </div>
        </div>

        {/* Notice of destination */}
        <div className="px-6 py-3 bg-amber-50 border-b border-amber-200 text-xs text-amber-900 flex items-center justify-between shrink-0">
          <span className="flex items-center gap-1.5 font-medium">
            <Mail className="w-4 h-4 text-amber-700 shrink-0" />
            <span>Applications are automatically routed to:</span>
            <strong className="font-mono text-slate-900">career@smartskillsindia.com</strong>
          </span>
          <span className="hidden sm:inline text-[11px] text-amber-800">
            Counselor callback within 2 hours
          </span>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-5">
          {errorMessage && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700">
              {errorMessage}
            </div>
          )}

          {/* Verification check banner */}
          {verifiedUser ? (
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-between text-xs text-emerald-900">
              <span className="flex items-center gap-2 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Verified Mobile: <strong>+91 {verifiedUser.mobile}</strong>
              </span>
              <span className="text-[11px] text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md font-semibold">
                OTP Verified
              </span>
            </div>
          ) : (
            <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl flex items-center justify-between text-xs text-blue-900">
              <span>Mobile verification is required before submission.</span>
              <button
                type="button"
                onClick={onRequireVerification}
                className="font-bold underline text-blue-900 cursor-pointer"
              >
                Verify Mobile Now
              </button>
            </div>
          )}

          {/* Row 1: Candidate Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Candidate Full Name *
              </label>
              <div className="relative">
                <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  required
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="e.g. Priyesh Sahu"
                  className="w-full pl-9 pr-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 text-slate-900"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Email Address *
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. candidate@gmail.com"
                  className="w-full pl-9 pr-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 text-slate-900"
                />
              </div>
            </div>
          </div>

          {/* Row 2: Location & Current Status */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                City / Location
              </label>
              <input
                type="text"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Raipur, Bilaspur, Durg, etc."
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 text-slate-900"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Current Professional Status
              </label>
              <select
                value={currentStatus}
                onChange={(e: any) => setCurrentStatus(e.target.value)}
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 text-slate-900"
              >
                <option value="College Student">College Student (Pursuing Degree)</option>
                <option value="Recent Graduate">Recent Graduate (Looking for First Job)</option>
                <option value="Job Seeker">Job Seeker (Active Career Transition)</option>
                <option value="Working Professional">Working Professional (Upskilling)</option>
                <option value="Business Owner">Business Owner / Entrepreneur</option>
              </select>
            </div>
          </div>

          {/* Row 3: Highest Qualification */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Highest Educational Qualification
            </label>
            <select
              value={qualification}
              onChange={(e) => setQualification(e.target.value)}
              className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 text-slate-900"
            >
              <option value="Graduate (B.Com / BBA / BA)">Graduate (B.Com / BBA / BA)</option>
              <option value="Engineering Graduate (B.E. / B.Tech)">Engineering Graduate (B.E. / B.Tech)</option>
              <option value="Computer Application (BCA / MCA / B.Sc IT)">Computer Application (BCA / MCA / B.Sc IT)</option>
              <option value="Post-Graduate (MBA / M.Com / M.Tech)">Post-Graduate (MBA / M.Com / M.Tech)</option>
              <option value="12th Standard / Higher Secondary">12th Standard / Higher Secondary</option>
              <option value="Polytechnic Diploma">Polytechnic Diploma</option>
            </select>
          </div>

          {/* Row 4: Preferred Mode & Timing */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Preferred Training Mode
              </label>
              <select
                value={preferredMode}
                onChange={(e: any) => setPreferredMode(e.target.value)}
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 text-slate-900"
              >
                <option value="Classroom Raipur Campus">Classroom (Raipur Ashirwad Towers)</option>
                <option value="Live Online Interactive">Live Online Interactive (Zoom/Meet)</option>
                <option value="Hybrid Flexi">Hybrid Flexi (Weekend Lab + Live)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Preferred Batch Timing
              </label>
              <select
                value={preferredBatchTiming}
                onChange={(e: any) => setPreferredBatchTiming(e.target.value)}
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 text-slate-900"
              >
                <option value="Morning (8:00 AM - 10:00 AM)">Morning (8:00 AM - 10:00 AM)</option>
                <option value="Afternoon (1:00 PM - 3:00 PM)">Afternoon (1:00 PM - 3:00 PM)</option>
                <option value="Evening (5:30 PM - 7:30 PM)">Evening (5:30 PM - 7:30 PM)</option>
                <option value="Weekend Intensive (Sat-Sun)">Weekend Intensive (Sat-Sun)</option>
              </select>
            </div>
          </div>

          {/* Row 5: Payment / Enrollment Scheme */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Admission & Enrollment Option
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {[
                {
                  id: 'Token Registration (₹999)',
                  title: 'Token Seat Reservation',
                  amount: '₹999',
                  desc: 'Lock early-bird discount; balance payable on batch commencement',
                },
                {
                  id: 'Full Upfront (15% Early Bird Discount)',
                  title: 'Full Fee Payment',
                  amount: `₹${course.discountedPrice.toLocaleString('en-IN')}`,
                  desc: 'Complete fee with 15% discount waiver included',
                },
                {
                  id: '3-Part Monthly Installment',
                  title: '0% EMI Installments',
                  amount: `3x ₹${Math.round(course.discountedPrice / 3).toLocaleString('en-IN')}`,
                  desc: 'Pay in 3 equal monthly milestones with zero interest',
                },
                {
                  id: 'Request Free Career Counseling First',
                  title: 'Free 1:1 Counseling',
                  amount: '₹0 Free',
                  desc: 'Speak with senior faculty before making payment',
                },
              ].map((opt) => (
                <div
                  key={opt.id}
                  onClick={() => setPaymentPlan(opt.id as any)}
                  className={`p-3 rounded-xl border-2 transition-all cursor-pointer ${
                    paymentPlan === opt.id
                      ? 'border-blue-900 bg-blue-50/50'
                      : 'border-slate-200 hover:border-slate-300 bg-slate-50/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900">{opt.title}</span>
                    <span className="text-xs font-mono font-bold text-blue-950">{opt.amount}</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">{opt.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Statement of purpose / Career goal */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Your Career Goal / Expectations from This Course
            </label>
            <textarea
              rows={2}
              value={careerGoal}
              onChange={(e) => setCareerGoal(e.target.value)}
              placeholder="e.g. Looking to switch from non-technical field to Software Engineer or establish an independent GST consultancy in Raipur..."
              className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 text-slate-900 resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 px-6 bg-blue-900 hover:bg-blue-800 disabled:bg-blue-400 text-white font-bold text-sm rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <RotateCw className="w-4 h-4 animate-spin" />
                  <span>Transmitting Dossier to career@smartskillsindia.com...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Submit Application to career@smartskillsindia.com</span>
                </>
              )}
            </button>
            <p className="text-center text-[11px] text-slate-500 mt-2">
              Official application will be archived with admissions desk and emailed directly to career@smartskillsindia.com.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
