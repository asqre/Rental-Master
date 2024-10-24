import React from "react";
import { HiStar, HiUsers, HiCog } from "react-icons/hi";
import { FaGasPump } from "react-icons/fa";
import Button from "./Button";
import PrimaryButton from "./PrimaryButton";
import { useData } from "../../context/data";

const CarCard = (props) => {
  const { city } = useData();
  return (
    <div className="h-full bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-200 border border-gray-100 text-primary p-2">
      <div className="flex flex-col h-full">
        <div className="relative h-48 sm:h-40 bg-tertiary rounded-lg">
          {props.isPromoted && (
            <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
              Best Deal
            </span>
          )}
          <img
            src={props.image}
            alt={props.name}
            className="w-full h-full object-contain rounded-t-lg"
          />
        </div>

        <div className="flex flex-col flex-1 p-4">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {props.name}
              </h3>
              <p className="text-sm text-gray-500">
                {props.category} or similar
              </p>
            </div>
            <div className="flex items-center gap-1">
              <HiStar className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-sm font-medium">{props.rating}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="flex items-center gap-2">
              <HiUsers className="w-4 h-4 text-gray-400" />
              <span className="text-sm">
                {props.specifications.passengers} Seats
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FaGasPump className="w-4 h-4 text-gray-400" />
              <span className="text-sm">{props.fuelPolicy}</span>
            </div>
            <div className="flex items-center gap-2">
              <HiCog className="w-4 h-4 text-gray-400" />
              <span className="text-sm">
                {props.specifications.transmission}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M9 3L2 12h5v9l7-9h-5z"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-sm">{props.mileage}</span>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-4 mt-auto">
            <div className="flex items-center justify-between">
              <div>
                {props.price.original !== props.price.discounted && (
                  <span className="text-sm text-gray-400 line-through">
                    ${props.price.original}/day
                  </span>
                )}
                <div className="text-2xl font-bold text-gray-800">
                  ${props.price.discounted}
                  <span className="text-sm font-normal text-gray-500">
                    /day
                  </span>
                </div>
                <div className="text-xs text-gray-500">
                  Refundable deposit: ${props.price.deposit}
                </div>
              </div>

              <div className="-mt-5">
                <Button name="Enquire Now" />
              </div>

              <div className="flex flex-col items-end">
                <PrimaryButton name="Book Now" to={`/${city}//booking-summary`} />
                <span className="text-xs text-gray-500 mt-1">
                  Free cancellation
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
