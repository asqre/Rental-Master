import React, { useState } from "react";
import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import OtpInput from "otp-input-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "./../../config/firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import toast from "react-hot-toast";

const OtpVerification = () => {
  const [phone, setPhone] = useState("");
  const [user, setUser] = useState(null);
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);

  const onCaptchVerify = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: () => {
            onSignup();
          },
          "expired-callback": () => {},
        }
      );
    }
  };

  const onSignup = () => {
    setLoading(true);

    if (!phone || phone.length < 10) {
      toast.error("Please enter a valid phone number");
      setLoading(false);
      return;
    }

    onCaptchVerify();

    const formatPhone = "+" + phone;

    const appVerifier = window.recaptchaVerifier;

    if (!appVerifier) {
      toast.error("reCAPTCHA verifier not initialized");
      setLoading(false);
      return;
    }

    signInWithPhoneNumber(auth, formatPhone, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
        console.log("OTP sent successfully!");
      })
      .catch((error) => {
        console.error("Error sending OTP:", error);
        toast.error(error.message || "Failed to send OTP");
        setLoading(false);
        // Reset reCAPTCHA if there's an error
        if (window.recaptchaVerifier) {
          window.recaptchaVerifier.clear();
          window.recaptchaVerifier = null;
        }
      });
  };

  const onOTPVerify = () => {
    setLoading(true);

    if (!otp || otp.length !== 4) {
      toast.error("Please enter a valid OTP");
      setLoading(false);
      return;
    }

    if (!window.confirmationResult) {
      toast.error("No confirmation result found");
      setLoading(false);
      return;
    }

    window.confirmationResult
      .confirm(otp)
      .then((res) => {
        setUser(res.user);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error verifying OTP:", err);
        toast.error("Invalid OTP. Please try again.");
        setLoading(false);
      });
  };

  return (
    <section className="bg-slate-800 flex items-center justify-center h-screen">
      <div id="recaptcha-container"></div>

      {user ? (
        <h2 className="text-center text-white">👍 Login Success</h2>
      ) : (
        <div className="w-80 flex flex-col gap-4 rounded-lg p-4 bg-slate-700">
          <h4 className="text-center text-white text-xl font-bold mb-6">
            Welcome to <br /> CODE A PROGRAM
          </h4>
          {showOTP ? (
            <>
              <div className="bg-white text-slate-800 w-fit mx-auto p-4 rounded-full">
                <BsFillShieldLockFill size={30} />
              </div>

              <label className="font-bold text-white text-center">
                Enter your OTP
              </label>
              <OtpInput
                value={otp}
                onChange={setOtp}
                OTPLength={4}
                otpType="number"
                disabled={false}
                autoFocus
                className="otp-container"
              />
              <button
                onClick={onOTPVerify}
                className="bg-blue-600 hover:bg-blue-700 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={loading || !otp || otp.length !== 4}
              >
                {loading && <CgSpinner size={20} className="animate-spin" />}
                <span>Verify OTP</span>
              </button>
            </>
          ) : (
            <>
              <div className="bg-white text-slate-800 w-fit mx-auto p-4 rounded-full">
                <BsTelephoneFill size={30} />
              </div>

              <label className="font-bold text-xl text-white text-center">
                Verify your phone number
              </label>

              <PhoneInput
                country={"in"}
                value={phone}
                onChange={setPhone}
                containerClass="!w-full"
                inputClass="!w-full"
                inputProps={{
                  required: true,
                  autoFocus: true,
                }}
              />

              <button
                onClick={onSignup}
                className="bg-blue-600 hover:bg-blue-700 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={loading || !phone || phone.length < 10}
              >
                {loading && <CgSpinner size={20} className="animate-spin" />}
                <span>Send code via SMS</span>
              </button>
            </>
          )}
        </div>
      )}
    </section>
  );
};

export default OtpVerification;
