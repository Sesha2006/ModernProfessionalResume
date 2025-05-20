import React from 'react';
import { personalInfo } from '../data/resumeData';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 pt-16">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8 inline-block p-2 bg-blue-100 rounded-full">
          <div className="w-32 h-32 bg-blue-200 rounded-full flex items-center justify-center">
            <span className="text-4xl">AJ</span>
          </div>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">
          {personalInfo.name}
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium mb-8 text-blue-600">
          {personalInfo.title}
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-700 mb-12">
          {personalInfo.about}
        </p>
        <div className="animate-bounce">
          <a 
            href="#about" 
            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300"
          >
            <ArrowDown className="text-blue-600" size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;