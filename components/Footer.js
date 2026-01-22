import { FiMail, FiLinkedin, FiGithub, FiPhone, FiMapPin } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-gradient-to-r from-[#FF6B35] to-[#00B894] rounded-full"></div>
              <span className="text-2xl font-bold font-space">Vikash</span>
              <span className="text-2xl font-bold text-gray-300 font-space">Jain</span>
            </div>
            <p className="text-gray-400 mb-6">
              Full Stack Developer specializing in MERN stack and microservices architecture. 
              Passionate about building scalable, high-performance applications.
            </p>
            <div className="flex gap-4">
              <a href="https://linkedin.com/in/vikash-jain-" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-[#FF6B35] transition-colors">
                <FiLinkedin />
              </a>
              <a href="https://github.com/Vikashjain2" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-[#FF6B35] transition-colors">
                <FiGithub />
              </a>
              <a href="mailto:vikashjain2205@gmail.com" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-[#FF6B35] transition-colors">
                <FiMail />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative pb-2">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-[#FF6B35] to-[#00B894]"></span>
            </h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-[#FF6B35] transition-colors">Home</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-[#FF6B35] transition-colors">Skills</a></li>
              <li><a href="#experience" className="text-gray-400 hover:text-[#FF6B35] transition-colors">Experience</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-[#FF6B35] transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-[#FF6B35] transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative pb-2">
              Contact Info
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-[#FF6B35] to-[#00B894]"></span>
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-400">
                <FiPhone className="text-[#FF6B35]" />
                <span>+91 9079393821</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <FiMail className="text-[#FF6B35]" />
                <span>vikashjain2205@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <FiMapPin className="text-[#FF6B35]" />
                <span>Gurgaon, India</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Vikash Jain. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}