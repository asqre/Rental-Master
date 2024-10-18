import React from "react";
import WhyUsCard from "../components/common/whyUsCard";
import { whyUsCardData } from "../data";

function WhyUs() {
  return (
    <div className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-10 flex flex-col items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20">
      <h3 className="heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
        Why ride with MohitRentals ?
      </h3>
      <div className="flex flex-col sm:flex-row flex-wrap lg:flex-nowrap justify-center items-center sm:items-stretch gap-6 sm:gap-8">
        {whyUsCardData?.map((card, index) => (
          <WhyUsCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
}

export default WhyUs;