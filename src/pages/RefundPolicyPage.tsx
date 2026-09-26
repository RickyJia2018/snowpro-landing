import RefundRequestsPanel from '../components/RefundRequestsPanel';
import React, { useEffect, useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { API_BASE_URL } from '../config/api';

export default function RefundPolicyPage() {
  const { language } = useLanguage();
  const zh = language === 'zh';
  const [policy, setPolicy] = useState<{ content: string; version: string } | null>(null);
  const [error, setError] = useState(false);
  const [reload, setReload] = useState(0);
  useEffect(() => {
    const controller = new AbortController();
    setPolicy(null); setError(false);
    const params = new URLSearchParams({ policy_type: 'CANCELLATION_AND_REFUND_POLICY', language_code: language });
    void fetch(`${API_BASE_URL}/policies/latest?${params}`, { signal: controller.signal })
      .then(async response => {
        if (!response.ok) throw new Error('Policy unavailable');
        const value = await response.json();
        if (typeof value.content !== 'string' || !value.content.trim() || typeof value.version !== 'string' || !value.version.trim()) throw new Error('Invalid policy');
        if (!controller.signal.aborted) setPolicy({ content: value.content, version: value.version });
      }).catch(() => { if (!controller.signal.aborted) setError(true); });
    return () => controller.abort();
  }, [language, reload]);
  const subject = zh ? '退款或撤销购买申请' : 'Refund or withdrawal request';
  const body = zh ? '本人希望取消购买或申请退款。\n账户邮箱：\n商品和购买日期：\n订单号（如有）：\n居住国家：\n其他说明（行使撤销权无需说明理由）：' : 'I wish to cancel my purchase or request a refund.\nAccount email:\nProduct and purchase date:\nOrder number (if available):\nCountry of residence:\nAdditional details (no reason is required to exercise a withdrawal right):';
  return <main className="min-h-screen bg-slate-950 text-slate-100 px-5 py-10">
    <article className="mx-auto max-w-3xl rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-10">
      <a href="/" className="text-blue-300">← SnowPro</a>
      <h1 className="mt-6 text-2xl font-bold">{zh ? '退款与消费者权利' : 'Refunds and consumer rights'}</h1>
      <p className="mt-4 text-sm leading-6">{zh ? '可直接联系我们，无需先联系银行。法定权利不受影响。发送明确的取消通知即可，不强制使用下方邮件模板。请勿发送密码或完整银行卡资料。' : 'Contact us directly; you do not need to contact your bank first. Your statutory rights remain unaffected. A clear cancellation notice is sufficient; the email template is optional. Do not send passwords or full card details.'}</p>
      <a className="mt-4 inline-block text-blue-300 underline" href={`mailto:contact@snowpro.app?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}>{zh ? '发送退款或撤销通知' : 'Email a refund or withdrawal request'}</a>
      <p className="mt-2 text-sm">contact@snowpro.app</p>
      <RefundRequestsPanel zh={zh} />
      {policy && <><p className="mt-6 text-sm text-slate-400">{zh ? '版本' : 'Version'}: {policy.version}</p><div className="mt-6 whitespace-pre-wrap text-sm leading-7">{policy.content}</div></>}
      {!policy && !error && <p role="status" className="mt-6">{zh ? '正在加载政策…' : 'Loading policy…'}</p>}
      {error && <div role="alert" className="mt-6"><p>{zh ? '暂时无法加载政策。您仍可通过上方邮箱联系我们。' : 'The policy could not be loaded. You can still contact us at the email above.'}</p><button className="mt-3 text-blue-300 underline" onClick={() => setReload(value => value + 1)}>{zh ? '重试' : 'Retry'}</button></div>}
    </article>
  </main>;
}
