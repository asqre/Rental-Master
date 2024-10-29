import React from "react";
import InputField from "../components/common/InputField";

const Cars = () => {
  return (
    <div className="w-full h-full bg-white rounded-[1rem] py-[2rem] pl-[2rem]">
      <div className="flex flex-col gap-5 w-full h-full overflow-y-auto custom-scrollbar pr-[2rem]">
        <h5 className="mb-5">Add Car</h5>

        <div className="flex flex-col md:flex-row gap-5 w-full">
          <div className="flex-grow">
            <InputField
              label="Coupon Name"
              placeholder="Type here"
              id="couponName"
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
