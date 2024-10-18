import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginSignUp from "./pages/signup/LoginSignUp";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginSignUp />} />
    </Routes>
  );
};

export default App;
