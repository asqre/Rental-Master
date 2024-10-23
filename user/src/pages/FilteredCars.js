import React, { useState } from "react";
import CarCard from "../components/common/CarCard";
import Layout from "../components/layout/Layout";
import { MdSort } from "react-icons/md";
import { useData } from "../context/data";

import {
  HiLocationMarker,
  HiCalendar,
  HiSearch,
  HiChevronDown,
  HiChevronUp,
} from "react-icons/hi";

const FilteredCars = () => {
  const { city } = useData();
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
    },
    rating: 4.8,
    isPromoted: true,
    fuelPolicy: "Full to Full",
    mileage: "Unlimited",
  };

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("recommended");
  const [filters, setFilters] = useState({
    priceRange: [0, 500],
    carType: [],
    transmission: [],
    fuelType: [],
  });

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className="bg-tertiary text-white">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg p-3 text-primary">
                <div className="flex items-center gap-2">
                  <HiLocationMarker className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-lg text-primary font-">
                      Pick-up Location
                    </div>
                    <div className="text-xs text-secondary">
                      New York City, NY
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-3 text-primary">
                <div className="flex items-center gap-2">
                  <HiCalendar className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-lg text-primary font-semibold">
                      Pick-up Date
                    </div>
                    <div className="text-xs text-secondary">
                      Oct 24, 2024 10:00 AM
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-3 text-primary">
                <div className="flex items-center gap-2">
                  <HiCalendar className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-lg text-primary font-semibold">
                      Return Date
                    </div>
                    <div className="text-xs text-secondary">
                      Oct 26, 2024 10:00 AM
                    </div>
                  </div>
                </div>
              </div>

              <button className="bg-primary hover:bg-secondary text-white rounded-full p-3 flex items-center justify-center gap-2 transition-colors duration-200">
                <HiSearch className="w-5 h-5" />
                <span className="font-medium">Modify Search</span>
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row gap-6">
            <button
              className="md:hidden w-full bg-white p-4 rounded-lg shadow flex justify-between items-center"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <span className="font-medium">Filters</span>
              {isFilterOpen ? (
                <HiChevronUp className="w-5 h-5" />
              ) : (
                <HiChevronDown className="w-5 h-5" />
              )}
            </button>

            <div
              className={`${
                isFilterOpen ? "block" : "hidden"
              } md:block w-full md:w-64 space-y-4 bg-tertiary rounded-lg text-primary`}
            >
              <div className="flex justify-between items-center p-4">
                <div className="flex items-center gap-2 font-semibold ">
                  <MdSort /> Filters
                </div>
                <button className="text-xs">clear all</button>
              </div>
              {/* Price Range */}
              <div className=" rounded-lg p-4">
                <div className="font-medium mb-4 text-md">Price Range</div>
                <input
                  type="range"
                  min="0"
                  max="500"
                  className="w-full"
                  value={filters.priceRange[1]}
                  onChange={(e) =>
                    setFilters({ ...filters, priceRange: [0, e.target.value] })
                  }
                />
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <span>${filters.priceRange[0]}</span>
                  <span>${filters.priceRange[1]}</span>
                </div>
              </div>

              {/* Car Type */}
              <div className="rounded-lg  p-4">
                <div className="font-bold text-sm mb-4">Segment</div>
                {["Economy", "Compact", "Premium", "Luxury", "SUV", "Van"].map(
                  (type) => (
                    <label key={type} className="flex items-center gap-2 mb-2">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-blue-600"
                        onChange={(e) => {
                          const newTypes = e.target.checked
                            ? [...filters.carType, type]
                            : filters.carType.filter((t) => t !== type);
                          setFilters({ ...filters, carType: newTypes });
                        }}
                      />
                      <span className="text-sm">{type}</span>
                    </label>
                  )
                )}
              </div>

              {/* Transmission */}
              <div className=" rounded-lg  p-4">
                <div className="font-bold text-sm mb-4">Transmission</div>
                {["Automatic", "Manual"].map((type) => (
                  <label key={type} className="flex items-center gap-2 mb-2">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-blue-600"
                      onChange={(e) => {
                        const newTypes = e.target.checked
                          ? [...filters.transmission, type]
                          : filters.transmission.filter((t) => t !== type);
                        setFilters({ ...filters, transmission: newTypes });
                      }}
                    />
                    <span className="text-sm">{type}</span>
                  </label>
                ))}
              </div>

              {/* Fuel Type */}
              <div className=" rounded-lg  p-4">
                <div className="font-bold text-sm mb-4">Fuel Type</div>
                {["Petrol", "Diesel", "Hybrid", "Electric"].map((type) => (
                  <label key={type} className="flex items-center gap-2 mb-2">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-blue-600"
                      onChange={(e) => {
                        const newTypes = e.target.checked
                          ? [...filters.fuelType, type]
                          : filters.fuelType.filter((t) => t !== type);
                        setFilters({ ...filters, fuelType: newTypes });
                      }}
                    />
                    <span className="text-sm">{type}</span>
                  </label>
                ))}
              </div>

              {/* Seating Capacity */}
              <div className=" rounded-lg  p-4">
                <div className="font-bold text-sm mb-4">Seating Capacity</div>
                {[5, 6].map((type) => (
                  <label key={type} className="flex items-center gap-2 mb-2">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-blue-600"
                      onChange={(e) => {}}
                    />
                    <span className="text-sm">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex-1">
              <div className="bg-tertiary rounded-lg shadow p-4 mb-4 flex justify-between items-center">
                <div className="text-primary">
                  <div className="text-sm md:text-xl lg:text-2xl xl:text-3xl font-semibold">
                    24 Cars Available
                  </div>
                  <p className="text-sm ">in {city} </p>
                </div>
                <select
                  className="border rounded-lg px-4 py-2"
                  value={selectedSort}
                  onChange={(e) => setSelectedSort(e.target.value)}
                >
                  <option value="recommended">Recommended</option>
                  <option value="price_low">Price: Low to High</option>
                  <option value="price_high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 ">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                  <CarCard {...carData} />
                ))}
              </div>

              <button className="w-full mt-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                Load More Cars
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FilteredCars;
