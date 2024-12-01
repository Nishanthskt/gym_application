import React from "react";
import { useNavigate } from "react-router-dom";
import "./FooterNav.css";
import homeIcon from "./assets/home-icon.jpg"; // Add your home icon image
import workoutIcon from "./assets/user-icon.jpg"; // Add your workout icon image
import settingsIcon from "./assets/settings-icon.jpg"; // Add your settings icon image

const FooterNav = () => {
  const navigate = useNavigate();

  return (
    <div className="footer-nav">
      <button className="footer-button" onClick={() => navigate("/profile")}>
        <img src={homeIcon} alt="Home" />
      </button>
      <button className="footer-button" onClick={() => navigate("/workout")}>
        <img src={workoutIcon} alt="Workout" />
      </button>
      <button className="footer-button" onClick={() => navigate("/settings")}>
        <img src={settingsIcon} alt="Settings" />
      </button>
    </div>
  );
};

export default FooterNav;
