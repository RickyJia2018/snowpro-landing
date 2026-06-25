import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

// Define API Base URL - Using the one found in Makefile
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://peakpal-server-786618190531.us-west2.run.app";

export default function VerifyEmailPage() {
  const [searchParams] = useSearchParams();
  const { t } = useLanguage();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState(t.verifyEmail.verifying);

  // Resend verification email states
  const [resendEmail, setResendEmail] = useState('');
  const [resendStatus, setResendStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [resendMessage, setResendMessage] = useState('');
  const [validationError, setValidationError] = useState('');

  const emailId = searchParams.get('email_id');
  const secretCode = searchParams.get('secret_code');
  
  const appDeepLink = "snowpro://login";

  useEffect(() => {
    if (!emailId || !secretCode) {
      setStatus('error');
      setMessage(t.verifyEmail.invalidLink);
      return;
    }

    const verify = async () => {
      try {
        // Call the gRPC-Gateway REST API
        const response = await fetch(`${API_BASE_URL}/verify_email?email_id=${emailId}&secret_code=${secretCode}`);
        
        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.message || t.verifyEmail.errorFallback);
        }

        const data = await response.json();
        
        // Check response body based on proto definition
        if (data.success) {
          setStatus('success');
          setMessage(t.verifyEmail.success);
          // Optional: Auto-open app after a short delay
          // setTimeout(() => window.location.href = appDeepLink, 1500);
        } else {
            // Fallback if success is false in body but http is 200
            setStatus('error');
            setMessage(data.message || t.verifyEmail.errorFallback);
        }

      } catch (err: any) {
        setStatus('error');
        setMessage(err.message || t.verifyEmail.errorOccurred);
      }
    };

    verify();
  }, [emailId, secretCode, t]); // Added t to dependency array

  const handleOpenApp = () => {
    window.location.href = appDeepLink;
  };

  const handleResendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError('');
    setResendMessage('');

    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!resendEmail || !emailRegex.test(resendEmail)) {
      setValidationError(t.verifyEmail.invalidEmail);
      return;
    }

    setResendStatus('loading');

    try {
      const response = await fetch(`${API_BASE_URL}/resend_verify_email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: resendEmail })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || t.verifyEmail.errorFallback);
      }

      setResendStatus('success');
      setResendMessage(t.verifyEmail.resendSuccess);
      setResendEmail(''); // Clear email input on success
    } catch (err: any) {
      setResendStatus('error');
      setResendMessage(err.message || t.verifyEmail.errorOccurred);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center">
        {/* Icon based on status */}
        <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${
            status === 'loading' ? 'bg-blue-100' : 
            status === 'success' ? 'bg-green-100' : 'bg-red-100'
        }`}>
          {status === 'loading' && (
             <svg className="animate-spin h-8 w-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
             </svg>
          )}
          {status === 'success' && (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          )}
          {status === 'error' && (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </div>
        
        <h1 className="text-2xl font-bold text-slate-900 mb-2">
            {status === 'loading' ? t.verifyEmail.verifying : 
             status === 'success' ? t.verifyEmail.successTitle : t.verifyEmail.errorTitle}
        </h1>
        <p className="text-slate-600 mb-8">{message}</p>

        {status === 'success' && (
          <button 
            onClick={handleOpenApp}
            className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
          >
            {t.verifyEmail.openApp}
          </button>
        )}
        
        {status === 'error' && (
            <div className="space-y-6">
                {/* Resend verification container */}
                <form onSubmit={handleResendEmail} className="text-left border-t border-slate-100 pt-6">
                    <h2 className="text-sm font-semibold text-slate-700 mb-3">{t.verifyEmail.resendEmail}</h2>
                    
                    {resendStatus === 'success' && (
                      <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl text-sm mb-4">
                        {resendMessage}
                      </div>
                    )}

                    {resendStatus === 'error' && resendMessage && (
                      <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm mb-4">
                        {resendMessage}
                      </div>
                    )}

                    {validationError && (
                      <div className="text-red-500 text-xs mb-2 pl-1">
                        {validationError}
                      </div>
                    )}

                    <div className="flex flex-col gap-3">
                      <input 
                        type="email"
                        value={resendEmail}
                        onChange={(e) => setResendEmail(e.target.value)}
                        placeholder={t.verifyEmail.emailPlaceholder}
                        disabled={resendStatus === 'loading'}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm"
                        required
                      />
                      <button
                        type="submit"
                        disabled={resendStatus === 'loading'}
                        className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200 disabled:opacity-75 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        {resendStatus === 'loading' ? (
                          <>
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <span>{t.verifyEmail.resending}</span>
                          </>
                        ) : (
                          <span>{t.verifyEmail.resendEmail}</span>
                        )}
                      </button>
                    </div>
                </form>

                <div className="text-xs text-slate-400 mt-4 pt-4 border-t border-slate-100">
                    {t.verifyEmail.errorInstruction}
                </div>
            </div>
        )}
      </div>
    </div>
  );
}