import React from "react";
import { useNavigate } from "react-router-dom";
import "./SettingsPage.css";
import teamupdateimg from './assets/workout2.jpg';
import monthlytargetimg from './assets/callender.jpg';
import historyImg from './assets/history.jpg';
import gymupdateImg from './assets/gymupdate.jpg';
import newgoalImg from './assets/newgoal.jpg';
import annualupdateImg from './assets/annualupdate.jpg';
import dietupdateImg from './assets/dietupdate.jpg';

const SettingsPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  // Card Data
  const cards = [
    { id: 1, title: "Team Updates", img: teamupdateimg },
    { id: 2, title: "Monthly Target", img: monthlytargetimg },
    { id: 3, title: "History", img: historyImg},
    { id: 4, title: "Gym Updates", img: gymupdateImg },
    { id: 5, title: "Annual Report", img:newgoalImg },
    { id: 6, title: "New Goal", img:annualupdateImg },
    { id: 7, title: "Diet Plan", img: dietupdateImg},
  ];

  return (
    <div className="settings-page">
      {/* Header */}
      <header className="settings-header">
        <button className="back-button" onClick={handleBack}>
          <span>&#8592;</span> {/* Backward arrow icon */}
        </button>
        <h1>Buffalo Settings</h1>
      </header>

      {/* Settings Options */}
      <div className="settings-grid">
        {cards.map((card) => (
          <div className="settings-card" key={card.id}>
            <img src={card.img} alt={card.title} className="card-image" />
            <div className="card-content">
              <p>{card.title}</p>
              <div className="card-icon">+</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SettingsPage;
