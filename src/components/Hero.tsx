// src/components/Hero.tsx
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const Hero = () => { // No return type, no React import needed
  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string): void => {
      e.preventDefault();
      const targetElement = document.getElementById(targetId.substring(1));
      if (targetElement) { targetElement.scrollIntoView({ behavior: 'smooth' }); }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-cyan-50 via-slate-50 to-amber-50 py-20 px-4 sm:px-6">
      <div className="absolute inset-0 z-0 opacity-20 bg-gradient-to-r from-primary via-secondary to-primary bg-[size:200%_200%] animate-subtle-gradient"></div>
      <div className="container mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} className="max-w-3xl mx-auto">
          <h1 className="font-bold font-display mb-4 text-text-main">Hi, I'm <span className="text-primary">Bibek Kumar Thagunna</span></h1>
          <p className="text-xl md:text-2xl text-text-muted font-light mb-6">Aspiring <span className="font-medium text-secondary">AI/ML Engineer</span> & Computer Science Student</p>
          <p className="text-lg text-text-muted mb-8 max-w-xl mx-auto">Building intelligent solutions and exploring the intersection of data, algorithms, and software engineering.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#projects" onClick={(e) => handleScrollClick(e, '#projects')} className="btn btn-primary">View My Projects</a>
            <a href="#contact" onClick={(e) => handleScrollClick(e, '#contact')} className="btn btn-outline">Get In Touch</a>
          </div>
        </motion.div>
      </div>
       <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 0.5 }} className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-text-muted/70">
          <a href="#about" onClick={(e) => handleScrollClick(e, '#about')} aria-label="Scroll down" className="animate-bounce block"> <FaChevronDown size={28} /> </a>
       </motion.div>
    </section>
  );
};
export default Hero;