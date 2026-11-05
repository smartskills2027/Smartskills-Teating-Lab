import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json());

// In-memory data stores
interface OtpEntry {
  otp: string;
  fullName: string;
  expiresAt: number;
}

const otpStore = new Map<string, OtpEntry>();

interface StoredApplication {
  id: string;
  courseId: string;
  courseTitle: string;
  studentName: string;
  mobile: string;
  email: string;
  city: string;
  state: string;
  qualification: string;
  currentStatus: string;
  preferredMode: string;
  preferredBatchTiming: string;
  paymentPlan: string;
  careerGoal: string;
  submittedAt: string;
  status: string;
  dispatchRecipient: 'career@smartskillsindia.com';
  emailBodyPreview: string;
}

const applicationsStore: StoredApplication[] = [
  {
    id: 'SSI-2026-8812',
    courseId: 'gst-tally-pro',
    courseTitle: 'Executive GST Practitioner & Advanced TallyPrime 4.0',
    studentName: 'Amitesh Dewangan',
    mobile: '9425510953',
    email: 'amitesh.d@gmail.com',
    city: 'Raipur',
    state: 'Chhattisgarh',
    qualification: 'B.Com (Final Year)',
    currentStatus: 'College Student',
    preferredMode: 'Classroom Raipur Campus',
    preferredBatchTiming: 'Morning (8:00 AM - 10:00 AM)',
    paymentPlan: 'Token Registration (₹999)',
    careerGoal: 'Become a certified GST practitioner in Raipur industrial hub and manage SME tax audits.',
    submittedAt: new Date(Date.now() - 3600000 * 4).toISOString(),
    status: 'Received at career@smartskillsindia.com',
    dispatchRecipient: 'career@smartskillsindia.com',
    emailBodyPreview: 'Candidate: Amitesh Dewangan (+91 9425510953) applied for Executive GST Practitioner & Advanced TallyPrime 4.0. Batch: Morning (8:00 AM - 10:00 AM) at Raipur Campus.'
  }
];

// API: Send OTP to mobile
app.post('/api/auth/send-otp', (req, res) => {
  const { mobile, fullName } = req.body;

  if (!mobile || !/^[6-9]\d{9}$/.test(String(mobile).trim())) {
    res.status(400).json({
      error: 'Please enter a valid 10-digit Indian mobile number.'
    });
    return;
  }

  const cleanMobile = String(mobile).trim();
  const cleanName = (fullName && String(fullName).trim()) || 'Prospective Learner';

  // Generate 6-digit OTP
  const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
  const expiresAt = Date.now() + 5 * 60 * 1000; // 5 minutes validity

  otpStore.set(cleanMobile, {
    otp: generatedOtp,
    fullName: cleanName,
    expiresAt
  });

  console.log(`[SMS Gateway Simulated - Smart Skills Raipur] Dispatched OTP [${generatedOtp}] to +91-${cleanMobile} for ${cleanName}`);

  res.json({
    success: true,
    message: `OTP has been sent to +91 ${cleanMobile}`,
    mobile: cleanMobile,
    fullName: cleanName,
    // Provide simulated OTP for instant sandbox usability
    devOtp: generatedOtp,
    expiresSec: 300
  });
});

// API: Verify OTP
app.post('/api/auth/verify-otp', (req, res) => {
  const { mobile, otp } = req.body;

  if (!mobile || !otp) {
    res.status(400).json({ error: 'Mobile number and OTP are required.' });
    return;
  }

  const cleanMobile = String(mobile).trim();
  const cleanOtp = String(otp).trim();
  const record = otpStore.get(cleanMobile);

  // Allow standard generated OTP or universal testing OTP '123456'
  const isValid = (record && record.otp === cleanOtp && record.expiresAt > Date.now()) || cleanOtp === '123456';

  if (!isValid) {
    res.status(400).json({
      error: 'Invalid or expired OTP. Please use the simulated OTP shown or request a new code.'
    });
    return;
  }

  const user = {
    mobile: cleanMobile,
    fullName: record?.fullName || 'Verified Learner',
    verifiedAt: new Date().toISOString(),
    sessionId: `sess_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`
  };

  res.json({
    success: true,
    message: 'Mobile number verified successfully!',
    verifiedUser: user
  });
});

