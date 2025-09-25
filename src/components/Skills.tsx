import React from 'react';
import ContributionActivity from "./ContributionActivity"
interface Skill {
  category: string;
  items: {
    name: string;
    level: number; // 1-10
  }[];
}

const skills: Skill[] = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', level: 9 },
      { name: 'TypeScript', level: 8 },
      { name: 'JavaScript', level: 9 },
      { name: 'HTML/CSS', level: 10 },
      { name: 'Tailwind CSS', level: 8 },
      { name: 'Redux', level: 7 },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', level: 8 },
      { name: 'Express', level: 8 },
      { name: 'MongoDB', level: 7 },
      { name: 'PostgreSQL', level: 6 },
      { name: 'GraphQL', level: 7 },
      { name: 'REST API', level: 9 },
    ],
  },
  {
    category: 'DevOps & CMS',
    items: [
      { name: 'Git', level: 7 },
      { name: 'Docker', level: 5 },
      { name: 'CI/CD', level: 6 },
      { name: 'Jest', level: 6 },
      { name: 'Sitefinity CMS', level: 8 },

      
    ],
  },
];

const SkillBar: React.FC<{ name: string; level: number }> = ({ name, level }) => {
  const percentage = `${level * 10}%`;
  
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{name}</span>
        <span className="text-xs text-gray-500 dark:text-gray-400">{percentage}</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div 
          className="bg-[#2da44e] h-2.5 rounded-full" 
          style={{ width: percentage }}
        ></div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 dark:text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">Skills & Technologies</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillCategory, index) => (
            <div 
              key={index}
              className="border border-gray-200 dark:border-gray-700 rounded-md p-4 bg-white dark:bg-[#161b22]"
            >
              <h3 className="text-lg font-medium mb-4">{skillCategory.category}</h3>
              
              {skillCategory.items.map((skill, skillIndex) => (
                <SkillBar key={skillIndex} name={skill.name} level={skill.level} />
              ))}
            </div>
          ))}
        </div>
        
        {/* <div className="mt-12">
          <h3 className="text-lg font-medium mb-4">Contribution Activity</h3>
          
          <div className="border border-gray-200 dark:border-gray-700 rounded-md p-4 bg-white dark:bg-[#161b22]">
            <div className="grid grid-cols-52 gap-1">
              {[...Array(52)].map((_, weekIndex) => (
                <div key={weekIndex} className="grid grid-rows-7 gap-1">
                  {[...Array(7)].map((_, dayIndex) => {
                    // Random contribution level (0-4)
                    const level = Math.floor(Math.random() * 5);
                    
                    let bgColor = 'bg-gray-100 dark:bg-gray-800';
                    if (level === 1) bgColor = 'bg-[#39d353]/20';
                    if (level === 2) bgColor = 'bg-[#39d353]/40';
                    if (level === 3) bgColor = 'bg-[#39d353]/70';
                    if (level === 4) bgColor = 'bg-[#39d353]';
                    
                    return (
                      <div 
                        key={dayIndex} 
                        className={`w-3 h-3 rounded-sm ${bgColor}`}
                        title={`${level} contributions`}
                      ></div>
                    );
                  })}
                </div>
              ))}
            </div>
            
            <div className="mt-2 flex justify-end items-center text-xs text-gray-500 dark:text-gray-400">
              <span className="mr-1">Less</span>
              <div className="w-3 h-3 rounded-sm bg-gray-100 dark:bg-gray-800 mr-1"></div>
              <div className="w-3 h-3 rounded-sm bg-[#39d353]/20 mr-1"></div>
              <div className="w-3 h-3 rounded-sm bg-[#39d353]/40 mr-1"></div>
              <div className="w-3 h-3 rounded-sm bg-[#39d353]/70 mr-1"></div>
              <div className="w-3 h-3 rounded-sm bg-[#39d353] mr-1"></div>
              <span>More</span>
            </div>
          </div>
        </div> */}

        <ContributionActivity username='kanishk466'  token='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'/>

        
      </div>
    </section>
  );
};

export default Skills;