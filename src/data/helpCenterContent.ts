export type HelpCategoryId =
  | 'video-analysis'
  | 'courses'
  | 'coins-billing'
  | 'instructors'
  | 'carpool-buddy'
  | 'account-safety';

export interface HelpActionLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface HelpTableData {
  ariaLabel: string;
  headers: [string, string, string, string];
  rows: [string, string, string, string][];
}

export interface HelpFaqItem {
  id: string;
  question: string;
  paragraphs: string[];
  bullets?: string[];
  table?: HelpTableData;
  note?: string;
  links?: HelpActionLink[];
  keywords?: string[];
}

export interface HelpCategory {
  id: HelpCategoryId;
  shortLabel: string;
  title: string;
  description: string;
  items: HelpFaqItem[];
}

export interface HelpQuickAction {
  id: 'store' | 'refunds' | 'deletion' | 'safety';
  title: string;
  description: string;
  href: string;
  external?: boolean;
}

export interface HelpCenterLocaleContent {
  lang: string;
  headerTitle: string;
  navStore: string;
  navHome: string;
  navContact: string;
  badge: string;
  heroTitle: string;
  heroSubtitle: string;
  searchPlaceholder: string;
  searchAriaLabel: string;
  clearSearchLabel: string;
  allTopicsLabel: string;
  expandAllLabel: string;
  collapseAllLabel: string;
  searchResultsLabel: (count: number, query: string) => string;
  emptySearchTitle: string;
  emptySearchBody: string;
  quickActionsTitle: string;
  quickActions: HelpQuickAction[];
  categories: HelpCategory[];
  contactCard: {
    title: string;
    description: string;
    checklistTitle: string;
    checklist: string[];
    emailButtonLabel: string;
    emailAddress: string;
    emergencyNotice: string;
  };
  legalLinksTitle: string;
  legalLinks: HelpActionLink[];
  operatorNotice: string;
}

