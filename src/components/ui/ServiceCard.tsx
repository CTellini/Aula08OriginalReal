import React from 'react';
import { motion } from 'framer-motion';

type ServiceCardProps = {
  service: any;
  index: number;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  service, 
  index, 
  isActive, 
  onHover, 
  onLeave 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      whileHover={{ scale: 1.02, y: -5 }}
      onHoverStart={onHover}
      onHoverEnd={onLeave}
      className="group relative h-full"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary-500/20 to-accent-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative bg-dark-800/50 backdrop-blur-sm rounded-3xl border border-dark-700/50 group-hover:border-primary-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary-500/10 h-full p-8">
        {service.icon}
        <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
        <p className="text-white/70 mb-6">{service.description}</p>
        <ul className="space-y-3">
          {service.features.map((feature: string, featureIndex: number) => (
            <li key={featureIndex} className="flex items-center gap-3 text-white/80">
              <div className="w-2 h-2 rounded-full bg-primary-400" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ServiceCard;