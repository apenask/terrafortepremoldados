import React from 'react';
import { SiteConfig } from '../types';
import { Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  config: SiteConfig;
}

const Footer: React.FC<FooterProps> = ({ config }) => {
  return (
    <footer className="mt-8 py-6 px-4 bg-black bg-opacity-30">
      <div className="max-w-md mx-auto">
        <h3 className="text-lg font-semibold mb-4 text-white">
          Contato
        </h3>
        
        <div className="space-y-3">
          <div className="flex items-center text-white">
            <Phone size={18} className="mr-2" />
            <span>{config.contactInfo.phone}</span>
          </div>
          
          <div className="flex items-center text-white">
            <Mail size={18} className="mr-2" />
            <a 
              href={`mailto:${config.contactInfo.email}`}
              className="hover:underline"
            >
              {config.contactInfo.email}
            </a>
          </div>
          
          <div className="flex items-start text-white">
            <MapPin size={18} className="mr-2 mt-1" />
            <span>{config.contactInfo.address}</span>
          </div>
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-300">
          © {new Date().getFullYear()} {config.businessName}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;