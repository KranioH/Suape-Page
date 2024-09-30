import React from "react";
import { BsPerson } from "react-icons/bs";

import "../css/Header.css";

// import chatgpt from '../assets/image/chat-gpt.png'
import chatgpt from '../assets/image/chatgpt-icon.svg'

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
        <button id="chatgpt">
          <img src={chatgpt} alt="logo-chat-gpt" />
        </button>
      </div>
    </div>
  );
};

export default Header;
