import React from "react";
import Layout from "../components/layout/Layout";
import Container from "../components/bookingSummary/Container";
import CarProperties from "../components/bookingSummary/CarProperties";

const BookingSummary = () => {
  return (
    <div className="flex flex-row w-[100%] h-[100%]">
      <div className="flex flex-col w-[60%] p-10">
        <CarProperties />
      </div>
    </div>
  );
};

export default BookingSummary;
