import React, { useState } from 'react';
import './Navbar.css'; // Make sure the CSS file is correctly imported

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          {/* Your logo goes here */}
          {/* <img src="logo.png" alt="Logo" /> */}
        </div>
        <div className="brand-name">
          InstaFame Junction
        </div>
      </div>
      <div className="navbar-right">
        <div className="menu-toggle" onClick={toggleMenu}>
          <i className="fa fa-bars"></i>
        </div>
        <ul className={`menu-items ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/contactUs">Contact</a></li>
          <li><a href="/myProfile">My Profile</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
