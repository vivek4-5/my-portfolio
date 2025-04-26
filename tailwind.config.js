// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  // Files to scan for Tailwind classes
  content: [
    "./index.html",             // Checks index.html in the project root (portfolio-vite)
    "./src/**/*.{js,ts,jsx,tsx}", // Checks all relevant files in the src folder
  ],
  darkMode: 'class', // Optional: set to 'media' if you prefer OS setting
  theme: {
    // Extend Tailwind's default theme
    extend: {
       fontFamily: {
           'sans': ['Poppins', 'sans-serif'],       // Default sans-serif font
           'display': ['Montserrat', 'sans-serif'], // Font for headings
       },
       colors: {
           // Define your custom color palette
           'primary': {
              DEFAULT: '#0891B2', // Cyan-600
              dark: '#0E7490'    // Cyan-700 (for hover/darker shades)
            },
           'secondary': '#F59E0B', // Amber-500 (accent color)
           'light-bg': '#F8FAFC',  // Slate-50 (main light background)
           'dark-bg': '#1E293B',   // Slate-800 (footer/dark mode background)
           'surface': '#FFFFFF',   // Card backgrounds, etc.
           'text-main': '#0F172A', // Slate-900 (main text color)
           'text-muted': '#64748B',// Slate-500 (subdued text color)
       },
       animation: {
           // Define custom animations
           'subtle-gradient': 'subtle-gradient-shift 15s ease infinite',
           'tilt': 'tilt 10s infinite linear', // For image hover effect
       },
       keyframes: {
           // Define keyframes used in custom animations
           'subtle-gradient-shift': {
               '0%, 100%': { backgroundPosition: '0% 50%' },
               '50%': { backgroundPosition: '100% 50%' },
           },
           'tilt': {
               '0%, 100%': { transform: 'rotate(0deg)' },
               '25%': { transform: 'rotate(0.5deg)' },
               '75%': { transform: 'rotate(-0.5deg)' },
           }
       }
    },
  },
  // Add any Tailwind plugins here if needed (e.g., require('@tailwindcss/forms'))
  plugins: [],
}