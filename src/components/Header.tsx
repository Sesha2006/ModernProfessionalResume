import React, { useEffect, useState } from 'react';
import { personalInfo } from '../data/resumeData';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
      ${scrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className={`font-bold transition-all duration-300 ${
              scrolled ? 'text-xl text-gray-800' : 'text-2xl text-gray-900'
            }`}>
              {personalInfo.name}
            </h1>
            <p className={`transition-all duration-300 ${
              scrolled ? 'text-sm text-gray-600' : 'text-base text-gray-700'
            }`}>
              {personalInfo.title}
            </p>
          </div>
          <nav>
            <ul className="hidden md:flex space-x-6">
              {['About', 'Education', 'Skills', 'Projects', 'Achievements', 'Certifications', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;