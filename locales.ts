export type Language = 'zh' | 'en' | 'ja' | 'ko' | 'fr' | 'de' | 'es' | 'ru';

export interface VideoTabLocale {
  id: 'earn' | 'annotate' | 'control' | 'autonomy';
  label: string;
  title: string;
  desc: string;
  bullets: string[];
  caption: string;
}

export interface CarpoolTabLocale {
  id: 'list' | 'detail' | 'map';
  label: string;
  title: string;
  desc: string;
  caption: string;
}

export interface LocaleContent {
  nav: {
    video: string;
    courses: string;
    carpool: string;
    skibuddy: string;
    roadmap: string;
    recharge: string;
    appDownload: string;
  };
  hero: {
    badge: string;
    titlePre: string;
    titleHighlight: string;
    subtitle: string;
    founderCallout: string;
    ctaDownload: string;
    ctaInstructor: string;
    ctaCarpool: string;
    highlights: string[];
    payoutPill: string;
    multiLangBadge: string;
    screenCaptions: {
      earnings: string;
      annotation: string;
      center: string;
    };
  };
  video: {
    tag: string;
    titlePre: string;
    titleHighlight: string;
    desc: string;
    coinNoteTitle: string;
    coinNoteDesc: string;
    founderOffer: {
      badge: string;
      title: string;
      desc: string;
      cta: string;
    };
    tabs: VideoTabLocale[];
    subScreensLabel: string;
    subScreens: {
      levelPanel: string;
      profile: string;
      request: string;
      followup: string;
      guaranteed: string;
    };
    pillars: { title: string; desc: string }[];
    cta: string;
  };
  courses: {
    tag: string;
    titlePre: string;
    titleHighlight: string;
    desc: string;
    points: { title: string; desc: string }[];
    cta: string;
    screenCaption: string;
  };
  carpool: {
    tag: string;
    freeBadge: string;
    titlePre: string;
    titleHighlight: string;
    desc: string;
    tabs: CarpoolTabLocale[];
    cta: string;
  };
  skibuddy: {
    tag: string;
    titlePre: string;
    titleHighlight: string;
    desc: string;
    points: { title: string; desc: string }[];
    cta: string;
    screenCaption: string;
  };
  roadmap: {
    tag: string;
    title: string;
    desc: string;
    status: string;
    features: { title: string; desc: string }[];
  };
  download: {
    title: string;
    desc: string;
    iosLabel: string;
    iosDesc: string;
    scanIos: string;
    btnIos: string;
    androidLabel: string;
    androidDesc: string;
    scanGooglePlay: string;
    btnGooglePlay: string;
    directApk: string;
  };
  footer: {
    tagline: string;
    product: string;
    productLinks: string[];
    support: string;
    supportLinks: string[];
    refundPolicy: string;
    deleteAccount: string;
    communitySafety: string;
    rights: string;
  };
}

