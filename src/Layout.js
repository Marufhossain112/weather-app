import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Location from "./components/Location/Location";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Location />
    </div>
  );
};

export default Layout;
