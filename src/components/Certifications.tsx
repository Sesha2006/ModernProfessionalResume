import React from 'react';
import Section from './common/Section';
import { certifications } from '../data/resumeData';
import { CheckCircle } from 'lucide-react';

const Certifications: React.FC = () => {
  return (
    <Section id="certifications" title="Certifications">
      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
              <span className="text-gray-700">{cert}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Certifications