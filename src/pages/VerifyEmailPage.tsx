import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

// Define API Base URL - Using the one found in Makefile
const API_BASE_URL = "https://peakpal-server-786618190531.us-west2.run.app";

export default function VerifyEmailPage() {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('Verifying your email...');

  const emailId = searchParams.get('email_id');
  const secretCode = searchParams.get('secret_code');
  
  const appDeepLink = "snowpro://home";

  useEffect(() => {
    if (!emailId || !secretCode) {
      setStatus('error');
      setMessage('Invalid verification link. Missing parameters.');
      return;
    }

    const verify = async () => {
      try {
        // Call the gRPC-Gateway REST API
        const response = await fetch(`${API_BASE_URL}/verify_email?email_id=${emailId}&secret_code=${secretCode}`);
        
        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.message || 'Verification failed');
        }

        const data = await response.json();
        
        // Check response body based on proto definition
        if (data.success) {
          setStatus('success');
          setMessage('Email verified successfully!');
          // Optional: Auto-open app after a short delay
          // setTimeout(() => window.location.href = appDeepLink, 1500);
        } else {
            // Fallback if success is false in body but http is 200
            setStatus('error');
            setMessage(data.message || 'Verification failed.');
        }

      } catch (err: any) {
        setStatus('error');
        setMessage(err.message || 'An error occurred during verification.');
      }
    };

    verify();
  }, [emailId, secretCode]);

  const handleOpenApp = () => {
    window.location.href = appDeepLink;
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
            {status === 'loading' ? 'Verifying...' : 
             status === 'success' ? 'Success!' : 'Verification Failed'}
        </h1>
        <p className="text-slate-600 mb-8">{message}</p>

        {status === 'success' && (
          <button 
            onClick={handleOpenApp}
            className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
          >
            Open SnowPro App
          </button>
        )}
        
        {status === 'error' && (
            <div className="text-sm text-slate-500 mt-4">
                Please try requesting a new verification email from the app.
            </div>
        )}
      </div>
    </div>
  );
}