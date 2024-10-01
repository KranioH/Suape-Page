import React, { useEffect, useState } from "react";
import { BsPerson } from "react-icons/bs";

import "../css/Header.css";

// import chatgpt from '../assets/image/chat-gpt.png'
import chatgpt from '../assets/image/chatgpt-icon.svg'
import Suape from '../assets/image/SUAPE.png'

const Header = ({tela}) => { 

  return (
    <div className="top">
      <div className="title-header">
        {tela 
        ? (<img src={Suape}/>)
        : (<h1>SUAPE</h1>)
       }
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