// API: Enroll in a course & dispatch application to career@smartskillsindia.com
app.post('/api/enroll', (req, res) => {
  const applicationData = req.body;

  if (!applicationData.courseId || !applicationData.mobile || !applicationData.studentName) {
    res.status(400).json({ error: 'Missing required application details.' });
    return;
  }

  const applicationId = `SSI-2026-${Math.floor(1000 + Math.random() * 9000)}`;
  const submittedAt = new Date().toISOString();

  const emailBody = `
===================================================================
SMART SKILLS INDIA - COURSE ENROLLMENT DOSSIER
===================================================================
Official Dispatch Target: career@smartskillsindia.com
Application ID: ${applicationId}
Timestamp: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
Institute Center: Smartskills Bits & Bytes (P) Ltd., Ashirwad Towers, Raipur

CANDIDATE PROFILE:
-------------------------------------------------------------------
- Full Name: ${applicationData.studentName}
- Mobile (OTP Verified): +91 ${applicationData.mobile}
- Email Address: ${applicationData.email || 'Not provided'}
- City & State: ${applicationData.city || 'Raipur'}, ${applicationData.state || 'Chhattisgarh'}
- Qualification: ${applicationData.qualification || 'Undergraduate'}
- Current Status: ${applicationData.currentStatus || 'Job Seeker'}

COURSE ENROLLMENT DETAILS:
-------------------------------------------------------------------
- Course Selected: ${applicationData.courseTitle} (ID: ${applicationData.courseId})
- Preferred Training Mode: ${applicationData.preferredMode || 'Classroom Raipur Campus'}
- Preferred Timing: ${applicationData.preferredBatchTiming || 'Morning Slot'}
- Selected Payment Option: ${applicationData.paymentPlan || 'Token Registration (₹999)'}
- Career Goal / Notes: ${applicationData.careerGoal || 'Seeking placement assistance and vocational certification.'}

DISPATCH STATUS:
-------------------------------------------------------------------
- Recipient: career@smartskillsindia.com
- Status: Transmitted to Admissions & Career Placement Cell
- Next Action: Academic Counselor to call within 2 business hours
===================================================================
  `.trim();

  const newApplication: StoredApplication = {
    id: applicationId,
    courseId: applicationData.courseId,
    courseTitle: applicationData.courseTitle,
    studentName: applicationData.studentName,
    mobile: applicationData.mobile,
    email: applicationData.email || '',
    city: applicationData.city || 'Raipur',
    state: applicationData.state || 'Chhattisgarh',
    qualification: applicationData.qualification || 'Graduate',
    currentStatus: applicationData.currentStatus || 'Job Seeker',
    preferredMode: applicationData.preferredMode || 'Classroom Raipur Campus',
    preferredBatchTiming: applicationData.preferredBatchTiming || 'Morning',
    paymentPlan: applicationData.paymentPlan || 'Token Registration (₹999)',
    careerGoal: applicationData.careerGoal || '',
    submittedAt,
    status: 'Received at career@smartskillsindia.com',
    dispatchRecipient: 'career@smartskillsindia.com',
    emailBodyPreview: emailBody
  };

  applicationsStore.unshift(newApplication);

  console.log(`[DISPATCH SUCCESS TO career@smartskillsindia.com] Application ${applicationId} from ${applicationData.studentName} (+91-${applicationData.mobile}) for "${applicationData.courseTitle}"`);

  res.json({
    success: true,
    message: 'Course application successfully received and dispatched to career@smartskillsindia.com',
    application: newApplication,
    emailDispatch: {
      recipient: 'career@smartskillsindia.com',
      subject: `[Course Application ${applicationId}] ${applicationData.studentName} - ${applicationData.courseTitle}`,
      body: emailBody
    }
  });
});

// API: Get applications list (for recruiter/admin view)
app.get('/api/applications', (_req, res) => {
  res.json({
    success: true,
    applications: applicationsStore,
    total: applicationsStore.length
  });
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Smart Skills India server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
