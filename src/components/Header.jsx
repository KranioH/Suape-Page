import React from "react";
import { BsPerson } from "react-icons/bs";

import "../css/Header.css";

const Header = () => {
  return (
    <div className="top">
      <div className="title-header">
        <h1>SUAPE</h1>
      </div>
      <div className="user">
        <div className="info-user">
          <p>Dr. Fábio</p>
          <span>sair</span>
        </div>
        <div className="foto">
          <BsPerson />
        </div>
      </div>
    </div>
  );
};

export default Header;
