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

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:cityName/car-rentals" element={<Home />} />
      <Route path="/login" element={<LoginSignUp />} />
      <Route path="/deals" element={<Deals />} />
      <Route path="/our-fleet" element={<Fleets />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
  );
};

export default App;
