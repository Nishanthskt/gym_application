import React, { useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import { useNavigate } from "react-router-dom"; 
import { FaArrowLeft } from "react-icons/fa";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";
import "./StatPage.css";
import usericonimg from './assets/user-icon.jpg'

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const StatPage = () => {
    const navigate = useNavigate();
  // State for bar chart data
  const [barData, setBarData] = useState({
    labels: ["Diet", "Workout", "Calories"],
    datasets: [
      {
        label: "Daily Summary",
        data: [100, 150, 20], // Default values
        backgroundColor: ["#90cdf4", "#63b3ed", "#4a90e2"],
      },
    ],
  });

  // State for line chart data
  const [lineData, setLineData] = useState({
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
    datasets: [
      {
        label: "Workout",
        data: [3, 4, 5, 7, 8, 6, 9],
        borderColor: "#63b3ed",
        backgroundColor: "#63b3ed",
        fill: false,
      },
      {
        label: "Diet",
        data: [2, 3, 6, 4, 7, 5, 8],
        borderColor: "#90cdf4",
        backgroundColor: "#90cdf4",
        fill: false,
      },
    ],
  });

  // Event to simulate state change for bar chart
  const changeBarData = () => {
    setBarData({
      ...barData,
      datasets: [
        {
          ...barData.datasets[0],
          data: [Math.random() * 100, Math.random() * 100, Math.random() * 50],
        },
      ],
    });
  };

  return (
    <div className="stat-page">
      {/* Header */}
      <header className="stat-header">
      <button className="back-button" onClick={() => navigate(-1)}>
          <FaArrowLeft />
        </button>
        <div className="user-info">
          <img
            src={usericonimg}
            alt="User"
            className="profile-picture"
          />
          <h2>Buffalo</h2>
        </div>
      </header>

      {/* Navigation */}
      <nav className="stat-nav">
        <button>My Day</button>
        <button>Diet</button>
        <button>Workout</button>
        <button>Calories</button>
      </nav>

      {/* Daily Summary */}
      <section className="summary-section">
  <h1>Daily Summary</h1>

  {/* Bar Chart */}
  <div className="bar-chart-container">
    <Bar data={barData} options={{ responsive: true }} />
  </div>

  <div className="workout-diet">
    <p>Workout</p>
    <p>Diet</p>
  </div>

  <h2>7.95 HRS OF 3</h2>

  {/* Line Chart */}
  <div className="line-chart-container">
    <Line data={lineData} options={{ responsive: true }} />
  </div>
</section>


      {/* Button to Update Bar Chart */}
      <button className="update-chart-button" onClick={changeBarData}>
        Update Chart Data
      </button>
    </div>
  );
};

export default StatPage;
