import React from 'react';
import './AboutUs.css';
import Image from "../../assets/images/About3.jfif";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="about-image-container">
          <img src={Image} alt="About Us" className="about-image" />
        </div>
        <div className="about-text">
          <h2 className="about-title">About Us</h2>
          <p className="about-description">
            We are a team of dedicated professionals delivering top-notch solutions tailored to your needs. With a passion for innovation and excellence, we focus on creating value and ensuring satisfaction for our clients. Let us help you achieve your goals with our expertise and commitment.
          </p>
          <div className="about-cta">
            <a href="#services" className="about-button">Our Services</a>
            <a href="#contact" className="about-secondary-button">Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
