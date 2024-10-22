import React, { useState } from "react";
import InputField from "../components/common/InputField";
import RadioField from "../components/common/RadioField";
import { offerType } from "../data";
import TextArea from "../components/common/TextArea";
import ImageField from "../components/common/ImageField";
import TermsAndConditionField from "../components/common/TermsAndConditionField";
import Button from "../components/common/Button";

const Offers = () => {
  const [offerDetails, setOfferDetails] = useState({
    offerType: "regular",
    title: "15% Off",
    description:
      "Flat 15% off on Daily Rentals. Minimum Rental Amount should be Rs 3000.",
    couponName: "DAILY15",
    validto: "2024-12-31",
  });

  const onRadioChange = (e) => {
    setOfferDetails({
      ...offerDetails,
      offerType: e.target.value,
    });
  };

  const onInputChange = (e) => {
    setOfferDetails({
      ...offerDetails,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="w-full h-full bg-white rounded-[1rem] py-[2rem] pl-[2rem]">
      <div className="flex flex-col gap-5 w-full h-full overflow-y-auto custom-scrollbar pr-3">
        <h5 className="mb-5">Create Offer</h5>

        <RadioField
          options={offerType}
          onChange={onRadioChange}
          checked={offerDetails.offerType}
        />

        <InputField
          label="Title"
          placeholder="Type here"
          id="title"
          value={offerDetails.title}
          onChange={onInputChange}
        />

        <TextArea
          label="Description"
          placeholder="Type here"
          id="description"
          value={offerDetails.description}
          onChange={onInputChange}
        />

        <div className="flex flex-col md:flex-row gap-5 w-full">
          <div className="flex-grow">
            <InputField
              label="Coupon Name"
              placeholder="Type here"
              id="couponName"
              value={offerDetails.couponName}
              onChange={onInputChange}
            />
          </div>

          {offerDetails.offerType === "regular" && (
            <div className="flex-grow">
              <InputField
                label="Valid To"
                placeholder="Type here"
                id="validto"
                value={offerDetails.validto}
                onChange={onInputChange}
              />
            </div>
          )}
        </div>

        <ImageField label="Upload Image" />

        <TermsAndConditionField label="Terms and Conditions" />

        <div className="flex justify-end mb-5">
          <Button name="Create Offer" />
        </div>
      </div>
    </div>
  );
};

export default Offers;
