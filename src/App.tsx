import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import AIAgents from './components/sections/AIAgents';
import Projects from './components/sections/Projects';
import Methodology from './components/sections/Methodology';
import Comparison from './components/sections/Comparison';
import CTA from './components/sections/CTA';
import Footer from './components/layout/Footer';
import LoadingScreen from './components/ui/LoadingScreen';
import ParticleBackground from './components/ui/ParticleBackground';
import ScrollProgress from './components/ui/ScrollProgress';
import FloatingElements from './components/ui/FloatingElements';
import CursorTrail from './components/ui/CursorTrail';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simular carregamento inicial
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950 text-white selection:bg-primary-500/30 selection:text-white overflow-x-hidden">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : (
          <div key="main">
            <ParticleBackground />
            <FloatingElements />
            <CursorTrail />
            <ScrollProgress />
            
            <div className="relative z-10">
              <Header />
              <main className="relative">
                <Hero />
                <About />
                <Services />
                <AIAgents />
                <Projects />
                <Methodology />
                <Comparison />
                <CTA />
              </main>
              <Footer />
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;