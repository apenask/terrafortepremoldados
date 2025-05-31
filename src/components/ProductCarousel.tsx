import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X, Maximize } from 'lucide-react';
import { ProductItem } from '../types';

interface ProductCarouselProps {
  products: ProductItem[];
  primaryColor: string;
  secondaryColor: string;
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ 
  products, 
  primaryColor, 
  secondaryColor 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + products.length) % products.length);
  };

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div className={`relative ${isFullScreen ? 'fixed inset-0 z-50 bg-black' : 'w-full'}`}>
      <h2 
        className="text-xl font-bold mb-4 text-white"
      >
        Nossos Produtos
      </h2>
      
      <div className={`relative overflow-hidden ${isFullScreen ? 'h-[calc(100vh-100px)]' : 'h-[300px] md:h-[400px]'}`}>
        {/* Main Carousel Container */}
        <div 
          className="flex transition-transform duration-500 h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {products.map((product) => (
            <div 
              key={product.id} 
              className="w-full flex-shrink-0 flex flex-col"
            >
              <div className="relative h-full">
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="text-white text-lg font-semibold">{product.name}</h3>
                  <p className="text-white text-sm opacity-90">{product.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide} 
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-70 transition-all"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button 
          onClick={nextSlide} 
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-70 transition-all"
        >
          <ChevronRight size={24} />
        </button>
        
        {/* Fullscreen Toggle */}
        <button 
          onClick={toggleFullScreen} 
          className="absolute top-2 right-2 bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-70 transition-all"
        >
          {isFullScreen ? <X size={24} /> : <Maximize size={24} />}
        </button>
        
        {/* Pagination Dots */}
        <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
          {products.map((_, index) => (
            <button 
              key={index} 
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full ${currentIndex === index ? 'w-4' : ''} transition-all`}
              style={{ 
                backgroundColor: currentIndex === index ? 'white' : 'rgba(255,255,255,0.5)'
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel