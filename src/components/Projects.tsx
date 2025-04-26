// src/components/Projects.tsx
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

// --- IMPORT PROJECT IMAGES ---
// Verify these relative paths are correct from Projects.tsx to the images
import projectYtDownloader from '../assets/images/project-yt-downloader.jpg';
import projectYtAudio from '../assets/images/project-yt-audio.jpg';
import projectFlightFare from '../assets/images/project-flight-fare.jpg';
import projectMediaDownloader from '../assets/images/project-media-downloader.jpg';
// ---------------------------

interface ProjectData {
  title: string;
  description: string;
  imageUrl: string; // Vite turns imported image into a URL string
  githubUrl?: string;
  liveDemoUrl?: string;
}

const projectsData: ProjectData[] = [
  // --- USE IMPORTED IMAGE VARIABLES ---
  {
    title: "YouTube Video Downloader",
    description: "A tool to download videos directly from YouTube. Built using Python and relevant libraries.",
    imageUrl: projectYtDownloader, // Use variable
    githubUrl: "#", /* UPDATE */
    liveDemoUrl: "#" /* UPDATE or remove if no demo */
  },
  {
    title: "YouTube-to-Audio Converter",
    description: "Converts YouTube videos into audio format (e.g., MP3). Developed with Python.",
    imageUrl: projectYtAudio, // Use variable
    githubUrl: "#", /* UPDATE */
    liveDemoUrl: "#" /* UPDATE or remove if no demo */
  },
  {
    title: "Flight Fare Prediction",
    description: "An application predicting flight fares, likely involving data analysis and machine learning techniques in Python.",
    imageUrl: projectFlightFare, // Use variable
    githubUrl: "#", /* UPDATE */
    liveDemoUrl: "#" /* UPDATE or remove if no demo */
  },
  {
    title: "Media Downloader",
    description: "A general-purpose tool for downloading media content (details depend on implementation). Built with Python.",
    imageUrl: projectMediaDownloader, // Use variable
    githubUrl: "#", /* UPDATE */
    liveDemoUrl: "#" /* UPDATE or remove if no demo */
  },
  // ------------------------------------
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-light-bg">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }} className="text-center mb-12"> Featured Projects </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* --- RENDER PROJECTCARD AGAIN --- */}
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
           ))}
           {/* ----------------------------- */}
        </div>
      </div>
    </section>
  );
};
export default Projects;
