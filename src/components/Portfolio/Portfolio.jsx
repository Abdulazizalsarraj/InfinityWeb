import React from 'react';
import './Portfolio.css';
import Image1 from "../../assets/images/portfolio3.jfif";
import Image2 from '../../assets/images/porfolio4.jfif';
import Image3 from '../../assets/images/portfolio1.jfif';

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-header">
        <h2 className="portfolio-title">Our Portfolio</h2>
        <p className="portfolio-subtitle">Take a look at some of our recent projects that showcase our expertise and creativity.</p>
      </div>
      <div className="portfolio-container">
        <div className="portfolio-item">
          <img src={Image1} alt="Project 1" className="portfolio-image" />
          <div className="portfolio-details">
            <h4 className="portfolio-project-title">Project 1</h4>
            <p className="portfolio-description">A cutting-edge solution tailored to enhance productivity and efficiency.</p>
          </div>
        </div>
        <div className="portfolio-item">
          <img src={Image2} alt="Project 2" className="portfolio-image" />
          <div className="portfolio-details">
            <h4 className="portfolio-project-title">Project 2</h4>
            <p className="portfolio-description">An innovative design focused on delivering an exceptional user experience.</p>
          </div>
        </div>
        <div className="portfolio-item">
          <img src={Image3} alt="Project 3" className="portfolio-image" />
          <div className="portfolio-details">
            <h4 className="portfolio-project-title">Project 3</h4>
            <p className="portfolio-description">A robust and scalable solution for modern business needs.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;

