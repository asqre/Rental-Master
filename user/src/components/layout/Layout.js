import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.paddingRight = `15px`;
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.paddingRight = "0px";
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen]);

  return (
    <div
      className={`flex flex-col min-h-screen ${
        isModalOpen ? "overflow-hidden" : ""
      }`}
    >
      <Navbar setIsModalOpen={setIsModalOpen} />
      <main className="flex-grow mt-[72px]">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
