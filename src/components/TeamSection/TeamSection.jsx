import React from 'react';
import './TeamSection.css';
import Image1 from "../../assets/images/team1.jfif";
import Image2 from "../../assets/images/team3.jfif";
import Image3 from "../../assets/images/team2.jfif";

function Team() {
  return (
    <section id="team" className="team-section">
      <h2 className="section-title">Meet Our Team</h2>
      <div className="team-container">
        <div className="team-member">
          <img src={Image1} alt="Team Member 1" />
          <h3>lia jolie</h3>
          <p>Designer</p>
          <div className="social-links">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
        <div className="team-member">
          <img src={Image2} alt="Team Member 2" />
          <h3>Jane Smith</h3>
          <p>CEO</p>
          <div className="social-links">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
        <div className="team-member">
          <img src={Image3} alt="Team Member 3" />
          <h3>Bob Johnson</h3>
          <p>Developer</p>
          <div className="social-links">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;

