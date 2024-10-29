import React from "react";
import InputField from "../components/common/InputField";
import SelectField from "../components/common/SelectField";
import { brands } from "../data";

const Cars = () => {
  return (
    <div className="w-full h-full bg-white rounded-[1rem] py-[2rem] pl-[2rem]">
      <div className="flex flex-col gap-5 w-full h-full overflow-y-auto custom-scrollbar pr-[2rem]">
        <h5 className="mb-5">Add Car</h5>

        <div className="flex flex-col md:flex-row gap-5 w-full">
          <div className="flex-grow">
            <InputField
              label="Car Name"
              placeholder="Type here"
              id="carName"
              // value={offerDetails.couponName}
              // onChange={onInputChange}
            />
          </div>

          <div className="flex-grow">
            <InputField
              label="Car Model"
              placeholder="Type here"
              id="carModel"
              // value={offerDetails.couponName}
              // onChange={onInputChange}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5 w-full">
          <div className="flex-grow">
            <SelectField
              label="Time"
              items={brands}
              // onChange={onTimeChange}
              // selectedValue={selectedTime}
            />
          </div>

          <div className="flex-grow">
            <InputField
              label="Select Body Types"
              placeholder="Type here"
              id="carModel"
              // value={offerDetails.couponName}
              // onChange={onInputChange}
            />
          </div>

          <div className="flex-grow">
            <InputField
              label="Car Model"
              placeholder="Type here"
              id="carModel"
              // value={offerDetails.couponName}
              // onChange={onInputChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cars;
