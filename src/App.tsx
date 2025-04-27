// src/App.tsx
import { motion } from 'framer-motion'; // Import motion
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Define variants for the main container (wraps sections)
const mainContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      // Delay children slightly after header fades in (adjust delay as needed)
      delayChildren: 0.4,
      // Stagger children animation by 0.2 seconds
      staggerChildren: 0.2
    }
  }
};

// Define variants for individual section items
const sectionItemVariants = {
  hidden: { opacity: 0, y: 20 }, // Start invisible and slightly down
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5, // Control individual section fade/slide duration
      ease: "easeOut"
    }
  }
};

function App() {
  return (
    <>
      <Header /> {/* Header animates independently */}

      {/* Wrap main content sections for staggered animation */}
      <motion.main
        variants={mainContainerVariants}
        initial="hidden"
        animate="visible" // Trigger animation on mount
      >
        {/* Wrap each section in motion.div using item variants */}
        <motion.div variants={sectionItemVariants}>
          <Hero />
        </motion.div>
        <motion.div variants={sectionItemVariants}>
          <About />
        </motion.div>
        <motion.div variants={sectionItemVariants}>
          <Projects />
        </motion.div>
        <motion.div variants={sectionItemVariants}>
          <Contact />
        </motion.div>
      </motion.main>

      {/* Footer can animate with main content or separately/not at all */}
      <motion.div variants={sectionItemVariants}>
        <Footer />
      </motion.div>
    </>
  );
}
export default App;
