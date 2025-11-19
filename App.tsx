import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoDemo from './components/VideoDemo';
import Roadmap from './components/Roadmap';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Content />
    </LanguageProvider>
  );
}

// Extract content to use the hook inside
import { useLanguage } from './contexts/LanguageContext';

function Content() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-brand-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <VideoDemo />
        <Roadmap />
        <Testimonials />
        
        {/* Bottom CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-cyan-600 py-20" id="download">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t.ctaBottom.title}
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
              {t.ctaBottom.desc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:shadow-lg hover:scale-105 transition-all duration-300">
                {t.ctaBottom.btnIos}
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 hover:scale-105 transition-all duration-300">
                {t.ctaBottom.btnAndroid}
              </button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

export default App;
