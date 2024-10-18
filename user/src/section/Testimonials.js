import React, { useState, useEffect } from 'react';
import { CiCircleChevRight, CiCircleChevLeft } from "react-icons/ci";

const testimonials = [
  {
    name: "Sarah Johnson",
    text: "Working with this team has been an absolute pleasure. Their attention to detail and commitment to excellence is unmatched.",
    role: "Marketing Director",
    company: "Global Tech",
    rating: 5
  },
  {
    name: "Michael Chen",
    text: "I've never experienced such dedicated service. They went above and beyond my expectations in every way possible.",
    role: "CEO",
    company: "Tech Solutions",
    rating: 5
  },
  {
    name: "Emma Williams",
    text: "The level of professionalism and expertise they bring to the table is remarkable. Highly recommended!",
    role: "Product Manager",
    company: "Innovation Labs",
    rating: 4
  },
  {
    name: "David Miller",
    text: "Outstanding service! They transformed our vision into reality with incredible precision and care.",
    role: "Startup Founder",
    company: "NextGen Startup",
    rating: 5
  },
  {
    name: "Lisa Anderson",
    text: "Their innovative approach and creative solutions have helped us achieve remarkable results.",
    role: "Creative Director",
    company: "Design Studio",
    rating: 5
  },
  {
    name: "James Wilson",
    text: "Exceptional team that delivers outstanding results. They've become an integral part of our success.",
    role: "Operations Manager",
    company: "Enterprise Solutions",
    rating: 4
  }
];

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Add padding testimonials for infinite loop
  const extendedTestimonials = [...testimonials.slice(-1), ...testimonials, ...testimonials.slice(0, 1)];

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        handleNext();
      }, 1000);

      
      return () => clearInterval(interval);
    }

  }, [activeIndex, isPaused]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev +1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const renderStars = (rating) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-4 h-4 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                What People Say 
                <span className="block text-blue-600">About Us</span>
              </h2>
              <p className="text-lg text-gray-600">
                Join thousands of satisfied customers who have transformed their businesses with our solutions. Our commitment to excellence and customer satisfaction sets us apart.
              </p>
            </div>
          </div>

          {/* Right side carousel */}
          <div 
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ 
                  transform: `translateX(-${(activeIndex + 1) * 33.333}%)`,
                }}
              >
                {extendedTestimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="w-1/3 flex-shrink-0 px-2"
                  >
                    <div 
                      className={`bg-white rounded-xl p-6 shadow-lg transform transition-all duration-300
                        ${index === activeIndex + 1 ? 
                          'scale-100 opacity-100 translate-y-0' : 
                          'scale-90 opacity-50 translate-y-4'}`}
                    >
                      <div className="space-y-4">
                        {renderStars(testimonial.rating)}
                        <p className="text-gray-600 italic text-sm">{testimonial.text}</p>
                        <div className="flex items-center space-x-4">
                          <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                            <span className="text-blue-600 font-bold text-lg">
                              {testimonial.name.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 text-sm">{testimonial.name}</h4>
                            <p className="text-xs text-gray-500">{testimonial.role} at {testimonial.company}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors z-10"
            >
              <CiCircleChevLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors z-10"
            >
              <CiCircleChevRight className="w-6 h-6 text-gray-600" />
            </button>

            {/* Dots indicator */}
            <div className="flex justify-center space-x-2 mt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;