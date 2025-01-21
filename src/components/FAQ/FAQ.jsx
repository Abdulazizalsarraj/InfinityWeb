import React, { useState } from 'react';
import './FAQ.css';

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); 
    } else {
      setActiveIndex(index); 
    }
  };

  return (
    <section id="faq" className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-container">
        <div className="faq-item" onClick={() => toggleFAQ(0)}>
          <h4 className="faq-question">What services do you offer?</h4>
          {activeIndex === 0 && <p className="faq-answer">We offer web development, mobile app development, and digital marketing services.</p>}
        </div>
        <div className="faq-item" onClick={() => toggleFAQ(1)}>
          <h4 className="faq-question">How can I contact you?</h4>
          {activeIndex === 1 && <p className="faq-answer">You can contact us via the contact form on our website or by emailing us directly.</p>}
        </div>
        <div className="faq-item" onClick={() => toggleFAQ(2)}>
          <h4 className="faq-question">What are your rates?</h4>
          {activeIndex === 2 && <p className="faq-answer">Our rates depend on the project scope. Please get in touch with us for a custom quote.</p>}
        </div>
      </div>
    </section>
  );
}

export default FAQ;

