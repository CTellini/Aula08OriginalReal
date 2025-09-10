import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Container from '../ui/Container';
import Button from '../ui/Button';
import GradientText from '../ui/GradientText';
import Marquee from '../ui/Marquee';
import TypewriterEffect from '../ui/TypewriterEffect';
import InteractiveStats from '../ui/InteractiveStats';
import { ArrowRight, Bot, Brain, Zap, Sparkles, Play } from 'lucide-react';

const benefitItems = [
  "Redução de 70% nos custos operacionais",
  "Aumento de 45% na satisfação do cliente", 
  "Automação de 85% das tarefas repetitivas",
  "ROI positivo em 3 meses",
  "Disponibilidade 24/7",
  "Escalabilidade imediata",
  "Integração com sistemas existentes",
  "Análise de dados em tempo real"
];

const TemplateHero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(heroRef, { once: true });
  const controls = useAnimation();
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary-500/30 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-accent-500/30 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 bg-primary-500/20 rounded-full blur-[96px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <Container>
        <motion.div 
          ref={heroRef}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-6xl mx-auto text-center"
        >
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/20 mb-8 backdrop-blur-sm">
              <motion.span 
                className="relative flex h-3 w-3"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-500"></span>
              </motion.span>
              <span className="text-sm font-medium bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Tecnologia de ponta em IA
              </span>
              <Sparkles className="w-4 h-4 text-accent-400" />
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-8">
              <TypewriterEffect 
                words={["Automatize.", "Escale.", "Transforme."]}
                className="block"
              />
              <GradientText className="block mt-4">
                Revolucione seu negócio com IA
              </GradientText>
            </h1>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
              Soluções de IA e automação humanizada que geram resultados reais, 
              reduzem custos e aumentam exponencialmente a produtividade do seu negócio.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-16">
              <Button 
                variant="primary" 
                className="w-full sm:w-auto text-lg py-6 px-12 group transform hover:scale-105"
                onClick={() => window.location.href = '#apply'}
              >
                <span className="flex items-center justify-center gap-3">
                  <Bot className="w-6 h-6" />
                  Começar Transformação
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </span>
              </Button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowVideo(true)}
                className="w-full sm:w-auto flex items-center justify-center gap-3 text-lg py-6 px-12 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:border-primary-500/50 transition-all duration-300 group"
              >
                <Play className="w-6 h-6 text-accent-400 group-hover:scale-110 transition-transform" />
                Ver Demonstração
              </motion.button>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <InteractiveStats />
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-16"
          >
            <FeatureHighlight
              icon={<Bot className="w-8 h-8" />}
              title="IA Humanizada"
              description="Agentes que pensam e agem como humanos"
              delay={0}
            />
            <FeatureHighlight
              icon={<Brain className="w-8 h-8" />}
              title="Automação 360°"
              description="Integração completa de processos"
              delay={0.1}
            />
            <FeatureHighlight
              icon={<Zap className="w-8 h-8" />}
              title="Resultados Reais"
              description="ROI mensurável e garantido"
              delay={0.2}
            />
          </motion.div>
        </motion.div>
      </Container>

      {/* Enhanced Marquee section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="mt-24"
      >
        <Marquee items={benefitItems} speed="normal" />
        <Marquee items={benefitItems} direction="right" speed="normal" />
      </motion.div>

      {/* Video Modal */}
      {showVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-dark-950/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowVideo(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-4xl w-full aspect-video bg-dark-900 rounded-2xl overflow-hidden border border-primary-500/30"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <Play className="w-16 h-16 text-primary-400 mx-auto mb-4" />
                <p className="text-white/80">Demonstração em breve...</p>
              </div>
            </div>
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-dark-800/80 hover:bg-dark-700 rounded-full flex items-center justify-center transition-colors"
            >
              ×
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

type FeatureHighlightProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
};

const FeatureHighlight: React.FC<FeatureHighlightProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay + 1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary-500/20 to-accent-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative flex items-center gap-6 p-8 rounded-2xl bg-dark-800/50 border border-dark-700/50 backdrop-blur-sm group-hover:border-primary-500/30 transition-all duration-300">
        <motion.div 
          className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-primary-400 group-hover:text-accent-400 transition-colors">
            {icon}
          </div>
        </motion.div>
        <div className="text-left">
          <h3 className="font-bold text-lg mb-2">{title}</h3>
          <p className="text-white/70">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TemplateHero;