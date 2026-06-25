import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { CreditCard, LogOut, Loader2, Coins, ArrowRight, ShieldCheck, User } from 'lucide-react';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://peakpal-server-786618190531.us-west2.run.app";

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
    title: "SnowPro 账户充值",
    loginTitle: "登录您的 SnowPro 账号",
    loginSubtitle: "登录以同步并充值您的滑雪代币",
    emailLabel: "电子邮箱",
    passwordLabel: "密码",
    loginBtn: "登录",
    logoutBtn: "退出登录",
    balanceLabel: "当前余额",
    selectPack: "选择充值包",
    stripePayBtn: "使用 Stripe 支付",
    payWithAlipayWechat: "支持 信用卡 / 支付宝 / 微信支付",
    emailPlaceholder: "请输入您的邮箱",
    passwordPlaceholder: "请输入您的密码",
    errorLogin: "登录失败，请检查邮箱和密码。",
    loading: "加载中...",
    loggingIn: "正在登录...",
    initiatingPayment: "正在生成支付账单...",
    unknownError: "发生未知错误，请重试。",
    tokenUnit: "代币",
    welcomeBack: "欢迎回来",
  },
  en: {
    title: "SnowPro Token Recharge",
    loginTitle: "Log in to SnowPro Account",
    loginSubtitle: "Sign in to credit tokens to your account",
    emailLabel: "Email Address",
    passwordLabel: "Password",
    loginBtn: "Log In",
    logoutBtn: "Log Out",
    balanceLabel: "Current Balance",
    selectPack: "Select Token Pack",
    stripePayBtn: "Pay with Stripe",
    payWithAlipayWechat: "Supports Credit Card / Alipay / WeChat Pay",
    emailPlaceholder: "Enter your email",
    passwordPlaceholder: "Enter your password",
    errorLogin: "Login failed. Please check your credentials.",
    loading: "Loading...",
    loggingIn: "Logging in...",
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState<UserInfo | null>(null);
  
  // Products & Payment State
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProductId, setSelectedProductId] = useState<string>('');
  
  // Loading & Error States
  const [authLoading, setAuthLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Check login state on mount
  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      fetchUserInfo(token);
    } else {
      setPageLoading(false);
    }
    fetchProducts();
  }, []);

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
          balance: (data.user.balance || 0) / 100,
        });
        setIsLoggedIn(true);
      } else {
        throw new Error('No user data');
      }
    } catch (err) {
      console.error("Auth verify failed, clearing tokens", err);
      localStorage.removeItem('accessToken');
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
            const amountVal = p.tokenAmount !== undefined ? p.tokenAmount : p.token_amount;
            return {
              productId: p.productId || p.product_id,
              tokenAmount: Number(amountVal) || 0,
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

  // Login handler
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE_URL}/login_user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.message || tLocal.errorLogin);
      }

      const data = await response.json();
      const token = data.accessToken || data.access_token;

      if (token && data.user) {
        localStorage.setItem('accessToken', token);
        setUser({
          id: data.user.id || '',
          email: data.user.email || '',
          nickname: data.user.nickname || '',
          balance: (data.user.balance || 0) / 100,
        });
        setIsLoggedIn(true);
      } else {
        throw new Error(tLocal.unknownError);
      }
    } catch (err: any) {
      setError(err.message || tLocal.errorLogin);
    } finally {
      setAuthLoading(false);
    }
  };

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    setIsLoggedIn(false);
    setUser(null);
  };

  // Recharge payment redirection handler
  const handleRecharge = async () => {
    if (!selectedProductId) return;
    setPaymentLoading(true);
    setError(null);

    const token = localStorage.getItem('accessToken');
    if (!token) {
      setIsLoggedIn(false);
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
          productId: selectedProductId,
          payment_type: 5, // PaymentType_STRIPE
          paymentType: 5
        })
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.message || "Failed to initiate payment");
      }

      const data = await response.json();
      const checkoutUrl = data.stripeCheckoutUrl || data.stripe_checkout_url;
      if (checkoutUrl) {
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
            <span className="text-xl font-bold tracking-tight text-white bg-clip-text">SnowPro</span>
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
          /* Login Card */
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
            
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-2">{tLocal.loginTitle}</h2>
              <p className="text-slate-400 text-sm">{tLocal.loginSubtitle}</p>
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-2xl mb-6 text-sm flex gap-2">
                <ShieldCheck className="h-5 w-5 shrink-0 text-red-400" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">{tLocal.emailLabel}</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  placeholder={tLocal.emailPlaceholder}
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">{tLocal.passwordLabel}</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  placeholder={tLocal.passwordPlaceholder}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={authLoading}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-4 rounded-2xl hover:shadow-lg hover:shadow-blue-500/25 active:scale-[0.98] transition-all disabled:opacity-75 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-4"
              >
                {authLoading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span>{tLocal.loggingIn}</span>
                  </>
                ) : (
                  <span>{tLocal.loginBtn}</span>
                )}
              </button>
            </form>
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

              {/* Checkout CTA */}
              <button
                onClick={handleRecharge}
                disabled={paymentLoading || !selectedProductId}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-4 rounded-2xl hover:shadow-lg hover:shadow-blue-500/25 active:scale-[0.98] transition-all disabled:opacity-75 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
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
        <p>&copy; {new Date().getFullYear()} SnowPro. All rights reserved.</p>
      </footer>
    </div>
  );
}
