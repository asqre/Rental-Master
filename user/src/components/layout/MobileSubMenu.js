import React from "react";
import { aboutItems, certificationItems, courseItems } from "../../data";
import { IoIosArrowBack } from "react-icons/io";
import NavDropdownItem from "../common/NavDropdownItem";

const MobileSubMenu = ({ activeSubMenu, onBack }) => {
  let items = [];

  switch (activeSubMenu) {
    case "about":
      items = aboutItems;
      break;
    case "courses":
      items = courseItems;
      break;
    case "certification":
      items = certificationItems;
      break;
    default:
      break;
  }

  return (
    <div className="bg-white h-full w-full">
      <button
        className="flex items-center w-full p-4 hover:bg-[#F8F9FA]"
        onClick={onBack}
      >
        <div onClick={onBack} className="mr-4">
          <IoIosArrowBack className="text-gray-500 text-xl" />
        </div>
        <span className="text-base font-medium capitalize text-[#5F6368]">
          {activeSubMenu}
        </span>
      </button>

      <div className="w-full">
        {items.map((item, index) => (
          <NavDropdownItem
            key={index}
            title={item.title}
            description={item.description}
            link={item.link}
            hoverBgColor="hover:bg-[#F8F9FA]"
          />
        ))}
      </div>
    </div>
  );
};

export default MobileSubMenu;
