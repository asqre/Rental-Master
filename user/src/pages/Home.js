import React, { useEffect } from "react";
import bg_home from "../assets/bg_home.webp";
import { useData } from "../context/data";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { city } = useData();
  const navigate = useNavigate();

  useEffect(() => {
    if (city) {
      navigate(`/${city}/car-rentals`);
    }
  }, [city]);

  return (
    <div className="w-[100vw] h-[100vh]">
      <img
        src={bg_home}
        alt="background image"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Home;
