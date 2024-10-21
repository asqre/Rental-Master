import React from "react";
import Container from "./Container";
import Button from "../common/Button";

const Checkout = () => {
  return (
    <Container name="Booking Summary">
      <div className="flex flex-col gap-3 mb-5 p-[1rem] px-6">
        <h6 className="text-gray">Price Breakup</h6>

        <div className="border-slate-300 border-t mr-2" />

        <div className="flex flex-col gap-1">
          <h6 className="flex flex-row justify-between text-secondary w-full">
            <span>Cost Per Hour</span>
            <span>&#8377; 455/hr</span>
          </h6>
          <h6 className="flex flex-row justify-between text-secondary w-full">
            <span>Convenience Fee</span>
            <span>&#8377; 99</span>
          </h6>
          <h6 className="flex flex-row justify-between text-secondary w-full">
            <span>Total Hours</span>
            <span>33</span>
          </h6>
        </div>

        <div className="border-slate-300 border-t mr-2" />

        <div className="flex flex-col gap-1">
          <h6 className="flex flex-row justify-between text-primary w-full text-[14px]">
            <span>Rental Charges</span>
            <span>&#8377; 6,397</span>
          </h6>
          <h6 className="flex flex-row justify-between text-primary w-full text-[14px]">
            <span>GST</span>
            <span>&#8377; 1,791.16</span>
          </h6>
          <h6 className="flex flex-row justify-between text-primary w-full text-[14px]">
            <span>Refundable Deposit</span>
            <span>3,000</span>
          </h6>
        </div>

        <div className="border-slate-300 border-t mr-2" />

        <h5 className="flex flex-row justify-between text-secondary w-full my-5">
          <span>Total</span>
          <span>&#8377; 11,188.16</span>
        </h5>

        <button
          className="rounded-[45px] bg-primary text-white text-[14px] flex gap-2 justify-center items-center"
          onClick={() => {}}
          style={{
            padding: "7px 20px",
          }}
        >
          <span>Proceed to pay</span>
          <span>&#8377; 11,188.16</span>
        </button>
      </div>
    </Container>
  );
};

export default Checkout;
