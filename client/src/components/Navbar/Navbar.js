import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar flex justify-between items-center px-4 py-2 text-white md:h-16 relative z-50">
      <div className="navbar-left flex items-center">
        <div className="logo">

          {/* <img src="logo.png" alt="Logo" /> */}
        </div>
        <div className="brand-name font-bold text-lg">InstaFame Junction</div>
      </div>
      <div className="navbar-right flex items-center">
        <div className="menu-toggle cursor-pointer text-white text-2xl md:hidden" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </div>
        <ul className={`menu-items flex flex-col md:flex-row md:flex ${isMenuOpen ? 'block' : 'hidden'}`}>
          <li className="my-1 md:my-0 md:mx-2"><a href="/" className="text-white hover:underline">Home</a></li>
          <li className="my-1 md:my-0 md:mx-2"><a href="/contactUs" className="text-white hover:underline">Contact</a></li>
          <li className="my-1 md:my-0 md:mx-2"><a href="/myProfile" className="text-white hover:underline">My Profile</a></li>
          <li className="my-1 md:my-0 md:mx-2"><a href="/login" className="text-white hover:underline">Login</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