export const translations: Record<Language, LocaleContent> = {
  en: {
    nav: {
      video: 'Video Analysis',
      courses: 'Courses',
      carpool: 'Free Carpool',
      skibuddy: 'Ski Buddy',
      roadmap: 'Roadmap',
      recharge: 'Token Recharge',
      appDownload: 'Get App',
    },
    hero: {
      badge: 'For Ski & Snowboard Instructors · Earn in USD Anywhere',
      titlePre: 'Analyze Ski Videos.',
      titleHighlight: 'Earn USD on Your Terms.',
      subtitle:
        'Snow Pro lets certified ski and snowboard instructors review student clips from anywhere, set their own rates, earn in USD, level up for lower platform fees, and stay in full control of orders and follow-ups—plus sell video courses and connect skiers with free resort carpools and ski buddies.',
      founderCallout:
        'Founding Instructor Offer · First 50 verified instructors get a lifetime 10% video analysis fee (keep 90%).',
      ctaDownload: 'Download App',
      ctaInstructor: 'How Instructors Earn',
      ctaCarpool: 'Explore Free Carpool',
      highlights: [
        'Earn in USD',
        '1 Earned Snow Coin = $1 USD',
        'Accepting Orders Toggle',
        'Lower Fees as You Level Up',
      ],
      payoutPill: 'Instructor Payouts in USD',
      multiLangBadge: 'Multi-language app & instruction (EN / 中文 / 日本語 / 한국어 & more)',
      screenCaptions: {
        earnings: 'Earnings Hub · USD Payouts',
        annotation: 'Frame-by-Frame & Voice Review',
        center: 'Instructor Center · Online Toggle',
      },
    },
    video: {
      tag: 'Core Feature 01 · Remote Video Instruction',
      titlePre: 'Your Expertise, Anywhere.',
      titleHighlight: 'Total Control for Instructors.',
      desc: 'No need to be on the mountain to earn. Review uploaded ski and snowboard clips anytime, draw directly on keyframes, record voice notes, and get paid in USD with clear boundaries.',
      coinNoteTitle: '1 Earned Snow Coin = $1 USD',
      coinNoteDesc:
        'Instructors set their own rates in Snow Coins. Every 1 Snow Coin earned from a lesson or course equals $1.00 USD in gross earnings (before platform fee), settled in USD. Student coin purchase prices may vary by store or payment channel.',
      founderOffer: {
        badge: 'Founding Instructor Cohort · First 50 Spots',
        title: 'Lifetime 10% Video Analysis Fee for the First 50 Instructors',
        desc: 'Join Snow Pro early as a certified Founding Instructor. The first 50 verified instructors lock in a permanent 10% platform fee on 1-on-1 video analysis (you keep 90% of every USD you earn).',
        cta: 'Apply as Founding Instructor in App',
      },
      tabs: [
        {
          id: 'earn',
          label: 'Earn in USD',
          title: 'Work Anywhere & Track Real USD Earnings',
          desc: 'Review videos from home, between runs, or off-season. Earnings Hub splits your Video Analysis and Course income with clear transaction history in USD.',
          bullets: [
            'Earn remotely on your own schedule—zero on-snow presence required',
            'All analysis and course payouts settle and display in USD',
            'Track 7-day and 6-month breakdowns in Earnings Hub',
          ],
          caption: 'Earnings Hub · USD Revenue & Income History',
        },
        {
          id: 'annotate',
          label: 'Draw & Voice Review',
          title: 'Keyframe Drawing & Voice Commentary',
          desc: 'Scrub frame-by-frame at your preferred speed, draw lines and arrows directly on the skier’s stance, and attach voice notes to explain every adjustment clearly.',
          bullets: [
            'Frame-by-frame stepping, 5s skip, and variable playback speed',
            'On-video drawing annotations anchored to exact timestamps',
            'Record concise voice notes synced to each keyframe',
          ],
          caption: 'Keyframe Annotation · Drawing + Voice Note',
        },
        {
          id: 'control',
          label: 'Follow-up Cap & Finish',
          title: 'Set Follow-up Limits & Finish Lesson Yourself',
          desc: 'Never get stuck in endless student messaging. Instructors define the max follow-up questions per order and decide when to tap Finish Lesson.',
          bullets: [
            'Set your own max follow-up limit (e.g. 2/2 remaining questions)',
            'Clear countdown timer & structured Q&A inside Lesson Detail',
            'Tap Finish Lesson when your instruction is complete',
          ],
          caption: 'Lesson Detail · Follow-up Cap & Finish Lesson',
        },
        {
          id: 'autonomy',
          label: 'Levels, Fees & Toggle',
          title: 'Set Your Price, Toggle Orders & Unlock Lower Fees',
          desc: 'You decide what your time is worth and when you want to work. Flip Accepting Orders off to rest, and earn contribution points (from sales & referrals) to lower separate fees on Video Analysis (20% to 12%) and Video Courses (30% to 20%).',
          bullets: [
            'Set Your Own Price — you control your rate, not the platform',
            'One-tap Accepting Orders toggle for Online vs. Resting status',
            'Separate tiered fees: 1-on-1 Video Analysis (20% → 12%) & Courses (30% → 20%) from LV0 to LV4',
          ],
          caption: 'Instructor Center · Level, Fee & Accepting Orders',
        },
      ],
      subScreensLabel: 'Also inspect other real screens in this flow:',
      subScreens: {
        levelPanel: 'Level & Fee Tiers (LV0–LV4)',
        profile: 'Instructor Profile',
        request: 'Order & Max Follow-ups',
        followup: 'Student 2/2 Counter',
        guaranteed: 'Cancel Refund Guarantee',
      },
      pillars: [
        {
          title: 'Set Your Own Price',
          desc: 'Instructors choose their own per-review rate in Snow Coins (1 Earned Snow Coin = $1 USD gross), never dictated by the platform.',
        },
        {
          title: 'Accepting Orders Switch',
          desc: 'Toggle Accepting Orders on or off anytime to pause incoming requests whenever you want to take a break.',
        },
        {
          title: 'Follow-up Limit & Finish Lesson',
          desc: 'Cap student follow-up questions per order and tap Finish Lesson yourself when instruction is complete.',
        },
        {
          title: 'Earn More, Pay Less Fees',
          desc: 'Earn contribution points to drop 1-on-1 video analysis fees from 20% to 12% (LV0–LV4) and course fees from 30% to 20%—plus 10% lifetime video fee for the first 50 Founding Instructors.',
        },
      ],
      cta: 'Start Teaching or Learning on Snow Pro',
    },
    courses: {
      tag: 'Core Feature 02 · Video Courses',
      titlePre: 'Record Once.',
      titleHighlight: 'Sell Ski & Snowboard Courses in USD.',
      desc: 'Alongside 1-on-1 video reviews, instructors can package their structured progressions—from beginner turns to certification prep—into video course series and earn USD on every purchase.',
      points: [
        {
          title: 'Structured Multi-Video Series',
          desc: 'Organize lessons by Ski or Snowboard, skill level, language, and technique category.',
        },
        {
          title: 'Set Your Own Course Price (USD)',
          desc: 'Price your course in Snow Coins (1 Earned Snow Coin = $1 USD gross) with optional promotional discounts.',
        },
        {
          title: 'Unified USD Earnings Hub (30% → 20% Fee)',
          desc: 'Course sales flow straight into your Earnings Hub alongside your video analysis revenue, with course platform fees dropping from 30% (LV0) to 20% (LV4) as you level up.',
        },
      ],
      cta: 'Browse & Publish Courses in App',
      screenCaption: 'Courses · Ski & Snowboard Series Marketplace',
    },
    carpool: {
      tag: 'Core Feature 03 · Free Resort Carpool',
      freeBadge: '100% FREE TO POST & FIND RIDES',
      titlePre: 'Free Resort Carpooling.',
      titleHighlight: 'Find Drivers or Fill Empty Seats.',
      desc: 'Posting or browsing resort carpools on Snow Pro is completely free. Check recent resort weather, specify board and ski storage space, split fuel costs transparently, and navigate right to the pickup spot.',
      tabs: [
        {
          id: 'list',
          label: 'Resorts & Weather',
          title: 'Filter by Resort with Live Weather & Snow Conditions',
          desc: 'See upcoming One Way and Round Trip carpools to your destination resort, complete with recent temperature and snow condition previews.',
          caption: 'Carpool Feed · Resort Filter & Live Weather',
        },
        {
          id: 'detail',
          label: 'Seats & Gear Space',
          title: 'Clear Board Storage, Seat Count & Payment Info',
          desc: 'Every trip lists departure/return times, open seats, gear storage (in-car vs. roof rack), accepted payment methods, and communication language.',
          caption: 'Trip Details · Seats, Board Space & Cost Split',
        },
        {
          id: 'map',
          label: 'Route & Pickup Map',
          title: 'Built-in Route Map & One-Tap Navigation',
          desc: 'Preview the pickup point and resort destination on the map and launch turn-by-turn navigation straight from the trip page.',
          caption: 'Route Preview · Pickup & Resort Navigation',
        },
      ],
      cta: 'Post or Join a Free Carpool',
    },
    skibuddy: {
      tag: 'Core Feature 04 · Ski Buddy',
      titlePre: 'Never Ride Alone.',
      titleHighlight: 'Find Ski Buddies by Date & Resort.',
      desc: 'Planning a resort day or a multi-day ski trip? Post your travel dates and mountain, filter by Ski or Snowboard and skill level, add style tags, and message compatible riders directly.',
      points: [
        {
          title: 'Date & Trip Range Matching',
          desc: 'Post a single day or a multi-day trip window at your target resort so local riders and travelers can join.',
        },
        {
          title: 'Filter by Discipline & Skill Level',
          desc: 'Match cleanly by Ski vs. Snowboard and ability level—from beginner cruising to expert and backcountry.',
        },
        {
          title: 'Activity Tags & Direct Chat',
          desc: 'Tag filming each other, progression practice, or casual laps and start chatting inside the app.',
        },
      ],
      cta: 'Find Ski Buddies in App',
      screenCaption: 'Ski Buddy · Resort Dates, Skill Filter & Direct Chat',
    },
    roadmap: {
      tag: 'Future Roadmap',
      title: 'Resort Partnerships & Ecosystem Growth',
      desc: 'Snow Pro is actively partnering with top ski resorts to secure exclusive discounted lift tickets, gear rental packages, and official resort instructor deals.',
      status: 'In Active Planning',
      features: [
        {
          title: 'Discounted Resort Lift Tickets',
          desc: 'Partnering with top ski resorts to bring exclusive day/night tickets, early-bird passes, and season discounts.',
        },
        {
          title: 'Special Gear Rental Deals',
          desc: 'Partnering with resort gear shops for seamless, skip-the-line rentals and special rates on high-end skis and boards.',
        },
        {
          title: 'Official Resort Instructor Deals',
          desc: 'Direct collaboration with official resort ski schools to offer compliant, official lessons at discounted rates.',
        },
        {
          title: 'Community Forum & Gear Shop',
          desc: 'Connect with skiers, read real slope reports, and explore authentic gear recommendations.',
        },
      ],
    },
    download: {
      title: 'Get Snow Pro on iOS & Android',
      desc: 'Download the app to start earning in USD as a certified ski or snowboard instructor, book video reviews, post free resort carpools, or find ski buddies.',
      iosLabel: 'iPhone Users',
      iosDesc: 'Search "Snow Pro" in App Store or scan QR code',
      scanIos: 'Scan to download iOS app',
      btnIos: 'App Store',
      androidLabel: 'Android Users',
      androidDesc: 'Get it on Google Play or install the APK directly',
      scanGooglePlay: 'Scan to download on Google Play',
      btnGooglePlay: 'Google Play',
      directApk: 'Direct APK Download',
    },
    footer: {
      tagline: 'Take your skiing to the next level. Connecting instructors, friends, and services.',
      product: 'Product',
      productLinks: ['Video Analysis', 'Courses', 'Free Carpool', 'Ski Buddy', 'Token Recharge'],
      support: 'Support & Legal',
      supportLinks: ['Help Center', 'Contact Us', 'Privacy Policy', 'Terms of Service'],
      refundPolicy: 'Refund Policy',
      deleteAccount: 'Delete account & data',
      communitySafety: 'Community & child safety',
      rights: 'All rights reserved.',
    },
  },
  zh: {
    nav: {
      video: '视频分析',
      courses: '视频课程',
      carpool: '免费拼车',
      skibuddy: '雪搭子',
      roadmap: '未来规划',
      recharge: '代币充值',
      appDownload: '下载 App',
    },
    hero: {
      badge: '单双板滑雪教练 · 随时随地赚取美金',
      titlePre: '远程分析滑雪视频',
      titleHighlight: '自由定价，赚取美金',
      subtitle:
        'Snow Pro 让单双板滑雪教练随时随地通过分析学员视频与售卖系列课程赚取美金——自主定价、接单状态自由开关、限制追问次数并自主结课，赚得越多平台抽成越低；同时提供免费雪场拼车与雪搭子约滑。',
      founderCallout:
        '创始教练招募（前 50 名）：认证入驻即锁定终身 10% 视频分析平台抽成（拿走 90% 收益）。',
      ctaDownload: '下载 App',
      ctaInstructor: '了解教练变现',
      ctaCarpool: '免费发布拼车',
      highlights: [
        '美金结算 (USD)',
        '赚取的 1 Snow Coin = $1 USD',
        '接单 / 休息自由开关',
        '等级越高抽成越低',
      ],
      payoutPill: '教练收益以美元 (USD) 结算',
      multiLangBadge: 'App 原生支持多语言界面与多语种教学（中文 / English / 日本語 / 한국어 等）',
      screenCaptions: {
        earnings: 'Earnings Hub · 美元收益明细',
        annotation: '关键帧画线批注 + 语音点评',
        center: '教练中心 · 接单与等级费率',
      },
    },
    video: {
      tag: '核心主打 01 · 远程视频分析指导',
      titlePre: '随时随地在线授课',
      titleHighlight: '把主动权完全交还给教练',
      desc: '无需守在雪场，任何时间、任何地点都能接单分析学员滑行视频。关键帧画线搭配语音讲解，直接赚取美元（USD），并随着贡献值升级享受更低平台抽成。',
      coinNoteTitle: '赚取的 1 Snow Coin = $1 USD',
      coinNoteDesc:
        '教练以 Snow Coin 自主定价，授课或售课每赚取 1 Snow Coin 即对应 $1.00 USD 费前毛收入（扣除对应平台抽成后以美元结算）。学员购买 Snow Coin 的价格可能因充值渠道或应用商店而有所不同。',
      founderOffer: {
        badge: 'Founding Instructor 创始招募 · 限前 50 位',
        title: '前 50 位认证入驻教练：终身 10% 视频分析平台抽成',
        desc: 'Snow Pro 现已正式上线，诚邀单双板认证教练成为首批创始教练。前 50 位入驻并认证的教练可永久锁定 10% 视频分析平台抽成（90% 收入归教练所有）。',
        cta: '下载 App 立即申请入驻',
      },
      tabs: [
        {
          id: 'earn',
          label: '随时赚美金',
          title: '不受时间地点限制，收益直接按美金结算',
          desc: '无论在雪季间隙、家里还是非雪季，打开手机即可完成视频指导。Earnings Hub 清晰展示视频分析与课程的美元收入及逐笔账单。',
          bullets: [
            '不用到雪场现场，随时随地接单赚取美金（USD）',
            'Video Analysis 与 Courses 收益分项统计',
            '支持 7 天 / 6 个月收益趋势与逐笔明细查询',
          ],
          caption: 'Earnings Hub · 美元总收益与收入记录',
        },
        {
          id: 'annotate',
          label: '画线与语音批注',
          title: '逐帧精准画线 + 语音条讲解',
          desc: '支持逐帧步进与倍速播放，直接在雪道视频画面上画线、标出箭头指出重心与立刃问题，并录制语音条讲解发力细节。',
          bullets: [
            '支持逐帧微调、前后 5 秒快进退与倍速回放',
            '关键帧文字 + 手绘箭头/线条直接锚定时间点',
            '一键录制语音点评，比纯文字更直观高效',
          ],
          caption: '关键帧视频播放器 · 画线箭头 + 语音批注',
        },
        {
          id: 'control',
          label: '防无限追问 & 结课',
          title: '自定义追问次数上限，教练自主决定结束授课',
          desc: '彻底杜绝“一单没完没了追问”。教练可设置每单允许的追问上限（如 2 次），回复完成后点击 Finish Lesson 即可自主结课。',
          bullets: [
            '教练可自设学员追问次数上限（如 Remaining questions: 2/2）',
            '内置 7 天接单/分析倒计时与时间点关联回复卡片',
            '完成指导后由教练自主点击 Finish Lesson 结束授课',
          ],
          caption: 'Lesson Detail · 追问上限控制与自主结课按钮',
        },
        {
          id: 'autonomy',
          label: '等级降费 & 接单开关',
          title: '自主定价、接单开关，私教与课程分开阶梯降抽成',
          desc: '收费标准由教练自己决定；忙碌或休息时一键切换暂停接单；通过授课、售课和推荐新教练累积贡献值，私教视频分析抽成从 20% 降至 12%，视频课程抽成从 30% 降至 20%（LV0–LV4）。',
          bullets: [
            '教练自主设定每次视频分析价格，平台不干涉定价',
            'Accepting Orders 一键切换接单 / 休息状态',
            '分开计算抽成并随等级下降：私教 20% → 12%，视频课程 30% → 20%',
          ],
          caption: '等级与抽成规则表 · 私教与课程分开阶梯降费',
        },
      ],
      subScreensLabel: '点击查看更多真实流程截图：',
      subScreens: {
        levelPanel: '等级与抽成规则 (LV0–LV4)',
        profile: '教练个人主页',
        request: '下单与追问上限',
        followup: '学员端 2/2 追问计数',
        guaranteed: '未接单随时取消退币',
      },
      pillars: [
        {
          title: '教练自主定价',
          desc: '每次视频分析收多少钱完全由教练自己设定（赚取的 1 Snow Coin = $1 USD），拒绝平台一刀切压价。',
        },
        {
          title: '接单 / 休息自由开关',
          desc: '通过接单开关随时控制接单或暂停接单，休息或没空时一键关单即可。',
        },
        {
          title: '追问上限 & 自主结课',
          desc: '设置学员追问次数上限并由教练自主点击 Finish Lesson 结课；未接单前取消可全额退币。',
        },
        {
          title: '越赚抽成越低 · 前 50 名 10%',
          desc: '贡献值升级降费（私教 20%→12%，视频课 30%→20%）；前 50 名创始教练享终身 10% 视频分析抽成。',
        },
      ],
      cta: '下载 Snow Pro 开始教学或约课',
    },
    courses: {
      tag: '核心功能 02 · 系列视频课程',
      titlePre: '录制一次课程',
      titleHighlight: '持续售卖系列视频赚美金',
      desc: '除了 1 对 1 视频分析，教练还可以录制并上架自己的系统教学系列课（如零基础入门、刻滑进阶或考级备考），自主定价，持续获得美金收益。',
      points: [
        {
          title: '分体系与难度标签',
          desc: '支持区分单板（Snowboard）与双板（Ski）、水平等级、教学语言与专项技巧。',
        },
        {
          title: '自主定价 · 美元结算',
          desc: '同样按赚取的 1 Snow Coin = $1 USD 毛收入结算，可自主设置原价与限时折扣价。',
        },
        {
          title: '独立阶梯抽成 (30% → 20%) · 收益汇总',
          desc: '视频课程平台抽成与 1 对 1 视频分析分开计算（LV0 30% 随等级降至 LV4 20%），收入统一汇总到 Earnings Hub 美元入账。',
        },
      ],
      cta: '在 App 中查看与发布课程',
      screenCaption: 'Courses · 单双板系列视频课程广场',
    },
    carpool: {
      tag: '核心功能 03 · 免费雪场拼车',
      freeBadge: '完全免费发布与寻找拼车行程',
      titlePre: '免费雪场拼车出行',
      titleHighlight: '找卡铺、找乘客，省心分摊路费',
      desc: '在 Snow Pro 发布去雪场的拼车行程或寻找顺风车完全免费。支持直接查看雪场近期天气雪况、明确标注车内/车顶放板空间，内置路线地图导航集合点。',
      tabs: [
        {
          id: 'list',
          label: '雪场与实时雪况',
          title: '按目标雪场筛选，顺便看近期天气与雪况',
          desc: '列表清晰展示单程（One Way）与往返（Round Trip）行程、出发时间、分摊费用与语言，顶部直接查看目标雪场近期天气与雪质。',
          caption: 'Carpool 列表 · 目标雪场筛选与近期天气雪况',
        },
        {
          id: 'detail',
          label: '余座与雪具空间',
          title: '明确标注放板空间、余座与收款方式',
          desc: '详情页清楚列出往返时间、每位车费、剩余座位数、雪具空间（如车内放板）、收款方式（现金 / E-Transfer 等）与车主留言。',
          caption: 'Carpool 详情 · 车费、余座与雪具放板说明',
        },
        {
          id: 'map',
          label: '地图轨迹与导航',
          title: '出发集合地与雪场轨迹一键导航',
          desc: '直接查看出发地到雪场的地图路线示意，点击即可拉起导航前往集合点或雪场目的地。',
          caption: '路线轨迹 · 集合地与雪场一键导航',
        },
      ],
      cta: '在 App 中免费发车或找拼车',
    },
    skibuddy: {
      tag: '核心功能 04 · 雪友招募 / Ski Buddy',
      titlePre: '去雪场不想孤单刷道？',
      titleHighlight: '按日期与雪场找同频雪搭子',
      desc: '无论是某天临时想去雪场，还是规划了一趟多日滑雪旅行，都可以发布你的日期行程与目标雪场，按单双板和水平筛选同频雪友，直接私聊组队。',
      points: [
        {
          title: '支持单日与多日旅行日期',
          desc: '可发布具体某天开板，也可发布多日滑雪旅行区间（如 12月5日 ~ 12月7日），精准约滑。',
        },
        {
          title: '单双板与滑行水平筛选',
          desc: '卡片明确展示单板/双板与水平等级（初级/中级/高级/专家），轻松找到节奏一致的伙伴。',
        },
        {
          title: '玩法标签 & 直接私聊 TA',
          desc: '支持标记「结伴滑」「摄影 / 互拍跟拍」「野雪结伴」等标签，看到合适雪友一键私聊。',
        },
      ],
      cta: '在 App 中发帖找雪友',
      screenCaption: '雪搭子 · 日期行程、水平标签与私聊约滑',
    },
    roadmap: {
      tag: '未来规划',
      title: '雪场直连合作与生态拓展',
      desc: 'Snow Pro 将深入对接各大合作雪场，为用户争取更优惠的雪票、雪具租赁与官方正规教练服务，打造更高性价比的滑雪体验。',
      status: '深度洽谈与规划中',
      features: [
        {
          title: '特惠合作雪票',
          desc: '携手各大优质雪场，提供官方合作特惠日场/夜场雪票、早鸟预售季卡与专属折扣。',
        },
        {
          title: '高品质雪具租赁优惠',
          desc: '对接雪场官方及周边精选雪具店，享专享租赁折扣，免排队提板，高性价比体验高端板型。',
        },
        {
          title: '雪场官方教练直通特惠',
          desc: '与雪场官方滑雪学校深度合作，提供合规、正规且享有专享折扣的现场官方教练预约渠道。',
        },
        {
          title: '雪圈社区与装备商城',
          desc: '雪友真实滑雪心得与雪况交流，严选优质滑雪装备与周边，正品直供与雪友置换。',
        },
      ],
    },
    download: {
      title: '下载 Snow Pro（支持 iOS 与 Android）',
      desc: '立即下载 Snow Pro：教练随时随地分析视频与售卖课程赚美金，雪友免费发布雪场拼车与找雪搭子。',
      iosLabel: 'iPhone 用户',
      iosDesc: '在 App Store 中搜索 "Snow Pro" 或扫码下载',
      scanIos: '扫码下载 iOS 版',
      btnIos: 'App Store 下载',
      androidLabel: 'Android 用户',
      androidDesc: '通过 Google Play 下载，或直接安装 APK',
      scanGooglePlay: '扫码从 Google Play 下载',
      btnGooglePlay: 'Google Play',
      directApk: '直接下载 Android APK',
    },
    footer: {
      tagline: '让每一次滑行都更进一步。连接教练、雪友与优质服务，您的终极滑雪伴侣。',
      product: '产品功能',
      productLinks: ['视频分析', '视频课程', '免费拼车', '雪搭子', '代币充值'],
      support: '支持与条款',
      supportLinks: ['使用帮助', '联系我们', '隐私政策', '服务条款'],
      refundPolicy: '退款政策',
      deleteAccount: '删除账号与数据',
      communitySafety: '社区与儿童安全',
      rights: '保留所有权利。',
    },
  },
  ja: {
    nav: {
      video: 'ビデオ分析',
      courses: 'コース',
      carpool: '無料相乗り',
      skibuddy: 'スキー仲間',
      roadmap: '今後の計画',
      recharge: 'トークン購入',
      appDownload: 'アプリ入手',
    },
    hero: {
      badge: 'スキー・スノーボード Instructor 向け · どこでもUSD収益',
      titlePre: '滑走動画を分析して、',
      titleHighlight: 'いつでもどこでも USD で収益化。',
      subtitle:
        '認定 Instructor が遠隔で動画指導やコース販売を行い USD を獲得。料金設定、受付オン/オフ、質問回数の上限、貢献度ポイントによる手数料引き下げまで備えています。さらに無料のゲレンデ相乗りや仲間募集にも対応。',
      founderCallout:
        'Founding Instructor 特典（先着50名）：ビデオ分析の手数料が生涯 10%（収益の90%を手元に）。',
      ctaDownload: 'アプリをダウンロード',
      ctaInstructor: '収益化の仕組み',
      ctaCarpool: '無料相乗りを見る',
      highlights: [
        'USD 決済',
        '獲得 1 Snow Coin = $1 USD',
        '受付オン/オフ切替',
        '貢献度で手数料ダウン',
      ],
      payoutPill: 'Instructor 収益は USD で精算',
      multiLangBadge: '多言語対応アプリ・指導言語タグ（日本語 / English / 中文 / 한국어 など）',
      screenCaptions: {
        earnings: 'Earnings Hub · USD 収益履歴',
        annotation: 'キーフレーム描画・音声解説',
        center: 'Instructor センター · レベルと受付',
      },
    },
    video: {
      tag: '主要機能 01 · 遠隔ビデオ指導',
      titlePre: '時間と場所に縛られない、',
      titleHighlight: 'Instructor 主導の指導環境。',
      desc: 'ゲレンデにいなくても、好きな時間・場所で動画を分析して USD を獲得。描画と音声でわかりやすく指導でき、際限のない追加質問を防げます。',
      coinNoteTitle: '獲得 1 Snow Coin = $1 USD',
      coinNoteDesc:
        'Instructor がレッスンやコースで獲得した 1 Snow Coin は、手数料控除前の総収益 $1.00 USD として計算され USD で精算されます（購入時の Snow Coin 価格は決済チャネルにより異なります）。',
      founderOffer: {
        badge: 'Founding Instructor 募集 · 先着 50 名',
        title: '先着 50 名の認定 Instructor はビデオ分析手数料が生涯 10%',
        desc: '初期 Founding Instructor として参加すると、1対1ビデオ分析のプラットフォーム手数料が永久に 10% に固定されます（売上の 90% が Instructor の収益になります）。',
        cta: 'アプリから Founding Instructor に応募',
      },
      tabs: [
        {
          id: 'earn',
          label: 'USD 収益化',
          title: 'いつでもどこでも分析して USD を獲得',
          desc: 'オフシーズンや移動中でも収益化可能。Earnings Hub でビデオ分析とコース販売の USD 収益と履歴を一目で確認できます。',
          bullets: [
            '場所を選ばずリモート指導で USD を獲得',
            'ビデオ分析とコース販売の収益を分けて可視化',
            '7日間・6ヶ月間の推移と明細を確認',
          ],
          caption: 'Earnings Hub · USD 収益チャートと履歴',
        },
        {
          id: 'annotate',
          label: '描画・音声解説',
          title: 'コマ送り描画＆音声ノートで的確にフィードバック',
          desc: '動画をコマ送りで確認しながら画面に直接線や矢印を描き、音声メモでフォーム改善のポイントを伝えられます。',
          bullets: [
            'コマ送り・5秒スキップ・再生速度変更に対応',
            'タイムスタンプ付きのキーフレーム注釈',
            '音声ノートで細かなニュアンスも伝達',
          ],
          caption: 'キーフレーム注釈 · 描画と音声ノート',
        },
        {
          id: 'control',
          label: '質問制限・完了管理',
          title: '追質問の上限設定＆自分の判断でレッスン完了',
          desc: '生徒からの質問が際限なく続くことはありません。質問回数上限（例: 2/2）を設定でき、完了時に Finish Lesson を押して終了できます。',
          bullets: [
            '注文ごとの追質問上限（Max follow-up messages）を設定可能',
            '承認・分析の明確な期限タイマー表示',
            '指導完了時は Instructor 自身が Finish Lesson でクローズ',
          ],
          caption: 'Lesson Detail · 質問上限と Finish Lesson',
        },
        {
          id: 'autonomy',
          label: 'レベル割引・受付切替',
          title: '自由価格・受付切替、稼ぐほどプラットフォーム手数料が低下',
          desc: '料金は Instructor 自身が決定。忙しい時は受付をオフにし、指導で貢献度ポイントを貯めるほどレベルが上がり手数料率が下がります。',
          bullets: [
            'レビュー単価を自分の基準で自由に設定',
            'Accepting Orders スイッチで受付中/休止中を即切替',
            '貢献度ポイントでレベルアップし、手数料率を段階的に引き下げ',
          ],
          caption: 'Instructor コントロールパネル · レベル・手数料・出金',
        },
      ],
      subScreensLabel: '実際のフロー画面も確認できます：',
      subScreens: {
        levelPanel: 'レベル別手数料表 (LV0–LV4)',
        profile: 'プロフィール画面',
        request: '依頼・質問上限設定',
        followup: '生徒側の残り質問数 2/2',
        guaranteed: '承認前キャンセル返金保証',
      },
      pillars: [
        { title: '自由な価格設定', desc: '料金は Instructor 自身が設定（獲得 1 Snow Coin = $1 USD）。' },
        { title: '受付オン/オフ', desc: 'いつでも受付の停止・再開をワンタップで切替可能。' },
        { title: '質問制限 & 完了', desc: '追質問の上限設定と Finish Lesson で境界を明確化。' },
        { title: '稼ぐほど低手数料', desc: '個別分析は 20%→12%、コースは 30%→20% に低下。先着50名は生涯10%。' },
      ],
      cta: 'Snow Pro で指導・受講を始める',
    },
    courses: {
      tag: '機能 02 · ビデオコース販売',
      titlePre: '一度収録すれば、',
      titleHighlight: '動画コースの販売で USD を獲得。',
      desc: '1対1のビデオ分析に加えて、基礎から検定対策までのシリーズ講座を販売可能。価格は自分で設定し、売上は USD として記録されます。',
      points: [
        { title: 'スキー / スノボ別シリーズ', desc: '種目・レベル・言語・テーマ別に整理して公開。' },
        { title: '自由価格＆割引設定', desc: '獲得 1 Snow Coin = $1 USD で通常価格やセール価格を設定。' },
        { title: 'Earnings Hub に統合', desc: 'コース売上もビデオ分析収益と同じ画面で一括管理。' },
      ],
      cta: 'アプリでコースを見る',
      screenCaption: 'Courses · シリーズ動画コース一覧',
    },
    carpool: {
      tag: '機能 03 · 無料ゲレンデ相乗り',
      freeBadge: '投稿・検索は完全無料',
      titlePre: '無料のゲレンデ相乗り。',
      titleHighlight: 'ドライバーも同乗者も簡単マッチ。',
      desc: 'Snow Pro の相乗り募集・検索は完全無料。スキー場の最新天気確認、ボード積載スペースの明記、割り勘費用の確認、集合場所へのマップ案内まで備えています。',
      tabs: [
        {
          id: 'list',
          label: 'スキー場・天気',
          title: 'スキー場別の検索と直近の天気・雪質チェック',
          desc: '目的地ごとに片道・往復の相乗り一覧を表示し、ゲレンデの天気と雪質も確認できます。',
          caption: 'Carpool 一覧 · スキー場フィルターと天気表示',
        },
        {
          id: 'detail',
          label: '空席・ギア積載',
          title: 'ボード収納スペース・空席・支払方法を明記',
          desc: '出発/帰着時刻、空き座席、車内積載などのギアスペース、対応決済方法や会話言語を確認できます。',
          caption: '相乗り詳細 · 空席・ギアスペース・費用分担',
        },
        {
          id: 'map',
          label: 'ルート・集合案内',
          title: 'マップでルート確認＆ワンタップナビ',
          desc: '集合場所からスキー場までのルートを地図で確認し、そのままナビを起動できます。',
          caption: 'ルートマップ · 集合地点とスキー場ナビ',
        },
      ],
      cta: '無料で相乗りを募集・検索',
    },
    skibuddy: {
      tag: '機能 04 · スキー仲間募集 (Ski Buddy)',
      titlePre: 'ひとり滑走を卒業。',
      titleHighlight: '日程とスキー場で仲間を見つけよう。',
      desc: '日帰りや遠征の日程と行き先を投稿し、スキー/スノーボードやレベル、撮影・バックカントリーなどのタグで気の合う仲間とチャットできます。',
      points: [
        { title: '単日・複数日の日程投稿', desc: '特定の1日でも数日間のトリップでも募集可能。' },
        { title: '種目・レベルフィルター', desc: 'スキー/スノボや初級〜エキスパートで絞り込み。' },
        { title: 'スタイルタグ＆直接チャット', desc: '撮影し合いやフリーランなど目的別にすぐ連絡。' },
      ],
      cta: 'アプリで仲間を探す',
      screenCaption: 'Ski Buddy · 日程募集と直接チャット',
    },
    roadmap: {
      tag: '今後の計画',
      title: 'スキー場提携とエコシステム拡大',
      desc: '提携スキー場との連携により、割引リフト券、レンタル優待、公式スクール提携特典などの展開を計画しています。',
      status: '積極計画中',
      features: [
        { title: '提携割引リフト券', desc: '主要スキー場と連携したお得なデイ/ナイター券や早割パス。' },
        { title: 'ギアレンタル優待', desc: 'スキー場周辺ショップでの優先レンタルと特別割引。' },
        { title: '公式 Instructor 提携割引', desc: '公式スキースクールとの連携による正規レッスン優待。' },
        { title: 'コミュニティ＆ギアショップ', desc: 'ゲレンデ情報共有や厳選ギアの案内。' },
      ],
    },
    download: {
      title: 'Snow Pro をダウンロード（iOS / Android）',
      desc: 'Instructor としてどこでも USD を稼ぐ、または無料の相乗りとスキー仲間探しを今すぐ始めましょう。',
      iosLabel: 'iPhone ユーザー',
      iosDesc: 'App Store で "Snow Pro" を検索、またはQRを読み取り',
      scanIos: 'QRコードで iOS 版を入手',
      btnIos: 'App Store',
      androidLabel: 'Android ユーザー',
      androidDesc: 'Google Play または APK から直接インストール',
      scanGooglePlay: 'QRコードで Google Play を開く',
      btnGooglePlay: 'Google Play',
      directApk: 'Android APK 直接ダウンロード',
    },
    footer: {
      tagline: 'すべての滑走を次のレベルへ。Instructor・仲間・サービスをつなぐプラットフォーム。',
      product: 'プロダクト',
      productLinks: ['ビデオ分析', 'コース', '無料相乗り', 'スキー仲間', 'トークン購入'],
      support: 'サポート・規約',
      supportLinks: ['ヘルプセンター', 'お問い合わせ', 'プライバシーポリシー', '利用規約'],
      refundPolicy: '返金ポリシー',
      deleteAccount: 'アカウント・データ削除',
      communitySafety: 'コミュニティ・児童安全',
      rights: 'All rights reserved.',
    },
  },
  ko: {
    nav: {
      video: '영상 분석',
      courses: '강의 코스',
      carpool: '무료 카풀',
      skibuddy: '스키 버디',
      roadmap: '로드맵',
      recharge: '토큰 충전',
      appDownload: '앱 받기',
    },
    hero: {
      badge: '스키 · 스노보드 Instructor 전용 · 언제 어디서나 USD 수익',
      titlePre: '스키 영상을 분석하고,',
      titleHighlight: '내 방식대로 USD 수익을 만드세요.',
      subtitle:
        '인증된 Instructor가 장소에 구애받지 않고 원격 영상 피드백과 동영상 코스로 USD를 벌 수 있습니다. 가격 설정, 주문 수락 ON/OFF, 추가 질문 제한, 기여도 등급에 따른 수수료 인하 혜택까지 제공합니다. 무료 리조트 카풀과 스키 버디 매칭도 지원합니다.',
      founderCallout:
        'Founding Instructor 혜택 (선착순 50명): 영상 분석 수수료 평생 10% 고정 (수익의 90% 정산).',
      ctaDownload: '앱 다운로드',
      ctaInstructor: '수익 구조 보기',
      ctaCarpool: '무료 카풀 보기',
      highlights: [
        'USD 정산',
        '수익 1 Snow Coin = $1 USD',
        '주문 수락 ON/OFF',
        '레벨업할수록 낮은 수수료',
      ],
      payoutPill: 'Instructor 수익은 USD로 정산',
      multiLangBadge: '다국어 앱 및 다국어 강습 지원 (한국어 / English / 中文 / 日本語 등)',
      screenCaptions: {
        earnings: 'Earnings Hub · USD 수익 현황',
        annotation: '키프레임 드로잉 & 음성 코멘트',
        center: 'Instructor 센터 · 등급 및 스위치',
      },
    },
    video: {
      tag: '핵심 기능 01 · 원격 영상 피드백',
      titlePre: '언제 어디서나 지도하고,',
      titleHighlight: 'Instructor가 모든 권한을 가집니다.',
      desc: '슬로프에 나가지 않아도 업로드된 영상을 분석해 USD로 수익을 올릴 수 있습니다. 프레임별 드로잉과 음성 피드백을 제공하고, 기여도 포인트가 쌓일수록 플랫폼 수수료가 낮아집니다.',
      coinNoteTitle: '수익 1 Snow Coin = $1 USD',
      coinNoteDesc:
        'Instructor가 레슨이나 코스로 벌어들인 1 Snow Coin은 수수료 차감 전 총수익 $1.00 USD로 계산되어 USD로 정산됩니다(학생의 코인 구매 가격은 결제 스토어/채널에 따라 다를 수 있습니다).',
      founderOffer: {
        badge: 'Founding Instructor 모집 · 선착순 50명',
        title: '초기 인증 Instructor 50명 한정: 영상 분석 수수료 평생 10%',
        desc: 'Snow Pro의 초기 Founding Instructor로 합류하세요. 선착순 50명의 인증 Instructor에게 1:1 영상 분석 플랫폼 수수료 10% 평생 혜택을 제공합니다(수익의 90% 보유).',
        cta: '앱에서 Founding Instructor 신청',
      },
      tabs: [
        {
          id: 'earn',
          label: 'USD 수익화',
          title: '언제 어디서나 피드백하고 USD로 수익 정산',
          desc: '비시즌이나 이동 중에도 수익을 만들 수 있습니다. Earnings Hub에서 영상 분석과 코스 수익 내역을 USD로 투명하게 확인하세요.',
          bullets: [
            '현장 방문 없이 원격으로 영상 분석하고 USD 정산',
            '영상 분석 수익과 코스 수익을 구분하여 그래프 표시',
            '7일 및 6개월 수익 추이와 건별 내역 확인',
          ],
          caption: 'Earnings Hub · USD 수익 통계 및 내역',
        },
        {
          id: 'annotate',
          label: '드로잉 · 음성 피드백',
          title: '키프레임 정밀 드로잉 & 음성 해설',
          desc: '프레임 단위로 재생하며 영상 위에 직접 화살표와 선을 그리고, 음성 노트로 자세와 엣지 교정 포인트를 전달합니다.',
          bullets: [
            '프레임 이동, 5초 스킵, 재생 속도 조절 지원',
            '특정 타임스탬프에 고정되는 드로잉 및 텍스트 메모',
            '짧고 명확한 음성 노트로 현장감 있는 피드백',
          ],
          caption: '키프레임 주석 · 드로잉과 음성 메모',
        },
        {
          id: 'control',
          label: '질문 제한 · 레슨 종료',
          title: '추가 질문 횟수 제한 & 직접 레슨 종료',
          desc: '끝없는 추가 질문에 시달리지 마세요. 주문당 최대 질문 횟수(예: 2/2)를 설정하고, 지도가 끝나면 Finish Lesson으로 직접 종료할 수 있습니다.',
          bullets: [
            '최대 추가 질문 수(Max follow-up messages) 제어',
            '남은 질문 수 및 마감 카운트다운 표시',
            'Instructor가 직접 Finish Lesson을 눌러 레슨 완료',
          ],
          caption: 'Lesson Detail · 질문 제한 및 Finish Lesson',
        },
        {
          id: 'autonomy',
          label: '등급 수수료 · 스위치',
          title: '자율 가격 · 주문 토글 · 레벨업할수록 낮아지는 수수료',
          desc: '가격은 Instructor 본인이 결정하며 Accepting Orders 스위치로 언제든 휴식할 수 있습니다. 강습할수록 기여도가 올라 플랫폼 수수료가 낮아집니다.',
          bullets: [
            '분석 가격을 Instructor가 자율적으로 설정',
            'Accepting Orders 토글로 온라인/휴식 상태 전환 및 출금',
            '기여도 포인트 상승 시 등급업과 함께 수수료율 인하',
          ],
          caption: 'Instructor 제어 패널 · 등급 수수료 및 출금',
        },
      ],
      subScreensLabel: '실제 앱 화면 더 보기:',
      subScreens: {
        levelPanel: '등급별 수수료표 (LV0–LV4)',
        profile: 'Instructor 프로필',
        request: '주문 및 질문 제한',
        followup: '수강생 2/2 질문 카운터',
        guaranteed: '수락 전 취소 환불 보장',
      },
      pillars: [
        { title: '자율 가격 설정', desc: '수익 1 Snow Coin = $1 USD 기준으로 Instructor가 직접 요금을 정합니다.' },
        { title: '주문 수락 토글', desc: 'Accepting Orders 스위치로 언제든 주문을 켜고 끌 수 있습니다.' },
        { title: '질문 제한 & 레슨 종료', desc: '질문 횟수 상한과 Finish Lesson으로 깔끔하게 마무리합니다.' },
        { title: '많이 벌수록 낮은 수수료', desc: '영상 분석 20%→12%, 코스 30%→20% 인하 · 초기 50명 평생 10%.' },
      ],
      cta: 'Snow Pro 시작하기',
    },
    courses: {
      tag: '기능 02 · 비디오 코스 판매',
      titlePre: '한 번 제작한 시리즈로,',
      titleHighlight: '비디오 코스를 판매해 USD를 버세요.',
      desc: '1:1 영상 분석 외에도 스키·스노보드 체계적 강좌 시리즈를 등록해 판매할 수 있습니다. 가격을 직접 정하고 USD 수익을 쌓으세요.',
      points: [
        { title: '스키 / 보드 맞춤 분류', desc: '종목, 난이도, 언어, 테크닉 카테고리별 구성.' },
        { title: '자율 가격 및 할인', desc: '수익 1 Snow Coin = $1 USD 기준으로 정가와 할인가 설정.' },
        { title: '통합 USD 수익 관리', desc: '코스 판매 수익도 Earnings Hub에서 함께 정산.' },
      ],
      cta: '앱에서 코스 둘러보기',
      screenCaption: 'Courses · 스키 & 스노보드 코스 목록',
    },
    carpool: {
      tag: '기능 03 · 무료 리조트 카풀',
      freeBadge: '등록 및 찾기 100% 무료',
      titlePre: '무료 스키장 카풀.',
      titleHighlight: '운전자와 동승자를 부담 없이 연결.',
      desc: 'Snow Pro의 카풀 등록과 검색은 완전 무료입니다. 리조트 최근 날씨 확인, 보드/스키 적재 공간 표기, 비용 분담 및 경로 안내까지 한 번에 확인하세요.',
      tabs: [
        {
          id: 'list',
          label: '리조트 · 날씨',
          title: '리조트별 필터 & 최근 날씨/설질 확인',
          desc: '목적지 리조트별 편도·왕복 카풀 목록과 최근 기온 및 설질 정보를 바로 볼 수 있습니다.',
          caption: '카풀 목록 · 리조트 필터 및 날씨 정보',
        },
        {
          id: 'detail',
          label: '좌석 · 장비 공간',
          title: '남은 좌석, 장비 적재 공간, 정산 방식 명시',
          desc: '출발/복귀 시간, 좌석 수, 차량 내부 보드 적재 여부, 현금/이체 등 결제 수단과 사용 언어를 확인하세요.',
          caption: '카풀 상세 · 좌석 및 장비 공간 안내',
        },
        {
          id: 'map',
          label: '경로 지도 · 내비',
          title: '출발지부터 리조트까지 경로 지도 안내',
          desc: '지도에서 픽업 장소와 목적지를 미리 확인하고 바로 내비게이션을 실행할 수 있습니다.',
          caption: '경로 지도 · 픽업 위치 및 리조트 내비',
        },
      ],
      cta: '무료 카풀 이용하기',
    },
    skibuddy: {
      tag: '기능 04 · 스키 버디',
      titlePre: '혼자 타지 마세요.',
      titleHighlight: '날짜와 리조트로 함께 탈 친구 찾기.',
      desc: '원정 일정이나 당일 스키 날짜를 올리고 스키/보드, 실력, 촬영·백컨트리 태그로 맞는 버디를 찾아 바로 채팅하세요.',
      points: [
        { title: '단일 날짜 · 여행 기간 모집', desc: '하루 일정부터 며칠간의 스키 여행까지 자유롭게 등록.' },
        { title: '종목 · 실력별 필터링', desc: '스키/스노보드 및 초급~전문가 레벨로 매칭.' },
        { title: '스타일 태그 & 1:1 채팅', desc: '서로 영상 촬영, 파크, 백컨트리 태그로 바로 대화.' },
      ],
      cta: '앱에서 스키 버디 찾기',
      screenCaption: 'Ski Buddy · 일정 모집 및 채팅',
    },
    roadmap: {
      tag: '향후 로드맵',
      title: '스키장 제휴 및 생태계 확장',
      desc: 'Snow Pro는 주요 스키장과의 협력을 통해 할인 리프트권, 장비 렌탈 패키지, 공식 스키학교 Instructor 제휴 혜택을 준비하고 있습니다.',
      status: '적극 기획 중',
      features: [
        { title: '할인 리프트권 제휴', desc: '제휴 스키장 주간/야간권 및 시즌 얼리버드 할인.' },
        { title: '장비 렌탈 특별 혜택', desc: '리조트 샵 빠른 픽업 및 프리미엄 장비 할인.' },
        { title: '공식 Instructor 제휴', desc: '스키장 공식 스쿨과 연계한 합법적 할인 레슨.' },
        { title: '커뮤니티 & 기어 샵', desc: '실시간 슬로프 후기와 검증된 장비 추천.' },
      ],
    },
    download: {
      title: 'Snow Pro 다운로드 (iOS & Android)',
      desc: '지금 앱을 설치하고 Instructor로 USD 수익을 올리거나 무료 카풀과 스키 버디를 이용해 보세요.',
      iosLabel: 'iPhone 사용자',
      iosDesc: 'App Store에서 "Snow Pro" 검색 또는 QR 스캔',
      scanIos: '스캔하여 iOS 앱 다운로드',
      btnIos: 'App Store',
      androidLabel: 'Android 사용자',
      androidDesc: 'Google Play 또는 APK 직접 설치',
      scanGooglePlay: '스캔하여 Google Play에서 받기',
      btnGooglePlay: 'Google Play',
      directApk: 'Android APK 직접 다운로드',
    },
    footer: {
      tagline: '모든 라이딩을 한 단계 위로. Instructor, 친구, 서비스를 연결합니다.',
      product: '제품',
      productLinks: ['영상 분석', '강의 코스', '무료 카풀', '스키 버디', '토큰 충전'],
      support: '지원 및 약관',
      supportLinks: ['도움말 센터', '문의하기', '개인정보처리방침', '이용약관'],
      refundPolicy: '환불 정책',
      deleteAccount: '계정 및 데이터 삭제',
      communitySafety: '커뮤니티 및 아동 안전',
      rights: 'All rights reserved.',
    },
  },
  fr: {
    nav: {
      video: 'Analyse vidéo',
      courses: 'Cours vidéo',
      carpool: 'Covoiturage gratuit',
      skibuddy: 'Ski Buddy',
      roadmap: 'Feuille de route',
      recharge: 'Recharge',
      appDownload: "Télécharger l'app",
    },
    hero: {
      badge: 'Pour les moniteurs (Instructors) ski & snowboard · Revenus en USD',
      titlePre: 'Analysez des vidéos.',
      titleHighlight: 'Gagnez des USD à votre rythme.',
      subtitle:
        'Snow Pro permet aux instructors certifiés d’analyser des vidéos à distance, de fixer leurs tarifs, de gagner en USD, de réduire leurs frais de plateforme avec leurs points et de contrôler commandes et suivis—plus cours vidéo, covoiturage gratuit et Ski Buddy.',
      founderCallout:
        'Offre Founding Instructor (50 premiers) : commission à vie de 10% sur l’analyse vidéo (gardez 90%).',
      ctaDownload: "Télécharger l'app",
      ctaInstructor: 'Revenus Instructor',
      ctaCarpool: 'Covoiturage gratuit',
      highlights: [
        'Paiement en USD',
        '1 Snow Coin gagné = $1 USD',
        'Bouton Accepting Orders',
        'Frais réduits par niveau',
      ],
      payoutPill: 'Revenus Instructor versés en USD',
      multiLangBadge: 'Application multilingue & cours en plusieurs langues (FR / EN / 中文 / 日本語…)',
      screenCaptions: {
        earnings: 'Earnings Hub · Revenus en USD',
        annotation: 'Dessin image par image & audio',
        center: 'Espace Instructor · Niveau & statut',
      },
    },
    video: {
      tag: 'Fonction 01 · Analyse vidéo à distance',
      titlePre: 'Enseignez de n’importe où.',
      titleHighlight: 'Contrôle total pour chaque Instructor.',
      desc: 'Pas besoin d’être sur les pistes pour gagner votre vie. Annotez les vidéos image par image, ajoutez un commentaire vocal, gagnez en USD et réduisez la commission en montant de niveau.',
      coinNoteTitle: '1 Snow Coin gagné = $1 USD',
      coinNoteDesc:
        'Chaque Snow Coin gagné par un Instructor sur une leçon ou un cours équivaut à $1,00 USD brut (avant frais de plateforme), réglé en USD. Le prix d’achat des coins pour les élèves varie selon la boutique ou le moyen de paiement.',
      founderOffer: {
        badge: 'Cohorte Founding Instructor · 50 premières places',
        title: 'Commission à vie de 10% sur l’analyse vidéo pour les 50 premiers Instructors',
        desc: 'Rejoignez Snow Pro dès le lancement : les 50 premiers instructors vérifiés bénéficient à vie de frais de plateforme de 10% sur les analyses vidéo (90% pour vous).',
        cta: 'Postuler dans l’application',
      },
      tabs: [
        {
          id: 'earn',
          label: 'Gagner en USD',
          title: 'Travaillez de partout et suivez vos gains en USD',
          desc: 'Analysez des vidéos chez vous ou en déplacement. Earnings Hub sépare vos revenus d’analyse vidéo et de cours avec l’historique en USD.',
          bullets: [
            'Gagnez de l’argent à distance selon votre emploi du temps',
            'Revenus cumulés et détaillés en dollars américains (USD)',
            'Suivi sur 7 jours et 6 mois dans Earnings Hub',
          ],
          caption: 'Earnings Hub · Revenus et historique en USD',
        },
        {
          id: 'annotate',
          label: 'Dessin & Voix',
          title: 'Annotations image par image et note vocale',
          desc: 'Naviguez image par image, tracez des flèches directement sur la posture du skieur et enregistrez des explications vocales précises.',
          bullets: [
            'Lecture image par image, sauts de 5s et contrôle de vitesse',
            'Dessins et notes ancrés aux moments clés',
            'Notes vocales claires synchronisées à la vidéo',
          ],
          caption: 'Lecteur clé · Dessin et note vocale',
        },
        {
          id: 'control',
          label: 'Relances & Clôture',
          title: 'Limitez les questions et terminez la leçon',
          desc: 'Évitez les échanges interminables. Définissez un plafond de questions de suivi (ex. 2/2) et cliquez sur Finish Lesson quand l’analyse est terminée.',
          bullets: [
            'Nombre maximal de relances défini par l’Instructor',
            'Compteur transparent et compte à rebours par leçon',
            'Bouton Finish Lesson pour clôturer la session',
          ],
          caption: 'Détail de leçon · Limite de suivi & Finish Lesson',
        },
        {
          id: 'autonomy',
          label: 'Niveaux, frais & pause',
          title: 'Tarifs libres, pause en un clic et frais réduits par niveau',
          desc: 'Vous choisissez vos prix et quand travailler. Cumulez des points de contribution pour monter de niveau et réduire les frais de plateforme.',
          bullets: [
            'Liberté totale sur le tarif de chaque analyse',
            'Interrupteur Accepting Orders / Pause et retrait des gains',
            'Plus vous enseignez, plus votre niveau monte et vos frais baissent',
          ],
          caption: 'Panneau Instructor · Niveau, frais et retraits',
        },
      ],
      subScreensLabel: 'Autres écrans réels du parcours :',
      subScreens: {
        levelPanel: 'Paliers de frais (LV0–LV4)',
        profile: 'Profil Instructor',
        request: 'Commande & plafond',
        followup: 'Compteur élève 2/2',
        guaranteed: 'Remboursement avant acceptation',
      },
      pillars: [
        { title: 'Tarifs libres', desc: 'Chaque Instructor fixe ses prix (1 Snow Coin gagné = $1 USD brut).' },
        { title: 'Statut En ligne / Pause', desc: 'Coupez les commandes à tout moment via Accepting Orders.' },
        { title: 'Relances & Finish Lesson', desc: 'Plafonnez les questions et clôturez la leçon quand c’est fini.' },
        { title: 'Frais réduits & Offre 10%', desc: 'Analyse 20%→12%, cours 30%→20% · 10% à vie pour les 50 premiers.' },
      ],
      cta: 'Découvrir Snow Pro',
    },
    courses: {
      tag: 'Fonction 02 · Cours vidéo',
      titlePre: 'Filmez une fois.',
      titleHighlight: 'Vendez vos séries de cours en USD.',
      desc: 'En complément des analyses individuelles, publiez vos propres séries de cours ski ou snowboard à vos tarifs et encaissez en USD.',
      points: [
        { title: 'Séries ski & snowboard', desc: 'Classement par niveau, discipline, langue et thème.' },
        { title: 'Prix et promos libres', desc: 'Revenu brut : 1 Snow Coin gagné = $1 USD.' },
        { title: 'Centralisé dans Earnings Hub', desc: 'Suivez ventes de cours et analyses au même endroit.' },
      ],
      cta: 'Explorer les cours dans l’app',
      screenCaption: 'Courses · Catalogue de cours ski & snowboard',
    },
    carpool: {
      tag: 'Fonction 03 · Covoiturage gratuit',
      freeBadge: '100% GRATUIT POUR PUBLIER ET RÉSERVER',
      titlePre: 'Covoiturage station gratuit.',
      titleHighlight: 'Partagez la route et les frais.',
      desc: 'Publiez ou trouvez gratuitement un covoiturage vers les stations. Consultez la météo récente, l’espace pour skis/snowboards, le partage des frais et la carte d’itinéraire.',
      tabs: [
        {
          id: 'list',
          label: 'Stations & Météo',
          title: 'Filtre par station avec météo et état de la neige',
          desc: 'Consultez les trajets aller simple ou aller-retour avec aperçu météo récent de la station.',
          caption: 'Covoiturages · Filtre station et météo',
        },
        {
          id: 'detail',
          label: 'Places & Matériel',
          title: 'Espace planches, places et modes de paiement',
          desc: 'Horaires départ/retour, places restantes, rangement intérieur, paiement et langue.',
          caption: 'Détail trajet · Places et espace matériel',
        },
        {
          id: 'map',
          label: 'Carte & Itinéraire',
          title: 'Aperçu du trajet et navigation directe',
          desc: 'Visualisez le point de rendez-vous et la station sur la carte avant de démarrer.',
          caption: 'Carte · Point de départ et navigation',
        },
      ],
      cta: 'Publier ou trouver un trajet gratuit',
    },
    skibuddy: {
      tag: 'Fonction 04 · Ski Buddy',
      titlePre: 'Ne skiez plus seul.',
      titleHighlight: 'Trouvez des partenaires par date et station.',
      desc: 'Publiez vos dates de sortie ou de séjour, filtrez par ski/snowboard et niveau, ajoutez vos tags et discutez directement.',
      points: [
        { title: 'Journée ou séjour', desc: 'Indiquez une date précise ou une plage de voyage.' },
        { title: 'Filtres discipline & niveau', desc: 'Ski ou snowboard, de débutant à expert.' },
        { title: 'Tags & messagerie directe', desc: 'Filmer ensemble, carving ou hors-piste en un clic.' },
      ],
      cta: 'Trouver des partenaires',
      screenCaption: 'Ski Buddy · Dates, filtres et chat direct',
    },
    roadmap: {
      tag: 'Feuille de route',
      title: 'Partenariats stations & écosystème',
      desc: 'Snow Pro collabore avec des stations pour proposer forfaits remisés, location de matériel et offres officielles d’écoles de ski.',
      status: 'En préparation active',
      features: [
        { title: 'Forfaits de ski remisés', desc: 'Tarifs préférentiels journée, nocturne et saison.' },
        { title: 'Location de matériel', desc: 'Tarifs dédiés et retrait rapide en station.' },
        { title: 'Offres écoles officielles', desc: 'Partenariats directs avec les écoles de ski.' },
        { title: 'Forum & boutique matériel', desc: 'Retours terrain et équipements sélectionnés.' },
      ],
    },
    download: {
      title: 'Téléchargez Snow Pro sur iOS & Android',
      desc: 'Rejoignez Snow Pro pour enseigner à distance en USD, vendre vos cours ou partager vos trajets gratuitement.',
      iosLabel: 'Utilisateurs iPhone',
      iosDesc: 'Recherchez "Snow Pro" sur l’App Store ou scannez le QR',
      scanIos: 'Scanner pour iOS App Store',
      btnIos: 'App Store',
      androidLabel: 'Utilisateurs Android',
      androidDesc: 'Télécharger sur Google Play ou installer l’APK directement',
      scanGooglePlay: 'Scanner pour Google Play',
      btnGooglePlay: 'Google Play',
      directApk: "Téléchargement direct de l'APK",
    },
    footer: {
      tagline: 'Passez au niveau supérieur. Connectez moniteurs, amis et services.',
      product: 'Produit',
      productLinks: ['Analyse vidéo', 'Cours vidéo', 'Covoiturage gratuit', 'Ski Buddy', 'Recharge'],
      support: 'Support & Légal',
      supportLinks: ["Centre d'aide", 'Contact', 'Confidentialité', "Conditions d'utilisation"],
      refundPolicy: 'Politique de remboursement',
      deleteAccount: 'Supprimer compte & données',
      communitySafety: 'Sécurité communauté & mineurs',
      rights: 'Tous droits réservés.',
    },
  },
  de: {
    nav: {
      video: 'Videoanalyse',
      courses: 'Kurse',
      carpool: 'Gratis-Carpool',
      skibuddy: 'Ski Buddy',
      roadmap: 'Roadmap',
      recharge: 'Aufladen',
      appDownload: 'App laden',
    },
    hero: {
      badge: 'Für Ski- & Snowboard-Instructors · Weltweit USD verdienen',
      titlePre: 'Ski-Videos analysieren.',
      titleHighlight: 'Überall USD verdienen.',
      subtitle:
        'Mit Snow Pro analysieren zertifizierte Instructors Videos ortsunabhängig, legen eigene Preise fest, verdienen USD, senken mit steigendem Level ihre Plattformgebühr und steuern Aufträge & Rückfragen—plus Videokurse, kostenloses Carpooling und Ski Buddy.',
      founderCallout:
        'Founding Instructor Angebot (Erste 50): Lebenslang nur 10% Gebühr auf Videoanalysen (90% behalten).',
      ctaDownload: 'App herunterladen',
      ctaInstructor: 'Für Instructors',
      ctaCarpool: 'Gratis-Carpool',
      highlights: [
        'USD-Einnahmen',
        '1 verdienter Snow Coin = $1 USD',
        'Accepting Orders Schalter',
        'Niedrigere Gebühr je Level',
      ],
      payoutPill: 'Instructor-Auszahlung in USD',
      multiLangBadge: 'Mehrsprachige App & Unterrichtssprachen (DE / EN / 中文 / 日本語 …)',
      screenCaptions: {
        earnings: 'Earnings Hub · USD-Einnahmen',
        annotation: 'Keyframe-Zeichnung & Sprachnotiz',
        center: 'Instructor Center · Level & Schalter',
      },
    },
    video: {
      tag: 'Kernfunktion 01 · Remote-Videoanalyse',
      titlePre: 'Dein Wissen, überall.',
      titleHighlight: 'Volle Kontrolle für Instructors.',
      desc: 'Verdiene unabhängig vom Skigebiet. Analysiere Videos bildgenau mit Zeichnungen und Sprachkommentaren, erhalte USD und profitiere mit jedem Level von niedrigeren Gebühren.',
      coinNoteTitle: '1 verdienter Snow Coin = $1 USD',
      coinNoteDesc:
        'Jeder von einem Instructor verdiente Snow Coin entspricht $1,00 USD Bruttoumsatz (vor Plattformgebühr) und wird in USD abgerechnet. Kaufpreise für Schüler variieren je nach Store oder Zahlungskanal.',
      founderOffer: {
        badge: 'Founding Instructor Programm · Erste 50 Plätze',
        title: 'Lebenslang 10% Plattformgebühr auf Videoanalysen für die ersten 50 Instructors',
        desc: 'Starte als zertifizierter Founding Instructor auf Snow Pro. Die ersten 50 verifizierten Instructors sichern sich dauerhaft nur 10% Gebühr auf 1:1-Videoanalysen (90% Auszahlung).',
        cta: 'In der App bewerben',
      },
      tabs: [
        {
          id: 'earn',
          label: 'USD verdienen',
          title: 'Überall arbeiten & echte USD-Einnahmen verfolgen',
          desc: 'Analysiere Videos zu Hause oder unterwegs. Der Earnings Hub trennt Videoanalysen und Kurserlöse übersichtlich in USD.',
          bullets: [
            'Ortsunabhängig in USD verdienen',
            'Getrennte Übersicht für Videoanalysen und Kurse',
            '7-Tage- und 6-Monats-Verlauf mit Einzelbuchungen',
          ],
          caption: 'Earnings Hub · USD-Umsatz & Verlauf',
        },
        {
          id: 'annotate',
          label: 'Zeichnung & Sprache',
          title: 'Keyframe-Zeichnungen & Sprachnotizen',
          desc: 'Spule bildgenau vor und zurück, zeichne Linien oder Pfeile direkt ins Video und erkläre Korrekturen per Sprachnotiz.',
          bullets: [
            'Einzelbild-Steuerung, 5s-Sprünge und Tempo-Regelung',
            'Video-Zeichnungen exakt am Zeitstempel verankert',
            'Persönliche Sprachnotizen pro Keyframe',
          ],
          caption: 'Keyframe-Player · Zeichnung & Sprachnotiz',
        },
        {
          id: 'control',
          label: 'Rückfragen & Abschluss',
          title: 'Rückfragen begrenzen & Lektion selbst beenden',
          desc: 'Keine endlosen Nachfragen. Lege ein Maximum an Rückfragen fest (z. B. 2/2) und schließe die Lektion selbst über Finish Lesson ab.',
          bullets: [
            'Konfigurierbares Limit für Schüler-Rückfragen',
            'Klare Fristen und strukturierter Chat pro Lektion',
            'Finish Lesson Button unter Kontrolle des Instructors',
          ],
          caption: 'Lesson Detail · Rückfrage-Limit & Finish Lesson',
        },
        {
          id: 'autonomy',
          label: 'Level, Gebühr & Status',
          title: 'Eigene Preise, Pause-Schalter & sinkende Gebühren',
          desc: 'Du bestimmst deinen Preis und wann du Aufträge annimmst. Mit jedem Auftrag sammelst du Punkte, steigst im Level auf und zahlst weniger Plattformgebühr.',
          bullets: [
            'Freie Preisgestaltung pro Videoanalyse',
            'Accepting Orders Schalter & direkte Auszahlung',
            'Mehr Punkte = höheres Level & geringere Plattformgebühr',
          ],
          caption: 'Instructor-Panel · Level, Gebühren & Auszahlung',
        },
      ],
      subScreensLabel: 'Weitere echte App-Ansichten:',
      subScreens: {
        levelPanel: 'Gebührenstufen (LV0–LV4)',
        profile: 'Instructor-Profil',
        request: 'Buchung & Limit',
        followup: 'Schüler-Limit 2/2',
        guaranteed: 'Storno-Garantie',
      },
      pillars: [
        { title: 'Eigene Preise', desc: 'Instructors legen ihren Satz selbst fest (1 verdienter Snow Coin = $1 USD).' },
        { title: 'Online/Pause-Schalter', desc: 'Accepting Orders jederzeit ein- oder ausschalten.' },
        { title: 'Limit & Finish Lesson', desc: 'Rückfragen begrenzen und Lektion selbst beenden.' },
        { title: 'Niedrigere Gebühren', desc: 'Analyse 20%→12%, Kurse 30%→20% · Erste 50 lebenslang 10%.' },
      ],
      cta: 'Jetzt mit Snow Pro starten',
    },
    courses: {
      tag: 'Funktion 02 · Videokurse',
      titlePre: 'Einmal aufnehmen.',
      titleHighlight: 'Kurse für USD verkaufen.',
      desc: 'Erstelle strukturierte Ski- oder Snowboard-Kurse zu deinen eigenen Preisen und verdiene passiv USD.',
      points: [
        { title: 'Ski & Snowboard Serien', desc: 'Filter nach Disziplin, Level, Sprache und Technik.' },
        { title: 'Freie Kurs-Preise', desc: '1 verdienter Snow Coin = $1 USD inkl. optionaler Rabatte.' },
        { title: 'Alles im Earnings Hub', desc: 'Kurs- und Analyseumsätze zusammen in USD.' },
      ],
      cta: 'Kurse in der App ansehen',
      screenCaption: 'Courses · Ski- & Snowboard-Kurse',
    },
    carpool: {
      tag: 'Funktion 03 · Kostenloses Carpooling',
      freeBadge: '100% KOSTENLOS INSERIEREN & FINDEN',
      titlePre: 'Kostenlose Ski-Fahrgemeinschaften.',
      titleHighlight: 'Fahrer oder Mitfahrer finden.',
      desc: 'Inseriere und suche Resort-Fahrten kostenlos—inklusive aktuellem Wetterbericht, Board-Stauraum, Kostenteilung und Routenkarte.',
      tabs: [
        {
          id: 'list',
          label: 'Resorts & Wetter',
          title: 'Resort-Filter mit aktuellem Wetter & Schnee',
          desc: 'Finde Hin- und Rückfahrten inklusive Wettervorschau für dein Skigebiet.',
          caption: 'Carpool-Liste · Resort-Filter & Wetter',
        },
        {
          id: 'detail',
          label: 'Plätze & Ausrüstung',
          title: 'Klare Angaben zu Board-Stauraum & Kosten',
          desc: 'Abfahrtszeiten, freie Plätze, Stauraum im Auto, Zahlungsart und Sprache.',
          caption: 'Fahrt-Details · Plätze & Ausrüstung',
        },
        {
          id: 'map',
          label: 'Route & Treffpunkt',
          title: 'Integrierte Karte & Navigation',
          desc: 'Prüfe Treffpunkt und Strecke vorab und starte direkt die Navigation.',
          caption: 'Routenkarte · Treffpunkt & Skigebiet',
        },
      ],
      cta: 'Kostenloses Carpool nutzen',
    },
    skibuddy: {
      tag: 'Funktion 04 · Ski Buddy',
      titlePre: 'Nie wieder allein fahren.',
      titleHighlight: 'Ski-Buddies nach Datum & Resort finden.',
      desc: 'Poste Skitage oder ganze Trips, filtere nach Ski/Snowboard und Können und chatte direkt in der App.',
      points: [
        { title: 'Einzelne Tage & Trips', desc: 'Tagesausflüge oder mehrtägige Skireisen eintragen.' },
        { title: 'Ski/Snowboard & Level', desc: 'Passende Partner vom Anfänger bis Experten finden.' },
        { title: 'Tags & Direkt-Chat', desc: 'Gegenseitig filmen, Tiefschnee oder Piste direkt absprechen.' },
      ],
      cta: 'Ski Buddies finden',
      screenCaption: 'Ski Buddy · Reisedaten & Chat',
    },
    roadmap: {
      tag: 'Zukunfts-Roadmap',
      title: 'Resort-Partnerschaften & Ökosystem',
      desc: 'Geplante Kooperationen mit Skigebieten für vergünstigte Liftpässe, Verleih-Deals und offizielle Skischul-Angebote.',
      status: 'In aktiver Planung',
      features: [
        { title: 'Vergünstigte Liftpässe', desc: 'Exklusive Tages-, Nacht- und Saisonkarten.' },
        { title: 'Ausrüstungsverleih-Deals', desc: 'Schnelle Abholung und Sonderkonditionen.' },
        { title: 'Offizielle Instructor-Deals', desc: 'Kooperationen mit offiziellen Skischulen.' },
        { title: 'Community & Gear Shop', desc: 'Schneeberichte und geprüfte Ausrüstung.' },
      ],
    },
    download: {
      title: 'Snow Pro für iOS & Android laden',
      desc: 'Verdiene als Instructor weltweit USD oder nutze kostenloses Resort-Carpooling und Ski Buddy.',
      iosLabel: 'iPhone-Nutzer',
      iosDesc: 'Im App Store nach "Snow Pro" suchen oder QR scannen',
      scanIos: 'Scannen für iOS App Store',
      btnIos: 'App Store',
      androidLabel: 'Android-Nutzer',
      androidDesc: 'Über Google Play laden oder APK direkt installieren',
      scanGooglePlay: 'Scannen für Google Play',
      btnGooglePlay: 'Google Play',
      directApk: 'Direkter APK-Download',
    },
    footer: {
      tagline: 'Bring dein Skifahren aufs nächste Level. Instructors, Freunde und Services vereint.',
      product: 'Produkt',
      productLinks: ['Videoanalyse', 'Kurse', 'Gratis-Carpool', 'Ski Buddy', 'Aufladen'],
      support: 'Support & Rechtliches',
      supportLinks: ['Hilfecenter', 'Kontakt', 'Datenschutz', 'Nutzungsbedingungen'],
      refundPolicy: 'Rückerstattung',
      deleteAccount: 'Konto & Daten löschen',
      communitySafety: 'Community & Jugendschutz',
      rights: 'Alle Rechte vorbehalten.',
    },
  },
  es: {
    nav: {
      video: 'Análisis de video',
      courses: 'Cursos',
      carpool: 'Carpool gratis',
      skibuddy: 'Ski Buddy',
      roadmap: 'Hoja de ruta',
      recharge: 'Recargar',
      appDownload: 'Descargar App',
    },
    hero: {
      badge: 'Para Instructors de Ski y Snowboard · Gana en USD desde cualquier lugar',
      titlePre: 'Analiza videos de esquí.',
      titleHighlight: 'Gana en USD a tu manera.',
      subtitle:
        'Snow Pro permite a los instructors certificados revisar videos desde cualquier lugar, fijar sus tarifas, cobrar en USD, bajar su comisión subiendo de nivel y controlar pedidos y seguimiento—más cursos, carpool gratis y Ski Buddy.',
      founderCallout:
        'Oferta Founding Instructor (Primeros 50): comisión vitalicia del 10% en análisis de video (quédate el 90%).',
      ctaDownload: 'Descargar App',
      ctaInstructor: 'Cómo ganan los Instructors',
      ctaCarpool: 'Ver Carpool gratis',
      highlights: [
        'Ingresos en USD',
        '1 Snow Coin ganado = $1 USD',
        'Interruptor Accepting Orders',
        'Menos comisión por nivel',
      ],
      payoutPill: 'Pagos a Instructors en USD',
      multiLangBadge: 'App multilingüe e idiomas de enseñanza (ES / EN / 中文 / 日本語…)',
      screenCaptions: {
        earnings: 'Earnings Hub · Ingresos en USD',
        annotation: 'Dibujo cuadro a cuadro y voz',
        center: 'Centro Instructor · Nivel y estado',
      },
    },
    video: {
      tag: 'Función 01 · Análisis remoto de video',
      titlePre: 'Tu experiencia en cualquier lugar.',
      titleHighlight: 'Control total para el Instructor.',
      desc: 'No hace falta estar en la montaña para generar ingresos. Dibuja sobre el video, graba notas de voz, cobra en USD y reduce tu comisión al subir de nivel.',
      coinNoteTitle: '1 Snow Coin ganado = $1 USD',
      coinNoteDesc:
        'Cada Snow Coin ganado por un Instructor equivale a $1.00 USD bruto (antes de comisión), liquidado en USD. El precio de compra para estudiantes puede variar según la tienda o el método de pago.',
      founderOffer: {
        badge: 'Founding Instructor · Primeros 50 lugares',
        title: 'Comisión vitalicia del 10% en análisis de video para los primeros 50 Instructors',
        desc: 'Únete como Founding Instructor certificado. Los primeros 50 instructors verificados aseguran una tarifa de plataforma permanente del 10% en análisis de video (conservas el 90%).',
        cta: 'Postular en la App',
      },
      tabs: [
        {
          id: 'earn',
          label: 'Gana en USD',
          title: 'Trabaja desde cualquier lugar y sigue tus USD',
          desc: 'Revisa videos cuando quieras. Earnings Hub separa tus ingresos de análisis y cursos en USD.',
          bullets: [
            'Gana en USD sin estar presencialmente en pistas',
            'Desglose entre análisis de video y cursos',
            'Historial detallado y métricas de 7 días / 6 meses',
          ],
          caption: 'Earnings Hub · Ingresos en USD',
        },
        {
          id: 'annotate',
          label: 'Dibujo y Voz',
          title: 'Anotaciones en video y notas de voz',
          desc: 'Avanza cuadro por cuadro, dibuja flechas sobre la técnica y añade voz.',
          bullets: [
            'Control cuadro a cuadro, saltos de 5s y velocidad',
            'Dibujos fijados al segundo exacto',
            'Notas de voz claras por cada punto clave',
          ],
          caption: 'Reproductor · Dibujo + Voz',
        },
        {
          id: 'control',
          label: 'Límite y Cierre',
          title: 'Limita preguntas y finaliza la lección tú mismo',
          desc: 'Evita mensajes interminables: define el máximo de preguntas y pulsa Finish Lesson al terminar.',
          bullets: [
            'Límite configurable de preguntas de seguimiento (ej. 2/2)',
            'Temporizador claro en Lesson Detail',
            'Control total para cerrar la clase con Finish Lesson',
          ],
          caption: 'Lesson Detail · Límite y Finish Lesson',
        },
        {
          id: 'autonomy',
          label: 'Nivel, comisión y pausa',
          title: 'Tu tarifa, pausa instantánea y menor comisión por nivel',
          desc: 'Tú decides cuánto cobras y cuándo aceptas pedidos. Acumula puntos de contribución para subir de nivel y pagar menos comisión.',
          bullets: [
            'Fija tu propio precio libremente',
            'Interruptor Accepting Orders y retiro directo',
            'Más puntos = nivel más alto y menor tarifa de plataforma',
          ],
          caption: 'Panel Instructor · Nivel, comisión y retiro',
        },
      ],
      subScreensLabel: 'Explora otras pantallas reales:',
      subScreens: {
        levelPanel: 'Niveles y comisiones (LV0–LV4)',
        profile: 'Perfil Instructor',
        request: 'Pedido y límite',
        followup: 'Contador 2/2',
        guaranteed: 'Reembolso garantizado',
      },
      pillars: [
        { title: 'Precio propio', desc: 'Los instructors fijan su tarifa (1 Snow Coin ganado = $1 USD bruto).' },
        { title: 'Interruptor Online', desc: 'Activa o pausa Accepting Orders cuando quieras.' },
        { title: 'Límite y Finish Lesson', desc: 'Sin preguntas interminables; tú cierras la lección.' },
        { title: 'Menor comisión por nivel', desc: 'Análisis 20%→12%, cursos 30%→20% · Primeros 50 al 10% vitalicio.' },
      ],
      cta: 'Empezar en Snow Pro',
    },
    courses: {
      tag: 'Función 02 · Cursos en video',
      titlePre: 'Graba una vez.',
      titleHighlight: 'Vende tus cursos en USD.',
      desc: 'Publica series de video para ski o snowboard, fija tu precio y genera ingresos en USD.',
      points: [
        { title: 'Series Ski y Snowboard', desc: 'Organizado por nivel, idioma y técnica.' },
        { title: 'Precio libre en USD', desc: '1 Snow Coin ganado = $1 USD con soporte para descuentos.' },
        { title: 'Todo en Earnings Hub', desc: 'Ventas de cursos y análisis juntos en USD.' },
      ],
      cta: 'Ver cursos en la App',
      screenCaption: 'Courses · Catálogo de cursos',
    },
    carpool: {
      tag: 'Función 03 · Carpool gratuito',
      freeBadge: '100% GRATIS PUBLICAR Y BUSCAR VIAJES',
      titlePre: 'Carpool gratuito a pistas.',
      titleHighlight: 'Comparte coche y gastos.',
      desc: 'Publica o busca viajes gratis, revisa el clima reciente de la estación, espacio para tablas y ruta en el mapa.',
      tabs: [
        {
          id: 'list',
          label: 'Estaciones y Clima',
          title: 'Filtro por estación con clima reciente',
          desc: 'Consulta viajes de ida o vuelta y condiciones meteorológicas.',
          caption: 'Carpool · Filtro y clima',
        },
        {
          id: 'detail',
          label: 'Plazas y Equipo',
          title: 'Espacio para tablas, plazas y pago claros',
          desc: 'Horarios, asientos libres, espacio interior, métodos de pago e idioma.',
          caption: 'Detalle · Plazas y equipo',
        },
        {
          id: 'map',
          label: 'Mapa y Ruta',
          title: 'Ruta en mapa y navegación directa',
          desc: 'Visualiza el punto de encuentro y navega hacia la estación.',
          caption: 'Mapa · Punto de recogida',
        },
      ],
      cta: 'Usar Carpool gratis',
    },
    skibuddy: {
      tag: 'Función 04 · Ski Buddy',
      titlePre: 'No esquíes solo.',
      titleHighlight: 'Encuentra compañeros por fecha y estación.',
      desc: 'Publica tus fechas o viaje, filtra por ski/snowboard y nivel, y chatea directamente en la app.',
      points: [
        { title: 'Fechas o viajes completos', desc: 'Publica un día suelto o varios días de viaje.' },
        { title: 'Filtro por modalidad y nivel', desc: 'Ski o snowboard, desde principiante a experto.' },
        { title: 'Etiquetas y chat directo', desc: 'Grabarse mutuamente, freeride o pistas.' },
      ],
      cta: 'Buscar Ski Buddies',
      screenCaption: 'Ski Buddy · Fechas y chat directo',
    },
    roadmap: {
      tag: 'Hoja de ruta',
      title: 'Alianzas con estaciones',
      desc: 'Planificando acuerdos para forfaits con descuento, alquiler de equipo y escuelas oficiales.',
      status: 'En planificación activa',
      features: [
        { title: 'Forfaits con descuento', desc: 'Acuerdos exclusivos de día, noche y temporada.' },
        { title: 'Alquiler de equipo', desc: 'Tarifas especiales y recogida sin filas.' },
        { title: 'Instructors oficiales', desc: 'Colaboración directa con escuelas de estación.' },
        { title: 'Comunidad y tienda', desc: 'Reportes reales de nieve y equipo recomendado.' },
      ],
    },
    download: {
      title: 'Descarga Snow Pro en iOS y Android',
      desc: 'Empieza a ganar en USD como instructor o comparte viajes gratis hacia la nieve.',
      iosLabel: 'Usuarios iPhone',
      iosDesc: 'Busca "Snow Pro" en App Store o escanea el QR',
      scanIos: 'Escanear para iOS',
      btnIos: 'App Store',
      androidLabel: 'Usuarios Android',
      androidDesc: 'Descarga en Google Play o instala el APK directamente',
      scanGooglePlay: 'Escanear para Google Play',
      btnGooglePlay: 'Google Play',
      directApk: 'Descarga directa de APK',
    },
    footer: {
      tagline: 'Lleva tu esquí al siguiente nivel. Conectando instructors, amigos y servicios.',
      product: 'Producto',
      productLinks: ['Análisis de video', 'Cursos', 'Carpool gratis', 'Ski Buddy', 'Recargar'],
      support: 'Soporte y Legal',
      supportLinks: ['Centro de ayuda', 'Contacto', 'Privacidad', 'Términos'],
      refundPolicy: 'Política de reembolso',
      deleteAccount: 'Eliminar cuenta y datos',
      communitySafety: 'Comunidad y seguridad infantil',
      rights: 'Todos los derechos reservados.',
    },
  },
  ru: {
    nav: {
      video: 'Видеоанализ',
      courses: 'Курсы',
      carpool: 'Бесплатный карпул',
      skibuddy: 'Ski Buddy',
      roadmap: 'Планы',
      recharge: 'Пополнение',
      appDownload: 'Скачать',
    },
    hero: {
      badge: 'Для инструкторов (Instructors) по лыжам и сноуборду · Доход в USD',
      titlePre: 'Разбирайте видео катания.',
      titleHighlight: 'Зарабатывайте USD на своих условиях.',
      subtitle:
        'Snow Pro позволяет сертифицированным инструкторам удалённо разбирать видео, назначать цены, получать доход в USD, снижать комиссию с ростом уровня и контролировать заказы и вопросы — а также продавать курсы и находить бесплатный карпул и попутчиков.',
      founderCallout:
        'Founding Instructor (первые 50): пожизненная комиссия 10% за видеоанализ (90% остаётся вам).',
      ctaDownload: 'Скачать приложение',
      ctaInstructor: 'Как зарабатывать',
      ctaCarpool: 'Бесплатный карпул',
      highlights: [
        'Доход в USD',
        '1 заработанный Snow Coin = $1 USD',
        'Переключатель Accepting Orders',
        'Ниже комиссия с ростом уровня',
      ],
      payoutPill: 'Выплаты Instructor в USD',
      multiLangBadge: 'Мультиязычное приложение и языки обучения (RU / EN / 中文 / 日本語 и др.)',
      screenCaptions: {
        earnings: 'Earnings Hub · Доход в USD',
        annotation: 'Покадровая разметка и голос',
        center: 'Центр Instructor · Уровень и статус',
      },
    },
    video: {
      tag: 'Функция 01 · Удалённый видеоанализ',
      titlePre: 'Ваш опыт — из любой точки.',
      titleHighlight: 'Полный контроль для Instructor.',
      desc: 'Не нужно быть на склоне, чтобы зарабатывать. Рисуйте прямо по кадрам, записывайте голосовые комментарии, получайте доход в USD и снижайте комиссию за счёт очков вклада.',
      coinNoteTitle: '1 заработанный Snow Coin = $1 USD',
      coinNoteDesc:
        'Каждый заработанный инструктором Snow Coin равен $1.00 USD валового дохода (до комиссии платформы) с расчётом в USD. Стоимость покупки монет для учеников может отличаться в зависимости от магазина и способа оплаты.',
      founderOffer: {
        badge: 'Набор Founding Instructor · Первые 50 мест',
        title: 'Пожизненная комиссия 10% на видеоанализ для первых 50 Instructors',
        desc: 'Присоединяйтесь к Snow Pro среди первых: 50 верифицированных инструкторов закрепляют за собой постоянную комиссию 10% за разбор видео (90% дохода ваши).',
        cta: 'Подать заявку в приложении',
      },
      tabs: [
        {
          id: 'earn',
          label: 'Доход в USD',
          title: 'Работайте откуда угодно и отслеживайте USD',
          desc: 'Разбирайте видео из дома или в поездках. Earnings Hub разделяет доход от видеоанализа и курсов в USD.',
          bullets: [
            'Удалённый заработок в USD по вашему расписанию',
            'Отдельная статистика по видеоразборам и курсам',
            'История начислений за 7 дней и 6 месяцев',
          ],
          caption: 'Earnings Hub · Доход в USD и история',
        },
        {
          id: 'annotate',
          label: 'Рисунок и голос',
          title: 'Ключевые кадры, стрелки и голосовые заметки',
          desc: 'Перематывайте покадрово, отмечайте ошибки стойки и закантовки линиями и записывайте голос.',
          bullets: [
            'Покадровый шаг, перемотка по 5с и скорость 1x',
            'Графические пометки на точном таймкоде',
            'Голосовые комментарии к каждому ключевому кадру',
          ],
          caption: 'Видеоплеер · Разметка и голос',
        },
        {
          id: 'control',
          label: 'Лимит и завершение',
          title: 'Лимит уточняющих вопросов и кнопка Finish Lesson',
          desc: 'Никаких бесконечных переписок. Вы задаёте лимит вопросов (например, 2/2) и сами завершаете урок кнопкой Finish Lesson.',
          bullets: [
            'Настраиваемый лимит дополнительных вопросов ученика',
            'Таймер и структурированный чат в Lesson Detail',
            'Самостоятельное завершение урока через Finish Lesson',
          ],
          caption: 'Lesson Detail · Лимит и Finish Lesson',
        },
        {
          id: 'autonomy',
          label: 'Уровни, комиссия и статус',
          title: 'Свои цены, пауза приёма и снижение комиссии с уровнем',
          desc: 'Цену назначаете вы. Нужен отдых — выключите приём заказов. Чем больше уроков, тем выше уровень и ниже комиссия платформы.',
          bullets: [
            'Свободное ценообразование для каждого разбора',
            'Переключатель Accepting Orders и вывод средств',
            'Очки вклада повышают уровень и снижают комиссию',
          ],
          caption: 'Панель Instructor · Уровень, комиссия и вывод',
        },
      ],
      subScreensLabel: 'Другие реальные экраны процесса:',
      subScreens: {
        levelPanel: 'Уровни и комиссии (LV0–LV4)',
        profile: 'Профиль Instructor',
        request: 'Заказ и лимит',
        followup: 'Счётчик 2/2 у ученика',
        guaranteed: 'Возврат до принятия',
      },
      pillars: [
        { title: 'Своя цена', desc: 'Тариф назначает Instructor (1 заработанный Snow Coin = $1 USD).' },
        { title: 'Переключатель приёма', desc: 'Включайте и отключайте Accepting Orders в любой момент.' },
        { title: 'Лимит и Finish Lesson', desc: 'Ограничивайте вопросы и сами завершайте урок.' },
        { title: 'Ниже комиссия с ростом', desc: 'Разбор 20%→12%, курсы 30%→20% · Первые 50 — 10% пожизненно.' },
      ],
      cta: 'Начать работу в Snow Pro',
    },
    courses: {
      tag: 'Функция 02 · Видеокурсы',
      titlePre: 'Запишите один раз.',
      titleHighlight: 'Продавайте серии курсов за USD.',
      desc: 'Публикуйте обучающие видеокурсы по лыжам и сноуборду по своей цене и получайте доход в USD.',
      points: [
        { title: 'Серии для лыж и сноуборда', desc: 'Фильтры по дисциплине, уровню и языку.' },
        { title: 'Свободная цена в USD', desc: '1 заработанный Snow Coin = $1 USD, поддержка скидок.' },
        { title: 'Единый Earnings Hub', desc: 'Продажи курсов и разборы на одном экране.' },
      ],
      cta: 'Смотреть курсы в приложении',
      screenCaption: 'Courses · Каталог видеокурсов',
    },
    carpool: {
      tag: 'Функция 03 · Бесплатный карпул',
      freeBadge: '100% БЕСПЛАТНО ДЛЯ ВОДИТЕЛЕЙ И ПАССАЖИРОВ',
      titlePre: 'Бесплатный карпул на курорты.',
      titleHighlight: 'Находите попутчиков и делите дорогу.',
      desc: 'Публикация и поиск поездок полностью бесплатны: погода на курорте, место под доски/лыжи, стоимость и карта маршрута.',
      tabs: [
        {
          id: 'list',
          label: 'Курорты и погода',
          title: 'Фильтр по курорту и недавняя погода',
          desc: 'Поездки в одну сторону или туда-обратно с прогнозом и состоянием снега.',
          caption: 'Карпул · Фильтр курорта и погода',
        },
        {
          id: 'detail',
          label: 'Места и снаряжение',
          title: 'Указание места под снаряжение и оплаты',
          desc: 'Время выезда и возврата, свободные места, багажник/салон и способы оплаты.',
          caption: 'Детали поездки · Места и снаряжение',
        },
        {
          id: 'map',
          label: 'Карта маршрута',
          title: 'Карта точки сбора и навигация до курорта',
          desc: 'Посмотрите маршрут на карте и запустите навигацию в один тап.',
          caption: 'Карта · Точка сбора и курорт',
        },
      ],
      cta: 'Найти или создать поездку',
    },
    skibuddy: {
      tag: 'Функция 04 · Ski Buddy',
      titlePre: 'Не катайтесь в одиночку.',
      titleHighlight: 'Ищите компанию по датам и курорту.',
      desc: 'Опубликуйте даты поездки, выберите лыжи или сноуборд, уровень и теги катания и напишите в чат.',
      points: [
        { title: 'Даты или многодневные туры', desc: 'На один день или на всю поездку.' },
        { title: 'Фильтр по снаряду и уровню', desc: 'От новичка до эксперта.' },
        { title: 'Теги и личный чат', desc: 'Совместная съёмка, фрирайд и катание по трассам.' },
      ],
      cta: 'Найти Ski Buddy',
      screenCaption: 'Ski Buddy · Даты и личный чат',
    },
    roadmap: {
      tag: 'Планы развития',
      title: 'Партнёрство с курортами',
      desc: 'В активной проработке скидки на ски-пассы, прокат снаряжения и официальные школы курортов.',
      status: 'В активной разработке',
      features: [
        { title: 'Скидки на ски-пассы', desc: 'Дневные, вечерние и сезонные предложения.' },
        { title: 'Выгодный прокат', desc: 'Спецтарифы и выдача без очередей.' },
        { title: 'Официальные школы', desc: 'Сотрудничество с курортными школами катания.' },
        { title: 'Сообщество и магазин', desc: 'Отчёты со склонов и подборка снаряжения.' },
      ],
    },
    download: {
      title: 'Скачайте Snow Pro для iOS и Android',
      desc: 'Начните зарабатывать в USD как инструктор или пользуйтесь бесплатным карпулом и поиском компании.',
      iosLabel: 'Для iPhone',
      iosDesc: 'Ищите "Snow Pro" в App Store или сканируйте QR',
      scanIos: 'Сканируйте для загрузки iOS',
      btnIos: 'App Store',
      androidLabel: 'Для Android',
      androidDesc: 'Скачайте из Google Play или установите APK напрямую',
      scanGooglePlay: 'Сканируйте для Google Play',
      btnGooglePlay: 'Google Play',
      directApk: 'Прямая загрузка APK',
    },
    footer: {
      tagline: 'Выведите катание на новый уровень. Связываем инструкторов, друзей и сервисы.',
      product: 'Продукт',
      productLinks: ['Видеоанализ', 'Курсы', 'Бесплатный карпул', 'Ski Buddy', 'Пополнение'],
      support: 'Поддержка',
      supportLinks: ['Помощь', 'Связаться с нами', 'Конфиденциальность', 'Условия'],
      refundPolicy: 'Политика возврата',
      deleteAccount: 'Удаление аккаунта и данных',
      communitySafety: 'Безопасность сообщества',
      rights: 'Все права защищены.',
    },
  },
};
