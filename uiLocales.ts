import { Language } from './locales';

export interface UIExtraTranslations {
  nav: {
    carpoolPass: string;
    liveTag: string;
  };
  hero: {
    scrollExplore: string;
    liveTelemetry: string;
    coachesValue: string;
    analysisValue: string;
    ratingValue: string;
    resortsLabel: string;
    resortsValue: string;
    previewHudTitle: string;
    edgeAngle: string;
    carveScore: string;
    gForce: string;
    coachVoiceActive: string;
  };
  video: {
    fileName: string;
    hudMode: string;
    frameStep: string;
    aiSkeleton: string;
    voiceTrack: string;
    edgeAngleLabel: string;
    hipAngulationLabel: string;
    speedLabel: string;
    turnPhaseLabel: string;
    turnPhases: [string, string, string];
    coachName: string;
    coachCert: string;
    interactiveHint: string;
  };
  carpool: {
    liveFeedBadge: string;
    verifiedDriver: string;
    routeMapLabel: string;
    gearSpaceConfirmed: string;
    instantMatch: string;
    departureIn: string;
    selectRouteHint: string;
    filterAll: string;
    filterSuv: string;
    filterSnowTires: string;
  };
  courses: {
    curriculumPreview: string;
    tokenEconomyBadge: string;
    lifetimeAccess: string;
    proCertified: string;
    previewCourse: string;
    enrolledCount: string;
    ratingLabel: string;
  };
  skibuddy: {
    activeSquadsBadge: string;
    targetLabel: string;
    joinBtn: string;
    joinedBtn: string;
    matchRate: string;
    squadStatusOpen: string;
    filterAll: string;
    filterCarving: string;
    filterPowder: string;
    filterPark: string;
  };
  roadmap: {
    phaseLabels: [string, string, string, string];
    ecosystemProgress: string;
    partnerResorts: string;
  };
  testimonials: {
    badge: string;
    subtitle: string;
    verifiedBadge: string;
    statsSatisfaction: string;
    statsActiveRiders: string;
    statsCountries: string;
  };
  cta: {
    badge: string;
    instantAccess: string;
    securityNote: string;
  };
}

