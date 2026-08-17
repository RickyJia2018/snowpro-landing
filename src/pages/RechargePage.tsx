import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { CreditCard, LogOut, Loader2, Coins, ArrowRight, ShieldCheck, User } from 'lucide-react';

import { API_BASE_URL } from '../config/api';
import { clearRechargeAccessToken, getValidRechargeAccessToken, storeRechargeAccessToken } from '../lib/rechargeSession';
import { parseTokenAmount } from '../lib/tokenConversion';

interface Product {
  productId: string;
  tokenAmount: number;
  priceInCents: number;
  title: string;
  description?: string;
}

interface UserInfo {
  id: string;
  email: string;
  nickname: string;
  balance: number;
}

const localTranslations = {
  zh: {
    title: "Snow Pro 账户充值",
    handoffRequiredTitle: "请从 Snow Pro App 发起充值",
    handoffRequiredSubtitle: "为了保障您的账户安全与限权保护，网页充值仅支持从 Snow Pro 移动端安全跳转授权。",
    openAppBtn: "返回首页",
    logoutBtn: "退出会话",
    balanceLabel: "当前余额",
    selectPack: "选择充值包",
    stripePayBtn: "使用 Stripe 支付",
    payWithAlipayWechat: "支持 信用卡 / 支付宝 / 微信支付",
    loading: "加载中...",
    initiatingPayment: "正在生成支付账单...",
    unknownError: "发生未知错误，请重试。",
    tokenUnit: "代币",
    welcomeBack: "欢迎回来",
  },
  en: {
    title: "Snow Pro Token Recharge",
    handoffRequiredTitle: "Please Recharge via Snow Pro App",
    handoffRequiredSubtitle: "For your account security and token scope isolation, web recharge is accessible only via secure handoff from the Snow Pro mobile app.",
    openAppBtn: "Back to Home",
    logoutBtn: "End Session",
    balanceLabel: "Current Balance",
    selectPack: "Select Token Pack",
    stripePayBtn: "Pay with Stripe",
    payWithAlipayWechat: "Supports Credit Card / Alipay / WeChat Pay",
    loading: "Loading...",
    initiatingPayment: "Generating payment session...",
    unknownError: "An unknown error occurred. Please try again.",
    tokenUnit: "Tokens",
    welcomeBack: "Welcome back",
  }
};

