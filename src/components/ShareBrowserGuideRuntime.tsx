import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// The same self-hosted script also runs on server-rendered course/profile pages.
// It only acts on public share routes; payment/auth callback links are excluded.
export default function ShareBrowserGuideRuntime() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (!/^\/(?:invite\/instructor\/?|courses\/[^/]+\/?|instructors\/[^/]+\/?|carpool\/detail\/?|buddy\/detail\/?)$/.test(pathname)) return;
    if (document.getElementById('snowpro-browser-guide-runtime')) return;
    const script = document.createElement('script');
    script.id = 'snowpro-browser-guide-runtime';
    script.src = '/browser-open-guide.js';
    script.defer = true;
    document.body.append(script);
  }, [pathname]);
  return null;
}
