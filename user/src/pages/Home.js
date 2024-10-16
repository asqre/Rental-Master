import React from "react";
import Layout from "../components/layout/Layout";
import Section from "../section/Section";
import Banner from "../section/Banner";

const Home = () => {
  return (
    <>
      <Layout>
        <Banner />
        <Section />
      </Layout>
    </>
  );
};

export default Home;