export default function RechargePage() {
  const { language } = useLanguage();
  const navigate = useNavigate();
  
  // Local translations fallback to English if the system language is not Chinese
  const tLocal = localTranslations[language === 'zh' ? 'zh' : 'en'];

  // Auth state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<UserInfo | null>(null);
  const [, setAccessToken] = useState<string | null>(() => getValidRechargeAccessToken());
  const [sessionId, setSessionId] = useState<string | null>(() => sessionStorage.getItem('recharge_session_id'));
  
  // Products & Payment State
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProductId, setSelectedProductId] = useState<string>('');
  const [agreedPolicy, setAgreedPolicy] = useState<boolean>(false);
  
  // Loading & Error States
  const [pageLoading, setPageLoading] = useState(true);
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Check login state or exchange handoff code on mount
  useEffect(() => {
    // Read single-use handoff code strictly from URL fragment (#code=... or #handoff_code=...)
    let handoffCode: string | null = null;
    if (window.location.hash) {
      const hashParams = new URLSearchParams(window.location.hash.substring(1));
      handoffCode = hashParams.get('code') || hashParams.get('handoff_code');
    }
    // Query string (?code=...) is intentionally ignored to prevent token leakage in server logs / Referer

    if (handoffCode) {
      // Remove sensitive code from URL fragment immediately
      window.history.replaceState({}, document.title, window.location.pathname);
      exchangeHandoffCode(handoffCode);
    } else {
      const token = getValidRechargeAccessToken();
      if (token) {
        setAccessToken(token);
        fetchUserInfo(token);
      } else {
        setPageLoading(false);
      }
    }
    fetchProducts();
  }, []);

  // Exchange single-use handoff code for short-lived session
  const exchangeHandoffCode = async (code: string) => {
    setPageLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/v1/auth/exchange_handoff_code`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ handoff_code: code }),
      });

      if (!response.ok) {
        throw new Error('Failed to exchange handoff code');
      }

      const data = await response.json();
      const token = data.accessToken || data.access_token;
      const sid = data.sessionId || data.session_id;
      const expiresAt = data.accessTokenExpiresAt || data.access_token_expires_at;

      if (token && data.user && storeRechargeAccessToken(token, expiresAt)) {
        setAccessToken(token);
        setSessionId(sid || null);
        if (sid) sessionStorage.setItem('recharge_session_id', sid);

        setUser({
          id: data.user.id || '',
          email: data.user.email || '',
          nickname: data.user.nickname || '',
          balance: (Number(data.user.balance) || 0) / 100,
        });
        setIsLoggedIn(true);
        checkPendingOrder(token);
      } else {
        throw new Error('Incomplete exchange response');
      }
    } catch (err) {
      console.error("[Snow Pro Recharge] Handoff exchange failed:", err);
      clearRechargeAccessToken();
      sessionStorage.removeItem('recharge_session_id');
      setAccessToken(null);
      setSessionId(null);
      setIsLoggedIn(false);
      setUser(null);
    } finally {
      setPageLoading(false);
    }
  };

  // Check if there is any pending Stripe checkout session that needs restoration
  const checkPendingOrder = async (token: string) => {
    let pendingSessions: string[] = [];
    const pendingSessionId = sessionStorage.getItem('pending_stripe_session_id');
    const pendingSessionsJson = sessionStorage.getItem('pending_stripe_session_ids');
    if (pendingSessionId) pendingSessions.push(pendingSessionId);
    if (pendingSessionsJson) {
      try {
        const parsed = JSON.parse(pendingSessionsJson);
        if (Array.isArray(parsed)) pendingSessions.push(...parsed);
      } catch (_) {}
    }
    // Deduplicate
    pendingSessions = Array.from(new Set(pendingSessions));
    if (pendingSessions.length === 0) return;

    const remainingSessions: string[] = [];
    for (const sid of pendingSessions) {
      try {
        const response = await fetch(`${API_BASE_URL}/token/purchases/verify_stripe`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            session_id: sid
          })
        });

        if (response.ok) {
          const data = await response.json();
          if (data.success) {
            const amt = parseTokenAmount(data);
            alert(
              language === 'zh'
                ? `检测到您之前有一笔未确认的到账订单。系统已为您自动恢复购买并到账 ${amt} 代币！`
                : `Found a pending purchase! Successfully restored and credited ${amt} tokens to your account.`
            );
            fetchUserInfo(token);
          } else {
            // Order is still pending / unpaid, retain for future check
            remainingSessions.push(sid);
          }
        } else {
          // Transient network error or 5xx server error, retain for retry
          remainingSessions.push(sid);
        }
      } catch (err) {
        console.error("Failed to restore pending purchase for session:", sid, err);
        remainingSessions.push(sid);
      }
    }

    if (remainingSessions.length > 0) {
      sessionStorage.setItem('pending_stripe_session_ids', JSON.stringify(remainingSessions));
      sessionStorage.removeItem('pending_stripe_session_id');
    } else {
      sessionStorage.removeItem('pending_stripe_session_id');
      sessionStorage.removeItem('pending_stripe_session_ids');
    }
  };

  // Fetch user info
  const fetchUserInfo = async (token: string) => {
    try {
      const response = await fetch(`${API_BASE_URL}/get_user`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) {
        throw new Error('Unauthorized');
      }

      const data = await response.json();
      if (data.user) {
        setUser({
          id: data.user.id || '',
          email: data.user.email || '',
          nickname: data.user.nickname || '',
          balance: (Number(data.user.balance) || 0) / 100,
        });
        setIsLoggedIn(true);
        // Check for pending payments to restore on startup
        checkPendingOrder(token);
      } else {
        throw new Error('No user data');
      }
    } catch (err) {
      console.error("Auth verify failed, clearing tokens", err);
      clearRechargeAccessToken();
      sessionStorage.removeItem('recharge_session_id');
      setAccessToken(null);
      setSessionId(null);
      setIsLoggedIn(false);
      setUser(null);
    } finally {
      setPageLoading(false);
    }
  };

  // Fetch token products
  const fetchProducts = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/token/products`);
      if (response.ok) {
        const data = await response.json();
        if (data.products && data.products.length > 0) {
          // Normalize snake_case from server to camelCase for frontend
          const normalized: Product[] = data.products.map((p: any) => {
            const priceVal = p.priceInCents !== undefined ? p.priceInCents : p.price_in_cents;
            const amountInCentsVal = p.tokenAmountInCents !== undefined ? p.tokenAmountInCents : (p.token_amount_in_cents !== undefined ? p.token_amount_in_cents : (p.tokenAmount !== undefined ? p.tokenAmount : p.token_amount));
            const rawAmount = Number(amountInCentsVal) || 0;
            // tokenAmountInCents is stored in cents (e.g. 10000 cents = 100.00 Tokens)
            const tokenAmount = rawAmount / 100;
            return {
              productId: p.productId || p.product_id,
              tokenAmount: tokenAmount,
              priceInCents: Number(priceVal) || 0,
              title: p.title,
              description: p.description,
            };
          });

          // Sort products by price ascending
          const sorted = [...normalized].sort((a, b) => a.priceInCents - b.priceInCents);
          setProducts(sorted);
          setSelectedProductId(sorted[0].productId);
        }
      }
    } catch (err) {
      console.error("Failed to fetch products", err);
    }
  };



  // Logout handler - Revokes session on server
  const handleLogout = async () => {
    const token = getValidRechargeAccessToken();
    const sid = sessionId || sessionStorage.getItem('recharge_session_id');

    if (token) {
      try {
        await fetch(`${API_BASE_URL}/logout_user`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            session_id: sid || '',
          }),
        });
      } catch (err) {
        console.error("Failed to revoke session on server during logout", err);
      }
    }

    clearRechargeAccessToken();
    sessionStorage.removeItem('recharge_session_id');
    setAccessToken(null);
    setSessionId(null);
    setIsLoggedIn(false);
    setUser(null);
  };

  // Recharge payment redirection handler
  const handleRecharge = async () => {
    if (!selectedProductId) return;
    setPaymentLoading(true);
    setError(null);

    const token = getValidRechargeAccessToken();
    if (!token) {
      clearRechargeAccessToken();
      sessionStorage.removeItem('recharge_session_id');
      setAccessToken(null);
      setSessionId(null);
      setIsLoggedIn(false);
      setError(language === 'zh' ? '充值会话已过期，请在 App 中重新点击充值。' : 'Your recharge session has expired. Please reopen recharge from the app.');
      setPaymentLoading(false);
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/token/purchases`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          product_id: selectedProductId,
          payment_type: 5, // PaymentType_STRIPE
          agreed_token_policy: agreedPolicy,
          success_url: `${window.location.origin}/recharge/success?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${window.location.origin}/recharge`
        })
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.message || "Failed to initiate payment");
      }

      const data = await response.json();
      const checkoutUrl = data.stripeCheckoutUrl || data.stripe_checkout_url;
      if (checkoutUrl) {
        // Validate Stripe URL domain before redirecting
        if (!checkoutUrl.startsWith('https://checkout.stripe.com/')) {
          throw new Error("Security Alert: Invalid checkout URL domain returned.");
        }
        // Try to extract Stripe session_id to save in session storage for restore purpose
        const match = checkoutUrl.match(/(cs_(?:test|live)_[a-zA-Z0-9]+)/);
        if (match) {
          sessionStorage.setItem('pending_stripe_session_id', match[1]);
        }
        // Redirect user to Stripe Hosted Checkout Page
        window.location.href = checkoutUrl;
      } else {
        throw new Error("No Stripe checkout URL returned from server.");
      }

    } catch (err: any) {
      setError(err.message || tLocal.unknownError);
    } finally {
      setPaymentLoading(false);
    }
  };

  // Main Loader
  if (pageLoading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <Loader2 className="h-10 w-10 text-blue-500 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-slate-100 flex flex-col justify-between selection:bg-blue-500 selection:text-white">
      {/* Navigation Header */}
      <header className="border-b border-slate-800 bg-slate-950/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
            <div className="bg-gradient-to-tr from-blue-600 to-cyan-500 p-2.5 rounded-xl shadow-lg shadow-blue-500/20">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-6 h-6 text-white">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight text-white bg-clip-text">Snow Pro</span>
          </div>

          {isLoggedIn && user && (
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-sm text-slate-400 hover:text-red-400 transition-colors px-3 py-1.5 rounded-lg hover:bg-red-500/10 border border-transparent hover:border-red-500/20"
            >
              <LogOut className="h-4 w-4" />
              {tLocal.logoutBtn}
            </button>
          )}
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-md w-full mx-auto px-4 py-12 flex-grow flex flex-col justify-center">
        {!isLoggedIn ? (
          /* Handoff Required Card */
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden text-center">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
            
            <div className="mx-auto w-16 h-16 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center justify-center mb-6 text-blue-400">
              <ShieldCheck className="h-8 w-8" />
            </div>

            <h2 className="text-2xl font-bold text-white mb-3">{tLocal.handoffRequiredTitle}</h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-sm mx-auto">
              {tLocal.handoffRequiredSubtitle}
            </p>

            {error && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-2xl mb-6 text-sm flex gap-2 text-left">
                <ShieldCheck className="h-5 w-5 shrink-0 text-red-400" />
                <span>{error}</span>
              </div>
            )}

            <button
              onClick={() => navigate('/')}
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-4 rounded-2xl hover:shadow-lg hover:shadow-blue-500/25 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{tLocal.openAppBtn}</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        ) : (
          /* Recharge Panel */
          <div className="space-y-6">
            {/* User Profile Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl flex items-center justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-5 rounded-full blur-2xl"></div>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-slate-800 border border-slate-700 rounded-2xl flex items-center justify-center">
                  <User className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">{tLocal.welcomeBack}</div>
                  <div className="text-base font-bold text-white">{user?.nickname || user?.email}</div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">{tLocal.balanceLabel}</div>
                <div className="flex items-center gap-1.5 justify-end mt-0.5">
                  <Coins className="h-5 w-5 text-amber-500" />
                  <span className="text-xl font-black text-white">{user?.balance !== undefined ? user.balance.toFixed(2) : '0.00'}</span>
                </div>
              </div>
            </div>

            {/* Token Products List */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">{tLocal.selectPack}</h3>
              
              {error && (
                <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-2xl text-xs">
                  {error}
                </div>
              )}

              <div className="space-y-3">
                {products.map((product) => {
                  const isSelected = selectedProductId === product.productId;
                  const priceFormatted = `$${(product.priceInCents / 100).toFixed(2)}`;
                  
                  return (
                    <div
                      key={product.productId}
                      onClick={() => setSelectedProductId(product.productId)}
                      className={`cursor-pointer border-2 rounded-2xl p-4 flex items-center justify-between transition-all ${
                        isSelected
                          ? 'border-blue-500 bg-blue-500/5'
                          : 'border-slate-800 hover:border-slate-700 bg-slate-950/45'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-xl transition-colors ${isSelected ? 'bg-blue-500/15 text-blue-400' : 'bg-slate-850 text-slate-400'}`}>
                          <Coins className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="font-bold text-white flex items-center gap-1.5">
                            {product.tokenAmount} {tLocal.tokenUnit}
                          </div>
                          {product.description && (
                            <div className="text-xs text-slate-500 mt-0.5">{product.description}</div>
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-black text-white text-base">{priceFormatted}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Policy Agreement Checkbox */}
              <div className="flex items-start gap-2.5 pt-1 px-1">
                <input
                  id="policy-agree"
                  type="checkbox"
                  checked={agreedPolicy}
                  onChange={(e) => setAgreedPolicy(e.target.checked)}
                  className="mt-0.5 h-4 w-4 rounded border-slate-700 bg-slate-950 text-blue-600 focus:ring-blue-500 focus:ring-offset-slate-900 cursor-pointer"
                />
                <label htmlFor="policy-agree" className="text-xs text-slate-400 cursor-pointer select-none">
                  {lang === 'zh' ? (
                    <>我已阅读并同意 <a href="/terms" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">《SnowCoin 代币充值与使用服务协议》</a></>
                  ) : (
                    <>I have read and agree to the <a href="/terms" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">Token Purchase & Usage Policy</a></>
                  )}
                </label>
              </div>

              {/* Checkout CTA */}
              <button
                onClick={handleRecharge}
                disabled={paymentLoading || !selectedProductId || !agreedPolicy}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-4 rounded-2xl hover:shadow-lg hover:shadow-blue-500/25 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
              >
                {paymentLoading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span>{tLocal.initiatingPayment}</span>
                  </>
                ) : (
                  <>
                    <CreditCard className="h-5 w-5" />
                    <span>{tLocal.stripePayBtn}</span>
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>

              <div className="text-center text-xs text-slate-500 mt-2 font-medium">
                {tLocal.payWithAlipayWechat}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer copyright */}
      <footer className="border-t border-slate-800 py-6 bg-slate-950/20 text-center text-xs text-slate-500">
        <p>&copy; {new Date().getFullYear()} Snow Pro. All rights reserved.</p>
      </footer>
    </div>
  );
}
