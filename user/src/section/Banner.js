import React, { useState } from "react";
import { useData } from "../context/data";
import Slider from "react-slick";
import DatePicker from "../components/datePicker/DatePicker";
import toast from "react-hot-toast";
import PrimaryButton from "../components/common/PrimaryButton";
import Button from "../components/common/Button";

const Banner = () => {
  const { bannerImages } = useData();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedTab, setSelectedTab] = useState("daily");
  const [searchRide, setSearchRide] = useState({
    pickUpTime: {
      date: null,
      time: null,
    },
    dropOffTime: {
      date: null,
      time: null,
    },
  });

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    pauseOnFocus: false,
    adaptiveHeight: false,
  };

  const handleDateChange = (type, date) => {
    setSearchRide((prev) => ({
      ...prev,
      [type]: {
        ...prev[type],
        date,
      },
    }));
  };

  const handleTimeChange = (type, time) => {
    setSearchRide((prev) => ({
      ...prev,
      [type]: {
        ...prev[type],
        time,
      },
    }));
  };

  const handleSearch = () => {
    try {
      setIsLoading(true);
      const { pickUpTime, dropOffTime } = searchRide;

      if (selectedTab === "daily") {
        if (
          !pickUpTime.date ||
          !pickUpTime.time ||
          !dropOffTime.date ||
          !dropOffTime.time
        ) {
          toast.error("Please select both pickup and dropoff date and time.");
          return;
        }

        const formattedPickUpDate = pickUpTime.date.toDateString();
        const pickUpDateTime = new Date(
          `${formattedPickUpDate} ${pickUpTime.time}`
        );

        const formattedDropOffDate = dropOffTime.date.toDateString();
        const dropOffDateTime = new Date(
          `${formattedDropOffDate} ${dropOffTime.time}`
        );

        if (dropOffDateTime <= pickUpDateTime) {
          toast.error("Dropoff time must be after pickup time.");
          return;
        }

        console.log("Pickup time:", pickUpDateTime);
        console.log("Dropoff time:", dropOffDateTime);
      } else if (selectedTab === "monthly") {
        if (!pickUpTime.date || !pickUpTime.time) {
          toast.error("Please select pickup date and time.");
          return;
        }

        const formattedPickUpDate = pickUpTime.date.toDateString();
        const pickUpDateTime = new Date(
          `${formattedPickUpDate} ${pickUpTime.time}`
        );

        console.log("Pickup time:", pickUpDateTime);
      }
    } catch (error) {
      console.error("Error while searching for rides", error);
      toast.error("An error occurred while searching for rides.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative mb-6 overflow-hidden">
      {Array.isArray(bannerImages) && bannerImages.length > 0 ? (
        <Slider {...settings}>
          {bannerImages?.map((img) => (
            <img
              key={img}
              src={img}
              alt="Banner Images"
              height={724}
              width={1400}
              className="object-cover h-[300px] md:h-[762px]"
            />
          ))}
        </Slider>
      ) : (
        <div className="h-[300px] md:h-[762px] bg-slate-400" />
      )}

      <div
        className="absolute top-[2rem] md:top-[10rem] md:left-[5%] lg:left-[10%] flex flex-col text-center items-center
                  md:items-start md:text-left w-full md:w-auto"
      >
        <div>
          <h1
            className="text-center md:text-left"
            style={{
              color: "#FFFFFF",
              textTransform: "uppercase",
            }}
          >
            Rent Your
            <br />
            <span className="text-[#F3BF47]">Favorite Cars</span>
          </h1>
          <h6
            className="teritiary-text"
            style={{
              color: "#F3BF47",
            }}
          >
            Discover the best deals on Cars at our convenient location.
          </h6>
          <div className="flex items-start mt-5">
            <PrimaryButton to="/" name="Explore Cars" />
          </div>
        </div>
      </div>

      <div
        className="mx-auto mt-5 md:mx-0 md:absolute md:right-[5%] lg:right-[10%] md:top-[10rem] w-[360px]"
        style={{
          boxShadow: "rgba(26,26,29,0.3) 0px 15px 46px -10px",
          transition: "all 0.2s",
        }}
      >
        <div className="flex w-full h-[50px] items-center justify-center">
          <h6
            className={`w-[50%] h-full flex justify-center items-center text-center cursor-pointer rounded-tl-[0.6667rem] ${
              selectedTab === "daily"
                ? "bg-primary text-white"
                : "bg-grayLight text-primary"
            }`}
            onClick={() => setSelectedTab("daily")}
          >
            Daily Rentals
          </h6>
          <h6
            className={`w-[50%] h-full flex justify-center items-center text-center cursor-pointer rounded-tr-[0.6667rem] ${
              selectedTab === "monthly"
                ? "bg-primary text-white"
                : "bg-grayLight text-primary"
            }`}
            onClick={() => setSelectedTab("monthly")}
          >
            Monthly Subscriptions
          </h6>
        </div>
        <div
          className={`rounded-b-[0.6667rem] bg-white flex flex-col justify-between ${
            selectedTab === "daily" ? "h-[350px]" : "h-[250px]"
          }`}
          style={{
            padding: "1.75rem 1.4rem 1.75rem 1.4rem",
          }}
        >
          <h5 className="text-primary">Search your next ride</h5>
          <div className="flex flex-col gap-2 mt-[-35px]">
            {selectedTab === "monthly" ? (
              <>
                <DatePicker
                  pickerName="Pickup"
                  selectedDate={searchRide.pickUpTime.date}
                  selectedTime={searchRide.pickUpTime.time}
                  onDateChange={(date) => handleDateChange("pickUpTime", date)}
                  onTimeChange={(time) => handleTimeChange("pickUpTime", time)}
                />
              </>
            ) : (
              <>
                <DatePicker
                  pickerName="Pickup"
                  selectedDate={searchRide.pickUpTime.date}
                  selectedTime={searchRide.pickUpTime.time}
                  onDateChange={(date) => handleDateChange("pickUpTime", date)}
                  onTimeChange={(time) => handleTimeChange("pickUpTime", time)}
                />
                <DatePicker
                  pickerName="Dropoff"
                  selectedDate={searchRide.dropOffTime.date}
                  selectedTime={searchRide.dropOffTime.time}
                  onDateChange={(date) => handleDateChange("dropOffTime", date)}
                  onTimeChange={(time) => handleTimeChange("dropOffTime", time)}
                />
              </>
            )}
          </div>

          <Button onClick={handleSearch} name="Search" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
