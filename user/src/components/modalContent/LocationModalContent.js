import React, { useState } from "react";
import { useData } from "../../context/data";
import SearchField from "../common/SearchField";
import CityCard from "../common/CityCard";
import { cities } from "../../data";

const LocationModalContent = () => {
  const { companyName } = useData();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCities = cities.filter((city) =>
    city.cityName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full">
      <div className="flex-shrink-0 space-y-4 p-4">
        <div className="flex justify-center space-x-4 text-lg">
          <span>{companyName}</span>
          <span>|</span>
          <span>Car Rentals</span>
        </div>

        <div className="w-full">
          <SearchField
            placeholder="Search or type city to select"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="flex-grow overflow-auto custom-scrollbar p-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {filteredCities.map((city, index) => (
            <CityCard
              key={index}
              imageUrl={city.imageUrl}
              city={city.cityName}
              cityUrl={city.cityUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocationModalContent;
