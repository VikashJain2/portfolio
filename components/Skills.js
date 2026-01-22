'use client';

import { FiCode, FiServer, FiLayers, FiDatabase, FiCloud, FiTool } from 'react-icons/fi';

const skillsData = [
  {
    id: 1,
    title: 'Languages',
    icon: <FiCode />,
    skills: [
      { name: 'Java', type: 'language' },
      { name: 'C++', type: 'language' },
      { name: 'JavaScript', type: 'language' },
      { name: 'TypeScript', type: 'language' },
      { name: 'HTML', type: 'language' },
      { name: 'CSS', type: 'language' },
      { name: 'SQL', type: 'language' }
    ]
  },
  {
    id: 2,
    title: 'Backend',
    icon: <FiServer />,
    skills: [
      { name: 'Spring Boot', type: 'backend' },
      { name: 'Spring MVC', type: 'backend' },
      { name: 'Spring Security', type: 'backend' },
      { name: 'Spring JPA', type: 'backend' },
      { name: 'Node.js', type: 'backend' },
      { name: 'Express.js', type: 'backend' },
      { name: 'WebSocket APIs', type: 'backend' }
    ]
  },
  {
    id: 3,
    title: 'Frontend & Libraries',
    icon: <FiLayers />,
    skills: [
      { name: 'ReactJS', type: 'frontend' },
      { name: 'Vue.js', type: 'frontend' },
      { name: 'Next.js', type: 'frontend' },
      { name: 'Redis', type: 'frontend' },
      { name: 'Tailwind CSS', type: 'frontend' },
      { name: 'Bull MQ', type: 'frontend' }
    ]
  },
  {
    id: 4,
    title: 'Databases & Cloud',
    icon: <FiDatabase />,
    skills: [
      { name: 'MongoDB', type: 'database' },
      { name: 'MySQL', type: 'database' },
      { name: 'PostgreSQL', type: 'database' },
      { name: 'Google Cloud Storage', type: 'database' },
      { name: 'AWS (EC2, S3)', type: 'cloud' }
    ]
  },
  {
    id: 5,
    title: 'Tools & Platforms',
    icon: <FiTool />,
    skills: [
      { name: 'Git', type: 'tool' },
      { name: 'GitHub', type: 'tool' },
      { name: 'Postman', type: 'tool' },
      { name: 'VS Code', type: 'tool' },
      { name: 'IntelliJ IDEA', type: 'tool' },
      { name: 'Vercel', type: 'tool' }
    ]
  },
  {
    id: 6,
    title: 'Other Skills',
    icon: <FiCloud />,
    skills: [
      { name: 'Responsive Design', type: 'other' },
      { name: 'Authentication', type: 'other' },
      { name: 'Payment Integration', type: 'other' },
      { name: 'Data Protection', type: 'other' },
      { name: 'PoC Development', type: 'other' },
      { name: 'Code Reviews', type: 'other' },
      { name: 'Agile/Scrum', type: 'other' }
    ]
  }
];

const getSkillTagClass = (type) => {
  const classes = {
    'language': 'bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 border border-orange-200 dark:border-orange-800',
    'backend': 'bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 border border-teal-200 dark:border-teal-800',
    'frontend': 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 border border-yellow-200 dark:border-yellow-800',
    'database': 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800',
    'cloud': 'bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-300 border border-pink-200 dark:border-pink-800',
    'tool': 'bg-blue-gray-100 dark:bg-blue-gray-900/30 text-blue-gray-800 dark:text-blue-gray-300 border border-blue-gray-200 dark:border-blue-gray-800',
    'other': 'bg-brown-100 dark:bg-brown-900/30 text-brown-800 dark:text-brown-300 border border-brown-200 dark:border-brown-800'
  };
  return classes[type] || 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300';
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-gray-900 dark:text-white">Technical Skills</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {skillsData.map((skillCategory) => (
            <div 
              key={skillCategory.id}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 card-hover border-t-4 border-[#FF6B35]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B35]/10 to-[#00B894]/10 rounded-xl flex items-center justify-center text-[#FF6B35] text-xl">
                  {skillCategory.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {skillCategory.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {skillCategory.skills.map((skill, index) => (
                  <span 
                    key={index}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-md ${getSkillTagClass(skill.type)}`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}