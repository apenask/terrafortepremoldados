import React from 'react';
import { SiteConfig } from '../types';

interface HeroProps {
  config: SiteConfig;
}

const Hero: React.FC<HeroProps> = ({ config }) => {
  return (
    <div 
      className="relative h-[40vh] md:h-[50vh] flex items-center justify-center"
    >
      <div className="text-center z-10 p-4">
        <div className="flex justify-center mb-4">
          <img 
            src={config.logoUrl} 
            alt={config.businessName} 
            className="h-32 md:h-40 object-contain"
          />
        </div>
        <p className="text-white text-sm md:text-base opacity-90 mt-2">{config.tagline}</p>
        <div className="text-white mt-4 space-y-1">
          <p>🌐 TERRAFORTE PREMOLDADOS</p>
          <p>🏭 Mais de 12 ANOS fabricando sonhos!</p>
          <p>⚙️ Credenciados pelo CREA-PE</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;