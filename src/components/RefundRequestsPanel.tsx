import React, { useEffect, useRef, useState } from 'react';
import { API_BASE_URL } from '../config/api';
import { checkoutFetch } from '../lib/checkout';
import { clearRechargeAccessToken, getValidRechargeAccessToken, PurchaseScope } from '../lib/rechargeSession';
import PurchaseLogin from './PurchaseLogin';

type RefundCase = { id: string; orderReference?: string; order_reference?: string; status: string; customerResponse?: string; customer_response?: string; createdAt?: string; created_at?: string };
const statusText: Record<string, [string, string]> = { SUBMITTED: ['已收到申请', 'Request received'], IN_REVIEW: ['审核中', 'Under review'], WAITING_CUSTOMER: ['等待您补充信息', 'Awaiting your information'], WAITING_PROVIDER: ['等待支付平台', 'Awaiting payment provider'], APPROVED: ['已批准，尚未完成退款', 'Approved; refund not yet completed'], PROCESSING: ['退款处理中', 'Refund processing'], SUCCEEDED: ['退款已完成', 'Refund completed'], REJECTED: ['申请未获批准', 'Request declined'], FAILED: ['处理遇到问题', 'Processing issue'], NEEDS_REVIEW: ['人工核对中', 'Under manual review'] };
const reasons: [string, string, string][] = [['WITHDRAWAL', '撤销购买（无需说明理由）', 'Withdraw from purchase (no reason required)'], ['DUPLICATE_CHARGE', '重复或错误扣款', 'Duplicate or incorrect charge'], ['UNAUTHORIZED', '未经授权的付款', 'Unauthorized payment'], ['NOT_DELIVERED', '没有收到购买的内容', 'Purchase not delivered'], ['DEFECTIVE', '服务或内容存在问题', 'Problem with service or content'], ['OTHER', '其他', 'Other']];

