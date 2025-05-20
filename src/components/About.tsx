import React from 'react';
import Section from './common/Section';
import { personalInfo } from '../data/resumeData';

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me">
      <div className="max-w-3xl mx-auto">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          {personalInfo.about}
        </p>
        <div className="flex flex-col md:flex-row md:justify-center gap-4">
          <div className="bg-white rounded-lg shadow p-4 flex-1">
            <h3 className="font-medium text-gray-800 mb-2">Location</h3>
            <p className="text-gray-600">{personalInfo.location}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 flex-1">
            <h3 className="font-medium text-gray-800 mb-2">Email</h3>
            <p className="text-gray-600">{personalInfo.email}</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;