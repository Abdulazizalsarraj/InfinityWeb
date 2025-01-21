import React from 'react';
import './PartnersSection.css';
import logo1 from "../../assets/images/logo1.jfif"
import logo2 from "../../assets/images/logo2.jfif"
import logo3 from "../../assets/images/logo3.jfif"
import logo4 from "../../assets/images/logo4.jfif"
import logo5 from "../../assets/images/logo5.jfif"
import logo6 from "../../assets/images/logo6.jfif"
import logo7 from "../../assets/images/logo7.jfif"
import logo8 from "../../assets/images/logo8.jfif"

const PartnersSection = () => {
  const partners = [
    { name: 'Company One', logo: logo1 },
    { name: 'Company Two', logo: logo2 },
    { name: 'Company Three', logo: logo3 },
    { name: 'Company Four', logo: logo4 },
    { name: 'Company Five', logo: logo5 },
    { name: 'Company Six', logo: logo6 },
    { name: 'Company Seven', logo: logo7 },
    { name: 'Company Eight', logo: logo8 },
  ];

  return (
    <section className="partners">
      <h2 className="partners-title">Our Partners</h2>
      <p className="partners-subtitle">We are proud to work with these amazing companies and clients.</p>
      <div className="partners-container">
        {partners.map((partner, index) => (
          <div key={index} className="partner-card">
            <img src={partner.logo} alt={partner.name} className="partner-logo" />
            <p>{partner.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnersSection;
