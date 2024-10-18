import React from "react";
import FeatureCard from "../components/common/featureCard";
import { featureCardData } from "../data";

function FeatureBenefits() {
  return (
    <div className="flex flex-col justify-center items-center my-8 sm:my-12 md:my-16 lg:my-20 secondary-bg py-8 sm:py-12 md:py-16 lg:py-20 gap-6 sm:gap-8 md:gap-10 px-4 sm:px-6 md:px-8 lg:px-10">
      <h3 className="heading text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center px-4">
        Features &amp; Benefits of Renting a Self-Drive Car
      </h3>
      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-full max-w-7xl px-4">
        {featureCardData.map((feature, index) => (
          <FeatureCard
            key={index}
            img={feature.img}
            alt={feature.alt}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
}

export default FeatureBenefits;