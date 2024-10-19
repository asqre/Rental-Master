import React from "react";
import { useData } from "../../context/data";

const CityCard = ({ cityName, imageUrl, cityUrl }) => {
  const { setCity, setIsModalOpen } = useData();

  return (
    <a
      href={cityUrl}
      onClick={() => {
        setIsModalOpen(false);
        setCity(cityName);
      }}
      className="w-full h-full relative block overflow-hidden rounded-lg transition-transform duration-300 transform hover:scale-105"
      itemProp="url"
    >
      <img
        src={imageUrl}
        alt={`Select ${cityName}`}
        className="w-full h-full object-cover"
      />
      <p className="absolute bottom-2 left-1/2 translate-x-[-50%] text-white font-normal px-3 py-1">
        {cityName}
      </p>
    </a>
  );
};

export default CityCard;
