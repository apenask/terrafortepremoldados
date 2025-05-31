import React from 'react';
import { LinkButtonItem } from '../types';
import * as LucideIcons from 'lucide-react';

interface LinkButtonProps {
  button: LinkButtonItem;
  primaryColor: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ button, primaryColor }) => {
  // Dynamically get the icon component
  const IconComponent = button.icon ? (LucideIcons as any)[button.icon] : null;

  return (
    <a 
      href={button.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full transition-all duration-300 transform hover:scale-105 hover:translate-y-[-2px]"
    >
      <div 
        className="flex items-center justify-between px-6 py-4 rounded-lg shadow-lg bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20"
      >
        <span className="text-white font-medium">{button.label}</span>
        {IconComponent && <IconComponent className="text-white" size={20} />}
      </div>
    </a>
  );
};

export default LinkButton;