import React from "react";
import ModelCard from "../../components/ModelCard";
import { topCarModels } from "../../data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./topModel.css";

const TopModels = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    pauseOnFocus: false,
    adaptiveHeight: false,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      className="flex flex-col gap-10 bg-tertiary"
      style={{
        padding: "5rem 0",
      }}
    >
      <h3 className="text-center">Top Rented Cars</h3>
      <div className="w-2/3 sm:w-3/4 m-auto">
        <Slider {...settings}>
          {topCarModels.map((model, index) => {
            return (
              <ModelCard
                key={index}
                img={model.img}
                name={model.name}
                model={model.model}
                url={model.url}
              />
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default TopModels;
