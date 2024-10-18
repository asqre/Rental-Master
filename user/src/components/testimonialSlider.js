import React, { useState, useEffect, useCallback } from 'react';
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import TestimonialCard from './common/testimonialCard';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager",
    content: "This product has completely transformed how our team works. The efficiency gains are remarkable.",
    avatar: "/api/placeholder/40/40",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Software Engineer",
    content: "The intuitive interface and powerful features make this tool indispensable for our daily operations.",
    avatar: "/api/placeholder/40/40",
    rating: 4
  },
  {
    id: 3,
    name: "Emma Davis",
    role: "Marketing Director",
    content: "I've never seen such amazing customer support. The team goes above and beyond to help.",
    avatar: "/api/placeholder/40/40",
    rating: 5
  },
  {
    id: 4,
    name: "Alex Thompson",
    role: "UX Designer",
    content: "The attention to detail and user experience is outstanding. Highly recommended!",
    avatar: "/api/placeholder/40/40",
    rating: 4
  }
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

 
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = isMobile ? testimonials.length - 1 : testimonials.length - 1;
      return prevIndex === maxIndex ? 0 : prevIndex + 1;
    });
  }, [isMobile]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = isMobile ? testimonials.length - 1 : testimonials.length - 1;
      return prevIndex === 0 ? maxIndex : prevIndex - 1;
    });
  }, [isMobile]);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(nextSlide, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  
  useEffect(() => {
    setCurrentIndex(0);
  }, [isMobile]);

  return (
    <div 
      className="relative mx-auto p-2"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="overflow-hidden relative p-5">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ 
            transform: `translateX(-${currentIndex * (isMobile ? 100 : 50)}%)` 
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="flex-shrink-0 w-full md:w-1/2 px-2"
            >
              <TestimonialCard 
                testimonial={testimonial}
                isActive={index === currentIndex || (!isMobile && index === currentIndex )}
              />
            </div>
          ))}
        </div>
      </div>


      <button 
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 bg-white rounded-full p-1 md:p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
        aria-label="Previous testimonial"
      >
        <IoChevronBack className="w-4 h-4 md:w-6 md:h-6" />
      </button>

      <button 
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 bg-white rounded-full p-1 md:p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
        aria-label="Next testimonial"
      >
        <IoChevronForward className="w-4 h-4 md:w-6 md:h-6" />
      </button>

 
      <div className="flex justify-center mt-4 gap-2 md:hidden">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={` h-2 rounded-full transition-all ${
              index === currentIndex 
                ? 'w-2 bg-blue-500' 
                : 'w-2 bg-gray'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;