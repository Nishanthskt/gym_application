import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import "./FoodPage.css";
import { IoArrowBack } from "react-icons/io5"; // Backward arrow icon
import { useNavigate } from "react-router-dom";
import vegImg from './assets/foodPageVeg.jpg';
import nonvegImg from './assets/foodPageNonVeg.jpg';
import veganImg from './assets/foodPageVegan.jpg';

const FoodPage = () => {
    const navigate = useNavigate();
  const [likedItems, setLikedItems] = useState({}); // Track likes for each food type

  const foodData = [
    { id: 1, type: "Vegetarian", description: "Today vegetarian food plan for diet", date: "Today", image:vegImg },
    { id: 2, type: "Non-Vegetarian", description: "Today non-vegetarian food plan for diet", date: "Today", image:nonvegImg},
    { id: 3, type: "Vegan", description: "Today vegan food plan for diet", date: "Today", image: veganImg },
  ];

  const toggleLike = (id) => {
    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="food-page">
      <header className="food-header">
        <IoArrowBack className="backward-arrow" onClick={() => navigate(-1)} />
        <h1>Buffalo</h1>
      </header>
      <div className="food-list">
        {foodData.map((food) => (
          <div key={food.id} className="food-card">
            <img src={food.image} alt={food.type} className="food-image" />
            <div className="food-details">
              <h2>{food.type}</h2>
              <p>{food.description}</p>
              <span className="food-date">📅 {food.date}</span>
            </div>
            <div className="like-icon" onClick={() => toggleLike(food.id)}>
              {likedItems[food.id] ? (
                <AiFillHeart style={{ color: "red", fontSize: "24px" }} />
              ) : (
                <AiOutlineHeart style={{ color: "gray", fontSize: "24px" }} />
              )}
            </div>
          </div>
        ))}
      </div>

      <footer className="food-footer">
        <button className="open-now-button">Open Now</button>
      </footer>
    </div>
  );
};

export default FoodPage;
