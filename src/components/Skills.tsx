import React from 'react';
import Section from './common/Section';
import ProgressBar from './common/ProgressBar';
import { skills } from '../data/resumeData';

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Technical Skills">
      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="transform transition-transform duration-300 hover:scale-105">
              <ProgressBar label={skill.name} percentage={skill.level} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skills