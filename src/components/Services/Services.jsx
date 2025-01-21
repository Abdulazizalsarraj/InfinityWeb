import React from 'react';
import './Services.css';
import Image1 from "../../assets/images/WebDevelopment.jfif";
import Image2 from "../../assets/images/MobileApps.jfif";
import Image3 from "../../assets/images/UIUXDesign.jfif";
function Services() {
  return (
    <section id="services" className="services-section">
      <h2>Our Services</h2>
      <div className="services-container">
        <div className="service">
          <img src={Image1} alt="Web Development" />
          <h3>Web Development</h3>
          <p>We build fast and scalable web applications for businesses, enhancing their online presence with modern technologies.</p>
        </div>
        <div className="service">
          <img src={Image2} alt="Mobile Apps" />
          <h3>Mobile Apps</h3>
          <p>Creating engaging mobile experiences that cater to your users, with intuitive designs and seamless functionality.</p>
        </div>
        <div className="service">
          <img src={Image3} alt="UI/UX Design" />
          <h3>UI/UX Design</h3>
          <p>We design beautiful and intuitive user interfaces, ensuring that users have an enjoyable and efficient experience.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;



