import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AgePage.css";
import AgebgImg from './assets/agepage.jpg';

const AgePage = () => {
  const [age, setAge] = useState(""); // Store the selected age
  const navigate = useNavigate();

  const handleNext = () => {
    if (age) {
      console.log(`Selected Age: ${age}`);
      navigate("/home"); // Navigate to the Home page
    } else {
      alert("Please select or enter your age before proceeding.");
    }
  };

  return (
    <div className="age-page-container">
      <header className="age-header">
        <img
          src={AgebgImg}
          alt="Age Options Banner"
          className="age-banner"
        />
      </header>

      <main className="age-main">
        <div className="age-card">
          <p className="age-prompt">How old are you?</p>
          <input
            type="number"
            placeholder="Enter your age"
            className="age-input"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <button className="next-btn1" onClick={handleNext}>
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </main>
    </div>
  );
};

export default AgePage;
