import React, { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import { IoMenuOutline } from "react-icons/io5";
import NavModal from "../common/NavModal";
import NavDropdownContent from "../common/NavDropdownContent";
import {
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosArrowUp,
} from "react-icons/io";
import CButton2 from "../common/CButton2";
import Logo from "../common/Logo";
import MobileSubMenu from "./MobileSubMenu";

const Navbar = ({ setIsModalOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileSubNav, setMobileSubNav] = useState(null);

  const handleCloseDropdown = () => {
    setIsDropdownOpen(false);
    setActiveDropdown(null);
    setIsModalOpen(false);
  };

  const navLinks = [
    { label: "About Us", to: "about", hasDropdown: true },
    { label: "Our Fleet", to: "courses", hasDropdown: true },
    { label: "Services", to: "discover", hasDropdown: false },
    { label: "Rental Plans", to: "certification", hasDropdown: true },
  ];  

  const handleDropdownClick = (link) => {
    if (link.hasDropdown) {
      if (activeDropdown === link.to) {
        setIsDropdownOpen(false);
        setActiveDropdown(null);
        setIsModalOpen(false);
      } else {
        setIsDropdownOpen(true);
        setActiveDropdown(link.to);
        setIsModalOpen(true);
      }
    } else {
      handleCloseDropdown();
    }
  };

  const handleCloseMenu = (e) => {
    if (e.target.id === "wrapper") {
      setIsOpen(false);
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    setIsModalOpen(isOpen || isDropdownOpen);
  }, [isOpen, isDropdownOpen, setIsModalOpen]);

  const handleMobileSubNav = (link) => {
    if (link.hasDropdown) {
      setMobileSubNav(link.to);
    } else {
      setIsOpen(false);
    }
  };

  const handleBackToMainMenu = () => {
    setMobileSubNav(null);
  };

  return (
    <>
      <nav
        className={`bg-white p-4 w-full z-50 shadow-lg fixed top-0 pr-[15px] ${
          isDropdownOpen ? "" : " lg:pr-0"
        } `}
      >
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <Logo />

          <ul className="hidden lg:flex justify-center space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                className={`cursor-pointer hover:bg-[#F8F9FA] hover:rounded-sm px-3 py-1 flex items-center ${
                  link.to === activeDropdown ? "bg-[#F8F9FA] rounded-sm" : ""
                }`}
                onClick={() => handleDropdownClick(link)}
                href={`#${link.to}`}
              >
                <text
                  style={{
                    lineHeight: "1.5",
                    fontWeight: "500",
                    fontSize: "1em",
                    color: link.to === activeDropdown ? "#202124" : "#5F6368",
                  }}
                >
                  {link.label}
                </text>
                {link.hasDropdown && (
                  <>
                    {activeDropdown === link.to ? (
                      <IoIosArrowUp
                        className="ml-1"
                        style={{
                          color: "#202124",
                        }}
                      />
                    ) : (
                      <IoIosArrowDown
                        className="ml-1"
                        style={{
                          color: "#5F6368",
                        }}
                      />
                    )}
                  </>
                )}
              </a>
            ))}
          </ul>

          <div className="hidden lg:flex mr-5">
            <CButton2 href="/" name="Log in" />
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 focus:outline-none h-8 w-8 hover:bg-gray-100 rounded-md flex items-center justify-center"
            >
              <IoMenuOutline className="h-[24px] w-[24px]" />
            </button>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-300"
          enterFrom="transform translate-x-full"
          enterTo="transform translate-x-0"
          leave="transition ease-in duration-200"
          leaveFrom="transform translate-x-0"
          leaveTo="transform translate-x-full"
        >
          <div
            className="fixed inset-0 z-50 flex justify-end lg:hidden bg-black bg-opacity-10 overflow-y-hidden"
            id="wrapper"
            onClick={handleCloseMenu}
          >
            <div className="bg-white w-[400px] h-full shadow-lg ml-[60px]">
              <div className="flex justify-center items-center h-[72px] border-b border-gray-300">
                <Logo />
              </div>

              <div className="flex flex-col justify-between h-[calc(100vh-72px)]">
                {!!mobileSubNav ? (
                  <MobileSubMenu
                    activeSubMenu={mobileSubNav}
                    onBack={handleBackToMainMenu}
                  />
                ) : (
                  <ul>
                    {navLinks.map((link, index) => (
                      <li key={index}>
                        <a
                          className="flex items-center py-4 px-6 cursor-pointer hover:bg-gray-100"
                          onClick={(e) => {
                            e.preventDefault();
                            handleMobileSubNav(link);
                          }}
                          href={link.to}
                        >
                          <span
                            style={{
                              lineHeight: "1.5",
                              fontWeight: "500",
                              fontSize: "1em",
                              color: "#5F6368",
                              width: "100%",
                            }}
                          >
                            {link.label}
                          </span>
                          {link.hasDropdown && (
                            <IoIosArrowForward className="text-gray-500" />
                          )}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="flex justify-center items-center p-4 mb-20">
                  <CButton2 href="/" name="Log in" />
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </nav>

      <NavModal isVisible={isDropdownOpen} onClose={handleCloseDropdown}>
        <NavDropdownContent activeDropdown={activeDropdown} />
      </NavModal>
    </>
  );
};

export default Navbar;
