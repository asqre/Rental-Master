import React from "react";
import Layout from "../components/layout/Layout";
import Section from "../section/Section";
import Banner from "../section/Banner";
import RoadMap from "../section/RoadMap";

const Home = () => {
  return (
    <>
      <Layout>
        <Banner />
        {/* <Section /> */}
        <RoadMap />
      </Layout>
    </>
  );
};

export default Home;
