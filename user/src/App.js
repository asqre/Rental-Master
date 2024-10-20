import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginSignUp from "./pages/signup/LoginSignUp";
import TermsAndConditions from "./pages/TermsAndCondition";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Deals from "./pages/Deals";
import Fleets from "./pages/Fleets";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import { useData } from "./context/data";
import LocationModal from "./components/common/LocationModal";
import LocationModalContent from "./components/modalContent/LocationModalContent";
import CityPage from "./pages/CityPage";

const App = () => {
  const { city } = useData();
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);

  useEffect(() => {
    if (!city) {
      setIsLocationModalOpen(true);
    }
  }, [city]);

  const handleCloseLocationModal = () => {
    setIsLocationModalOpen(false);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:cityName/car-rentals" element={<CityPage />} />
        <Route path="/login" element={<LoginSignUp />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/our-fleet" element={<Fleets />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>

      <LocationModal
        isVisible={isLocationModalOpen}
        onClose={handleCloseLocationModal}
      >
        <LocationModalContent />
      </LocationModal>
    </>
  );
};

export default App;
