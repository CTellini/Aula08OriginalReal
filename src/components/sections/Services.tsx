import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Container from '../ui/Container';
import GradientText from '../ui/GradientText';
import ServiceCard from '../ui/ServiceCard';
import { Bot, BrainCircuit, Workflow, Network, ArrowRight, Sparkles } from 'lucide-react';

const Services: React.FC = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(servicesRef, { once: true, margin: "-100px" });
  const controls = useAnimation();
  const [activeService, setActiveService] = useState<number | null>(null);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const services = [
    {
      icon: <Bot className="w-12 h-12" />,
      title: "Atendimento automatizado com IA humanizada",
      description: "Agentes de IA que conversam naturalmente com seus clientes, resolvem problemas e conduzem vendas com personalidade e empatia.",
      features: [
        "Atendimento 24/7 personalizado",
        "Integração com múltiplos canais",
        "Análise de sentimento em tempo real",
        "Respostas contextuais inteligentes"
      ],
      color: "from-primary-500 to-primary-600",
      stats: { efficiency: "95%", satisfaction: "4.8/5", response: "<2s" }
    },
    {
      icon: <BrainCircuit className="w-12 h-12" />,
      title: "Automação do setor comercial",
      description: "Sistemas inteligentes para prospecção, qualificação de leads, follow-up e recuperação de vendas perdidas, sem perder o toque humano.",
      features: [
        "Qualificação automática de leads",
        "Sequências de follow-up inteligentes",
        "Análise preditiva de conversão",
        "CRM integrado com IA"
      ],
      color: "from-accent-500 to-accent-600",
      stats: { conversion: "+150%", leads: "10x", automation: "85%" }
    },
    {
      icon: <Workflow className="w-12 h-12" />,
      title: "Otimização de processos internos",
      description: "Automatização de tarefas operacionais repetitivas, liberando sua equipe para atividades estratégicas e de alto valor.",
      features: [
        "Automação de processos (RPA)",
        "Integração entre sistemas",
        "Dashboards em tempo real",
        "Workflows inteligentes"
      ],
      color: "from-primary-500 to-accent-500",
      stats: { time_saved: "70%", errors: "-90%", efficiency: "+200%" }
    },
    {
      icon: <Network className="w-12 h-12" />,
      title: "Integração de áreas com inteligência",
      description: "Soluções que conectam todos os departamentos do seu negócio com fluxos de dados inteligentes e decisões baseadas em insights.",
      features: [
        "Fluxos de trabalho automatizados",
        "BI com machine learning",
        "APIs inteligentes customizadas",
        "Sincronização em tempo real"
      ],
      color: "from-accent-500 to-primary-500",
      stats: { integration: "100%", insights: "Real-time", sync: "Instant" }
    }
  ];

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

  return (
    <section id="services" className="py-20 md:py-32 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-950 -z-10" />
      <div className="absolute top-1/2 right-1/4 w-1/2 h-1/2 bg-primary-500/20 rounded-full blur-[96px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-1/4 w-1/2 h-1/2 bg-accent-500/20 rounded-full blur-[96px] -z-10 animate-pulse" style={{ animationDelay: '1s' }} />
      
      <Container>
        <motion.div 
          ref={servicesRef}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
            }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/20 mb-8 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-primary-400" />
              <span className="text-sm font-medium bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Nossas Soluções
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8">
              Soluções completas de <GradientText>Automação 360°</GradientText>
            </h2>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Desenvolvemos soluções personalizadas que integram inteligência artificial
              e automação para transformar todas as áreas do seu negócio.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                index={index}
                isActive={activeService === index}
                onHover={() => setActiveService(index)}
                onLeave={() => setActiveService(null)}
              />
            ))}
          </div>
          
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.8 } }
            }}
            className="flex justify-center"
          >
            <motion.a 
              href="#apply"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-dark-800/50 to-dark-700/50 border border-dark-600/50 hover:border-primary-500/50 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/20"
            >
              <span className="text-white/90 group-hover:text-white transition-colors text-lg font-medium">
                Descubra todas as possibilidades para seu negócio
              </span>
              <ArrowRight className="w-5 h-5 text-primary-400 group-hover:translate-x-2 transition-transform" />
            </motion.a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Services;