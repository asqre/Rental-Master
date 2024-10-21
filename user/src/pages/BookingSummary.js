import React from "react";
import CarProperties from "../components/bookingSummary/CarProperties";
import CarDetails from "../components/bookingSummary/CarDetails";
import BookingTime from "../components/bookingSummary/BookingTime";
import Checkout from "../components/bookingSummary/Checkout";
import Layout from "../components/layout/Layout";

const BookingSummary = () => {
  return (
    <Layout>
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-5 w-[100%] h-[100%] p-5 lg:p-10">
        <div className="flex flex-col gap-10 w-[100%] lg:w-[70%]">
          <CarProperties />
          <BookingTime />
          <CarDetails />
        </div>

        <div className="w-[100%] lg:w-[30%]">
          <Checkout />
        </div>
      </div>
    </Layout>
  );
};

export default BookingSummary;
