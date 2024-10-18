import React from "react";
import Layout from "../components/layout/Layout";
import Section from "../section/Section";
import Banner from "../section/Banner";
import RoadMap from "../section/RoadMap";
import FeatureBenefits from "../section/FeatureBenefits";
import WhyUs from "../section/WhyUs";
import TestimonialSection from "../section/Testimonials";

const Home = () => {
  return (
    <>
      <Layout>
        <Banner />
        {/* <Section /> */}
        <RoadMap />
        <FeatureBenefits />
        <WhyUs />
        <TestimonialSection />
      </Layout>
    </>
  );
};

export default Home;
