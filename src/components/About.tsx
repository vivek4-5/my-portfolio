// src/components/About.tsx
import { motion } from 'framer-motion';
// --- IMPORT THE IMAGE ---
// Ensure this relative path is correct from components/ to assets/images/
import profilePic from '../assets/images/profile-pic.jpg';
// ------------------------

const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } } };
const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

// No return type, no React import needed
const About = () => {
  const skills: string[] = [ "Python", "C++", "C", "AI/ML Concepts", "Data Structures", "Algorithms", "Problem Solving" ];

  return (
    <section id="about" className="py-16 md:py-24 bg-surface">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Text Content */}
          <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="mb-6">About Me</h2>
            <p className="text-lg mb-4">
              Hi! I’m Bibek Kumar Thagunna, an enthusiastic student deeply passionate about the world of Artificial Intelligence and Machine Learning. I'm currently honing my technical foundation pursuing a Bachelor's in Computer Science and Engineering at the Thapar Institute of Engineering and Technology, Patiala.
            </p>
            <p className="text-lg mb-6">
              While navigating my academic journey, I actively translate theory into practice by building personal projects. I thrive on the challenge of solving complex problems and am driven by the potential of AI/ML to create impactful applications. I'm eager to contribute to innovative projects and collaborate with fellow tech enthusiasts.
            </p>
            <h3 className="text-xl font-semibold font-display mb-4 text-text-main">Core Skills:</h3>
            <motion.div
                className="flex flex-wrap gap-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
            >
              {skills.map((skill, index) => (
                <motion.span key={index} className="skill-tag" variants={itemVariants}> {skill} </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Picture */}
          <motion.div
              className="lg:col-span-2 flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="relative group w-full max-w-sm lg:max-w-none">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <img
                src={profilePic} // Use imported variable
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
