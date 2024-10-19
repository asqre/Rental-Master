import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import Banner from "../section/Banner";
import RoadMap from "../section/RoadMap";
import FeatureBenefits from "../section/FeatureBenefits";
import About from "../section/About";
import TopModels from "../section/topCars/TopModels";
import WhyUs from "../section/WhyUs";
import TestimonialSection from "../section/Testimonials";
import LocationModal from "../components/common/LocationModal";
import LocationModalContent from "../components/modalContent/LocationModalContent";
import { useData } from "../context/data";

const Home = () => {
  const { setIsModalOpen } = useData();
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(true);

  const handleCloseLocationModal = () => {
    setIsLocationModalOpen(false);
    setIsModalOpen(false);
  };

  return (
    <>
      <Layout>
        <Banner />
        <About />
        <TopModels />
        <RoadMap />
        <FeatureBenefits />
        <WhyUs />
        <TestimonialSection />
      </Layout>

      <LocationModal
        isVisible={isLocationModalOpen}
        onClose={handleCloseLocationModal}
      >
        <LocationModalContent />
      </LocationModal>
    </>
  );
};

export default Home;
