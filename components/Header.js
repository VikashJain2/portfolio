'use client';

import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.replace('#', ''));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md z-40 shadow-sm transition-colors duration-300">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center py-4">
          <a href="#home" className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gradient-to-r from-[#FF6B35] to-[#00B894] rounded-full"></div>
            <span className="text-2xl font-bold font-space text-gray-900 dark:text-white">Vikash</span>
            <span className="text-2xl font-bold text-gray-800 dark:text-gray-200 font-space">Jain</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors relative group ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-[#FF6B35] dark:text-[#FF6B35]'
                    : 'text-gray-700 dark:text-gray-300 hover:text-[#FF6B35] dark:hover:text-[#FF6B35]'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#FF6B35] to-[#00B894] transition-all duration-300 ${
                  activeSection === link.href.replace('#', '') ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 dark:text-gray-300 text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div className={`md:hidden absolute left-0 right-0 bg-white dark:bg-gray-900 shadow-lg transition-all duration-300 ${
          isMenuOpen ? 'top-16 opacity-100 visible' : 'top-0 opacity-0 invisible'
        }`}>
          <div className="flex flex-col py-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`py-3 px-4 font-medium transition-colors ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-[#FF6B35] dark:text-[#FF6B35] bg-gray-50 dark:bg-gray-800'
                    : 'text-gray-700 dark:text-gray-300 hover:text-[#FF6B35] dark:hover:text-[#FF6B35] hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}