import React from "react";
import "./HomePage.css";
import logo from "./assets/logo.png"; // Replace with the actual path to your logo
import heroImage from "./assets/hero-image.jpg"; // Replace with the actual path to your hero image
import workout1 from "./assets/workout1.jpg"; // Replace with the actual path to your first workout image
import workout2 from "./assets/workout2.jpg"; // Replace with the actual path to your second workout image
import workout3 from "./assets/workout3.jpg"; // Replace with the actual path to your third workout image
import workout4 from "./assets/workout4.jpg"

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="header1">
        <div className="logo-container1">
          <img src={logo} alt="Buffalo Logo" className="logo1" />
          <span className="brand-name">Buffalo</span>
        </div>
        <nav className="nav-links">
          <a href="#home">HOME</a>
          <a href="#workout">WORKOUT</a>
        </nav>
        <button className="settings-button">settings</button>
      </header>
      <main>
        <div className="hero-section">
          <img src={heroImage} alt="Hero" className="hero-image" />
        </div>
        <div className="content">
          <div className="content_andbutton">
          <h1>Let's start to workout</h1>
          <button className="start-button">start</button>
          </div>
          <div className="workout-gallery">
            <img src={workout1} alt="Workout 1" className="workout-image" />
            <img src={workout2} alt="Workout 2" className="workout-image" />
            <img src={workout3} alt="Workout 3" className="workout-image" />
            <img src={workout4} alt="Workout 4" className="workout-image" />
          </div>
          
        </div>
      </main>
    </div>
  );
};

export default HomePage;
