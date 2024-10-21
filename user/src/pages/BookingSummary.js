import React from "react";
import CarProperties from "../components/bookingSummary/CarProperties";
import CarDetails from "../components/bookingSummary/CarDetails";
import BookingTime from "../components/bookingSummary/BookingTime";
import Checkout from "../components/bookingSummary/Checkout";

const BookingSummary = () => {
  return (
    <div className="flex flex-row gap-5 w-[100%] h-[100%] p-10">
      <div className="flex flex-col gap-10 w-[60%]">
        <CarProperties />
        <BookingTime />
        <CarDetails />
      </div>

      <div className="w-[40%]">
        <Checkout />
      </div>
    </div>
  );
};

export default BookingSummary;
