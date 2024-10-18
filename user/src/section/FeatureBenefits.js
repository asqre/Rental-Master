import React from "react";
import FeatureCard from "../components/common/featureCard";
import { featureCardData } from "../data";

function FeatureBenefits() {
  return (
    <div className="flex flex-col justify-center items-center my-20 bg-backgroundGray py-20 gap-10">
      <h3 className="heading">
        Features &amp; Benefits of Renting a Self-Drive Car
      </h3>
      <div className="flex flex-wrap gap-10">
        {
          featureCardData.map((feature, index) => 
            <FeatureCard 
              key={index} 
              img={feature.img} 
              alt={feature.alt} 
              description={feature.description} 
            />
          )
        }
      </div>
    </div>
  );
}

export default FeatureBenefits;
