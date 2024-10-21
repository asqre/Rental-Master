import React from "react";
import Container from "./Container";
import { TbManualGearbox } from "react-icons/tb";
import { BsFuelPumpFill } from "react-icons/bs";
import { PiSuitcaseRolling } from "react-icons/pi";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { FaRoadBarrier } from "react-icons/fa6";

const CarDetails = () => {
  return (
    <Container name="Car Details">
      <div className="flex flex-col w-[100%] h-[100%] ">
        <div className="flex flex-row justify-between p-[1rem] px-6">
          <h6
            className="flex flex-row items-center gap-1"
            style={{
              color: "var(--color-primary)",
            }}
          >
            <TbManualGearbox size={18} />
            <span className="">Manual</span>
          </h6>

          <h6
            className="flex flex-row items-center gap-1"
            style={{
              color: "var(--color-primary)",
            }}
          >
            <BsFuelPumpFill size={18} />
            <span className="">Petrol</span>
          </h6>

          <h6
            className="flex flex-row items-center gap-1"
            style={{
              color: "var(--color-primary)",
            }}
          >
            <PiSuitcaseRolling size={18} />
            <span className="">2 Baggage</span>
          </h6>

          <h6
            className="flex flex-row items-center gap-1"
            style={{
              color: "var(--color-primary)",
            }}
          >
            <MdAirlineSeatReclineExtra size={18} />
            <span className="">5 Seater</span>
          </h6>
        </div>

        <div className="flex flex-row justify-between bg-tertiary p-[1rem] px-6">
          <div className="flex flex-col gap-1">
            <h6
              className="flex flex-row items-center gap-2"
              style={{
                color: "var(--color-secondary)",
              }}
            >
              <AiFillSafetyCertificate size={18} />
              <span className="">Insurance</span>
            </h6>

            <h6
              className="flex flex-row items-center gap-2"
              style={{
                color: "var(--color-secondary)",
              }}
            >
              <FaRoadBarrier size={18} />
              <span className="">Road Side Assistance</span>
            </h6>

            <h6
              className="flex flex-row items-center gap-2"
              style={{
                color: "var(--color-secondary)",
              }}
            >
              <BsFuelPumpFill size={18} />
              <span className="">Fuel</span>
            </h6>
          </div>

          <div className="flex flex-col gap-1">
            <h6 className="text-secondary">Included</h6>
            <h6 className="text-secondary">Included</h6>
            <h6 className="text-secondary">Not Included</h6>
          </div>
        </div>

        <h6 className="p-[1rem] px-6 text-secondary">
          Extra kms will be charged at &#8377;7/km
        </h6>
      </div>
    </Container>
  );
};

export default CarDetails;
