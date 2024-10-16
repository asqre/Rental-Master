import React from "react";
import Layout from "../components/layout/Layout";
import Section from "../section/Section";
import Banner from "../section/Banner";
import RoadMap from "../section/RoadMap";
import FeatureBenefits from "../section/FeatureBenefits";

const Home = () => {
  return (
    <>
      <Layout>
        <Banner />
        {/* <Section /> */}
        <RoadMap />
        <FeatureBenefits />
      </Layout>
    </>
  );
};

export default Home;
