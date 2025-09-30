import React from 'react';
import { Star, GitFork, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  language: string;
  languageColor: string;
  stars: number;
  forks: number;
  lastUpdated: string;
  demoUrl?: string;
  repoUrl: string;
}

const projects: Project[] = [


    {
    id: 1,
    title: 'AussieGrill Fast Food',
    description: 'Developed and delivered the food delivery site for a client . This is my freelance project',
    language: 'Figma , Html , Css , JavaScript , Sitefinity CMS , Bootstrap',
    languageColor: '#2b7489',
    demoUrl: 'https://www.aussiegrill.com',
  },
    {
    id: 2,
    title: 'task-management-Api',
    description: 'This Task Management API is a RESTful backend service that supports user registration, login, role-based access control, task management, and task notifications. Built using Node.js, Express, MongoDB, and JWT authentication, it is designed for managing tasks within teams, allowing role-specific permissions for tasks and assignments.',
    language: 'JavaScript + Node.js + Express + JWT + MongoDB',
    languageColor: '#f1e05a',
    stars: 0,
    forks: 0,
    lastUpdated: '6 month ago',
    demoUrl: 'https://github.com/kanishk466/taskManagement-Rest-api',
    repoUrl: 'https://github.com/kanishk466/taskManagement-Rest-api',
  },
  {
    id: 4,
    title: ' Movix – A Movie & Series Explorer App',
    description: 'A user-friendly movie and TV series web app that allows users to explore the latest content with reviews, trailers, genres, and filtering options..',
    language: 'React + API + Redux',
    languageColor: '#2b7489',
    stars: 0,
    forks: 0,
    lastUpdated: '',
    demoUrl: 'https://moviex-39.netlify.app/',
    repoUrl: '',
  },

  {
    id: 3,
    title: 'Algorithm Visualizer',
    description: 'Created an interactive algorithm visualizer using JavaScript to demonstrate sorting and searching algorithms with real-time animations and user controls.',
    language: 'Vanilla JS + Logic-heavy',
    languageColor: '#f1e05a',
    stars: 0,
    forks: 0,
    lastUpdated: '24/12/2023',
    demoUrl: 'https://algorithm-visualsier.netlify.app/',
  },
      {
    id: 4,
    title: 'Fast Food Restaurant',
    description: 'Developed and delivered the food delivery site for a client . This is my freelance project',
    language: 'Figma , Html , Css , JavaScript , Sitefinity CMS , Bootstrap',
    languageColor: '#2b7489',
    demoUrl: 'https://kanishk466.github.io/website1-restaurant/index.html',
  },
 {
    id: 5,
    title: 'Lounge Cafe',
    description: 'Developed and delivered the Lounge Cafe site for a client . This is my freelance project',
    language: 'Figma , Html , Css , JavaScript , Sitefinity CMS , Bootstrap',
    languageColor: '#2b7489',
    demoUrl: 'https://kanishk466.github.io/website2-lounge',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-[#0d1117] dark:text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Featured Projects</h2>
          <a 
            href="https://github.com/kanishk466?tab=repositories" 
            className="text-[#0969da] dark:text-[#58a6ff] hover:underline text-sm font-medium flex items-center"
          >
            View all repositories
            <ExternalLink size={14} className="ml-1" />
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="border border-gray-200 dark:border-gray-700 rounded-md p-4 bg-white dark:bg-[#161b22] hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-[#0969da] dark:text-[#58a6ff]">
                  <a href={project.repoUrl} className="hover:underline">
                    {project.title}
                  </a>
                </h3>
                <div className="flex items-center space-x-3">
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl} 
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                      aria-label="View live demo"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                {project.description}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span 
                    className="inline-block w-3 h-3 rounded-full mr-1" 
                    style={{ backgroundColor: project.languageColor }}
                  ></span>
                  <span className="text-xs text-gray-600 dark:text-gray-400">{project.language}</span>
                </div>
                
                <div className="flex items-center space-x-3 text-xs text-gray-600 dark:text-gray-400">
                  <div className="flex items-center">
                    <Star size={14} className="mr-1" />
                    <span>{project.stars}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <GitFork size={14} className="mr-1" />
                    <span>{project.forks}</span>
                  </div>
                  
                  <span>Updated {project.lastUpdated}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
