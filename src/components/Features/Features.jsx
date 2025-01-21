import React from 'react';
import './Features.css';
import PerformanceImage from "../../assets/images/performaneImage.jfif";
import ResponsiveImage from "../../assets/images/ResponsiveImage.jfif";
import IntegrationImage from "../../assets/images/IntegrationImage.jfif";


function Features() {
  return (
    <section id="features" className="features-section">
      <h2>Why Choose Us?</h2>
      <div className="features-container">
        <div className="feature">
          <img src={PerformanceImage} alt="High Performance" />
          <h3>High Performance</h3>
          <p>Experience the fastest speed with our advanced technology, designed to take your business to the next level.</p>
        </div>
        <div className="feature">
          <img src={ResponsiveImage} alt="Responsive Design" />
          <h3>Responsive Design</h3>
          <p>Our services look great on any device, ensuring a seamless experience for all your users.</p>
        </div>
        <div className="feature">
          <img src={IntegrationImage} alt="Easy Integration" />
          <h3>Easy Integration</h3>
          <p>Our solutions integrate seamlessly with your existing systems, making the process smooth and hassle-free.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;

