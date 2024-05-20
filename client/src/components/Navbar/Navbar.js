import React from 'react';
import './Navbar.css'; // You can create a CSS file for styling

const Navbar = () => {
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
        <ul className="menu-items">
          <li><a href="/">Home</a></li>
          <li><a href="/contactUs">Contact</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
