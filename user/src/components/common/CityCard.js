import React from "react";
import { useData } from "../../context/data";

const CityCard = ({ city, imageUrl, cityUrl }) => {
  const { setCity, setIsModalOpen, setIsLocationModalOpen } = useData();

  return (
    <a
      href={cityUrl}
      onClick={() => {
        setIsModalOpen(false);
        setCity(city);
        setIsLocationModalOpen(false);
      }}
      className="w-full h-full relative block overflow-hidden rounded-lg transition-transform duration-300 transform hover:scale-105"
      itemProp="url"
    >
      <img
        src={imageUrl}
        alt={`Select ${city}`}
        className="w-full h-full object-cover"
      />
      <p className="absolute bottom-2 left-1/2 translate-x-[-50%] text-white font-normal px-3 py-1">
        {city}
      </p>
    </a>
  );
};

export default CityCard;
