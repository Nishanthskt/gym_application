import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./ChatPage.css";
import ChatBackground from "./assets/chat-background.jpg";
import UserIcon from "./assets/user-icon.jpg";
import AIIcon from "./assets/ai-icon.jpg";

const ChatPage = () => {
  const isMobileView = window.innerWidth <= 768;
  const navigate = useNavigate(); // Initialize navigation

  return (
    <div
      className="chat-page"
      style={{
        backgroundImage: isMobileView ? `url(${ChatBackground})` : "none",
      }}
    >
      {/* Chat Header */}
      <div className="chat-header">
        {/* Back Button */}
        <button className="back-button" onClick={() => navigate("/home")}>
          ←
        </button>
        <img src={AIIcon} alt="AI" className="ai-icon" />
        <h2 className="chat-title">BUFFALO AI</h2>
      </div>

      {/* Chat Area */}
      <div className="chat-area">
        <div className="chat-bubble user-bubble">
          <img src={UserIcon} alt="User" className="profile-icon" />
          <p>Hello AI! Can you help me with my workout plan?</p>
        </div>
        <div className="chat-bubble ai-bubble">
          <img src={AIIcon} alt="AI" className="profile-icon" />
          <p>Of course! What goals do you have in mind?</p>
        </div>
        <div className="chat-bubble user-bubble">
          <img src={UserIcon} alt="User" className="profile-icon" />
          <p>I want to gain muscle while staying lean.</p>
        </div>
      </div>

      {/* Input Section */}
      <div className="chat-input">
        <button className="icon-button">📷</button>
        <input type="text" placeholder="Ask Buffalo AI" className="text-input" />
        <button className="icon-button">😊</button>
      </div>
    </div>
  );
};

export default ChatPage;
