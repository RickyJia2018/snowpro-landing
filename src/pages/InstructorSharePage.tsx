import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { ArrowUpRight, Award, MapPin, Star, Calendar, MessageSquare, Download, Play, ShieldCheck } from 'lucide-react';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://peakpal-server-786618190531.us-west2.run.app";

// Localized strings for this specific share page
const pageTranslations: Record<string, any> = {
  zh: {
    loading: "正在加载教练名片...",
    errorTitle: "未找到教练",
    errorDesc: "抱歉，未找到该教练的信息，请确认链接是否正确。",
    openApp: "打开 SnowPro App 预约",
    wechatTip: "微信内无法直接唤起",
    wechatDesc: "请点击右上角 •••\n选择在浏览器中打开",
    certified: "认证教练",
    lessons: "授课 {n} 课时",
    reviews: "{n} 条评价",
    baseAt: "驻场雪场",
    teachingSince: "教龄自 {n} 年",
    skiingSince: "雪龄自 {n} 年",
    selfIntroEmpty: "这位滑雪教练很神秘，还没有写个人介绍~",
    downloadTitle: "下载 SnowPro App",
    downloadDesc: "立即下载客户端，预约该教练并享受专业滑雪视频点评",
    downloadIos: "在 App Store 下载",
    downloadAndroid: "直接下载 Android APK",
    downloadGooglePlay: "在 Google Play 下载",
    activeStatus: "接单中",
    inactiveStatus: "暂停接单",
    priceText: "授课价格",
    rating: "评分"
  },
  en: {
    loading: "Loading instructor profile...",
    errorTitle: "Instructor Not Found",
    errorDesc: "Sorry, we couldn't find this instructor's profile. Please verify the link.",
    openApp: "Open SnowPro App to Book",
    wechatTip: "Cannot open inside WeChat",
    wechatDesc: "Please click the top-right •••\nand select 'Open in Browser'",
    certified: "Certified Coach",
    lessons: "{n} lessons",
    reviews: "{n} reviews",
    baseAt: "Resort base",
    teachingSince: "Teaching since {n}",
    skiingSince: "Skiing since {n}",
    selfIntroEmpty: "This instructor is mysterious and has not written an introduction yet~",
    downloadTitle: "Get SnowPro App",
    downloadDesc: "Download our app now to book this coach and get professional video coaching.",
    downloadIos: "Download on App Store",
    downloadAndroid: "Direct APK Download",
    downloadGooglePlay: "Get it on Google Play",
    activeStatus: "Available",
    inactiveStatus: "Unavailable",
    priceText: "Price",
    rating: "Rating"
  }
};

interface PublicInstructor {
  user_id: string | number;
  username: string;
  avatar_url: string;
  self_intro: string;
  price: number;
  star: number;
  come_from: string;
  base_at: string;
  total_reviews: string | number;
  media: string[];
  tags: string[];
  active: boolean;
  total_teached: string | number;
  teaching_since?: number;
  skiing_since?: number;
}

interface Certificate {
  id: number;
  name: string;
  acronym: string;
  level?: number;
  prove_image: string;
  status: number;
}

interface GetPublicInstructorResponse {
  instructor: PublicInstructor;
  certificates?: Certificate[];
}

