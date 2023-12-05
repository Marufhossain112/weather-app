import React from "react";
import "./Navbar.css";
import logo from "../../assets/sun-wireless.svg";
import refresh from "../../assets/refresh-circle.svg";
const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="nav-title-container">
        <img src={logo} alt="" />
        <span className="nav-title">Weather 99</span>
      </div>
      <div className="refresh-container">
        <img src={refresh} alt="" />
        <span className="refresh">Refresh</span>
      </div>
    </div>
  );
};

export default Navbar;
