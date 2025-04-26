// src/components/Footer.tsx

const Footer = () => { // No return type, no React import needed
    const currentYear: number = new Date().getFullYear();
    return (
      <footer className="bg-dark-bg text-gray-400 py-8">
        <div className="container mx-auto px-4 sm:px-6 text-center">
             <p className="text-sm">&copy; {currentYear} Bibek Kumar Thagunna. All Rights Reserved.</p>
        </div>
      </footer>
    );
  };
  export default Footer;