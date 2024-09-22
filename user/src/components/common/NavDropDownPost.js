import React from "react";

const NavDropDownPost = ({ title, date, imgSrc, href }) => {
  return (
    <a
      className="flex flex-col max-w-[242px] space-y-2 p-5 border hover:bg-white rounded-xl"
      href={href}
    >
      <img
        src={imgSrc}
        alt="post"
        className="h-[143px] w-[242px] object-cover rounded-lg"
      />
      <text
        className="text-[#202124] "
        style={{
          fontWeight: "500",
          fontSize: "1rem",
          lineHeight: "1.5",
        }}
      >
        {title}
      </text>
      <text
        className="text-[#202124]"
        style={{
          fontWeight: "500",
          fontSize: "11px",
          lineHeight: "1.5",
          letterSpacing: "0.5px",
          textTransform: "uppercase",
        }}
      >
        {date}
      </text>
    </a>
  );
};

export default NavDropDownPost;
