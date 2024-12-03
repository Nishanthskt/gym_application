import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaHeart } from 'react-icons/fa';
import './WorkoutPage.css';
import Week1 from './assets/week1.jpg';
import Week2 from './assets/week2.jpg';
import Week3 from './assets/week3.jpg';
import Week4 from './assets/week4.jpg';
import Week5 from './assets/week5.jpg';

const WorkoutPage = () => {
  const workouts = [
    {
      title: "Assessment Week",
      description: "Assessment week",
      week: "Week 1",
      image: Week1,
    },
    {
      title: "Main Part",
      description: "The coach will test your performance to build the perfect training plan",
      week: "Week 2",
      image: Week2,
    },
    {
      title: "Deload Week",
      description: "Fully personalized training based on your performance",
      week: "Week 3",
      image: Week3,
    },
    {
      title: "Brutal Week",
      description: "Prepare the body for the increased demand in the next week",
      week: "Week 4",
      image: Week4,
    },
    {
      title: "Stretching",
      description: "Full body",
      week: "Week 5",
      image: Week5,
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="workout-page">
      <header className="workout-header">
        <button className="back-button1" onClick={() => navigate('/home')}>
          <FaArrowLeft />
        </button>
        <h1>BUFFALO</h1>
      </header>
      <div className="workout-search">
        <input type="text" placeholder="Search" className="search-bar" />
        <button className="plan-button">PLAN OVER</button>
      </div>
      <div className="workout-categories">
        {["Abs & Core", "Upper Body", "Lower Body", "Cardio"].map((category) => (
          <button key={category} className="category-button">{category}</button>
        ))}
      </div>
      <div className="workout-list">
        {workouts.map((workout, index) => (
          <WorkoutCard key={index} workout={workout} navigate={navigate} />
        ))}
      </div>
      <footer className="workout-footer">
        <div className="calories-info">
          <p>Calories</p>
          <p>🔥 0 Min</p>
        </div>
        <button className="top-up-button">Top Up +</button>
      </footer>
    </div>
  );
};

const WorkoutCard = ({ workout, navigate }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const truncateDescription = (text, wordLimit) => {
    const words = text.split(" ");
    return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : text;
  };

  return (
    <div className="workout-card">
      <img src={workout.image} alt={workout.title} className="workout-image" />
      <div className="workout-details">
        <h3>{workout.title}</h3>
        <p
          className="workout-description"
          data-full-description={workout.description}
        >
          {truncateDescription(workout.description, 3)}
        </p>
        <div className="workout-actions">
          <button
            className="start-button"
            onClick={() => navigate('/workout-challenge')} // Navigate to WorkoutChallenge
          >
            Start
          </button>
          <button className="end-button">End</button>
        </div>
        <span className="workout-week">{workout.week}</span>
      </div>
      <button
        className={`favorite-button ${isFavorite ? "favorite-active" : ""}`}
        onClick={toggleFavorite}
      >
        <FaHeart />
      </button>
    </div>
  );
};

export default WorkoutPage;
