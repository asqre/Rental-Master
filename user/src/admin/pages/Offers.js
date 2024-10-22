import React, { useState } from "react";
import InputField from "../components/common/InputField";
import RadioField from "../components/common/RadioField";
import { offerType } from "../data";
import TextArea from "../components/common/TextArea";
import ImageField from "../components/common/ImageField";
import TermsAndConditionField from "../components/common/TermsAndConditionField";
import Button from "../components/common/Button";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { storage } from "../../config/firebase";
import toast from "react-hot-toast";

const Offers = () => {
  const [offerDetails, setOfferDetails] = useState({
    offerType: "regular",
    couponDiscount: "15",
    description:
      "Flat 15% off on Daily Rentals. Minimum Rental Amount should be Rs 3000.",
    couponName: "DAILY15",
    validto: "2024-12-31",
    img: null,
  });
  const [img, setImg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setOfferDetails({
        ...offerDetails,
        img: URL.createObjectURL(file),
      });
      setImg(file);
    } else {
      setOfferDetails({
        ...offerDetails,
        img: "",
      });
      setImg(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsButtonDisabled(true);
    setIsLoading(true);
    toast.loading("Please wait...");

    try {
      let imgUrl = "";
      if (img) {
        const storageRef = ref(storage, `coupon/${uuidv4()}_${img.name}`);
        const snapshot = await uploadBytes(storageRef, img);
        imgUrl = await getDownloadURL(snapshot.ref);
      }
      setOfferDetails((prev) => ({
        ...prev,
        img: imgUrl,
      }));

      setOfferDetails({
        offerType: offerDetails.offerType,
        couponDiscount: "",
        description: "",
        couponName: "",
        validto: "",
        img: null,
      });
      setImg(null);
    } catch (error) {
      toast.dismiss();
      console.error("Error submitting the offer: ", error);
    } finally {
      toast.dismiss();
      toast.success("Offers created successfully");
      setIsButtonDisabled(false);
      setIsLoading(false);
    }
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
          type="number"
          label="Coupon Discount"
          placeholder="% Off"
          id="couponDiscount"
          value={offerDetails.couponDiscount}
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
                type="date"
                label="Valid To"
                placeholder="Type here"
                id="validto"
                value={offerDetails.validto}
                onChange={onInputChange}
              />
            </div>
          )}
        </div>

        <ImageField
          label="Upload Image"
          onChange={handleImageChange}
          img={img}
          imgUrl={offerDetails.img}
        />

        <TermsAndConditionField label="Terms and Conditions" />

        <div className="flex justify-end mb-5">
          <Button
            name="Create Offer"
            disabled={isButtonDisabled}
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default Offers;
