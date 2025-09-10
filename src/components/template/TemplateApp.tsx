import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import TemplateHeader from './TemplateHeader';
import TemplateHero from './TemplateHero';
import TemplateAbout from './TemplateAbout';
import TemplateServices from './TemplateServices';
import TemplateAIAgents from './TemplateAIAgents';
import TemplateProjects from './TemplateProjects';
import TemplateMethodology from './TemplateMethodology';
import TemplateComparison from './TemplateComparison';
import TemplateCTA from './TemplateCTA';
import TemplateFooter from './TemplateFooter';
import LoadingScreen from '../ui/LoadingScreen';
import ParticleBackground from '../ui/ParticleBackground';
import ScrollProgress from '../ui/ScrollProgress';
import FloatingElements from '../ui/FloatingElements';
import CursorTrail from '../ui/CursorTrail';

function TemplateApp() {
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
              <TemplateHeader />
              <main className="relative">
                <TemplateHero />
                <TemplateAbout />
                <TemplateServices />
                <TemplateAIAgents />
                <TemplateProjects />
                <TemplateMethodology />
                <TemplateComparison />
                <TemplateCTA />
              </main>
              <TemplateFooter />
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default TemplateApp;