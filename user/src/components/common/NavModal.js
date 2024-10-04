import React from "react";

const NavModal = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapped") {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#00000066] hidden lg:flex justify-center top-[64px] "
      id="wrapped"
      onClick={handleClose}
    >
      <div className="flex flex-col w-[100%] max-h-[90vh] ">
        <div
          className="pt-7 pb-16"
          style={{
            backgroundColor: "#F8F9FA",
          }}
        >
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default NavModal;
