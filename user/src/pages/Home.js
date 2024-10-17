import React from "react";
import Layout from "../components/layout/Layout";
import Banner from "../section/Banner";
import RoadMap from "../section/RoadMap";
import FeatureBenefits from "../section/FeatureBenefits";
import About from "../section/About";
import TopModels from "../section/topCars/TopModels";

const Home = () => {
  return (
    <>
      <Layout>
        <Banner />
        <About />
        <TopModels />
        <RoadMap />
        <FeatureBenefits />
      </Layout>
    </>
  );
};

export default Home;
