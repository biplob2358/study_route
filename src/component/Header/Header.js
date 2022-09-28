import "./Header.css";

import React from "react";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <nav className="header">
      <div className="logo-container">
        <img className="logo" src={logo} alt="" />
        <h3>Study Route</h3>
      </div>
    </nav>
  );
};

export default Header;
