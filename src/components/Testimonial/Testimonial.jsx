import React from 'react';
import './Testimonial.css';
import user1 from "../../assets/images/user1.jpg";
import user2 from "../../assets/images/user2.jpg";

function Testimonial() {
  return (
    <section id="testimonial" className="testimonial-section">
      <h2>What Our Clients Say</h2>
      <div className="testimonial-container">
        <div className="testimonial">
          <img src={user1} alt="Client 1" />
          <p>"This service helped us grow our business exponentially. Highly recommend!"</p>
          <h4>John Doe</h4>
          <span>CEO, Example Inc.</span>
        </div>
        <div className="testimonial">
          <img src={user2} alt="Client 2" />
          <p>"Amazing experience! Their team is professional and dedicated."</p>
          <h4>Jane Smith</h4>
          <span>Marketing Director, TechWorld</span>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
