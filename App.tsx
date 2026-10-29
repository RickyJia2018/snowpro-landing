import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Apple, Smartphone, Download, QrCode, Sparkles, ShieldCheck } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoDemo from './components/VideoDemo';
import CarpoolDemo from './components/CarpoolDemo';
import Courses from './components/Courses';
import SkiBuddyDemo from './components/SkiBuddyDemo';
import Roadmap from './components/Roadmap';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { uiExtraTranslations } from './uiLocales';
import { Reveal, SpotlightCard } from './components/ui/Effects';
import LinkPaypalPage from './src/pages/LinkPaypalPage';
import LinkStripePage from './src/pages/LinkStripePage';
import RechargePage from './src/pages/RechargePage';
import RechargeSuccessPage from './src/pages/RechargeSuccessPage';
import RefundPolicyPage from './src/pages/RefundPolicyPage';
import TokenPolicyPage from './src/pages/TokenPolicyPage';
import InstructorSharePage from './src/pages/InstructorSharePage';
import CourseSharePage from './src/pages/CourseSharePage';
import CarpoolSharePage from './src/pages/CarpoolSharePage';
import CarpoolPassPage from './src/pages/CarpoolPassPage';
import CarpoolPassSuccessPage from './src/pages/CarpoolPassSuccessPage';
import { API_BASE_URL } from './src/config/api';

function App() {
  React.useEffect(() => {
    console.log('[Snow Pro App] Global API Base URL:', API_BASE_URL);
  }, []);

  return (
    <LanguageProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/linkpaypal" element={<LinkPaypalPage />} />
        <Route path="/linkstripe" element={<LinkStripePage />} />
        <Route path="/stripe-callback" element={<LinkStripePage />} />
        <Route path="/recharge" element={<RechargePage />} />
        <Route path="/recharge/success" element={<RechargeSuccessPage />} />
        <Route path="/carpool-pass" element={<CarpoolPassPage />} />
        <Route path="/carpool-pass/success" element={<CarpoolPassSuccessPage />} />
        <Route path="/refunds" element={<RefundPolicyPage />} />
        <Route path="/terms" element={<TokenPolicyPage />} />
        <Route path="/instructors/:id" element={<InstructorSharePage />} />
        <Route path="/courses/:id" element={<CourseSharePage />} />
        <Route path="/carpool/detail" element={<CarpoolSharePage />} />
      </Routes>
    </LanguageProvider>
  );
}

