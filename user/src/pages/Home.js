import React from "react";
import Layout from "../components/layout/Layout";
import Banner from "../section/Banner";
import RoadMap from "../section/RoadMap";
import FeatureBenefits from "../section/FeatureBenefits";
import About from "../section/About";

const Home = () => {
  return (
    <>
      <Layout>
        <Banner />
        <About />
        <RoadMap />
        <FeatureBenefits />
      </Layout>
    </>
  );
};

export default Home;
