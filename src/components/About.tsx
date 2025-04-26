// src/components/About.tsx
import { motion } from 'framer-motion';
// --- IMPORT THE IMAGE ---
import profilePic from '../assets/images/profile-pic.jpg'; // Adjust path if needed
// ------------------------

const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } } };
const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

const About = () => {
  const skills: string[] = [ "Python", "C++", "C", "AI/ML Concepts", "Data Structures", "Algorithms", "Problem Solving" ];

  return (
    <section id="about" className="py-16 md:py-24 bg-surface">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* ... Text Content ... */}
          <motion.div className="lg:col-span-3" /* ... */ >
            {/* ... */}
          </motion.div>

          {/* Profile Picture */}
          <motion.div className="lg:col-span-2 flex justify-center" /* ... */ >
            <div className="relative group w-full max-w-sm lg:max-w-none">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <img
                // --- USE IMPORTED IMAGE VARIABLE ---
                src={profilePic}
                // ---------------------------------
                alt="Bibek Kumar Thagunna"
                className="relative rounded-lg shadow-xl w-full h-auto object-cover aspect-square transform group-hover:scale-105 transition duration-500 ease-in-out"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default About;