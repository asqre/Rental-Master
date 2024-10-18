import React, { useRef, useState } from "react";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../layout/Layout";
import { MdOutlineMail } from "react-icons/md";
import { FaUnlock } from "react-icons/fa6";
import { FaRegFaceGrin } from "react-icons/fa6";
import LoginInputField from "../common/LoginInputField";
import { IoMdLock } from "react-icons/io";

const LoginSignUp = () => {
  const navigate = useNavigate();
  const loginTab = useRef(null);
  const registerTab = useRef(null);
  const switcherTab = useRef(null);

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

  const loginSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const registerSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

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
            <Link to="/password/forgot">Forget Password ?</Link>
            <input type="submit" value="Login" className="loginBtn" />
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
            <input type="submit" value="Register" className="signUpBtn" />
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default LoginSignUp;
