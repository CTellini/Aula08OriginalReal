import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
};

type ProjectCardProps = {
  project: Project;
  index: number;
  onClick: () => void;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onClick }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: index * 0.1,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.03, y: -10 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="group relative cursor-pointer h-full"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary-500/20 to-accent-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative bg-dark-800/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-dark-700/50 group-hover:border-primary-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary-500/10 h-full">
        {/* Image */}
        <div className="relative h-[250px] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/30 to-transparent" />
          
          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-dark-900/80 backdrop-blur-sm border border-primary-500/30 rounded-full text-xs font-medium text-primary-400">
              {project.category}
            </span>
          </div>

          {/* Hover overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-gradient-to-t from-primary-500/20 to-transparent flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              className="bg-white/10 backdrop-blur-sm rounded-full p-4 border border-white/20"
            >
              <ExternalLink className="w-6 h-6 text-white" />
            </motion.div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold mb-3 group-hover:text-primary-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-white/70 mb-4 leading-relaxed">{project.description}</p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="px-2 py-1 bg-dark-700/50 border border-dark-600/50 rounded-md text-xs text-white/60"
              >
                {tag}
              </span>
            ))}
          </div>

          <motion.button
            whileHover={{ x: 5 }}
            className="inline-flex items-center gap-2 text-primary-400 hover:text-accent-400 transition-colors group/link font-medium"
          >
            Ver detalhes completos
            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;