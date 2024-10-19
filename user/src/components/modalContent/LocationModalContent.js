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
    <div className="flex flex-col gap-10 items-center">
      <div className="space-x-4">
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

      <div className="w-full overflow-auto custom-scrollbar h-[75vh] sm:h-[50vh] px-3">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
          {filteredCities.map((city, index) => (
            <CityCard
              key={index}
              imageUrl={city.imageUrl}
              cityName={city.cityName}
              cityUrl={city.cityUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocationModalContent;
