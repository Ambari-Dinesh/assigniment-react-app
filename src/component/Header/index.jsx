import React, { useState } from "react";
import "./index.css"; // Import the CSS file for styling
import image1 from "../Images/image1.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="main-header">
      <div className="header-logo">
        <img src={image1} alt="Logo" className="logo" />
      </div>
      <button className="hamburger-menu" onClick={toggleMenu}>
        {isMenuOpen ? "×" : "☰"}
      </button>
      <nav className={`header-nav ${isMenuOpen ? "open" : ""}`}>
        <ul className="header-ul">
          <li className="header-li" >Home</li>
          <a className="header-li" href="#about-section">About Us</a>
          <a className="header-li" href="#service-section">Services</a>
          <a className="header-li" href="#contact-section">Contact Us</a>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
