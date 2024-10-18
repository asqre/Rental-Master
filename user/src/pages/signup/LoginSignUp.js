import React, { useCallback, useRef, useState } from "react";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import { MdOutlineMail } from "react-icons/md";
import { FaUnlock } from "react-icons/fa6";
import { FaRegFaceGrin } from "react-icons/fa6";
import LoginInputField from "../../components/common/LoginInputField";
import { IoMdLock } from "react-icons/io";
import toast from "react-hot-toast";

const LoginSignUp = () => {
  const navigate = useNavigate();
  const loginTab = useRef(null);
  const registerTab = useRef(null);
  const switcherTab = useRef(null);
  const [error, setError] = useState();

  const [existingUser, setExistingUser] = useState({
    phoneNumber: "",
    password: "",
  });

  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phoneno: "",
  });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phoneNumber) => {
    return phoneNumber.length === 10 && /^\d+$/.test(phoneNumber);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const validateFields = useCallback((user, isLogin) => {
    if (isLogin) {
      if (!user.phoneNumber || !validatePhoneNumber(user.phoneNumber)) {
        return "Phone number must be 10 digits";
      }
      if (!user.password || !validatePassword(user.password)) {
        return "Password must be at least 6 characters long";
      }
    } else {
      if (!user.name) {
        return "Name is required";
      }
      if (!user.email || !validateEmail(user.email)) {
        return "Invalid email address";
      }
      if (!user.phoneNumber || !validatePhoneNumber(user.phoneNumber)) {
        return "Phone number must be 10 digits";
      }
      if (!user.password || !validatePassword(user.password)) {
        return "Password must be at least 6 characters long";
      }
    }
    return null;
  }, []);

  const loginSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const error = validateFields(existingUser, true);
      if (error) {
        toast.error(error);
      } else {
        navigate("/");
      }
    },
    [existingUser, validateFields, navigate]
  );

  const registerSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const error = validateFields(newUser, false);
      if (error) {
        toast.error(error);
      } else {
        navigate("/");
      }
    },
    [newUser, validateFields, navigate]
  );

  const switchTabs = (e, tab) => {
    if (tab === "login") {
      switcherTab.current.classList.add("shiftToNeutral");
      switcherTab.current.classList.remove("shiftToRight");

      registerTab.current.classList.remove("shiftToNeutralForm");
      loginTab.current.classList.remove("shiftToLeft");
    }
    if (tab === "register") {
      switcherTab.current.classList.add("shiftToRight");
      switcherTab.current.classList.remove("shiftToNeutral");

      registerTab.current.classList.add("shiftToNeutralForm");
      loginTab.current.classList.add("shiftToLeft");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const isRegisterFormActive =
        registerTab.current.classList.contains("shiftToNeutralForm");

      if (!isRegisterFormActive) {
        loginSubmit(e);
      } else {
        registerSubmit(e);
      }
    }
  };

  const handleExistingUserChange = (e) => {
    setExistingUser({
      ...existingUser,
      [e.target.id]: e.target.value,
    });
  };

  const handleNewUserChange = (e) => {
    const { id, value } = e.target;
    setNewUser({
      ...newUser,
      [id]: id === "name" ? value.toUpperCase() : value,
    });
  };

  return (
    <Layout>
      <div className="LoginSignUpContainer">
        <div className="LoginSignUpBox">
          <div>
            <div className="login_signUp_toggle">
              <p onClick={(e) => switchTabs(e, "login")}>LOGIN</p>
              <p onClick={(e) => switchTabs(e, "register")}>REGISTER</p>
            </div>
            <button ref={switcherTab}></button>
          </div>
          <form className="loginForm" ref={loginTab} onSubmit={loginSubmit}>
            <LoginInputField
              label="Phone No."
              placeholder="Phone Number"
              leading="+91"
              type="number"
              onKeyDown={handleKeyDown}
              id="phoneNumber"
              value={existingUser.phoneNumber}
              onChange={handleExistingUserChange}
            />

            <LoginInputField
              label="Password"
              placeholder="Password"
              leading={<IoMdLock />}
              type="password"
              onKeyDown={handleKeyDown}
              id="password"
              value={existingUser.password}
              onChange={handleExistingUserChange}
            />
            <Link to="">Forget Password ?</Link>
            <input type="submit" value="Login" className="loginBtn" />

            <div className="text-[12px] text-[#9EA0A0] text-center">
              <span>By clicking through, I agree with the</span>
              <br />
              <span
                className="text-[#5B91E8] underline cursor-pointer"
                onClick={() => window.open("/terms-and-conditions", "_blank")}
              >
                Terms & Conditions
              </span>
              <span> and </span>
              <span
                className="text-[#5B91E8] underline cursor-pointer"
                onClick={() => window.open("/privacy-policy", "_blank")}
              >
                Privacy Policy
              </span>
            </div>
          </form>
          <form
            className="signUpForm"
            ref={registerTab}
            encType="multipart/form-data"
            onSubmit={registerSubmit}
          >
            <LoginInputField
              label="Name"
              placeholder="Name as per Aadhar"
              leading={<FaRegFaceGrin />}
              type="text"
              onKeyDown={handleKeyDown}
              id="name"
              value={newUser.name}
              onChange={handleNewUserChange}
            />

            <LoginInputField
              label="Email"
              placeholder="Email"
              leading={<MdOutlineMail />}
              type="text"
              onKeyDown={handleKeyDown}
              id="email"
              value={newUser.email}
              onChange={handleNewUserChange}
            />

            <LoginInputField
              label="Phone"
              placeholder="Phone Number"
              leading="+91"
              type="number"
              onKeyDown={handleKeyDown}
              id="phoneNumber"
              value={newUser.phoneNumber}
              onChange={handleNewUserChange}
            />

            <LoginInputField
              label="password"
              placeholder="Password"
              leading={<FaUnlock />}
              type="password"
              onKeyDown={handleKeyDown}
              id="password"
              value={newUser.password}
              onChange={handleNewUserChange}
            />
            <input type="submit" value="Register" className="signUpBtn mt-5" />
            <div className="text-[12px] text-[#9EA0A0] text-center">
              <span>By clicking through, I agree with the</span>
              <br />
              <span
                className="text-[#5B91E8] underline cursor-pointer"
                onClick={() => window.open("/terms-and-conditions", "_blank")}
              >
                Terms & Conditions
              </span>
              <span> and </span>
              <span
                className="text-[#5B91E8] underline cursor-pointer"
                onClick={() => window.open("/privacy-policy", "_blank")}
              >
                Privacy Policy
              </span>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default LoginSignUp;
