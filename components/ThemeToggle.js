'use client';

import { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check localStorage for theme preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#00B894] shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-white"
      aria-label="Toggle theme"
    >
      {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
    </button>
  );
}