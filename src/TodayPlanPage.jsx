import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import "./TodayPlanPage.css";
import eggImg from './assets/egg.jpg';
import kellocsImg from './assets/kellocs.jpg';
import ottsImg from './assets/otts.jpg';
import fruitImg from './assets/fruit.jpg';
import fruitJuseImg from './assets/fruitju.jpg';

const TodayPlanPage = () => {
  const [likedItems, setLikedItems] = useState({}); // Track likes
  const navigate = useNavigate();

  const foodData = [
    { id: 1, name: "Boiled Egg", description: "Birthday caused to increase human into power for daily", price: "8.99", image: eggImg },
    { id: 2, name: "Kellogg's", description: "Is used to increase in calories for weight gaining", price: "9.99", image: kellocsImg },
    { id: 3, name: "Oats", description: "Most protein diet plan food is oats", price: "10.99", image: ottsImg },
    { id: 4, name: "Fruit Salad", description: "All set of vitamins can gain from fruit salads", price: "12.99", image:fruitImg },
    { id: 5, name: "Fresh Juice", description: "Fresh juice can only directly giving proteins to the body level", price: "11.99", image:fruitJuseImg },
  ];

  const toggleLike = (id) => {
    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="today-plan-page">
      {/* Header */}
      <header className="plan-header">
        <IoArrowBack className="backward-arrow" onClick={() => navigate(-1)} />
        <input type="text" placeholder="Search" className="search-bar" />
      </header>

      {/* Title */}
      <h2 className="plan-title">TODAY PLAN</h2>

      {/* Categories */}
      <div className="categories">
        <button className="category-button active">Breakfast</button>
        <button className="category-button">Lunch</button>
        <button className="category-button">Dinner</button>
        <button className="category-button">Snacks</button>
      </div>

      {/* Food List */}
      <div className="food-list1">
        {foodData.map((food) => (
          <div key={food.id} className="food-card1">
            <img src={food.image} alt={food.name} className="food-image" />
            <div className="food-details1">
              <h3>{food.name}</h3>
            </div>
            <div className="food-info">
              <span className="food-price">${food.price}</span>
              <div className="like-icon" onClick={() => toggleLike(food.id)}>
                {likedItems[food.id] ? (
                  <AiFillHeart style={{ color: "red", fontSize: "20px" }} />
                ) : (
                  <AiOutlineHeart style={{ color: "gray", fontSize: "20px" }} />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="plan-footer">
        <div className="footer-section">
          <span>Calories</span>
          <strong>1260</strong>
        </div>
        <div className="footer-section">
          <span>BMI</span>
          <strong>Weight: 70</strong>
        </div>
      </footer>
    </div>
  );
};

export default TodayPlanPage;
