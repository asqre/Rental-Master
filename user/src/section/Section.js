import React from "react";

const Section = () => {
  return (
    <div className="min-h-screen flex flex-col gap-10 max-w-6xl py-10 mx-auto px-4 sm:px-6 lg:px-4">
      <header className="bg-primary text-white p-6">
        <h1 className="text-4xl font-sans font-bold">
          Welcome to Rental Masters
        </h1>
        <p className="text-lg mb-12">Your best bike and car rental service</p>
      </header>

      <section className="p-6 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Choose Your Ride
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-2xl font-bold">Bike Rentals</h3>
            <p className="text-md my-4">
              Rent top-quality bikes at affordable prices. Ideal for city tours
              or long rides.
            </p>
            <button className="bg-primary text-white px-4 py-2 rounded-lg">
              View Bikes
            </button>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-2xl font-bold">Car Rentals</h3>
            <p className="text-md my-4">
              Comfortable and affordable car rentals for your city or outstation
              trips.
            </p>
            <button className="bg-primary text-white px-4 py-2 rounded-lg">
              View Cars
            </button>
          </div>
        </div>
      </section>

      <section className="p-6 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Popular Rentals
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold">Royal Enfield</h3>
            <p className="text-md mt-2">₹ 1,500/day</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold">Honda Activa</h3>
            <p className="text-md mt-2">₹ 500/day</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold">Hyundai i20</h3>
            <p className="text-md mt-2">₹ 2,000/day</p>
          </div>
        </div>
      </section>

      <section className="p-6 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Customer Testimonials
        </h2>
        <div className="space-y-4">
          <blockquote className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-md">
              "Great experience! The bike was in perfect condition and the
              service was smooth." - John D.
            </p>
          </blockquote>
          <blockquote className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-md">
              "Affordable rentals and friendly customer service. Will rent
              again!" - Sarah L.
            </p>
          </blockquote>
        </div>
      </section>

      <section className="p-6 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">
              What documents do I need to rent a vehicle?
            </h3>
            <p className="text-md mt-2">
              You need a valid driver's license and ID proof.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">
              Is there a security deposit?
            </h3>
            <p className="text-md mt-2">
              Yes, a refundable security deposit is required for all rentals.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section;
