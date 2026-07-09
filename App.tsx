import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Apple, Smartphone, Download, QrCode } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoDemo from './components/VideoDemo';
import Roadmap from './components/Roadmap';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';
import LinkPaypalPage from './src/pages/LinkPaypalPage';
import RechargePage from './src/pages/RechargePage';
import RechargeSuccessPage from './src/pages/RechargeSuccessPage';
import InstructorSharePage from './src/pages/InstructorSharePage';
import { API_BASE_URL } from './src/config/api';

function App() {
  React.useEffect(() => {
    console.log("[SnowPro App] Global API Base URL:", API_BASE_URL);
  }, []);

  return (
    <LanguageProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/linkpaypal" element={<LinkPaypalPage />} />
        <Route path="/recharge" element={<RechargePage />} />
        <Route path="/recharge/success" element={<RechargeSuccessPage />} />
        <Route path="/instructors/:id" element={<InstructorSharePage />} />
      </Routes>
    </LanguageProvider>
  );
}

// Extract content to use the hook inside
import { useLanguage } from './contexts/LanguageContext';

const localT = {
  zh: {
    scanIos: "扫码下载 iOS 版",
    scanGooglePlay: "扫码下载 Google Play 版",
    directApk: "直接下载 Android APK",
    iosLabel: "iPhone 用户",
    androidLabel: "Android 用户",
    or: "或",
  },
  en: {
    scanIos: "Scan to download iOS app",
    scanGooglePlay: "Scan to download Google Play",
    directApk: "Direct APK Download",
    iosLabel: "iPhone Users",
    androidLabel: "Android Users",
    or: "or",
  },
  ja: {
    scanIos: "QRコードでiOS版をダウンロード",
    scanGooglePlay: "QRコードでGoogle Play版をダウンロード",
    directApk: "Android APK 直接ダウンロード",
    iosLabel: "iPhone ユーザー",
    androidLabel: "Android ユーザー",
    or: "または",
  },
  ko: {
    scanIos: "QR 코드로 iOS 앱 다운로드",
    scanGooglePlay: "QR 코드로 Google Play 앱 다운로드",
    directApk: "Android APK 직접 다운로드",
    iosLabel: "iPhone 사용자",
    androidLabel: "Android 사용자",
    or: "또는",
  },
  fr: {
    scanIos: "Scanner pour iOS App Store",
    scanGooglePlay: "Scanner pour Google Play",
    directApk: "Téléchargement direct de l'APK",
    iosLabel: "Utilisateurs iPhone",
    androidLabel: "Utilisateurs Android",
    or: "ou",
  },
  de: {
    scanIos: "Scannen für iOS App Store",
    scanGooglePlay: "Scannen für Google Play",
    directApk: "Direkter APK-Download",
    iosLabel: "iPhone-Nutzer",
    androidLabel: "Android-Nutzer",
    or: "oder",
  }
};

function HomePage() {
  const { t, language } = useLanguage();
  const currT = localT[language] || localT.en;
  
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-brand-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <VideoDemo />
        <Roadmap />
        <Testimonials />
        
        {/* Bottom CTA Section */}
        <section className="bg-slate-950 py-24 text-white border-t border-slate-900" id="download">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 bg-gradient-to-r from-white via-slate-100 to-blue-200 bg-clip-text text-transparent">
                {t.ctaBottom.title}
              </h2>
              <p className="text-slate-450 text-lg max-w-2xl mx-auto font-light">
                {t.ctaBottom.desc}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* iOS Download Card */}
              <div className="bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-3xl p-8 flex flex-col items-center hover:border-blue-500/30 transition-all duration-300">
                <div className="p-3 bg-blue-500/10 rounded-2xl text-blue-450 mb-4">
                  <Apple size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">{currT.iosLabel}</h3>
                <p className="text-slate-400 text-sm text-center mb-6">
                  {language === 'zh' ? '在 App Store 中搜索 "SnowPro" 或扫码下载' : 'Search "SnowPro" in App Store or scan QR code'}
                </p>
                
                {/* QR Code Container */}
                <div className="bg-white p-4 rounded-2xl shadow-xl mb-6 transition-transform hover:scale-105 duration-300">
                  <img 
                    src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https%3A%2F%2Fapps.apple.com%2Fapp%2Fid6754150275"
                    alt="iOS App Store QR Code"
                    className="w-[150px] h-[150px]"
                    loading="lazy"
                  />
                </div>
                <span className="text-slate-400 text-xs flex items-center gap-1.5 mb-6">
                  <QrCode size={14} />
                  {currT.scanIos}
                </span>

                <a 
                  href="https://apps.apple.com/app/id6754150275"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white text-slate-900 hover:bg-slate-100 font-bold py-3.5 px-6 rounded-2xl flex items-center justify-center gap-2 transition-all duration-200 text-center"
                >
                  <Apple size={20} className="fill-current" />
                  {t.ctaBottom.btnIos}
                </a>
              </div>

              {/* Android Download Card */}
              <div className="bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-3xl p-8 flex flex-col items-center hover:border-cyan-500/30 transition-all duration-300">
                <div className="p-3 bg-cyan-500/10 rounded-2xl text-cyan-450 mb-4">
                  <Smartphone size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">{currT.androidLabel}</h3>
                <p className="text-slate-400 text-sm text-center mb-6">
                  {language === 'zh' ? '在 Google Play 中下载或直接下载 APK 文件' : 'Download on Google Play or get the APK file directly'}
                </p>

                {/* QR Code Container */}
                <div className="bg-white p-4 rounded-2xl shadow-xl mb-6 transition-transform hover:scale-105 duration-300">
                  <img 
                    src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.googuar.snowpro"
                    alt="Google Play Store QR Code"
                    className="w-[150px] h-[150px]"
                    loading="lazy"
                  />
                </div>
                <span className="text-slate-400 text-xs flex items-center gap-1.5 mb-6">
                  <QrCode size={14} />
                  {currT.scanGooglePlay}
                </span>

                <div className="w-full space-y-3">
                  <a 
                    href="https://play.google.com/store/apps/details?id=com.googuar.snowpro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-3.5 px-6 rounded-2xl flex items-center justify-center gap-2 border border-slate-700 transition-all duration-200 text-center"
                  >
                    <Smartphone size={20} />
                    {t.ctaBottom.btnAndroid}
                  </a>
                  
                  <div className="flex items-center justify-center gap-3 py-1">
                    <div className="h-px bg-slate-800 flex-1"></div>
                    <span className="text-slate-500 text-xs uppercase tracking-wider">{currT.or}</span>
                    <div className="h-px bg-slate-800 flex-1"></div>
                  </div>

                  <a 
                    href="/download/android"
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold py-3.5 px-6 rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-blue-500/10 transition-all duration-200 text-center"
                  >
                    <Download size={20} />
                    {currT.directApk}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

export default App;
