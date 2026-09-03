import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { CreditCard, LogOut, Loader2, Coins, ArrowRight, ShieldCheck, User } from 'lucide-react';

import { API_BASE_URL } from '../config/api';
import { clearRechargeAccessToken, getValidRechargeAccessToken, storeRechargeAccessToken } from '../lib/rechargeSession';
import { addPendingStripeSessionId, readPendingStripeSessionIds, replacePendingStripeSessionIds } from '../lib/pendingStripeSessions';
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

type TokenPurchaseAvailability = 'loading' | 'enabled' | 'disabled' | 'unknown';

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
    purchaseDisabled: "代币充值系统正在维护中，暂不接受新订单。已付款订单仍会继续到账。",
    availabilityUnknown: "暂时无法确认充值通道状态，请稍后重试。",
    purchaseDisabledButton: "充值维护中",
    policyAgreePrefix: "我已阅读并同意 ",
    policyAgreeLink: "《SnowCoin 代币充值与使用服务协议》",
    sessionExpiredError: "充值会话已过期，请在 App 中重新点击充值。",
    restoreAlert: "检测到您之前有一笔未确认的到账订单。系统已为您自动恢复购买并到账 {amount} 代币！",
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
    purchaseDisabled: "Token recharge is under maintenance and is not accepting new orders. Existing payments will still be completed.",
    availabilityUnknown: "Unable to confirm recharge availability. Please try again later.",
    purchaseDisabledButton: "Recharge Unavailable",
    policyAgreePrefix: "I have read and agree to the ",
    policyAgreeLink: "Token Purchase & Usage Policy",
    sessionExpiredError: "Your recharge session has expired. Please reopen recharge from the app.",
    restoreAlert: "Found a pending purchase! Successfully restored and credited {amount} tokens to your account.",
  },
  ja: {
    title: "Snow Pro アカウントチャージ",
    handoffRequiredTitle: "Snow Pro アプリからチャージを開始してください",
    handoffRequiredSubtitle: "アカウントの安全性と権限保護のため、ウェブチャージは Snow Pro モバイルアプリからの安全なリダイレクト認証のみに対応しています。",
    openAppBtn: "トップページへ戻る",
    logoutBtn: "セッション終了",
    balanceLabel: "現在の残高",
    selectPack: "チャージパックを選択",
    stripePayBtn: "Stripe で支払う",
    payWithAlipayWechat: "クレジットカード / Alipay / WeChat Pay に対応",
    loading: "読み込み中...",
    initiatingPayment: "支払い請求書を作成中...",
    unknownError: "不明なエラーが発生しました。もう一度お試しください。",
    tokenUnit: "トークン",
    welcomeBack: "お帰りなさい",
    purchaseDisabled: "トークンチャージシステムは現在メンテナンス中です。新規のご注文は受け付けておりません。お支払い済みの注文は引き続きアカウントに反映されます。",
    availabilityUnknown: "チャージの利用状況を確認できません。しばらく経ってから再度お試しください。",
    purchaseDisabledButton: "チャージメンテナンス中",
    policyAgreePrefix: "利用規約に同意します ",
    policyAgreeLink: "《SnowCoin トークン購入および利用規約》",
    sessionExpiredError: "チャージセッションの有効期限が切れました。アプリから再度チャージを開いてください。",
    restoreAlert: "未確認の支払い注文が検出されました。システムにより自動復旧され、アカウントに {amount} トークンが付与されました！",
  },
  ko: {
    title: "Snow Pro 계정 충전",
    handoffRequiredTitle: "Snow Pro 앱에서 충전을 시작해 주세요",
    handoffRequiredSubtitle: "계정 보안 및 권한 격리를 위해, 웹 충전은 Snow Pro 모바일 앱의 안전한 인증 리디렉션을 통해서만 이용할 수 있습니다.",
    openAppBtn: "홈으로 돌아가기",
    logoutBtn: "세션 종료",
    balanceLabel: "현재 잔액",
    selectPack: "충전 팩 선택",
    stripePayBtn: "Stripe로 결제하기",
    payWithAlipayWechat: "신용카드 / 알리페이 / 위챗페이 지원",
    loading: "로딩 중...",
    initiatingPayment: "결제 세션 생성 중...",
    unknownError: "알 수 없는 오류가 발생했습니다. 다시 시도해 주세요.",
    tokenUnit: "토큰",
    welcomeBack: "다시 오신 것을 환영합니다",
    purchaseDisabled: "토큰 충전 시스템이 점검 중입니다. 신규 주문을 받지 않습니다. 기존 결제는 정상 처리됩니다.",
    availabilityUnknown: "충전 가능 여부를 확인할 수 없습니다. 잠시 후 다시 시도해 주세요.",
    purchaseDisabledButton: "충전 점검 중",
    policyAgreePrefix: "이용약관을 읽고 동의합니다 ",
    policyAgreeLink: "《SnowCoin 토큰 구매 및 이용약관》",
    sessionExpiredError: "충전 세션이 만료되었습니다. 앱에서 다시 충전을 열어주세요.",
    restoreAlert: "확인되지 않은 결제 주문이 감지되었습니다. 자동으로 복구되어 계정에 {amount} 토큰이 지급되었습니다!",
  },
  fr: {
    title: "Recharge de compte Snow Pro",
    handoffRequiredTitle: "Veuillez recharger via l'application Snow Pro",
    handoffRequiredSubtitle: "Pour la sécurité de votre compte, la recharge web n'est accessible que via une redirection sécurisée depuis l'application Snow Pro.",
    openAppBtn: "Retour à l'accueil",
    logoutBtn: "Terminer la session",
    balanceLabel: "Solde actuel",
    selectPack: "Sélectionner un pack de jetons",
    stripePayBtn: "Payer avec Stripe",
    payWithAlipayWechat: "Carte bancaire / Alipay / WeChat Pay acceptés",
    loading: "Chargement...",
    initiatingPayment: "Génération de la session de paiement...",
    unknownError: "Une erreur inconnue est survenue. Veuillez réessayer.",
    tokenUnit: "Jetons",
    welcomeBack: "Bienvenue",
    purchaseDisabled: "Le système de recharge est en maintenance. Aucune nouvelle commande n'est acceptée. Les paiements existants seront honorés.",
    availabilityUnknown: "Impossible de vérifier la disponibilité du service. Veuillez réessayer plus tard.",
    purchaseDisabledButton: "Recharge indisponible",
    policyAgreePrefix: "J'ai lu et j'accepte les ",
    policyAgreeLink: "Conditions d'achat et d'utilisation de SnowCoin",
    sessionExpiredError: "Votre session de recharge a expiré. Veuillez rouvrir la recharge depuis l'application.",
    restoreAlert: "Paiement en attente détecté ! {amount} jetons ont été crédités sur votre compte avec succès.",
  },
  de: {
    title: "Snow Pro Guthaben aufladen",
    handoffRequiredTitle: "Bitte über die Snow Pro App aufladen",
    handoffRequiredSubtitle: "Zur Sicherheit Ihres Kontos ist die Web-Aufladung nur über eine sichere Weiterleitung aus der Snow Pro App zugänglich.",
    openAppBtn: "Zurück zur Startseite",
    logoutBtn: "Sitzung beenden",
    balanceLabel: "Aktuelles Guthaben",
    selectPack: "Token-Paket wählen",
    stripePayBtn: "Mit Stripe bezahlen",
    payWithAlipayWechat: "Kreditkarte / Alipay / WeChat Pay unterstützt",
    loading: "Wird geladen...",
    initiatingPayment: "Zahlungssitzung wird erstellt...",
    unknownError: "Ein unbekannter Fehler ist aufgetreten. Bitte versuchen Sie es erneut.",
    tokenUnit: "Token",
    welcomeBack: "Willkommen zurück",
    purchaseDisabled: "Das Aufladesystem wird derzeit gewartet. Keine neuen Bestellungen möglich. Bestehende Zahlungen werden gutgeschrieben.",
    availabilityUnknown: "Verfügbarkeit kann derzeit nicht bestätigt werden. Bitte versuchen Sie es später erneut.",
    purchaseDisabledButton: "Wartung aktiv",
    policyAgreePrefix: "Ich habe die ",
    policyAgreeLink: "SnowCoin Kauf- und Nutzungsbedingungen gelesen und stimme zu",
    sessionExpiredError: "Ihre Aufladesitzung ist abgelaufen. Bitte öffnen Sie die Aufladung erneut in der App.",
    restoreAlert: "Ausstehende Zahlung gefunden! {amount} Token wurden Ihrem Konto erfolgreich gutgeschrieben.",
  },
  es: {
    title: "Recarga de cuenta Snow Pro",
    handoffRequiredTitle: "Por favor recargue desde la app Snow Pro",
    handoffRequiredSubtitle: "Por seguridad de su cuenta, la recarga web solo es accesible mediante transferencia segura desde la aplicación móvil Snow Pro.",
    openAppBtn: "Volver al inicio",
    logoutBtn: "Cerrar sesión",
    balanceLabel: "Saldo actual",
    selectPack: "Seleccionar paquete de tokens",
    stripePayBtn: "Pagar con Stripe",
    payWithAlipayWechat: "Acepta Tarjeta de crédito / Alipay / WeChat Pay",
    loading: "Cargando...",
    initiatingPayment: "Generando sesión de pago...",
    unknownError: "Ocurrió un error desconocido. Por favor, inténtelo de nuevo.",
    tokenUnit: "Tokens",
    welcomeBack: "Bienvenido de nuevo",
    purchaseDisabled: "El sistema de recarga de tokens está en mantenimiento. No se aceptan nuevos pedidos. Los pagos completados se procesarán.",
    availabilityUnknown: "No se puede confirmar la disponibilidad del servicio. Por favor, inténtelo más tarde.",
    purchaseDisabledButton: "Recarga no disponible",
    policyAgreePrefix: "He leído y acepto la ",
    policyAgreeLink: "Política de compra y uso de SnowCoin",
    sessionExpiredError: "Su sesión de recarga ha caducado. Vuelva a abrir la recarga desde la aplicación.",
    restoreAlert: "¡Se detectó un pago pendiente! Se han acreditado exitosamente {amount} tokens en su cuenta.",
  },
  ru: {
    title: "Пополнение баланса Snow Pro",
    handoffRequiredTitle: "Пожалуйста, пополните счет через приложение Snow Pro",
    handoffRequiredSubtitle: "В целях безопасности вашего аккаунта пополнение через веб доступно только по защищенной ссылке из приложения Snow Pro.",
    openAppBtn: "На главную",
    logoutBtn: "Завершить сеанс",
    balanceLabel: "Текущий баланс",
    selectPack: "Выберите пакет токенов",
    stripePayBtn: "Оплатить через Stripe",
    payWithAlipayWechat: "Поддерживаются банковские карты / Alipay / WeChat Pay",
    loading: "Загрузка...",
    initiatingPayment: "Создание платежной сессии...",
    unknownError: "Произошла неизвестная ошибка. Пожалуйста, попробуйте снова.",
    tokenUnit: "Токенов",
    welcomeBack: "С возвращением",
    purchaseDisabled: "Система пополнения токенов находится на техническом обслуживании. Прием новых заказов приостановлен.",
    availabilityUnknown: "Не удается проверить статус пополнения. Попробуйте позже.",
    purchaseDisabledButton: "Техническое обслуживание",
    policyAgreePrefix: "Я прочитал и согласен с ",
    policyAgreeLink: "Политикой покупки и использования SnowCoin",
    sessionExpiredError: "Срок действия сеанса пополнения истек. Пожалуйста, откройте пополнение заново из приложения.",
    restoreAlert: "Обнаружен незавершенный платеж! На ваш счет успешно зачислено {amount} токенов.",
  },
};

