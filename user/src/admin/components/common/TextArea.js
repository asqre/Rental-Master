import React from "react";

const TextArea = ({ label, placeholder, id, value, onChange }) => {
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
        <textarea
          id={id}
          rows={3}
          value={value}
          type="text"
          placeholder={placeholder}
          className="w-full p-4 rounded-lg border border-[#CCCCCC] focus:border-secondary focus:ring-secondary"
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default TextArea;