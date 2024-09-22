import React from "react";

const CButton2 = ({ href, name }) => {
  return (
    <a
      href={href}
      className="px-6 py-1 bg-[#19B5FE] rounded-lg text-white"
      style={{
        lineHeight: "1.5",
        fontWeight: "500",
        fontSize: "1em",
      }}
    >
      {name}
    </a>
  );
};

export default CButton2;
