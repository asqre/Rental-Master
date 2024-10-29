import React, { useState } from "react";
import Button from "../../components/common/Button";
import { Table } from "antd";
import { allCars } from "../../data";
import SearchBar from "../../components/common/SearchBar";

const AllCars = () => {
  const [data, setData] = useState(allCars);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = data.filter((car) => {
    return (
      car.carName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.carModel.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.carRegNo.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const columns = [
    {
      title: "Car Name",
      dataIndex: "carName",
      width: "25%",
    },
    {
      title: "Model",
      dataIndex: "carModel",
      width: "15%",
    },
    {
      title: "Car Reg. No.",
      dataIndex: "carRegNo",
      width: "20%",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (_, recrod) => {
        return (
          <div className="flex flex-row gap-5">
            <Button name="Edit" onClick={() => {}} />

            <Button name="Delete" onClick={() => {}} />
          </div>
        );
      },
    },
  ];

  return (
    <div className="w-full h-full bg-white rounded-[1rem] py-[2rem] pl-[2rem]">
      <div className="flex flex-col gap-5 w-full h-full overflow-y-auto custom-scrollbar pr-[2rem]">
        <div className="flex flex-row justify-between mb-10">
          <h5>Cars</h5>
          <Button name="Add Car" />
        </div>

        <div className="flex justify-end pr-3">
          <SearchBar
            placeholder="Search Car"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <Table
          bordered
          dataSource={filteredData}
          columns={columns}
          pagination={{
            pageSize: 5,
          }}
          scroll={{
            x: 400,
          }}
        />
      </div>
    </div>
  );
};

export default AllCars;
