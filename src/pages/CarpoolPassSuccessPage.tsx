import { useLanguage } from '../../contexts/LanguageContext';
import { Link, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { API_BASE_URL } from '../config/api';
import { checkoutFetch } from '../lib/checkout';
import { clearRechargeAccessToken, getValidRechargeAccessToken } from '../lib/rechargeSession';

// Stripe redirects here after Checkout. The backend webhook, rather than this
// browser page, is the authority that grants the non-renewing pass.
export default function CarpoolPassSuccessPage() {
  const { language } = useLanguage();
  const zh = language === 'zh';
  const [params] = useSearchParams();
  const sessionId = params.get('session_id');
  const [status, setStatus] = useState<'checking' | 'pending' | 'success' | 'session'>(sessionId ? 'checking' : 'pending');
  const [retry, setRetry] = useState(0);
  useEffect(() => {
    if (!sessionId) return;
    let canceled = false;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const token = getValidRechargeAccessToken('carpool_pass');
    if (!token) { setStatus('session'); return; }
    setStatus('checking');
    const check = async (attempt: number) => {
      if (canceled) return;
      try {
        const response = await checkoutFetch(`${API_BASE_URL}/token/purchases/verify_stripe`, {
          method: 'POST',
          headers: {Authorization: `Bearer ${token}`, 'Content-Type': 'application/json'},
          body: JSON.stringify({session_id: sessionId}),
        });
        if (canceled) return;
        if (getValidRechargeAccessToken('carpool_pass') !== token) { setStatus('session'); return; }
        if (response.status === 401) {
          clearRechargeAccessToken('carpool_pass'); setStatus('session'); return;
        }
        if (response.ok) {
          const result = await response.json();
          if (canceled) return;
          if (getValidRechargeAccessToken('carpool_pass') !== token) { setStatus('session'); return; }
          if (result.success === true) { setStatus('success'); return; }
        } else if (response.status === 403 || response.status === 404) {
          setStatus('pending'); return;
        }
      } catch { /* A transport failure never proves a failed payment. */ }
      if (canceled) return;
      if (attempt < 4) timer = setTimeout(() => { void check(attempt + 1); }, 1000 * 2 ** attempt);
      else setStatus('pending');
    };
    void check(0);
    return () => { canceled = true; if (timer) clearTimeout(timer); };
  }, [sessionId, retry]);
  return (
    <main className="min-h-screen bg-slate-950 p-6 text-white">
      <section className="mx-auto max-w-xl pt-24 text-center">
        <p className="text-5xl" aria-hidden="true">{status === 'success' ? '✓' : '…'}</p>
        <h1 className="mt-6 text-3xl font-bold">{status === 'success' ? (zh ? 'Pass 已生效' : 'Your Pass is ready') : status === 'checking' ? (zh ? '正在确认 Pass…' : 'Confirming your Pass…') : (zh ? '请确认 Pass 是否已生效' : 'Check your Pass activation')}</h1>
        <p className="mt-4 text-slate-300">
          {status === 'success' ? (zh ? '付款及权益发放已确认。返回 App 后将刷新 Pass 状态。' : 'Payment and Pass activation are confirmed. Your Pass status will refresh when you return to the app.') : status === 'session' ? (zh ? '购买会话已过期，请返回 App 查看权益。若已付款，请勿重复购买。' : 'Your purchase session has expired. Return to the app to check your Pass. If you paid, do not purchase again.') : (zh ? '付款确认仍在处理中，请勿重复购买。可稍后重查，或返回 App 查看。' : 'Payment confirmation is still pending. Please do not purchase again. Check again later or return to the app.')}
        </p>
        <p className="mt-3 text-sm text-slate-400">
          {zh ? '请返回 SnowPro 并刷新拼车发布页查看状态。' : 'Return to SnowPro and refresh the Carpool publishing screen to check its status.'}
        </p>
        <a className="mt-8 block text-blue-300" href="snowpro://carpool-pass-return">{zh ? '打开 SnowPro' : 'Open SnowPro'}</a>
        {status === 'pending' && sessionId && <button className="mt-5 text-blue-300" onClick={() => setRetry(n => n + 1)}>{zh ? '重新检查' : 'Check again'}</button>}
        <Link
          className="mt-8 inline-block rounded bg-blue-500 px-4 py-2 font-medium hover:bg-blue-400"
          to="/"
        >
          {zh ? '返回官网' : 'Back to SnowPro'}
        </Link>
      </section>
    </main>
  );
}
