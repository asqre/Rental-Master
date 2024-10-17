import React, { useState } from "react";
import { useData } from "../context/data";
import Slider from "react-slick";
import DatePicker from "../components/datePicker/DatePicker";

const Banner = () => {
  const { bannerImages } = useData();
  const [pickUpTime, setPickUpTime] = useState({
    date: null,
    time: null,
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

  const handleDateChange = (date) => {
    setPickUpTime({ ...pickUpTime, date });
  };

  const handleTimeChange = (time) => {
    setPickUpTime({ ...pickUpTime, time });
  };

  return (
    <div className="relative mb-6 md:0 overflow-hidden">
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
            className="primary-text text-center md:text-left"
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
          <button className="btn btn-primary mt-5">Explore Cars</button>
        </div>
      </div>

      <div
        className="md:absolute md:right-[5%] lg:right-[10%] top-[10rem] w-[360px] h-[350px] rounded-[0.6667rem] bg-white flex flex-col justify-between"
        style={{
          padding: "1.75rem 1.4rem 1.75rem 1.4rem",
          boxShadow: "rgba(26,26,29,0.3) 0px 15px 46px -10px",
          transition: "all 0.2s",
        }}
      >
        <h5 className="secondary-text">Search your next ride</h5>
        <div className="flex flex-col gap-2 mt-[-35px]">
          <DatePicker
            pickerName="Pickup"
            selectedDate={pickUpTime.date}
            selectedTime={pickUpTime.time}
            onDateChange={handleDateChange}
            onTimeChange={handleTimeChange}
          />

          <DatePicker
            pickerName="Dropoff"
            selectedDate={pickUpTime.date}
            selectedTime={pickUpTime.time}
            onDateChange={handleDateChange}
            onTimeChange={handleTimeChange}
          />
        </div>

        <button className="btn btn-secondary">Search</button>
      </div>
    </div>
  );
};

export default Banner;
