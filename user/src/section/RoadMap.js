import React from "react";
import roadMap from "../assets/roadMap.png";
import verticalRoadMap from "../assets/verticalRoadMap.svg";

function RoadMap() {
  return (
    <div className="flex flex-col items-center 
      gap-8 sm:gap-12 md:gap-16 lg:gap-20 
      my-8 sm:my-12 md:my-16 lg:my-20 
      px-4 sm:px-6 md:px-8 lg:px-10"
    >
      <div className="flex flex-col justify-center items-center 
        gap-2 sm:gap-3 
        text-center 
        mx-auto"
      >
        <h3 className="heading 
          text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
          font-bold 
          mb-2 sm:mb-3"
        >
          How To Book a Self-Drive Car Online
        </h3>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl 
          text-gray-700 
          max-w-prose"
        >
          Book a car online in India from MyChoize in 4 Simple steps.
        </p>
      </div>

      <div className="flex items-center justify-center w-full">
        <img 
          src={roadMap} 
          alt="Steps to book a self-drive car" 
          className="hidden md:inline-block 
            w-full 
            max-w-6xl 
            object-contain 
            px-4 sm:px-6 md:px-8 
            hover:scale-105 
            transition-transform duration-300"
        />
        <img 
          src={verticalRoadMap} 
          alt="Steps to book a self-drive car" 
          className="md:hidden 
            w-full 
            max-w-sm sm:max-w-md 
            object-contain 
            px-4 sm:px-6 
            hover:scale-105 
            transition-transform duration-300"
        />
      </div>
    </div>
  );
}

export default RoadMap;