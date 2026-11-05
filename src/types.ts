export interface CourseFAB {
  features: {
    title: string;
    description: string;
    highlights: string[];
  };
  advantages: {
    title: string;
    description: string;
    highlights: string[];
  };
  benefits: {
    title: string;
    description: string;
    highlights: string[];
  };
}

export interface BatchSchedule {
  id: string;
  startDate: string;
  timing: string;
  mode: 'Classroom Raipur' | 'Online Live' | 'Hybrid (Lab + Live)';
  seatsTotal: number;
  seatsLeft: number;
  days: string;
}

export interface CourseModule {
  number: string;
  title: string;
  duration: string;
  topics: string[];
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: 'IT & Software' | 'Accounting & GST' | 'Data Science & AI' | 'Digital Marketing' | 'Logistics & Supply Chain' | 'Retail & Sales' | 'Spoken English & Communication' | 'Cloud & DevOps';
  level: 'Beginner to Advanced' | 'Intermediate' | 'Professional Certification' | 'Beginner to Intermediate' | 'Intermediate to Advanced';
  duration: string;
  totalHours: number;
  originalPrice: number;
  discountedPrice: number;
  tokenFee: number;
  image: string;
  rating: number;
  reviewCount: number;
  certificationBody: string; // e.g. "NSDC & Smartskills Bits & Bytes", "RASCI Accredited", "LSC Certified"
  isFeatured?: boolean;
  isPopular?: boolean;
  fab: CourseFAB;
  modules: CourseModule[];
  upcomingBatches: BatchSchedule[];
  targetAudience: string[];
  prerequisites: string;
  toolsCovered: string[];
}

export interface VerifiedUser {
  mobile: string;
  fullName: string;
  verifiedAt: string;
  sessionId: string;
}

export interface CourseApplication {
  id: string; // e.g. SSI-2026-9281
  courseId: string;
  courseTitle: string;
  studentName: string;
  mobile: string;
  email: string;
  city: string;
  state: string;
  qualification: string;
  currentStatus: 'College Student' | 'Recent Graduate' | 'Working Professional' | 'Job Seeker' | 'Business Owner';
  preferredMode: 'Classroom Raipur Campus' | 'Live Online Interactive' | 'Hybrid Flexi';
  preferredBatchTiming: 'Morning (8:00 AM - 10:00 AM)' | 'Afternoon (1:00 PM - 3:00 PM)' | 'Evening (5:30 PM - 7:30 PM)' | 'Weekend Intensive (Sat-Sun)';
  paymentPlan: 'Token Registration (₹999)' | 'Full Upfront (15% Early Bird Discount)' | '3-Part Monthly Installment' | 'Request Free Career Counseling First';
  careerGoal: string;
  submittedAt: string;
  status: 'Received at career@smartskillsindia.com' | 'Counselor Contacted' | 'Document Verified' | 'Seat Confirmed';
  dispatchRecipient: 'career@smartskillsindia.com';
  emailBodyPreview?: string;
}
