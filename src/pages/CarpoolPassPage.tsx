import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CreditCard,
  Loader2,
  ShieldCheck,
  Sparkles,
  Ticket,
  Zap,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { Language } from '../../locales';
import PurchaseLogin from '../components/PurchaseLogin';
import RefundNotice from '../components/RefundNotice';
import { API_BASE_URL } from '../config/api';
import { checkoutFetch, purchaseProductChanged, stripeCheckoutUrl } from '../lib/checkout';
import { parsePassCatalog, PassPlan } from '../lib/passCatalog';
import {
  clearRechargeAccessToken,
  getValidRechargeAccessToken,
  PurchaseScope,
  storeRechargeAccessToken,
} from '../lib/rechargeSession';

const scope = 'carpool_pass';

interface PassLocale {
  backLink: string;
  title: string;
  oneTimeBadge: string;
  subtitle: string;
  benefitAdFree: string;
  benefitNoRenewal: string;
  benefitInstant: string;
  selectPassLabel: string;
  recommendedBadge: string;
  checkingLink: string;
  loadingPasses: string;
  loadError: string;
  retry: string;
  noPasses: string;
  sessionError: string;
  checkoutError: string;
  reviewStripeNote: string;
  openingCheckout: string;
  continueToStripe: string;
  paymentMethodsHint: string;
  formatDuration: (months: number) => string;
  numberLocale: string;
}

