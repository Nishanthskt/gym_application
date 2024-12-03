import React, { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./WorkoutChallenge.css";
import logo from './assets/logo.png';

const WorkoutChallenge = () => {
  const [progress, setProgress] = useState(33); // Initial progress (can be dynamic)
  const navigate = useNavigate(); // For navigation

  // Simulate loader progress dynamically
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 50); // Adjust interval duration to control speed
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="challenge-container">
      {/* Header and Progress Section */}
      <div className="challenge-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          <FaArrowLeft />
        </button>
        <h1>FULL BODY CHALLENGE</h1>
      </div>
      <div className="progress-container">
        <p>4 Days Left</p>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p>{progress}%</p>
      </div>

      {/* Day Containers */}
      <div className="challenge-intro">
        <img
          src={logo}
          alt="Logo"
          className="challenge-logo"
        />
        <p>Kick off your full-body fitness journey with energy!</p>
      </div>

      <div className="challenge-days">
        {["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"].map(
          (day, index) => (
            <div
              className={`day-card ${index === 2 ? "active" : ""}`} 
              key={index}
              onClick={() => {
                if (index === 2) navigate("/day3");
              }} // Navigate to Day 3 page
            >
              <span>{day}</span>
              <button className="day-button">{index === 2 ? "🔘" : "➡️"}</button>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default WorkoutChallenge;
