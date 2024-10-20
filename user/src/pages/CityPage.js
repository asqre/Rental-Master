import React from "react";
import Layout from "../components/layout/Layout";
import Banner from "../section/Banner";
import RoadMap from "../section/RoadMap";
import FeatureBenefits from "../section/FeatureBenefits";
import About from "../section/About";
import TopModels from "../section/topCars/TopModels";
import WhyUs from "../section/WhyUs";
import TestimonialSection from "../section/Testimonials";

const CityPage = () => {
  return (
    <Layout>
      <Banner />
      <About />
      <TopModels />
      <RoadMap />
      <FeatureBenefits />
      <WhyUs />
      <TestimonialSection />
    </Layout>
  );
};

export default CityPage;
