import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../config/api';
import { getValidRechargeAccessToken, storeRechargeAccessToken } from '../lib/rechargeSession';

const plans = [
  ['com.snowpro.carpool.pass.1m', '1 month Pass', '$0.99'],
  ['com.snowpro.carpool.pass.2m', '2 month Pass', '$1.99'],
  ['com.snowpro.carpool.pass.3m', '3 month Pass', '$2.99'],
  ['com.snowpro.carpool.pass.4m', '4 month Snow Season Pass', '$3.99'],
] as const;

// This page is intentionally reachable only through the short-lived mobile
// handoff. It creates a Stripe Checkout session; it never grants access itself.
export default function CarpoolPassPage() {
  const navigate = useNavigate();
  const [token, setToken] = useState<string | null>(() => getValidRechargeAccessToken());
  const [loading, setLoading] = useState<string | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const code = new URLSearchParams(window.location.hash.slice(1)).get('code');
    if (!code) return;
    window.history.replaceState({}, document.title, window.location.pathname);
    void (async () => {
      const response = await fetch(`${API_BASE_URL}/v1/auth/exchange_handoff_code`, { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({handoff_code: code}) });
      if (!response.ok) { setError('This secure purchase link is expired. Please start again in the app.'); return; }
      const data = await response.json();
      const accessToken = data.accessToken || data.access_token;
      if (!accessToken || !storeRechargeAccessToken(accessToken, data.accessTokenExpiresAt || data.access_token_expires_at)) { setError('Unable to establish a purchase session.'); return; }
      setToken(accessToken);
    })();
  }, []);

  const checkout = async (productId: string) => {
    if (!token) { setError('Open this page from the SnowPro app to purchase a pass.'); return; }
    setLoading(productId); setError('');
    try {
      const response = await fetch(`${API_BASE_URL}/v1/carpools/pass/checkout`, { method:'POST', headers:{'Content-Type':'application/json', Authorization:`Bearer ${token}`}, body:JSON.stringify({product_id: productId}) });
      const data = await response.json();
      const url = data.stripeCheckoutUrl || data.stripe_checkout_url;
      if (!response.ok || !url) throw new Error(data.message || 'Unable to create checkout');
      window.location.assign(url);
    } catch (e) { setError(e instanceof Error ? e.message : 'Unable to create checkout'); }
    finally { setLoading(null); }
  };

  return <main className="min-h-screen bg-slate-950 text-white p-6"><section className="max-w-3xl mx-auto pt-16"><button onClick={()=>navigate('/')} className="text-blue-300">← SnowPro</button><h1 className="text-4xl font-bold mt-8">Carpool ad-free Pass</h1><p className="text-slate-300 mt-3">One-time purchase. No automatic renewal. Your pass activates only after Stripe confirms payment.</p>{error && <p className="mt-5 text-red-300">{error}</p>}<div className="grid md:grid-cols-2 gap-4 mt-8">{plans.map(([id,title,price])=><article key={id} className="border border-slate-700 rounded-xl p-5"><h2 className="text-xl font-semibold">{title}</h2><p className="text-2xl mt-3">{price}</p><button disabled={loading!==null} onClick={()=>checkout(id)} className="mt-5 bg-blue-500 px-4 py-2 rounded disabled:opacity-50">{loading===id?'Opening checkout…':'Buy with Stripe'}</button></article>)}</div></section></main>;
}
