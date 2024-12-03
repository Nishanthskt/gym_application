import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import pushUpAnimation from './animations/push-ups.json';
import plankHoldAnimation from './animations/plankhold.json';
import squatsAmimation from './animations/squats.json';
import lungesAnimation from './animations/lunges.json';
import coolDownStreatches from './animations/cooldown.json';
import "./Day3Workout.css";

const workouts = [
  { name: "Push-ups", duration: "10 mins", animation: pushUpAnimation },
  { name: "Plank Hold", duration: "5 mins", animation: plankHoldAnimation },
  { name: "Squats", duration: "10 mins", animation: squatsAmimation },
  { name: "Lunges", duration: "10 mins", animation: lungesAnimation },
  { name: "Cool Down Stretches", duration: "5 mins", animation: coolDownStreatches },
];

const Day3Workout = () => {
  const navigate = useNavigate();

  return (
    <div className="day3-container">
      {/* Header */}
      <header className="day3-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          <FaArrowLeft />
        </button>
        <h1>Day 3: Full Body Workout</h1>
      </header>

      {/* Intro Section */}
      <div className="workout-intro">
        <p>Keep up the energy! Here’s your workout plan for today:</p>
      </div>

      {/* Workout List */}
      <div className="workout-list">
        {workouts.map((workout, index) => (
          <motion.div
            key={index}
            className="workout-item"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <div className="workout-name-duration">
              <h3>{workout.name}</h3>
              <p>{workout.duration}</p>
            </div>
            <Lottie animationData={workout.animation} className="lottie-animation" />
            <FaArrowRight className="arrow-icon" />
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <footer className="day3-footer">
        <button
          className="complete-button"
          onClick={() => alert("Great job completing Day 3!")}
        >
          Complete Workout
        </button>
      </footer>
    </div>
  );
};

export default Day3Workout;
