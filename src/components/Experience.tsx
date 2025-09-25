import React, { useState } from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

interface Job {
  id: number;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  tech: string[];
}

const experiences: Job[] = [
  {
    id: 1,
    company: 'Itdose Infosystem Pvt Ltd.',
    role: 'Software Developer (Full Stack)',
    period: 'Feb 2025 - Present',
    location: 'Noida, India',
    description: [
      'Working on Remote Patient Monitoring System as a full-stack MERN developer',
      'Developed and integrated RESTful APIs in React frontend using Axios.',
      'Implemented JWT-based authentication and role-based authorization using custom Express middleware.',
      'Followed modular architecture and wrote reusable React components.',
      'Used Git for version control and collaborated with cross-functional teams.',
      'Assisted with tasks in Java and Python when needed for backend integration.'
    ],
    tech: ['React', 'TypeScript', 'Redux', 'GraphQL', 'Jest' , 'JWT' , 'Node.js' , 'Express'],
  },
  {
    id: 2,
    company: 'Techharvest Solution Pvt Ltd.',
    role: 'Software Engineer',
    period: 'May 2023 - August 2024',
    location: 'Satna, India',
    description: [
      'Developed and maintained multiple client projects using the Sitefinity CMS , Asp .Net',
      'Built RESTful APIs and GraphQL endpoints for various client applications',
      'Implemented CI/CD pipelines using GitHub Actions',
      'Reduced page load times by 60% through code optimization and lazy loading',
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Sitefinity CMS' , 'Asp .Net'],
  },

];

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState(1);
  
  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-[#0d1117] dark:text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">Work Experience</h2>
        
        <div className="flex flex-col md:flex-row border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-[#161b22]">
          {/* Tabs for larger screens */}
          <div className="md:w-64 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#0d1117]">
            {experiences.map((job) => (
              <button
                key={job.id}
                className={`w-full text-left p-4 border-l-2 transition-colors duration-200 ${
                  activeTab === job.id 
                    ? 'border-l-[#0969da] bg-white dark:bg-[#161b22] text-[#0969da] dark:text-[#58a6ff] font-medium' 
                    : 'border-l-transparent hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
                onClick={() => setActiveTab(job.id)}
              >
                <h3 className="font-medium">{job.company}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{job.role}</p>
              </button>
            ))}
          </div>
          
          {/* Tab content */}
          <div className="flex-1 p-6">
            {experiences
              .filter((job) => job.id === activeTab)
              .map((job) => (
                <div key={job.id} className="animate-fadeIn">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                    <h3 className="text-xl font-semibold">{job.role}</h3>
                    <span className="mt-1 sm:mt-0 px-2 py-1 text-xs font-medium rounded-full bg-[#2da44e]/10 text-[#2da44e]">
                      {job.period}
                    </span>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-600 dark:text-gray-400 mb-6">
                    <div className="flex items-center mr-4 mb-2 sm:mb-0">
                      <Briefcase size={16} className="mr-1" />
                      <span>{job.company}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-1" />
                      <span>{job.location}</span>
                    </div>
                  </div>
                  
                  <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-700 dark:text-gray-300">
                    {job.description.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {job.tech.map((tech, index) => (
                      <span 
                        key={index} 
                        className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;