export default function RechargePage() {
  const { language } = useLanguage();
  const navigate = useNavigate();
  
  // Local translations fallback to English if the system language is unmapped
  const tLocal = localTranslations[language] || localTranslations.en;

  // Auth state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<UserInfo | null>(null);
  const [, setAccessToken] = useState<string | null>(() => getValidRechargeAccessToken());
  const [sessionId, setSessionId] = useState<string | null>(() => sessionStorage.getItem('recharge_session_id'));
  
  // Products & Payment State
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProductId, setSelectedProductId] = useState<string>('');
  const [agreedPolicy, setAgreedPolicy] = useState<boolean>(false);
  const [tokenPurchaseAvailability, setTokenPurchaseAvailability] =
    useState<TokenPurchaseAvailability>('loading');
  
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
    fetchFeatureAvailability();
    fetchProducts();
  }, []);

  const fetchFeatureAvailability = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/v1/feature_availability`, {
        cache: 'no-store',
      });
      if (!response.ok) {
        setTokenPurchaseAvailability('unknown');
        return;
      }
      const data = await response.json();
      const feature =
        data.features?.token_purchase_enabled ??
        data.features?.tokenPurchaseEnabled;
      if (feature?.enabled === true) {
        setTokenPurchaseAvailability('enabled');
      } else if (feature?.enabled === false) {
        setTokenPurchaseAvailability(
          feature.reason === 'ADMIN_DISABLED' ? 'disabled' : 'unknown'
        );
      } else {
        setTokenPurchaseAvailability('unknown');
      }
    } catch (err) {
      console.error('Failed to fetch token purchase availability', err);
      setTokenPurchaseAvailability('unknown');
    }
  };

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

        const userInfo: UserInfo = {
          id: String(data.user.id || ''),
          email: data.user.email || '',
          nickname: data.user.nickname || '',
          balance: (Number(data.user.balance) || 0) / 100,
        };
        setUser(userInfo);
        setIsLoggedIn(true);
        checkPendingOrder(userInfo.id, token);
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
  const checkPendingOrder = async (userId: string, token: string) => {
    const pendingSessions = readPendingStripeSessionIds(userId);
    if (pendingSessions.length === 0) return;

    const remainingSessions: string[] = [];
    for (let i = 0; i < pendingSessions.length; i++) {
      const sid = pendingSessions[i];
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
            if (typeof window !== 'undefined' && typeof window.alert === 'function') {
              window.alert(tLocal.restoreAlert.replace('{amount}', amt.toString()));
            }
            fetchUserInfo(token, false);
          } else {
            // Order is still pending / unpaid, retain for future check
            remainingSessions.push(sid);
          }
        } else if (response.status === 401) {
          // 401 Unauthorized means the recharge access token has expired.
          // The current session AND all remaining unprocessed sessions are retained!
          remainingSessions.push(...pendingSessions.slice(i));
          console.warn(`[Snow Pro Recharge] Auth token expired (401) while verifying pending session ${sid}, retaining session for next authenticated session.`);
          clearRechargeAccessToken();
          sessionStorage.removeItem('recharge_session_id');
          setAccessToken(null);
          setSessionId(null);
          setIsLoggedIn(false);
          setUser(null);
          break;
        } else if (
          response.status === 400 ||
          response.status === 403 ||
          response.status === 404
        ) {
          // Terminal error: Invalid session ID, belongs to another user, or not found.
          // Drop from pending sessions immediately to avoid perpetual retries.
          console.warn(`[Snow Pro Recharge] Dropping terminal pending session ${sid} (HTTP ${response.status})`);
        } else {
          // Transient network error or 429/5xx server error, retain for retry
          remainingSessions.push(sid);
        }
      } catch (err) {
        console.error("Failed to restore pending purchase for session:", sid, err);
        remainingSessions.push(sid);
      }
    }

    replacePendingStripeSessionIds(remainingSessions, userId);
  };

  // Fetch user info
  const fetchUserInfo = async (token: string, triggerPendingCheck: boolean = true) => {
    try {
      const response = await fetch(`${API_BASE_URL}/get_user`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        }
      });

      if (response.status === 401) {
        console.error("Auth token expired or unauthorized (401), clearing tokens");
        clearRechargeAccessToken();
        sessionStorage.removeItem('recharge_session_id');
        setAccessToken(null);
        setSessionId(null);
        setIsLoggedIn(false);
        setUser(null);
        return;
      }

      if (!response.ok) {
        // Transient network error or 5xx: do NOT wipe valid access token
        throw new Error(`Failed to fetch user (HTTP ${response.status})`);
      }

      const data = await response.json();
      if (data.user) {
        const userInfo: UserInfo = {
          id: String(data.user.id || ''),
          email: data.user.email || '',
          nickname: data.user.nickname || '',
          balance: (Number(data.user.balance) || 0) / 100,
        };
        setUser(userInfo);
        setIsLoggedIn(true);
        // Check for pending payments to restore on startup
        if (triggerPendingCheck) {
          checkPendingOrder(userInfo.id, token);
        }
      } else {
        throw new Error('No user data');
      }
    } catch (err: any) {
      console.error("Failed to fetch user info:", err);
      setError(err.message || tLocal.unknownError);
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
    if (tokenPurchaseAvailability !== 'enabled') {
      setError(
        tokenPurchaseAvailability === 'disabled'
          ? tLocal.purchaseDisabled
          : tLocal.availabilityUnknown
      );
      return;
    }
    setPaymentLoading(true);
    setError(null);

    const token = getValidRechargeAccessToken();
    if (!token) {
      clearRechargeAccessToken();
      sessionStorage.removeItem('recharge_session_id');
      setAccessToken(null);
      setSessionId(null);
      setIsLoggedIn(false);
      setError(tLocal.sessionExpiredError);
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
        // Try to extract Stripe session_id to save in local storage for restore purpose
        const match = checkoutUrl.match(/(cs_(?:test|live)_[a-zA-Z0-9]+)/);
        if (match) {
          addPendingStripeSessionId(match[1], user?.id);
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

              {tokenPurchaseAvailability !== 'enabled' && (
                <div
                  role="alert"
                  className="bg-amber-500/10 border border-amber-500/30 text-amber-300 p-4 rounded-2xl text-sm"
                >
                  {tokenPurchaseAvailability === 'disabled'
                    ? tLocal.purchaseDisabled
                    : tLocal.availabilityUnknown}
                </div>
              )}
              
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
                      onClick={() => {
                        if (tokenPurchaseAvailability === 'enabled') {
                          setSelectedProductId(product.productId);
                        }
                      }}
                      aria-disabled={tokenPurchaseAvailability !== 'enabled'}
                      className={`border-2 rounded-2xl p-4 flex items-center justify-between transition-all ${
                        tokenPurchaseAvailability === 'enabled'
                          ? 'cursor-pointer'
                          : 'cursor-not-allowed opacity-50'
                      } ${
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
                  disabled={tokenPurchaseAvailability !== 'enabled'}
                  className="mt-0.5 h-4 w-4 rounded border-slate-700 bg-slate-950 text-blue-600 focus:ring-blue-500 focus:ring-offset-slate-900 cursor-pointer"
                />
                <label htmlFor="policy-agree" className="text-xs text-slate-400 cursor-pointer select-none">
                  {tLocal.policyAgreePrefix}
                  <a href="/terms" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">
                    {tLocal.policyAgreeLink}
                  </a>
                </label>
              </div>

              {/* Checkout CTA */}
              <button
                onClick={handleRecharge}
                disabled={
                  tokenPurchaseAvailability !== 'enabled' ||
                  paymentLoading ||
                  !selectedProductId ||
                  !agreedPolicy
                }
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
                    <span>
                      {tokenPurchaseAvailability === 'enabled'
                        ? tLocal.stripePayBtn
                        : tLocal.purchaseDisabledButton}
                    </span>
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
