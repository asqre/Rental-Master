import React, { useEffect, useState } from "react";
import InputField from "../../components/common/InputField";
import SelectField from "../../components/common/SelectField";
import { bodyTypes, brands, yesNo, fuel, transmission } from "../../data";
import RadioField from "../../components/common/RadioField";
import ImageField from "../../components/common/ImageField";
import TextArea from "../../components/common/TextArea";
import Button from "../../components/common/Button";
import { generateYears } from "../../utils";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { storage } from "../../../config/firebase";

const AddCar = () => {
  const location = useLocation();
  const carData = location.state?.carData || null;
  const navigate = useNavigate();
  const years = generateYears();
  const [img, setImg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [carDetails, setCarDetails] = useState({
    carName: "",
    carModel: "",
    brand: "",
    bodyType: "",
    transmission: "",
    fuel: "",
    seatingCapacity: "",
    carRegNo: "",
    kmsDriven: "",
    pricePerHour: "",
    fasTag: "",
    sunRoof: "",
    cruiseControl: "",
    camera360: "",
    homeDelivery: "",
    airBags: "",
    description: "",
    frontImageUrl: null,
  });

  useEffect(() => {
    if (carData) {
      setCarDetails(carData);
    }
  }, [carData]);

  const onRadioChange = (e) => {
    setCarDetails({
      ...carDetails,
      [e.target.name]: e.target.value,
    });
  };

  const onInputChange = (e) => {
    setCarDetails({
      ...carDetails,
      [e.target.id]: e.target.value,
    });
  };

  const onSelectChange = (id, value) => {
    setCarDetails({
      ...carDetails,
      [id]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCarDetails({
        ...carDetails,
        frontImageUrl: URL.createObjectURL(file),
      });
      setImg(file);
    } else {
      setCarDetails({
        ...carDetails,
        frontImageUrl: "",
      });
      setImg(null);
    }
  };

  const formattedYears = years.map((year) => {
    return { label: year, value: year };
  });

  const validateForm = () => {
    const newErrors = {};
    if (!carDetails.carName) newErrors.carName = "Car Name is required";
    if (!carDetails.carModel) newErrors.carModel = "Model is required";
    if (!carDetails.brand) newErrors.brand = "Brand is required";
    if (!carDetails.bodyType) newErrors.bodyType = "Body Type is required";
    if (!carDetails.transmission)
      newErrors.transmission = "Transmission is required";
    if (!carDetails.carRegNo)
      newErrors.carRegNo = "Registration Number is required";
    if (!carDetails.pricePerHour)
      newErrors.pricePerHour = "Price per Hour is required";
    if (!carDetails.frontImageUrl)
      newErrors.frontImageUrl = "Front Image is required";

    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    setIsButtonDisabled(!validateForm());
  }, [carDetails]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsButtonDisabled(true);
    setIsLoading(true);
    toast.loading("Please wait...");

    try {
      let imgUrl = "";
      if (img) {
        const storageRef = ref(storage, `cars/${uuidv4()}_${img.name}`);
        const snapshot = await uploadBytes(storageRef, img);
        imgUrl = await getDownloadURL(snapshot.ref);
      }

      const payload = {
        ...carDetails,
        frontImageUrl: imgUrl,
      };

      navigate(-1);
      console.log("Car added successfully:", payload);
    } catch (error) {
      toast.dismiss();
      console.error("Error adding the car: ", error);
    } finally {
      toast.dismiss();
      toast.success("Car added successfully");
      setIsButtonDisabled(false);
      setIsLoading(false);
    }
  };
  return (
    <div className="w-full h-full bg-white rounded-[1rem] py-[2rem] pl-[2rem]">
      <div className="flex flex-col gap-5 w-full h-full overflow-y-auto custom-scrollbar pr-[2rem]">
        <div className="flex flex-row justify-between mb-10">
          <h5>{carData ? "Edit Car" : "Add Car"}</h5>
          <Button name="Back" onClick={() => navigate(-1)} />
        </div>

        <div className="flex flex-col md:flex-row gap-5 w-full">
          <div className="flex-grow">
            <InputField
              label="Car Name"
              placeholder="Type here"
              id="carName"
              value={carDetails.carName}
              onChange={onInputChange}
            />
          </div>

          <div className="flex-grow">
            <SelectField
              label="Select Model"
              placeholder="Select Model"
              items={formattedYears}
              id="carModel"
              value={carDetails.carModel}
              onChange={onSelectChange}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5 w-full">
          <div className="flex-grow">
            <SelectField
              label="Select Brand"
              placeholder="Select Brand"
              items={brands}
              id="brand"
              value={carDetails.brand}
              onChange={onSelectChange}
            />
          </div>

          <div className="flex-grow">
            <SelectField
              label="Select Body Types"
              placeholder="Select Body Types"
              items={bodyTypes}
              id="bodyType"
              value={carDetails.bodyType}
              onChange={onSelectChange}
            />
          </div>

          <div className="flex-grow">
            <SelectField
              label="Select Transmission"
              placeholder="Select Transmission"
              items={transmission}
              id="transmission"
              value={carDetails.transmission}
              onChange={onSelectChange}
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
              id="fuel"
              value={carDetails.fuel}
              onChange={onSelectChange}
            />
          </div>

          <div className="flex-grow">
            <InputField
              type="number"
              label="Seating Capacity"
              placeholder="Type here"
              id="seatingCapacity"
              notRequired="true"
              value={carDetails.seatingCapacity}
              onChange={onInputChange}
            />
          </div>

          <div className="flex-grow">
            <InputField
              label="Car Reg No"
              placeholder="Type here"
              id="carRegNo"
              value={carDetails.carRegNo}
              onChange={onInputChange}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5 w-full">
          <div className="flex-grow">
            <InputField
              type="number"
              label="Kms Driven"
              placeholder="Type here"
              id="kmsDriven"
              notRequired="true"
              value={carDetails.kmsDriven}
              onChange={onInputChange}
            />
          </div>

          <div className="flex-grow">
            <InputField
              type="number"
              label="Price per Hour"
              placeholder="Type here"
              id="pricePerHour"
              value={carDetails.pricePerHour}
              onChange={onInputChange}
            />
          </div>

          <div className="flex-grow">
            <RadioField
              label="FasTag"
              options={yesNo}
              notRequired="true"
              onChange={onRadioChange}
              checked={carDetails.fasTag}
              name="fasTag"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5 w-full">
          <div className="flex-grow">
            <RadioField
              label="Sun Roof"
              options={yesNo}
              notRequired="true"
              onChange={onRadioChange}
              checked={carDetails.sunRoof}
              name="sunRoof"
            />
          </div>

          <div className="flex-grow">
            <RadioField
              label="Cruise Control"
              options={yesNo}
              notRequired="true"
              onChange={onRadioChange}
              checked={carDetails.cruiseControl}
              name="cruiseControl"
            />
          </div>

          <div className="flex-grow">
            <RadioField
              label="360 Camera"
              options={yesNo}
              notRequired="true"
              onChange={onRadioChange}
              checked={carDetails.camera360}
              name="camera360"
            />
          </div>

          <div className="flex-grow">
            <RadioField
              label="Home Delivery"
              options={yesNo}
              notRequired="true"
              onChange={onRadioChange}
              checked={carDetails.homeDelivery}
              name="homeDelivery"
            />
          </div>

          <div className="flex-grow">
            <RadioField
              label="Air Bags"
              options={yesNo}
              notRequired="true"
              onChange={onRadioChange}
              checked={carDetails.airBags}
              name="airBags"
            />
          </div>
        </div>

        <ImageField
          label="Upload Car Front Image"
          onChange={handleImageChange}
          img={img}
          imgUrl={carDetails.frontImageUrl}
        />

        <TextArea
          label="Description"
          placeholder="Type here"
          id="description"
          notRequired="true"
          value={carDetails.description}
          onChange={onInputChange}
        />

        <div className="flex justify-end mb-5">
          <Button
            name="Submit"
            disabled={isButtonDisabled}
            onClick={handleSubmit}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default AddCar;
