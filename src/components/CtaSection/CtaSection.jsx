import React from 'react';
import './CtaSection.css'; 

const CTASection = () => {
  return (
    <section className="cta">
      <div className="cta-content">
        <h2>Ready to Start Your Journey?</h2>
        <p>Join thousands of satisfied clients who have transformed their businesses with us. Get started today!</p>
        <div className="cta-buttons">
          <a href="#contact" className="cta-btn cta-btn-primary">Contact Us</a>
          <a href="#services" className="cta-btn cta-btn-secondary">Our Services</a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
