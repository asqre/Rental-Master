import React from "react";
import { Link } from "react-router-dom";

const CButton2 = ({ to, name }) => {
  return (
    <Link
      to={to}
      className="px-6 py-1 bg-[#19B5FE] rounded-lg text-white"
      style={{
        lineHeight: "1.5",
        fontWeight: "500",
        fontSize: "1em",
      }}
    >
      {name}
    </Link>
  );
};

export default CButton2;
