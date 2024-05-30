import React from 'react';
import './Footer.css';
import instaFameLogo from './instaFameLogo.png';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">
          <img src={instaFameLogo} alt="Company Logo" className="footer-logo-img" />
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <ul>
            <li><a href="https://twitter.com/vaishnavi_hole"><i className="fab fa-twitter"></i></a></li>
            <li><a href="https://instagram.com/vaishnavi_hole_29"><i className="fab fa-instagram"></i></a></li>
            <li><a href="https://www.linkedin.com/company/vaishnavihole"><i className="fab fa-linkedin-in"></i></a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Developed By Vaishnavi Hole❤️</p>
      </div>
    </footer>
  );
}

export default Footer;
