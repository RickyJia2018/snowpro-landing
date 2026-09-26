import { useLanguage } from '../../contexts/LanguageContext';
import { Link } from 'react-router-dom';

// Stripe redirects here after Checkout. The backend webhook, rather than this
// browser page, is the authority that grants the non-renewing pass.
export default function CarpoolPassSuccessPage() {
  const { language } = useLanguage();
  const zh = language === 'zh';
  return (
    <main className="min-h-screen bg-slate-950 p-6 text-white">
      <section className="mx-auto max-w-xl pt-24 text-center">
        <p className="text-5xl" aria-hidden="true">…</p>
        <h1 className="mt-6 text-3xl font-bold">{zh ? '请确认 Pass 是否已生效' : 'Check your Pass activation'}</h1>
        <p className="mt-4 text-slate-300">
          {zh ? '此返回页面无法确认付款结果。支付成功后，Pass 会在付款确认后生效，请勿因等待而重复购买。' : 'This return page cannot confirm payment. Your Pass activates after payment is confirmed. Please avoid purchasing again while confirmation is pending.'}
        </p>
        <p className="mt-3 text-sm text-slate-400">
          {zh ? '请返回 SnowPro 并刷新拼车发布页查看状态。' : 'Return to SnowPro and refresh the Carpool publishing screen to check its status.'}
        </p>
        <a className="mt-8 block text-blue-300" href="snowpro://">{zh ? '打开 SnowPro' : 'Open SnowPro'}</a>
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
