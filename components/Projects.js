'use client';

import { FiExternalLink, FiGithub } from 'react-icons/fi';

const projectsData = [
  {
    id: 1,
    title: 'Code Craft',
    description: 'Engineered a cloud-based code editor with real-time, multi-language execution using Piston API. Features collaborative editing and instant code execution.',
    image: './Code-Craft-Image.png',
    techStack: [
      { name: 'Next.js', type: 'frontend-tech' },
      { name: 'Convex', type: 'database-tech' },
      { name: 'Piston API', type: 'api-tech' },
      { name: 'Clerk', type: 'backend-tech' },
      { name: 'Framer Motion', type: 'frontend-tech' },
      { name: 'Zustand', type: 'backend-tech' }
    ],
    liveDemo: 'https://code-craft-vikashjain.vercel.app',
    sourceCode: 'https://github.com/VikashJain2/code-craft'
  },
  {
    id: 2,
    title: 'AI Smart Recipe Explorer',
    description: 'Developed a full-stack AI-powered recipe exploration platform enabling users to generate, customize, and simplify recipes using Generative AI.',
    image: './Smart-Recipe-Explorer.png',
    techStack: [
      { name: 'Node.js', type: 'backend-tech' },
      { name: 'Express.js', type: 'backend-tech' },
      { name: 'MongoDB', type: 'database-tech' },
      { name: 'React.js', type: 'frontend-tech' },
      { name: 'Tailwind CSS', type: 'frontend-tech' },
      { name: 'Groq Cloud', type: 'ai-tech' },
      { name: 'Tavily', type: 'api-tech' }
    ],
    liveDemo: 'https://smart-recipe-explorer-frontend.onrender.com/',
    sourceCode: "https://github.com/VikashJain2/Smart-Recipe-Explorer"
  },
  {
    id: 3,
    title: 'AI Course Generator',
    description: 'Architected an AI-driven course creation platform with dynamic content personalization using AI APIs. Generates customized learning paths.',
    image: './AI-course-generator.png',
    techStack: [
      { name: 'Next.js', type: 'frontend-tech' },
      { name: 'Gemini AI API', type: 'ai-tech' },
      { name: 'Tailwind CSS', type: 'frontend-tech' },
      { name: 'REST API', type: 'api-tech' },
       { name: 'PostgreSQL', type: 'database-tech' },
        { name: 'Clerk', type: 'backend-tech' },
    ],
    liveDemo: 'https://ai-course-generator-vikashjain.vercel.app',
    sourceCode: 'https://github.com/VikashJain2/ai-course-generator'
  },
  {
    id: 4,
    title: 'Yum Yard',
    description: 'Designed and developed a robust food ordering web application using technologies/frameworks used, e.g., react.js, node.js, express.js and mongodb.',
    image: './YumYard.png',
    techStack: [
        { name: 'Node.js', type: 'backend-tech' },
      { name: 'Express.js', type: 'backend-tech' },
      { name: 'MongoDB', type: 'database-tech' },
      { name: 'React.js', type: 'frontend-tech' },
      { name: 'CSS', type: 'frontend-tech' },
      { name: 'REST API', type: 'api-tech' },
    ],
    liveDemo: 'https://yumyard-frontend.onrender.com/',
    sourceCode: 'https://github.com/VikashJain2/YumYard'
  },
  {
    id: 5,
    title: 'Event Planner 360',
    description: 'Developed a full-featured, responsive event management platform supporting scheduling, real time notifications, and collaboration .',
    image: './Event-Planner-360.png',
    techStack: [
      { name: 'Node.js', type: 'backend-tech' },
      { name: 'Express.js', type: 'backend-tech' },
      { name: 'MongoDB', type: 'database-tech' },
      { name: 'React.js', type: 'frontend-tech' },
      { name: 'CSS', type: 'frontend-tech' },
      { name: 'REST API', type: 'api-tech' },
    ],
    liveDemo: 'https://eventplanner-frontend.onrender.com/',
    sourceCode: 'https://github.com/VikashJain2/CBTC'
  }
];

const getTechTagClass = (type) => {
  const classes = {
    'frontend-tech': 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 border border-yellow-200 dark:border-yellow-800',
    'backend-tech': 'bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 border border-teal-200 dark:border-teal-800',
    'database-tech': 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800',
    'api-tech': 'bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-300 border border-pink-200 dark:border-pink-800',
    'ai-tech': 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 border border-purple-200 dark:border-purple-800'
  };
  return classes[type] || 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300';
};

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-gray-900 dark:text-white">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projectsData.map((project) => (
            <div 
              key={project.id} 
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 card-hover border border-gray-100 dark:border-gray-700"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, index) => (
                    <span 
                      key={index}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getTechTagClass(tech.type)}`}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
                
                {/* Project Links */}
                <div className="flex gap-3">
                  <a 
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-primary text-sm py-2 px-4 text-center"
                  >
                    <FiExternalLink className="inline mr-2" />
                    Live Demo
                  </a>
                  <a 
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-outline text-sm py-2 px-4 text-center"
                  >
                    <FiGithub className="inline mr-2" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Projects Button */}
        {/* <div className="text-center mt-12">
          <button className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#FF6B35] to-[#00B894] text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <span className="relative z-10">View All Projects</span>
            <svg 
              className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-[#00B894] to-[#FF6B35] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div> */}
      </div>
    </section>
  );
}