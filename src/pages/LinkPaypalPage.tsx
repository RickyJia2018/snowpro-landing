import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const LinkPaypalPage = () => {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState('Processing...');
  const code = searchParams.get('code');

  // Define your app's deep link scheme here
  const appDeepLink = `snowpro://link-paypal?code=${code}`;

  useEffect(() => {
    if (code) {
      // Attempt to open the app automatically
      window.location.href = appDeepLink;
      setStatus('Opening SnowPro App...');
    } else {
      setStatus('Error: No authorization code found.');
    }
  }, [code, appDeepLink]);

  const handleOpenApp = () => {
    if (code) {
      window.location.href = appDeepLink;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
        </div>
        
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Connect PayPal</h1>
        <p className="text-slate-600 mb-8">{status}</p>

        {code && (
          <button 
            onClick={handleOpenApp}
            className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
          >
            Open App to Complete
          </button>
        )}
        
        {!code && (
          <p className="text-red-500 text-sm mt-4">
            Invalid callback. Please try connecting again from the SnowPro app.
          </p>
        )}
      </div>
    </div>
  );
};

export default LinkPaypalPage;