export default function RefundRequestsPanel({ zh }: { zh: boolean }) {
  const [scope, setScope] = useState<PurchaseScope>('recharge');
  return <section className="mt-8 border-t border-slate-700 pt-6">
    <h2 className="text-xl font-semibold">{zh ? '申请与处理进度' : 'Requests and progress'}</h2>
    <label className="mt-4 block">{zh ? '购买类型' : 'Purchase type'}<select className="ml-3 rounded bg-slate-800 p-2" value={scope} onChange={e => setScope(e.target.value as PurchaseScope)}><option value="recharge">SnowCoin</option><option value="carpool_pass">Carpool Pass</option></select></label>
    <RefundAccount key={scope} scope={scope} zh={zh} />
  </section>;
}
function RefundAccount({ scope, zh }: { scope: PurchaseScope; zh: boolean }) {
  const [token, setToken] = useState(() => getValidRechargeAccessToken(scope));
  const [rows, setRows] = useState<RefundCase[]>([]);
  const [next, setNext] = useState('');
  const [cursor, setCursor] = useState('');
  const [reload, setReload] = useState(0);
  const [loading, setLoading] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [order, setOrder] = useState('');
  const [reason, setReason] = useState('WITHDRAWAL');
  const [message, setMessage] = useState('');
  const [country, setCountry] = useState('');
  const mounted = useRef(true);
  const inFlight = useRef(false);
  const pending = useRef<{ key: string; id: string } | null>(null);
  useEffect(() => { mounted.current = true; return () => { mounted.current = false; }; }, []);
  const current = (value: string) => mounted.current && getValidRechargeAccessToken(scope) === value;
  const expire = () => { clearRechargeAccessToken(scope); setToken(null); setRows([]); setNext(''); setSuccess(''); setMessage(''); setOrder(''); setCountry(''); pending.current = null; };
  useEffect(() => {
    let canceled = false;
    setRows([]); setNext(''); setError('');
    if (!token) return;
    if (getValidRechargeAccessToken(scope) !== token) { expire(); return; }
    setLoading(true);
    const params = new URLSearchParams({ product_kind: scope === 'recharge' ? 'TOKEN' : 'PASS', page_size: '10', page_token: cursor });
    void checkoutFetch(`${API_BASE_URL}/v1/refund-requests?${params}`, { headers: { Authorization: `Bearer ${token}` } }).then(async response => {
      if (canceled || !current(token)) return;
      if (response.status === 401) { expire(); return; }
      if (!response.ok) throw new Error('unavailable');
      const data = await response.json();
      // Protobuf JSON omits empty repeated fields. A valid empty response is {}.
      const requests = data.requests === undefined ? [] : data.requests;
      if (!Array.isArray(requests) || requests.some((r: RefundCase) => !r || typeof r.id !== 'string' || typeof r.status !== 'string')) throw new Error('invalid response');
      if (!canceled && current(token)) { setRows(requests); setNext(data.nextPageToken || data.next_page_token || ''); }
    }).catch(() => { if (!canceled && current(token)) setError(zh ? '申请记录加载失败，请重试或联系本页客服邮箱。' : 'Could not load requests. Retry or contact the support email on this page.'); }).finally(() => { if (!canceled) setLoading(false); });
    return () => { canceled = true; };
  }, [scope, token, cursor, reload, zh]);
  const submit = async (event: React.FormEvent) => {
    event.preventDefault(); if (inFlight.current || !token) return;
    if (!current(token)) { expire(); return; }
    const body = { product_kind: scope === 'recharge' ? 'TOKEN' : 'PASS', order_reference: order.trim(), reason, customer_message: message.trim(), residence_country: country.trim().toUpperCase() };
    const key = JSON.stringify(body);
    if (pending.current?.key !== key) pending.current = { key, id: crypto.randomUUID() };
    inFlight.current = true; setBusy(true); setError(''); setSuccess('');
    try {
      const response = await checkoutFetch(`${API_BASE_URL}/v1/refund-requests`, { method: 'POST', headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }, body: JSON.stringify({ ...body, client_request_id: pending.current.id }) });
      if (!current(token)) return;
      if (response.status === 401) { expire(); return; }
      if (response.status === 409) { setError(zh ? '此订单可能已有申请，请刷新记录并联系客服补充信息。' : 'An open request may already exist. Refresh your requests and contact support to add information.'); return; }
      if (!response.ok) throw new Error('unavailable');
      const data = await response.json(); if (typeof data.id !== 'string') throw new Error('invalid response');
      if (!current(token)) return;
      setSuccess((zh ? '已收到申请，编号：' : 'Request received: ') + data.id); pending.current = null;
      setOrder(''); setMessage(''); setCursor(''); setReload(value => value + 1);
    } catch { if (current(token)) setError(zh ? '尚未确认提交结果。可重试同一申请；也可通过本页客服邮箱联系。' : 'Submission has not been confirmed. Retry the same request, or contact the support email on this page.'); }
    finally { inFlight.current = false; if (mounted.current) setBusy(false); }
  };
  if (!token) return <PurchaseLogin scope={scope} zh={zh} purpose="refund" onSuccess={() => { pending.current = null; setSuccess(''); setMessage(''); setOrder(''); setCountry(''); setCursor(''); setToken(getValidRechargeAccessToken(scope)); }} />;
  return <div className="mt-5 space-y-4">
    <p className="text-sm text-slate-300">{zh ? '提交申请不会立即扣除 Token 或退款。商店内购仍按 Apple / Google 的退款流程处理；我们可协助核对。' : 'Submitting a request does not immediately deduct tokens or issue a refund. App-store purchases follow Apple / Google refund procedures; we can help investigate.'}</p>
    <form onSubmit={submit} className="space-y-3">
      <label className="block">{zh ? '订单号（可选）' : 'Order number (optional)'}<input className="block w-full rounded bg-slate-800 p-2" disabled={busy} maxLength={128} value={order} onChange={e => setOrder(e.target.value)} /></label>
      <label className="block">{zh ? '申请类别' : 'Request category'}<select className="block w-full rounded bg-slate-800 p-2" disabled={busy} value={reason} onChange={e => setReason(e.target.value)}>{reasons.map(([id, cn, en]) => <option key={id} value={id}>{zh ? cn : en}</option>)}</select></label>
      <label className="block">{zh ? '补充说明（可选，请勿填写银行卡资料）' : 'Additional information (optional; no card details)'}<textarea className="block w-full rounded bg-slate-800 p-2" disabled={busy} maxLength={4000} value={message} onChange={e => setMessage(e.target.value)} /></label>
      <label className="block">{zh ? '居住国家代码（可选，例如 CA）' : 'Country of residence code (optional, e.g. CA)'}<input className="block rounded bg-slate-800 p-2" disabled={busy} maxLength={2} pattern="[A-Za-z]{2}" value={country} onChange={e => setCountry(e.target.value)} /></label>
      <button disabled={busy} className="rounded bg-blue-600 px-4 py-2 disabled:opacity-50">{busy ? (zh ? '提交中…' : 'Submitting…') : (zh ? '提交退款或撤销申请' : 'Submit refund or withdrawal request')}</button>
    </form>
    {error && <p role="alert" className="text-red-300">{error}</p>}
    {success && <p role="status" className="text-green-300">{success}</p>}
    <button type="button" disabled={busy} onClick={expire} className="text-blue-300 underline">{zh ? '退出此购买会话' : 'Sign out of this purchase session'}</button>
    <h3 className="font-semibold">{zh ? '我的申请' : 'My requests'}</h3>
    <button disabled={loading || busy} onClick={() => setReload(value => value + 1)} className="text-blue-300 underline">{zh ? '刷新申请' : 'Refresh requests'}</button>
    {loading && <p role="status">{zh ? '正在加载…' : 'Loading…'}</p>}
    {!loading && rows.length === 0 && !error && <p>{zh ? '暂无申请记录' : 'No requests found'}</p>}
    {rows.map(row => <article key={row.id} className="rounded border border-slate-700 p-3 text-sm"><p>{statusText[row.status]?.[zh ? 0 : 1] || (zh ? '处理中' : 'Processing')}</p><p className="break-all">{row.id}</p><p>{row.orderReference || row.order_reference || (zh ? '订单待核实' : 'Order to be verified')}</p><p>{row.createdAt || row.created_at}</p><p className="whitespace-pre-wrap">{row.customerResponse || row.customer_response}</p></article>)}
    <div className="flex gap-4"><button disabled={!cursor || loading || busy} onClick={() => setCursor('')}>{zh ? '第一页' : 'First page'}</button><button disabled={!next || loading || busy} onClick={() => setCursor(next)}>{zh ? '下一页' : 'Next page'}</button></div>
  </div>;
}
