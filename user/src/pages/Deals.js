import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import TabButton from "../components/common/TabButton";
import CardDeals from "../components/common/CardDeals";
import { dailyOffersData, monthlyOffersData } from "../data";

const Deals = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <Layout>
      <div className="flex flex-col m-auto gap-5 items-center justify-center my-[5vh]">
        <h4 className="text-primary">Car Rental Deals &amp; Offers</h4>

        <div className="flex space-x-4">
          <TabButton
            isActive={activeTab === 0}
            onClick={() => setActiveTab(0)}
            label="Daily Offers"
          />

          <TabButton
            isActive={activeTab === 1}
            onClick={() => setActiveTab(1)}
            label="Monthly Offers"
          />
        </div>

        <div className="my-10">
          {activeTab === 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-5">
              {dailyOffersData.map((offer, index) => (
                <CardDeals key={index} offer={offer} />
              ))}
            </div>
          )}

          {activeTab === 1 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-5">
              {monthlyOffersData.map((offer, index) => (
                <CardDeals key={index} offer={offer} />
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Deals;
