import React from "react";
import bg_home from "../assets/bg_home.webp";

const Home = () => {
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
