import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "../routes";
import SideNav from "./SideNav";

const Layout = () => {
  return (
    <div className="flex flex-row gap-7 h-screen w-screen p-[1rem] bg-adminBackground">
      {/* Left layout */}
      <div className="h-[100%]">
        <SideNav />
      </div>

      {/* Main content */}
      <div className="flex flex-col flex-grow h-[100%] w-full">
        <Routes>
          {routes.map(
            ({ layout, pages }) =>
              layout === "dashboard" &&
              pages.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
              ))
          )}
        </Routes>
      </div>
    </div>
  );
};

export default Layout;
