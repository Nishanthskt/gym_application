import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './VegNonVegPage.css';
import veg from './assets/veg-image.jpg';
import nonVeg from './assets/nonveg-image.jpg';

const VegNonVegPage = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelection = (option) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption) {
      navigate('/home'); // Navigate to the HomePage
    } else {
      alert('Please select an option before proceeding.');
    }
  };

  return (
    <div className="veg-nonveg-container">
      <h1 className="title">What is your preference?</h1>
      <div className="options-container">
        <div
          className={`option-card ${selectedOption === 'veg' ? 'selected' : ''}`}
          onClick={() => handleSelection('veg')}
        >
          <img
            src={veg}
            alt="Vegetarian"
            className="option-image"
          />
          <h2 className="option-label">Vegetarian</h2>
        </div>
        <div
          className={`option-card ${selectedOption === 'non-veg' ? 'selected' : ''}`}
          onClick={() => handleSelection('non-veg')}
        >
          <img
            src={nonVeg}
            alt="Non-Vegetarian"
            className="option-image"
          />
          <h2 className="option-label">Non-Vegetarian</h2>
        </div>
      </div>
      <button className="next-button" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default VegNonVegPage;
