import React from 'react';
import './home.css';
import Background from '../../assests/BackgroundHome.jpeg';
const Home = () => {
  return (
    <div className="home-container">
      <img src={Background} alt="Background" className="background-image" />
      <div className="overlay">
        <h1>Grow Your Business with Data-driven Decision-Making!</h1>
        <p>“Data, The Goldmine of the 21st Century”, Reach out to us to know how your data can grow your business.</p>
        <a href="https://calendly.com/analyzinnsolutions" className="consultation-button" target="_blank" rel="noopener noreferrer">
          Request a Free Consultation
        </a>
      </div>
    </div>
  );
};

export default Home;
