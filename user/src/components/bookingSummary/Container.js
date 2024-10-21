import React from "react";

const Container = ({ name, children }) => {
  return (
    <div className="flex flex-col w-[100%] h-auto">
      <div
        className="flex items-center text-white w-[100%] h-[40px] bg-primary uppercase"
        style={{
          borderRadius: "8px 8px 0 0",
          fontWeight: 500,
          fontSize: "16px",
          lineHeight: "20px",
          padding: "10px 1.5rem",
        }}
      >
        {name}
      </div>

      <div
        style={{
          boxShadow: "0 4px 4px rgba(0,0,0,.08)",
          borderRadius: "0px 0px 8px 8px",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
