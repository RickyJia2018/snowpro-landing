import HelpCenterPage from './src/pages/HelpCenterPage';
import ShareBrowserGuideRuntime from './src/components/ShareBrowserGuideRuntime';
import InstructorInvitePage from './src/pages/InstructorInvitePage';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoDemo from './components/VideoDemo';
import CoursesSection from './components/CoursesSection';
import CarpoolDemo from './components/CarpoolDemo';
import SkiBuddyDemo from './components/SkiBuddyDemo';
import Roadmap from './components/Roadmap';
import DownloadSection from './components/DownloadSection';
import Footer from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';
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
import StorePage from './src/pages/StorePage';
import { API_BASE_URL } from './src/config/api';

function App() {
  React.useEffect(() => {
    console.log('[Snow Pro App] Global API Base URL:', API_BASE_URL);
  }, []);

  return (
    <LanguageProvider>
      <ShareBrowserGuideRuntime />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/download" element={<HomePage scrollToDownload />} />
        <Route path="/help-center" element={<HelpCenterPage />} />
        <Route path="/linkpaypal" element={<LinkPaypalPage />} />
        <Route path="/linkstripe" element={<LinkStripePage />} />
        <Route path="/stripe-callback" element={<LinkStripePage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/recharge" element={<RechargePage />} />
        <Route path="/recharge/success" element={<RechargeSuccessPage />} />
        <Route path="/carpool-pass" element={<CarpoolPassPage />} />
        <Route path="/carpool-pass/success" element={<CarpoolPassSuccessPage />} />
        <Route path="/refunds" element={<RefundPolicyPage />} />
        <Route path="/terms" element={<TokenPolicyPage />} />
        <Route path="/invite/instructor" element={<InstructorInvitePage />} />
        <Route path="/instructors/:id" element={<InstructorSharePage />} />
        <Route path="/courses/:id" element={<CourseSharePage />} />
        <Route path="/carpool/detail" element={<CarpoolSharePage />} />
        <Route path="/buddy/detail" element={<CarpoolSharePage kind="buddy" />} />
      </Routes>
    </LanguageProvider>
  );
}

function HomePage({ scrollToDownload = false }: { scrollToDownload?: boolean }) {
  React.useEffect(() => {
    if (!scrollToDownload) return;
    const el = document.getElementById('download');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, [scrollToDownload]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-sky-500 selection:text-slate-950">
      <Navbar />
      <main>
        <Hero />
        <VideoDemo />
        <CoursesSection />
        <CarpoolDemo />
        <SkiBuddyDemo />
        <Roadmap />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
