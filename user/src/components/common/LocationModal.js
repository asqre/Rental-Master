import React from "react";
import { useData } from "../../context/data";

const LocationModal = ({ isVisible, onClose, children }) => {
  const { city } = useData();

  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "locationWrapper" && !!city) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-70 flex justify-center items-center"
      id="locationWrapper"
      onClick={handleClose}
    >
      <div className="relative bg-[#F8F8F8] w-full max-w-xl h-full max-h-[100vh] sm:max-h-[80vh] rounded-lg overflow-hidden flex flex-col">
        {city && (
          <button
            className="absolute top-2 right-2 sm:top-4 sm:right-4 flex items-center justify-center text-lg w-8 h-8 rounded-full bg-[#ddd] text-black"
            onClick={onClose}
          >
            X
          </button>
        )}
        <div className="my-5 flex-grow overflow-hidden">{children}</div>
      </div>
    </div>
  );
};

export default LocationModal;
