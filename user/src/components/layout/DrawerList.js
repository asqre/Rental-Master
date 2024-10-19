import React from "react";
import Logo from "../common/Logo";
import CButton2 from "../common/CButton2";

const DrawerList = ({ navLinks }) => {
  return (
    <div className="bg-white w-[18rem]">
      <div className="flex justify-center items-center h-[73px] border-b border-gray-300">
        <Logo />
      </div>

      <div className="flex flex-col items-center justify-between h-full">
        <ul>
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                className="flex items-center py-4 px-6 cursor-pointer hover:bg-gray-100"
                href={`/${link.to}`}
              >
                <span
                  style={{
                    lineHeight: "1.5",
                    fontWeight: "500",
                    fontSize: "14px",
                    color: "rgba(0,0,0,0.87)",
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  {link.label}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <CButton2 to="/login" name="Login" />
      </div>
    </div>
  );
};

export default DrawerList;
