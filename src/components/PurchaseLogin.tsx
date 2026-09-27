import { useEffect, useRef, useState } from 'react';
import { API_BASE_URL } from '../config/api';
import { checkoutFetch } from '../lib/checkout';
import { PurchaseScope, rechargeUserId, storeRechargeAccessToken } from '../lib/rechargeSession';

// Full login credentials stay in memory; only the short-lived purchase token is stored.
export default function PurchaseLogin({ scope, zh, onSuccess, purpose = 'purchase' }: { scope: PurchaseScope; zh: boolean; purpose?: 'purchase' | 'refund' | 'verify'; onSuccess: (data: any) => void }) {
 const [email,setEmail]=useState('');const [password,setPassword]=useState('');const [busy,setBusy]=useState(false);const [error,setError]=useState(false);
 const running=useRef(false);const active=useRef(true);
 useEffect(()=>{active.current=true;return()=>{active.current=false}},[]);
 const submit=async(e:React.FormEvent)=>{
  e.preventDefault();if(running.current)return;running.current=true;setBusy(true);setError(false);
  const post=async(path:string,body:unknown,bearer?:string)=>{const r=await checkoutFetch(`${API_BASE_URL}${path}`,{method:'POST',headers:{'Content-Type':'application/json',...(bearer?{Authorization:`Bearer ${bearer}`}:{})},body:JSON.stringify(body)});if(!r.ok)throw new Error('Login failed');return r.json()};
  try{
   const login=await post('/login_user',{email:email.trim(),password});setPassword('');if(!active.current)return;
   const fullToken=login.accessToken||login.access_token;if(typeof fullToken!=='string'||!fullToken)throw new Error('Invalid login');
   const handoff=await post('/v1/auth/web_handoff_code',{scope},fullToken);if(!active.current)return;
   const code=handoff.handoffCode||handoff.handoff_code;if(typeof code!=='string'||!code)throw new Error('Invalid handoff');
   const data=await post('/v1/auth/exchange_handoff_code',{handoff_code:code});if(!active.current)return;
   if(scope==='recharge'&&!rechargeUserId(data.user))throw new Error('Invalid user');
   if(!storeRechargeAccessToken(data.accessToken||data.access_token,data.accessTokenExpiresAt||data.access_token_expires_at,scope))throw new Error('Invalid session');
   onSuccess(data);
  }catch{if(active.current)setError(true)}finally{running.current=false;if(active.current){setBusy(false);setPassword('')}}
 };
 return <form onSubmit={submit} className="mt-6 space-y-3 text-left">
  <h2 className="text-xl font-semibold">{purpose === 'verify' ? (zh ? '登录以确认原订单到账' : 'Sign in to verify your existing order') : purpose === 'refund' ? (zh ? '登录以提交或查看退款申请' : 'Sign in to submit or view refund requests') : (zh?'登录 SnowPro 账户购买':'Sign in to SnowPro to purchase')}</h2>
  <p className="text-sm text-slate-400">{purpose === 'refund' ? (zh ? '无法登录时，仍可通过本页客服邮箱发送申请。' : 'If you cannot sign in, you can still send your request to the support email on this page.') : (zh?'也可以从 App 的购买入口跳转，无需再次输入密码。':'You can also open this page from the app without entering your password again.')}</p>
  <label className="block">{zh?'邮箱':'Email'}<input required type="email" autoComplete="username" value={email} disabled={busy} onChange={e=>setEmail(e.target.value)} className="block w-full rounded bg-slate-800 p-3"/></label>
  <label className="block">{zh?'密码':'Password'}<input required type="password" autoComplete="current-password" value={password} disabled={busy} onChange={e=>setPassword(e.target.value)} className="block w-full rounded bg-slate-800 p-3"/></label>
  {error&&<p role="alert" className="text-red-300">{zh?'登录未完成，请核对账号密码、邮箱验证状态后重试。':'Unable to sign in. Check your credentials and email verification, then retry.'}</p>}
  <button disabled={busy} className="rounded bg-blue-500 px-4 py-2 disabled:opacity-50">{busy?(zh?'登录中…':'Signing in…'):(zh?'登录':'Sign in')}</button>
 </form>
}
