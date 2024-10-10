import React, { useEffect, useState } from "react";
import { BsArrowBarLeft, BsPerson } from "react-icons/bs";

import "../css/Header.css";

// import chatgpt from '../assets/image/chat-gpt.png'
import chatbotg from "../assets/image/chatbot-icon-green.png";
import chatbot from "../assets/image/chatbot-icon.png";
import Suape from "../assets/image/SUAPE.png";
import Chatbot from "./ChatBot";

const Header = () => {
  const [menuChat, setMenuChat] = useState(false);
  const [activeChatbot, setActiveChatbot] = useState(false);

  return (
    <div className="top">
      <div className="title-header">
        <img src={Suape} />
      </div>
      <div className="user">
        <div className="info-user">
          <p>Dr. Fábio</p>
          <span>sair</span>
        </div>
        <div className="foto">
          <BsPerson />
        </div>
        <button
          id="chatgpt"
          onClick={() => {
            setMenuChat(!menuChat);
            setActiveChatbot(!activeChatbot);
          }}
        >
          {activeChatbot ? (
            <img src={chatbotg} alt="logo-chat-gpt" />
          ) : (
            <img src={chatbot} alt="logo-chat-gpt" />
          )}
        </button>
        {menuChat && <Chatbot />}
      </div>
    </div>
  );
};

export default Header;
