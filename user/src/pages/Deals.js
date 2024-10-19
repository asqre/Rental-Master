import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import TabButton from "../components/common/TabButton";
import CardDeals from "../components/common/CardDeals";
import { dailyOffersData } from "../data";

const Deals = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <Layout>
      <div className="flex flex-col m-auto items-center justify-center">
        <h4 className="">Car Rental Deals & Offers</h4>

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

        <div className="mt-10">
          {activeTab === 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {dailyOffersData.map((offer, index) => (
                <CardDeals key={index} offer={offer} />
              ))}
            </div>
          )}

          {activeTab === 1 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Monthly Offers */}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Deals;
