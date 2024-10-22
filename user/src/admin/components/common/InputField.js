import React from "react";

const InputField = ({ label, placeholder, id, value, onChange, type }) => {
  return (
    <div className="flex flex-col space-y-[8px]">
      <div
        style={{
          fontFamily: "Noto Sans",
          fontWeight: 600,
          color: "#666666",
          fontSize: "12px",
          lineHeight: "18px",
        }}
      >
        {label}
      </div>
      <div>
        <input
          id={id}
          value={value}
          type={type ? type : "text"}
          placeholder={placeholder}
          className="w-full h-14 p-4 rounded-lg border border-[#CCCCCC] focus:outline-none focus:border-2 focus:border-primary"
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default InputField;
