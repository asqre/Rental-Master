import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import ModelCard from "../components/ModelCard";
import { topCarModels2 } from "../data";
import Button from "../components/common/Button";

const Fleets = () => {
  const [visibleCars, setVisibleCars] = useState(8); // Show initial 8 cars
  
  const loadMore = () => {
    setVisibleCars(prev => Math.min(prev + 8, topCarModels2.length));
  };

  return (
    <Layout>
      <div className="px-[6%] lg:px-[10%] xl:px-[16%] py-[100px] flex flex-col">
        <div className="flex flex-col justify-center items-center gap-2 sm:gap-3 text-center mx-auto">
          <h3 className="heading text-xl md:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3">
            Our Fleets
          </h3>
          <p className="text-sm text-gray font-thin">
            Choose from Wide-Range of our Self-Drive Cars.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10 mt-20">
          {topCarModels2.slice(0, visibleCars).map((model, index) => (
            <ModelCard
              key={index}
              img={model.img}
              name={model.name}
              model={model.model}
              url={model.url}
              className="hover:scale-110 transition-all ease-in-out duration-500"
            />
          ))}
        </div>

        {visibleCars < topCarModels2.length && (
          <div className="flex justify-center mt-12">
            <Button
              onClick={loadMore}
              name="View More"
            >
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Fleets;