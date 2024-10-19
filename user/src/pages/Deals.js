import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import TabButton from "../components/common/TabButton";

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
      </div>
    </Layout>
  );
};

export default Deals;
