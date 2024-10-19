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
      <div className="w-[100vw] h-[100vh] max-w-xl flex items-center">
        <div
          className="p-4 sm:p-5 relative w-[100vw] sm:w-[80vw] h-[100vh] sm:h-[80vh]"
          style={{
            backgroundColor: "#F8F8F8",
            borderRadius: "15px",
          }}
        >
          {city && (
            <button
              className="absolute top-2 right-2 sm:top-4 sm:right-4 flex items-center justify-center text-lg w-8 h-8 rounded-full bg-[#ddd]"
              style={{
                color: "#000000",
              }}
              onClick={onClose}
            >
              X
            </button>
          )}
          <div className="mt-8 sm:mt-6">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default LocationModal;
