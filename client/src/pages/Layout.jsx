import React from "react";
import MainHeader from "../components/MainHeader";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
};

export default Layout;
