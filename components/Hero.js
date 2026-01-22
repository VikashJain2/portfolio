'use client';

import { FiDownload, FiArrowRight, FiMail, FiLinkedin, FiGithub, FiPhone } from 'react-icons/fi';
import { useState } from 'react';

export default function Hero() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadResume = () => {
    setIsDownloading(true);
    
    // Create a modal for resume download
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4';
    
    modal.innerHTML = `
      <div class="bg-white dark:bg-gray-800 rounded-2xl max-w-md w-full p-8 text-center">
        <h3 class="text-2xl font-bold text-[#FF6B35] mb-4">Download Resume</h3>
        <p class="text-gray-600 dark:text-gray-300 mb-6">Click below to download Vikash_Jain_Resume.pdf</p>
        <div class="mb-6">
          <div class="w-20 h-20 bg-gradient-to-r from-[#FF6B35]/20 to-[#00B894]/20 rounded-full flex items-center justify-center mx-auto mb-4 text-[#FF6B35] text-3xl">
            <i class="fas fa-file-pdf"></i>
          </div>
          <p class="font-semibold text-gray-900 dark:text-white">Vikash_Jain_Resume.pdf</p>
          <p class="text-sm text-gray-500 dark:text-gray-400">File size: 1.2 MB</p>
        </div>
        <div class="flex gap-4 justify-center">
          <button id="confirmDownload" class="btn-primary">Download Now</button>
          <button id="closeModal" class="btn-outline border-gray-300 text-gray-700 dark:text-gray-300 hover:border-[#FF6B35]">Cancel</button>
        </div>
      </div>
    `;
    
    document.body.appendChild(modal);
    
    document.getElementById('closeModal').addEventListener('click', () => {
      document.body.removeChild(modal);
      setIsDownloading(false);
    });
    
    document.getElementById('confirmDownload').addEventListener('click', () => {
    const a = document.createElement('a');
  a.href = '/Vikash Jain Resume.pdf'; // path inside public folder
  a.download = 'Vikash_Jain_Resume.pdf';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  document.body.removeChild(modal);
  setIsDownloading(false);
    });
    
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        document.body.removeChild(modal);
        setIsDownloading(false);
      }
    });
  };

  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
      {/* Background Shape */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-[#FF6B35]/10 to-[#00B894]/10 dark:from-[#FF6B35]/5 dark:to-[#00B894]/5 rounded-bl-[100px] -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Full Stack Developer{' '}
              <span className="text-[#FF6B35] relative">
                Transforming Ideas
                <span className="absolute bottom-2 left-0 w-full h-3 bg-[#FFE66D]/50 -z-10"></span>
              </span>{' '}
              into Digital Solutions
            </h1>
            
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 max-w-2xl">
              Skilled in MERN stack and microservices architecture, with experience building scalable multi-tenant applications. 
              Proven ability to optimize API performance by 40% and reduce real-time latency by 35%.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a href="#contact" className="btn-primary">
                Get In Touch <FiArrowRight />
              </a>
              <button 
                onClick={handleDownloadResume} 
                disabled={isDownloading}
                className="btn-outline disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isDownloading ? 'Downloading...' : 'Download Resume'} <FiDownload />
              </button>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-8 mb-10">
              <div>
                <div className="text-3xl font-bold text-[#FF6B35]">40%</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">API Optimization</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#FF6B35]">35%</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">Latency Reduction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#FF6B35]">30%</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">Report Speed Increase</div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a href="mailto:vikashjain2205@gmail.com" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-[#FF6B35] hover:text-white transition-colors">
                <FiMail />
              </a>
              <a href="https://linkedin.com/in/vikash-jain-" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-[#FF6B35] hover:text-white transition-colors">
                <FiLinkedin />
              </a>
              <a href="https://github.com/Vikashjain2" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-[#FF6B35] hover:text-white transition-colors">
                <FiGithub />
              </a>
              <a href="tel:+919079393821" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-[#FF6B35] hover:text-white transition-colors">
                <FiPhone />
              </a>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Vikash Jain - Full Stack Developer"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            {/* Floating Shape */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#00B894] rounded-[30%_70%_70%_30%/30%_30%_70%_70%] opacity-20 -z-10 animate-float"></div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}