const localT = {
  zh: {
    scanIos: '扫码下载 iOS 版',
    scanGooglePlay: '扫码直接下载 APK',
    directApk: '直接下载 Android APK',
    iosLabel: 'iPhone 用户',
    androidLabel: 'Android 用户',
    iosSub: '在 App Store 中搜索 "Snow Pro" 或扫码下载',
    androidSub: '直接下载并安装官方高速 Android APK 安装包',
  },
  en: {
    scanIos: 'Scan to download iOS app',
    scanGooglePlay: 'Scan to download APK directly',
    directApk: 'Direct APK Download',
    iosLabel: 'iPhone Users',
    androidLabel: 'Android Users',
    iosSub: 'Search "Snow Pro" in App Store or scan QR code',
    androidSub: 'Download and install the official Android APK directly',
  },
  ja: {
    scanIos: 'QRコードでiOS版をダウンロード',
    scanGooglePlay: 'QRコードでAPKを直接ダウンロード',
    directApk: 'Android APK 直接ダウンロード',
    iosLabel: 'iPhone ユーザー',
    androidLabel: 'Android ユーザー',
    iosSub: 'App Storeで「Snow Pro」を検索、またはQRをスキャン',
    androidSub: '公式Android APKファイルを直接ダウンロードしてインストール',
  },
  ko: {
    scanIos: 'QR 코드로 iOS 앱 다운로드',
    scanGooglePlay: 'QR 코드로 APK 직접 다운로드',
    directApk: 'Android APK 직접 다운로드',
    iosLabel: 'iPhone 사용자',
    androidLabel: 'Android 사용자',
    iosSub: 'App Store에서 "Snow Pro" 검색 또는 QR 코드 스캔',
    androidSub: '공식 Android APK 파일을 직접 다운로드하여 설치',
  },
  fr: {
    scanIos: 'Scanner pour iOS App Store',
    scanGooglePlay: "Scanner pour télécharger l'APK",
    directApk: "Téléchargement direct de l'APK",
    iosLabel: 'Utilisateurs iPhone',
    androidLabel: 'Utilisateurs Android',
    iosSub: 'Recherchez "Snow Pro" sur l\'App Store ou scannez le QR',
    androidSub: 'Téléchargez et installez directement le fichier APK officiel',
  },
  de: {
    scanIos: 'Scannen für iOS App Store',
    scanGooglePlay: 'Scannen zum direkten APK-Download',
    directApk: 'Direkter APK-Download',
    iosLabel: 'iPhone-Nutzer',
    androidLabel: 'Android-Nutzer',
    iosSub: 'Suche "Snow Pro" im App Store oder scanne den QR-Code',
    androidSub: 'Offizielle Android APK-Datei direkt herunterladen & installieren',
  },
  es: {
    scanIos: 'Escanear para descargar en iOS',
    scanGooglePlay: 'Escanear para descargar APK',
    directApk: 'Descarga directa de APK',
    iosLabel: 'Usuarios iPhone',
    androidLabel: 'Usuarios Android',
    iosSub: 'Busca "Snow Pro" en la App Store o escanea el QR',
    androidSub: 'Descarga e instala el archivo APK de Android directamente',
  },
  ru: {
    scanIos: 'Сканируйте для загрузки iOS',
    scanGooglePlay: 'Сканируйте для загрузки APK',
    directApk: 'Прямая загрузка APK',
    iosLabel: 'Для пользователей iPhone',
    androidLabel: 'Для пользователей Android',
    iosSub: 'Ищите "Snow Pro" в App Store или сканируйте QR',
    androidSub: 'Скачайте и установите официальный APK-файл Android напрямую',
  },
};

