// src/components/Projects.tsx
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

// --- UPDATED INTERFACE ---
interface ProjectData {
  title: string;
  description: string;
  imageUrl: string;
  githubUrl?: string;
  liveDemoUrl?: string; // Added optional live demo URL
}
// -----------------------

const projectsData: ProjectData[] = [
  // --- UPDATED DATA (Paths and added liveDemoUrl) ---
  {
    title: "YouTube Video Downloader",
    description: "A tool to download videos directly from YouTube. Built using Python and relevant libraries.",
    imageUrl: "src/assets/images/project-yt-downloader.jpg", // Path relative to public
    githubUrl: "#", /* UPDATE */
    liveDemoUrl: "#" /* UPDATE or remove if no demo */
  },
  {
    title: "YouTube-to-Audio Converter",
    description: "Converts YouTube videos into audio format (e.g., MP3). Developed with Python.",
    imageUrl: "src/assets/images/project-yt-audio.jpg", // Path relative to public
    githubUrl: "#", /* UPDATE */
    liveDemoUrl: "#" /* UPDATE or remove if no demo */
  },
  {
    title: "Flight Fare Prediction",
    description: "An application predicting flight fares, likely involving data analysis and machine learning techniques in Python.",
    imageUrl: "src/assets/images/project-flight-fare.jpg", // Path relative to public
    githubUrl: "#", /* UPDATE */
    liveDemoUrl: "#" /* UPDATE or remove if no demo */
  },
  {
    title: "Media Downloader",
    description: "A general-purpose tool for downloading media content (details depend on implementation). Built with Python.",
    imageUrl: "src/assets/images/project-media-downloader.jpg", // Path relative to public
    githubUrl: "#", /* UPDATE */
    liveDemoUrl: "#" /* UPDATE or remove if no demo */
  },
  // --------------------------------------------------
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-light-bg">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }} className="text-center mb-12"> Featured Projects </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Pass index to ProjectCard for animations */}
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
           ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;