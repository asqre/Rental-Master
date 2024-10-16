import React, { useEffect, useRef, useState } from "react";
import { MdOutlineAccessTime } from "react-icons/md";

const SelectField = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(props.value || null);
  const selectRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("scroll", handleClickOutside, true);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("scroll", handleClickOutside, true);
    };
  }, []);

  const handleToggle = (e) => {
    setIsOpen(!isOpen);
  };

  const onOptionClicked = (item) => () => {
    setSelectedOption(item.label);
    setIsOpen(false);
    props.onChange(props.id, item.value);
  };

  return (
    <div className="relative w-full" ref={selectRef}>
      <div
        className="relative inline-flex w-full bg-white rounded-lg border border-[#CCCCCC] focus-within:border-2 focus-within:border-[#5BC9FE] h-[40px]"
        style={{
          border: isOpen ? "2px solid #5BC9FE" : "1px solid #CCCCCC",
        }}
      >
        <div
          className="w-4/5 px-4 py-2 cursor-pointer flex items-center"
          onClick={handleToggle}
          style={{ color: selectedOption ? "#000000" : "#A0AEC0" }}
        >
          {selectedOption || "Time"}
        </div>
        <div
          className="absolute right-3 top-1/2 transform -translate-y-1/2 h-6 w-6 flex justify-center items-center cursor-pointer"
          onClick={handleToggle}
        >
          <MdOutlineAccessTime style={{ color: "#5BC9FE" }} />
        </div>
      </div>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute z-50 mt-1 w-full origin-top-right rounded-md bg-white max-h-60 overflow-y-auto custom-scrollbar shadow-lg"
          style={{
            top: "100%",
            left: 0,
            boxShadow: "0 6px 18px 1px rgba(0,0,0,0.12)",
          }}
        >
          {props.items.map((item) => (
            <button
              type="button"
              onClick={onOptionClicked(item)}
              key={item.value}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-[#86D8FF] hover:text-white focus:outline-none"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectField;
