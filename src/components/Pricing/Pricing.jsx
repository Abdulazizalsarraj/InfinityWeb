import React from 'react';
import './Pricing.css';
import { FaCog, FaRocket, FaBriefcase } from 'react-icons/fa';  

function Pricing() {
  return (
    <section id="pricing" className="pricing-section">
      <h2>Our Pricing Plans</h2>
      <div className="pricing-container">
        
        <div className="pricing-plan">
          <div className="icon">
            <FaCog />  
          </div>
          <h3>Basic Plan</h3>
          <p className="price">$19/month</p>
          <p>Basic features for small businesses.</p>
          <button>Choose Plan</button>
        </div>

        <div className="pricing-plan">
          <div className="icon">
            <FaRocket />  
          </div>
          <h3>Pro Plan</h3>
          <p className="price">$49/month</p>
          <p>Advanced features for growing businesses.</p>
          <button>Choose Plan</button>
        </div>

        <div className="pricing-plan">
          <div className="icon">
            <FaBriefcase />  
          </div>
          <h3>Enterprise Plan</h3>
          <p className="price">$99/month</p>
          <p>All features for large organizations.</p>
          <button>Choose Plan</button>
        </div>

      </div>
    </section>
  );
}

export default Pricing;
