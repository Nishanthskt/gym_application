import React, { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import "./GymUpdatePage.css";
import GymUpadetImg1 from './assets/gymUpdate1.jpg';
import GymUpadetImg2 from './assets/gymUpdate2.jpg';

const GymUpdatePage = () => {
  const [rating, setRating] = useState(4); 
  const navigate = useNavigate();

  const handleRatingClick = (starIndex) => {
    setRating(starIndex);
  };

  return (
    <div className="gym-update-page">
      <header className="gym-header">
        <IoArrowBack
          className="backward-arrow"
          onClick={() => navigate(-1)} 
        />
        <h3>THE LONG WAIT IS OVER</h3>
        <h1>New Collection</h1>
      </header>

      <section className="gym-main">
        <img
          src={GymUpadetImg1}
          alt="New Collection"
          className="main-image"
        />
        <h2>We Are Get New Dumbbell Bench Press</h2>
      </section>

      <section className="feedback-section">
        <div className="rating-container">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`star ${star <= rating ? "filled" : ""}`}
              onClick={() => handleRatingClick(star)}
            >
              ★
            </span>
          ))}
        </div>
        <button className="feedback-button">Feedback</button>
      </section>

      <section className="additional-image-section">
        <img
          src={GymUpadetImg2}
          alt="Dumbbell Bench Press"
          className="additional-image"
        />
      </section>
    </div>
  );
};

export default GymUpdatePage;
