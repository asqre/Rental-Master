import React from "react";
import ModelCard from "../../components/ModelCard";
import { topCarModels } from "../../data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./topModel.css";

const TopModels = () => {
  const settings = {
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
  };

  return (
    <section className="flex mx-auto">
      <div className="w-3/4 m-auto">
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
