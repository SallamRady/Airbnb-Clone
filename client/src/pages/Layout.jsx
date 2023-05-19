import React from "react";
import MainHeader from "../components/MainHeader";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="p-4 flex flex-col min-h-screen">
      <MainHeader />
      <Outlet />
    </div>
  );
};

export default Layout;
