import React from 'react';
import { motion } from 'framer-motion';
import { Bot, BrainCircuit, Zap, Network, Sparkles, Cpu } from 'lucide-react';

const FloatingElements: React.FC = () => {
  const icons = [Bot, BrainCircuit, Zap, Network, Sparkles, Cpu];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {Array.from({ length: 12 }).map((_, i) => {
        const Icon = icons[i % icons.length];
        return (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: [0, 0.1, 0]
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <Icon 
              className="w-8 h-8 text-primary-400/20" 
              style={{
                filter: 'blur(1px)'
              }}
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default FloatingElements;