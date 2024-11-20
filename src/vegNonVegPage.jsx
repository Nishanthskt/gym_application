import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the navigation hook
import './VegNonVegPage.css';
import FoodPlanning from './assets/FoodPlanning.jpg'
import VegetarianImg from './assets/Vegitarian.jpg'
import NonVegImg from './assets/NonVeg.jpg'
import VegranImg from './assets/Vegan.jpg'
const VegAndNonVegPage = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate(); // Initialize the navigation function

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption) {
      console.log(`Selected Option: ${selectedOption}`);
      navigate('/home'); // Navigate to the Home page
    } else {
      alert('Please select an option before proceeding.');
    }
  };

  return (
    <div className="veg-nonveg-container">
      <header className="header">
        <h1 className="title">BUFFALO</h1>
      </header>
        <h2 className='tittle2'>What Type Food You Prefer For ?</h2>
      <main className="main-content">
        <div className="food-planning-banner">
          <img src={FoodPlanning} alt="Food planning" className="banner-image" />
         
        </div>
  
        <div className="options-container">
          <div 
            className={`option-card ${selectedOption === 'vegetarian' ? 'selected' : ''}`}
            onClick={() => handleOptionChange('vegetarian')}
          >
            <img src={VegetarianImg} alt="Vegetarian" />
            <h3>Vegetarian</h3>
            <div className="toggle-switch">
              <input type="checkbox" checked={selectedOption === 'vegetarian'} readOnly />
            </div>
          </div>
          
          <div 
            className={`option-card ${selectedOption === 'non-vegetarian' ? 'selected' : ''}`}
            onClick={() => handleOptionChange('non-vegetarian')}
          >
            <img src={NonVegImg} alt="Non Vegetarian" />
            <h3>Non Vegetarian</h3>
            <div className="toggle-switch">
              <input type="checkbox" checked={selectedOption === 'non-vegetarian'} readOnly />
            </div>
          </div>
          
          <div 
            className={`option-card ${selectedOption === 'vegan' ? 'selected' : ''}`}
            onClick={() => handleOptionChange('vegan')}
          >
            <img src={VegranImg} alt="Vegan" />
            <h3>Vegan</h3>
            <div className="toggle-switch">
              <input type="checkbox" checked={selectedOption === 'vegan'} readOnly />
            </div>
          </div>
        </div>
      </main>

      <footer className="footer">
        <button className="next-btn" onClick={handleNext}>GET STARTED</button>
      </footer>
    </div>
  );
};

export default VegAndNonVegPage;
