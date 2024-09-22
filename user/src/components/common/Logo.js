import React from "react";

const Logo = () => {
  return (
    <a href="/" className="flex flex-row space-x-2 items-center justify-center">
      <img
        src="https://imgd.aeplcdn.com/370x208/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-109.jpeg?isig=0&q=80"
        alt="logo"
        className="h-10 w-20"
      />
      <div className="text-xl font-normal text-gray-900">Rental Masters</div>
    </a>
  );
};

export default Logo;
