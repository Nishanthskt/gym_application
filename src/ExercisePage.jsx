import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import YouTube from "react-youtube";
import Lottie from "lottie-react";
import animationData from './animations/push-ups.json'; // Update with your JSON file path
import "./ExercisePage.css";

const ExercisePage = () => {
  const [activeTab, setActiveTab] = useState("animation");
  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const videoOptions = {
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="exercise-page">
      <header className="exercise-header">
        <button
          className="back-button"
          onClick={() => navigate(-1)} // Navigate to the previous page
        >
          ←
        </button>
        <h1>JUMPING JACKS</h1>
      </header>

      <div className="exercise-content">
        {activeTab === "animation" ? (
          <div className="animation-container">
            <Lottie animationData={animationData} loop={true} autoplay={true} />
          </div>
        ) : (
          <div className="video-container">
            <YouTube
              videoId="Z88Rl5bpnmI" // Replace with your YouTube video ID
              opts={videoOptions}
              className="youtube-player"
            />
          </div>
        )}
      </div>

      <div className="exercise-tabs">
        <button
          className={`tab-button ${
            activeTab === "animation" ? "active" : ""
          }`}
          onClick={() => handleTabClick("animation")}
        >
          Animation
        </button>
        <button
          className={`tab-button ${
            activeTab === "howTo" ? "active" : ""
          }`}
          onClick={() => handleTabClick("howTo")}
        >
          How to do
        </button>
      </div>

      <div className="exercise-details">
        <h2>DURATION</h2>
        <div className="duration-control">
          <button>-</button>
          <span>00:20</span>
          <button>+</button>
        </div>
        <h2>INSTRUCTIONS</h2>
        <p>
          Start with your feet together and your arms by your sides, then jump
          up with your feet apart and your hands overhead.
        </p>
        <p>
          Return to the start position then do the next rep. This exercise
          provides a full-body workout and works all your large muscle groups.
        </p>
      </div>

      <footer className="exercise-footer">
        <span>1/11</span>
        <button>{"<<"}</button>
        <button>CLOSE</button>
        <button>{">>"}</button>
      </footer>
    </div>
  );
};

export default ExercisePage;
