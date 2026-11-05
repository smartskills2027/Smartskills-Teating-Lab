import React, { useState, useEffect } from 'react';
import { apiService } from '../services/api';
import { VerifiedUser } from '../types';
import { ShieldCheck, Lock, Phone, ArrowRight, RotateCw, CheckCircle2, Award } from 'lucide-react';

interface OtpVerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (user: VerifiedUser) => void;
  initialMobile?: string;
}

export const OtpVerificationModal: React.FC<OtpVerificationModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  initialMobile = '',
}) => {
  const [step, setStep] = useState<'mobile' | 'otp'>('mobile');
  const [mobile, setMobile] = useState(initialMobile);
  const [fullName, setFullName] = useState('');
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [simulatedOtp, setSimulatedOtp] = useState('');
  const [resendTimer, setResendTimer] = useState(30);
  const [isSuccessAnim, setIsSuccessAnim] = useState(false);

  useEffect(() => {
    let timer: any;
    if (step === 'otp' && resendTimer > 0) {
      timer = setInterval(() => setResendTimer((prev) => prev - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [step, resendTimer]);

  if (!isOpen) return null;

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    const cleanMobile = mobile.trim().replace(/\D/g, '');
    if (cleanMobile.length !== 10 || !/^[6-9]/.test(cleanMobile)) {
      setErrorMessage('Please enter a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9.');
      return;
    }

    if (!fullName.trim()) {
      setErrorMessage('Please enter your full name to generate student enrollment credentials.');
      return;
    }

    setIsLoading(true);
    try {
      const res = await apiService.sendOtp(cleanMobile, fullName.trim());
      setSimulatedOtp(res.devOtp);
      setStep('otp');
      setResendTimer(30);
    } catch (err: any) {
      setErrorMessage(err.message || 'Unable to send OTP. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (otp.trim().length < 6) {
      setErrorMessage('Please enter the 6-digit OTP sent to your mobile.');
      return;
    }

    setIsLoading(true);
    try {
      const user = await apiService.verifyOtp(mobile.trim(), otp.trim(), fullName.trim());
      setIsSuccessAnim(true);
      setTimeout(() => {
        setIsSuccessAnim(false);
        onSuccess(user);
        onClose();
      }, 700);
    } catch (err: any) {
      setErrorMessage(err.message || 'Invalid OTP code. Please check and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleAutoFillOtp = () => {
    if (simulatedOtp) {
      setOtp(simulatedOtp);
      setErrorMessage('');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl border border-slate-100 overflow-hidden relative">
        {/* Top Header Banner */}
        <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 px-6 py-6 text-white relative">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span className="text-[11px] font-semibold tracking-wider uppercase text-amber-300">
              Smart Skills India · Security Gate
            </span>
          </div>
          <h2 className="text-xl font-bold tracking-tight text-white">
            {step === 'mobile' ? 'Verify Mobile to Access Courses' : 'Enter 6-Digit Verification Code'}
          </h2>
          <p className="text-xs text-blue-200 mt-1 leading-relaxed">
            {step === 'mobile'
              ? 'Enter your mobile number to unlock announced batches, detailed syllabus, and the course FAB framework.'
              : `A one-time verification code has been dispatched to +91 ${mobile}`}
          </p>

          <div className="mt-3 flex items-center gap-3 text-[11px] text-blue-200/90 pt-2 border-t border-blue-800/60">
            <span className="flex items-center gap-1">
              <Award className="w-3.5 h-3.5 text-amber-400" /> NSDC Partner
            </span>
            <span aria-hidden="true">·</span>
            <span>Est. 1991 Raipur</span>
            <span aria-hidden="true">·</span>
            <span>35,000+ Alumni</span>
          </div>
        </div>

        {/* Form Body */}
        <div className="p-6">
          {errorMessage && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700">
              {errorMessage}
            </div>
          )}

          {step === 'mobile' ? (
            <form onSubmit={handleSendOtp} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Candidate Full Name
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-all text-slate-900 placeholder:text-slate-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  10-Digit Mobile Number (India)
                </label>
                <div className="flex rounded-xl shadow-xs overflow-hidden border border-slate-300 focus-within:ring-2 focus-within:ring-blue-900/20 focus-within:border-blue-900 transition-all">
                  <span className="inline-flex items-center px-3.5 bg-slate-100 border-r border-slate-200 text-slate-700 text-xs font-bold tracking-wider">
                    🇮🇳 +91
                  </span>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value.replace(/\D/g, ''))}
                    placeholder="98765 43210"
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 focus:bg-white focus:outline-none text-slate-900 font-medium placeholder:text-slate-400"
                  />
                </div>
                <p className="text-[11px] text-slate-600 mt-1">
                  We will send a one-time verification code via SMS to this number.
                </p>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 px-4 bg-blue-900 hover:bg-blue-800 disabled:bg-blue-300 text-white font-semibold text-sm rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isLoading ? (
                    <>
                      <RotateCw className="w-4 h-4 animate-spin" />
                      <span>Dispatching Code...</span>
                    </>
                  ) : (
                    <>
                      <span>Send OTP & Continue</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-center text-[11px] text-slate-600">
                By verifying, you gain instant access to Smart Skills India course syllabi, fee structures, and counselor advisory.
              </p>
            </form>
          ) : (
            <form onSubmit={handleVerifyOtp} className="space-y-4">
              {/* Simulated SMS Alert Box for ease of use */}
              {simulatedOtp && (
                <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-xl">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-amber-900 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-amber-700" />
                      Simulated SMS to +91 {mobile}
                    </span>
                    <button
                      type="button"
                      onClick={handleAutoFillOtp}
                      className="px-2.5 py-1 text-[11px] font-bold bg-amber-200 hover:bg-amber-300 text-amber-900 rounded-md transition-colors cursor-pointer"
                    >
                      Auto-fill: {simulatedOtp}
                    </button>
                  </div>
                  <p className="text-[11px] text-amber-800 mt-1">
                    Your verification OTP is <strong className="font-mono text-sm text-slate-900">{simulatedOtp}</strong> (valid for 5 mins).
                  </p>
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Enter 6-Digit Verification Code
                </label>
                <input
                  type="text"
                  maxLength={6}
                  required
                  autoFocus
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                  placeholder="e.g. 482910"
                  className="w-full text-center tracking-[0.4em] font-mono text-xl py-3 px-4 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 text-slate-900 placeholder:text-slate-300 font-bold"
                />
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500">
                <button
                  type="button"
                  onClick={() => {
                    setStep('mobile');
                    setOtp('');
                  }}
                  className="hover:text-blue-900 underline cursor-pointer"
                >
                  Change mobile number
                </button>

                {resendTimer > 0 ? (
                  <span>Resend in {resendTimer}s</span>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      handleSendOtp({ preventDefault: () => {} } as any);
                    }}
                    className="text-blue-900 font-semibold hover:underline cursor-pointer flex items-center gap-1"
                  >
                    <RotateCw className="w-3 h-3" /> Resend OTP
                  </button>
                )}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isLoading || isSuccessAnim}
                  className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-300 text-white font-semibold text-sm rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSuccessAnim ? (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Verified! Redirecting...</span>
                    </>
                  ) : isLoading ? (
                    <>
                      <RotateCw className="w-4 h-4 animate-spin" />
                      <span>Validating Code...</span>
                    </>
                  ) : (
                    <>
                      <ShieldCheck className="w-4 h-4" />
                      <span>Verify & Unlock Course Catalog</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
