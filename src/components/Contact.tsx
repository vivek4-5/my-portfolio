// src/components/Contact.tsx
import ContactForm from './ContactForm';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => { // No return type, no React import needed
  const githubUsername: string = "YOUR_GITHUB_USERNAME"; // UPDATE
  const linkedinProfile: string = "YOUR_LINKEDIN_PROFILE"; // UPDATE
  const emailAddress: string = "thagunnananu@gmail.com";

  return (
    <section id="contact" className="py-16 md:py-24 bg-surface">
       {/* ... rest of JSX from previous correct example ... */}
       <div className="container mx-auto px-4 sm:px-6">
         <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }} className="text-center mb-12">
             <h2 className="mb-4">Get In Touch</h2>
             <p className="text-lg max-w-2xl mx-auto"> I'm excited about AI/ML and always open to discussing new projects, collaborations, or opportunities. Feel free to reach out! </p>
         </motion.div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
           <div> <ContactForm /> </div>
           <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.2 }} className="space-y-6">
               <h3 className="text-xl font-semibold font-display text-text-main">Contact Information</h3>
               <div className="flex items-start space-x-4 text-text-muted">
                   <FaEnvelope className="text-primary text-xl mt-1 w-5 text-center flex-shrink-0" aria-hidden="true" />
                   <a href={`mailto:${emailAddress}`} className="hover:text-primary transition-colors break-all">{emailAddress}</a>
               </div>
               <div className="flex items-start space-x-4 text-text-muted">
                   <FaMapMarkerAlt className="text-primary text-xl mt-1 w-5 text-center flex-shrink-0" aria-hidden="true" />
                   <span>Patiala, Punjab, India</span>
               </div>
               <div>
                   <h4 className="text-lg font-semibold font-display mb-3 text-text-main">Connect with Me</h4>
                   <div className="flex space-x-5">
                       {githubUsername !== "YOUR_GITHUB_USERNAME" && ( <a href={`https://github.com/${githubUsername}`} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="social-link"> <FaGithub /> </a> )}
                       {linkedinProfile !== "YOUR_LINKEDIN_PROFILE" && ( <a href={`https://linkedin.com/in/${linkedinProfile}`} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="social-link"> <FaLinkedin /> </a> )}
                   </div>
               </div>
           </motion.div>
         </div>
       </div>
    </section>
  );
};
export default Contact;