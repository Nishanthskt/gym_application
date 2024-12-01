import React from "react";
import "./ProfilePage.css";
import { FaCalendarAlt, FaPen, FaUtensils, FaDumbbell, FaBell } from "react-icons/fa";
import logo from './assets/logo.png'
import usericonImg from './assets/user-icon.jpg'
import callenderimg from './assets/callender.jpg'
import { useNavigate } from "react-router-dom"; 
import { FaArrowLeft } from "react-icons/fa";

const ProfilePage = () => {
  const navigate = useNavigate();
  return (
    <div className="profile-page">
      {/* Header Section */}
      <header className="profile-header">
      <button className="back-button" onClick={() => navigate("/home")}>
          <FaArrowLeft />
        </button>
        {/* <img src={logo} alt="Buffalo Gym Logo" className="logo" /> */}
      </header>

      {/* Profile Info Section */}
      <div className="profile-info">
        <img
          src={usericonImg} 
          alt="User"
          className="profile-picture"
        />
        <h2 className="user-name">User Name</h2>
      </div>

      {/* Stats Button */}
      <button className="stats-button" onClick={()=> navigate("/stat")}>Stats</button>

      {/* My Journey Section */}
      <div className="my-journey">
        <h3>My Journey</h3>
        <div className="journey-stats">
          <div className="stat-box">
            <p>0</p>
            <p>Calories</p>
          </div>
          <div className="stat-box">
            <p>0</p>
            <p>Workout</p>
          </div>
          <div className="stat-box">
            <p>0</p>
            <p>Minutes</p>
          </div>
        </div>
        <div className="calendar-box">
          <img
            src={callenderimg}
            alt="Calendar"
          />
          <p>Calendar</p>
          <span className="arrow">→</span>
        </div>
      </div>

      {/* Settings Section */}
      <div className="settings">
        <h3>Settings</h3>
        <div className="settings-options">
          <div className="option">
            <FaPen />
            <p>Edit Profile</p>
          </div>
          <div className="option">
            <FaUtensils />
            <p>Food</p>
          </div>
          <div className="option">
            <FaDumbbell />
            <p>Fitness Plan</p>
          </div>
          <div className="option">
            <FaBell />
            <p>Reminders</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
