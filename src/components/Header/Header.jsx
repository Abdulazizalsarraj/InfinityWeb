import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Header.css';

function Header() {
  return (
    <Navbar className="custom-navbar" expand="lg" fixed="top">
      <div className="container">
        <Navbar.Brand href="#hero" className="custom-logo">
        InfinityWeb
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#hero" className="custom-link">Home</Nav.Link>
            <Nav.Link href="#features" className="custom-link">Features</Nav.Link>
            <Nav.Link href="#services" className="custom-link">Services</Nav.Link>
            <Nav.Link href="#testimonial" className="custom-link">Testimonial</Nav.Link>
            <Nav.Link href="#pricing" className="custom-link">Pricing</Nav.Link>
            <Nav.Link href="#contact" className="custom-link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Header;
