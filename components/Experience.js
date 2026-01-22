'use client';

import { useState } from 'react';
import { FiBriefcase, FiBookOpen } from 'react-icons/fi';

const experienceData = [
  {
    id: 1,
    date: 'May 2024 - Nov 2025',
    title: 'Full Stack Developer (Team Lead)',
    company: 'Life layer Health Solutions Pvt. Ltd.',
    location: 'Gurgaon, India',
    description: [
      'Engineered scalable Spring Boot and Node REST APIs, improving API response efficiency by 40%',
      'Built real-time WebSocket APIs, reducing client-server communication latency by 35%',
      'Designed and implemented advanced MongoDB aggregation pipelines for complex data analysis',
      'Designed and maintained microservices using Node.js/Express.js for scalable backend architecture'
    ]
  },
  // {
  //   id: 2,
  //   date: 'Jul 2024 – Aug 2024',
  //   title: 'Full Stack Developer - Intern',
  //   company: 'Cipher Byte Technologies',
  //   location: 'Kolkata, India',
  //   description: [
  //     'Built and maintained full stack applications using React.js, Node.js, MongoDB, and Express.js',
  //     'Enhanced system performance by optimizing database queries'
  //   ]
  // },
  {
    id: 3,
    date: 'Jul 2023 – Aug 2023',
    title: 'Web Developer - Intern',
    company: 'Yhills',
    location: 'Noida, India',
    description: [
      'Created and enhanced HTML, CSS and JavaScript web pages with responsive design principles'
    ]
  }
];

const educationData = [
  {
    id: 1,
    date: '2021 - 2024',
    title: 'Bachelor of Computer Application',
    company: 'Teerthanker Mahaveer University',
    location: 'Moradabad, Uttar Pradesh',
    description: [
      'Specialized in software development, data structures, algorithms, and web technologies',
      'Graduated with honors'
    ]
  }
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-gray-900 dark:text-white">Experience & Education</h2>
        
        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg border border-gray-200 dark:border-gray-700 p-1">
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'experience'
                  ? 'bg-gradient-to-r from-[#FF6B35] to-[#00B894] text-white'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <FiBriefcase />
              Experience
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'education'
                  ? 'bg-gradient-to-r from-[#FF6B35] to-[#00B894] text-white'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <FiBookOpen />
              Education
            </button>
          </div>
        </div>
        
        {/* Content */}
        <div className="max-w-4xl mx-auto">
          {/* Experience Timeline */}
          <div className={`transition-all duration-300 ${activeTab === 'experience' ? 'block' : 'hidden'}`}>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#FF6B35] to-[#00B894]"></div>
              
{experienceData.map((item, index) => {
  const isRight = index % 2 === 0;

  return (
    <div
      key={item.id}
      className={`relative mb-12 pl-12 md:pl-0 md:w-1/2 ${
        isRight
          ? "md:ml-auto md:pl-8 md:text-left"
          : "md:mr-auto md:pr-8 md:text-right"
      }`}
    >
      {/* Timeline Dot */}
      <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-gradient-to-r from-[#FF6B35] to-[#00B894] rounded-full border-4 border-white dark:border-gray-900 z-10"></div>

      {/* Date */}
      <div className={`mb-3 ${!isRight ? "md:text-right" : ""}`}>
        <span className="inline-block px-3 py-1 bg-gradient-to-r from-[#FF6B35]/10 to-[#00B894]/10 text-[#00B894] text-sm font-semibold rounded-full">
          {item.date}
        </span>
      </div>

      {/* Content Card */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
          {item.title}
        </h3>

        <div
          className={`flex items-center gap-2 mb-3 flex-wrap ${
            !isRight ? "md:justify-end" : ""
          }`}
        >
          <span className="text-[#FF6B35] font-semibold">{item.company}</span>
          <span className="text-gray-400">•</span>
          <span className="text-gray-600 dark:text-gray-400 text-sm">
            {item.location}
          </span>
        </div>

        <ul className="space-y-2">
          {item.description.map((desc, idx) => (
            <li
              key={idx}
              className={`flex items-start ${
                !isRight ? "md:flex-row-reverse md:text-right" : ""
              }`}
            >
              <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#FF6B35] to-[#00B894] rounded-full mt-2 mx-3 flex-shrink-0"></div>
              <span className="text-gray-600 dark:text-gray-300">{desc}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
})}

            </div>
          </div>
          
          {/* Education Timeline */}
          <div className={`transition-all duration-300 ${activeTab === 'education' ? 'block' : 'hidden'}`}>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#FF6B35] to-[#00B894]"></div>
              
           {educationData.map((item, index) => {
  const isRight = index % 2 === 0; // even = right, odd = left

  return (
    <div
      key={item.id}
      className={`relative mb-12 pl-12 md:pl-0 md:w-1/2 ${
        isRight
          ? "md:ml-auto md:pl-8 md:text-left"
          : "md:mr-auto md:pr-8 md:text-right"
      }`}
    >
      {/* Timeline Dot */}
      <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-gradient-to-r from-[#FF6B35] to-[#00B894] rounded-full border-4 border-white dark:border-gray-900 z-10"></div>

      {/* Date */}
      <div className={`mb-3 ${!isRight ? "md:text-right" : ""}`}>
        <span className="inline-block px-3 py-1 bg-gradient-to-r from-[#FF6B35]/10 to-[#00B894]/10 text-[#00B894] dark:text-[#00B894] text-sm font-semibold rounded-full">
          {item.date}
        </span>
      </div>

      {/* Content Card */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
          {item.title}
        </h3>

        <div className={`flex items-center gap-2 mb-3 flex-wrap ${!isRight ? "md:justify-end" : ""}`}>
          <span className="text-[#FF6B35] font-semibold">{item.company}</span>
          <span className="text-gray-400">•</span>
          <span className="text-gray-600 dark:text-gray-400 text-sm">{item.location}</span>
        </div>

        <ul className="space-y-2">
          {item.description.map((desc, idx) => (
            <li key={idx} className={`flex items-start ${!isRight ? "md:flex-row-reverse md:text-right" : ""}`}>
              <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#FF6B35] to-[#00B894] rounded-full mt-2 mx-3 flex-shrink-0"></div>
              <span className="text-gray-600 dark:text-gray-300">{desc}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
})}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}