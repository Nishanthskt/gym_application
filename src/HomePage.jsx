import React from "react";
import Slider from "react-slick";
import "./HomePage.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import welcome1 from './assets/workout6.jpg'
import welcome2 from './assets/workout5.jpg'
import welcome3 from './assets/welcomeHome.jpg'
import welcome4 from './assets/FoodPlanning.jpg'
const HomePage = () => {
  const carouselImages = [
    {
      id: 1,
      src: welcome1,
      alt: "Gym Schedule",
    },
    {
      id: 2,
      src: welcome2,
      alt: "Diet Plan",
    },
    {
      id: 3,
      src: welcome3,
      alt: "Gym Updates",
    },
    {
      id: 4,
      src: welcome4,
      alt: "Food Planning",
    },
  ];

  // Slider settings for the carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Slide changes every 5 seconds
    pauseOnHover: true,
  };

  return (
    <div className="homepage">
      {/* Header Section */}
      <header className="header1">
        <div className="header-left">
          <button className="menu-icon">☰</button>
          <h1 className="brand-name">Buffalo</h1>
        </div>
        <div className="search-bar-container">
          <input type="text" className="search-bar" placeholder="Search here" />
          <button className="search-icon">🔍</button>
        </div>
      </header>

      {/* Welcome Section with Slider */}
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

      {/* Other Sections (Nav Buttons and Cards) */}
      <nav className="nav-buttons">
        <button className="nav-button">Home</button>
        <button className="nav-button">Workout</button>
        <button className="nav-button">Settings</button>
      </nav>
      <section className="card-section">
        <div className="card">
          <img src= {welcome1} alt="Gym Schedule" />
          <p>Gym Schedule</p>
          <button className="favorite-button">❤️</button>
        </div>
        <div className="card">
          <img src={welcome2} alt="Diet Plan" />
          <p>Diet Plan</p>
          <button className="favorite-button">❤️</button>
        </div>
        <div className="card">
          <img src={welcome3} alt="Gym Updates" />
          <p>Gym Updates</p>
          <button className="favorite-button">❤️</button>
        </div>
        <div className="card">
          <img src={welcome4} alt="Food Plan" />
          <p>Food Plan</p>
          <button className="favorite-button">❤️</button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
