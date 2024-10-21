import React, { useState } from "react";
import Container from "./Container";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import { getRazorpayAPIKey } from "./../../apiClient/payment";
import axios from "axios";
import Spinner from "../common/Spinner";

const Checkout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [order, setOrder] = useState({
    amount: 11188.16*100,
    currency: "INR",
    receipt: "qwsaq1",
  });

  const { data: razorPayAPIKey } = useQuery(
    "razorpay-api-key",
    getRazorpayAPIKey,
    {
      cacheTime: 0,
    }
  );

  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const checkoutHandler = async (order) => {
    try {
      const res = await initializeRazorpay();

      setIsLoading(false);

      if (!res) {
        toast.error("Razorpay SDK Failed to load");
        return;
      }

      const options = {
        key: razorPayAPIKey?.key || "",
        amount: order.amount,
        currency: order.currency,
        name: "Rk Enterprises",
        description: "Rk Enterprises Booking",
        image:
          "https://thumbs.dreamstime.com/b/gradient-fire-phoenix-bird-simple-logo-design-black-bird-simple-logo-design-simple-gradient-fire-phoenix-bird-logo-158339374.jpg",
        order_id: order.id,
        // callback_url: `${process.env.REACT_APP_SERVER_URL}/booking/payment-verification`,
        handler: async function (response) {
          const body = {
            ...response,
          };

          const validateRes = await axios.post(
            `${process.env.REACT_APP_SERVER_URL}/api/booking/payment-verification`,
            body,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          if (validateRes.status !== 200 || !validateRes.data.success) {
            toast.error("Payment verification failed. Please try again later.");
            return;
          }

          toast.success("Payment successful");
        },
        prefill: {
          name: "Amit Anand",
          email: "sd.amitanand@gmail.com",
          contact: "+91-8709543192",
        },
        notes: {
          address: "Rk Enterprises",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const paymentObject = new window.Razorpay(options);

      paymentObject.on("payment.failed", function (response) {
        console.log(response.error.code);
        console.log(response.error.description);
        console.log(response.error.source);
        console.log(response.error.step);
        console.log(response.error.reason);
        console.log(response.error.metadata.order_id);
        console.log(response.error.metadata.payment_id);
      });

      paymentObject.open();
    } catch (error) {
      console.error("Payment initialization failed:", error);
    }
  };

  const paymentHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/api/booking/order`,
        order,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.status !== 200) {
        toast.error("Server error. Please try again later.");
        return;
      }

      const orderData = res.data.data;

      await checkoutHandler(orderData);
    } catch (error) {
      setIsLoading(false);
      console.error("Error while fetching razorpay API key", error);
    }
  };

  return (
    <>
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
            onClick={paymentHandler}
            style={{
              padding: "7px 20px",
            }}
            disabled={isLoading}
          >
            <span>Proceed to pay</span>
            <span>&#8377; 11,188.16</span>
          </button>
        </div>
      </Container>

      <Spinner isLoading={isLoading} />
    </>
  );
};

export default Checkout;
