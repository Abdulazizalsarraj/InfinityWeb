import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; 
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 My Company. All rights reserved.</p>
      <div className="footer-links">
        <a href="#about">About Us</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#team">Team</a>
        <a href="#faq">FAQ</a>
        <a href="#blog">Blog</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="footer-social">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </a>
      </div>
    </footer>
  );
}

export default Footer;

