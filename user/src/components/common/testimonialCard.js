import React from "react";
import { FaStar } from "react-icons/fa";

function TestimonialCard({ isActive, testimonial }) {
  const StarRating = ({ rating }) => (
    <div className="flex gap-0.5 sm:gap-1 mb-2 sm:mb-3">
      {[1, 2, 3, 4, 5].map((star) => (
        <FaStar
          key={star}
          className={`w-4 h-4 sm:w-5 sm:h-5 ${
            star <= rating ? "text-yellow-400" : "text-gray-200"
          }`}
        />
      ))}
    </div>
  );

  return (
    <div
      className={`bg-white rounded-lg shadow-lg 
        p-4 sm:p-6 md:p-8 
        mx-1 sm:mx-2 
        w-full 
        flex flex-col
        transition-all duration-1000 ease-in-out
        ${isActive 
          ? "scale-100 md:scale-105 shadow-xl" 
          : "scale-95 md:scale-90 opacity-50"
        }
        min-h-[200px] sm:min-h-[220px] md:min-h-[240px]`}
    >
      <div className="flex items-center mb-2 sm:mb-4">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full mr-3 sm:mr-4"
        />
        <div>
          <h3 className="font-semibold text-base sm:text-lg">
            {testimonial.name}
          </h3>
          <p className="text-gray-600 text-xs sm:text-sm">
            {testimonial.role}
          </p>
        </div>
      </div>

      <StarRating rating={testimonial.rating} />

      <p className="text-gray-700 text-sm sm:text-base flex-grow line-clamp-4 sm:line-clamp-none">
        {testimonial.content}
      </p>
    </div>
  );
}

export default TestimonialCard;