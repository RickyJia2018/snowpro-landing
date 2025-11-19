export type Language = 'zh' | 'en' | 'ja' | 'ko' | 'fr' | 'de';

export const translations = {
  zh: {
    nav: {
      features: "核心功能",
      roadmap: "未来规划",
      about: "关于我们",
      download: "立即下载",
      appDownload: "下载 APP"
    },
    hero: {
      badge: "SnowPro 2.0 现已上线",
      titlePre: "重新定义你的",
      titleHighlight: "滑雪进阶之路",
      subtitle: "连接专业教练与滑雪爱好者。通过 AI 辅助的视频分析，精准提升技术。即将上线拼车、陪滑与社区功能，打造一站式滑雪生态。",
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
      desc: "不再盲目练习。上传您的滑行视频，SnowPro 连接认证教练为您提供详细的语音与画线反馈。不仅知道错在哪里，更知道如何改正。",
      feature1Title: "精准画线纠错",
      feature1Desc: "直观的视觉反馈，展示身体角度、板刃位置的细微偏差。",
      feature2Title: "教练语音点评",
      feature2Desc: "不用盯着屏幕看文字，听教练的语音讲解，如同现场指导。",
      cta: "开始免费试用分析",
      demoPoints: [
        { comment: "入弯时重心过高，膝盖弯曲度不足。", type: "correction" },
        { comment: "这一段的立刃角度非常漂亮，保持这个节奏！", type: "praise" },
        { comment: "出弯过早，导致速度控制不稳，试着多向山下看。", type: "correction" }
      ]
    },
    roadmap: {
      tag: "即将推出",
      title: "打造全方位滑雪生态",
      desc: "SnowPro 不仅仅是一个分析工具，我们正在构建一个完整的滑雪爱好者平台。以下功能正在紧锣密鼓开发中。",
      status: "敬请期待",
      features: [
        { title: "雪场拼车", desc: "不再为独自去雪场发愁。一键发起或加入拼车行程，环保出行，结识新雪友。" },
        { title: "雪友陪滑", desc: "寻找技术相当的伙伴，或者预约大神陪滑指导。让滑雪不再孤单。" },
        { title: "在线课程", desc: "海量体系化滑雪教程，从小白入门到黑道大神，随时随地学习理论知识。" },
        { title: "滑雪装备店", desc: "精选全球顶尖滑雪装备与周边好物，正品保障，专业导购推荐。" },
        { title: "雪圈社区", desc: "分享滑雪日常，讨论装备测评，交流雪场攻略，打造最纯粹的滑雪爱好者论坛。" }
      ]
    },
    testimonials: {
      title: "深受雪友喜爱",
      reviews: [
        { name: "Alex Zhang", role: "双板中级滑雪者", content: "以前自己瞎滑总觉得哪里不对，用了SnowPro的视频分析功能，教练指出的重心问题让我茅塞顿开！" },
        { name: "Sarah Li", role: "单板刻滑爱好者", content: "非常有用的工具。期待未来的拼车功能，这样去崇礼就更方便了。" },
        { name: "Coach Mike", role: "CASI Level 3 教练", content: "SnowPro 让我能更高效地管理学生视频，画线工具非常顺手，沟通效率大大提高。" }
      ]
    },
    footer: {
      tagline: "让每一次滑行都更进一步。连接教练、雪友与优质服务，您的终极滑雪伴侣。",
      product: "产品",
      productLinks: ["视频分析", "拼车出行", "滑雪课程", "装备商城"],
      support: "支持",
      supportLinks: ["使用帮助", "联系我们", "隐私政策", "服务条款"],
      rights: "保留所有权利。"
    },
    ctaBottom: {
      title: "准备好提升您的滑雪水平了吗？",
      desc: "加入 SnowPro 社区，体验专业的视频分析功能。现在下载，即刻开启您的进阶之旅。",
      btnIos: "App Store 下载",
      btnAndroid: "Android 下载"
    }
  },
  en: {
    nav: {
      features: "Features",
      roadmap: "Roadmap",
      about: "About",
      download: "Download",
      appDownload: "Get App"
    },
    hero: {
      badge: "SnowPro 2.0 is Live",
      titlePre: "Redefine Your",
      titleHighlight: "Skiing Progression",
      subtitle: "Connect with professional instructors. Improve your technique with AI-assisted video analysis. Carpooling, buddy finding, and community features coming soon.",
      ctaIos: "App Store",
      ctaIosNote: "Requires iOS 15+",
      ctaAndroid: "Google Play",
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
      cta: "Try Free Analysis",
      demoPoints: [
        { comment: "Center of gravity too high entering the turn.", type: "correction" },
        { comment: "Excellent edge angle here, keep this rhythm!", type: "praise" },
        { comment: "Exiting turn too early, affecting speed control.", type: "correction" }
      ]
    },
    roadmap: {
      tag: "Coming Soon",
      title: "The Complete Ski Ecosystem",
      desc: "SnowPro is more than an analysis tool. We are building a complete platform for ski enthusiasts. The following features are under development.",
      status: "Coming Soon",
      features: [
        { title: "Carpooling", desc: "Find rides to the resort easily. Save money and meet new ski buddies." },
        { title: "Ski Buddy", desc: "Find partners of similar skill levels or book a pro for guided skiing." },
        { title: "Online Courses", desc: "Systematic tutorials from beginner to expert. Learn theory anytime, anywhere." },
        { title: "Gear Shop", desc: "Curated top-tier ski gear and merchandise. Authentic products with professional recommendations." },
        { title: "Community", desc: "Share daily runs, discuss gear, and exchange resort guides in a pure skier forum." }
      ]
    },
    testimonials: {
      title: "Loved by Skiers",
      reviews: [
        { name: "Alex Zhang", role: "Intermediate Skier", content: "I felt stuck for a long time. The video analysis pointed out my balance issues immediately!" },
        { name: "Sarah Li", role: "Snowboard Carver", content: "Very useful tool. Can't wait for the carpooling feature, it will make trips so much easier." },
        { name: "Coach Mike", role: "CASI Level 3 Instructor", content: "SnowPro allows me to manage student videos efficiently. The drawing tools are fantastic." }
      ]
    },
    footer: {
      tagline: "Take your skiing to the next level. Connecting instructors, friends, and services.",
      product: "Product",
      productLinks: ["Video Analysis", "Carpooling", "Courses", "Gear Shop"],
      support: "Support",
      supportLinks: ["Help Center", "Contact Us", "Privacy Policy", "Terms"],
      rights: "All rights reserved."
    },
    ctaBottom: {
      title: "Ready to Level Up?",
      desc: "Join the SnowPro community and experience professional video analysis. Download now to start your journey.",
      btnIos: "App Store",
      btnAndroid: "Google Play"
    }
  },
  ja: {
    nav: {
      features: "機能",
      roadmap: "ロードマップ",
      about: "概要",
      download: "ダウンロード",
      appDownload: "アプリを入手"
    },
    hero: {
      badge: "SnowPro 2.0 リリース",
      titlePre: "スキーの上達を",
      titleHighlight: "再定義する",
      subtitle: "プロのインストラクターとつながりましょう。AI支援によるビデオ分析で技術を向上。相乗り、仲間探し、コミュニティ機能も近日公開予定。",
      ctaIos: "App Store",
      ctaIosNote: "iOS 15+ 対応",
      ctaAndroid: "Google Play",
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
      cta: "無料分析を試す",
      demoPoints: [
        { comment: "ターン入りの重心が高すぎます。", type: "correction" },
        { comment: "ここのエッジ角は素晴らしい！このリズムを維持して。", type: "praise" },
        { comment: "ターン出口が早すぎます。もっとフォールラインを見て。", type: "correction" }
      ]
    },
    roadmap: {
      tag: "近日公開",
      title: "究極のスキーエコシステム",
      desc: "SnowProは単なる分析ツールではありません。スキー愛好家のための完全なプラットフォームを構築しています。",
      status: "近日公開",
      features: [
        { title: "相乗り (Carpool)", desc: "スキー場への移動手段を簡単に確保。環境に優しく、新しい仲間とも出会えます。" },
        { title: "スキー仲間", desc: "同じレベルの仲間を見つけたり、上級者のガイドを予約したりできます。" },
        { title: "オンライン講座", desc: "初心者から上級者まで体系的なチュートリアル。いつでもどこでも理論を学べます。" },
        { title: "ギアショップ", desc: "厳選されたトップクラスのスキー用具とグッズ。プロの推奨する正規品を保証。" },
        { title: "コミュニティ", desc: "滑走記録の共有、ギアのレビュー、ゲレンデ情報の交換など、スキーヤーのためのフォーラム。" }
      ]
    },
    testimonials: {
      title: "ユーザーの声",
      reviews: [
        { name: "Alex Zhang", role: "中級スキーヤー", content: "自分の滑りのどこが悪いのかわかりませんでしたが、ビデオ分析で重心の問題を指摘され、目から鱗でした！" },
        { name: "Sarah Li", role: "スノーボーダー", content: "とても便利なツールです。スキー場への移動が楽になる相乗り機能の追加が楽しみです。" },
        { name: "Coach Mike", role: "CASI Level 3 インストラクター", content: "SnowProのおかげで生徒の動画管理が効率化しました。描画ツールは非常に使いやすいです。" }
      ]
    },
    footer: {
      tagline: "すべての滑りを次のレベルへ。コーチ、仲間、サービスをつなぐ究極のパートナー。",
      product: "製品",
      productLinks: ["ビデオ分析", "相乗り", "コース", "ショップ"],
      support: "サポート",
      supportLinks: ["ヘルプ", "お問い合わせ", "プライバシー", "利用規約"],
      rights: "All rights reserved."
    },
    ctaBottom: {
      title: "レベルアップの準備はできましたか？",
      desc: "SnowProコミュニティに参加して、プロのビデオ分析を体験してください。",
      btnIos: "App Store",
      btnAndroid: "Google Play"
    }
  },
  ko: {
    nav: {
      features: "핵심 기능",
      roadmap: "로드맵",
      about: "소개",
      download: "다운로드",
      appDownload: "앱 다운로드"
    },
    hero: {
      badge: "SnowPro 2.0 출시",
      titlePre: "스키 실력 향상의",
      titleHighlight: "새로운 기준",
      subtitle: "전문 강사와 연결하세요. AI 기반 비디오 분석으로 기술을 정교하게 다듬으세요. 카풀, 스키 버디, 커뮤니티 기능이 곧 출시됩니다.",
      ctaIos: "App Store",
      ctaIosNote: "iOS 15+ 지원",
      ctaAndroid: "Google Play",
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
      cta: "무료 분석 체험",
      demoPoints: [
        { comment: "턴 진입 시 무게중심이 너무 높습니다.", type: "correction" },
        { comment: "이 부분의 엣지 각도는 아주 좋습니다!", type: "praise" },
        { comment: "턴 탈출이 너무 빠릅니다. 폴라인을 더 바라보세요.", type: "correction" }
      ]
    },
    roadmap: {
      tag: "출시 예정",
      title: "올인원 스키 플랫폼",
      desc: "SnowPro는 단순한 분석 도구가 아닙니다. 스키 애호가를 위한 완벽한 생태계를 구축하고 있습니다.",
      status: "준비 중",
      features: [
        { title: "스키장 카풀", desc: "스키장 가는 길이 더 이상 외롭지 않습니다. 카풀로 이동하고 새 친구도 사귀세요." },
        { title: "스키 버디", desc: "비슷한 실력의 친구를 찾거나 고수에게 동반 라이딩을 요청하세요." },
        { title: "온라인 강좌", desc: "입문부터 최상급까지 체계적인 스키 강좌. 언제 어디서나 이론을 학습하세요." },
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
      productLinks: ["비디오 분석", "카풀", "강좌", "스토어"],
      support: "지원",
      supportLinks: ["도움말", "문의하기", "개인정보처리방침", "이용약관"],
      rights: "All rights reserved."
    },
    ctaBottom: {
      title: "스키 실력을 레벨업할 준비가 되셨나요?",
      desc: "SnowPro 커뮤니티에 가입하고 전문적인 분석을 경험해보세요.",
      btnIos: "App Store",
      btnAndroid: "Google Play"
    }
  },
  fr: {
    nav: {
      features: "Fonctionnalités",
      roadmap: "Feuille de route",
      about: "À propos",
      download: "Télécharger",
      appDownload: "Obtenir l'app"
    },
    hero: {
      badge: "SnowPro 2.0 est en ligne",
      titlePre: "Redéfinissez votre",
      titleHighlight: "Progression en Ski",
      subtitle: "Connectez-vous avec des instructeurs professionnels. Améliorez votre technique grâce à l'analyse vidéo assistée par IA. Covoiturage et communauté bientôt disponibles.",
      ctaIos: "App Store",
      ctaIosNote: "iOS 15+ requis",
      ctaAndroid: "Google Play",
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
      cta: "Essai Gratuit",
      demoPoints: [
        { comment: "Centre de gravité trop haut en entrée de virage.", type: "correction" },
        { comment: "Excellent angle de prise de carre ici !", type: "praise" },
        { comment: "Sortie de virage trop précoce, contrôlez votre vitesse.", type: "correction" }
      ]
    },
    roadmap: {
      tag: "Bientôt",
      title: "L'Écosystème Ski Complet",
      desc: "SnowPro est plus qu'un outil d'analyse. Nous construisons une plateforme complète pour les passionnés de ski.",
      status: "Bientôt",
      features: [
        { title: "Covoiturage", desc: "Trouvez facilement un trajet vers la station. Économique et convivial." },
        { title: "Partenaire de Ski", desc: "Trouvez des partenaires de même niveau ou réservez un pro." },
        { title: "Cours en Ligne", desc: "Tutoriels systématiques du débutant à l'expert. Apprenez la théorie n'importe où." },
        { title: "Boutique", desc: "Matériel et produits dérivés sélectionnés. Produits authentiques recommandés par des pros." },
        { title: "Communauté", desc: "Partagez vos sessions, discutez matériel et échangez des conseils." }
      ]
    },
    testimonials: {
      title: "Approuvé par les Skieurs",
      reviews: [
        { name: "Alex Zhang", role: "Skieur Intermédiaire", content: "L'analyse vidéo a mis le doigt sur mes problèmes d'équilibre instantanément !" },
        { name: "Sarah Li", role: "Snowboardeuse", content: "Outil très utile. J'ai hâte d'utiliser la fonction covoiturage." },
        { name: "Coach Mike", role: "Instructeur CASI Niveau 3", content: "SnowPro me permet de gérer efficacement les vidéos de mes élèves." }
      ]
    },
    footer: {
      tagline: "Passez au niveau supérieur. Votre partenaire ultime pour le ski.",
      product: "Produit",
      productLinks: ["Analyse Vidéo", "Covoiturage", "Cours", "Boutique"],
      support: "Support",
      supportLinks: ["Aide", "Contact", "Confidentialité", "Conditions"],
      rights: "Tous droits réservés."
    },
    ctaBottom: {
      title: "Prêt à progresser ?",
      desc: "Rejoignez la communauté SnowPro et profitez d'une analyse vidéo professionnelle.",
      btnIos: "App Store",
      btnAndroid: "Google Play"
    }
  },
  de: {
    nav: {
      features: "Funktionen",
      roadmap: "Roadmap",
      about: "Über uns",
      download: "Download",
      appDownload: "App holen"
    },
    hero: {
      badge: "SnowPro 2.0 ist live",
      titlePre: "Definieren Sie Ihren",
      titleHighlight: "Skifortschritt neu",
      subtitle: "Verbinden Sie sich mit professionellen Skilehrern. Verbessern Sie Ihre Technik durch KI-gestützte Videoanalyse. Fahrgemeinschaften und Community folgen bald.",
      ctaIos: "App Store",
      ctaIosNote: "Benötigt iOS 15+",
      ctaAndroid: "Google Play",
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
      cta: "Kostenlose Analyse testen",
      demoPoints: [
        { comment: "Schwerpunkt bei Kurveneingang zu hoch.", type: "correction" },
        { comment: "Hervorragender Kantenwinkel hier, Rhythmus beibehalten!", type: "praise" },
        { comment: "Kurvenausgang zu früh, Geschwindigkeit kontrollieren.", type: "correction" }
      ]
    },
    roadmap: {
      tag: "Demnächst",
      title: "Das komplette Ski-Ökosystem",
      desc: "SnowPro ist mehr als ein Analysetool. Wir bauen eine komplette Plattform für Skibegeisterte.",
      status: "Demnächst",
      features: [
        { title: "Fahrgemeinschaften", desc: "Finden Sie einfach eine Mitfahrgelegenheit zum Skigebiet." },
        { title: "Ski-Buddy", desc: "Finden Sie Partner mit ähnlichem Können oder buchen Sie einen Profi." },
        { title: "Online-Kurse", desc: "Systematische Tutorials vom Anfänger bis zum Experten." },
        { title: "Ausrüstungsshop", desc: "Ausgewählte Top-Ausrüstung und Merchandise. Authentische Produkte." },
        { title: "Community", desc: "Teilen Sie Ihre Läufe, diskutieren Sie über Ausrüstung und tauschen Sie Tipps aus." }
      ]
    },
    testimonials: {
      title: "Von Skifahrern geliebt",
      reviews: [
        { name: "Alex Zhang", role: "Fortgeschrittener", content: "Die Videoanalyse hat meine Gleichgewichtsprobleme sofort aufgezeigt!" },
        { name: "Sarah Li", role: "Snowboarder", content: "Sehr nützliches Tool. Ich freue mich auf die Fahrgemeinschaftsfunktion." },
        { name: "Coach Mike", role: "CASI Level 3 Trainer", content: "SnowPro ermöglicht es mir, Schülervideos effizient zu verwalten." }
      ]
    },
    footer: {
      tagline: "Bringen Sie Ihr Skifahren auf das nächste Level. Ihr ultimativer Partner.",
      product: "Produkt",
      productLinks: ["Videoanalyse", "Fahrgemeinschaft", "Kurse", "Shop"],
      support: "Support",
      supportLinks: ["Hilfe", "Kontakt", "Datenschutz", "AGB"],
      rights: "Alle Rechte vorbehalten."
    },
    ctaBottom: {
      title: "Bereit für den Aufstieg?",
      desc: "Treten Sie der SnowPro-Community bei und erleben Sie professionelle Videoanalyse.",
      btnIos: "App Store",
      btnAndroid: "Google Play"
    }
  }
};
