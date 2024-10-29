import React from "react";
import Button from "../../components/common/Button";

const AllCars = () => {
  return (
    <div className="w-full h-full bg-white rounded-[1rem] py-[2rem] pl-[2rem]">
      <div className="flex flex-col gap-5 w-full h-full overflow-y-auto custom-scrollbar pr-[2rem]">
        <div className="flex flex-row justify-between mb-10">
          <h5>Cars</h5>
          <Button name="Add Car" />
        </div>

        
      </div>
    </div>
  );
};

export default AllCars;
