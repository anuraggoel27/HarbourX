import React from "react";
import Navbar from "./Navbar/Navbar";
const Header = () => {
  return (
    <div className="header__container">
      <div className="header__heading">
        <a href="/">
          <p>Mapify</p>
        </a>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;

