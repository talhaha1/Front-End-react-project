import React, { useState, useEffect } from 'react';
import './Home.css';
import Background from '../../assets/BackgroundHome.jpeg';

const Home = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 300); // Delay to ensure content is ready
  }, []);

  return (
    <div className={`home-container ${loaded ? 'loaded' : ''}`}>
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