const enHelpCenter: HelpCenterLocaleContent = {
  lang: 'en',
  headerTitle: 'Snow Pro Help Center',
  navStore: 'Store',
  navHome: 'Back to Home',
  navContact: 'Contact Support',
  badge: 'Official Support & Product Guide',
  heroTitle: 'How can we help you on and off the mountain?',
  heroSubtitle:
    'Find clear answers on 1-on-1 Video Analysis, Video Courses, Snow Coins & refunds, Instructor verification & USD payouts, Resort Carpool, Ski Buddy, and account safety.',
  searchPlaceholder: 'Search topics (e.g., escrow, Resting, refund, LV0, Stripe, delete account)...',
  searchAriaLabel: 'Search help articles',
  clearSearchLabel: 'Clear search',
  allTopicsLabel: 'All Topics',
  expandAllLabel: 'Expand all',
  collapseAllLabel: 'Collapse all',
  searchResultsLabel: (count, query) =>
    `${count} ${count === 1 ? 'article' : 'articles'} matching "${query}"`,
  emptySearchTitle: 'No matching help articles found',
  emptySearchBody:
    'Try a broader keyword such as "refund", "escrow", "Stripe", "carpool", or email our support team directly.',
  quickActionsTitle: 'Self-Service Shortcuts',
  quickActions: [
    {
      id: 'store',
      title: 'Snow Coins & Web Store',
      description: 'Top up Snow Coins or manage web passes for your SnowPro account.',
      href: '/store',
    },
    {
      id: 'refunds',
      title: 'Refunds & Consumer Rights',
      description: 'Review eligibility rules or submit a purchase cancellation / refund request.',
      href: '/refunds',
    },
    {
      id: 'deletion',
      title: 'Delete Account & Data',
      description: 'Delete from the app with a 7-day recovery window or submit a web request.',
      href: '/account-deletion.html',
      external: true,
    },
    {
      id: 'safety',
      title: 'Community & Child Safety',
      description: 'Reporting tools, user blocking, and zero-tolerance child safety standards.',
      href: '/community-guidelines.html',
      external: true,
    },
  ],
  categories: [
    {
      id: 'video-analysis',
      shortLabel: 'Video Analysis',
      title: '1-on-1 Video Analysis',
      description:
        'How personalized ski and snowboard video reviews, escrow timers, follow-up limits, and order guarantees work.',
      items: [
        {
          id: 'va-how-it-works',
          question: 'How does 1-on-1 Video Analysis work?',
          paragraphs: [
            'Browse verified Ski and Snowboard instructors in the app, filter by discipline, certification, resort, or spoken language, and open an instructor profile to check their per-review rate and maximum follow-up question limit.',
            'Upload your skiing or snowboarding clip along with a short note describing your current level and what you want to improve. Your Snow Coins are held in platform escrow while the instructor reviews your footage frame-by-frame with on-screen keyframe drawings, voice commentary, and written takeaways.',
          ],
          keywords: ['book', 'upload', 'clip', 'keyframe', 'drawing', 'voice', 'lesson'],
        },
        {
          id: 'va-resting-status',
          question: 'Why does an instructor show as "Resting"?',
          paragraphs: [
            'Instructors control their own schedule using the Accepting Orders switch in Instructor Center. When an instructor pauses incoming orders—or has not set an active booking rate—their profile and booking button show as "Resting".',
            'While an instructor is Resting, new booking requests are paused so your Snow Coins are never tied up waiting on an unavailable instructor. You can check back later or book another active instructor.',
          ],
          keywords: ['resting', 'unavailable', 'paused', 'grey button', 'accepting orders'],
        },
        {
          id: 'va-escrow-timers',
          question: 'What are the response and delivery time limits (Escrow Protection)?',
          paragraphs: [
            'Every 1-on-1 Video Analysis order is protected by automatic escrow timers so students never lose Snow Coins on unanswered requests:',
          ],
          bullets: [
            'Cancel before acceptance: While your request is still waiting for the instructor to accept, you can cancel anytime in Lesson Detail for an instant 100% Snow Coin refund.',
            '7-day acceptance window: Instructors have 7 days to accept or decline a new request. If there is no response within 7 days, the system automatically cancels the order and refunds 100% of your Snow Coins.',
            '7-day delivery window: Once accepted, the instructor has 7 days to deliver your video analysis and tap "Finish Lesson". If not delivered in time, the order automatically cancels with a full escrow refund.',
          ],
          keywords: ['escrow', '7 days', 'expired', 'cancel', 'refund', 'timeout', 'timer'],
        },
        {
          id: 'va-follow-ups',
          question: 'How do student follow-up questions work?',
          paragraphs: [
            'Each instructor configures a maximum number of follow-up questions per order (displayed before booking and tracked in Lesson Detail, such as 2/2 remaining).',
            'Use your follow-up quota to ask targeted questions about the posture cues, edge angles, or drills mentioned in your analysis before the lesson is finalized.',
          ],
          keywords: ['follow-up', 'questions', 'counter', 'q&a', 'limit'],
        },
        {
          id: 'va-completion-dispute',
          question: 'How do order completion, ratings, and dispute arbitration work?',
          paragraphs: [
            'Once the instructor delivers feedback and taps "Finish Lesson", a 3-day student review window begins:',
          ],
          bullets: [
            'Confirm & rate: If you are satisfied, confirm completion and leave a rating and review to help other riders.',
            'Automatic completion after 3 days: If no dispute is submitted within 3 days, the system automatically marks the order complete and releases settlement to the instructor.',
            'Dispute / arbitration: If the delivered review fails to analyze your submitted video or violates platform rules, submit an appeal inside Lesson Detail within those 3 days. Payout is frozen immediately while SnowPro support audits the lesson record and resolves either a full student refund or instructor release.',
          ],
          keywords: ['3 days', 'auto-complete', 'dispute', 'appeal', 'arbitration', 'rating'],
        },
      ],
    },
    {
      id: 'courses',
      shortLabel: 'Video Courses',
      title: 'Video Courses',
      description:
        'Structured multi-episode ski and snowboard technique series created by verified instructors.',
      items: [
        {
          id: 'courses-vs-analysis',
          question: 'How are Video Courses different from 1-on-1 Video Analysis?',
          paragraphs: [
            '1-on-1 Video Analysis provides personalized frame-by-frame drawings and voice commentary on your own footage. Video Courses are pre-recorded, structured multi-part curriculum series published by verified instructors—covering progressions from first turns to carving, moguls, freestyle, and certification preparation.',
          ],
          keywords: ['series', 'curriculum', 'difference', 'learn'],
        },
        {
          id: 'courses-preview-access',
          question: 'Can I preview a course before unlocking, and does access expire?',
          paragraphs: [
            'Yes. Course pages show the full syllabus, discipline (Ski or Snowboard), target skill level, spoken language, and free preview clips where provided by the instructor.',
            'Unlocking a course with Snow Coins is a one-time purchase (never an auto-renewing subscription) and grants ongoing on-demand playback under your SnowPro account.',
          ],
          keywords: ['preview', 'unlock', 'lifetime', 'subscription', 'watch'],
        },
        {
          id: 'courses-qa',
          question: 'Can I ask questions or rate an unlocked Video Course?',
          paragraphs: [
            'Yes. Students who unlock a course can rate lessons, like helpful episodes, and post questions in the course Q&A section so instructors can clarify common technique checkpoints.',
          ],
          keywords: ['comments', 'course q&a', 'likes', 'reviews'],
        },
      ],
    },
    {
      id: 'coins-billing',
      shortLabel: 'Snow Coins & Refunds',
      title: 'Snow Coins, Purchases & Refunds',
      description:
        'Buying Snow Coins, store pricing differences, missing top-up recovery, and refund channels.',
      items: [
        {
          id: 'coins-overview',
          question: 'What are Snow Coins and where can I buy them?',
          paragraphs: [
            'Snow Coins are SnowPro’s virtual tokens used inside the app to book 1-on-1 Video Analysis and unlock Video Courses.',
            'You can top up Snow Coin packs through In-App Purchase (Apple App Store or Google Play) or via the official web Snow Pro Store where supported. Purchased Snow Coins are for in-app services only and cannot be withdrawn, transferred between accounts, or exchanged for cash.',
          ],
          links: [
            { label: 'Open Snow Pro Store', href: '/store' },
            { label: 'SnowCoin Purchase & Usage Policy', href: '/terms' },
          ],
          keywords: ['wallet', 'recharge', 'top up', 'tokens', 'buy'],
        },
        {
          id: 'coins-pricing-rate',
          question: 'Why do Snow Coin pack prices vary across stores and payment channels?',
          paragraphs: [
            'Student purchase prices for Snow Coin packs may differ between Apple App Store, Google Play, and web checkout due to regional taxes, local currency conversion, and app-store payment processing fees.',
            'Separately, on the instructor earnings side, 1 Earned Snow Coin = $1.00 USD in gross instructor revenue (before the standard platform service fee) whenever a lesson or course settles.',
          ],
          keywords: ['exchange rate', 'price difference', 'apple', 'google play', 'stripe', 'usd'],
        },
        {
          id: 'coins-missing-topup',
          question: 'What should I do if my Snow Coins do not appear right after payment?',
          paragraphs: [
            'Top-ups normally credit within a few seconds. If your connection dropped during payment, follow these steps before purchasing again:',
          ],
          bullets: [
            'App Store / Google Play purchases: Force-close and reopen the SnowPro app, then open Account -> Wallet so pending store receipts synchronize automatically.',
            'Web Store (Stripe) purchases: Revisit /store in the same browser while signed in to trigger automatic pending Stripe session recovery.',
            'Still missing after 10 minutes: Email snowpro-support@googuar.com with your SnowPro account email, purchase channel, timestamp, and order/receipt ID (never send passwords or full card numbers).',
          ],
          links: [{ label: 'Visit Web Store Recovery', href: '/store' }],
          keywords: ['missing coins', 'not received', 'pending', 'stripe recovery', 'receipt'],
        },
        {
          id: 'coins-refund-policy',
          question: 'How do I request a refund for Snow Coins or a Carpool Pass?',
          paragraphs: [
            'Snow Coin packs and fixed-term Carpool Passes are one-time purchases without automatic renewal. Your statutory consumer rights remain unaffected.',
          ],
          bullets: [
            'Apple App Store purchases: Apple manages App Store billing refunds directly. Submit a request through reportaproblem.apple.com.',
            'Google Play & Web Store purchases: Submit a request on our Refunds & Consumer Rights page or email snowpro-support@googuar.com with your account email and order details.',
            'Consumed vs. unused balance: Snow Coins already spent on completed lessons or unlocked courses are non-refundable unless an order is cancelled or resolved in your favor through dispute arbitration.',
          ],
          links: [{ label: 'Refunds & Consumer Rights', href: '/refunds' }],
          keywords: ['refund', 'cancel purchase', 'withdrawal right', 'chargeback', 'apple refund'],
        },
      ],
    },
    {
      id: 'instructors',
      shortLabel: 'For Instructors',
      title: 'For Instructors: Verification, Standard Fees & USD Payouts',
      description:
        'Certification review, autonomous pricing & Resting controls, standard LV0–LV4 fee tiers, and Stripe / PayPal payouts.',
      items: [
        {
          id: 'inst-verification',
          question: 'How do I apply to become a verified Instructor?',
          paragraphs: [
            'Open Account -> Apply to Become an Instructor in the SnowPro app. Select your teaching discipline(s) (Ski, Snowboard, or both), upload your valid national or international certification credentials (such as CSIA, CASI, PSIA-AASI, BASI, NZSIA, APSI, SAJ, JSBA, or equivalent recognized bodies), and complete your teaching profile.',
            'Once our review team verifies your credentials, Instructor Center unlocks immediately so you can set your rate, accept 1-on-1 video orders, and publish Video Courses.',
          ],
          keywords: ['apply', 'certification', 'csia', 'casi', 'psia', 'basi', 'verify'],
        },
        {
          id: 'inst-autonomy',
          question: 'How do custom pricing, Accepting Orders, and Finish Lesson work?',
          paragraphs: [
            'SnowPro is built around instructor autonomy and clear boundaries:',
          ],
          bullets: [
            'Set Your Own Price: Choose your own Snow Coin price for 1-on-1 Video Analysis and Video Courses—never dictated by the platform.',
            'Accepting Orders Switch: Toggle Accepting Orders off whenever you are teaching on-mountain, traveling, or resting. Your public profile switches to "Resting" so no unscheduled requests queue up.',
            'Follow-up Cap & Finish Lesson: Define the max follow-up questions per order and tap "Finish Lesson" yourself once your video review and Q&A are complete.',
          ],
          keywords: ['set price', 'toggle', 'resting', 'finish lesson', 'workflow'],
        },
        {
          id: 'inst-standard-fees',
          question: 'What are the standard platform service fees and Instructor Levels (LV0–LV4)?',
          paragraphs: [
            'SnowPro applies a transparent standard platform service fee determined by your Instructor Level (LV0–LV4). Separate standard fee rates apply to 1-on-1 Video Analysis (20% down to 12%) and Video Courses (30% down to 20%):',
          ],
          table: {
            ariaLabel: 'Standard Instructor Level & Platform Fee Table',
            headers: [
              'Instructor Level',
              'Contribution Points',
              '1-on-1 Video Analysis Fee',
              'Video Course Fee',
            ],
            rows: [
              ['LV0 (Rising Star)', '0 – 199 pts', '20% (keep 80%)', '30% (keep 70%)'],
              ['LV1 (Active Instructor)', '200 – 999 pts', '18% (keep 82%)', '28% (keep 72%)'],
              ['LV2 (Outstanding Instructor)', '1,000 – 3,999 pts', '16% (keep 84%)', '25% (keep 75%)'],
              ['LV3 (Elite Instructor)', '4,000 – 9,999 pts', '14% (keep 86%)', '22% (keep 78%)'],
              ['LV4 (Senior Mentor)', '10,000+ pts', '12% (keep 88%)', '20% (keep 80%)'],
            ],
          },
          note: 'Each order snapshots your applicable level fee rate at purchase/booking time so historical settlements remain exact and auditable.',
          keywords: ['commission', 'fee', 'lv0', 'lv1', 'lv2', 'lv3', 'lv4', 'percentage', '12%', '20%', '30%'],
        },
        {
          id: 'inst-contribution-points',
          question: 'How do I earn Contribution Points to unlock lower fees?',
          paragraphs: [
            'Contribution Points accumulate automatically from your teaching activity and verified instructor referrals:',
          ],
          bullets: [
            'Completed 1-on-1 Video Analysis: +1 pt per Snow Coin settled.',
            'Video Course Sales: +1 pt per Snow Coin settled.',
            'Verified Instructor Referral: +50 pts when a new instructor registers with your referral code and completes their first lesson.',
          ],
          note: 'You can check your live point balance, level progress bar, and full Contribution Points History anytime in Instructor Center.',
          keywords: ['points', 'level up', 'referral', '+50 pts', '+1 pt', 'upgrade'],
        },
        {
          id: 'inst-usd-payouts',
          question: 'How do USD earnings and Stripe / PayPal payouts work?',
          paragraphs: [
            'Every 1 Earned Snow Coin from a completed lesson or course equals $1.00 USD in gross revenue before your standard platform service fee. Net earnings settle in USD into your Earnings Hub balance once an order is confirmed by the student or auto-completes 3 days after "Finish Lesson".',
          ],
          bullets: [
            'Supported payout channels: Link Stripe Connect (recommended for US/CA tax residents with automated tax reporting) or PayPal inside Earnings Hub -> Payout Method.',
            'Identity & security verification: Complete Stripe / PayPal onboarding and account security verification before submitting a withdrawal request.',
            'Request & cancellation rules: Pending payout requests freeze the requested USD amount and enter the payout review queue. You can cancel a pending request in Earnings Hub before processing starts; once processing begins, funds transfer directly to your linked payout account (applicable third-party PayPal transfer fees, if any, are shown before confirmation).',
          ],
          keywords: ['payout', 'withdraw', 'stripe', 'Stripe Connect', 'PayPal', 'earnings hub', 'usd', 'tax'],
        },
      ],
    },
    {
      id: 'carpool-buddy',
      shortLabel: 'Carpool & Ski Buddy',
      title: 'Resort Carpool & Ski Buddy',
      description:
        'Sharing rides to the mountain, matching ski buddies by travel dates and skill level, and trip safety guidelines.',
      items: [
        {
          id: 'cb-how-it-works',
          question: 'How do Resort Carpool and Ski Buddy work?',
          paragraphs: [
            'Resort Carpool connects drivers who have open seats with riders heading to the same ski resort. Posts include One Way or Round Trip schedules, open seat count, ski/snowboard gear storage (in-car vs. roof rack/box), pickup map preview, recent resort weather, and transparent cost-sharing notes.',
            'Ski Buddy helps you find fellow skiers or snowboarders at your target mountain across single-day or multi-day trip windows, filtered by discipline, skill level, and riding tags (such as filming clips, carving practice, or casual laps).',
          ],
          keywords: ['rideshare', 'trip', 'seats', 'gear space', 'roof rack', 'buddy', 'resort'],
        },
        {
          id: 'cb-cost-and-pass',
          question: 'Is it free to post or join a Resort Carpool or Ski Buddy trip?',
          paragraphs: [
            'Browsing and posting Ski Buddy trips and Resort Carpools is free during open community access (if optional fixed-term Carpool Passes are offered in select regions, clear terms are displayed upfront with zero auto-renewal).',
            'SnowPro is a community matching platform, not a commercial transportation provider. Any fuel, toll, or parking cost-split listed on a carpool post is coordinated directly between driver and passengers.',
          ],
          keywords: ['free', 'carpool pass', 'fuel split', 'cost'],
        },
        {
          id: 'cb-chat-and-deposit',
          question: 'How do trip approval, coordination chat, and cancellations work?',
          paragraphs: [
            'Tap Join / Apply on a trip post to send a request to the host. Once approved, trip chat and one-tap pickup map navigation unlock so everyone can confirm timing and gear fit.',
            'If your schedule changes, withdraw your application promptly so another rider can take the seat. If a host enables an optional break-contract deposit on a carpool post, carefully review the displayed deposit amount and cancellation rules before joining.',
          ],
          keywords: ['group chat', 'pickup map', 'withdraw', 'deposit', 'approve'],
        },
        {
          id: 'cb-safety-tips',
          question: 'What safety practices should I follow for carpools and mountain meetups?',
          paragraphs: [
            'Keep all pre-trip communication inside SnowPro chat, confirm vehicle details, winter tires/chains, and gear space ahead of departure, and meet at well-lit public pickup points.',
            'SnowPro accounts are for adults (age of majority). Never arrange unsupervised contact with minors, never share passwords or sensitive banking credentials, and use the in-app Report or Block controls immediately if anyone violates community rules.',
          ],
          links: [{ label: 'Community & Child Safety Standards', href: '/community-guidelines.html', external: true }],
          keywords: ['safety', 'report', 'block', 'winter driving', 'meetup'],
        },
      ],
    },
    {
      id: 'account-safety',
      shortLabel: 'Account & Safety',
      title: 'Account, Privacy & Community Safety',
      description:
        'Sign-in options, profile settings, staged account & data deletion, content moderation, and official legal policies.',
      items: [
        {
          id: 'acc-login-profile',
          question: 'How do I sign in, reset my password, or update my profile?',
          paragraphs: [
            'SnowPro supports Email + Password login, Sign in with Apple, and Google Sign-In. If you forget your password, tap "Forgot Password" on the sign-in screen to verify via email code and set a new password.',
            'To update your display name, avatar, bio, spoken languages, or home resort, open Account -> Edit Profile & Security inside the app.',
          ],
          keywords: ['login', 'password', 'apple sign in', 'google sign in', 'profile', 'language'],
        },
        {
          id: 'acc-delete-account',
          question: 'How do I delete my SnowPro account and associated personal data?',
          paragraphs: [
            'Logging out or uninstalling the app does not delete your account. You can request full account and personal data deletion either in-app or on the web without reinstalling the app:',
          ],
          bullets: [
            'In the app: Go to Account -> Edit Profile & Security -> Delete Account and complete the email verification step to confirm. Access is deactivated immediately and a 7-day recovery period begins—signing in and confirming restoration within 7 days cancels deletion.',
            'Without the app (Web): Visit our Account & Data Deletion page or email snowpro-support@googuar.com with subject "Delete my SnowPro account" and your account email or SnowPro ID.',
            'Staged cleanup & legal retention: After the recovery window, scheduled cleanup removes profile, credentials, device tokens, and associated personal data, while retaining only records strictly required for tax/payout accounting, fraud prevention, dispute resolution, or legal obligations as detailed in our Privacy Policy.',
          ],
          links: [
            { label: 'Request Account & Data Deletion', href: '/account-deletion.html', external: true },
            { label: 'Privacy Policy', href: '/privacy.html', external: true },
          ],
          keywords: ['delete account', 'erase data', '7-day recovery period', 'gdpr', 'privacy', 'deactivate'],
        },
        {
          id: 'acc-report-csae',
          question: 'How do I block a user or report abuse / child safety violations?',
          paragraphs: [
            'Every user profile, lesson, course, carpool post, ski-buddy post, and chat thread includes built-in Report and Block controls. Our moderation team reviews reports and removes violating content or suspends offending accounts.',
            'SnowPro enforces strict zero tolerance against Child Sexual Abuse and Exploitation (CSAE) and Child Sexual Abuse Material (CSAM). To submit a child-safety report by email, write to snowpro-support@googuar.com with subject "SnowPro child safety" and include the relevant user/content identifier—never download, forward, or attach suspected illegal imagery.',
          ],
          links: [{ label: 'Read Community & Child Safety Standards', href: '/community-guidelines.html', external: true }],
          keywords: ['report', 'block', 'harassment', 'csae', 'csam', 'child safety', 'moderation'],
        },
        {
          id: 'acc-legal-operator',
          question: 'Who operates SnowPro and where are the official legal terms?',
          paragraphs: [
            'SnowPro is operated by Googuar Technology Inc. All official legal notices, consumer refund rules, privacy disclosures, and safety standards are publicly accessible below at any time without logging in.',
          ],
          links: [
            { label: 'Privacy Policy', href: '/privacy.html', external: true },
            { label: 'Terms of Service', href: '/terms-of-service.html', external: true },
            { label: 'Refunds & Consumer Rights', href: '/refunds' },
            { label: 'SnowCoin Token Policy', href: '/terms' },
            { label: 'Community & Child Safety Standards', href: '/community-guidelines.html', external: true },
            { label: 'Account & Data Deletion', href: '/account-deletion.html', external: true },
          ],
          keywords: ['googuar', 'terms', 'legal', 'operator', 'company', 'contact'],
        },
      ],
    },
  ],
  contactCard: {
    title: 'Still need help? Contact SnowPro Support',
    description:
      'Our support team assists with order disputes, missing top-ups, instructor verification, payout onboarding, privacy requests, and content safety reports.',
    checklistTitle: 'To help us resolve your issue faster, include:',
    checklist: [
      'Your SnowPro account email or SnowPro ID (including Apple Hide My Email relay address if applicable)',
      'Relevant Lesson ID, Course title, or Order / Receipt number',
      'A brief description or screenshot of what happened (never send passwords, login codes, or full card numbers)',
    ],
    emailButtonLabel: 'Email snowpro-support@googuar.com',
    emailAddress: 'snowpro-support@googuar.com',
    emergencyNotice:
      'Note: Support email is not an emergency service. If anyone is in immediate physical danger on the mountain or road, contact local emergency services / ski patrol first.',
  },
  legalLinksTitle: 'Policies & Compliance Documents',
  legalLinks: [
    { label: 'Privacy Policy', href: '/privacy.html', external: true },
    { label: 'Terms of Service', href: '/terms-of-service.html', external: true },
    { label: 'Purchases & Refund Policy', href: '/refunds' },
    { label: 'SnowCoin Usage Policy', href: '/terms' },
    { label: 'Request Account & Data Deletion', href: '/account-deletion.html', external: true },
    { label: 'Reporting & Child Safety Standards', href: '/community-guidelines.html', external: true },
  ],
  operatorNotice: 'Operated by Googuar Technology Inc.',
};

export const helpCenterLocales: Record<string, HelpCenterLocaleContent> = {
  en: enHelpCenter,
};

export function resolveHelpCenterContent(
  requestedLang?: string | null,
  fallbackLang?: string | null,
): HelpCenterLocaleContent {
  const normalizedRequested = requestedLang?.trim().toLowerCase().split('-')[0] ?? '';
  if (normalizedRequested && Object.prototype.hasOwnProperty.call(helpCenterLocales, normalizedRequested)) {
    return helpCenterLocales[normalizedRequested];
  }

  const normalizedFallback = fallbackLang?.trim().toLowerCase().split('-')[0] ?? '';
  if (normalizedFallback && Object.prototype.hasOwnProperty.call(helpCenterLocales, normalizedFallback)) {
    return helpCenterLocales[normalizedFallback];
  }

  return helpCenterLocales.en;
}
