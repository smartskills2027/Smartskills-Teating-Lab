import React, { useState, useEffect } from 'react';
import { Course, BatchSchedule, VerifiedUser, CourseApplication } from './types';
import { COURSES_DATA } from './data/coursesData';
import { apiService } from './services/api';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { CourseCatalog } from './components/CourseCatalog';
import { CourseFabModal } from './components/CourseFabModal';
import { EnrollmentModal } from './components/EnrollmentModal';
import { EnrollmentSuccessModal } from './components/EnrollmentSuccessModal';
import { CareerDeskDrawer } from './components/CareerDeskDrawer';
import { WhySmartSkills } from './components/WhySmartSkills';
import { Footer } from './components/Footer';
import { OtpVerificationModal } from './components/OtpVerificationModal';
import { ShieldCheck, CheckCircle2, ArrowRight, PhoneCall } from 'lucide-react';

export default function App() {
  const [verifiedUser, setVerifiedUser] = useState<VerifiedUser | null>(null);
  const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);
  const [selectedCourseForFab, setSelectedCourseForFab] = useState<Course | null>(null);
  const [isFabModalOpen, setIsFabModalOpen] = useState(false);
  const [selectedCourseForEnroll, setSelectedCourseForEnroll] = useState<Course | null>(null);
  const [selectedBatchForEnroll, setSelectedBatchForEnroll] = useState<BatchSchedule | undefined>(undefined);
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const [submittedApplication, setSubmittedApplication] = useState<CourseApplication | null>(null);
  const [emailDispatch, setEmailDispatch] = useState<{ recipient: string; subject: string; body: string } | undefined>(undefined);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isCareerDeskOpen, setIsCareerDeskOpen] = useState(false);
  const [applications, setApplications] = useState<CourseApplication[]>([]);
  const [welcomeBanner, setWelcomeBanner] = useState<string | null>(null);

  // Initialize from storage & fetch applications
  useEffect(() => {
    const user = apiService.getStoredVerifiedUser();
    if (user) {
      setVerifiedUser(user);
    } else {
      // Prompt user with OTP verification modal on first visit
      const timer = setTimeout(() => {
        setIsOtpModalOpen(true);
      }, 1000);
      return () => clearTimeout(timer);
    }

    apiService.getAllApplications().then(setApplications);
  }, []);

  const handleOtpSuccess = (user: VerifiedUser) => {
    setVerifiedUser(user);
    setWelcomeBanner(`Welcome, ${user.fullName}! Mobile (+91 ${user.mobile}) verified. Redirecting to announced courses.`);
    
    // Automatically redirect to course catalog as required by prompt
    setTimeout(() => {
      const catalogEl = document.getElementById('catalog');
      if (catalogEl) {
        catalogEl.scrollIntoView({ behavior: 'smooth' });
      }
    }, 400);

    setTimeout(() => {
      setWelcomeBanner(null);
    }, 7000);
  };

  const handleSwitchMobile = () => {
    apiService.clearVerification();
    setVerifiedUser(null);
    setIsOtpModalOpen(true);
  };

  const handleSelectCourseFab = (course: Course) => {
    setSelectedCourseForFab(course);
    setIsFabModalOpen(true);
  };

  const handleProceedToApplyFromFab = (course: Course, selectedBatch?: BatchSchedule) => {
    setIsFabModalOpen(false);

    // If user is not verified yet, show verification modal first
    if (!verifiedUser) {
      setSelectedCourseForEnroll(course);
      setSelectedBatchForEnroll(selectedBatch);
      setIsOtpModalOpen(true);
      return;
    }

    setSelectedCourseForEnroll(course);
    setSelectedBatchForEnroll(selectedBatch);
    setIsEnrollModalOpen(true);
  };

  const handleEnrollmentSuccess = (
    app: CourseApplication,
    dispatch: { recipient: string; subject: string; body: string }
  ) => {
    setIsEnrollModalOpen(false);
    setSubmittedApplication(app);
    setEmailDispatch(dispatch);
    setIsSuccessModalOpen(true);

    // Refresh applications list
    apiService.getAllApplications().then(setApplications);
  };

  const handleNavigateToCatalog = () => {
    const el = document.getElementById('catalog');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* Top Welcome notification when newly verified */}
      {welcomeBanner && (
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white px-4 py-2.5 text-xs text-center font-medium shadow-sm flex items-center justify-center gap-2 animate-fade-in">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>{welcomeBanner}</span>
          <button
            onClick={() => setWelcomeBanner(null)}
            className="ml-3 underline hover:opacity-80 text-[11px]"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Persistent Mobile Verification Reminder Bar if user hasn't verified yet */}
      {!verifiedUser && (
        <div className="bg-amber-500 text-slate-950 px-4 py-2 text-xs text-center font-bold flex items-center justify-center gap-2">
          <span>Smart Skills India requires Mobile OTP Verification to unlock full curriculum and apply for courses.</span>
          <button
            onClick={() => setIsOtpModalOpen(true)}
            className="px-2.5 py-1 bg-slate-950 hover:bg-slate-800 text-white rounded-md text-[11px] font-bold transition-colors cursor-pointer flex items-center gap-1"
          >
            <PhoneCall className="w-3 h-3 text-amber-400" />
            <span>Verify Mobile Now</span>
          </button>
        </div>
      )}

      {/* Header following Top Bar Contract */}
      <Header
        verifiedUser={verifiedUser}
        onOpenOtpModal={() => setIsOtpModalOpen(true)}
        onOpenCareerDesk={() => setIsCareerDeskOpen(true)}
        onSwitchMobile={handleSwitchMobile}
        onNavigateToCatalog={handleNavigateToCatalog}
        applicationsCount={applications.length}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          verifiedUser={verifiedUser}
          onExploreCourses={handleNavigateToCatalog}
          onOpenOtpModal={() => setIsOtpModalOpen(true)}
        />

        {/* Course Catalog (Ecommerce Enrollment & Announced Courses) */}
        <CourseCatalog
          courses={COURSES_DATA}
          onSelectCourseFab={handleSelectCourseFab}
          onApplyCourse={handleSelectCourseFab}
        />

        {/* Institutional Authority & 34-Year Legacy */}
        <WhySmartSkills />
      </main>

      {/* Footer with Raipur coordinates and career@smartskillsindia.com */}
      <Footer
        onOpenOtpModal={() => setIsOtpModalOpen(true)}
        onOpenCareerDesk={() => setIsCareerDeskOpen(true)}
      />

      {/* OTP Verification Modal */}
      <OtpVerificationModal
        isOpen={isOtpModalOpen}
        onClose={() => setIsOtpModalOpen(false)}
        onSuccess={handleOtpSuccess}
        initialMobile={verifiedUser?.mobile || ''}
      />

      {/* FAB (Features, Advantages, Benefits) Deep-Dive Modal */}
      <CourseFabModal
        course={selectedCourseForFab}
        isOpen={isFabModalOpen}
        onClose={() => setIsFabModalOpen(false)}
        onProceedToApply={handleProceedToApplyFromFab}
      />

      {/* Course Enrollment & Application Modal */}
      <EnrollmentModal
        course={selectedCourseForEnroll}
        selectedBatch={selectedBatchForEnroll}
        verifiedUser={verifiedUser}
        isOpen={isEnrollModalOpen}
        onClose={() => setIsEnrollModalOpen(false)}
        onSuccess={handleEnrollmentSuccess}
        onRequireVerification={() => {
          setIsEnrollModalOpen(false);
          setIsOtpModalOpen(true);
        }}
      />

      {/* Enrollment Success & Email Dispatch Modal */}
      <EnrollmentSuccessModal
        application={submittedApplication}
        emailDispatch={emailDispatch}
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
        onViewCareerDesk={() => {
          setIsSuccessModalOpen(false);
          setIsCareerDeskOpen(true);
        }}
      />

      {/* Career Desk Drawer (career@smartskillsindia.com inbox view) */}
      <CareerDeskDrawer
        isOpen={isCareerDeskOpen}
        onClose={() => setIsCareerDeskOpen(false)}
        applications={applications}
      />
    </div>
  );
}
