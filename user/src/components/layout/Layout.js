import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useData } from "../../context/data";

const Layout = ({ children, NoEmail }) => {
  const { isModalOpen } = useData();

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.paddingRight = `15px`;
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.paddingRight = "0px";
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.paddingRight = "0px";
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  return (
    <div className={`flex flex-col min-h-screen `}>
      <Navbar />
      <main
        className={`flex-grow mt-[72px] ${
          NoEmail ? "mb-10" : "mb-[30vh] md:mb-[40vh]"
        }`}
      >
        {children}
      </main>
      <Footer NoEmail={NoEmail} />
    </div>
  );
};

export default Layout;
