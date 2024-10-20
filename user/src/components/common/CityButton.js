import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { BsArrowUpRightSquare } from "react-icons/bs";
import { useData } from "../../context/data";

const CityButton = ({ city }) => {
  const { setIsLocationModalOpen } = useData();
  return (
    <button
      className="flex flex-row gap-2 items-center justify-between text-[14px] border-2 border-primary hover:bg-primary hover:text-white rounded-lg"
      style={{
        padding: "7px 20px",
        color: "#303030 !important",
        fontWeight: "200",
        transition: "all 0.35s",
      }}
      onClick={() => setIsLocationModalOpen(true)}
    >
      <IoLocationOutline />
      <span className="capitalize">{city}</span>
      <BsArrowUpRightSquare />
    </button>
  );
};

export default CityButton;
