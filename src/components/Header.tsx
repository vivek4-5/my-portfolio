// src/components/Header.tsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
// --- IMPORT THE IMAGE ---
import profilePic from '../assets/images/profile-pic.jpg'; // Adjust path if needed
// ------------------------

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => { setIsScrolled(window.scrollY > 50); };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = (): void => setIsOpen(!isOpen);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string): void => {
    if (targetId.startsWith('#')) {
       e.preventDefault();
       const targetElement = document.getElementById(targetId.substring(1));
       if (targetElement) { targetElement.scrollIntoView({ behavior: 'smooth' }); }
    }
    if (isOpen) { setIsOpen(false); }
  };

  const headerClasses: string = `sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-surface/90 backdrop-blur-md shadow-md' : 'bg-surface/90 shadow-sm'}`;

  return (
    <motion.header initial={{ y: -100 }} animate={{ y: 0 }} transition={{ type: "spring", stiffness: 50, damping: 15 }} className={headerClasses}>
       <nav className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
         <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="logo flex items-center gap-x-3 text-2xl font-bold font-display text-primary hover:text-primary-dark transition-colors">
           <img
             // --- USE IMPORTED IMAGE VARIABLE ---
             src={profilePic}
             // ---------------------------------
             alt="Bibek profile picture"
             width={44}
             height={44}
             className="w-11 h-11 rounded-full object-cover flex-shrink-0 border-2 border-primary/30" // Added w-11 h-11 classes
             loading="lazy"
           />
           <span>Bibek K. Thagunna</span>
         </a>
         {/* ... rest of nav ... */}
         <div className="hidden md:flex space-x-8 main-nav">
           <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="nav-link">Home</a>
           <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="nav-link">About</a>
           <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')} className="nav-link">Projects</a>
           <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="nav-link">Contact</a>
         </div>
         <div className="md:hidden">
            <button onClick={toggleMenu} className="text-text-main focus:outline-none p-2 -mr-2" aria-label="Toggle menu">
                {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
         </div>
       </nav>
        {/* ... mobile nav ... */}
        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }} transition={{ duration: 0.3 }} className={`md:hidden mobile-nav overflow-hidden absolute top-full left-0 w-full bg-dark-bg transition-opacity duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}>
           <div className="flex flex-col items-center space-y-4 py-4">
             <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="nav-link">Home</a>
             <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="nav-link">About</a>
             <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')} className="nav-link">Projects</a>
             <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="nav-link">Contact</a>
           </div>
        </motion.div>
    </motion.header>
  );
};
export default Header;