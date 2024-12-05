import React from "react";
import  Lottie  from "lottie-react"; // Import Lottie from lottie-react
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./Day3Page.css";

// Import your JSON animation files
import jumpingJacksAnimation from "./animations/cooldown.json";
import kneePushupsAnimation from "./animations/lunges.json";
import pushupsAnimation from "./animations/plankhold.json";
import wideArmPushupsAnimation from "./animations/push-ups.json";
import headerBgImg from "./assets/dayheader.jpg";

const Day3Page = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const workouts = [
    { name: "Jumping jacks", time: "00:20", reps: null, animation: jumpingJacksAnimation, path: "/jumping-jacks" },
    { name: "Knee push-ups", time: null, reps: "x6", animation: kneePushupsAnimation, path: "/knee-push-ups" },
    { name: "Push-ups", time: null, reps: "x10", animation: pushupsAnimation, path: "/push-ups" },
    { name: "Wide Arm Push-ups", time: null, reps: "x8", animation: wideArmPushupsAnimation, path: "/wide-arm-push-ups" },
  ];

  return (
    <div className="page-container">
      {/* Header Section */}
      <div className="header">
        <div className="header-content">
          <h1 className="day-title">Day 3</h1>
          <p className="workout-info">9 mins • 11 Workouts</p>
        </div>
        <img
          src={headerBgImg}
          alt="Workout"
          className="header-image"
        />
      </div>

      {/* Workout List Section */}
      <div className="workout-container">
        <div className="workout-header2">
          <p className="workout-summary">9 mins • 11 Workouts</p>
        </div>
        {workouts.map((workout, index) => (
          <div 
            className="workout-item" 
            key={index}
            onClick={() => navigate(workout.path)} // Navigates to the specific workout page
          >
            <div className="icon-placeholder">
              {/* Use Lottie animation here */}
              <Lottie animationData={workout.animation} loop autoplay className="workout-animation" />
            </div>
            <div className="workout-details">
              <p className="workout-name">{workout.name}</p>
              <p className="workout-metrics">
                {workout.time || workout.reps}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Start Button */}
      <button className="start-button">START</button>
    </div>
  );
};

export default Day3Page;
