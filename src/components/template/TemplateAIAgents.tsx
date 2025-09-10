import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Container from '../ui/Container';
import GradientText from '../ui/GradientText';
import AIChat from '../ui/AIChat';
import { BrainCircuit, MessageCircle, Sparkles, Network, ArrowRight, Bot, Zap, Users, Target } from 'lucide-react';

const TemplateAIAgents: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const controls = useAnimation();
  const [activeAgent, setActiveAgent] = useState(0);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const agents = [
    {
      name: "Sarah - Atendimento",
      role: "Especialista em Customer Success",
      avatar: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      capabilities: ["Resolução de problemas", "Vendas consultivas", "Suporte técnico"],
      personality: "Empática e solucionadora"
    },
    {
      name: "Marcus - Vendas",
      role: "Consultor Comercial",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      capabilities: ["Qualificação de leads", "Negociação", "Follow-up inteligente"],
      personality: "Persuasivo e estratégico"
    },
    {
      name: "Ana - Marketing",
      role: "Analista de Performance",
      avatar: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      capabilities: ["Análise de campanhas", "Otimização de ROI", "Insights de mercado"],
      personality: "Analítica e criativa"
    }
  ];

  const features = [
    {
      icon: <BrainCircuit className="w-6 h-6" />,
      title: "Raciocínio Avançado",
      description: "Nossos agentes analisam contexto, histórico e intenções para tomar decisões inteligentes e estratégicas."
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Comunicação Natural",
      description: "Conversas fluidas que respeitam o tom de voz da sua marca e conectam emocionalmente com seu público."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Personalidade Definida",
      description: "Cada agente possui características e traços únicos que refletem os valores e cultura da sua empresa."
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "Integração Perfeita",
      description: "Projetados para se encaixar perfeitamente nos processos existentes sem interrupções ou conflitos."
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
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-950 -z-10" />
      <div className="absolute top-1/2 left-1/4 w-1/2 h-1/2 bg-primary-500/20 rounded-full blur-[96px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-accent-500/20 rounded-full blur-[96px] -z-10 animate-pulse" style={{ animationDelay: '1.5s' }} />
      
      <Container>
        <motion.div 
          ref={sectionRef}
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
              <Bot className="w-4 h-4 text-primary-400" />
              <span className="text-sm font-medium bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Agentes Inteligentes
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8">
              Agentes de IA que <GradientText>Pensam e Agem</GradientText> Como Humanos
            </h2>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Desenvolvemos agentes de IA com uma camada exclusiva de humanização, 
              capazes de interagir com seus clientes e colaboradores de forma natural e empática.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Features */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.4 } }
              }}
            >
              <div className="space-y-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="group flex items-start gap-4 p-6 rounded-2xl hover:bg-dark-800/50 transition-all duration-300 cursor-pointer"
                  >
                    <div className="bg-gradient-to-br from-primary-500/20 to-accent-500/20 p-3 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className="text-primary-400 group-hover:text-accent-400 transition-colors">
                        {feature.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 group-hover:text-primary-400 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-white/70 leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* AI Chat Demo */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.6 } }
              }}
              className="relative"
            >
              <AIChat />
            </motion.div>
          </div>

          {/* Agent Showcase */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.8 } }
            }}
            className="bg-dark-800/30 backdrop-blur-sm rounded-3xl border border-dark-700/50 p-8 md:p-12"
          >
            <h3 className="text-3xl font-bold text-center mb-12">
              Conheça nossos <GradientText>Agentes Especializados</GradientText>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {agents.map((agent, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.2 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  onClick={() => setActiveAgent(index)}
                  className={`group relative cursor-pointer transition-all duration-300 ${
                    activeAgent === index ? 'ring-2 ring-primary-500/50' : ''
                  }`}
                >
                  <div className="bg-dark-800/50 backdrop-blur-sm rounded-2xl border border-dark-700/50 group-hover:border-primary-500/30 p-6 transition-all duration-300">
                    <div className="relative mb-6">
                      <img
                        src={agent.avatar}
                        alt={agent.name}
                        className="w-20 h-20 rounded-full mx-auto object-cover border-2 border-primary-500/30"
                      />
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    
                    <h4 className="font-bold text-lg mb-1 text-center">{agent.name}</h4>
                    <p className="text-primary-400 text-sm text-center mb-4">{agent.role}</p>
                    <p className="text-white/60 text-sm text-center mb-4">{agent.personality}</p>
                    
                    <div className="space-y-2">
                      {agent.capabilities.map((capability, capIndex) => (
                        <div key={capIndex} className="flex items-center gap-2 text-xs text-white/70">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent-400" />
                          {capability}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 1.2 } }
            }}
            className="flex justify-center mt-16"
          >
            <motion.a 
              href="#apply"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-dark-800/50 to-dark-700/50 border border-dark-600/50 hover:border-primary-500/50 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/20"
            >
              <span className="text-white/90 group-hover:text-white transition-colors text-lg font-medium">
                Conheça mais sobre nossos agentes
              </span>
              <ArrowRight className="w-5 h-5 text-primary-400 group-hover:translate-x-2 transition-transform" />
            </motion.a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default TemplateAIAgents;