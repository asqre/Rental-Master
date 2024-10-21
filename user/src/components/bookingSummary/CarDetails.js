import React, { useState } from "react";
import Container from "./Container";
import { TbManualGearbox } from "react-icons/tb";
import { BsFuelPumpFill } from "react-icons/bs";
import { PiSuitcaseRolling } from "react-icons/pi";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { FaRoadBarrier } from "react-icons/fa6";
import { FaReadme } from "react-icons/fa";
import { RiRefund2Fill } from "react-icons/ri";
import { RiPagesLine } from "react-icons/ri";
import { HiReceiptTax } from "react-icons/hi";
import { PiFlagBannerLight } from "react-icons/pi";
import { LuParkingCircle } from "react-icons/lu";
import { GiReceiveMoney } from "react-icons/gi";
import { MdOutlineAddHomeWork } from "react-icons/md";
import { Ri24HoursFill } from "react-icons/ri";
import { FaLuggageCart } from "react-icons/fa";
import { CiShoppingTag } from "react-icons/ci";

const CarDetails = () => {
  const [activeTab, setActiveTab] = useState("Inclusions");

  const renderContent = () => {
    switch (activeTab) {
      case "Inclusions":
        return (
          <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
            <div className="flex flex-row gap-2 items-center flex-grow">
              <div className="p-1 w-[30px] h-[30px] bg-primary flex items-center justify-center rounded-[3px]">
                <FaReadme color="white" size={20} />
              </div>
              <h6 className="text-primary">Base Fare</h6>
            </div>
            <div className="flex flex-row gap-2 items-center flex-grow">
              <div className="p-1 w-[30px] h-[30px] bg-primary flex items-center justify-center rounded-[3px]">
                <RiRefund2Fill color="white" size={20} />
              </div>
              <h6 className="text-primary">Refundable Security Deposit</h6>
            </div>
            <div className="flex flex-row gap-2 items-center flex-grow">
              <div className="p-1 w-[30px] h-[30px] bg-primary flex items-center justify-center rounded-[3px]">
                <RiPagesLine color="white" size={20} />
              </div>
              <h6 className="text-primary">Trip Insurance</h6>
            </div>
            <div className="flex flex-row gap-2 items-center flex-grow">
              <div className="p-1 w-[30px] h-[30px] bg-primary flex items-center justify-center rounded-[3px]">
                <HiReceiptTax color="white" size={20} />
              </div>
              <h6 className="text-primary">GST</h6>
            </div>
          </div>
        );

      case "Exclusion":
        return (
          <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
            <div className="flex flex-row gap-2 items-center flex-grow">
              <div className="p-1 w-[30px] h-[30px] bg-primary flex items-center justify-center rounded-[3px]">
                <BsFuelPumpFill color="white" size={20} />
              </div>
              <h6 className="text-primary">Fuel</h6>
            </div>
            <div className="flex flex-row gap-2 items-center flex-grow">
              <div className="p-1 w-[30px] h-[30px] bg-primary flex items-center justify-center rounded-[3px]">
                <PiFlagBannerLight color="white" size={20} />
              </div>
              <h6 className="text-primary">Tolls</h6>
            </div>
            <div className="flex flex-row gap-2 items-center flex-grow">
              <div className="p-1 w-[30px] h-[30px] bg-primary flex items-center justify-center rounded-[3px]">
                <LuParkingCircle color="white" size={20} />
              </div>
              <h6 className="text-primary">Parking</h6>
            </div>
            <div className="flex flex-row gap-2 items-center flex-grow">
              <div className="p-1 w-[30px] h-[30px] bg-primary flex items-center justify-center rounded-[3px]">
                <GiReceiveMoney color="white" size={20} />
              </div>
              <h6 className="text-primary">Interstate Charges</h6>
            </div>
          </div>
        );

      case "Facilities":
        return (
          <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
            <div className="flex flex-row gap-2 items-center flex-grow">
              <div className="p-1 w-[30px] h-[30px] bg-primary flex items-center justify-center rounded-[3px]">
                <MdOutlineAddHomeWork color="white" size={20} />
              </div>
              <h6 className="text-primary">Doorstep delivery</h6>
            </div>
            <div className="flex flex-row gap-2 items-center flex-grow">
              <div className="p-1 w-[30px] h-[30px] bg-primary flex items-center justify-center rounded-[3px]">
                <Ri24HoursFill color="white" size={20} />
              </div>
              <h6 className="text-primary">24*7 Roadside Assistance</h6>
            </div>
            <div className="flex flex-row gap-2 items-center flex-grow">
              <div className="p-1 w-[30px] h-[30px] bg-primary flex items-center justify-center rounded-[3px]">
                <FaLuggageCart color="white" size={20} />
              </div>
              <h6 className="text-primary">Luggage Carrier</h6>
            </div>
            <div className="flex flex-row gap-2 items-center flex-grow">
              <div className="p-1 w-[30px] h-[30px] bg-primary flex items-center justify-center rounded-[3px]">
                <CiShoppingTag color="white" size={20} />
              </div>
              <h6 className="text-primary">Fasttags</h6>
            </div>
          </div>
        );

      case "T&C":
        return (
          <ul className="list-disc pl-5 text-[12px] text-primary grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <li>Minimum permissible age of renting is 21 years</li>
            <li>
              DL of the renter should be minimum one year old as on rental start
              date
            </li>
            <li>Few cars may be limited to 80 KMs/hr for your safety</li>
            <li>Cancellation charges applicable</li>
          </ul>
        );

      default:
        return null;
    }
  };

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

        <div className="flex flex-row gap-1 w-full h-[36px] bg-tertiary">
          <button
            className={`flex-grow py-2 text-[12px] font-normal ${
              activeTab === "Inclusions"
                ? "bg-primary text-white"
                : "bg-tertiary text-primary"
            }`}
            onClick={() => setActiveTab("Inclusions")}
          >
            Inclusions
          </button>

          <button
            className={`flex-grow py-2 text-[12px] font-normal ${
              activeTab === "Exclusion"
                ? "bg-primary text-white"
                : "bg-tertiary text-primary"
            }`}
            onClick={() => setActiveTab("Exclusion")}
          >
            Exclusion
          </button>

          <button
            className={`flex-grow py-2 text-[12px] font-normal ${
              activeTab === "Facilities"
                ? "bg-primary text-white"
                : "bg-tertiary text-primary"
            }`}
            onClick={() => setActiveTab("Facilities")}
          >
            Facilities
          </button>

          <button
            className={`flex-grow py-2 text-[12px] font-normal ${
              activeTab === "T&C"
                ? "bg-primary text-white"
                : "bg-tertiary text-primary"
            }`}
            onClick={() => setActiveTab("T&C")}
          >
            T&amp;C
          </button>
        </div>

        <div className="bg-backgroundGray p-4">{renderContent()}</div>
      </div>
    </Container>
  );
};

export default CarDetails;