export const uiExtraTranslations: Record<Language, UIExtraTranslations> = {
  zh: {
    nav: {
      carpoolPass: "拼车畅行卡",
      liveTag: "26/27 雪季"
    },
    hero: {
      scrollExplore: "向下滚动探索",
      liveTelemetry: "SNOW PRO 实时生态数据",
      coachesValue: "500+",
      analysisValue: "28,000+",
      ratingValue: "4.9 ★",
      resortsLabel: "覆盖雪场",
      resortsValue: "120+",
      previewHudTitle: "AI + 认证教练 实时姿态遥测",
      edgeAngle: "立刃角度",
      carveScore: "刻滑评分",
      gForce: "弯道离心力",
      coachVoiceActive: "教练语音轨同步中..."
    },
    video: {
      fileName: "2026-02-15_崇礼万龙_黑道刻滑.mp4",
      hudMode: "PRO 遥测视图",
      frameStep: "240 FPS 逐帧分析",
      aiSkeleton: "关节骨骼辅助线",
      voiceTrack: "教练原声点评轨",
      edgeAngleLabel: "实时立刃角",
      hipAngulationLabel: "髋部反弓角",
      speedLabel: "滑行速度",
      turnPhaseLabel: "弯道阶段",
      turnPhases: ["入弯引身 (Initiation)", "弯心深刃 (Apex Carve)", "出弯转换 (Transition)"],
      coachName: "Marcus Vogt",
      coachCert: "CSIA Level 4 考官",
      interactiveHint: "点击下方关键帧节点切换教练批注画面"
    },
    carpool: {
      liveFeedBadge: "实时发车大厅",
      verifiedDriver: "实名认证车主",
      routeMapLabel: "智能路线与板包空间匹配",
      gearSpaceConfirmed: "雪具空间已核验",
      instantMatch: "顺路雪友极速拼座",
      departureIn: "准时发车",
      selectRouteHint: "点击行程卡片查看车辆雪具装载详情",
      filterAll: "全部路线",
      filterSuv: "SUV / 顶箱",
      filterSnowTires: "四驱雪地胎"
    },
    courses: {
      curriculumPreview: "精选大师课大纲",
      tokenEconomyBadge: "代币解锁 · 永久回看",
      lifetimeAccess: "支持离线缓存与慢放",
      proCertified: "国际认证体系",
      previewCourse: "查看课程详情",
      enrolledCount: "名学员已解锁",
      ratingLabel: "课程好评"
    },
    skibuddy: {
      activeSquadsBadge: "雪搭子实时组队中",
      targetLabel: "今日目标：",
      joinBtn: "申请入队",
      joinedBtn: "已申请入队",
      matchRate: "同频匹配度",
      squadStatusOpen: "招募中",
      filterAll: "全部小队",
      filterCarving: "刻滑跟拍",
      filterPowder: "大山野雪",
      filterPark: "新手友爱"
    },
    roadmap: {
      phaseLabels: ["Q1 · 票务直连", "Q2 · 装备快租", "Q3 · 官方雪校", "Q4 · 极客社区"],
      ecosystemProgress: "路线图推进度",
      partnerResorts: "全球合作接洽雪场 45+"
    },
    testimonials: {
      badge: "全球雪友真实口碑",
      subtitle: "从第一次站上雪道的新手，到追求极限倾角的刻滑大神与国际认证教练，都在使用 Snow Pro。",
      verifiedBadge: "认证雪友",
      statsSatisfaction: "99.2% 满意度",
      statsActiveRiders: "50,000+ 活跃雪友",
      statsCountries: "覆盖 15+ 国家地区"
    },
    cta: {
      badge: "开启 26/27 巅峰雪季",
      instantAccess: "双端数据实时同步 · 免费下载注册",
      securityNote: "Apple App Store 官方认证 · Android 官方极速直链"
    }
  },
  en: {
    nav: {
      carpoolPass: "Carpool Pass",
      liveTag: "26/27 SEASON"
    },
    hero: {
      scrollExplore: "Scroll to Explore",
      liveTelemetry: "SNOW PRO LIVE ECOSYSTEM",
      coachesValue: "500+",
      analysisValue: "28,000+",
      ratingValue: "4.9 ★",
      resortsLabel: "Global Resorts",
      resortsValue: "120+",
      previewHudTitle: "Pro Biomechanical & Edge Telemetry",
      edgeAngle: "Edge Angle",
      carveScore: "Carve Score",
      gForce: "Turn G-Force",
      coachVoiceActive: "Coach Voice Commentary Synced..."
    },
    video: {
      fileName: "2026-02-15_Wanlong_EuroCarve_Run04.mp4",
      hudMode: "PRO HUD OVERLAY",
      frameStep: "240 FPS FRAME-BY-FRAME",
      aiSkeleton: "Vector Joint Vectors",
      voiceTrack: "Coach Voice Commentary",
      edgeAngleLabel: "Edge Angle",
      hipAngulationLabel: "Hip Angulation",
      speedLabel: "Velocity",
      turnPhaseLabel: "Turn Phase",
      turnPhases: ["Turn Initiation", "Apex Deep Carve", "Exit Transition"],
      coachName: "Marcus Vogt",
      coachCert: "CSIA Level 4 Examiner",
      interactiveHint: "Click any keyframe marker below to inspect frame telemetry"
    },
    carpool: {
      liveFeedBadge: "LIVE DEPARTURE BOARD",
      verifiedDriver: "Verified Driver",
      routeMapLabel: "Smart Route & Gear Capacity Radar",
      gearSpaceConfirmed: "Gear Space Verified",
      instantMatch: "Instant Rider Matching",
      departureIn: "On Schedule",
      selectRouteHint: "Select a trip card to inspect vehicle & ski rack specs",
      filterAll: "All Routes",
      filterSuv: "SUV / Roof Box",
      filterSnowTires: "AWD · Snow Tires"
    },
    courses: {
      curriculumPreview: "Pro Masterclass Series",
      tokenEconomyBadge: "Unlock with Tokens · Lifetime Access",
      lifetimeAccess: "Slow-Mo & Offline Ready",
      proCertified: "Certified Instructors",
      previewCourse: "Preview Curriculum",
      enrolledCount: "riders enrolled",
      ratingLabel: "Course Rating"
    },
    skibuddy: {
      activeSquadsBadge: "LIVE SQUAD MATCHMAKING",
      targetLabel: "Session Goal:",
      joinBtn: "Join Squad",
      joinedBtn: "Request Sent",
      matchRate: "Vibe Match",
      squadStatusOpen: "OPEN",
      filterAll: "All Squads",
      filterCarving: "Carving & Film",
      filterPowder: "Backcountry",
      filterPark: "Beginner Friendly"
    },
    roadmap: {
      phaseLabels: ["Phase 01 · Lift Passes", "Phase 02 · Pro Rentals", "Phase 03 · Ski Schools", "Phase 04 · Gear Hub"],
      ecosystemProgress: "Ecosystem Rollout",
      partnerResorts: "45+ Partner Resorts in Pipeline"
    },
    testimonials: {
      badge: "TRUSTED BY RIDERS WORLDWIDE",
      subtitle: "From first-day beginners to deep-trench carvers and certified examiners, thousands rely on Snow Pro every weekend.",
      verifiedBadge: "Verified Rider",
      statsSatisfaction: "99.2% Satisfaction",
      statsActiveRiders: "50,000+ Active Riders",
      statsCountries: "15+ Countries & Regions"
    },
    cta: {
      badge: "DROP INTO THE 26/27 SEASON",
      instantAccess: "Cross-Platform Sync · Free to Download",
      securityNote: "Official Apple App Store & Direct High-Speed APK"
    }
  },
  ja: {
    nav: {
      carpoolPass: "相乗りパス",
      liveTag: "26/27 シーズン"
    },
    hero: {
      scrollExplore: "スクロールして探索",
      liveTelemetry: "SNOW PRO ライブエコシステム",
      coachesValue: "500+",
      analysisValue: "28,000+",
      ratingValue: "4.9 ★",
      resortsLabel: "対応スキー場",
      resortsValue: "120+",
      previewHudTitle: "プロ骨格・エッジ角度テレメトリー",
      edgeAngle: "エッジ角度",
      carveScore: "カーブスコア",
      gForce: "ターンGフォース",
      coachVoiceActive: "コーチ音声解説を同期中..."
    },
    video: {
      fileName: "2026-02-15_Niseko_Carving_Run04.mp4",
      hudMode: "PRO HUD オーバーレイ",
      frameStep: "240 FPS コマ送り解析",
      aiSkeleton: "骨格ベクトル表示",
      voiceTrack: "コーチ音声トラック",
      edgeAngleLabel: "エッジ角",
      hipAngulationLabel: "股関節角度",
      speedLabel: "滑走速度",
      turnPhaseLabel: "ターン局面",
      turnPhases: ["ターン導入 (Initiation)", "マキシマム (Apex Carve)", "切り替え (Transition)"],
      coachName: "Marcus Vogt",
      coachCert: "CSIA Level 4 検定員",
      interactiveHint: "下のキーフレームをクリックしてコーチの描画と解説を表示"
    },
    carpool: {
      liveFeedBadge: "リアルタイム相乗りボード",
      verifiedDriver: "本人確認済ドライバー",
      routeMapLabel: "ルート＆板積載スペース照合",
      gearSpaceConfirmed: "板スペース確認済",
      instantMatch: "即時マッチング",
      departureIn: "定刻出発",
      selectRouteHint: "カードを選択して車両とキャリア詳細を確認",
      filterAll: "全ルート",
      filterSuv: "SUV / ルーフBOX",
      filterSnowTires: "4WD・スタッドレス"
    },
    courses: {
      curriculumPreview: "プロ認定マスタークラス",
      tokenEconomyBadge: "トークンで解禁・無期限視聴",
      lifetimeAccess: "スロー再生・オフライン対応",
      proCertified: "公認インストラクター",
      previewCourse: "カリキュラム詳細",
      enrolledCount: "名が受講中",
      ratingLabel: "評価"
    },
    skibuddy: {
      activeSquadsBadge: "スキー仲間リアルタイム募集",
      targetLabel: "目標：",
      joinBtn: "参加申請",
      joinedBtn: "申請済み",
      matchRate: "マッチ度",
      squadStatusOpen: "募集中",
      filterAll: "すべて",
      filterCarving: "カービング撮影",
      filterPowder: "バックカントリー",
      filterPark: "初心者歓迎"
    },
    roadmap: {
      phaseLabels: ["Phase 01 · リフト券", "Phase 02 · レンタル", "Phase 03 · 公認スクール", "Phase 04 · ギアショップ"],
      ecosystemProgress: "開発ステータス",
      partnerResorts: "45以上のスキー場と提携交渉中"
    },
    testimonials: {
      badge: "世界中のスキーヤーから高評価",
      subtitle: "初心者からエキスパート、公認イントラまで、毎週末ゲレンデで愛用されています。",
      verifiedBadge: "認証ユーザー",
      statsSatisfaction: "99.2% 満足度",
      statsActiveRiders: "50,000+ ユーザー",
      statsCountries: "15+ カ国で展開"
    },
    cta: {
      badge: "26/27 シーズンへドロップイン",
      instantAccess: "iOS / Android 同期・無料ダウンロード",
      securityNote: "App Store 公式 & 高速ダイレクト APK"
    }
  },
  ko: {
    nav: {
      carpoolPass: "카풀 패스",
      liveTag: "26/27 시즌"
    },
    hero: {
      scrollExplore: "스크롤하여 탐색",
      liveTelemetry: "SNOW PRO 라이브 생태계",
      coachesValue: "500+",
      analysisValue: "28,000+",
      ratingValue: "4.9 ★",
      resortsLabel: "제휴 리조트",
      resortsValue: "120+",
      previewHudTitle: "프로 엣지 각도 & 자세 텔레메트리",
      edgeAngle: "엣지 각도",
      carveScore: "카빙 점수",
      gForce: "턴 G-포스",
      coachVoiceActive: "코치 음성 피드백 동기화 중..."
    },
    video: {
      fileName: "2026-02-15_Yongpyong_Carving_Run04.mp4",
      hudMode: "PRO HUD 오버레이",
      frameStep: "240 FPS 프레임 분석",
      aiSkeleton: "관절 벡터 가이드",
      voiceTrack: "코치 음성 트랙",
      edgeAngleLabel: "엣지 각도",
      hipAngulationLabel: "힙 앵귤레이션",
      speedLabel: "활주 속도",
      turnPhaseLabel: "턴 단계",
      turnPhases: ["턴 진입 (Initiation)", "최대 기울기 (Apex)", "트랜지션 (Transition)"],
      coachName: "Marcus Vogt",
      coachCert: "CSIA Level 4 심사위원",
      interactiveHint: "아래 키프레임 마커를 클릭하여 프레임별 분석을 확인하세요"
    },
    carpool: {
      liveFeedBadge: "실시간 카풀 피드",
      verifiedDriver: "인증 드라이버",
      routeMapLabel: "스마트 경로 & 장비 적재 매칭",
      gearSpaceConfirmed: "보드백 공간 확인됨",
      instantMatch: "빠른 동승 매칭",
      departureIn: "정시 출발",
      selectRouteHint: "일정을 클릭하여 차량 및 루프박스 정보를 확인하세요",
      filterAll: "전체 경로",
      filterSuv: "SUV / 루프박스",
      filterSnowTires: "4WD · 스노우타이어"
    },
    courses: {
      curriculumPreview: "공인 코치 마스터클래스",
      tokenEconomyBadge: "토큰 소장 · 평생 무제한 복습",
      lifetimeAccess: "슬로우모션 지원",
      proCertified: "국제 공인 강사진",
      previewCourse: "커리큘럼 보기",
      enrolledCount: "명 수강 중",
      ratingLabel: "평점"
    },
    skibuddy: {
      activeSquadsBadge: "실시간 스키버디 모집",
      targetLabel: "목표:",
      joinBtn: "팀 합류하기",
      joinedBtn: "신청 완료",
      matchRate: "매칭률",
      squadStatusOpen: "모집중",
      filterAll: "전체",
      filterCarving: "카빙 & 촬영",
      filterPowder: "파우더/백컨트리",
      filterPark: "초보 환영"
    },
    roadmap: {
      phaseLabels: ["Phase 01 · 리프트권", "Phase 02 · 장비 렌탈", "Phase 03 · 공식 스키학교", "Phase 04 · 커뮤니티 샵"],
      ecosystemProgress: "로드맵 진행률",
      partnerResorts: "45+ 글로벌 리조트 파트너십"
    },
    testimonials: {
      badge: "전 세계 라이더들의 실제 후기",
      subtitle: "입문자부터 상급 카버, 공인 코치까지 매주 슬로프에서 함께합니다.",
      verifiedBadge: "인증 라이더",
      statsSatisfaction: "99.2% 만족도",
      statsActiveRiders: "50,000+ 활성 유저",
      statsCountries: "15+ 국가 서비스"
    },
    cta: {
      badge: "26/27 시즌을 시작하세요",
      instantAccess: "크로스 플랫폼 동기화 · 무료 다운로드",
      securityNote: "Apple App Store 공식 & Android 다이렉트 APK"
    }
  },
  fr: {
    nav: {
      carpoolPass: "Pass Covoiturage",
      liveTag: "SAISON 26/27"
    },
    hero: {
      scrollExplore: "Défiler pour explorer",
      liveTelemetry: "ÉCOSYSTÈME SNOW PRO EN DIRECT",
      coachesValue: "500+",
      analysisValue: "28 000+",
      ratingValue: "4.9 ★",
      resortsLabel: "Stations",
      resortsValue: "120+",
      previewHudTitle: "Télémétrie Biomécanique & Angle de Carre",
      edgeAngle: "Angle de Carre",
      carveScore: "Score Carve",
      gForce: "Force G",
      coachVoiceActive: "Audio du coach synchronisé..."
    },
    video: {
      fileName: "2026-02-15_Chamonix_Carving_Run04.mp4",
      hudMode: "AFFICHAGE HUD PRO",
      frameStep: "240 FPS IMAGE PAR IMAGE",
      aiSkeleton: "Vecteurs Articulaires",
      voiceTrack: "Voix du Moniteur",
      edgeAngleLabel: "Angle de carre",
      hipAngulationLabel: "Angulation hanche",
      speedLabel: "Vitesse",
      turnPhaseLabel: "Phase de virage",
      turnPhases: ["Déclenchement", "Point d'Apex", "Transition"],
      coachName: "Marcus Vogt",
      coachCert: "Examinateur CSIA Niv. 4",
      interactiveHint: "Cliquez sur un repère temporel pour inspecter l'analyse"
    },
    carpool: {
      liveFeedBadge: "DÉPARTS EN DIRECT",
      verifiedDriver: "Conducteur Vérifié",
      routeMapLabel: "Radar d'Itinéraire & Capacité Skis",
      gearSpaceConfirmed: "Espace Skis Vérifié",
      instantMatch: "Covoiturage Instantané",
      departureIn: "À l'heure",
      selectRouteHint: "Sélectionnez un trajet pour voir les détails du véhicule",
      filterAll: "Tous",
      filterSuv: "SUV / Coffre de toit",
      filterSnowTires: "4x4 · Pneus Neige"
    },
    courses: {
      curriculumPreview: "Masterclasses Certifiées",
      tokenEconomyBadge: "Débloquer par Jetons · Accès à Vie",
      lifetimeAccess: "Ralenti & Hors-ligne",
      proCertified: "Moniteurs Diplômés",
      previewCourse: "Voir le programme",
      enrolledCount: "élèves inscrits",
      ratingLabel: "Note"
    },
    skibuddy: {
      activeSquadsBadge: "GROUPES EN DIRECT",
      targetLabel: "Objectif :",
      joinBtn: "Rejoindre",
      joinedBtn: "Demande envoyée",
      matchRate: "Affinité",
      squadStatusOpen: "OUVERT",
      filterAll: "Tous",
      filterCarving: "Carving & Vidéo",
      filterPowder: "Hors-piste",
      filterPark: "Débutants"
    },
    roadmap: {
      phaseLabels: ["Phase 01 · Forfaits", "Phase 02 · Location Pro", "Phase 03 · Écoles de Ski", "Phase 04 · Boutique"],
      ecosystemProgress: "Avancement",
      partnerResorts: "45+ Stations Partenaires"
    },
    testimonials: {
      badge: "ADORÉ PAR LES SKIEURS",
      subtitle: "Des débutants aux experts du carving et moniteurs certifiés.",
      verifiedBadge: "Skieur Vérifié",
      statsSatisfaction: "99.2% Satisfaction",
      statsActiveRiders: "50 000+ Skieurs",
      statsCountries: "15+ Pays"
    },
    cta: {
      badge: "PRÊT POUR LA SAISON 26/27",
      instantAccess: "Synchronisation Multi-plateforme · Téléchargement Gratuit",
      securityNote: "App Store Officiel & Téléchargement Direct APK"
    }
  },
  de: {
    nav: {
      carpoolPass: "Mitfahr-Pass",
      liveTag: "SAISON 26/27"
    },
    hero: {
      scrollExplore: "Scrollen zum Entdecken",
      liveTelemetry: "SNOW PRO LIVE-ÖKOSYSTEM",
      coachesValue: "500+",
      analysisValue: "28.000+",
      ratingValue: "4.9 ★",
      resortsLabel: "Skigebiete",
      resortsValue: "120+",
      previewHudTitle: "Biomedizinische & Aufkantwinkel-Telemetrie",
      edgeAngle: "Aufkantwinkel",
      carveScore: "Carve-Score",
      gForce: "Fliehkraft",
      coachVoiceActive: "Coach-Sprachkommentar aktiv..."
    },
    video: {
      fileName: "2026-02-15_Zermatt_Carving_Run04.mp4",
      hudMode: "PRO HUD-ANSICHT",
      frameStep: "240 FPS EINZELBILD",
      aiSkeleton: "Gelenkvektoren",
      voiceTrack: "Coach-Audio",
      edgeAngleLabel: "Aufkantwinkel",
      hipAngulationLabel: "Hüftknick",
      speedLabel: "Tempo",
      turnPhaseLabel: "Schwungphase",
      turnPhases: ["Schwungeinleitung", "Scheitelpunkt (Apex)", "Kantenwechsel"],
      coachName: "Marcus Vogt",
      coachCert: "CSIA Level 4 Prüfer",
      interactiveHint: "Klicke unten auf einen Zeitmarker für die Detailanalyse"
    },
    carpool: {
      liveFeedBadge: "LIVE-MITFAHRZENTRALE",
      verifiedDriver: "Verifizierter Fahrer",
      routeMapLabel: "Routen- & Skiraum-Matching",
      gearSpaceConfirmed: "Skiraum bestätigt",
      instantMatch: "Sofort-Matching",
      departureIn: "Pünktlich",
      selectRouteHint: "Fahrt auswählen für Fahrzeug- & Dachbox-Details",
      filterAll: "Alle Routen",
      filterSuv: "SUV / Dachbox",
      filterSnowTires: "Allrad · Winterreifen"
    },
    courses: {
      curriculumPreview: "Zertifizierte Meisterkurse",
      tokenEconomyBadge: "Mit Tokens freischalten · Lebenslanger Zugriff",
      lifetimeAccess: "Zeitlupe & Offline",
      proCertified: "Geprüfte Skilehrer",
      previewCourse: "Lehrplan ansehen",
      enrolledCount: "Teilnehmer",
      ratingLabel: "Bewertung"
    },
    skibuddy: {
      activeSquadsBadge: "LIVE-GRUPPENSUCHE",
      targetLabel: "Ziel:",
      joinBtn: "Beitreten",
      joinedBtn: "Angefragt",
      matchRate: "Match",
      squadStatusOpen: "OFFEN",
      filterAll: "Alle",
      filterCarving: "Carving & Video",
      filterPowder: "Freeride",
      filterPark: "Einsteiger"
    },
    roadmap: {
      phaseLabels: ["Phase 01 · Skipässe", "Phase 02 · Skiverleih", "Phase 03 · Skischulen", "Phase 04 · Gear-Shop"],
      ecosystemProgress: "Ökosystem-Fortschritt",
      partnerResorts: "45+ Partner-Skigebiete"
    },
    testimonials: {
      badge: "VON SKIFAHRERN GELIEBT",
      subtitle: "Vom Einsteiger bis zum Carving-Profi und staatlich geprüften Skilehrer.",
      verifiedBadge: "Verifiziert",
      statsSatisfaction: "99.2% Zufriedenheit",
      statsActiveRiders: "50.000+ Fahrer",
      statsCountries: "15+ Länder"
    },
    cta: {
      badge: "START IN DIE SAISON 26/27",
      instantAccess: "Plattformübergreifend · Kostenloser Download",
      securityNote: "Offizieller Apple App Store & Direkter APK-Download"
    }
  },
  es: {
    nav: {
      carpoolPass: "Pase Carpool",
      liveTag: "TEMPORADA 26/27"
    },
    hero: {
      scrollExplore: "Desliza para explorar",
      liveTelemetry: "ECOSISTEMA SNOW PRO EN VIVO",
      coachesValue: "500+",
      analysisValue: "28,000+",
      ratingValue: "4.9 ★",
      resortsLabel: "Estaciones",
      resortsValue: "120+",
      previewHudTitle: "Telemetría Biomecánica y Ángulo de Canto",
      edgeAngle: "Ángulo de Canto",
      carveScore: "Nivel Carve",
      gForce: "Fuerza G",
      coachVoiceActive: "Voz del entrenador sincronizada..."
    },
    video: {
      fileName: "2026-02-15_Baqueira_Carving_Run04.mp4",
      hudMode: "VISTA HUD PRO",
      frameStep: "240 FPS CUADRO A CUADRO",
      aiSkeleton: "Vectores Articulares",
      voiceTrack: "Voz del Instructor",
      edgeAngleLabel: "Ángulo de canto",
      hipAngulationLabel: "Angulación cadera",
      speedLabel: "Velocidad",
      turnPhaseLabel: "Fase de giro",
      turnPhases: ["Inicio de giro", "Ápice del giro", "Transición"],
      coachName: "Marcus Vogt",
      coachCert: "Examinador CSIA Niv. 4",
      interactiveHint: "Haz clic en los marcadores inferiores para ver la telemetría"
    },
    carpool: {
      liveFeedBadge: "SALIDAS EN VIVO",
      verifiedDriver: "Conductor Verificado",
      routeMapLabel: "Radar de Ruta y Espacio de Esquís",
      gearSpaceConfirmed: "Espacio Confirmado",
      instantMatch: "Emparejamiento Rápido",
      departureIn: "En horario",
      selectRouteHint: "Selecciona una ruta para ver detalles del vehículo",
      filterAll: "Todas",
      filterSuv: "SUV / Portaequipajes",
      filterSnowTires: "4x4 · Neumáticos Nieve"
    },
    courses: {
      curriculumPreview: "Masterclasses Certificadas",
      tokenEconomyBadge: "Desbloqueo con Tokens · Acceso de por Vida",
      lifetimeAccess: "Cámara Lenta y Offline",
      proCertified: "Instructores Oficiales",
      previewCourse: "Ver Temario",
      enrolledCount: "estudiantes",
      ratingLabel: "Valoración"
    },
    skibuddy: {
      activeSquadsBadge: "GRUPOS ACTIVOS EN VIVO",
      targetLabel: "Objetivo:",
      joinBtn: "Unirse al grupo",
      joinedBtn: "Solicitud enviada",
      matchRate: "Afinidad",
      squadStatusOpen: "ABIERTO",
      filterAll: "Todos",
      filterCarving: "Carving y Video",
      filterPowder: "Fuera de Pista",
      filterPark: "Principiantes"
    },
    roadmap: {
      phaseLabels: ["Fase 01 · Forfaits", "Fase 02 · Alquiler Pro", "Fase 03 · Escuelas", "Fase 04 · Tienda"],
      ecosystemProgress: "Desarrollo",
      partnerResorts: "45+ Estaciones Asociadas"
    },
    testimonials: {
      badge: "RECOMENDADO POR ESQUIADORES",
      subtitle: "Desde principiantes hasta expertos en carving e instructores certificados.",
      verifiedBadge: "Verificado",
      statsSatisfaction: "99.2% Satisfacción",
      statsActiveRiders: "50,000+ Riders",
      statsCountries: "15+ Países"
    },
    cta: {
      badge: "VIVE LA TEMPORADA 26/27",
      instantAccess: "Sincronización Total · Descarga Gratuita",
      securityNote: "Apple App Store Oficial y Descarga Directa APK"
    }
  },
  ru: {
    nav: {
      carpoolPass: "Карпул Пасс",
      liveTag: "СЕЗОН 26/27"
    },
    hero: {
      scrollExplore: "Листайте вниз",
      liveTelemetry: "ЭКОСИСТЕМА SNOW PRO LIVE",
      coachesValue: "500+",
      analysisValue: "28 000+",
      ratingValue: "4.9 ★",
      resortsLabel: "Курорты",
      resortsValue: "120+",
      previewHudTitle: "Биомеханика и Телеметрия Угла Закантовки",
      edgeAngle: "Угол канта",
      carveScore: "Оценка карва",
      gForce: "Перегрузка G",
      coachVoiceActive: "Голос тренера синхронизирован..."
    },
    video: {
      fileName: "2026-02-15_RosaKhutor_Carving_Run04.mp4",
      hudMode: "PRO HUD ТЕЛЕМЕТРИЯ",
      frameStep: "240 FPS ПОКАДРОВО",
      aiSkeleton: "Векторы суставов",
      voiceTrack: "Голос инструктора",
      edgeAngleLabel: "Угол канта",
      hipAngulationLabel: "Ангуляция",
      speedLabel: "Скорость",
      turnPhaseLabel: "Фаза дуги",
      turnPhases: ["Инициация дуги", "Апекс поворота", "Перекантовка"],
      coachName: "Marcus Vogt",
      coachCert: "Экзаменатор CSIA Lv.4",
      interactiveHint: "Нажмите на маркер таймлайна для просмотра разбора"
    },
    carpool: {
      liveFeedBadge: "АКТИВНЫЕ ПОЕЗДКИ",
      verifiedDriver: "Проверенный водитель",
      routeMapLabel: "Маршруты и багажник для снаряжения",
      gearSpaceConfirmed: "Место под чехлы",
      instantMatch: "Быстрый попутчик",
      departureIn: "По расписанию",
      selectRouteHint: "Выберите карточку маршрута для деталей авто",
      filterAll: "Все маршруты",
      filterSuv: "SUV / Бокс на крыше",
      filterSnowTires: "4WD · Зимние шины"
    },
    courses: {
      curriculumPreview: "Мастер-классы от профи",
      tokenEconomyBadge: "Доступ за токены · Навсегда",
      lifetimeAccess: "Замедление и офлайн",
      proCertified: "Сертифицированные тренеры",
      previewCourse: "Программа курса",
      enrolledCount: "учеников",
      ratingLabel: "Рейтинг"
    },
    skibuddy: {
      activeSquadsBadge: "ПОИСК КОМПАНИИ LIVE",
      targetLabel: "Цель:",
      joinBtn: "Вступить",
      joinedBtn: "Заявка подана",
      matchRate: "Совпадение",
      squadStatusOpen: "ОТКРЫТО",
      filterAll: "Все группы",
      filterCarving: "Карвинг и съемка",
      filterPowder: "Фрирайд",
      filterPark: "Новички"
    },
    roadmap: {
      phaseLabels: ["Этап 01 · Ски-пассы", "Этап 02 · Прокат", "Этап 03 · Школы", "Этап 04 · Магазин"],
      ecosystemProgress: "Развитие экосистемы",
      partnerResorts: "45+ курортов-партнеров"
    },
    testimonials: {
      badge: "ВЫБОР РАЙДЕРОВ ПО ВСЕМУ МИРУ",
      subtitle: "От новичков до экспертов карвинга и сертифицированных инструкторов.",
      verifiedBadge: "Проверенный райдер",
      statsSatisfaction: "99.2% довольных",
      statsActiveRiders: "50 000+ райдеров",
      statsCountries: "15+ стран"
    },
    cta: {
      badge: "ВРЫВАЙТЕСЬ В СЕЗОН 26/27",
      instantAccess: "Синхронизация iOS и Android · Бесплатно",
      securityNote: "Официальный App Store и прямая загрузка APK"
    }
  }
};
