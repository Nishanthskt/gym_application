import React from 'react';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className="login-page">
      <header className="header">
        <h1 className="gym-name">Buffalo GYM</h1>
        <div className="navbar">
          <img src="/src/assets/logo.png" alt="Logo" className="logo" />
          <nav>
            <a href="#review">Review</a>
            <a href="#contact">Contact Us</a>
          </nav>
        </div>
      </header>

      <div className="content">
        <div className="login-form">
          <h2>Welcome To New Team</h2>
          <form>
            <input type="text" placeholder="User ID" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
          </form>
          <p>Already Registered? <a href="#login">Login</a></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
