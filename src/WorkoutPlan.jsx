import React, { useState } from "react";
import Slider from "react-slick"; 
import { IoArrowBack } from "react-icons/io5";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./WorkoutPlan.css";
import plan1Img from './assets/plan1.jpg';
import plan3Img from './assets/workout6.jpg';

const WorkoutPlan = ({ navigateBack }) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const reviews = [
    {
      name: "Anna",
      comment: "Wow, today's plan is wonderful!",
      rating: 5,
    },
    {
      name: "Badri",
      comment: "Today's plan is very awesome because of this workout, my favorite workout!",
      rating: 4,
    },
    {
      name: "Jaysimman",
      comment: "Worst plan for this week.",
      rating: 2,
    },
  ];

  const images = [
    plan1Img,
    plan3Img,
  ];

  return (
    <div className="workout-plan-page">
      <IoArrowBack className="backward-arrow" onClick={navigateBack} />

      <div className="image-slider">
        <Slider {...settings}>
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Slide ${index + 1}`} className="slider-image" />
          ))}
        </Slider>
      </div>

      <div className="plan-details">
        <h1>Gym Workout Plan</h1>
        <p className="description">
          This plan is for this week to follow all the plans for daily workouts.
        </p>
      </div>

      <div className="reviews-section">
        <h2>Rating</h2>
        {reviews.map((review, index) => (
          <div key={index} className="review">
            <img
              src={`https://via.placeholder.com/50x50?text=${review.name.charAt(0)}`}
              alt={review.name}
              className="review-avatar"
            />
            <div className="review-details">
              <h3>{review.name}</h3>
              <p>{review.comment}</p>
              <div className="stars">
                {Array.from({ length: 5 }, (_, i) => (
                  <span
                    key={i}
                    style={{
                      color: i < review.rating ? "gold" : "lightgray",
                      fontSize: "16px",
                    }}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="comments-section">
        <input type="text" placeholder="Add your comments" className="comment-input" />
        <button className="submit-button">Submit</button>
      </div>
    </div>
  );
};

export default WorkoutPlan;
