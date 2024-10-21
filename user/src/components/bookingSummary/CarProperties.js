import React from "react";
import Container from "./Container";

const CarProperties = () => {
  return (
    <Container name="Maruti">
      <div className="flex flex-row w-[100%] h-[100%] gap-5 p-[1rem]">
        <div className="w-[50%] h-[100%]">
          <img
            src="https://app.mychoize.com/IDDRIVE.LIVEBRANDImage/BrandImage/CELERIO_20Jun2023175432.png"
            alt="maruti"
            className="bg-[#ebebeb] rounded-[10px] w-[100%] h-[100%] object-contain"
          />
        </div>

        <div className="flex flex-col w-[50%] h-[100%] gap-[14px]">
          <h6 className="text-[14px] text-primary uppercase">Super Economy</h6>

          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <h6 className="text-gray">Brand</h6>
              <h6 className="text-gray">Body Type</h6>
              <h6 className="text-gray">Transformation</h6>
              <h6 className="text-gray">Fuel</h6>
              <h6 className="text-gray">Car Reg No.</h6>
              <h6 className="text-gray">kms Driven</h6>
            </div>

            <div className="flex-col">
              <h6 className="text-secondary">Maruti suzuki</h6>
              <h6 className="text-secondary">Hatchback</h6>
              <h6 className="text-secondary">Automatic</h6>
              <h6 className="text-secondary">Petrol</h6>
              <h6 className="text-secondary">DL56EE523X</h6>
              <h6 className="text-secondary">12032</h6>
            </div>
          </div>

          <div className="mx-2 border-t border-gray" />
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <h6 className="text-gray">Package Type</h6>
              <h6 className="text-gray">Free kms for rental</h6>
              <h6 className="text-gray">Extra km charges at</h6>
            </div>

            <div className="flex-col">
              <h6 className="text-secondary">300 kms/day</h6>
              <h6 className="text-secondary">1013kms</h6>
              <h6 className="text-secondary">7/km</h6>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CarProperties;
