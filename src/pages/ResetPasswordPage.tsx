import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const API_BASE_URL = "https://peakpal-server-786618190531.us-west2.run.app";

export default function ResetPasswordPage() {
  const [searchParams] = useSearchParams();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const userId = searchParams.get('user_id');
  const token = searchParams.get('token');
  
  const appDeepLink = "snowpro://login"; // Redirect to login screen

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!userId || !token) {
        setStatus('error');
        setMessage('Invalid link parameters.');
        return;
    }
    
    if (password !== confirmPassword) {
        setStatus('error');
        setMessage('Passwords do not match.');
        return;
    }
    
    if (password.length < 6) {
        setStatus('error');
        setMessage('Password must be at least 6 characters.');
        return;
    }

    setIsSubmitting(true);
    setStatus('idle');
    setMessage('');

    try {
        const response = await fetch(`${API_BASE_URL}/reset_password`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_id: parseInt(userId, 10),
                token: token,
                new_password: password,
            }),
        });

        if (!response.ok) {
             const errorData = await response.json().catch(() => ({}));
             throw new Error(errorData.message || 'Reset failed');
        }

        const data = await response.json();
        if (data.success) {
             setStatus('success');
             setMessage('Your password has been reset successfully.');
        } else {
             setStatus('error');
             setMessage(data.message || 'Reset failed.');
        }

    } catch (err: any) {
        setStatus('error');
        setMessage(err.message || 'An error occurred.');
    } finally {
        setIsSubmitting(false);
    }
  };

  const handleOpenApp = () => {
    window.location.href = appDeepLink;
  };

  // If success, show success view
  if (status === 'success') {
      return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
          <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center">
             <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
             </div>
             <h1 className="text-2xl font-bold text-slate-900 mb-2">Reset Successful</h1>
             <p className="text-slate-600 mb-8">{message}</p>
             <button 
                onClick={handleOpenApp}
                className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
              >
                Open App to Login
              </button>
          </div>
        </div>
      );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full">
        <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-slate-900">Reset Password</h1>
            <p className="text-slate-600 mt-2">Enter your new password below.</p>
        </div>

        {status === 'error' && (
            <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-6 text-sm">
                {message}
            </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">New Password</label>
                <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="••••••••"
                    required
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Confirm Password</label>
                <input 
                    type="password" 
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="••••••••"
                    required
                />
            </div>

            <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200 disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {isSubmitting ? 'Resetting...' : 'Reset Password'}
            </button>
        </form>
      </div>
    </div>
  );
}