import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BMICalculatorPage.css";

const BMICalculatorPage = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [showSpeedometer, setShowSpeedometer] = useState(false);
  const navigate = useNavigate();

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const calculatedBMI = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      setBmi(calculatedBMI);
      setShowSpeedometer(true);
    } else {
      alert("Please enter valid weight and height!");
    }
  };

  const handleNext = () => {
    navigate("/home"); // Navigate to the Home Page
  };

  return (
    <div className="bmi-container">
      <h1>BMI Calculator</h1>
      <div className="input-container">
        <div className="input-group">
          <label>Weight (kg):</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter your weight"
          />
        </div>
        <div className="input-group">
          <label>Height (cm):</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Enter your height"
          />
        </div>
      </div>
      <button className="calculate-button" onClick={calculateBMI}>
        Calculate
      </button>

      {showSpeedometer && (
        <div className="bmi-result">
          <div className="speedometer">
            <div
              className="needle"
              style={{ transform: `rotate(${bmi * 2}deg)` }}
            ></div>
          </div>
          <p>Your BMI is: <strong>{bmi}</strong></p>
          <button className="next-button" onClick={handleNext}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default BMICalculatorPage;
