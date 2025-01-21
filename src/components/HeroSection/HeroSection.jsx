import React from 'react';
import heroImage from '../../assets/pic.jpg';
import './HeroSection.css';

function HeroSection() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1>Welcome to My Landing Page</h1>
        <p>We offer cutting-edge solutions to boost your business to the next level.</p>
        <a href="#services" className="cta-button">Explore Our Services</a>
      </div>
      <div className="hero-image-container">
        <img src={heroImage} alt="Hero" className="hero-image" />
      </div>
    </section>
  );
}

export default HeroSection;


