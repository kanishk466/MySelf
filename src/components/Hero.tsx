import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="about" className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 dark:text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-700 flex-shrink-0">
            <img
              src="https://res.cloudinary.com/dc4hhz59u/image/upload/v1748848794/supawork-photo-20250602T063434605Z_wmwjrt.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
              <h1 className="text-3xl font-bold mb-2 sm:mb-0">Kanishk Singh Maurya</h1>
              <div className="flex space-x-2">
                <a 
                  href="#contact" 
                  className="px-3 py-1.5 text-sm font-medium rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  Contact me
                </a>
                <a 
                  href="#projects" 
                  className="px-3 py-1.5 text-sm font-medium rounded-md bg-[#2da44e] text-white hover:bg-[#2c974b]"
                >
                  View Projects
                </a>
              </div>
            </div>
            
            <h2 className="text-xl text-gray-700 dark:text-gray-300 mb-4">Full Stack Developer</h2>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I build high-quality web applications with modern technologies. Passionate about clean code, 
              user experience, and solving complex problems through elegant solutions.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <Github size={16} className="mr-1" />
                <a href="https://github.com/kanishk466" className="hover:text-[#0969da] dark:hover:text-[#58a6ff]">
                  @kanishk
                </a>
              </div>
              
           
              
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <Linkedin size={16} className="mr-1" />
                <a href="https://linkedin.com/in/kanishk007/" className="hover:text-[#0969da] dark:hover:text-[#58a6ff]">
                  kanishk007
                </a>
              </div>
              
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <Mail size={16} className="mr-1" />
                <a href="mailto:kanishksinghmaurya@gmail.com" className="hover:text-[#0969da] dark:hover:text-[#58a6ff]">
                kanishksinghmaurya@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800">
                React
              </span>
              <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800">
                TypeScript
              </span>
              <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800">
                Node.js
              </span>
              <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800">
                Express
              </span>
              <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800">
                MongoDB
              </span>
              <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800">
                GraphQL
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;