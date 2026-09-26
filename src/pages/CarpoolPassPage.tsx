import RefundNotice from '../components/RefundNotice';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { API_BASE_URL } from '../config/api';
import { clearRechargeAccessToken, getValidRechargeAccessToken, storeRechargeAccessToken } from '../lib/rechargeSession';
import { checkoutFetch, stripeCheckoutUrl } from '../lib/checkout';

import PurchaseLogin from '../components/PurchaseLogin';
import { parsePassCatalog, PassPlan } from '../lib/passCatalog';

const scope = 'carpool_pass';

export default function CarpoolPassPage() {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const zh = language === 'zh';
  const initialized = useRef(false);
  const mounted = useRef(false);
  const checkoutInFlight = useRef(false);
  const [plans,setPlans]=useState<PassPlan[]>([]);
  const [catalogLoading,setCatalogLoading]=useState(true);
  const [catalogError,setCatalogError]=useState(false);
  const [reload,setReload]=useState(0);
  const requestedPlan=useRef(new URLSearchParams(window.location.hash.slice(1)).get('product_id'));
  useEffect(()=>{
    let canceled=false;setCatalogLoading(true);setCatalogError(false);
    checkoutFetch(`${API_BASE_URL}/v1/carpools/pass/products`).then(async r=>{
      if(!r.ok)throw new Error('Catalog unavailable');const list=parsePassCatalog(await r.json());
      if(!canceled){setPlans(list);setSelected(old=>list.some(p=>p.id===old)?old:list.find(p=>p.id===requestedPlan.current)?.id??list.find(p=>p.recommended)?.id??list[0]?.id??'')}
    }).catch(()=>{if(!canceled){setPlans([]);setSelected('');setCatalogError(true)}}).finally(()=>{if(!canceled)setCatalogLoading(false)});
    return()=>{canceled=true};
  },[reload]);
  const [token, setToken] = useState<string | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState('');
  const [error, setError] = useState<'session' | 'checkout' | null>(null);

  useEffect(() => {
    mounted.current = true;
    return () => { mounted.current = false; };
  }, []);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    const params = new URLSearchParams(window.location.hash.slice(1));
    const code = params.get('code') || params.get('handoff_code');
    const product = params.get('product_id');
    if (product) requestedPlan.current = product;
    if (!code) {
      setToken(getValidRechargeAccessToken(scope));
      setAuthLoading(false);
      return;
    }
    // A fresh handoff must never purchase with the previous account's session.
    clearRechargeAccessToken(scope);
    window.history.replaceState({}, document.title, window.location.pathname);
    void (async () => {
      try {
        const response = await checkoutFetch(`${API_BASE_URL}/v1/auth/exchange_handoff_code`, {
          method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ handoff_code: code }),
        });
        if (!response.ok) throw new Error('Handoff unavailable');
        const data = await response.json();
        if (!mounted.current) return;
        const accessToken = data.accessToken || data.access_token;
        if (!storeRechargeAccessToken(accessToken, data.accessTokenExpiresAt || data.access_token_expires_at, scope)) {
          throw new Error('Invalid purchase session');
        }
        setToken(accessToken);
      } catch {
        if (mounted.current) { clearRechargeAccessToken(scope); setToken(null); setError('session'); }
      } finally {
        if (mounted.current) setAuthLoading(false);
      }
    })();
  }, []);

  const checkout = async () => {
    if (authLoading || catalogLoading || !plans.some(p=>p.id===selected) || checkoutInFlight.current) return;
    const currentToken = getValidRechargeAccessToken(scope);
    if (!currentToken || currentToken !== token) { setToken(null); setError('session'); return; }
    checkoutInFlight.current = true;
    setLoading(true);
    setError(null);
    let redirecting = false;
    try {
      const response = await checkoutFetch(`${API_BASE_URL}/v1/carpools/pass/checkout`, {
        method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${currentToken}` },
        body: JSON.stringify({ product_id: selected }),
      });
      if (!mounted.current || getValidRechargeAccessToken(scope) !== currentToken) return;
      if (response.status === 401) {
        clearRechargeAccessToken(scope); setToken(null); setError('session'); return;
      }
      if (!response.ok) throw new Error('Checkout unavailable');
      const data = await response.json();
      if (!mounted.current || getValidRechargeAccessToken(scope) !== currentToken) return;
      const url = stripeCheckoutUrl(data.stripeCheckoutUrl || data.stripe_checkout_url);
      if (!url) throw new Error('Invalid checkout URL');
      window.location.assign(url);
      redirecting = true;
    } catch {
      if (mounted.current) setError('checkout');
    } finally {
      if (!redirecting) {
        checkoutInFlight.current = false;
        if (mounted.current) setLoading(false);
      }
    }
  };

  return <main className="min-h-screen bg-slate-950 text-white p-6">
    <section className="max-w-3xl mx-auto pt-16">
      <button onClick={() => navigate('/')} className="text-blue-300">← SnowPro</button>
      <h1 className="text-4xl font-bold mt-8">{zh ? '拼车免广告通行卡' : 'Carpool ad-free Pass'}</h1>
      <p className="text-slate-300 mt-3">{zh ? '一次性购买，不自动续费。支付确认后生效；到期自动停止。此通行卡用于应用内免广告功能，不包含拼车车费。' : 'One-time purchase. No automatic renewal. Activated after payment confirmation; ends on expiry. Includes in-app ad-free features, not ride fares.'}</p>
      {authLoading && <p role="status" className="mt-5">{zh ? '正在验证购买链接…' : 'Checking your purchase link…'}</p>}
      {!authLoading && !token && <PurchaseLogin scope={scope} zh={zh} onSuccess={data=>{setToken(data.accessToken||data.access_token);setError(null)}}/>}
      {error && <p role="alert" className="mt-5 text-red-300">{error === 'session' ? (zh ? '购买链接已过期或无效，请返回 App 重试。' : 'Your purchase link is expired or invalid. Please start again in the app.') : (zh ? '暂时无法打开支付页面，请稍后重试。' : 'Unable to open checkout. Please try again later.')}</p>}
      {catalogLoading && <p role="status">{zh?'正在加载套餐…':'Loading passes…'}</p>}
      {catalogError && <p role="alert">{zh?'套餐加载失败，请重试。':'Unable to load passes. Please retry.'} <button onClick={()=>setReload(n=>n+1)}>{zh?'重试':'Retry'}</button></p>}
      {!catalogLoading&&!catalogError&&plans.length===0&&<p>{zh?'暂无可售套餐':'No passes are currently available.'}</p>}
      <div className="grid md:grid-cols-2 gap-4 mt-8">
        {plans.map(plan => <label key={plan.id} className="border border-slate-700 rounded-xl p-5">
          <input type="radio" name="pass-plan" value={plan.id} checked={selected === plan.id} onChange={() => setSelected(plan.id)} disabled={loading} />
          <span className="text-xl font-semibold ml-3">{plan.title} · {zh ? `${plan.months} 个月` : `${plan.months} months`}</span>
          <p className="text-2xl mt-3">{new Intl.NumberFormat(zh?'zh-CN':'en-US',{style:'currency',currency:'USD'}).format(plan.cents/100)}</p>
        </label>)}
      </div>
      <p className="text-slate-300 mt-5">{zh ? '最终应付金额请在 Stripe 支付页确认。' : 'Review the final amount on Stripe before paying.'}</p>
      <RefundNotice zh={zh} />
      <button disabled={authLoading || !token || loading || catalogLoading || !selected || catalogError} onClick={checkout} className="mt-5 bg-blue-500 px-4 py-2 rounded disabled:opacity-50">{loading ? (zh ? '正在打开支付…' : 'Opening checkout…') : (zh ? '前往 Stripe 支付' : 'Continue to Stripe')}</button>
    </section>
  </main>;
}