export default function InstructorSharePage() {
  const { id } = useParams<{ id: string }>();
  const { language } = useLanguage();
  
  const t = pageTranslations[language] || pageTranslations['en'];

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState<GetPublicInstructorResponse | null>(null);
  const [showWechatOverlay, setShowWechatOverlay] = useState(false);
  
  // App deep link to open the specific instructor detail
  const appDeepLink = `snowpro://instructors/${id}`;
  const appStoreLink = "https://apps.apple.com/ca/app/snow-pro/id6754150275";
  const apkDownloadLink = "https://storage.googleapis.com/snowpro-bucket-public/snowpro.apk";
  const playStoreLink = "https://play.google.com/store/apps/details?id=com.googuar.snowpro";

  useEffect(() => {
    // Detect environment
    const ua = navigator.userAgent;
    const isWeChat = /MicroMessenger/i.test(ua);
    const isIOS = /iPad|iPhone|iPod/.test(ua) && !(window as any).MSStream;
    const isAndroid = /Android/i.test(ua);

    if (isWeChat) {
      setShowWechatOverlay(true);
    } else {
      // Auto-trigger deep link attempt if not in WeChat
      window.location.href = appDeepLink;
    }

    // Fetch public instructor details
    const fetchInstructor = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/v1/public/instructors/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch instructor');
        }
        const json = await response.json();
        
        // Defensively mapping both snake_case and camelCase just in case serialization differs
        const instructorRaw = json.instructor || json;
        const normalizedInstructor: PublicInstructor = {
          user_id: instructorRaw.user_id || instructorRaw.userId || id || '',
          username: instructorRaw.username || instructorRaw.userName || '',
          avatar_url: instructorRaw.avatar_url || instructorRaw.avatarUrl || '',
          self_intro: instructorRaw.self_intro || instructorRaw.selfIntro || '',
          price: typeof instructorRaw.price !== 'undefined' ? instructorRaw.price : 0,
          star: typeof instructorRaw.star !== 'undefined' ? instructorRaw.star : 0,
          come_from: instructorRaw.come_from || instructorRaw.comeFrom || '',
          base_at: instructorRaw.base_at || instructorRaw.baseAt || '',
          total_reviews: typeof instructorRaw.total_reviews !== 'undefined' ? instructorRaw.total_reviews : (instructorRaw.totalReviews || 0),
          media: instructorRaw.media || [],
          tags: instructorRaw.tags || [],
          active: typeof instructorRaw.active !== 'undefined' ? instructorRaw.active : true,
          total_teached: typeof instructorRaw.total_teached !== 'undefined' ? instructorRaw.total_teached : (instructorRaw.totalTeached || 0),
          teaching_since: instructorRaw.teaching_since || instructorRaw.teachingSince,
          skiing_since: instructorRaw.skiing_since || instructorRaw.skiingSince,
        };

        const certificatesRaw = json.certificates || [];
        const normalizedCertificates = certificatesRaw.map((c: any) => ({
          id: c.id,
          name: c.name,
          acronym: c.acronym,
          level: c.level,
          prove_image: c.prove_image || c.proveImage || '',
          status: c.status
        }));

        setData({
          instructor: normalizedInstructor,
          certificates: normalizedCertificates
        });
      } catch (err) {
        console.error("Error fetching instructor details:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchInstructor();
    }
  }, [id, appDeepLink]);

  const handleOpenApp = () => {
    window.location.href = appDeepLink;
  };

  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-cyan-900 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center space-y-6">
          <div className="flex justify-center">
            <div className="w-16 h-16 border-4 border-cyan-400/20 border-t-cyan-400 rounded-full animate-spin"></div>
          </div>
          <p className="text-cyan-200 font-medium animate-pulse">{t.loading}</p>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-cyan-900 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center space-y-6 text-white">
          <div className="w-20 h-20 bg-red-500/10 border border-red-500/20 rounded-full flex items-center justify-center mx-auto text-red-400">
            <ShieldCheck className="w-10 h-10 rotate-180" />
          </div>
          <h1 className="text-2xl font-bold">{t.errorTitle}</h1>
          <p className="text-slate-300 text-sm leading-relaxed">{t.errorDesc}</p>
          <a
            href="/"
            className="inline-block bg-white/10 border border-white/20 px-6 py-2 rounded-xl text-sm font-medium hover:bg-white/20 transition-colors"
          >
            返回首页
          </a>
        </div>
      </div>
    );
  }

  const { instructor, certificates = [] } = data;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-cyan-900 flex flex-col justify-between p-4 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Main card container */}
      <main className="w-full max-w-md mx-auto my-auto z-10 space-y-6 pt-4">
        
        {/* Logo/Branding Header */}
        <div className="flex items-center justify-center space-x-3 text-white">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/20">
            <span className="font-black text-sm tracking-tighter">SP</span>
          </div>
          <span className="text-xl font-black tracking-wider bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent">SnowPro</span>
        </div>

        {/* Coach micro-card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl rounded-3xl overflow-hidden text-white relative">
          
          {/* Cover media or decorative background */}
          <div className="h-28 bg-gradient-to-r from-blue-900/60 to-cyan-950/60 relative overflow-hidden">
            {instructor.media && instructor.media.length > 0 ? (
              <img 
                src={instructor.media[0]} 
                alt="Coach action" 
                className="w-full h-full object-cover opacity-40 filter blur-xs"
              />
            ) : (
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M0,80 L20,60 L40,80 L70,40 L100,70 L100,100 L0,100 Z" fill="white" />
                </svg>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
          </div>

          {/* User profile details overlapping the cover */}
          <div className="px-6 pb-6 relative">
            <div className="flex justify-between items-end -translate-y-8">
              
              {/* Avatar */}
              <div className="relative">
                <img 
                  src={instructor.avatar_url || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&h=120&q=80"} 
                  alt={instructor.username} 
                  className="w-20 h-20 rounded-2xl object-cover border-3 border-slate-900 ring-4 ring-cyan-500/30 shadow-xl"
                />
                {instructor.active && (
                  <span className="absolute bottom-0 right-0 block h-4 w-4 rounded-full ring-2 ring-slate-900 bg-green-400">
                    <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75"></span>
                  </span>
                )}
              </div>

              {/* Status Badge */}
              <div className="bg-slate-900/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-xs font-semibold text-cyan-300 flex items-center space-x-1">
                <span className={`w-1.5 h-1.5 rounded-full ${instructor.active ? 'bg-green-400' : 'bg-gray-400'}`}></span>
                <span>{instructor.active ? t.activeStatus : t.inactiveStatus}</span>
              </div>
            </div>

            {/* Coach info */}
            <div className="-mt-4 space-y-4">
              <div>
                <div className="flex items-center space-x-2">
                  <h2 className="text-2xl font-bold tracking-wide">{instructor.username}</h2>
                  <span className="bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 text-[10px] px-2 py-0.5 rounded-full font-black uppercase tracking-wider flex items-center shadow-md shadow-amber-500/10">
                    <Award className="w-3 h-3 mr-0.5 fill-slate-950" />
                    {t.certified}
                  </span>
                </div>
                
                {instructor.come_from && (
                  <p className="text-slate-400 text-xs mt-1">{instructor.come_from}</p>
                )}
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-2 bg-white/5 rounded-2xl p-3 border border-white/5 text-center">
                <div>
                  <p className="text-[10px] text-slate-400 font-medium">{t.rating}</p>
                  <div className="flex items-center justify-center text-amber-400 font-bold mt-0.5">
                    <Star className="w-3.5 h-3.5 fill-amber-400 mr-0.5" />
                    <span className="text-sm">{(instructor.star / 10).toFixed(1)}</span>
                  </div>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-medium">已授课</p>
                  <p className="text-sm font-bold text-cyan-300 mt-0.5">
                    {instructor.total_teached} <span className="text-[10px] font-normal text-slate-400">课时</span>
                  </p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-medium">教龄/雪龄</p>
                  <p className="text-sm font-bold text-cyan-300 mt-0.5">
                    {instructor.teaching_since ? `${new Date().getFullYear() - instructor.teaching_since}年` : '-'}
                  </p>
                </div>
              </div>

              {/* Certifications */}
              {certificates.length > 0 && (
                <div className="space-y-1.5">
                  <div className="flex items-center text-xs text-slate-400 space-x-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                    <span>资质认证</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {certificates.map((cert) => (
                      <span 
                        key={cert.id} 
                        className="bg-cyan-500/10 text-cyan-200 border border-cyan-400/20 px-2.5 py-1 rounded-lg text-xs font-semibold"
                        title={cert.name}
                      >
                        {cert.acronym} {cert.level ? `Level ${cert.level}` : ''}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Base Resort */}
              {instructor.base_at && (
                <div className="flex items-center space-x-2 text-sm bg-white/5 p-3 rounded-2xl border border-white/5">
                  <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span className="text-slate-400 text-xs">{t.baseAt}:</span>
                  <span className="font-semibold text-slate-200 text-xs">{instructor.base_at}</span>
                </div>
              )}

              {/* Bio */}
              <div className="space-y-1.5">
                <div className="flex items-center text-xs text-slate-400 space-x-1">
                  <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
                  <span>自我介绍</span>
                </div>
                <p className="text-slate-300 text-xs leading-relaxed bg-white/3 p-3 rounded-2xl border border-white/5 italic">
                  {instructor.self_intro || t.selfIntroEmpty}
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* Dynamic CTAs / Download buttons */}
        <div className="space-y-3">
          <button 
            onClick={handleOpenApp}
            className="w-full bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-400 hover:from-blue-600 hover:to-teal-500 active:scale-98 transition-all duration-200 font-bold py-3.5 px-8 rounded-2xl shadow-xl shadow-cyan-500/25 text-white flex items-center justify-center space-x-2"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>{t.openApp}</span>
          </button>

          <div className="pt-2 text-center">
            <h3 className="text-sm font-semibold text-slate-300">{t.downloadTitle}</h3>
            <p className="text-[11px] text-slate-400 mt-0.5">{t.downloadDesc}</p>
          </div>

          <div className="grid grid-cols-1 gap-2">
            {isIOS ? (
              <a 
                href={appStoreLink}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-white/5 hover:bg-white/10 border border-white/15 active:scale-98 transition-all duration-150 font-bold py-3 px-6 rounded-2xl text-white flex items-center justify-center space-x-2"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span className="text-xs">{t.downloadIos}</span>
              </a>
            ) : (
              <>
                <a 
                  href={apkDownloadLink}
                  download="snowpro.apk"
                  className="w-full bg-white/5 hover:bg-white/10 border border-white/15 active:scale-98 transition-all duration-150 font-bold py-3 px-6 rounded-2xl text-white flex items-center justify-center space-x-2"
                >
                  <Download className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs">{t.downloadAndroid}</span>
                </a>
                <a 
                  href={playStoreLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-white/5 hover:bg-white/10 border border-white/15 active:scale-98 transition-all duration-150 py-2.5 px-6 rounded-2xl text-white flex items-center justify-center space-x-2"
                >
                  <span className="text-[10px] text-slate-400">{t.downloadGooglePlay}</span>
                </a>
              </>
            )}
          </div>
        </div>

      </main>

      {/* Elegant minimalist footer */}
      <footer className="w-full text-center py-4 z-10 text-slate-500 text-[10px] tracking-wide mt-8">
        &copy; {new Date().getFullYear()} SnowPro. All Rights Reserved.
      </footer>

      {/* WeChat Overlay */}
      {showWechatOverlay && (
        <div 
          onClick={() => setShowWechatOverlay(false)}
          className="fixed inset-0 bg-slate-950/90 backdrop-blur-md z-50 flex flex-col justify-start items-end p-6 text-white text-right space-y-4"
        >
          <div className="flex items-center space-x-2 text-cyan-400 animate-bounce">
            <span className="text-sm font-semibold">{t.wechatTip}</span>
            <ArrowUpRight className="w-8 h-8" />
          </div>
          <div className="space-y-2 mt-4">
            <h2 className="text-xl font-bold text-white tracking-wide">{t.wechatTip}</h2>
            <p className="text-slate-300 text-sm whitespace-pre-line leading-relaxed">
              {t.wechatDesc}
            </p>
          </div>
          <div className="pt-20 w-full text-center">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setShowWechatOverlay(false);
              }}
              className="bg-white/10 border border-white/20 text-white rounded-full px-6 py-2.5 text-xs hover:bg-white/20 transition-colors"
            >
              我知道了
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
