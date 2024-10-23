import React from "react";
import { HiStar, HiUsers, HiCog } from "react-icons/hi";
import { FaGasPump } from "react-icons/fa";
import Layout from "../components/layout/Layout";

function CarDetailsPage() {
  const carData = {
    name: "Toyota Camry",
    category: "Sedan",
    image:
      "https://app.mychoize.com/IDDRIVE.LIVEBRANDImage/BrandImage/BALENO_15Jun2023111905.png",
    price: {
      original: 89,
      discounted: 65,
      deposit: 199,
    },
    specifications: {
      passengers: 5,
      bags: 2,
      transmission: "Automatic",
      airCondition: true,
      type: "Diesel",
    },
    rating: 4.8,
    isPromoted: true,
    fuelPolicy: "Full to Full",
    mileage: "Unlimited",
    desc1:
      "Since the time Innova Crysta was launched in the Indian market,people have showered it with love. This seven-seater car is perfect for a family road trip. Imposing new front silhouettes,stunning diamond-cut alloy wheels, crafted leather seats,Innova's legendary capabilities is power punched in ToyotaCrysta. Its exterior design spells dominance and thewell-appointed interior is steeped in luxury and elegance. Thecar comes with a well-equipped cabin, a sturdy engine,feature-filled interior, seven airbags, and tremendous fuelefficiency. All these things are crucial for a long road trip sothat you do not have to fret over petty things. Make this dreamcar yours by availing Innova car rental service at MyChoize.MyChoize Self Drive Cars offer you, Innova Crysta, on rent, fora day, week, or fortnight. Or you can avail the Innova Crystasubscription for a month.<br /><br />The spacious 7-seater car rental with its unequalled space andplushness offers you unmatched safety, connectivity, refinedpower and an unrivalled driving experience.",
    desc2:
      " Unmatched boldness and peerless comfort, driving an InnovaCrysta is always a treat. Not looking to make huge investmentsright now? You can opt for Innova Crysta monthly rental fromMyChoize at pocket-friendly prices. As it is a self-driveexperience, your chauffeur cost is also eliminated.<br /><br /> Innova Car Rental comes with unlimited KMS. You couldalso get self-drive Innova Crysta rental service delivered atyour doorstep.",
  };

  return (
    <Layout>
      <div className="px-[5%] lg:px-[16%] py-[50px] lg:py-[100px] flex flex-col items-center gap-10 lg:gap-20 text-gray">
        <div className="shadow-lg rounded-lg">
          <div className="bg-primary p-4 rounded-t-lg text-white">
            {carData.name}
          </div>
          <div className="flex flex-col xl:flex-row p-1 md:p-4">
            <div className="w-2/3 mx-auto xl:w-1/2 flex flex-col justify-start">
              <img
                src="https://www.mychoize.com/mychoize-live/current/files/fleets/Toyota_Innova_Crysta.jpg"
                alt="carImg"
                className="w-full object-contain p-5 lg:mt-10"
              />
            </div>
            <div className="p-5 xl:p-4 w-full xl:w-1/2">
              <div className="font-bold text-md md:text-lg">
                {carData.name} on Rent at Rental Masters
              </div>
              <p className="text-xs md:text-sm mt-2">
                {carData.desc1}
              </p>
              <br />
              <div className="font-bold text-md md:text-lg">
                Affordable {carData.name} Subscription by Rental Masters
              </div>
              <p className="text-xs md:text-sm">
                {carData.desc2}
              </p>

              <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-3 mt-20">
                <div className="flex items-center gap-2">
                  <HiUsers className="w-4 h-4 text-gray-400" />
                  <span className="text-xs md:text-sm">
                    {carData.specifications.passengers} Seats
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <FaGasPump className="w-4 h-4 text-gray-400" />
                  <span className="text-xs md:text-sm">
                    {carData.fuelPolicy}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <HiCog className="w-4 h-4 text-gray-400" />
                  <span className="text-xs md:text-sm">
                    {carData.specifications.transmission}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M9 3L2 12h5v9l7-9h-5z"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-xs md:text-sm">{carData.mileage}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 className="heading text-xl text-center md:text-2xl lg:text-4xl  px-4">
          Why you should hire {carData.name}
        </h3>

        <div className="flex flex-col xl:flex-row w-full shadow-lg rounded-lg p-1 md:p-4">
          <div className="w-full xl:w-1/2 p-4">
            <img
              src="https://www.mychoize.com/assets/img/why_left.png"
              alt="carName"
              className="w-full  object-contain"
            />
          </div>
          <div className="w-full xl:w-1/2 p-4">
            <div className="text-primary text-lg md:text-2xl font-bold ">
              Why rent {carData.name}
            </div>
            <div className="font-semibold text-md md:text-lg mt-2">
              {carData.name}: Features & Benefits
            </div>
            <p className="text-xs md:text-md mt-2">
              Why should you hire {carData.name} from Rental Masters Self-Drive Cars?
              <br />
              <div className="mt-2 text:sm md:text-md">
                {carData.name} Car Features & Benefits:
              </div>
            </p>
            <ul className="list-disc pl-5 text-xs md:text-sm mt-2">
              {Object.entries(carData.specifications).map(
                ([key, value], index) => (
                  <li key={index} className="mt-1">
                    {`${
                      key.charAt(0).toUpperCase() + key.slice(1)
                    }: ${value.toString()}`}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CarDetailsPage;
