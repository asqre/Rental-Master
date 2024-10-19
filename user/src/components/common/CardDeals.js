import React, { useState } from "react";
import PrimaryButton from "./PrimaryButton";
import Modal from "../common/Modal";
import { useData } from "../../context/data";

const CardDeals = ({ offer }) => {
  const [showModal, setShowModal] = useState(false);
  const { setIsModalOpen } = useData();

  const handleCloseModal = () => {
    setShowModal(false);
    setIsModalOpen(false);
  };

  const handleOpenModal = () => {
    setShowModal(true);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="max-w-sm rounded-lg shadow-md overflow-hidden">
        <img
          className="w-full h-64 object-cover"
          src={offer.img}
          alt={offer.title}
        />

        <div className="p-4">
          <h5 className="text-secondary">{offer.couponCode}</h5>

          <h6 className="text-gray mb-4">Valid till {offer.validity}</h6>

          <div className="flex justify-between items-center">
            <PrimaryButton
              name="Book Now"
              trailingIcon={true}
              to={offer.bookingUrl}
            />

            <h6
              className="text-[#5B91E8] underline cursor-pointer text-[12px]"
              onClick={handleOpenModal}
            >
              Terms &amp; Conditions
            </h6>
          </div>
        </div>
      </div>

      <Modal isVisible={showModal} onClose={handleCloseModal}>
        <div className="space-y-4 max-w-lg mx-auto">
          <h5 className="text-primary">{offer.title}</h5>

          <p>{offer.description}</p>

          <h5 className="text-[15px] font-normal text-primary">
            Terms & Conditions
          </h5>

          <div className="max-h-60 overflow-y-auto px-4 py-2 border border-gray-200 rounded-md custom-scrollbar">
            <ul className="list-disc space-y-2 pl-5">
              {offer.terms.map((term, index) => (
                <li key={index}>
                  <h6 className="text-[12px] text-gray">{term}</h6>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-end space-x-4 mt-6">
            <PrimaryButton
              name="Book Now"
              to={offer.bookingUrl}
              trailingIcon={true}
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CardDeals;
