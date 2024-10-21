import React from "react";
import CarProperties from "../components/bookingSummary/CarProperties";
import CarDetails from "../components/bookingSummary/CarDetails";
import BookingTime from "../components/bookingSummary/BookingTime";

const BookingSummary = () => {
  return (
    <div className="flex flex-row w-[100%] h-[100%]">
      <div className="flex flex-col gap-10 w-[60%] p-10">
        <CarProperties />
        <BookingTime />
        <CarDetails />
      </div>
    </div>
  );
};

export default BookingSummary;