const localTranslations: Record<Language, PassLocale> = {
  en: {
    backLink: 'SnowPro Home',
    title: 'Carpool ad-free Pass',
    oneTimeBadge: 'One-time',
    subtitle:
      'One-time purchase. No automatic renewal. Activated after payment confirmation; ends on expiry. Includes in-app ad-free features, not ride fares.',
    benefitAdFree: 'Ad-free carpool feed',
    benefitNoRenewal: 'No auto-renewal',
    benefitInstant: 'Instant activation',
    selectPassLabel: 'Select Pass',
    recommendedBadge: 'Recommended',
    checkingLink: 'Checking your purchase link…',
    loadingPasses: 'Loading passes…',
    loadError: 'Unable to load passes. Please retry.',
    retry: 'Retry',
    noPasses: 'No passes are currently available.',
    sessionError: 'Your purchase link is expired or invalid. Please start again in the app.',
    checkoutError: 'Unable to open checkout. Please try again later.',
    reviewStripeNote: 'Review the final amount on Stripe before paying.',
    openingCheckout: 'Opening checkout…',
    continueToStripe: 'Continue to Stripe',
    paymentMethodsHint: 'Secured by Stripe · Credit Card / Apple Pay / Link',
    formatDuration: (months) => (months === 1 ? '1 month' : `${months} months`),
    numberLocale: 'en-US',
  },
  zh: {
    backLink: '返回 SnowPro',
    title: '拼车免广告通行卡',
    oneTimeBadge: '一次性购买',
    subtitle:
      '一次性购买，不自动续费。支付确认后生效；到期自动停止。此通行卡用于应用内免广告功能，不包含拼车车费。',
    benefitAdFree: '拼车版块全程免广告',
    benefitNoRenewal: '到期即止不自动续费',
    benefitInstant: '支付确认后即时生效',
    selectPassLabel: '选择通行卡套餐',
    recommendedBadge: '推荐',
    checkingLink: '正在验证购买链接…',
    loadingPasses: '正在加载套餐…',
    loadError: '套餐加载失败，请重试。',
    retry: '重试',
    noPasses: '暂无可售套餐',
    sessionError: '购买链接已过期或无效，请返回 App 重试。',
    checkoutError: '暂时无法打开支付页面，请稍后重试。',
    reviewStripeNote: '最终应付金额请在 Stripe 支付页确认。',
    openingCheckout: '正在打开支付…',
    continueToStripe: '前往 Stripe 支付',
    paymentMethodsHint: '由 Stripe 提供安全支付 · 支持信用卡 / Apple Pay / 支付宝 / 微信支付',
    formatDuration: (months) => `${months} 个月`,
    numberLocale: 'zh-CN',
  },
  ja: {
    backLink: 'SnowPro ホーム',
    title: '相乗り広告非表示パス',
    oneTimeBadge: '買い切り',
    subtitle:
      '1回限りの購入で自動更新はありません。お支払い確認後に有効化され、期限満了で自動終了します。アプリ内の広告非表示機能のみが含まれ、乗車料金は含まれません。',
    benefitAdFree: '相乗り画面の広告非表示',
    benefitNoRenewal: '自動更新なし',
    benefitInstant: '支払い後すぐ有効化',
    selectPassLabel: 'プランを選択',
    recommendedBadge: 'おすすめ',
    checkingLink: '購入リンクを確認中…',
    loadingPasses: 'プランを読み込み中…',
    loadError: 'プランの読み込みに失敗しました。再試行してください。',
    retry: '再試行',
    noPasses: '現在購入可能なプランはありません。',
    sessionError: '購入リンクの有効期限が切れているか無効です。アプリからやり直してください。',
    checkoutError: '決済ページを開けませんでした。しばらくしてからお試しください。',
    reviewStripeNote: 'お支払い前に Stripe 決済画面で最終金額をご確認ください。',
    openingCheckout: '決済画面を開いています…',
    continueToStripe: 'Stripe で支払う',
    paymentMethodsHint: 'Stripe による安全な決済 · クレジットカード / Apple Pay 対応',
    formatDuration: (months) => `${months} か月`,
    numberLocale: 'ja-JP',
  },
  ko: {
    backLink: 'SnowPro 홈',
    title: '카풀 광고 제거 패스',
    oneTimeBadge: '일회성 구매',
    subtitle:
      '자동 갱신 없는 일회성 구매입니다. 결제 확인 후 즉시 활성화되며 만료 시 자동 종료됩니다. 앱 내 광고 제거 기능만 포함되며 탑승 요금은 포함되지 않습니다.',
    benefitAdFree: '카풀 피드 광고 제거',
    benefitNoRenewal: '자동 갱신 없음',
    benefitInstant: '결제 즉시 활성화',
    selectPassLabel: '패스 선택',
    recommendedBadge: '추천',
    checkingLink: '구매 링크 확인 중…',
    loadingPasses: '패스 불러오는 중…',
    loadError: '패스를 불러오지 못했습니다. 다시 시도해 주세요.',
    retry: '다시 시도',
    noPasses: '현재 구매 가능한 패스가 없습니다.',
    sessionError: '구매 링크가 만료되었거나 유효하지 않습니다. 앱에서 다시 시작해 주세요.',
    checkoutError: '결제 페이지를 열 수 없습니다. 잠시 후 다시 시도해 주세요.',
    reviewStripeNote: '결제 전 Stripe 화면에서 최종 금액을 확인하세요.',
    openingCheckout: '결제 창 여는 중…',
    continueToStripe: 'Stripe로 계속하기',
    paymentMethodsHint: 'Stripe 보안 결제 · 신용카드 / Apple Pay 지원',
    formatDuration: (months) => `${months}개월`,
    numberLocale: 'ko-KR',
  },
  fr: {
    backLink: 'Accueil SnowPro',
    title: 'Pass Covoiturage sans pub',
    oneTimeBadge: 'Achat unique',
    subtitle:
      'Achat unique sans renouvellement automatique. Activé après confirmation du paiement et expire automatiquement. Inclut la suppression des publicités dans l’app, hors frais de trajet.',
    benefitAdFree: 'Covoiturage sans publicité',
    benefitNoRenewal: 'Sans renouvellement auto',
    benefitInstant: 'Activation instantanée',
    selectPassLabel: 'Choisir un pass',
    recommendedBadge: 'Recommandé',
    checkingLink: 'Vérification de votre lien d’achat…',
    loadingPasses: 'Chargement des pass…',
    loadError: 'Impossible de charger les pass. Veuillez réessayer.',
    retry: 'Réessayer',
    noPasses: 'Aucun pass disponible pour le moment.',
    sessionError: 'Votre lien d’achat est expiré ou invalide. Veuillez relancer depuis l’app.',
    checkoutError: 'Impossible d’ouvrir le paiement. Veuillez réessayer plus tard.',
    reviewStripeNote: 'Vérifiez le montant final sur Stripe avant de payer.',
    openingCheckout: 'Ouverture du paiement…',
    continueToStripe: 'Continuer vers Stripe',
    paymentMethodsHint: 'Sécurisé par Stripe · Carte bancaire / Apple Pay / Link',
    formatDuration: (months) => `${months} mois`,
    numberLocale: 'fr-FR',
  },
  de: {
    backLink: 'SnowPro Startseite',
    title: 'Carpool-Werbefrei-Pass',
    oneTimeBadge: 'Einmalkauf',
    subtitle:
      'Einmalkauf ohne automatische Verlängerung. Nach Zahlungsbestätigung aktiv, endet automatisch bei Ablauf. Beinhaltet werbefreie App-Funktionen, keine Fahrtkosten.',
    benefitAdFree: 'Werbefreier Carpool-Bereich',
    benefitNoRenewal: 'Keine Auto-Verlängerung',
    benefitInstant: 'Sofortige Aktivierung',
    selectPassLabel: 'Pass auswählen',
    recommendedBadge: 'Empfohlen',
    checkingLink: 'Kauflink wird überprüft…',
    loadingPasses: 'Pässe werden geladen…',
    loadError: 'Pässe konnten nicht geladen werden. Bitte erneut versuchen.',
    retry: 'Erneut versuchen',
    noPasses: 'Derzeit sind keine Pässe verfügbar.',
    sessionError: 'Ihr Kauflink ist abgelaufen oder ungültig. Bitte starten Sie erneut in der App.',
    checkoutError: 'Checkout konnte nicht geöffnet werden. Bitte später erneut versuchen.',
    reviewStripeNote: 'Prüfen Sie den Endbetrag vor der Zahlung auf Stripe.',
    openingCheckout: 'Checkout wird geöffnet…',
    continueToStripe: 'Weiter zu Stripe',
    paymentMethodsHint: 'Abgesichert durch Stripe · Kreditkarte / Apple Pay / Link',
    formatDuration: (months) => (months === 1 ? '1 Monat' : `${months} Monate`),
    numberLocale: 'de-DE',
  },
  es: {
    backLink: 'Inicio SnowPro',
    title: 'Pase Carpool sin anuncios',
    oneTimeBadge: 'Compra única',
    subtitle:
      'Compra única sin renovación automática. Se activa tras confirmar el pago y finaliza al vencer. Incluye funciones sin anuncios en la app, no incluye tarifas de viaje.',
    benefitAdFree: 'Carpool sin anuncios',
    benefitNoRenewal: 'Sin renovación automática',
    benefitInstant: 'Activación inmediata',
    selectPassLabel: 'Seleccionar pase',
    recommendedBadge: 'Recomendado',
    checkingLink: 'Verificando enlace de compra…',
    loadingPasses: 'Cargando pases…',
    loadError: 'No se pudieron cargar los pases. Inténtalo de nuevo.',
    retry: 'Reintentar',
    noPasses: 'No hay pases disponibles en este momento.',
    sessionError: 'Tu enlace de compra caducó o no es válido. Vuelve a intentarlo desde la app.',
    checkoutError: 'No se pudo abrir el pago. Inténtalo más tarde.',
    reviewStripeNote: 'Revisa el importe final en Stripe antes de pagar.',
    openingCheckout: 'Abriendo pago…',
    continueToStripe: 'Continuar a Stripe',
    paymentMethodsHint: 'Protegido por Stripe · Tarjeta / Apple Pay / Link',
    formatDuration: (months) => (months === 1 ? '1 mes' : `${months} meses`),
    numberLocale: 'es-ES',
  },
  ru: {
    backLink: 'Главная SnowPro',
    title: 'Пропуск Carpool без рекламы',
    oneTimeBadge: 'Разовая покупка',
    subtitle:
      'Разовая покупка без автопродления. Активируется после подтверждения оплаты и завершается по истечении срока. Отключает рекламу в приложении, но не оплачивает поездки.',
    benefitAdFree: 'Carpool без рекламы',
    benefitNoRenewal: 'Без автопродления',
    benefitInstant: 'Мгновенная активация',
    selectPassLabel: 'Выберите пропуск',
    recommendedBadge: 'Рекомендуем',
    checkingLink: 'Проверка ссылки на покупку…',
    loadingPasses: 'Загрузка пропусков…',
    loadError: 'Не удалось загрузить пропуска. Повторите попытку.',
    retry: 'Повторить',
    noPasses: 'Сейчас нет доступных пропусков.',
    sessionError: 'Ссылка на покупку устарела или недействительна. Начните заново в приложении.',
    checkoutError: 'Не удалось открыть оплату. Попробуйте позже.',
    reviewStripeNote: 'Проверьте итоговую сумму на странице Stripe перед оплатой.',
    openingCheckout: 'Открытие оплаты…',
    continueToStripe: 'Перейти к оплате Stripe',
    paymentMethodsHint: 'Безопасная оплата Stripe · Банковская карта / Apple Pay',
    formatDuration: (months) => {
      const mod10 = months % 10;
      const mod100 = months % 100;
      if (mod10 === 1 && mod100 !== 11) return `${months} месяц`;
      if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return `${months} месяца`;
      return `${months} месяцев`;
    },
    numberLocale: 'ru-RU',
  },
};

