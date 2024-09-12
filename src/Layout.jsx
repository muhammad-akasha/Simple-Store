import React from "react";
import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "./Components/Navbar";
import LabelBottomNavigation from "./Components/Footer";

const Layout = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <Outlet />
      <LabelBottomNavigation />
    </div>
  );
};

export default Layout;
