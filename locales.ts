export type Language = 'zh' | 'en' | 'ja' | 'ko' | 'fr' | 'de';

export const translations = {
  zh: {
    nav: {
      features: "核心功能",
      roadmap: "未来规划",
      about: "关于我们",
      download: "立即下载",
      recharge: "代币充值",
      appDownload: "下载 APP"
    },
    hero: {
      badge: "Snow Pro 1.0 现已上线",
      titlePre: "重新定义你的",
      titleHighlight: "滑雪进阶之路",
      subtitle: "连接专业教练与滑雪爱好者。通过专业的视频分析，精准提升技术。即将上线拼车、陪滑、导滑与社区功能，打造一站式滑雪生态。",
      ctaIos: "App Store 下载",
      ctaIosNote: "适用于 iOS 15+",
      ctaAndroid: "Android 下载",
      stats: {
        coaches: "认证教练",
        analysis: "视频分析",
        rating: "用户评分"
      }
    },
    video: {
      tag: "核心功能",
      titlePre: "教练就在你的口袋里",
      titleHighlight: "逐帧视频分析",
      desc: "不再盲目练习。上传您的滑行视频，Snow Pro 连接认证教练为您提供详细的语音与画线反馈。不仅知道错在哪里，更知道如何改正。",
      feature1Title: "精准画线纠错",
      feature1Desc: "直观的视觉反馈，展示身体角度、板刃位置的细微偏差。",
      feature2Title: "教练语音点评",
      feature2Desc: "不用盯着屏幕看文字，听教练的语音讲解，如同现场指导。",
      cta: "体验视频分析",
      demoPoints: [
        { comment: "入弯时重心过高，膝盖弯曲度不足。", type: "correction" },
        { comment: "这一段的立刃角度非常漂亮，保持这个节奏！", type: "praise" },
        { comment: "出弯过早，导致速度控制不稳，试着多向山下看。", type: "correction" }
      ]
    },
    courses: {
      tag: "核心功能",
      title: "系统化滑雪视频课程",
      desc: "由专业认证教练倾力打造。支持单板与双板，涵盖滑行基本功、刻滑、公园自由式及大山野雪，助您从零基础蜕变为雪场大神。",
      btnText: "立即在 App 中探索课程",
      instructorLabel: "授课教练",
      lessonsLabel: "课时",
      list: [
        { title: "双板高级刻滑进阶", instructor: "Marcus Vogt", lessons: 12, level: "高级", style: "刻滑", price: "80 代币" },
        { title: "单板零基础滑行入门", instructor: "Hannah Adams", lessons: 8, level: "初级", style: "滑行基础", price: "50 代币" },
        { title: "大山野雪与安全进阶", instructor: "Sven Lindqvist", lessons: 10, level: "专家级", style: "野雪自由式", price: "100 代币" }
      ]
    },
    roadmap: {
      tag: "即将推出",
      title: "打造全方位滑雪生态",
      desc: "Snow Pro 不仅仅是一个分析工具，我们正在构建一个完整的滑雪爱好者平台。以下功能正在紧锣密鼓开发中。",
      status: "敬请期待",
      features: [
        { title: "雪场拼车", desc: "不再为独自去雪场发愁。一键发起或加入拼车行程，环保出行，结识新雪友。" },
        { title: "雪友陪滑", desc: "寻找技术相当的伙伴，或者预约大神陪滑指导。让滑雪不再孤单。" },
        { title: "雪场导滑", desc: "预约当地专业滑雪向导，带你避开人群、探索野雪与秘境路线，全方位保障滑雪安全。" },
        { title: "滑雪装备店", desc: "精选全球顶尖滑雪装备与周边好物，正品保障，专业导购推荐。" },
        { title: "雪圈社区", desc: "分享滑雪日常，讨论装备测评，交流雪场攻略，打造最纯粹的滑雪爱好者论坛。" }
      ]
    },
    testimonials: {
      title: "深受雪友喜爱",
      reviews: [
        { name: "Alex Zhang", role: "双板中级滑雪者", content: "以前自己瞎滑总觉得哪里不对，用了Snow Pro的视频分析功能，教练指出的重心问题让我茅塞顿开！" },
        { name: "Sarah Li", role: "单板刻滑爱好者", content: "非常有用的工具。期待未来的拼车功能，这样去崇礼就更方便了。" },
        { name: "Coach Mike", role: "CASI Level 3 教练", content: "Snow Pro 让我能更高效地管理学生视频，画线工具非常顺手，沟通效率大大提高。" }
      ]
    },
    footer: {
      tagline: "让每一次滑行都更进一步。连接教练、雪友与优质服务，您的终极滑雪伴侣。",
      product: "产品",
      productLinks: ["视频分析", "拼车出行", "雪场导滑", "滑雪课程", "装备商城"],
      support: "支持",
      supportLinks: ["使用帮助", "联系我们", "隐私政策", "服务条款"],
      rights: "保留所有权利。"
    },
    ctaBottom: {
      title: "准备好提升您的滑雪水平了吗？",
      desc: "加入 Snow Pro 社区，体验专业的视频分析功能。现在下载，即刻开启您的进阶之旅。",
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
      roadmap: "Roadmap",
      about: "About",
      download: "Download",
      recharge: "Token Recharge",
      appDownload: "Get App"
    },
    hero: {
      badge: "Snow Pro 1.0 is Live",
      titlePre: "Redefine Your",
      titleHighlight: "Skiing Progression",
      subtitle: "Connect with professional instructors. Improve your technique with professional video analysis. Carpooling, buddy finding, guiding, and community features coming soon.",
      ctaIos: "App Store",
      ctaIosNote: "Requires iOS 15+",
      ctaAndroid: "Android Download",
      stats: {
        coaches: "Certified Coaches",
        analysis: "Video Analyses",
        rating: "User Rating"
      }
    },
    video: {
      tag: "Core Feature",
      titlePre: "A Coach in Your Pocket",
      titleHighlight: "Frame-by-Frame Analysis",
      desc: "Stop practicing blindly. Upload your skiing videos and get detailed voice & drawing feedback from certified instructors. Know exactly what to fix and how.",
      feature1Title: "Visual Corrections",
      feature1Desc: "Intuitive visual feedback showing subtle deviations in body angles and edge positions.",
      feature2Title: "Voice Commentary",
      feature2Desc: "Don't just read text. Listen to the instructor's detailed voice explanation as if they were there.",
      cta: "Start Video Analysis",
      demoPoints: [
        { comment: "Center of gravity too high entering the turn.", type: "correction" },
        { comment: "Excellent edge angle here, keep this rhythm!", type: "praise" },
        { comment: "Exiting turn too early, affecting speed control.", type: "correction" }
      ]
    },
    courses: {
      tag: "Core Feature",
      title: "Structured Skiing Courses",
      desc: "Recorded by certified instructors. Covers snowboard & ski, from basic riding to carving, park, and backcountry safety.",
      btnText: "Explore Courses in App",
      instructorLabel: "Instructor",
      lessonsLabel: "Lessons",
      list: [
        { title: "Ski Carving Masterclass", instructor: "Marcus Vogt", lessons: 12, level: "Advanced", style: "Carving", price: "80 Tokens" },
        { title: "Snowboard Basics & Core Riding", instructor: "Hannah Adams", lessons: 8, level: "Beginner", style: "Basic Riding", price: "50 Tokens" },
        { title: "Backcountry & Freeride Safety", instructor: "Sven Lindqvist", lessons: 10, level: "Expert", style: "Freeride", price: "100 Tokens" }
      ]
    },
    roadmap: {
      tag: "Coming Soon",
      title: "The Complete Ski Ecosystem",
      desc: "Snow Pro is more than an analysis tool. We are building a complete platform for ski enthusiasts. The following features are under development.",
      status: "Coming Soon",
      features: [
        { title: "Carpooling", desc: "Find rides to the resort easily. Save money and meet new ski buddies." },
        { title: "Ski Buddy", desc: "Find partners of similar skill levels or book a pro for guided skiing." },
        { title: "Resort Guiding", desc: "Book professional local guides to escape the crowd, explore backcountry terrain and hidden routes, ensuring all-around skiing safety." },
        { title: "Gear Shop", desc: "Curated top-tier ski gear and merchandise. Authentic products with professional recommendations." },
        { title: "Community", desc: "Share daily runs, discuss gear, and exchange resort guides in a pure skier forum." }
      ]
    },
    testimonials: {
      title: "Loved by Skiers",
      reviews: [
        { name: "Alex Zhang", role: "Intermediate Skier", content: "I felt stuck for a long time. The video analysis pointed out my balance issues immediately!" },
        { name: "Sarah Li", role: "Snowboard Carver", content: "Very useful tool. Can't wait for the carpooling feature, it will make trips so much easier." },
        { name: "Coach Mike", role: "CASI Level 3 Instructor", content: "Snow Pro allows me to manage student videos efficiently. The drawing tools are fantastic." }
      ]
    },
    footer: {
      tagline: "Take your skiing to the next level. Connecting instructors, friends, and services.",
      product: "Product",
      productLinks: ["Video Analysis", "Carpooling", "Resort Guiding", "Courses", "Gear Shop"],
      support: "Support",
      supportLinks: ["Help Center", "Contact Us", "Privacy Policy", "Terms"],
      rights: "All rights reserved."
    },
    ctaBottom: {
      title: "Ready to Level Up?",
      desc: "Join the Snow Pro community and experience professional video analysis. Download now to start your journey.",
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
      roadmap: "ロードマップ",
      about: "概要",
      download: "ダウンロード",
      recharge: "トークンチャージ",
      appDownload: "アプリを入手"
    },
    hero: {
      badge: "Snow Pro 1.0 リリース",
      titlePre: "スキーの上達を",
      titleHighlight: "再定義する",
      subtitle: "プロのインストラクターとつながりましょう。ビデオ分析で技術を向上。相乗り、仲間探し、ゲレンデガイド、オンライン講座、ショップ、コミュニティ機能が充実し、究極のスキーエコシステムを提供します。",
      ctaIos: "App Store",
      ctaIosNote: "iOS 15+ 対応",
      ctaAndroid: "Android ダウンロード",
      stats: {
        coaches: "認定コーチ",
        analysis: "分析数",
        rating: "評価"
      }
    },
    video: {
      tag: "コア機能",
      titlePre: "ポケットの中のコーチ",
      titleHighlight: "フレーム単位のビデオ分析",
      desc: "盲目的な練習はやめましょう。動画をアップロードして、認定コーチから詳細な音声と描画によるフィードバックを受け取れます。",
      feature1Title: "的確な修正指示",
      feature1Desc: "身体の角度やエッジ位置の微妙なズレを視覚的にフィードバック。",
      feature2Title: "音声コメント",
      feature2Desc: "テキストを読むだけでなく、コーチの音声解説で、まるでその場にいるかのように指導を受けられます。",
      cta: "ビデオ分析を試す",
      demoPoints: [
        { comment: "ターン入りの重心が高すぎます。", type: "correction" },
        { comment: "ここのエッジ角は素晴らしい！このリズムを維持して。", type: "praise" },
        { comment: "ターン出口が早すぎます。もっとフォールラインを見て。", type: "correction" }
      ]
    },
    courses: {
      tag: "コア機能",
      title: "体系的なスキー・スノボ動画講座",
      desc: "認定コーチが監修。スノーボードとスキーの両方に対応し、基本の滑りからカービング、パーク、バックカントリーの安全対策まで網羅しています。",
      btnText: "アプリで講座を探索する",
      instructorLabel: "インストラクター",
      lessonsLabel: "レッスン",
      list: [
        { title: "スキー上級カービングマスター", instructor: "Marcus Vogt", lessons: 12, level: "上級", style: "カービング", price: "80 トークン" },
        { title: "スノーボード初心者基本ライディング", instructor: "Hannah Adams", lessons: 8, level: "初級", style: "基本滑走", price: "50 トークン" },
        { title: "バックカントリー＆フリーライド安全対策", instructor: "Sven Lindqvist", lessons: 10, level: "エキスパート", style: "フリーライド", price: "100 トークン" }
      ]
    },
    roadmap: {
      tag: "近日公開",
      title: "究極のスキーエコシステム",
      desc: "Snow Proは単なる分析ツールではありません。スキー愛好家のための完全なプラットフォームを構築しています。",
      status: "近日公開",
      features: [
        { title: "相乗り (Carpool)", desc: "スキー場への移動手段を簡単に確保。環境に優しく、新しい仲間とも出会えます。" },
        { title: "スキー仲間", desc: "同じレベルの仲間を見つけたり、上級者のガイドを予約したりできます。" },
        { title: "ギアショップ", desc: "厳選されたトップクラスのスキー用具とグッズ。プロの推奨する正規品を保証。" },
        { title: "コミュニティ", desc: "滑走記録の共有、ギアのレビュー、ゲレンデ情報の交換など、スキーヤーのためのフォーラム。" }
      ]
    },
    testimonials: {
      title: "ユーザーの声",
      reviews: [
        { name: "Alex Zhang", role: "中級スキーヤー", content: "自分の滑りのどこが悪いのかわかりませんでしたが、ビデオ分析で重心の問題を指摘され、目から鱗でした！" },
        { name: "Sarah Li", role: "スノーボーダー", content: "とても便利なツールです。スキー場への移動が楽になる相乗り機能の追加が楽しみです。" },
        { name: "Coach Mike", role: "CASI Level 3 インストラクター", content: "Snow Proのおかげで生徒の動画管理が効率化しました。描画ツールは非常に使いやすいです。" }
      ]
    },
    footer: {
      tagline: "すべての滑りを次のレベルへ。コーチ、仲間、サービスをつなぐ究極のパートナー。",
      product: "製品",
      productLinks: ["ビデオ分析", "相乗り", "ゲレンデガイド", "コース", "ショップ"],
      support: "サポート",
      supportLinks: ["ヘルプ", "お問い合わせ", "プライバシー", "利用規約"],
      rights: "All rights reserved."
    },
    ctaBottom: {
      title: "レベルアップの準備はできましたか？",
      desc: "Snow Proコミュニティに参加して、プロのビデオ分析を体験してください。",
      btnIos: "App Store",
      btnAndroid: "Android ダウンロード"
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
      roadmap: "로드맵",
      about: "소개",
      download: "다운로드",
      recharge: "토큰 충전",
      appDownload: "앱 다운로드"
    },
    hero: {
      badge: "Snow Pro 1.0 출시",
      titlePre: "스키 실력 향상의",
      titleHighlight: "새로운 기준",
      subtitle: "전문 강사와 연결하세요. 비디오 분석으로 기술을 정교하게 다듬으세요. 카풀, 스키 버디, 가이드 라이딩, 커뮤니티 기능이 곧 출시됩니다.",
      ctaIos: "App Store",
      ctaIosNote: "iOS 15+ 지원",
      ctaAndroid: "Android 다운로드",
      stats: {
        coaches: "인증 코치",
        analysis: "비디오 분석",
        rating: "사용자 평점"
      }
    },
    video: {
      tag: "핵심 기능",
      titlePre: "내 주머니 속의 코치",
      titleHighlight: "프레임 단위 분석",
      desc: "맹목적인 연습은 그만. 영상을 업로드하고 인증된 코치로부터 음성 및 드로잉 피드백을 받으세요. 문제점과 해결책을 정확히 알 수 있습니다.",
      feature1Title: "정밀한 교정",
      feature1Desc: "신체 각도와 엣지 위치의 미세한 편차를 시각적으로 보여줍니다.",
      feature2Title: "음성 코멘터리",
      feature2Desc: "텍스트만 읽지 마세요. 현장 강습처럼 코치의 생생한 음성 설명을 들어보세요.",
      cta: "비디오 분석 체험",
      demoPoints: [
        { comment: "턴 진입 시 무게중심이 너무 높습니다.", type: "correction" },
        { comment: "이 부분의 엣지 각도는 아주 좋습니다!", type: "praise" },
        { comment: "턴 탈출이 너무 빠릅니다. 폴라인을 더 바라보세요.", type: "correction" }
      ]
    },
    courses: {
      tag: "핵심 기능",
      title: "체계적인 스키 강좌",
      desc: "인증된 강사들이 직접 제작했습니다. 스노보드 및 스키 지원, 기초 라이딩부터 카빙, 파크, 백컨트리 안전 가이드까지 지원합니다.",
      btnText: "앱에서 강좌 더 보기",
      instructorLabel: "강사",
      lessonsLabel: "레슨",
      list: [
        { title: "스키 상급 카빙 마스터클래스", instructor: "Marcus Vogt", lessons: 12, level: "상급", style: "카빙", price: "80 토큰" },
        { title: "스노보드 기초 및 코어 라이딩", instructor: "Hannah Adams", lessons: 8, level: "초급", style: "기초 라이딩", price: "50 토큰" },
        { title: "백컨트리 및 프리라이드 안전 가이드", instructor: "Sven Lindqvist", lessons: 10, level: "전문가", style: "프리라이드", price: "100 토큰" }
      ]
    },
    roadmap: {
      tag: "출시 예정",
      title: "올인원 스키 플랫폼",
      desc: "Snow Pro는 단순한 분석 도구가 아닙니다. 스키 애호가를 위한 완벽한 생태계를 구축하고 있습니다.",
      status: "준비 중",
      features: [
        { title: "스키장 카풀", desc: "스키장 가는 길이 더 이상 외롭지 않습니다. 카풀로 이동하고 새 친구도 사귀세요." },
        { title: "스키 버디", desc: "비슷한 실력의 친구를 찾거나 고수에게 동반 라이딩을 요청하세요." },
        { title: "가이드 라이딩", desc: "현지 전문 가이드를 예약하여 인파를 피하고 백컨트리나 숨겨진 슬로프를 탐험하며 안전한 스키를 즐기세요." },
        { title: "장비 샵", desc: "엄선된 최고급 스키 장비와 굿즈. 전문가가 추천하는 정품을 만나보세요." },
        { title: "커뮤니티", desc: "라이딩 일지 공유, 장비 리뷰, 스키장 공략 등 순수 스키어들을 위한 포럼." }
      ]
    },
    testimonials: {
      title: "사용자 후기",
      reviews: [
        { name: "Alex Zhang", role: "중급 스키어", content: "혼자 연습할 때는 몰랐던 문제점을 비디오 분석을 통해 정확히 파악했습니다!" },
        { name: "Sarah Li", role: "스노우보더", content: "매우 유용한 도구입니다. 앞으로 추가될 카풀 기능이 정말 기대됩니다." },
        { name: "Coach Mike", role: "CASI Level 3 강사", content: "학생들의 영상을 효율적으로 관리할 수 있어 좋습니다. 드로잉 툴이 정말 직관적이에요." }
      ]
    },
    footer: {
      tagline: "모든 라이딩을 한 단계 더 높게. 강사, 친구, 서비스를 연결하는 최고의 파트너.",
      product: "제품",
      productLinks: ["비디오 분석", "카풀", "가이드 라이딩", "강좌", "스토어"],
      support: "지원",
      supportLinks: ["도움말", "문의하기", "개인정보처리방침", "이용약관"],
      rights: "All rights reserved."
    },
    ctaBottom: {
      title: "스키 실력을 레벨업할 준비가 되셨나요?",
      desc: "Snow Pro 커뮤니티에 가입하고 전문적인 분석을 경험해보세요.",
      btnIos: "App Store",
      btnAndroid: "Android 다운로드"
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
      roadmap: "Feuille de route",
      about: "À propos",
      download: "Télécharger",
      recharge: "Recharge de jetons",
      appDownload: "Obtenir l'app"
    },
    hero: {
      badge: "Snow Pro 1.0 est en ligne",
      titlePre: "Redéfinissez votre",
      titleHighlight: "Progression en Ski",
      subtitle: "Connectez-vous avec des instructeurs professionnels. Améliorez votre technique grâce à l'analyse vidéo. Covoiturage, guides et communauté bientôt disponibles.",
      ctaIos: "App Store",
      ctaIosNote: "iOS 15+ requis",
      ctaAndroid: "Télécharger pour Android",
      stats: {
        coaches: "Coachs Certifiés",
        analysis: "Analyses Vidéo",
        rating: "Note Utilisateurs"
      }
    },
    video: {
      tag: "Fonctionnalité Clé",
      titlePre: "Un Coach dans votre Poche",
      titleHighlight: "Analyse Image par Image",
      desc: "Ne pratiquez plus à l'aveugle. Téléchargez vos vidéos et recevez des commentaires vocaux et graphiques détaillés. Sachez exactement quoi corriger.",
      feature1Title: "Corrections Visuelles",
      feature1Desc: "Retour visuel intuitif montrant les déviations subtiles des angles du corps et des carres.",
      feature2Title: "Commentaires Vocaux",
      feature2Desc: "Écoutez les explications détaillées de l'instructeur comme s'il était sur place.",
      cta: "Essayer l'analyse",
      demoPoints: [
        { comment: "Centre de gravité trop haut en entrée de virage.", type: "correction" },
        { comment: "Excellent angle de prise de carre ici !", type: "praise" },
        { comment: "Sortie de virage trop précoce, contrôlez votre vitesse.", type: "correction" }
      ]
    },
    courses: {
      tag: "Fonctionnalité Clé",
      title: "Cours de Ski Structurés",
      desc: "Enregistrés par des instructeurs certifiés. Convient pour le snowboard et le ski, du perfectionnement de la glisse de base au carving, park et sécurité hors-piste.",
      btnText: "Découvrir les cours sur l'App",
      instructorLabel: "Moniteur",
      lessonsLabel: "Leçons",
      list: [
        { title: "Masterclass de Ski de Carving", instructor: "Marcus Vogt", lessons: 12, level: "Avancé", style: "Carving", price: "80 Jetons" },
        { title: "Bases du Snowboard et Glisse", instructor: "Hannah Adams", lessons: 8, level: "Débutant", style: "Glisse de Base", price: "50 Jetons" },
        { title: "Hors-piste et Sécurité en Montagne", instructor: "Sven Lindqvist", lessons: 10, level: "Expert", style: "Freeride", price: "100 Jetons" }
      ]
    },
    roadmap: {
      tag: "Bientôt",
      title: "L'Écosystème Ski Complet",
      desc: "Snow Pro est plus qu'un outil d'analyse. Nous construisons une plateforme complète pour les passionnés de ski.",
      status: "Bientôt",
      features: [
        { title: "Covoiturage", desc: "Trouvez facilement un trajet vers la station. Économique et convivial." },
        { title: "Partenaire de Ski", desc: "Trouvez des partenaires de même niveau ou réservez un pro." },
        { title: "Guides de Station", desc: "Réservez des guides locaux professionnels pour éviter la foule, explorer le hors-piste et les itinéraires cachés en toute sécurité." },
        { title: "Boutique", desc: "Matériel et produits dérivés sélectionnés. Produits authentiques recommandés par des pros." },
        { title: "Communauté", desc: "Partagez vos sessions, discutez matériel et échangez des conseils." }
      ]
    },
    testimonials: {
      title: "Approuvé par les Skieurs",
      reviews: [
        { name: "Alex Zhang", role: "Skieur Intermédiaire", content: "L'analyse vidéo a mis le doigt sur mes problèmes d'équilibre instantanément !" },
        { name: "Sarah Li", role: "Snowboardeuse", content: "Outil très utile. J'ai hâte d'utiliser la fonction covoiturage." },
        { name: "Coach Mike", role: "Instructeur CASI Niveau 3", content: "Snow Pro me permet de gérer efficacement les vidéos de mes élèves." }
      ]
    },
    footer: {
      tagline: "Passez au niveau supérieur. Votre partenaire ultime pour le ski.",
      product: "Produit",
      productLinks: ["Analyse Vidéo", "Covoiturage", "Guides de Station", "Cours", "Boutique"],
      support: "Support",
      supportLinks: ["Aide", "Contact", "Confidentialité", "Conditions"],
      rights: "Tous droits réservés."
    },
    ctaBottom: {
      title: "Prêt à progresser ?",
      desc: "Rejoignez la communauté Snow Pro et profitez d'une analyse vidéo professionnelle.",
      btnIos: "App Store",
      btnAndroid: "Télécharger pour Android"
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
      roadmap: "Roadmap",
      about: "Über uns",
      download: "Download",
      recharge: "Token aufladen",
      appDownload: "App holen"
    },
    hero: {
      badge: "Snow Pro 1.0 ist live",
      titlePre: "Definieren Sie Ihren",
      titleHighlight: "Skifortschritt neu",
      subtitle: "Verbinden Sie sich mit professionellen Skilehrern. Verbessern Sie Ihre Technik durch Videoanalyse. Fahrgemeinschaften, Ski-Guiding und Community folgen bald.",
      ctaIos: "App Store",
      ctaIosNote: "Benötigt iOS 15+",
      ctaAndroid: "Android Download",
      stats: {
        coaches: "Zertifizierte Trainer",
        analysis: "Videoanalysen",
        rating: "Bewertung"
      }
    },
    video: {
      tag: "Kernfunktion",
      titlePre: "Ein Coach in Ihrer Tasche",
      titleHighlight: "Bild-für-Bild Analyse",
      desc: "Üben Sie nicht blind. Laden Sie Ihre Videos hoch und erhalten Sie detailliertes Sprach- und Zeichenfeedback. Wissen Sie genau, was zu verbessern ist.",
      feature1Title: "Visuelle Korrekturen",
      feature1Desc: "Intuitives visuelles Feedback zeigt subtile Abweichungen in Körperwinkeln und Kantenposition.",
      feature2Title: "Sprachkommentar",
      feature2Desc: "Hören Sie sich die detaillierten Erklärungen des Lehrers an, als wäre er vor Ort.",
      cta: "Videoanalyse testen",
      demoPoints: [
        { comment: "Schwerpunkt bei Kurveneingang zu hoch.", type: "correction" },
        { comment: "Hervorragender Kantenwinkel hier, Rhythmus beibehalten!", type: "praise" },
        { comment: "Kurvenausgang zu früh, Geschwindigkeit kontrollieren.", type: "correction" }
      ]
    },
    courses: {
      tag: "Kernfunktion",
      title: "Systematische Ski- & Snowboardkurse",
      desc: "Aufgenommen von zertifizierten Trainern. Für Snowboard & Ski, von grundlegendem Fahren über Carving, Park bis hin zu Backcountry-Sicherheitskursen.",
      btnText: "Kurse in der App erkunden",
      instructorLabel: "Skilehrer",
      lessonsLabel: "Lektionen",
      list: [
        { title: "Ski-Carving-Meisterklasse", instructor: "Marcus Vogt", lessons: 12, level: "Fortgeschritten", style: "Carving", price: "80 Token" },
        { title: "Snowboard-Grundlagen & Core-Riding", instructor: "Hannah Adams", lessons: 8, level: "Anfänger", style: "Grundlegendes Fahren", price: "50 Token" },
        { title: "Backcountry & Freeride Sicherheit", instructor: "Sven Lindqvist", lessons: 10, level: "Experte", style: "Freeride", price: "100 Token" }
      ]
    },
    roadmap: {
      tag: "Demnächst",
      title: "Das komplette Ski-Ökosystem",
      desc: "Snow Pro ist mehr als ein Analysetool. Wir bauen eine komplette Plattform für Skibegeisterte.",
      status: "Demnächst",
      features: [
        { title: "Fahrgemeinschaften", desc: "Finden Sie einfach eine Mitfahrgelegenheit zum Skigebiet." },
        { title: "Ski-Buddy", desc: "Finden Sie Partner mit ähnlichem Können oder buchen Sie einen Profi." },
        { title: "Ski-Guiding", desc: "Buchen Sie professionelle lokale Guides, um Menschenmassen zu meiden, Freeride-Zonen zu erkunden und die Sicherheit zu gewährleisten." },
        { title: "Ausrüstungsshop", desc: "Ausgewählte Top-Ausrüstung und Merchandise. Authentische Produkte." },
        { title: "Community", desc: "Teilen Sie Ihre Läufe, diskutieren Sie über Ausrüstung und tauschen Sie Tipps aus." }
      ]
    },
    testimonials: {
      title: "Von Skifahrern geliebt",
      reviews: [
        { name: "Alex Zhang", role: "Fortgeschrittener", content: "Die Videoanalyse hat meine Gleichgewichtsprobleme sofort aufgezeigt!" },
        { name: "Sarah Li", role: "Snowboarder", content: "Sehr nützliches Tool. Ich freue mich auf die Fahrgemeinschaftsfunktion." },
        { name: "Coach Mike", role: "CASI Level 3 Trainer", content: "Snow Pro ermöglicht es mir, Schülervideos effizient zu verwalten." }
      ]
    },
    footer: {
      tagline: "Bringen Sie Ihr Skifahren auf das nächste Level. Ihr ultimativer Partner.",
      product: "Produkt",
      productLinks: ["Videoanalyse", "Fahrgemeinschaft", "Ski-Guiding", "Kurse", "Shop"],
      support: "Support",
      supportLinks: ["Hilfe", "Kontakt", "Datenschutz", "AGB"],
      rights: "Alle Rechte vorbehalten."
    },
    ctaBottom: {
      title: "Bereit für den Aufstieg?",
      desc: "Treten Sie der Snow Pro-Community bei und erleben Sie professionelle Videoanalyse.",
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
  }
};
