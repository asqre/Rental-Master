import React from "react";
import { FaCar } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const ModelCard = (props) => {
  return (
    <div className="flex flex-col border rounded-2xl w-[290px] h-[298px] sm:w-[304px] sm:h-[312px]">
      <div className="h-[70%] w-full">
        <img
          src={props.img}
          alt={props.name}
          className="object-contain rounded-2xl"
        />
      </div>

      <div className="flex flex-col justify-between px-[1rem] py-[1rem] h-[30%] w-full rounded-b-2xl bg-slate-100">
        <div className="flex flex-row justify-between ">
          <div className="flex flex-row gap-2 justify-center items-center">
            <span>
              <FaCar size={18} />
            </span>
            <span>{props.model}</span>
          </div>

          <h5>{props.name}</h5>
        </div>

        <div className="flex flex-row justify-end">
          <a href={props.url} className="flex flex-row gap-2 items-center">
            <span>View Details</span>
            <span>
              <FaArrowRightLong />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ModelCard;
