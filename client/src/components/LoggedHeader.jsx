import React from "react";
import {LoggedNavbar} from "./";
const LoggedHeader = () => {
  return (
    <div className="header__container">
      <div className="header__heading">
        <a href="/">
          <p>Mapify</p>
        </a>
      </div>
      <LoggedNavbar />
    </div>
  );
};

export default LoggedHeader;

