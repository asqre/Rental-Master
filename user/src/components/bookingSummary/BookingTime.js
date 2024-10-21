import React from "react";
import Container from "./Container";
import car from "../../assets/icon/sport-car.png";

const BookingTime = () => {
  return (
    <Container name="Booking Time">
      <div className="flex flex-col gap-2 p-[1rem] px-6 relative">
        <h6 className="text-gray">Pickup Time</h6>

        <div className="flex flex-row justify-between">
          <h6 className="text-secondary">
            <span>Tue, 22 Oct 2024 </span>
            <span>09:30 AM</span>
          </h6>

          <div className="relative flex-grow mx-4">
            <div className="border-b-2 border-dashed h-full" />

            <img
              src={car}
              className="absolute top-[-12px] w-[50px] h-[45px] object-contain animate-carMove"
            />
          </div>

          <h6 className="text-secondary">
            <span>Fri, 25 Oct 2024 </span>
            <span>06:30 PM</span>
          </h6>
        </div>

        <h6 className="text-[10px] text-gray">
          Note: Time will be rounded off to the lower hour
        </h6>
      </div>
    </Container>
  );
};

export default BookingTime;
