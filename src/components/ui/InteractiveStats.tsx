import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { TrendingUp, Users, Clock, Target } from 'lucide-react';

const InteractiveStats: React.FC = () => {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);
  const controls = useAnimation();

  const stats = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: 300,
      suffix: '%',
      label: 'Aumento médio de produtividade',
      color: 'from-primary-400 to-primary-600'
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: 50,
      suffix: '+',
      label: 'Empresas transformadas',
      color: 'from-accent-400 to-accent-600'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      value: 24,
      suffix: '/7',
      label: 'Disponibilidade dos agentes',
      color: 'from-primary-400 to-accent-400'
    },
    {
      icon: <Target className="w-8 h-8" />,
      value: 95,
      suffix: '%',
      label: 'Taxa de satisfação',
      color: 'from-accent-400 to-primary-400'
    }
  ];

  useEffect(() => {
    controls.start({
      scale: [1, 1.02, 1],
      transition: { duration: 3, repeat: Infinity }
    });
  }, [controls]);

  return (
    <motion.div 
      animate={controls}
      className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ 
            scale: 1.1, 
            y: -10,
            transition: { duration: 0.3 }
          }}
          onHoverStart={() => setHoveredStat(index)}
          onHoverEnd={() => setHoveredStat(null)}
          className="group relative cursor-pointer"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary-500/20 to-accent-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative bg-dark-800/50 backdrop-blur-sm rounded-2xl p-6 border border-dark-700/50 group-hover:border-primary-500/30 transition-all duration-300">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} bg-opacity-20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
              <div className="text-primary-400 group-hover:text-accent-400 transition-colors">
                {stat.icon}
              </div>
            </div>
            
            <div className="text-3xl font-bold mb-2">
              <CountUpAnimation 
                target={stat.value} 
                suffix={stat.suffix}
                isActive={hoveredStat === index}
              />
            </div>
            
            <p className="text-white/70 text-sm leading-tight">{stat.label}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

type CountUpAnimationProps = {
  target: number;
  suffix: string;
  isActive: boolean;
};

const CountUpAnimation: React.FC<CountUpAnimationProps> = ({ target, suffix, isActive }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isActive) {
      const duration = 1000;
      const steps = 30;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    } else {
      setCount(target);
    }
  }, [target, isActive]);

  return (
    <motion.span
      key={count}
      initial={{ scale: 1.2, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent"
    >
      {count}{suffix}
    </motion.span>
  );
};

export default InteractiveStats;