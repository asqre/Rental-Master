import React from "react";
import { Link } from "react-router-dom";
import { useData } from "../../context/data";

const Logo = ({ showName }) => {
  const { companyName } = useData();
  return (
    <Link
      to="/"
      className="flex flex-row space-x-2 items-center justify-center"
    >
      <img
        src="https://imgd.aeplcdn.com/370x208/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-109.jpeg?isig=0&q=80"
        alt="logo"
        className="h-10 w-20"
      />
      <div
        className={`${
          showName ? "" : "hidden sm:block"
        } text-xl font-normal text-gray-900`}
      >
        {companyName}
      </div>
    </Link>
  );
};

export default Logo;
