import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BMICalculatorPage.css"
import WeightImg from './assets/weightBmi.jpg'
import HeightImg from './assets/heightBmi.jpg'

const BMIPage = () => {
  const [weight, setWeight] = useState(""); // State for weight input
  const [height, setHeight] = useState(""); // State for height input
  const [bmi, setBMI] = useState(null); // State for BMI calculation
  const navigate = useNavigate();

  const handleCalculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100; // Convert height to meters
      const calculatedBMI = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBMI(calculatedBMI);
    } else {
      alert("Please enter both weight and height!");
    }
  };

  const handleNext = () => {
    if (bmi) {
      console.log(`BMI Calculated: ${bmi}`);
      navigate("/veg-nonveg"); // Navigate to the Home page
    } else {
      alert("Please calculate your BMI before proceeding!");
    }
  };

  return (
    <div className="bmi-page-container">
      <h1 className="bmi-header">Calculate Your BMI</h1>

      <div className="bmi-section">
        {/* Weight Section */}
        <div className="bmi-input-section">
          <img
            src={WeightImg}
            alt="Weight"
            className="bmi-image"
          />
          <input
            type="number"
            placeholder="Enter weight (kg)"
            className="bmi-input"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>

        {/* Height Section */}
        <div className="bmi-input-section">
          <img
            src={HeightImg}
            alt="Height"
            className="bmi-image"
          />
          <input
            type="number"
            placeholder="Enter height (cm)"
            className="bmi-input"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
      </div>

      {/* BMI Calculation and Results */}
      <button className="calculate-btn" onClick={handleCalculateBMI}>
        Calculate BMI
      </button>
      {bmi && (
        <div className="bmi-result">
          <p>Your BMI: <strong>{bmi}</strong></p>
        </div>
      )}

      {/* Next Button */}
      <button className="next-btn2" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default BMIPage;
