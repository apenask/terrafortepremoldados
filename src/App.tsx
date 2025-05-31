import React from 'react';
import Hero from './components/Hero';
import LinkButton from './components/LinkButton';
import ProductCarousel from './components/ProductCarousel';
import SocialLinks from './components/SocialLinks';
import Footer from './components/Footer';
import siteConfig from './config/siteConfig';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#00238C] via-black to-[#00238C]">
      {/* Hero Section with Background and Logo */}
      <Hero config={siteConfig} />
      
      {/* Main Content */}
      <div className="max-w-md mx-auto px-4 py-6">
        {/* Link Buttons */}
        <div className="space-y-4 my-6">
          {siteConfig.linkButtons.map((button) => (
            <LinkButton 
              key={button.id} 
              button={button} 
              primaryColor={siteConfig.primaryColor} 
            />
          ))}
        </div>
        
        {/* Product Carousel */}
        <div className="my-8">
          <ProductCarousel 
            products={siteConfig.products} 
            primaryColor={siteConfig.primaryColor}
            secondaryColor={siteConfig.secondaryColor}
          />
        </div>
        
        {/* Social Media Links */}
        <SocialLinks 
          links={siteConfig.socialLinks} 
          secondaryColor={siteConfig.secondaryColor} 
        />
      </div>
      
      {/* Footer with Contact Info */}
      <Footer config={siteConfig} />
    </div>
  );
}

export default App;