import React from "react";
import roadMap from "../assets/roadMap.png";
import verticalRoadMap from "../assets/verticalRoadMap.svg";
function RoadMap() {
  return (
    <div className="flex flex-col items-center gap-20 my-20">
      <div className="flex flex-col justify-center items-center gap-3">
        <h3 className="heading">
          How To Book a Self-Drive Car Online
        </h3>
        <p className="text-md">
          Book a car online in India from MyChoize in 4 Simple steps.
        </p>
      </div>
      <div className="flex items-center">
        <img src={roadMap} alt="RoadMap" className="hidden md:inline-block" />
        <img src={verticalRoadMap} alt="RoadMap" className="md:hidden" />
      </div>
    </div>
  );
}

export default RoadMap;
