import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BodyTypeSelectionPage.css";
import BannerImage from './assets/BodySelectionTypeBanner.jpg';
import skinnyimg from './assets/skinnyimg.jpg';
import IdealImg from './assets/ideal.jpg';
import FlabbyImg from './assets/flaby.jpg';

const BodyTypeSelectionPage = () => {
  const [selectedBodyType, setSelectedBodyType] = useState("");
  const navigate = useNavigate();

  const handleSelection = (bodyType) => {
    setSelectedBodyType(bodyType);
  };

  const handleNext = () => {
    if (selectedBodyType) {
      console.log(`Selected Body Type: ${selectedBodyType}`);
      navigate("/bmi-calculator"); // Navigate to the BMI page
    } else {
      alert("Please select a body type before proceeding.");
    }
  };

  return (
    <div className="body-type-container">
      <header className="header4">
        <h1 className="title">BUFFALO</h1>
      </header>

      <main className="main-content">
        <div className="banner">
          <img
            src={BannerImage}
            alt="Body Type Options"
            className="banner-image"
          />
          <p className="banner-text">what's your body type?</p>
        </div>

        <div className="body-type-options">
          <div
            className={`body-type-card ${
              selectedBodyType === "Skinny" ? "selected" : ""
            }`}
            onClick={() => handleSelection("Skinny")}
          >
            <img src={skinnyimg} alt="Skinny" />
            <h3>Skinny</h3>
          </div>

          <div
            className={`body-type-card ${
              selectedBodyType === "Ideal" ? "selected" : ""
            }`}
            onClick={() => handleSelection("Ideal")}
          >
            <img src={IdealImg} alt="Ideal" />
            <h3>Ideal</h3>
          </div>

          <div
            className={`body-type-card ${
              selectedBodyType === "Flabby" ? "selected" : ""
            }`}
            onClick={() => handleSelection("Flabby")}
          >
            <img src={FlabbyImg} alt="Flabby" />
            <h3>Flabby</h3>
          </div>
        </div>
      </main>

      <footer className="footer">
        <button className="next-btn" onClick={handleNext}>
          GET STARTED
        </button>
      </footer>
    </div>
  );
};

export default BodyTypeSelectionPage;
