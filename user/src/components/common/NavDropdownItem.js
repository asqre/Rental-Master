import React from "react";

const NavDropdownItem = ({ title, description, link, hoverBgColor }) => {
  return (
    <a
      className={`min-h-[64px] flex flex-col px-1 py-2 rounded-md ${
        hoverBgColor
          ? `${hoverBgColor} max-w-[400px] px-4`
          : "hover:bg-white max-w-[292px]"
      } cursor-pointer`}
      href={link}
    >
      <text
        className="text-[#202124] "
        style={{
          fontWeight: "500",
          fontSize: "1em",
          lineHeight: "1.5",
        }}
      >
        {title}
      </text>
      <text
        className="text-[#5F6368] font-bold text-lg"
        style={{
          fontWeight: "400",
          fontSize: "14px",
          lineHeight: "1.71",
          letterSpacing: "0.15px",
        }}
      >
        {description}
      </text>
    </a>
  );
};

export default NavDropdownItem;
