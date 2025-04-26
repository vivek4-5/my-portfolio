// src/components/ProjectCard.tsx
import React from 'react';
import { motion } from 'framer-motion';
// Import necessary icons
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// --- UPDATED PROPS INTERFACE ---
interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  githubUrl?: string;
  liveDemoUrl?: string; // Added optional live demo URL
  index: number;
}
// ---------------------------

// Use React.FC for components with props defined via interface
const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  githubUrl,
  liveDemoUrl, // Destructure new prop
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
      className="project-card group" // Keep 'group' for hover effects
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <img src={imageUrl} alt={title} className="project-image" loading="lazy" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        {/* --- UPDATED LINKS SECTION --- */}
        <div className="mt-auto flex flex-wrap gap-3">
          {/* Source Code Link */}
          {isValidUrl(githubUrl) && (
             <a
               href={githubUrl}
               target="_blank"
               rel="noopener noreferrer"
               className="project-link" // Style defined in index.css
               aria-label={`Source code for ${title}`}
             >
               <FaGithub className="mr-1" aria-hidden="true"/> Source Code
             </a>
           )}
           {/* Live Demo Link - Added */}
           {isValidUrl(liveDemoUrl) && (
             <a
               href={liveDemoUrl}
               target="_blank"
               rel="noopener noreferrer"
               // Use a different style or the same, e.g., btn-outline or project-link
               className="project-link bg-primary text-white border-primary hover:bg-primary-dark" // Example different style
               aria-label={`Live demo of ${title}`}
             >
               <FaExternalLinkAlt className="mr-1" aria-hidden="true"/> Live Demo
             </a>
           )}
        </div>
        {/* ------------------------- */}
      </div>
    </motion.div>
  );
};
export default ProjectCard;