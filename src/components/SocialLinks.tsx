import React from 'react';
import { SocialLink } from '../types';
import * as LucideIcons from 'lucide-react';

interface SocialLinksProps {
  links: SocialLink[];
  secondaryColor: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ links }) => {
  return (
    <div className="flex justify-center space-x-4 my-6">
      {links.map((link) => {
        // Dynamically get the icon component
        const IconComponent = (LucideIcons as any)[link.icon];
        
        return (
          <a 
            key={link.platform} 
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110 duration-200"
          >
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white bg-opacity-10 backdrop-blur-sm"
            >
              {IconComponent && <IconComponent className="text-white\" size={20} />}
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;