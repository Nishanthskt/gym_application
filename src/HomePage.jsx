import React from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomePage.css";
import FooterNav from "./FooterNav";
import Welcome1 from './assets/welcomeHome.jpg'
import Welcome2 from './assets/workout6.jpg'
import Welcome3 from './assets/workout5.jpg'
import Weightlossimg from './assets/workout1.jpg'
import strengthimg from './assets/workout2.jpg'
import yogaimg from './assets/workout4.jpg'
import cardioimg from './assets/workout3.jpg'
import ChataiImg from './assets/ai-icon.jpg'
import logo from './assets/logo.png'



const HomePage = () => {
  const navigate = useNavigate();

  const bannerImages = [
    { id: 1, src: Welcome1, alt: "Join Our Team" },
    { id: 2, src:Welcome2 , alt: "Gym Facilities" },
    { id: 3, src:Welcome3 , alt: "Healthy Diet" },
  ];

  const programs = [
    { id: 1, src: Weightlossimg, title: "Weight Loss", link: "/weight-loss" },
    { id: 2, src: strengthimg, title: "Strength Training", link: "/strength-training" },
    { id: 3, src: yogaimg, title: "Yoga", link: "/yoga" },
    { id: 4, src: cardioimg, title: "Cardio", link: "/cardio" },
  ];

  const sliderSettings = {
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
      {/* Header */}
      <header className="header1">
  <div className="header-left">
    {/* <img src={logo} alt="Buffalo Gym Logo" className="header-logo" /> */}
    <h1 className="brand-name">Buffalo</h1>
  </div>
  <div className="header-right">
    <div className="search-bar-container">
      <input type="text" className="search-bar" placeholder="Search here" />
      <button className="search-icon">🔍</button>
    </div>
    <button 
      className="chat-ai-icon-button" 
      onClick={() => navigate("/chat-ai")}
    >
      <img 
        src={ChataiImg} 
        alt="Chat AI" 
        className="chat-ai-icon" 
      />
    </button>
  </div>
</header>


      {/* Banner Section */}
      <section className="banner">
        <Slider {...sliderSettings}>
          {bannerImages.map((image) => (
            <div
              key={image.id}
              className="slide"
              onClick={() => navigate(image.link)}
            >
              <img src={image.src} alt={image.alt} className="banner-image" />
              <h2 className="banner-text">{image.alt}</h2>
            </div>
          ))}
        </Slider>
      </section>

      {/* Programs Section */}
      <section className="programs">
        <h2>Our Programs</h2>
        <div className="program-grid">
          {programs.map((program) => (
            <div
              key={program.id}
              className="program-card"
              onClick={() => navigate(program.link)}
            >
              <img src={program.src} alt={program.title} className="program-image" />
              <h3>{program.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <FooterNav/>
      </footer>
    </div>
  );
};

export default HomePage;
