import React from 'react';
import TestimonialSlider from '../components/testimonialSlider';

const TestimonialSection = () => {
  return (
    <div className="bg-gray-50 py-8 md:py-12 lg:py-20">
      <div className="w-[90%] md:w-[85%] lg:w-[80%] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center min-h-[40vh]">
      
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4 md:space-y-8 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-primary leading-tight">
                What People Say
                <span className="block text-blue-500">About Us</span>
              </h2>
              <p className="text-base text md:text-lg lg:text-xl max-w-2xl lg:max-w-none mx-auto lg:mx-0">
                Join thousands of satisfied customers who have transformed their businesses with our solutions. Our commitment to excellence and customer satisfaction sets us apart.
              </p>
            </div>
          </div>

       
          <div className="w-full">
            <TestimonialSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;