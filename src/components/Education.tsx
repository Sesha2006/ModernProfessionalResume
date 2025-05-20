import React from 'react';
import Section from './common/Section';
import Card from './common/Card';
import { education } from '../data/resumeData';

const Education: React.FC = () => {
  return (
    <Section id="education" title="Education" className="bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="relative">
              {index !== education.length - 1 && (
                <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gray-200"></div>
              )}
              <Card className="relative flex gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                  {edu.period.split(' - ')[0]}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-800">{edu.degree}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 mt-1">
                    <span className="font-medium">{edu.institution}</span>
                    <span className="hidden sm:block mx-2">•</span>
                    <span>{edu.location}</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{edu.period}</p>
                  <p className="mt-3 text-gray-700">{edu.description}</p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Education;