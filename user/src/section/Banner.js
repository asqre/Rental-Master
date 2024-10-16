import React from "react";
import { useData } from "../context/data";
import Slider from "react-slick";
import DateTimePicker from "../components/common/DateTimePicker";

const Banner = () => {
  const { bannerImages } = useData();

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
        className="absolute top-[7rem]"
        style={{
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <div className="">
          <h1
            className="primary-text"
            style={{
              color: "#FFFFFF",
            }}
          >
            Rent Your Favorite Cars
          </h1>
          <h6
            className="teritiary-text"
            style={{
              color: "#F3BF47",
            }}
          >
            Discover the best deals on Cars at our convenient location.
          </h6>
          <button className="btn btn-primary">Explore Cars</button>
        </div>

        <div
          className="absolute w-[360px] h-[350px] rounded-[0.6667rem] bg-white flex flex-col mt-6"
          style={{
            padding: "1.75rem 1.4rem 0 1.4rem",
            boxShadow: "rgba(26,26,29,0.3) 0px 15px 46px -10px",
            transition: "all 0.2s",
          }}
        >
          <h5 className="secondary-text">Search your next ride</h5>
          <DateTimePicker label="Pickup" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
