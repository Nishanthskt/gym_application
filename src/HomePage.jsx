import React from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FooterNav from "./FooterNav";
import chatAIIcon from './assets/ai-icon.jpg'; // Add your Chat AI icon image here
import welcome1 from './assets/workout6.jpg';
import welcome2 from './assets/workout5.jpg';
import welcome3 from './assets/welcomeHome.jpg';
import welcome4 from './assets/FoodPlanning.jpg';

const HomePage = () => {
  const navigate = useNavigate();

  const carouselImages = [
    { id: 1, src: welcome1, alt: "Gym Schedule" },
    { id: 2, src: welcome2, alt: "Diet Plan" },
    { id: 3, src: welcome3, alt: "Gym Updates" },
    { id: 4, src: welcome4, alt: "Food Planning" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  return (
    <div className="homepage">
      <header className="header1">
        <div className="header-left">
        <button 
            className="menu-icon" 
              onClick={() => navigate("/profile")}
             > 
               ☰
             </button>   
          <h1 className="brand-name">Buffalo</h1>
        </div>
        <div className="header-right">
          <div className="search-bar-container">
            <input type="text" className="search-bar" placeholder="Search here" />
            <button className="search-icon">🔍</button>
          </div>
          {/* Chat AI Icon */}
          <button 
            className="chat-ai-icon-button" 
            onClick={() => navigate("/chat-ai")}
          >
            <img 
              src={chatAIIcon} 
              alt="Chat AI" 
              className="chat-ai-icon" 
            />
          </button>
        </div>
      </header>

      <section className="welcome-section">
        <Slider {...settings}>
          {carouselImages.map((image) => (
            <div key={image.id} className="slide-container">
              <img src={image.src} alt={image.alt} className="welcome-image" />
            </div>
          ))}
        </Slider>
        <div className="welcome-text">
          <h2>Welcome To New Team</h2>
          <p>Available 1 December - 3 December 2025</p>
          <div className="discount">
            <button>50% OFF</button>
            <button>50% OFF</button>
          </div>
        </div>
      </section>
     
      <section className="card-section">
        {carouselImages.map((image, index) => (
          <div key={index} className="card">
          <img src={image.src} alt={image.alt} />
          <p>{image.alt}</p>
          <button className="favorite-button">❤️</button>
         </div>
           ))}
         </section>
      <footer className="footer">
      <FooterNav /> {/* Footer Navigation */}
      </footer>
    </div>
  );
};

export default HomePage;
