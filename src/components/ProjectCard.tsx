// src/components/ProjectCard.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectCardProps {//
  title: string;
  description: string;
  imageUrl: string; // This receives the processed path string from Projects.tsx
  githubUrl?: string;
  liveDemoUrl?: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  githubUrl,
  liveDemoUrl,
  index
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.1 }
    }
  };

  // Function to check if a URL is valid (not just '#')
  const isValidUrl = (url?: string): boolean => {
    return Boolean(url && url !== "#");
  };

  return (
    <motion.div
      className="project-card group" // Keep 'group' for CSS hover effects on children
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      // --- ADDED HOVER ANIMATION ---
      whileHover={{ scale: 1.03, y: -5 }} // Scale up slightly, move up 5px
      transition={{ type: "spring", stiffness: 400, damping: 17 }} // Add transition for smooth hover effect
      // -----------------------------
    >
      {/* Image uses group-hover defined in index.css */}
      <img src={imageUrl} alt={title} className="project-image" loading="lazy" />
      <div className="p-6 flex flex-col flex-grow">
         {/* Title uses group-hover defined in index.css */}
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="mt-auto flex flex-wrap gap-3">
          {/* Source Code Link */}
          {isValidUrl(githubUrl) && (
             <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="project-link" aria-label={`Source code for ${title}`}>
               <FaGithub className="mr-1" aria-hidden="true"/> Source Code
             </a>
           )}
           {/* Live Demo Link */}
           {isValidUrl(liveDemoUrl) && (
             <a href={liveDemoUrl} target="_blank" rel="noopener noreferrer" className="project-link bg-primary text-white border-primary hover:bg-primary-dark hover:text-white" aria-label={`Live demo of ${title}`}> {/* Example distinct style */}
               <FaExternalLinkAlt className="mr-1" aria-hidden="true"/> Live Demo
             </a>
           )}
        </div>
      </div>
    </motion.div>
  );
};
export default ProjectCard;
