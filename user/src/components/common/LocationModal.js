import React from "react";
import { useData } from "../../context/data";

const LocationModal = ({ isVisible, onClose, children }) => {
  const { selectedCity } = useData();

  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "locationWrapper" && !!selectedCity) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-70 flex justify-center items-center p-4"
      id="locationWrapper"
      onClick={handleClose}
    >
      <div className="w-full max-w-lg max-h-[90vh] md:max-h-[95vh] flex items-center">
        <div className="w-full max-w-lg h-full mx-auto flex flex-col">
          <div
            className="p-4 sm:p-5 relative h-full overflow-auto custom-scrollbar"
            style={{
              backgroundColor: "#F8F8F8",
              borderRadius: "15px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            {selectedCity && (
              <button
                className="absolute top-2 right-2 sm:top-4 sm:right-4 text-xl font-bold p-2"
                style={{
                  color: "#BDBDBD",
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
    </div>
  );
};

export default LocationModal;