export default function CarpoolPassPage({
  embedded = false,
  extraScopes,
  onAuthSuccess,
  onAuthRequired,
}: {
  embedded?: boolean;
  extraScopes?: PurchaseScope[];
  onAuthSuccess?: () => void;
  onAuthRequired?: () => void;
} = {}) {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const zh = language === 'zh';
  const tLocal = localTranslations[language] || localTranslations.en;

  const initialized = useRef(false);
  const mounted = useRef(false);
  const checkoutInFlight = useRef(false);

  const [plans, setPlans] = useState<PassPlan[]>([]);
  const [catalogLoading, setCatalogLoading] = useState(true);
  const [catalogError, setCatalogError] = useState(false);
  const [reload, setReload] = useState(0);
  const requestedPlan = useRef(new URLSearchParams(window.location.hash.slice(1)).get('product_id'));

  const [token, setToken] = useState<string | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState('');
  const [error, setError] = useState<'session' | 'checkout' | null>(null);

  useEffect(() => {
    let canceled = false;
    setCatalogLoading(true);
    setCatalogError(false);

    checkoutFetch(`${API_BASE_URL}/v1/carpools/pass/products`)
      .then(async (r) => {
        if (!r.ok) throw new Error('Catalog unavailable');
        const list = parsePassCatalog(await r.json());
        if (!canceled) {
          setPlans(list);
          setSelected((old) =>
            list.some((p) => p.id === old)
              ? old
              : list.find((p) => p.id === requestedPlan.current)?.id ??
                list.find((p) => p.recommended)?.id ??
                list[0]?.id ??
                '',
          );
        }
      })
      .catch(() => {
        if (!canceled) {
          setPlans([]);
          setSelected('');
          setCatalogError(true);
        }
      })
      .finally(() => {
        if (!canceled) setCatalogLoading(false);
      });

    return () => {
      canceled = true;
    };
  }, [reload]);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
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
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ handoff_code: code }),
        });
        if (!response.ok) throw new Error('Handoff unavailable');
        const data = await response.json();
        if (!mounted.current) return;
        const accessToken = data.accessToken || data.access_token;
        if (
          !storeRechargeAccessToken(
            accessToken,
            data.accessTokenExpiresAt || data.access_token_expires_at,
            scope,
          )
        ) {
          throw new Error('Invalid purchase session');
        }
        setToken(accessToken);
      } catch {
        if (mounted.current) {
          clearRechargeAccessToken(scope);
          setToken(null);
          setError('session');
        }
      } finally {
        if (mounted.current) setAuthLoading(false);
      }
    })();
  }, []);

  const checkout = async () => {
    if (authLoading || catalogLoading || !plans.some((p) => p.id === selected) || checkoutInFlight.current) {
      return;
    }
    const confirmedPlan = plans.find((p) => p.id === selected);
    if (!confirmedPlan) return;

    const currentToken = getValidRechargeAccessToken(scope);
    if (!currentToken || currentToken !== token) {
      setToken(null);
      setError('session');
      onAuthRequired?.();
      return;
    }

    checkoutInFlight.current = true;
    setLoading(true);
    setError(null);
    let redirecting = false;

    try {
      const response = await checkoutFetch(`${API_BASE_URL}/v1/carpools/pass/checkout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${currentToken}`,
        },
        body: JSON.stringify({
          product_id: confirmedPlan.id,
          expected_duration_months: confirmedPlan.months,
          expected_price_in_cents: String(confirmedPlan.cents),
          expected_product_version: confirmedPlan.version,
        }),
      });

      if (!mounted.current || getValidRechargeAccessToken(scope) !== currentToken) return;
      if (response.status === 401) {
        clearRechargeAccessToken(scope);
        setToken(null);
        setError('session');
        onAuthRequired?.();
        return;
      }

      if (!response.ok) {
        const failure = await response.json();
        if (!mounted.current || getValidRechargeAccessToken(scope) !== currentToken) return;
        if (purchaseProductChanged(failure)) {
          setPlans([]);
          setSelected('');
          setCatalogError(true);
        }
        throw new Error('Checkout unavailable');
      }

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

  const formatPrice = (cents: number) =>
    new Intl.NumberFormat(tLocal.numberLocale, {
      style: 'currency',
      currency: 'USD',
    }).format(cents / 100);

  const body = (
    <section
      className={
        embedded
          ? 'max-w-lg w-full mx-auto space-y-4 sm:space-y-5'
          : 'max-w-lg w-full mx-auto pt-6 sm:pt-10 pb-12 sm:pb-16 space-y-4 sm:space-y-5'
      }
    >
      {!embedded && (
        <button
          type="button"
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-sky-400 hover:text-sky-300 transition-colors cursor-pointer touch-manipulation py-1"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>{tLocal.backLink}</span>
        </button>
      )}

      {/* Pass Overview Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 right-0 w-36 h-36 bg-gradient-to-br from-sky-500/15 to-cyan-400/5 rounded-full blur-2xl -mr-10 -mt-10"
        />
        <div className="relative flex items-center gap-3">
          <div className="h-10 w-10 sm:h-12 sm:w-12 shrink-0 rounded-xl sm:rounded-2xl bg-sky-500/10 border border-sky-500/25 flex items-center justify-center text-sky-400">
            <Ticket className="h-5 w-5 sm:h-6 sm:w-6" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-lg sm:text-2xl font-bold tracking-tight text-white">
                {tLocal.title}
              </h1>
              <span className="inline-flex items-center rounded-full bg-emerald-500/10 border border-emerald-500/25 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-300">
                {tLocal.oneTimeBadge}
              </span>
            </div>
          </div>
        </div>

        <p className="relative text-xs sm:text-sm leading-relaxed text-slate-300 mt-3">
          {tLocal.subtitle}
        </p>

        <div className="relative mt-3.5 pt-3.5 border-t border-slate-800/80 flex flex-wrap gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-slate-300">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/60 border border-slate-800/80 px-2.5 py-1">
            <Sparkles className="h-3.5 w-3.5 shrink-0 text-sky-400" />
            <span>{tLocal.benefitAdFree}</span>
          </div>
          <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/60 border border-slate-800/80 px-2.5 py-1">
            <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-emerald-400" />
            <span>{tLocal.benefitNoRenewal}</span>
          </div>
          <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/60 border border-slate-800/80 px-2.5 py-1">
            <Zap className="h-3.5 w-3.5 shrink-0 text-amber-400" />
            <span>{tLocal.benefitInstant}</span>
          </div>
        </div>
      </div>

      {/* Authentication Prompt when unauthenticated on standalone /carpool-pass */}
      {authLoading && (
        <div
          role="status"
          className="bg-slate-900 border border-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-5 flex items-center justify-center gap-3 text-sm text-slate-300"
        >
          <Loader2 className="h-4 w-4 animate-spin text-sky-400" />
          <span>{tLocal.checkingLink}</span>
        </div>
      )}

      {!authLoading && !token && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl">
          <PurchaseLogin
            scope={scope}
            extraScopes={extraScopes}
            zh={zh}
            onSuccess={(data) => {
              setToken(data.accessToken || data.access_token);
              setError(null);
              onAuthSuccess?.();
            }}
          />
        </div>
      )}

      {/* Plan Selection & Checkout Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl space-y-4 sm:space-y-5">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400">
            {tLocal.selectPassLabel}
          </h2>
        </div>

        {error && (
          <div
            role="alert"
            className="bg-red-500/10 border border-red-500/25 text-red-300 p-3.5 sm:p-4 rounded-2xl text-xs sm:text-sm flex items-start gap-2.5"
          >
            <ShieldCheck className="h-5 w-5 shrink-0 text-red-400 mt-0.5" />
            <span>{error === 'session' ? tLocal.sessionError : tLocal.checkoutError}</span>
          </div>
        )}

        {catalogLoading && (
          <div
            role="status"
            className="rounded-2xl border border-slate-800 bg-slate-950/45 p-5 flex items-center justify-center gap-3 text-sm text-slate-400"
          >
            <Loader2 className="h-4 w-4 animate-spin text-sky-400" />
            <span>{tLocal.loadingPasses}</span>
          </div>
        )}

        {catalogError && (
          <div
            role="alert"
            className="rounded-2xl border border-red-500/25 bg-red-500/10 p-3.5 sm:p-4 flex items-center justify-between gap-3 text-xs sm:text-sm text-red-300"
          >
            <span>{tLocal.loadError}</span>
            <button
              type="button"
              onClick={() => setReload((n) => n + 1)}
              className="shrink-0 min-h-[36px] rounded-xl bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 px-3 py-1.5 text-xs font-semibold text-red-200 transition-colors cursor-pointer touch-manipulation"
            >
              {tLocal.retry}
            </button>
          </div>
        )}

        {!catalogLoading && !catalogError && plans.length === 0 && (
          <p className="rounded-2xl border border-slate-800 bg-slate-950/45 p-5 text-center text-sm text-slate-400">
            {tLocal.noPasses}
          </p>
        )}

        {plans.length > 0 && (
          <div className="space-y-3">
            {plans.map((plan) => {
              const isSelected = selected === plan.id;
              return (
                <label
                  key={plan.id}
                  className={`group relative min-h-[68px] flex items-center justify-between gap-3 sm:gap-4 rounded-2xl border-2 p-3.5 sm:p-5 transition-all touch-manipulation active:scale-[0.99] ${
                    loading ? 'cursor-not-allowed opacity-75' : 'cursor-pointer'
                  } ${
                    isSelected
                      ? 'border-sky-500 bg-sky-500/10 shadow-lg shadow-sky-500/10'
                      : 'border-slate-800 bg-slate-950/50 hover:border-slate-700 hover:bg-slate-950/75'
                  }`}
                >
                  <input
                    type="radio"
                    className="sr-only"
                    name="pass-plan"
                    value={plan.id}
                    checked={isSelected}
                    onChange={() => setSelected(plan.id)}
                    disabled={loading}
                  />

                  <div className="flex items-start gap-3 min-w-0">
                    <span
                      aria-hidden="true"
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                        isSelected
                          ? 'border-sky-400 bg-sky-500 text-slate-950'
                          : 'border-slate-600 bg-slate-900 group-hover:border-slate-500'
                      }`}
                    >
                      {isSelected && <Check className="h-3 w-3 stroke-[3]" />}
                    </span>

                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                        <span className="font-bold text-white text-sm sm:text-base leading-snug">
                          {plan.title}
                        </span>
                        {plan.recommended && (
                          <span className="inline-flex items-center rounded-full bg-sky-500/15 border border-sky-400/30 px-2 py-0.5 text-[11px] font-semibold text-sky-300">
                            {tLocal.recommendedBadge}
                          </span>
                        )}
                      </div>

                      <div className="mt-1.5 flex flex-wrap items-center gap-2 text-xs text-slate-400">
                        <span className="inline-flex items-center rounded-lg bg-slate-800/90 border border-slate-700/70 px-2 py-0.5 font-medium text-slate-300">
                          {tLocal.formatDuration(plan.months)}
                        </span>
                        {plan.description && (
                          <span className="text-slate-400">{plan.description}</span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="shrink-0 text-right">
                    <div className="text-lg sm:text-xl font-black tracking-tight text-white tabular-nums">
                      {formatPrice(plan.cents)}
                    </div>
                  </div>
                </label>
              );
            })}
          </div>
        )}

        <div className="rounded-2xl bg-slate-950/60 border border-slate-800/80 p-3.5 sm:p-4 space-y-2">
          <p className="text-xs font-medium text-slate-300">{tLocal.reviewStripeNote}</p>
          <RefundNotice
            zh={zh}
            language={language}
            className="text-xs leading-5 text-slate-400"
          />
        </div>

        <button
          type="button"
          disabled={authLoading || !token || loading || catalogLoading || !selected || catalogError}
          onClick={checkout}
          className="w-full min-h-[52px] bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-3.5 sm:py-4 rounded-2xl hover:shadow-lg hover:shadow-blue-500/25 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer touch-manipulation"
        >
          {loading ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              <span>{tLocal.openingCheckout}</span>
            </>
          ) : (
            <>
              <CreditCard className="h-5 w-5" />
              <span>{tLocal.continueToStripe}</span>
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>

        <div className="text-center text-[11px] sm:text-xs text-slate-500 font-medium">
          {tLocal.paymentMethodsHint}
        </div>
      </div>
    </section>
  );

  if (embedded) return body;

  return (
    <main className="min-h-screen min-h-[100dvh] bg-gradient-to-b from-slate-950 to-slate-900 text-slate-100 px-3 sm:px-4 selection:bg-sky-500 selection:text-slate-950">
      {body}
    </main>
  );
}
