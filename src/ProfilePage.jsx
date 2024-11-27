import React from "react";
import FooterNav from "./FooterNav"; // Use the same FooterNav component
import usericon from "./assets/user-icon.jpg";
import "./ProfilePage.css"; // Create a separate CSS file for the profile page

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <div className="profile-header">
        <img src={usericon} alt="Profile" className="profile-image" />
        <h1 className="profile-title">User Profile</h1>
      </div>
      <div className="profile-form">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="date" placeholder="Date of Birth" />
        <input type="text" placeholder="BMI" />
      </div>
        <FooterNav />
    </div>
  );
};

export default ProfilePage;
