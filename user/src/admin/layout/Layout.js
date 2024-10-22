import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "../routes";
import SideNav from "./SideNav";

const Layout = () => {
  return (
    <div className="flex flex-row h-screen w-screen p-[1rem]">
      {/* Left layout */}
      <div className="h-screen bg-red-300" style={{
        background: "red"
      }}>
        <SideNav />
      </div>

      {/* Main content */}
      <div className="flex flex-col flex-grow h-screen w-full bg-red-300">
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
