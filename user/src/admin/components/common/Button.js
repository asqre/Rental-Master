import React from "react";

const Button = (props) => {
  return (
    <button
      className={`border-2 border-primary rounded-[0.5rem] ${
        props.disabled ? "" : "bg-primary text-white"
      } text-[14px] flex justify-center items-center`}
      onClick={props.onClick}
      style={{
        padding: "7px 20px",
        transition: "all 0.35s",
      }}
      disabled={props.disabled}
    >
      {props.name}
    </button>
  );
};

export default Button;
