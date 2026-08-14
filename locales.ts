export type Language = 'zh' | 'en' | 'ja' | 'ko' | 'fr' | 'de' | 'es' | 'ru';

export const translations = {
  zh: {
    nav: {
      features: "核心功能",
      video: "视频分析",
      carpool: "雪场拼车",
      courses: "名师课程",
      skibuddy: "雪友招募",
      roadmap: "未来规划",
      about: "关于我们",
      download: "立即下载",
      recharge: "代币充值",
      appDownload: "下载 APP"
    },
    hero: {
      badge: "Snow Pro 1.0 全新上线 · 4 大滑雪生态",
      titlePre: "重新定义你的",
      titleHighlight: "滑雪进阶与出行",
      subtitle: "连接专业教练与滑雪爱好者。集视频分析指导、雪场拼车出行、名师系列课程购买、同频雪友招募于一体的一站式滑雪平台。",
      ctaIos: "App Store 下载",
      ctaIosNote: "适用于 iOS 15+",
      ctaAndroid: "Android 下载",
      pills: {
        video: "视频分析",
        carpool: "雪场拼车",
        courses: "名师课程",
        skibuddy: "雪友招募"
      },
      stats: {
        coaches: "认证教练",
        analysis: "视频分析",
        rating: "用户评分"
      }
    },
    video: {
      tag: "核心功能 01",
      titlePre: "教练就在你的口袋里",
      titleHighlight: "逐帧视频分析与指导",
      desc: "告别盲目练习。上传您的滑雪视频，认证教练为您提供慢动作回放、精准画线与语音讲解。不仅知道问题所在，更能高效纠错。",
      feature1Title: "精准画线纠错",
      feature1Desc: "直观的视觉轨迹与角度标注，清晰指出身体重心、立刃角度与滑行姿态问题。",
      feature2Title: "教练语音点评",
      feature2Desc: "无需繁琐文字，倾听教练针对性语音剖析，如同现场名师面对面指导。",
      cta: "体验视频分析",
      demoPoints: [
        { comment: "入弯时重心过高，膝盖弯曲度不足。", type: "correction" },
        { comment: "这一段的立刃角度非常漂亮，保持这个节奏！", type: "praise" },
        { comment: "出弯过早，导致速度控制不稳，试着多向山下看。", type: "correction" }
      ]
    },
    carpool: {
      tag: "核心功能 02",
      titlePre: "雪场拼车出行",
      titleHighlight: "省心省钱 · 结伴同路",
      desc: "告别独自驾车往返雪场的疲惫与昂贵开销。在 Snow Pro 快速发布或寻找拼车行程，明确标注雪板雪具空间，分摊油费路费，和同路雪友一起出发。",
      feature1Title: "灵活发布与寻找行程",
      feature1Desc: "车主发布空余座位与出发时间，乘客按路线快速申请同行。",
      feature2Title: "雪板雪具空间明确标注",
      feature2Desc: "明确标注后备箱空间、板包与单双板容纳数量，带板出行无忧。",
      feature3Title: "透明分摊路费",
      feature3Desc: "AA分摊油费与过路费，出行更经济、更环保。",
      cta: "在 App 中体验拼车",
      routes: [
        { from: "北京市区 (惠新西街)", to: "崇礼万龙雪场", date: "周六 06:30", price: "¥60 /人", seats: "余 2 座", boardCapacity: "可放 2 块单板/双板", driver: "滑雪老徐", car: "SUV · 顶架雪板箱" },
        { from: "上海虹桥", to: "吉林松花湖", date: "周五 19:00", price: "¥85 /人", seats: "余 1 座", boardCapacity: "支持 160cm 板包", driver: "CarveMaster", car: "商务MPV · 宽敞空间" },
        { from: "东京新宿", to: "汤泽神乐雪场", date: "周日 07:00", price: "¥3,500 /人", seats: "余 3 座", boardCapacity: "单双板皆可", driver: "Kenji", car: "四驱SUV · 雪地胎" }
      ]
    },
    courses: {
      tag: "核心功能 03",
      title: "名师系列视频课程",
      desc: "由认证专业教练倾力打造并自主发布的系统化教学课程。学生可使用代币按需购买，随时随地在线复习与打卡学习，全方位覆盖单双板各进阶阶段。",
      feature1Title: "教练自主发布",
      feature1Desc: "认证教练录制系统教学视频，自主定价与开课，传授核心技巧与实战经验。",
      feature2Title: "学生一键订阅学习",
      feature2Desc: "代币便捷购买，随时随地反复观看、复盘技术细节与训练动作。",
      btnText: "立即在 App 中探索全部课程",
      instructorLabel: "授课教练",
      lessonsLabel: "课时",
      list: [
        { title: "双板高级刻滑进阶体系", instructor: "Marcus Vogt", lessons: 12, level: "高级", style: "双板刻滑", price: "80 代币" },
        { title: "单板基础滑行与核心发力精讲", instructor: "Hannah Adams", lessons: 8, level: "初中级", style: "单板技巧", price: "50 代币" },
        { title: "大山野雪与树林探险安全指南", instructor: "Sven Lindqvist", lessons: 10, level: "专家级", style: "野雪自由式", price: "100 代币" }
      ]
    },
    skibuddy: {
      tag: "核心功能 04",
      titlePre: "雪友招募 · SkiBuddy",
      titleHighlight: "寻找同频搭子 · 告别孤单刷道",
      desc: "一个人滑雪太无聊？或者想找水平相当的伙伴一起切磋？发布招募或一键加入雪友队伍，按雪场、日期、水平与玩法精准约滑，一起滑雪、互拍视频、分享快乐。",
      feature1Title: "精准多维匹配",
      feature1Desc: "支持按目标雪场、出发日期、单双板与技术水平筛选搭子，高效找到同路人。",
      feature2Title: "互拍刷道与拼玩",
      feature2Desc: "无论是进阶互拍分析动作，还是约饭拼房，轻松组建专属滑雪小分队。",
      cta: "在 App 中招募雪友",
      posts: [
        { title: "万龙周末刻滑互拍，寻中高级单板搭子", resort: "崇礼 · 万龙", date: "本周六 - 周日", level: "中高级", style: "单板", target: "互拍动作 / 刷黑道", author: "Leo_Carver", members: "3/4 人" },
        { title: "北海道二世谷野雪探路小分队", resort: "二世谷 · Niseko", date: "下月 12-16日", level: "专家级", style: "单双板均可", target: "粉雪树林 / 探秘境", author: "Yuki", members: "2/5 人" },
        { title: "云顶夜场小白练习，互相鼓励不劝退", resort: "密苑云顶", date: "周五夜场", level: "初学者", style: "单板", target: "基础推坡 / 落叶飘", author: "小雪梨", members: "2/3 人" }
      ]
    },
    roadmap: {
      tag: "未来规划",
      title: "雪场直连合作与生态拓展",
      desc: "Snow Pro 将深入对接各大合作雪场，为用户争取更优惠的雪票、雪具租赁与官方正规教练服务，打造更高性价比的滑雪体验。",
      status: "深度洽谈与规划中",
      features: [
        { title: "特惠合作雪票", desc: "携手各大优质雪场，提供官方合作特惠日场/夜场雪票、早鸟预售季卡与专属折扣。" },
        { title: "高品质雪具租赁优惠", desc: "对接雪场官方及周边精选雪具店，享专享租赁折扣，免排队提板，高性价比体验高端板型。" },
        { title: "雪场官方教练直通特惠", desc: "与雪场官方滑雪学校深度合作，提供合规、正规且享有专享折扣的现场官方教练预约渠道。" },
        { title: "雪圈社区与装备商城", desc: "雪友真实滑雪心得与雪况交流，严选优质滑雪装备与周边，正品直供与雪友置换。" }
      ]
    },
    testimonials: {
      title: "深受雪友喜爱",
      reviews: [
        { name: "Alex Zhang", role: "双板中级滑雪者", content: "以前自己瞎滑总觉得哪里不对，用了Snow Pro的视频分析功能，教练指出的重心问题让我茅塞顿开！" },
        { name: "Sarah Li", role: "单板刻滑爱好者", content: "非常有用的工具。拼车功能超赞，去崇礼直接在App里找雪友拼车，省钱又方便。" },
        { name: "Coach Mike", role: "CASI Level 3 教练", content: "Snow Pro 让我能自主发布系列课并高效管理学生视频，画线工具非常顺手，沟通效率大大提高。" }
      ]
    },
    footer: {
      tagline: "让每一次滑行都更进一步。连接教练、雪友与优质服务，您的终极滑雪伴侣。",
      product: "产品",
      productLinks: ["视频分析", "雪场拼车", "名师课程", "雪友招募", "代币充值"],
      support: "支持",
      supportLinks: ["使用帮助", "联系我们", "隐私政策", "服务条款"],
      rights: "保留所有权利。"
    },
    ctaBottom: {
      title: "准备好开启更精彩的滑雪体验了吗？",
      desc: "加入 Snow Pro 社区，体验专业的视频分析、雪场拼车、名师课程与雪友招募。现在下载，即刻开启您的进阶之旅。",
      btnIos: "App Store 下载",
      btnAndroid: "Android 下载"
    },
    verifyEmail: {
      verifying: "正在验证您的邮箱...",
      success: "邮箱验证成功！",
      successTitle: "验证成功！",
      errorTitle: "验证失败",
      openApp: "打开 Snow Pro App",
      invalidLink: "验证链接无效，缺少参数。",
      errorFallback: "验证失败。",
      errorOccurred: "验证过程中发生错误。",
      errorInstruction: "请尝试在 App 中重新请求验证邮件。",
      resendEmail: "重新发送验证邮件",
      emailPlaceholder: "请输入您的邮箱地址",
      resendSuccess: "验证邮件已重新发送，请检查您的收件箱。",
      resending: "正在重新发送...",
      invalidEmail: "请输入有效的邮箱地址。"
    },
    resetPassword: {
      title: "重置密码",
      subtitle: "在下方输入您的新密码。",
      newPassword: "新密码",
      confirmPassword: "确认密码",
      passwordsDoNotMatch: "两次输入的密码不一致。",
      passwordLength: "密码长度必须至少为 6 个字符。",
      invalidLink: "链接无效，缺少参数。",
      successTitle: "重置成功",
      successDesc: "您的密码已成功重置。",
      openApp: "打开 App 登录",
      resetting: "正在重置...",
      submitBtn: "重置密码",
      errorFallback: "重置失败。",
      errorOccurred: "重置过程中发生错误。"
    }
  },
  en: {
    nav: {
      features: "Features",
      video: "Video Analysis",
      carpool: "Carpool",
      courses: "Courses",
      skibuddy: "Ski Buddy",
      roadmap: "Roadmap",
      about: "About",
      download: "Download",
      recharge: "Token Recharge",
      appDownload: "Get App"
    },
    hero: {
      badge: "Snow Pro 1.0 is Live · 4 Core Ski Ecosystems",
      titlePre: "Redefine Your",
      titleHighlight: "Ski Progression & Trips",
      subtitle: "Connect with certified coaches and ski enthusiasts. A unified platform for video analysis, carpooling, instructor courses, and finding ski buddies.",
      ctaIos: "App Store",
      ctaIosNote: "Requires iOS 15+",
      ctaAndroid: "Android Download",
      pills: {
        video: "Video Analysis",
        carpool: "Carpool",
        courses: "Courses",
        skibuddy: "Ski Buddy"
      },
      stats: {
        coaches: "Certified Coaches",
        analysis: "Video Analyses",
        rating: "User Rating"
      }
    },
    video: {
      tag: "Core Feature 01",
      titlePre: "A Coach in Your Pocket",
      titleHighlight: "Frame-by-Frame Analysis",
      desc: "Stop practicing blindly. Upload your skiing videos and get detailed voice & drawing feedback from certified instructors. Know exactly what to fix and how.",
      feature1Title: "Visual Corrections",
      feature1Desc: "Intuitive visual feedback showing subtle deviations in body angles and edge positions.",
      feature2Title: "Voice Commentary",
      feature2Desc: "Don't just read text. Listen to the instructor's detailed voice explanation as if they were right beside you.",
      cta: "Start Video Analysis",
      demoPoints: [
        { comment: "Center of gravity too high entering the turn.", type: "correction" },
        { comment: "Excellent edge angle here, keep this rhythm!", type: "praise" },
        { comment: "Exiting turn too early, affecting speed control.", type: "correction" }
      ]
    },
    carpool: {
      tag: "Core Feature 02",
      titlePre: "Resort Carpooling",
      titleHighlight: "Save Costs & Travel Together",
      desc: "No more exhausting solo drives and costly transport. Post or find rides to ski resorts on Snow Pro, specify ski board luggage room, share fuel & tolls, and head out together.",
      feature1Title: "Flexible Ride Sharing",
      feature1Desc: "Drivers post available seats and departure schedules; riders easily request to join.",
      feature2Title: "Clear Gear Space Info",
      feature2Desc: "Explicit tags for trunk space, board bags, and capacity for skis and snowboards.",
      feature3Title: "Transparent Cost Sharing",
      feature3Desc: "Split gas and toll costs fairly. Economic, eco-friendly, and social.",
      cta: "Explore Carpool in App",
      routes: [
        { from: "Downtown Beijing", to: "Wanlong Ski Resort", date: "Sat 06:30", price: "$9 /person", seats: "2 seats left", boardCapacity: "2 board bags max", driver: "Alex Xu", car: "SUV with Roof Rack" },
        { from: "Shanghai Hub", to: "Songhua Lake Resort", date: "Fri 19:00", price: "$12 /person", seats: "1 seat left", boardCapacity: "Fits up to 160cm bag", driver: "CarveMaster", car: "Spacious MPV" },
        { from: "Tokyo Shinjuku", to: "Yuzawa Kagura", date: "Sun 07:00", price: "$25 /person", seats: "3 seats left", boardCapacity: "Skis & boards welcome", driver: "Kenji", car: "4WD SUV · Snow Tires" }
      ]
    },
    courses: {
      tag: "Core Feature 03",
      title: "Structured Video Courses by Certified Coaches",
      desc: "Comprehensive curriculum created and published directly by certified instructors. Students can purchase on-demand with tokens and review lessons anytime, anywhere.",
      feature1Title: "Instructor Publishing",
      feature1Desc: "Certified coaches publish curriculum series, set pricing, and teach core techniques.",
      feature2Title: "Instant Student Access",
      feature2Desc: "Unlock lessons with tokens for lifetime review, technical breakdowns, and guided practice.",
      btnText: "Explore All Courses in App",
      instructorLabel: "Instructor",
      lessonsLabel: "Lessons",
      list: [
        { title: "Ski Carving Masterclass", instructor: "Marcus Vogt", lessons: 12, level: "Advanced", style: "Ski Carving", price: "80 Tokens" },
        { title: "Snowboard Basics & Core Riding", instructor: "Hannah Adams", lessons: 8, level: "Beginner", style: "Snowboard", price: "50 Tokens" },
        { title: "Backcountry & Freeride Safety", instructor: "Sven Lindqvist", lessons: 10, level: "Expert", style: "Freeride", price: "100 Tokens" }
      ]
    },
    skibuddy: {
      tag: "Core Feature 04",
      titlePre: "Find Your Crew with SkiBuddy",
      titleHighlight: "Never Ski Alone Again",
      desc: "Looking for partners of similar skill levels to ride with? Post a recruitment or join a group. Match by resort, dates, skill level, and riding style to shred and film each other.",
      feature1Title: "Multi-Filter Matching",
      feature1Desc: "Filter buddies by resort, dates, board type, and skill levels (beginner to expert).",
      feature2Title: "Shred & Film Together",
      feature2Desc: "Capture each other's runs for technique reviews, split accommodation, and make friends.",
      cta: "Find Buddies in App",
      posts: [
        { title: "Wanlong weekend carving & video filming", resort: "Chongli · Wanlong", date: "This Sat - Sun", level: "Intermediate+", style: "Snowboard", target: "Carving & filming", author: "Leo_Carver", members: "3/4 Joined" },
        { title: "Niseko Backcountry & Powder Team", resort: "Hokkaido · Niseko", date: "Next Month 12-16", level: "Expert", style: "Ski / Snowboard", target: "Tree runs & Powder", author: "Yuki", members: "2/5 Joined" },
        { title: "Genting night session beginner practice", resort: "Secret Garden Genting", date: "Fri Night", level: "Beginner", style: "Snowboard", target: "Side slipping / turns", author: "Cherry", members: "2/3 Joined" }
      ]
    },
    roadmap: {
      tag: "Future Roadmap",
      title: "Resort Partnerships & Ecosystem Growth",
      desc: "Snow Pro is actively partnering with top ski resorts to secure exclusive discounted lift tickets, gear rental packages, and official resort instructor deals.",
      status: "In Active Planning",
      features: [
        { title: "Discounted Resort Lift Tickets", desc: "Partnering with top ski resorts to bring exclusive day/night tickets, early-bird passes, and season discounts." },
        { title: "Special Gear Rental Deals", desc: "Partnering with resort gear shops for seamless, skip-the-line rentals and special rates on high-end skis and boards." },
        { title: "Official Resort Instructor Deals", desc: "Direct collaboration with official resort ski schools to offer compliant, official lessons at discounted rates." },
        { title: "Community Forum & Gear Shop", desc: "Connect with skiers, read real slope reports, and explore authentic gear recommendations." }
      ]
    },
    testimonials: {
      title: "Loved by Skiers",
      reviews: [
        { name: "Alex Zhang", role: "Intermediate Skier", content: "I was stuck for a long time. The video analysis pointed out my balance issues immediately, game changer!" },
        { name: "Sarah Li", role: "Snowboard Carver", content: "Super useful app. The carpool feature is amazing—finding rides to Chongli saves both time and money." },
        { name: "Coach Mike", role: "CASI Level 3 Instructor", content: "Snow Pro allows me to publish courses and manage student video feedback seamlessly. Highly efficient!" }
      ]
    },
    footer: {
      tagline: "Take your skiing to the next level. Connecting instructors, friends, and services.",
      product: "Product",
      productLinks: ["Video Analysis", "Carpooling", "Courses", "Ski Buddy", "Token Recharge"],
      support: "Support",
      supportLinks: ["Help Center", "Contact Us", "Privacy Policy", "Terms"],
      rights: "All rights reserved."
    },
    ctaBottom: {
      title: "Ready to Level Up Your Skiing?",
      desc: "Join the Snow Pro community today. Experience pro video analysis, easy carpooling, coach courses, and ski buddy matching. Download now.",
      btnIos: "App Store",
      btnAndroid: "Android Download"
    },
    verifyEmail: {
      verifying: "Verifying your email...",
      success: "Email verified successfully!",
      successTitle: "Success!",
      errorTitle: "Verification Failed",
      openApp: "Open Snow Pro App",
      invalidLink: "Invalid verification link. Missing parameters.",
      errorFallback: "Verification failed.",
      errorOccurred: "An error occurred during verification.",
      errorInstruction: "Please try requesting a new verification email from the app.",
      resendEmail: "Resend Verification Email",
      emailPlaceholder: "Enter your email address",
      resendSuccess: "Verification email resent! Please check your inbox.",
      resending: "Resending...",
      invalidEmail: "Please enter a valid email address."
    },
    resetPassword: {
      title: "Reset Password",
      subtitle: "Enter your new password below.",
      newPassword: "New Password",
      confirmPassword: "Confirm Password",
      passwordsDoNotMatch: "Passwords do not match.",
      passwordLength: "Password must be at least 6 characters.",
      invalidLink: "Invalid link parameters.",
      successTitle: "Reset Successful",
      successDesc: "Your password has been reset successfully.",
      openApp: "Open App to Login",
      resetting: "Resetting...",
      submitBtn: "Reset Password",
      errorFallback: "Reset failed.",
      errorOccurred: "An error occurred."
    }
  },
  ja: {
    nav: {
      features: "機能",
      video: "動画分析",
      carpool: "相乗り",
      courses: "プロ講座",
      skibuddy: "仲間募集",
      roadmap: "ロードマップ",
      about: "概要",
      download: "ダウンロード",
      recharge: "トークンチャージ",
      appDownload: "アプリを入手"
    },
    hero: {
      badge: "Snow Pro 1.0 リリース · 4つのコア機能",
      titlePre: "スキーの上達と移動を",
      titleHighlight: "再定義する",
      subtitle: "プロの認定コーチとスキー愛好家をつなぐ。動画分析、ゲレンデ相乗り、プロ講座の受講、スキー仲間募集がひとつになったオールインワンプラットフォーム。",
      ctaIos: "App Store",
      ctaIosNote: "iOS 15+ 対応",
      ctaAndroid: "Android ダウンロード",
      pills: {
        video: "動画分析",
        carpool: "相乗り",
        courses: "プロ講座",
        skibuddy: "仲間募集"
      },
      stats: {
        coaches: "認定コーチ",
        analysis: "分析数",
        rating: "評価"
      }
    },
    video: {
      tag: "コア機能 01",
      titlePre: "ポケットの中の専属コーチ",
      titleHighlight: "フレーム単位の精密動画分析",
      desc: "盲目的な練習から脱却しましょう。滑走動画をアップロードすれば、認定コーチがスロー再生、描画ライン、音声解説で的確に指導します。",
      feature1Title: "正確な描画ライン指導",
      feature1Desc: "重心、エッジ角度、姿勢のズレを視覚的にわかりやすくフィードバック。",
      feature2Title: "コーチの音声解説",
      feature2Desc: "文章だけでなく、その場で直接指導を受けているような詳細な音声解説。",
      cta: "動画分析を試す",
      demoPoints: [
        { comment: "ターン入りの重心が高すぎます。膝をしっかり曲げましょう。", type: "correction" },
        { comment: "ここのエッジ角は素晴らしい！このリズムをキープ。", type: "praise" },
        { comment: "ターン出口が早すぎます。もっとフォールラインを見て。", type: "correction" }
      ]
    },
    carpool: {
      tag: "コア機能 02",
      titlePre: "ゲレンデへの相乗り",
      titleHighlight: "移動費を節約 · 仲間と快適移動",
      desc: "長時間の運転や高額な交通費の悩みを解消。Snow Proで相乗りルートを簡単募集・検索。板や荷物の積載スペースも明確で、安心・快適にスキー場へ向かえます。",
      feature1Title: "柔軟な募集と参加",
      feature1Desc: "ドライバーは空席と出発時間を投稿し、同乗者はルートに合わせてワンタップで参加申請。",
      feature2Title: "ギア積載スペースを明記",
      feature2Desc: "トランク容量、ボードケース、スキー・スノボの積載可能数を事前に確認。",
      feature3Title: "透明な費用分担",
      feature3Desc: "ガソリン代や高速料金を割り勘にして、経済的かつエコに移動。",
      cta: "アプリで相乗りを利用する",
      routes: [
        { from: "東京都内 (新宿)", to: "かぐらスキー場", date: "土曜 06:30", price: "¥3,500 /人", seats: "残り 2 席", boardCapacity: "ボードケース2つ可", driver: "Kenji", car: "4WD SUV · スタッドタイヤ" },
        { from: "大阪市内", to: "白馬八方尾根", date: "金曜 20:00", price: "¥4,000 /人", seats: "残り 1 席", boardCapacity: "スノボ・スキー対応", driver: "Takuya", car: "ミニバン · 余裕の広さ" },
        { from: "札幌市内", to: "ニセコ東急 グラン・ヒラフ", date: "日曜 07:00", price: "¥2,000 /人", seats: "残り 3 席", boardCapacity: "ルーフキャリア搭載", driver: "Hokkaido_Pow", car: "SUV · 4WD" }
      ]
    },
    courses: {
      tag: "コア機能 03",
      title: "認定コーチ監修の体系的ビデオ講座",
      desc: "プロコーチが直接制作・公開する本格レッスン。トークンを使ってアプリ内で手軽に購入し、いつでもどこでも何度でも復習できます。",
      feature1Title: "コーチによる講座公開",
      feature1Desc: "認定インストラクターが体系的な技術講座を公開し、独自のノウハウを伝授。",
      feature2Title: "受講生は手軽に購入・学習",
      feature2Desc: "トークンで購入し、無期限で動画をいつでも見返して練習に活かせます。",
      btnText: "アプリで講座一覧を見る",
      instructorLabel: "インストラクター",
      lessonsLabel: "レッスン",
      list: [
        { title: "スキー上級カービングマスター", instructor: "Marcus Vogt", lessons: 12, level: "上級", style: "カービング", price: "80 トークン" },
        { title: "スノーボード初心者基本ライディング", instructor: "Hannah Adams", lessons: 8, level: "初級", style: "基本滑走", price: "50 トークン" },
        { title: "バックカントリー＆フリーライド安全対策", instructor: "Sven Lindqvist", lessons: 10, level: "エキスパート", style: "フリーライド", price: "100 トークン" }
      ]
    },
    skibuddy: {
      tag: "コア機能 04",
      titlePre: "スキー仲間募集 · SkiBuddy",
      titleHighlight: "滑走仲間を見つけてもっと楽しく",
      desc: "一人で行くのは寂しい？同じレベルの仲間と一緒に滑りたい？ゲレンデ、日時、スキルレベルに合わせて仲間を募集・参加し、滑りや撮影を楽しみましょう。",
      feature1Title: "条件に合った仲間を検索",
      feature1Desc: "スキー場、日程、レベル（初級〜上級）、滑走スタイルで絞り込み。",
      feature2Title: "相互撮影とグループ滑走",
      feature2Desc: "フォーム確認の撮り合いや宿のシェアなど、気の合う仲間とチームを結成。",
      cta: "アプリで仲間を探す",
      posts: [
        { title: "週末のかぐらでカービング撮り合い仲間募集", resort: "新潟 · かぐら", date: "今週土日", level: "中上級", style: "スノーボード", target: "滑走動画の撮り合い", author: "Leo_Carver", members: "3/4 人参加中" },
        { title: "ニセコ パウダー・ツリーラン探検チーム", resort: "北海道 · ニセコ", date: "来月12-16日", level: "上級者", style: "スキー / スノボ", target: "パウダーライディング", author: "Yuki", members: "2/5 人参加中" },
        { title: "初心者向けゲレンデ練習、一緒に楽しみましょう", resort: "長野 · 志賀高原", date: "金曜ナイター", level: "初心者", style: "スノーボード", target: "基本ターン練習", author: "Mika", members: "2/3 人参加中" }
      ]
    },
    roadmap: {
      tag: "将来の計画",
      title: "スキー場公式連携とパートナーシップ",
      desc: "Snow Proはスキー場との直接提携を進め、よりお得なリフト券、レンタル割引、公式スキースクールレッスンの提供を計画しています。",
      status: "提携交渉・準備中",
      features: [
        { title: "提携スキー場のお得なリフト券", desc: "提携ゲレンデと直接連携し、限定割引リフト券や早期割引シーズンパスを特別価格で提供。" },
        { title: "スキー用具レンタル特別割引", desc: "公式提携ショップでのスムーズな貸出と、高品質なスキー・スノボ用品の割引レンタル。" },
        { title: "スキー場公認インストラクター直通予約", desc: "正規スキースクールと連携し、安心・公認のゲレンデ公式レッスンをお得な料金で予約。" },
        { title: "スキーヤーコミュニティ＆ギアショップ", desc: "ゲレンデ情報の交換、滑走記録の共有、厳選ギアの紹介と中古売買エコシステム。" }
      ]
    },
    testimonials: {
      title: "ユーザーの声",
      reviews: [
        { name: "Alex Zhang", role: "中級スキーヤー", content: "自分の滑りのどこが悪いのかわかりませんでしたが、動画分析で重心の問題を的確に指摘され驚きました！" },
        { name: "Sarah Li", role: "スノーボーダー", content: "相乗り機能が本当に便利です。アプリ内で同じゲレンデに向かう仲間と合流できて交通費も大幅に浮きました。" },
        { name: "Coach Mike", role: "CASI Level 3 コーチ", content: "講座の公開と生徒の動画添削が一元管理でき、描画ツールも滑らかで指導効率が格段に上がりました。" }
      ]
    },
    footer: {
      tagline: "すべての滑りを次のレベルへ。コーチ、仲間、サービスをつなぐ究極のパートナー。",
      product: "製品",
      productLinks: ["動画分析", "相乗り", "プロ講座", "仲間募集", "トークンチャージ"],
      support: "サポート",
      supportLinks: ["ヘルプ", "お問い合わせ", "プライバシー", "利用規約"],
      rights: "All rights reserved."
    },
    ctaBottom: {
      title: "レベルアップの準備はできましたか？",
      desc: "Snow Proコミュニティに参加して、動画分析、相乗り、プロ講座、仲間募集を体験してください。今すぐダウンロード！",
      btnIos: "App Store",
      btnAndroid: "Android ダウンロード"
    },
    verifyEmail: {
      verifying: "メールアドレスを確認中...",
      success: "メール認証が完了しました！",
      successTitle: "認証成功！",
      errorTitle: "認証に失敗しました",
      openApp: "Snow Pro アプリを開く",
      invalidLink: "リンクが無効です。",
      errorFallback: "認証に失敗しました。",
      errorOccurred: "エラーが発生しました。",
      errorInstruction: "アプリから再度認証メールを送信してください。",
      resendEmail: "認証メールを再送信",
      emailPlaceholder: "メールアドレスを入力",
      resendSuccess: "認証メールを再送信しました。受信トレイをご確認ください。",
      resending: "送信中...",
      invalidEmail: "有効なメールアドレスを入力してください。"
    },
    resetPassword: {
      title: "パスワード再設定",
      subtitle: "以下に新しいパスワードを入力してください。",
      newPassword: "新しいパスワード",
      confirmPassword: "パスワードの確認",
      passwordsDoNotMatch: "パスワードが一致しません。",
      passwordLength: "パスワードは6文字以上である必要があります。",
      invalidLink: "リンクパラメータが無効です。",
      successTitle: "再設定成功",
      successDesc: "パスワードが正常に再設定されました。",
      openApp: "アプリを開いてログイン",
      resetting: "再設定中...",
      submitBtn: "パスワードを再設定",
      errorFallback: "再設定に失敗しました。",
      errorOccurred: "エラーが発生しました。"
    }
  },
  ko: {
    nav: {
      features: "핵심 기능",
      video: "비디오 분석",
      carpool: "스키장 카풀",
      courses: "전문 강좌",
      skibuddy: "스키 버디",
      roadmap: "로드맵",
      about: "소개",
      download: "다운로드",
      recharge: "토큰 충전",
      appDownload: "앱 다운로드"
    },
    hero: {
      badge: "Snow Pro 1.0 출시 · 4대 핵심 스키 생태계",
      titlePre: "스키 실력 향상과 이동의",
      titleHighlight: "새로운 기준",
      subtitle: "전문 강사와 스키 애호가를 연결합니다. 비디오 분석, 스키장 카풀, 강사 시리즈 강좌, 스키 버디 매칭이 결합된 올인원 스키 플랫폼.",
      ctaIos: "App Store",
      ctaIosNote: "iOS 15+ 지원",
      ctaAndroid: "Android 다운로드",
      pills: {
        video: "비디오 분석",
        carpool: "스키장 카풀",
        courses: "전문 강좌",
        skibuddy: "스키 버디"
      },
      stats: {
        coaches: "인증 코치",
        analysis: "비디오 분석",
        rating: "사용자 평점"
      }
    },
    video: {
      tag: "핵심 기능 01",
      titlePre: "내 주머니 속의 전문 코치",
      titleHighlight: "프레임 단위 정밀 비디오 분석",
      desc: "맹목적인 연습은 그만. 영상을 업로드하고 인증된 코치로부터 슬로우 모션, 드로잉 선, 생생한 음성 피드백을 받아보세요.",
      feature1Title: "정밀 드로잉 교정",
      feature1Desc: "신체 각도, 무게중심, 엣지 위치의 미세한 편차를 시각적으로 명확히 표시.",
      feature2Title: "코치 음성 코멘터리",
      feature2Desc: "텍스트를 넘어 현장에서 직접 강습을 받는 듯한 상세한 음성 해설.",
      cta: "비디오 분석 체험하기",
      demoPoints: [
        { comment: "턴 진입 시 무게중심이 너무 높습니다. 무릎을 더 굽혀주세요.", type: "correction" },
        { comment: "이 구간의 엣지 각도는 아주 훌륭합니다! 이 리듬을 유지하세요.", type: "praise" },
        { comment: "턴 탈출이 너무 빠릅니다. 폴라인을 더 응시하세요.", type: "correction" }
      ]
    },
    carpool: {
      tag: "핵심 기능 02",
      titlePre: "스키장 카풀 이동",
      titleHighlight: "교통비 절약 · 동료와 함께 출발",
      desc: "장거리 운전의 피로와 비싼 교통비 부담을 덜어드립니다. Snow Pro에서 스키장 카풀 일정을 쉽게 등록하거나 찾고, 장비 수납공간을 확인하여 함께 출발하세요.",
      feature1Title: "간편한 일정 등록 및 참여",
      feature1Desc: "운전자는 빈 좌석과 출발 시간을 등록하고, 동승자는 경로에 맞춰 원클릭 신청.",
      feature2Title: "스키/보드 수납공간 명시",
      feature2Desc: "트렁크 용량 및 보드백, 플레이트 수납 가능 여부를 명확히 확인.",
      feature3Title: "투명한 비용 정산",
      feature3Desc: "유류비와 통행료를 공정하게 분담하여 경제적이고 친환경적인 이동.",
      cta: "앱에서 카풀 이용하기",
      routes: [
        { from: "서울 강남", to: "휘닉스파크", date: "토요일 06:00", price: "₩15,000 /인", seats: "2자리 남음", boardCapacity: "보드백 2개 가능", driver: "김스키", car: "SUV · 루프박스" },
        { from: "경기 판교", to: "용평리조트 (모나용평)", date: "금요일 19:30", price: "₩18,000 /인", seats: "1자리 남음", boardCapacity: "160cm 보드백 수납", driver: "CarveKing", car: "카니발 · 넉넉한 공간" },
        { from: "대구 수성구", to: "하이원리조트", date: "일요일 06:30", price: "₩20,000 /인", seats: "3자리 남음", boardCapacity: "스키/보드 모두 가능", driver: "박보더", car: "4륜 SUV · 스노우타이어" }
      ]
    },
    courses: {
      tag: "핵심 기능 03",
      title: "인증 강사의 체계적인 비디오 강좌",
      desc: "전문 강사가 직접 제작하고 등록한 체계적인 영상 강의. 토큰을 이용해 간편하게 구매하고 언제 어디서나 반복 학습할 수 있습니다.",
      feature1Title: "강사의 직접 강좌 개설",
      feature1Desc: "인증 강사가 기초부터 고급 스킬까지 전문 커리큘럼을 직접 등록 및 판매.",
      feature2Title: "수강생의 평생 반복 학습",
      feature2Desc: "토큰으로 손쉽게 강좌를 구독하고, 언제든 디테일한 기술을 복습.",
      btnText: "앱에서 모든 강좌 둘러보기",
      instructorLabel: "강사",
      lessonsLabel: "레슨",
      list: [
        { title: "스키 상급 카빙 마스터클래스", instructor: "Marcus Vogt", lessons: 12, level: "상급", style: "카빙", price: "80 토큰" },
        { title: "스노보드 기초 및 코어 라이딩", instructor: "Hannah Adams", lessons: 8, level: "초급", style: "기초 라이딩", price: "50 토큰" },
        { title: "백컨트리 및 프리라이드 안전 가이드", instructor: "Sven Lindqvist", lessons: 10, level: "전문가", style: "프리라이드", price: "100 토큰" }
      ]
    },
    skibuddy: {
      tag: "핵심 기능 04",
      titlePre: "스키 버디 모집 · SkiBuddy",
      titleHighlight: "마음 맞는 친구와 함께 즐기는 라이딩",
      desc: "혼자 타기 심심하거나 실력이 비슷한 라이딩 파트너를 찾고 계신가요? 스키장, 날짜, 실력에 맞춰 동료를 모집하고 서로 영상을 찍어주며 즐거운 추억을 만들어보세요.",
      feature1Title: "맞춤형 다차원 매칭",
      feature1Desc: "목표 스키장, 일정, 종목(스키/보드) 및 실력(초/중/상급)별 스마트 필터링.",
      feature2Title: "영상 상호 촬영 및 동반 라이딩",
      feature2Desc: "자세 교정을 위한 영상 촬영, 식사 및 숙소 쉐어 등 스키 크루 형성.",
      cta: "앱에서 스키 버디 찾기",
      posts: [
        { title: "휘팍 주말 카빙 상호 촬영 크루 모집", resort: "평창 · 휘닉스파크", date: "이번주 토-일", level: "중상급", style: "스노보드", target: "슬로프 영상 촬영", author: "Leo_Carver", members: "3/4명 참여중" },
        { title: "하이원 파우더 & 슬로프 투어 소분대", resort: "정선 · 하이원", date: "다음달 12-16일", level: "상급/전문가", style: "스키/보드", target: "파우더 라이딩", author: "Yuki", members: "2/5명 참여중" },
        { title: "야간 기초 턴 연습, 서로 응원하며 타요", resort: "비발디파크", date: "금요일 야간", level: "초급자", style: "스노보드", target: "기초 턴 마스터", author: "초보보더", members: "2/3명 참여중" }
      ]
    },
    roadmap: {
      tag: "로드맵",
      title: "스키장 공식 제휴 및 혜택 확장",
      desc: "Snow Pro는 주요 스키장과의 공식 제휴를 통해 더 저렴한 리프트권, 장비 렌탈 할인, 공식 스쿨 강습 혜택을 제공할 예정입니다.",
      status: "제휴 협의 및 기획 중",
      features: [
        { title: "제휴 스키장 특가 리프트권", desc: "스키장 직통 제휴를 통해 주간/야간 리프트권 및 얼리버드 시즌권을 특별 할인가에 제공." },
        { title: "프리미엄 장비 렌탈 할인", desc: "스키장 공식 렌탈샵 및 제휴 매장 할인, 대기 없는 빠른 수령 및 고급 장비 체험." },
        { title: "스키장 공식 강사 직통 예약", desc: "스키장 공식 스키학교와의 제휴를 통해 검증된 정규 레슨을 합리적인 할인 가격으로 연결." },
        { title: "스키어 커뮤니티 & 장비 마켓", desc: "실시간 설질 정보 소통, 라이딩 후기 공유 및 엄선된 스키 장비 중고 거래 생태계." }
      ]
    },
    testimonials: {
      title: "사용자 후기",
      reviews: [
        { name: "Alex Zhang", role: "중급 스키어", content: "혼자 연습할 때는 몰랐던 밸런스 문제를 비디오 분석을 통해 명확히 짚어주어 실력이 급상승했습니다!" },
        { name: "Sarah Li", role: "스노우보더", content: "카풀 기능이 정말 유용합니다. 스키장 갈 때 앱에서 바로 동료를 찾아 비용도 아끼고 친구도 사귀었어요." },
        { name: "Coach Mike", role: "CASI Level 3 강사", content: "강좌를 직접 개설하고 학생들의 피드백 영상을 직관적인 드로잉 툴로 관리할 수 있어 최고입니다." }
      ]
    },
    footer: {
      tagline: "모든 라이딩을 한 단계 더 높게. 강사, 친구, 서비스를 연결하는 최고의 파트너.",
      product: "제품",
      productLinks: ["비디오 분석", "스키장 카풀", "전문 강좌", "스키 버디", "토큰 충전"],
      support: "지원",
      supportLinks: ["도움말", "문의하기", "개인정보처리방침", "이용약관"],
      rights: "All rights reserved."
    },
    ctaBottom: {
      title: "스키 실력을 레벨업할 준비가 되셨나요?",
      desc: "Snow Pro 커뮤니티에 가입하고 전문적인 비디오 분석, 스키장 카풀, 전문 강좌, 스키 버디 매칭을 경험해보세요.",
      btnIos: "App Store",
      btnAndroid: "Android 다운로드"
    },
    verifyEmail: {
      verifying: "이메일 확인 중...",
      success: "이메일 인증이 완료되었습니다!",
      successTitle: "인증 성공!",
      errorTitle: "인증 실패",
      openApp: "Snow Pro 앱 열기",
      invalidLink: "인증 링크가 올바르지 않습니다.",
      errorFallback: "인증에 실패했습니다.",
      errorOccurred: "오류가 발생했습니다.",
      errorInstruction: "앱에서 인증 이메일을 다시 요청해주세요.",
      resendEmail: "인증 이메일 재전송",
      emailPlaceholder: "이메일 주소를 입력하세요",
      resendSuccess: "인증 이메일이 재전송되었습니다. 수신함을 확인해주세요.",
      resending: "재전송 중...",
      invalidEmail: "올바른 이메일 주소를 입력하세요."
    },
    resetPassword: {
      title: "비밀번호 재설정",
      subtitle: "아래에 새 비밀번호를 입력하십시오.",
      newPassword: "새 비밀번호",
      confirmPassword: "비밀번호 확인",
      passwordsDoNotMatch: "비밀번호가 일치하지 않습니다.",
      passwordLength: "비밀번호는 최소 6자 이상이어야 합니다.",
      invalidLink: "유효하지 않은 링크 매개변수입니다.",
      successTitle: "재설정 성공",
      successDesc: "비밀번호가 성공적으로 재설정되었습니다.",
      openApp: "로그인하려면 앱 열기",
      resetting: "재설정 중...",
      submitBtn: "비밀번호 재설정",
      errorFallback: "재설정에 실패했습니다.",
      errorOccurred: "오류가 발생했습니다."
    }
  },
  fr: {
    nav: {
      features: "Fonctionnalités",
      video: "Analyse Vidéo",
      carpool: "Covoiturage",
      courses: "Cours Vidéo",
      skibuddy: "Ski Buddy",
      roadmap: "Feuille de route",
      about: "À propos",
      download: "Télécharger",
      recharge: "Jetons",
      appDownload: "Obtenir l'app"
    },
    hero: {
      badge: "Snow Pro 1.0 est en ligne · 4 Piliers Essentiels",
      titlePre: "Redéfinissez votre",
      titleHighlight: "Progression & Trajets de Ski",
      subtitle: "Connectez-vous avec des moniteurs certifiés et des passionnés. Analyse vidéo détaillée, covoiturage vers les stations, cours en ligne et recherche de partenaires de ski.",
      ctaIos: "App Store",
      ctaIosNote: "iOS 15+ requis",
      ctaAndroid: "Télécharger pour Android",
      pills: {
        video: "Analyse Vidéo",
        carpool: "Covoiturage",
        courses: "Cours Vidéo",
        skibuddy: "Ski Buddy"
      },
      stats: {
        coaches: "Coachs Certifiés",
        analysis: "Analyses Vidéo",
        rating: "Note Utilisateurs"
      }
    },
    video: {
      tag: "Fonctionnalité Clé 01",
      titlePre: "Un Moniteur dans votre Poche",
      titleHighlight: "Analyse Image par Image & Vocal",
      desc: "Ne pratiquez plus à l'aveugle. Téléchargez vos vidéos de glisse et recevez des corrections visuelles dessinées et des commentaires vocaux précis par des coachs certifiés.",
      feature1Title: "Tracés & Corrections Visuelles",
      feature1Desc: "Mise en évidence claire des angles du corps, des prises de carres et des centres de gravité.",
      feature2Title: "Commentaires Vocaux Détaillés",
      feature2Desc: "Écoutez les conseils précis de votre moniteur comme s'il était à vos côtés sur la piste.",
      cta: "Essayer l'analyse vidéo",
      demoPoints: [
        { comment: "Centre de gravité trop haut en entrée de virage, fléchissez les genoux.", type: "correction" },
        { comment: "Excellent angle de prise de carre ici, gardez ce rythme !", type: "praise" },
        { comment: "Sortie de virage trop précoce, regardez bien vers la ligne de pente.", type: "correction" }
      ]
    },
    carpool: {
      tag: "Fonctionnalité Clé 02",
      titlePre: "Covoiturage vers les Stations",
      titleHighlight: "Économisez & Voyagez Ensemble",
      desc: "Finies la fatigue et les dépenses excessives du trajet en solo. Publiez ou trouvez facilement un covoiturage, précisez la place pour le matériel et partagez les frais d'essence et de péage.",
      feature1Title: "Publication & Réservation Faciles",
      feature1Desc: "Les conducteurs indiquent les places libres et l'heure ; les passagers réservent en un clic.",
      feature2Title: "Détail de l'Espace Matériel",
      feature2Desc: "Capacité claire pour les housses de ski, snowboards et bagages encombrants.",
      feature3Title: "Partage Équitable des Frais",
      feature3Desc: "Partage transparent des frais de carburant et péages pour un voyage écologique et économique.",
      cta: "Découvrir le covoiturage",
      routes: [
        { from: "Grenoble Gare", to: "L'Alpe d'Huez", date: "Samedi 07:00", price: "8 € /pers", seats: "2 places rest.", boardCapacity: "2 housses de ski max", driver: "Julien", car: "SUV avec coffre de toit" },
        { from: "Lyon Part-Dieu", to: "Val Thorens", date: "Vendredi 18:30", price: "15 € /pers", seats: "1 place rest.", boardCapacity: "Housses jusqu'à 165cm", driver: "Claire", car: "Monospace spacieux" },
        { from: "Genève Aéroport", to: "Chamonix Mont-Blanc", date: "Dimanche 07:30", price: "12 € /pers", seats: "3 places rest.", boardCapacity: "Skis & Snowboards", driver: "Marc", car: "Break 4x4 · Pneus neige" }
      ]
    },
    courses: {
      tag: "Fonctionnalité Clé 03",
      title: "Cours Structurés par des Moniteurs Certifiés",
      desc: "Des séries de formations enregistrées et publiées par des moniteurs professionnels. Débloquez les cours avec vos jetons et révisez vos techniques où et quand vous voulez.",
      feature1Title: "Publication par les Moniteurs",
      feature1Desc: "Les instructeurs publient leurs séries vidéo et fixent leurs tarifs en toute autonomie.",
      feature2Title: "Accès Instantané pour les Élèves",
      feature2Desc: "Achetez avec des jetons et profitez d'un accès illimité pour réviser chaque détail technique.",
      btnText: "Explorer tous les cours sur l'App",
      instructorLabel: "Moniteur",
      lessonsLabel: "Leçons",
      list: [
        { title: "Masterclass de Ski de Carving", instructor: "Marcus Vogt", lessons: 12, level: "Avancé", style: "Carving", price: "80 Jetons" },
        { title: "Bases du Snowboard et Glisse", instructor: "Hannah Adams", lessons: 8, level: "Débutant", style: "Glisse de Base", price: "50 Jetons" },
        { title: "Hors-piste et Sécurité en Montagne", instructor: "Sven Lindqvist", lessons: 10, level: "Expert", style: "Freeride", price: "100 Jetons" }
      ]
    },
    skibuddy: {
      tag: "Fonctionnalité Clé 04",
      titlePre: "Trouvez votre Équipe · SkiBuddy",
      titleHighlight: "Ne skiez plus jamais seul",
      desc: "Envie de rider avec des personnes de votre niveau ? Publiez une annonce ou rejoignez un groupe selon votre station, date et style pour partager la glisse et vous filmer mutuellement.",
      feature1Title: "Recherche par Filtres Précis",
      feature1Desc: "Filtrez par station de ski, date, discipline (ski/snow) et niveau de pratique.",
      feature2Title: "Filmez-vous & Partagez",
      feature2Desc: "Capturez vos descentes pour progresser, partagez vos repas ou votre hébergement en station.",
      cta: "Trouver des partenaires de ski",
      posts: [
        { title: "Session Carving & vidéo mutuelle à Val Thorens", resort: "3 Vallées · Val Thorens", date: "Ce Sam - Dim", level: "Intermédiaire+", style: "Snowboard", target: "Carving & vidéo", author: "Leo_Carver", members: "3/4 Inscrits" },
        { title: "Équipe Hors-piste & Poudreuse à Niseko", resort: "Hokkaido · Niseko", date: "Mois prochain 12-16", level: "Expert", style: "Ski & Snow", target: "Hors-piste sécurisé", author: "Yuki", members: "2/5 Inscrits" },
        { title: "Session nocturne débutant, entraide & bonne humeur", resort: "Les 2 Alpes", date: "Vendredi soir", level: "Débutant", style: "Snowboard", target: "Perfectionnement virages", author: "Sophie", members: "2/3 Inscrits" }
      ]
    },
    roadmap: {
      tag: "Feuille de Route",
      title: "Partenariats Stations & Avantages Exclusifs",
      desc: "Snow Pro collabore directement avec les stations partenaires pour vous faire bénéficier de forfaits avantageux, de réductions sur les locations de matériel et de cours officiels à tarifs préférentiels.",
      status: "Négociations et partenariats en cours",
      features: [
        { title: "Forfaits de Ski à Tarif Réduit", desc: "Partenariats directs avec les stations pour des forfaits journée/nocturne et pass saison à prix réduits exclusifs." },
        { title: "Remises sur la Location de Matériel", desc: "Accords avec les magasins officiels en station pour des retraits prioritaires et des remises sur le matériel haut de gamme." },
        { title: "Cours Officiels avec Moniteurs de Station", desc: "Accès direct et à tarif préférentiel aux cours officiels des écoles de ski partenaires agréées." },
        { title: "Communauté Skieurs & Boutique Matériel", desc: "Retours d'expérience en station, conditions météo en direct et sélection d'équipements neufs et d'occasion certifiés." }
      ]
    },
    testimonials: {
      title: "Approuvé par les Skieurs",
      reviews: [
        { name: "Alex Zhang", role: "Skieur Intermédiaire", content: "L'analyse vidéo a mis le doigt sur mes problèmes d'équilibre instantanément. Une vraie révélation !" },
        { name: "Sarah Li", role: "Snowboardeuse", content: "La fonction covoiturage est géniale ! J'ai trouvé des covoitureurs pour monter en station en 5 minutes." },
        { name: "Coach Mike", role: "Instructeur CASI Niveau 3", content: "Snow Pro me permet de publier mes cours et de corriger les vidéos de mes élèves avec des outils remarquables." }
      ]
    },
    footer: {
      tagline: "Passez au niveau supérieur. Votre partenaire ultime pour le ski.",
      product: "Produit",
      productLinks: ["Analyse Vidéo", "Covoiturage", "Cours Vidéo", "Ski Buddy", "Recharge de Jetons"],
      support: "Support",
      supportLinks: ["Aide", "Contact", "Confidentialité", "Conditions"],
      rights: "Tous droits réservés."
    },
    ctaBottom: {
      title: "Prêt à progresser et à rider ensemble ?",
      desc: "Rejoignez la communauté Snow Pro. Découvrez l'analyse vidéo, le covoiturage, les cours de moniteurs et les partenaires de ski. Téléchargez l'application dès maintenant.",
      btnIos: "App Store",
      btnAndroid: "Télécharger pour Android"
    },
    verifyEmail: {
      verifying: "Vérification de votre e-mail...",
      success: "E-mail vérifié avec succès !",
      successTitle: "Succès !",
      errorTitle: "Échec de la vérification",
      openApp: "Ouvrir l'application Snow Pro",
      invalidLink: "Lien de vérification invalide.",
      errorFallback: "Échec de la vérification.",
      errorOccurred: "Une erreur est survenue lors de la vérification.",
      errorInstruction: "Veuillez demander un nouvel e-mail de vérification depuis l'application.",
      resendEmail: "Renvoyer l'e-mail de vérification",
      emailPlaceholder: "Entrez votre adresse e-mail",
      resendSuccess: "E-mail de vérification renvoyé ! Veuillez vérifier votre boîte de réception.",
      resending: "Envoi en cours...",
      invalidEmail: "Veuillez entrer une adresse e-mail valide."
    },
    resetPassword: {
      title: "Réinitialiser le mot de passe",
      subtitle: "Saisissez votre nouveau mot de passe ci-dessous.",
      newPassword: "Nouveau mot de passe",
      confirmPassword: "Confirmer le mot de passe",
      passwordsDoNotMatch: "Les mots de passe ne correspondent pas.",
      passwordLength: "Le mot de passe doit comporter au moins 6 caractères.",
      invalidLink: "Paramètres de lien invalides.",
      successTitle: "Réinitialisation réussie",
      successDesc: "Votre mot de passe a été réinitialisé avec succès.",
      openApp: "Ouvrir l'application pour se connecter",
      resetting: "Réinitialisation...",
      submitBtn: "Réinitialiser le mot de passe",
      errorFallback: "Échec de la réinitialisation.",
      errorOccurred: "Une erreur est survenue."
    }
  },
  de: {
    nav: {
      features: "Funktionen",
      video: "Videoanalyse",
      carpool: "Fahrgemeinschaft",
      courses: "Skikurse",
      skibuddy: "Ski-Buddy",
      roadmap: "Roadmap",
      about: "Über uns",
      download: "Download",
      recharge: "Token aufladen",
      appDownload: "App holen"
    },
    hero: {
      badge: "Snow Pro 1.0 ist live · 4 Kern-Ökosysteme",
      titlePre: "Definieren Sie Ihren",
      titleHighlight: "Skifortschritt & Fahrten neu",
      subtitle: "Verbinden Sie sich mit zertifizierten Skilehrern und Wintersportbegeisterten. Videoanalyse, Skigebiets-Fahrgemeinschaften, Online-Kurse und Ski-Buddy-Suche in einer Plattform.",
      ctaIos: "App Store",
      ctaIosNote: "Benötigt iOS 15+",
      ctaAndroid: "Android Download",
      pills: {
        video: "Videoanalyse",
        carpool: "Fahrgemeinschaft",
        courses: "Skikurse",
        skibuddy: "Ski-Buddy"
      },
      stats: {
        coaches: "Zertifizierte Trainer",
        analysis: "Videoanalysen",
        rating: "Bewertung"
      }
    },
    video: {
      tag: "Kernfunktion 01",
      titlePre: "Ein Skilehrer in Ihrer Tasche",
      titleHighlight: "Bild-für-Bild- & Sprachanalyse",
      desc: "Üben Sie nicht mehr planlos. Laden Sie Ihre Skivideos hoch und erhalten Sie detaillierte visuelle Zeichnungen und Sprachkommentare von lizenzierten Trainern.",
      feature1Title: "Präzise Zeichen-Korrekturen",
      feature1Desc: "Visuelle Markierungen von Körperwinkeln, Kantenhaltung und Körperschwerpunkt.",
      feature2Title: "Detaillierte Sprachanalyse",
      feature2Desc: "Hören Sie sich die genauen Erklärungen des Trainers an, als stünde er neben Ihnen auf der Piste.",
      cta: "Videoanalyse testen",
      demoPoints: [
        { comment: "Schwerpunkt beim Kurveneingang zu weit hinten, Knie beugen.", type: "correction" },
        { comment: "Ausgezeichneter Aufkantwinkel an dieser Stelle, Rhythmus beibehalten!", type: "praise" },
        { comment: "Zu frühes Aussteuern, mehr zur Falllinie ausrichten.", type: "correction" }
      ]
    },
    carpool: {
      tag: "Kernfunktion 02",
      titlePre: "Fahrgemeinschaften zum Skigebiet",
      titleHighlight: "Kosten sparen · Gemeinsam starten",
      desc: "Keine anstrengenden Einzelfahrten und teuren Reisekosten mehr. Bieten oder finden Sie Fahrten zu Skigebieten auf Snow Pro, prüfen Sie den Skiraum und teilen Sie Sprit- und Mautkosten.",
      feature1Title: "Einfach anbieten & mitfahren",
      feature1Desc: "Fahrer stellen freie Plätze und Abfahrtszeiten ein, Mitfahrer buchen mit einem Klick.",
      feature2Title: "Ausrüstungsplatz genau angegeben",
      feature2Desc: "Klare Angaben zu Kofferraum, Skitaschen und Snowboard-Kapazitäten.",
      feature3Title: "Faire Kostenteilung",
      feature3Desc: "Transparente Aufteilung von Benzin- und Mautkosten – umweltfreundlich und günstig.",
      cta: "Fahrgemeinschaften in der App",
      routes: [
        { from: "München Hbf", to: "Garmisch Classic", date: "Samstag 06:45", price: "10 € /Pers.", seats: "2 Plätze frei", boardCapacity: "2 Skitaschen max.", driver: "Stefan", car: "Kombi mit Dachbox" },
        { from: "Innsbruck", to: "St. Anton am Arlberg", date: "Freitag 18:00", price: "12 € /Pers.", seats: "1 Platz frei", boardCapacity: "Bis 165cm Boardtasche", driver: "Laura", car: "Geräumiger Van" },
        { from: "Zürich HB", to: "Laax / Flims", date: "Sonntag 07:00", price: "18 CHF /Pers.", seats: "3 Plätze frei", boardCapacity: "Ski & Snowboards", driver: "Beat", car: "Allrad SUV · Winterreifen" }
      ]
    },
    courses: {
      tag: "Kernfunktion 03",
      title: "Strukturierte Videokurse von Top-Skilehrern",
      desc: "Umfassende Lehrserien, erstellt und veröffentlicht von zertifizierten Trainern. Mit Tokens unkompliziert freischalten und jederzeit und überall lernen.",
      feature1Title: "Kurserstellung durch Trainer",
      feature1Desc: "Zertifizierte Skilehrer veröffentlichen Technikserien und bestimmen ihre Preise selbst.",
      feature2Title: "Flexibles Lernen für Schüler",
      feature2Desc: "Einfacher Token-Kauf und unbegrenzter Zugriff zum Wiederholen und Üben.",
      btnText: "Alle Kurse in der App ansehen",
      instructorLabel: "Skilehrer",
      lessonsLabel: "Lektionen",
      list: [
        { title: "Ski-Carving-Meisterklasse", instructor: "Marcus Vogt", lessons: 12, level: "Fortgeschritten", style: "Carving", price: "80 Token" },
        { title: "Snowboard-Grundlagen & Core-Riding", instructor: "Hannah Adams", lessons: 8, level: "Anfänger", style: "Grundlegendes Fahren", price: "50 Token" },
        { title: "Backcountry & Freeride Sicherheit", instructor: "Sven Lindqvist", lessons: 10, level: "Experte", style: "Freeride", price: "100 Token" }
      ]
    },
    skibuddy: {
      tag: "Kernfunktion 04",
      titlePre: "Ski-Buddy finden",
      titleHighlight: "Nie wieder alleine auf der Piste",
      desc: "Suchen Sie Partner auf ähnlichem Niveau zum gemeinsamen Fahren? Erstellen Sie Gesuche oder treten Sie Gruppen bei – nach Skigebiet, Datum und Fahrstil gefiltert.",
      feature1Title: "Passgenaue Filtersuche",
      feature1Desc: "Filtern nach Skigebiet, Datum, Ski/Snowboard und Könnerstufe (Anfänger bis Experte).",
      feature2Title: "Gemeinsam Fahren & Filmen",
      feature2Desc: "Gegenseitiges Filmen zur Videoanalyse, Hütteneinkehr und neue Freundschaften.",
      cta: "Ski-Buddies in der App finden",
      posts: [
        { title: "Wochenend-Carving & Video-Filmen in Garmisch", resort: "Garmisch-Partenkirchen", date: "Diesen Sa - So", level: "Mittel/Fortgeschritten", style: "Snowboard", target: "Carving & gegenseitig filmen", author: "Leo_Carver", members: "3/4 Plätze" },
        { title: "Arlberg Freeride & Tiefschnee-Team", resort: "St. Anton am Arlberg", date: "Nächster Monat 12-16", level: "Experte", style: "Ski & Snowboard", target: "Powder & Freeride", author: "Yuki", members: "2/5 Plätze" },
        { title: "Flachau Nachtskifahren für Einsteiger", resort: "Snow Space Salzburg", date: "Freitag Nacht", level: "Anfänger", style: "Snowboard", target: "Kurventechnik üben", author: "Lisa", members: "2/3 Plätze" }
      ]
    },
    roadmap: {
      tag: "Zukunftspläne",
      title: "Skigebiets-Partnerschaften & Exklusive Rabatte",
      desc: "Snow Pro verhandelt direkte Kooperationen mit Skigebieten für rabattierte Skipässe, vergünstigten Ausrüstungsverleih und offizielle Skischulkurse zu Sonderkonditionen.",
      status: "In Kooperationsverhandlung",
      features: [
        { title: "Vergünstigte Partner-Skipässe", desc: "Exklusive Rabatte auf Tages-/Nachtkarten und Frühbucher-Saisonpässe in kooperierenden Skigebieten." },
        { title: "Rabatte auf Skiverleih", desc: "Vergünstigter Verleih von Premium-Skiern und Snowboards bei offiziellen Partner-Verleihstationen ohne Anstehen." },
        { title: "Direktbuchung Offizieller Skilehrer", desc: "Kooperationen mit offiziellen Skischulen für geprüfte, offizielle Skikurse zu exklusiven Vortespreisen." },
        { title: "Community-Forum & Ausrüstungsmarkt", desc: "Live-Schneeberichte, Erfahrungsberichte und eine geprüfte Plattform für Ausrüstung und Gebrauchtwaren." }
      ]
    },
    testimonials: {
      title: "Von Skifahrern geliebt",
      reviews: [
        { name: "Alex Zhang", role: "Fortgeschrittener", content: "Die Videoanalyse hat meine Gleichgewichtsprobleme sofort aufgezeigt – ein riesiger Schritt nach vorn!" },
        { name: "Sarah Li", role: "Snowboarder", content: "Die Fahrgemeinschaftsfunktion ist genial! Ich habe in wenigen Minuten nette Leute für die Fahrt in die Berge gefunden." },
        { name: "Coach Mike", role: "CASI Level 3 Trainer", content: "Mit Snow Pro kann ich Kurse veröffentlichen und Schülervideos mit praktischen Zeichentools direkt korrigieren." }
      ]
    },
    footer: {
      tagline: "Bringen Sie Ihr Skifahren auf das nächste Level. Ihr ultimativer Partner für den Wintersport.",
      product: "Produkt",
      productLinks: ["Videoanalyse", "Fahrgemeinschaft", "Skikurse", "Ski-Buddy", "Token aufladen"],
      support: "Support",
      supportLinks: ["Hilfe", "Kontakt", "Datenschutz", "AGB"],
      rights: "Alle Rechte vorbehalten."
    },
    ctaBottom: {
      title: "Bereit für den nächsten Schritt auf der Piste?",
      desc: "Treten Sie der Snow Pro-Community bei und nutzen Sie Videoanalyse, Fahrgemeinschaften, Profi-Kurse und Ski-Buddies. Jetzt herunterladen!",
      btnIos: "App Store",
      btnAndroid: "Android Download"
    },
    verifyEmail: {
      verifying: "E-Mail wird bestätigt...",
      success: "E-Mail erfolgreich bestätigt!",
      successTitle: "Erfolg!",
      errorTitle: "Bestätigung fehlgeschlagen",
      openApp: "Snow Pro App öffnen",
      invalidLink: "Ungültiger Bestätigungslink.",
      errorFallback: "Bestätigung fehlgeschlagen.",
      errorOccurred: "Bei der Bestätigung ist ein Fehler aufgetreten.",
      errorInstruction: "Bitte fordern Sie in der App eine neue Bestätigungs-E-Mail an.",
      resendEmail: "Bestätigungs-E-Mail erneut senden",
      emailPlaceholder: "E-Mail-Adresse eingeben",
      resendSuccess: "Bestätigungs-E-Mail erneut gesendet! Bitte prüfen Sie Ihren Posteingang.",
      resending: "Wird gesendet...",
      invalidEmail: "Bitte geben Sie eine gültige E-Mail-Adresse ein."
    },
    resetPassword: {
      title: "Passwort zurücksetzen",
      subtitle: "Geben Sie unten Ihr neues Passwort ein.",
      newPassword: "Neues Passwort",
      confirmPassword: "Passwort bestätigen",
      passwordsDoNotMatch: "Passwörter stimmen nicht überein.",
      passwordLength: "Das Passwort muss mindestens 6 Zeichen lang sein.",
      invalidLink: "Ungültige Link-Parameter.",
      successTitle: "Erfolgreich zurückgesetzt",
      successDesc: "Ihr Passwort wurde erfolgreich zurückgesetzt.",
      openApp: "App zum Anmelden öffnen",
      resetting: "Zurücksetzen...",
      submitBtn: "Passwort zurücksetzen",
      errorFallback: "Zurücksetzen fehlgeschlagen.",
      errorOccurred: "Ein Fehler ist aufgetreten."
    }
  },
  es: {
    nav: {
      features: "Funcionalidades",
      video: "Análisis de Video",
      carpool: "Viajes Compartidos",
      courses: "Cursos Pro",
      skibuddy: "Compañeros de Esquí",
      roadmap: "Hoja de Ruta",
      about: "Nosotros",
      download: "Descargar",
      recharge: "Recargar Tokens",
      appDownload: "Obtener App"
    },
    hero: {
      badge: "Snow Pro 1.0 Ya Disponible · 4 Ecosistemas de Esquí",
      titlePre: "Redefine Tu",
      titleHighlight: "Progresión y Viajes en la Nieve",
      subtitle: "Conéctate con instructores certificados y apasionados del esquí. Análisis de video, viajes compartidos a la estación, cursos en línea y búsqueda de compañeros de esquí.",
      ctaIos: "App Store",
      ctaIosNote: "Requiere iOS 15+",
      ctaAndroid: "Descargar para Android",
      pills: {
        video: "Análisis de Video",
        carpool: "Viajes Compartidos",
        courses: "Cursos Pro",
        skibuddy: "Compañeros de Esquí"
      },
      stats: {
        coaches: "Entrenadores Certificados",
        analysis: "Análisis de Video",
        rating: "Valoración de Usuarios"
      }
    },
    video: {
      tag: "Función Clave 01",
      titlePre: "Un Entrenador en tu Bolsillo",
      titleHighlight: "Análisis Cuadro por Cuadro y Audio",
      desc: "No entrenes a ciegas. Sube tus videos de esquí y recibe correcciones visuales dibujadas y explicaciones de voz detalladas por instructores certificados.",
      feature1Title: "Correcciones Visuales Precisas",
      feature1Desc: "Señalamiento intuitivo de ángulos corporales, posición del canto y centro de gravedad.",
      feature2Title: "Comentarios de Voz Detallados",
      feature2Desc: "Escucha las explicaciones de tu entrenador como si estuviera a tu lado en la pista.",
      cta: "Probar Análisis de Video",
      demoPoints: [
        { comment: "Centro de gravedad demasiado alto al entrar en la curva, flexiona las rodillas.", type: "correction" },
        { comment: "¡Excelente ángulo de canto en este tramo, mantén ese ritmo!", type: "praise" },
        { comment: "Salida de curva muy temprana, mantén la vista hacia la línea de máxima pendiente.", type: "correction" }
      ]
    },
    carpool: {
      tag: "Función Clave 02",
      titlePre: "Viajes Compartidos a la Estación",
      titleHighlight: "Ahorra Gastos · Viaja Acompañado",
      desc: "Olvídate de conducir solo y de los altos costos de transporte. Publica o encuentra viajes a las estaciones de esquí en Snow Pro, revisa el espacio para tus tablas y comparte gastos de gasolina y peajes.",
      feature1Title: "Publica y Únete Fácilmente",
      feature1Desc: "Los conductores publican asientos libres y horarios; los pasajeros solicitan unirse en un toque.",
      feature2Title: "Espacio de Equipo Detallado",
      feature2Desc: "Capacidad clara para maletero, fundas de esquí y tablas de snowboard.",
      feature3Title: "División Justa de Gastos",
      feature3Desc: "Comparte combustible y peajes de forma transparente: económico y ecológico.",
      cta: "Ver Viajes Compartidos en la App",
      routes: [
        { from: "Madrid (Moncloa)", to: "Sierra Nevada", date: "Sábado 06:30", price: "12 € /pers", seats: "2 plazas libres", boardCapacity: "Máx. 2 fundas de esquí", driver: "Carlos", car: "SUV con cofre de techo" },
        { from: "Barcelona (Sants)", to: "Baqueira Beret", date: "Viernes 18:30", price: "18 € /pers", seats: "1 plaza libre", boardCapacity: "Fundas hasta 165cm", driver: "Elena", car: "Monovolumen espacioso" },
        { from: "Santiago (Las Condes)", to: "Valle Nevado", date: "Domingo 07:00", price: "$10.000 /pers", seats: "3 plazas libres", boardCapacity: "Esquís y snowboards", driver: "Mateo", car: "4x4 · Cadenas de nieve" }
      ]
    },
    courses: {
      tag: "Función Clave 03",
      title: "Cursos Estructurados en Video por Entrenadores Certificados",
      desc: "Cursos completos creados y publicados directamente por instructores certificados. Los alumnos pueden comprarlos con tokens y repasar lecciones en cualquier momento y lugar.",
      feature1Title: "Publicación por Entrenadores",
      feature1Desc: "Los instructores certificados crean series de técnica, fijan sus precios y enseñan sus mejores métodos.",
      feature2Title: "Aprendizaje Flexible para Alumnos",
      feature2Desc: "Desbloquea con tokens y disfruta de acceso ilimitado para repasar cada detalle técnico.",
      btnText: "Explorar Todos los Cursos en la App",
      instructorLabel: "Instructor",
      lessonsLabel: "Lecciones",
      list: [
        { title: "Masterclass de Carving Avanzado", instructor: "Marcus Vogt", lessons: 12, level: "Avanzado", style: "Carving", price: "80 Tokens" },
        { title: "Fundamentos y Técnica en Snowboard", instructor: "Hannah Adams", lessons: 8, level: "Principiante", style: "Snowboard", price: "50 Tokens" },
        { title: "Seguridad en Fuera de Pista y Freeride", instructor: "Sven Lindqvist", lessons: 10, level: "Experto", style: "Freeride", price: "100 Tokens" }
      ]
    },
    skibuddy: {
      tag: "Función Clave 04",
      titlePre: "Encuentra Compañeros con SkiBuddy",
      titleHighlight: "No Vuelvas a Esquiar Solo",
      desc: "¿Buscas compañeros de tu mismo nivel para esquiar? Publica un anuncio o únete a un grupo por estación, fecha y estilo para compartir pistas y grabarse videos mutuamente.",
      feature1Title: "Filtros de Búsqueda Precisos",
      feature1Desc: "Filtra por estación, fechas, modalidad (esquí/snowboard) y nivel (principiante a experto).",
      feature2Title: "Grábense y Compartan la Experiencia",
      feature2Desc: "Grábense mutuamente para analizar técnica, compartan comidas o alojamiento en la montaña.",
      cta: "Buscar Compañeros en la App",
      posts: [
        { title: "Carving de fin de semana y grabación mutua en Baqueira", resort: "Pirineos · Baqueira", date: "Este Sáb - Dom", level: "Intermedio+", style: "Snowboard", target: "Carving y grabación", author: "Leo_Carver", members: "3/4 Unid@s" },
        { title: "Equipo de Fuera de Pista y Powder en Niseko", resort: "Hokkaido · Niseko", date: "Próx. mes 12-16", level: "Experto", style: "Esquí / Snow", target: "Powder y rutas boscosas", author: "Yuki", members: "2/5 Unid@s" },
        { title: "Práctica nocturna para principiantes con buen rollo", resort: "Sierra Nevada", date: "Viernes noche", level: "Principiante", style: "Snowboard", target: "Giros básicos y técnica", author: "Lucia", members: "2/3 Unid@s" }
      ]
    },
    roadmap: {
      tag: "Hoja de Ruta",
      title: "Alianzas con Estaciones y Descuentos Exclusivos",
      desc: "Snow Pro colabora directamente con estaciones de esquí asociadas para conseguir forfaits con descuento, tarifas reducidas en alquiler de material y clases oficiales a precios preferenciales.",
      status: "En Negociación y Planificación",
      features: [
        { title: "Forfaits con Descuento", desc: "Alianzas directas con estaciones para forfaits de día/noche y pases de temporada con descuento exclusivo." },
        { title: "Descuentos en Alquiler de Equipo", desc: "Convenios con tiendas oficiales para recogida rápida sin filas y precios especiales en esquís y tablas de gama alta." },
        { title: "Reserva Directa de Instructores Oficiales", desc: "Colaboración directa con escuelas oficiales de esquí para clases regladas y certificadas a precios preferenciales." },
        { title: "Comunidad y Tienda de Equipo", desc: "Reportes en vivo de nieve, foro de esquiadores y mercado verificado de material nuevo y de segunda mano." }
      ]
    },
    testimonials: {
      title: "Recomendado por Esquiadores",
      reviews: [
        { name: "Alex Zhang", role: "Esquiador Intermedio", content: "¡El análisis de video detectó mis problemas de equilibrio al instante! Un antes y un después en mi técnica." },
        { name: "Sarah Li", role: "Snowboarder", content: "La función de viajes compartidos es genial. Encontré compañeros para subir a la estación en 5 minutos y ahorré mucho dinero." },
        { name: "Coach Mike", role: "Instructor CASI Nivel 3", content: "Snow Pro me permite publicar mis cursos y corregir videos de mis alumnos con herramientas de dibujo muy precisas." }
      ]
    },
    footer: {
      tagline: "Lleva tu esquí al siguiente nivel. Tu compañero definitivo en la montaña.",
      product: "Producto",
      productLinks: ["Análisis de Video", "Viajes Compartidos", "Cursos Pro", "Compañeros de Esquí", "Recargar Tokens"],
      support: "Soporte",
      supportLinks: ["Centro de Ayuda", "Contacto", "Privacidad", "Términos"],
      rights: "Todos los derechos reservados."
    },
    ctaBottom: {
      title: "¿Listo para Mejorar tu Nivel en la Pista?",
      desc: "Únete a la comunidad Snow Pro. Experimenta el análisis de video, viajes compartidos, cursos de instructores y búsqueda de compañeros de esquí. ¡Descarga ya!",
      btnIos: "App Store",
      btnAndroid: "Descargar para Android"
    },
    verifyEmail: {
      verifying: "Verificando tu correo electrónico...",
      success: "¡Correo verificado con éxito!",
      successTitle: "¡Éxito!",
      errorTitle: "Error de verificación",
      openApp: "Abrir App Snow Pro",
      invalidLink: "Enlace de verificación no válido.",
      errorFallback: "Error en la verificación.",
      errorOccurred: "Ocurrió un error durante la verificación.",
      errorInstruction: "Por favor, solicita un nuevo correo de verificación desde la app.",
      resendEmail: "Reenviar correo de verificación",
      emailPlaceholder: "Introduce tu correo electrónico",
      resendSuccess: "¡Correo de verificación reenviado! Revisa tu bandeja de entrada.",
      resending: "Reenviando...",
      invalidEmail: "Introduce un correo electrónico válido."
    },
    resetPassword: {
      title: "Restablecer Contraseña",
      subtitle: "Introduce tu nueva contraseña a continuación.",
      newPassword: "Nueva Contraseña",
      confirmPassword: "Confirmar Contraseña",
      passwordsDoNotMatch: "Las contraseñas no coinciden.",
      passwordLength: "La contraseña debe tener al menos 6 caracteres.",
      invalidLink: "Parámetros de enlace no válidos.",
      successTitle: "Restablecimiento Exitoso",
      successDesc: "Tu contraseña ha sido restablecida correctamente.",
      openApp: "Abrir App para Iniciar Sesión",
      resetting: "Restableciendo...",
      submitBtn: "Restablecer Contraseña",
      errorFallback: "Error al restablecer.",
      errorOccurred: "Ocurrió un error."
    }
  },
  ru: {
    nav: {
      features: "Возможности",
      video: "Видеоанализ",
      carpool: "Поездки (Карпул)",
      courses: "Видеокурсы",
      skibuddy: "Поиск попутчиков",
      roadmap: "Планы",
      about: "О нас",
      download: "Скачать",
      recharge: "Пополнить токены",
      appDownload: "Скачать приложение"
    },
    hero: {
      badge: "Snow Pro 1.0 Запущен · 4 Ключевых Направления",
      titlePre: "Новый уровень вашего",
      titleHighlight: "Мастерства и Поездок в Горы",
      subtitle: "Платформа, объединяющая сертифицированных инструкторов и лыжников. Видеоанализ техники, совместные поездки на курорты, обучающие видеокурсы и поиск компании для катания.",
      ctaIos: "App Store",
      ctaIosNote: "Требуется iOS 15+",
      ctaAndroid: "Скачать для Android",
      pills: {
        video: "Видеоанализ",
        carpool: "Поездки (Карпул)",
        courses: "Видеокурсы",
        skibuddy: "Поиск попутчиков"
      },
      stats: {
        coaches: "Сертифицированные тренеры",
        analysis: "Видеоразборов",
        rating: "Рейтинг пользователей"
      }
    },
    video: {
      tag: "Ключевая функция 01",
      titlePre: "Личный инструктор в кармане",
      titleHighlight: "Покадровый разбор и аудиосоветы",
      desc: "Хватит кататься вслепую. Загрузите видео своих спусков и получайте покадровые графические исправления и голосовые комментарии от сертифицированных тренеров.",
      feature1Title: "Точные графические правки",
      feature1Desc: "Наглядное выделение углов тела, положения кантов и баланса на видео.",
      feature2Title: "Подробные голосовые комментарии",
      feature2Desc: "Слушайте разбор тренера так, будто он находится рядом с вами на склоне.",
      cta: "Попробовать видеоанализ",
      demoPoints: [
        { comment: "Слишком высокий центр тяжести при входе в поворот, согните колени.", type: "correction" },
        { comment: "Отличный угол закантовки на этом участке, держите этот ритм!", type: "praise" },
        { comment: "Слишком ранний выход из поворота, направляйте взгляд по линии спада.", type: "correction" }
      ]
    },
    carpool: {
      tag: "Ключевая функция 02",
      titlePre: "Совместные поездки на курорты",
      titleHighlight: "Экономия расходов · Едем вместе",
      desc: "Забудьте об усталости за рулем в одиночку и дорогих трансферах. Создавайте или находите поездки на горнолыжные курорты в Snow Pro, уточняйте место для снаряжения и делите расходы на бензин и проезд.",
      feature1Title: "Быстрое создание и поиск поездок",
      feature1Desc: "Водители указывают свободные места и время выезда, пассажиры бронируют в один клик.",
      feature2Title: "Информация о месте для снаряжения",
      feature2Desc: "Четко указано количество чехлов для лыж и сноубордов в багажнике или боксе.",
      feature3Title: "Прозрачное разделение расходов",
      feature3Desc: "Честное разделение затрат на топливо и платные дороги — выгодно и экологично.",
      cta: "Открыть поездки в приложении",
      routes: [
        { from: "Москва (м. Тушинская)", to: "ГК Сорочаны", date: "Суббота 07:00", price: "400 ₽ /чел", seats: "Осталось 2 места", boardCapacity: "До 2 чехлов с лыжами", driver: "Алексей", car: "Внедорожник с боксом на крыше" },
        { from: "Санкт-Петербург", to: "Игора Драйв / Курорт", date: "Пятница 18:30", price: "500 ₽ /чел", seats: "Осталось 1 место", boardCapacity: "Чехлы до 165 см", driver: "Дмитрий", car: "Просторный минивэн" },
        { from: "Адлер (Аэропорт)", to: "Роза Хутор / Красная Поляна", date: "Воскресенье 07:30", price: "600 ₽ /чел", seats: "Осталось 3 места", boardCapacity: "Лыжи и сноуборды", driver: "Максим", car: "4WD · Зимняя резина" }
      ]
    },
    courses: {
      tag: "Ключевая функция 03",
      title: "Структурированные видеокурсы от профи",
      desc: "Комплексные обучающие курсы, созданные и опубликованные сертифицированными тренерами. Покупайте уроки за токены и пересматривайте в любое время.",
      feature1Title: "Публикация курсов тренерами",
      feature1Desc: "Инструкторы создают курсы по технике катания, определяют стоимость и делятся опытом.",
      feature2Title: "Удобное обучение для учеников",
      feature2Desc: "Оплата токенами и бессрочный доступ к видеоурокам для отработки техники.",
      btnText: "Смотреть все курсы в приложении",
      instructorLabel: "Инструктор",
      lessonsLabel: "Уроков",
      list: [
        { title: "Мастер-класс по экспертному карвингу", instructor: "Marcus Vogt", lessons: 12, level: "Продвинутый", style: "Карвинг", price: "80 Токенов" },
        { title: "Основы сноуборда и баланс", instructor: "Hannah Adams", lessons: 8, level: "Начинающий", style: "Базовое катание", price: "50 Токенов" },
        { title: "Фрирайд и безопасность в горах", instructor: "Sven Lindqvist", lessons: 10, level: "Эксперт", style: "Фрирайд", price: "100 Токенов" }
      ]
    },
    skibuddy: {
      tag: "Ключевая функция 04",
      titlePre: "Поиск компании с SkiBuddy",
      titleHighlight: "Катайтесь вместе — это веселее",
      desc: "Ищете компанию своего уровня для катания? Создавайте объявления или вступайте в группы по курортам, датам и стилю, чтобы кататься вместе и снимать друг друга на видео.",
      feature1Title: "Точные фильтры поиска",
      feature1Desc: "Поиск по курорту, датам, снаряду (лыжи/сноуборд) и уровню катания.",
      feature2Title: "Съемка спусков и общение",
      feature2Desc: "Снимайте друг друга на видео для разбора техники, делите жилье и находите друзей.",
      cta: "Найти компанию в приложении",
      posts: [
        { title: "Выходные на Роза Хутор: карвинг и видеосъемка", resort: "Сочи · Роза Хутор", date: "Сб - Вс", level: "Средний / Выше", style: "Сноуборд", target: "Карвинг и съемка спусков", author: "Leo_Carver", members: "3/4 Участника" },
        { title: "Фрирайд-команда в Шерегеше (пухляк и лес)", resort: "Сибирь · Шерегеш", date: "В след. месяце 12-16", level: "Эксперт", style: "Лыжи / Сноуборд", target: "Фрирайд и лес", author: "Yuki", members: "2/5 Участников" },
        { title: "Вечернее катание для начинающих, учимся вместе", resort: "Красная Поляна", date: "Пятница вечер", level: "Новичок", style: "Сноуборд", target: "Базовые повороты", author: "Анна", members: "2/3 Участника" }
      ]
    },
    roadmap: {
      tag: "Планы развития",
      title: "Партнерство с курортами и эксклюзивные скидки",
      desc: "Snow Pro ведет переговоры с горнолыжными курортами, чтобы предоставить ски-пассы со скидкой, выгодный прокат снаряжения и официальные уроки от курортных инструкторов.",
      status: "В процессе переговоров",
      features: [
        { title: "Ски-пассы со скидкой", desc: "Прямые партнерства с курортами на дневные/вечерние ски-пассы и раннее бронирование сезонников." },
        { title: "Выгодный прокат снаряжения", desc: "Скидки в официальных прокатных пунктах, выдача без очередей и топовые модели лыж и досок." },
        { title: "Прямая запись к официальным инструкторам", desc: "Сотрудничество с аккредитованными горнолыжными школами курортов по специальным ценам." },
        { title: "Сообщество райдеров и маркет снаряжения", desc: "Свежие отчеты о состоянии склонов, общение райдеров и проверенная площадка для экипировки." }
      ]
    },
    testimonials: {
      title: "Отзывы райдеров",
      reviews: [
        { name: "Alex Zhang", role: "Лыжник среднего уровня", content: "Видеоанализ сразу указал на ошибки в балансе, о которых я даже не догадывался. Прогресс пошел в разы быстрее!" },
        { name: "Sarah Li", role: "Сноубордистка", content: "Функция карпула просто спасение! Нашла попутчиков на курорт за пару минут и сэкономила на дороге." },
        { name: "Coach Mike", role: "Инструктор CASI Level 3", content: "Snow Pro позволяет мне публиковать авторские курсы и разбирать видео учеников с помощью удобных инструментов рисования." }
      ]
    },
    footer: {
      tagline: "Новый уровень вашего катания. Ваш надежный спутник в горах.",
      product: "Продукт",
      productLinks: ["Видеоанализ", "Поездки (Карпул)", "Видеокурсы", "Поиск попутчиков", "Пополнить токены"],
      support: "Поддержка",
      supportLinks: ["Помощь", "Контакты", "Конфиденциальность", "Условия"],
      rights: "Все права защищены."
    },
    ctaBottom: {
      title: "Готовы к новому уровню катания?",
      desc: "Присоединяйтесь к Snow Pro: профессиональный видеоанализ, удобный карпул, курсы от тренеров и поиск попутчиков. Скачайте приложение прямо сейчас!",
      btnIos: "App Store",
      btnAndroid: "Скачать для Android"
    },
    verifyEmail: {
      verifying: "Проверка адреса электронной почты...",
      success: "Электронная почта успешно подтверждена!",
      successTitle: "Успешно!",
      errorTitle: "Ошибка подтверждения",
      openApp: "Открыть приложение Snow Pro",
      invalidLink: "Недействительная ссылка подтверждения.",
      errorFallback: "Не удалось подтвердить почту.",
      errorOccurred: "Произошла ошибка при проверке.",
      errorInstruction: "Пожалуйста, запросите новое письмо с подтверждением из приложения.",
      resendEmail: "Отправить письмо повторно",
      emailPlaceholder: "Введите ваш email",
      resendSuccess: "Письмо с подтверждением отправлено повторно! Проверьте входящие.",
      resending: "Отправка...",
      invalidEmail: "Пожалуйста, введите корректный адрес электронной почты."
    },
    resetPassword: {
      title: "Сброс пароля",
      subtitle: "Введите новый пароль ниже.",
      newPassword: "Новый пароль",
      confirmPassword: "Подтвердите пароль",
      passwordsDoNotMatch: "Пароли не совпадают.",
      passwordLength: "Пароль должен содержать не менее 6 символов.",
      invalidLink: "Недействительные параметры ссылки.",
      successTitle: "Пароль успешно изменен",
      successDesc: "Ваш пароль был успешно сброшен.",
      openApp: "Войти в приложение",
      resetting: "Сброс пароля...",
      submitBtn: "Сбросить пароль",
      errorFallback: "Не удалось сбросить пароль.",
      errorOccurred: "Произошла ошибка."
    }
  }
};
