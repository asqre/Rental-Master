import React from "react";

const RadioField = ({ options, onChange, checked }) => {
  return (
    <div className="flex flex-row space-x-[20px]">
      {options.map((option) => (
        <label
          key={option.value}
          className="flex gap-[16px]"
          style={{
            fontFamily: "Noto Sans",
            fontWeight: 400,
            color: "#666666",
            fontSize: "16px",
            lineHeight: "24px",
          }}
        >
          <input
            type="radio"
            value={option.value}
            className="cursor-pointer"
            checked={checked === option.value}
            onChange={onChange}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default RadioField;
