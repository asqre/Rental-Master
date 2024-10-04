import React, { useEffect, useCallback } from "react";

const NavModal = ({ isVisible, onClose, children }) => {
  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  useEffect(() => {
    const wrapped = document.getElementById("wrapped");

    if (wrapped) {
      wrapped.addEventListener("click", handleClose);
    }

    return () => {
      if (wrapped) {
        wrapped.removeEventListener("click", handleClose);
      }
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#00000066] hidden lg:flex justify-center top-[64px]"
      id="wrapped"
    >
      <div className="flex flex-col w-[100%] max-h-[90vh]">
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