function HomePage() {
  const { t, language } = useLanguage();
  const currT = localT[language] || localT.en;
  const ui = uiExtraTranslations[language] || uiExtraTranslations.en;

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      <main>
        <Hero />
        <VideoDemo />
        <CarpoolDemo />
        <Courses />
        <SkiBuddyDemo />
        <Roadmap />
        <Testimonials />

        {/* Bottom CTA Section */}
        <section
          className="bg-[#030712] py-28 text-white border-t border-white/[0.06] relative overflow-hidden"
          id="download"
        >
          {/* Neon Aurora Halos */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] bg-gradient-to-r from-blue-600/15 via-cyan-400/15 to-teal-400/10 rounded-full blur-[160px] pointer-events-none" />
          <div className="absolute inset-0 bg-alpine-grid opacity-30 pointer-events-none" />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
            <Reveal className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 font-mono font-bold text-xs uppercase tracking-wider mb-6 shadow-[0_0_25px_rgba(6,182,212,0.2)]">
                <Sparkles size={14} className="text-cyan-400" />
                <span>{ui.cta.badge}</span>
              </div>

              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-white via-cyan-100 to-blue-300 bg-clip-text text-transparent leading-tight">
                {t.ctaBottom.title}
              </h2>
              <p className="text-slate-300/90 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
                {t.ctaBottom.desc}
              </p>

              <div className="mt-5 inline-flex items-center gap-2 text-xs font-mono text-slate-400">
                <ShieldCheck size={14} className="text-emerald-400" />
                <span>{ui.cta.securityNote}</span>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* iOS Download Card */}
              <Reveal delay={80}>
                <SpotlightCard
                  enableTilt={true}
                  spotlightColor="rgba(59, 130, 246, 0.2)"
                  className="bg-[#070d1f]/85 backdrop-blur-2xl border border-white/15 hover:border-blue-400/50 rounded-[2rem] p-8 sm:p-10 flex flex-col items-center shadow-[0_25px_60px_rgba(0,0,0,0.75)] transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-blue-500/15 border border-blue-400/30 rounded-2xl text-blue-400 flex items-center justify-center mb-5 shadow-[0_0_25px_rgba(59,130,246,0.2)]">
                    <Apple size={30} className="fill-current" />
                  </div>
                  <h3 className="text-2xl font-extrabold mb-2">{currT.iosLabel}</h3>
                  <p className="text-slate-400 text-xs text-center mb-7">
                    {currT.iosSub}
                  </p>

                  {/* QR Code Frame with Cyber Corner Brackets */}
                  <div className="relative p-4 rounded-2xl bg-slate-950/90 border border-white/15 shadow-2xl mb-6 group">
                    <span className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-blue-400 rounded-tl" />
                    <span className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-blue-400 rounded-tr" />
                    <span className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-blue-400 rounded-bl" />
                    <span className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-blue-400 rounded-br" />
                    <img
                      src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=https%3A%2F%2Fapps.apple.com%2Fapp%2Fid6754150275"
                      alt="iOS App Store QR Code"
                      className="w-[156px] h-[156px] rounded-xl bg-white p-1.5 transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  <span className="text-slate-400 text-xs font-mono flex items-center gap-1.5 mb-7">
                    <QrCode size={14} className="text-blue-400" />
                    {currT.scanIos}
                  </span>

                  <a
                    href="https://apps.apple.com/app/id6754150275"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-white text-slate-950 hover:bg-cyan-50 font-extrabold py-4 px-6 rounded-2xl flex items-center justify-center gap-2.5 transition-all duration-200 text-center shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-[1.02]"
                  >
                    <Apple size={20} className="fill-current" />
                    <span>{t.ctaBottom.btnIos}</span>
                  </a>
                </SpotlightCard>
              </Reveal>

              {/* Android Download Card */}
              <Reveal delay={180}>
                <SpotlightCard
                  enableTilt={true}
                  spotlightColor="rgba(6, 182, 212, 0.2)"
                  className="bg-[#070d1f]/85 backdrop-blur-2xl border border-white/15 hover:border-cyan-400/50 rounded-[2rem] p-8 sm:p-10 flex flex-col items-center shadow-[0_25px_60px_rgba(0,0,0,0.75)] transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-cyan-500/15 border border-cyan-400/30 rounded-2xl text-cyan-400 flex items-center justify-center mb-5 shadow-[0_0_25px_rgba(6,182,212,0.2)]">
                    <Smartphone size={30} />
                  </div>
                  <h3 className="text-2xl font-extrabold mb-2">{currT.androidLabel}</h3>
                  <p className="text-slate-400 text-xs text-center mb-7">
                    {currT.androidSub}
                  </p>

                  {/* QR Code Frame with Cyber Corner Brackets */}
                  <div className="relative p-4 rounded-2xl bg-slate-950/90 border border-white/15 shadow-2xl mb-6 group">
                    <span className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-cyan-400 rounded-tl" />
                    <span className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-cyan-400 rounded-tr" />
                    <span className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-cyan-400 rounded-bl" />
                    <span className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-cyan-400 rounded-br" />
                    <img
                      src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=https%3A%2F%2Fsnowpro-public-bucket.googuar.com%2Fsnowpro.apk"
                      alt="Android APK QR Code"
                      className="w-[156px] h-[156px] rounded-xl bg-white p-1.5 transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  <span className="text-slate-400 text-xs font-mono flex items-center gap-1.5 mb-7">
                    <QrCode size={14} className="text-cyan-400" />
                    {currT.scanGooglePlay}
                  </span>

                  <div className="w-full">
                    <a
                      href="https://snowpro-public-bucket.googuar.com/snowpro.apk"
                      className="w-full bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 hover:from-blue-500 hover:to-cyan-300 text-slate-950 font-extrabold py-4 px-6 rounded-2xl flex items-center justify-center gap-2.5 shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all duration-200 text-center hover:scale-[1.02]"
                    >
                      <Download size={20} />
                      <span>{currT.directApk}</span>
                    </a>
                  </div>
                </SpotlightCard>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
