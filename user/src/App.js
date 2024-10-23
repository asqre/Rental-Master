import React from "react";
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
import BookingSummary from "./pages/BookingSummary";
import Layout from "./admin/layout/Layout";
import FilteredCars from "./pages/FilteredCars";
import CarDetailsPage from "./pages/CarDetailsPage";

const App = () => {
  const user = { role: "admin" };
  const { isLocationModalOpen, setIsLocationModalOpen } = useData();

  const handleCloseLocationModal = () => {
    setIsLocationModalOpen(false);
  };

  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/:city/car-rentals" element={<CityPage />} />
        <Route path="/login" element={<LoginSignUp />} />
        <Route path="/:city/deals" element={<Deals />} />
        <Route path="/:city/our-fleet" element={<Fleets />} />
        <Route path="/:city/cars" element={<FilteredCars />} />
        <Route path="/:city/our-fleet/:car" element={<CarDetailsPage />} />
        <Route path="/:city/about-us" element={<AboutUs />} />
        <Route path="/:city/contact-us" element={<ContactUs />} />
        <Route path="/booking-summary" element={<BookingSummary />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        {/* Admin Routes */}
        {user.role === "admin" && (
          <Route path="/admin/*" element={<Layout />} />
        )}
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
