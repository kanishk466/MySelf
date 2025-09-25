import React from 'react';
import { Github, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-[#0d1117] border-t border-gray-200 dark:border-gray-800 dark:text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Github className="h-6 w-6 mr-2" />
            <span className="text-sm">© {year} Kanishk Singh Maurya</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-600 dark:text-gray-400">
            <a href="#about" className="hover:text-[#0969da] dark:hover:text-[#58a6ff]">About</a>
            <a href="#projects" className="hover:text-[#0969da] dark:hover:text-[#58a6ff]">Projects</a>
            <a href="#skills" className="hover:text-[#0969da] dark:hover:text-[#58a6ff]">Skills</a>
            <a href="#experience" className="hover:text-[#0969da] dark:hover:text-[#58a6ff]">Experience</a>
            <a href="#contact" className="hover:text-[#0969da] dark:hover:text-[#58a6ff]">Contact</a>
          </div>
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          <p className="flex items-center justify-center">
            Built with <Heart className="h-4 w-4 mx-1 text-red-500" /> and React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;