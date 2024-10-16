import React from "react";
import { useData } from "../context/data";
import Slider from "react-slick";

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
    <div className="relative mb-6 md:0">
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
    </div>
  );
};

export default Banner;
