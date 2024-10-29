import React from "react";
import InputField from "../components/common/InputField";
import SelectField from "../components/common/SelectField";
import { bodyTypes, brands, yesNo, fuel, transmission } from "../data";
import RadioField from "../components/common/RadioField";
import ImageField from "../components/common/ImageField";
import TextArea from "../components/common/TextArea";
import Button from "../components/common/Button";

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
              label="Select Brand"
              placeholder="Select Brand"
              items={brands}
              // onChange={onTimeChange}
              // selectedValue={selectedTime}
            />
          </div>

          <div className="flex-grow">
            <SelectField
              label="Select Body Types"
              placeholder="Select Body Types"
              items={bodyTypes}
              // onChange={onTimeChange}
              // selectedValue={selectedTime}
            />
          </div>

          <div className="flex-grow">
            <SelectField
              label="Select Transmission"
              placeholder="Select Transmission"
              items={transmission}
              // onChange={onTimeChange}
              // selectedValue={selectedTime}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5 w-full">
          <div className="flex-grow">
            <SelectField
              label="Select Fuel"
              placeholder="Select Fuel"
              items={fuel}
              notRequired="true"
              // onChange={onTimeChange}
              // selectedValue={selectedTime}
            />
          </div>

          <div className="flex-grow">
            <InputField
              label="Seating Capacity"
              placeholder="Type here"
              id="seatingCapacity"
              notRequired="true"
              // value={offerDetails.couponName}
              // onChange={onInputChange}
            />
          </div>

          <div className="flex-grow">
            <InputField
              label="Car Reg No"
              placeholder="Type here"
              id="carRegNo"
              // value={offerDetails.couponName}
              // onChange={onInputChange}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5 w-full">
          <div className="flex-grow">
            <InputField
              label="Kms Driven"
              placeholder="Type here"
              id="seatingCapacity"
              notRequired="true"
              // value={offerDetails.couponName}
              // onChange={onInputChange}
            />
          </div>

          <div className="flex-grow">
            <InputField
              label="Price per Hour"
              placeholder="Type here"
              id="seatingCapacity"
              // value={offerDetails.couponName}
              // onChange={onInputChange}
            />
          </div>

          <div className="flex-grow">
            <RadioField
              label="FasTag"
              options={yesNo}
              notRequired="true"
              // onChange={onRadioChange}
              // checked={offerDetails.offerType}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5 w-full">
          <div className="flex-grow">
            <RadioField
              label="Sun Roof"
              options={yesNo}
              notRequired="true"
              // onChange={onRadioChange}
              // checked={offerDetails.offerType}
            />
          </div>

          <div className="flex-grow">
            <RadioField
              label="Cruise Control"
              options={yesNo}
              notRequired="true"
              // onChange={onRadioChange}
              // checked={offerDetails.offerType}
            />
          </div>

          <div className="flex-grow">
            <RadioField
              label="360 Camera"
              options={yesNo}
              notRequired="true"
              // onChange={onRadioChange}
              // checked={offerDetails.offerType}
            />
          </div>

          <div className="flex-grow">
            <RadioField
              label="Home Delivery"
              options={yesNo}
              notRequired="true"
              // onChange={onRadioChange}
              // checked={offerDetails.offerType}
            />
          </div>

          <div className="flex-grow">
            <RadioField
              label="Air Bags"
              options={yesNo}
              notRequired="true"
              // onChange={onRadioChange}
              // checked={offerDetails.offerType}
            />
          </div>
        </div>

        <ImageField
          label="Upload Car Front Image"
          // onChange={handleImageChange}
          // img={img}
          // imgUrl={offerDetails.img}
        />

        <TextArea
          label="Description"
          placeholder="Type here"
          id="description"
          notRequired="true"
          // value={offerDetails.description}
          // onChange={onInputChange}
        />

        <div className="flex justify-end mb-5">
          <Button
            name="Submit"
            // disabled={isButtonDisabled}
            // onClick={handleSubmit}
            // isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default Cars;
