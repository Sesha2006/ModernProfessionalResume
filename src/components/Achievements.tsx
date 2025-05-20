import React from 'react';
import Section from './common/Section';
import Card from './common/Card';
import { achievements } from '../data/resumeData';
import { ExternalLink } from 'lucide-react';

const Achievements: React.FC = () => {
  return (
    <Section id="achievements" title="Competitive Programming">
      <div className="max-w-3xl mx-auto">
        <div className="space-y-6">
          {achievements.map((achievement, index) => (
            <Card key={index} className="transform hover:scale-102 transition-transform duration-300">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {achievement.platform}
                </h3>
                {achievement.link !== '#' && (
                  <a 
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
              <p className="text-gray-600 mb-2">Username: {achievement.username}</p>
              <p className="text-gray-700">{achievement.stats}</p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Achievements