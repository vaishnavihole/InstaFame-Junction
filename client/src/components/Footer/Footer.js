import React from 'react';
import './Footer.css';
import livinqr from './logo-livin.png';

function Footer() {
  return (
    <footer>
    <div class="footer-content">
        <div class="footer-logo">
            <img src={livinqr} alt="Company Logo" />
        </div>
        <div class="footer-links">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </div>
        <div class="footer-social">
            <ul>
                <li><a href="https://twitter.com/vaishnavi_hole"><i class="fab fa-twitter"></i></a></li>
                <li><a href="https://instagram.com/vaishnavi_hole_29"><i class="fab fa-instagram"></i></a></li>
                <li><a href="https://www.linkedin.com/company/vaishnavihole"><i class="fab fa-linkedin-in"></i></a></li>
            </ul>
        </div>
    </div>
    <div class="footer-bottom">
        <p>Developed By Vaishnavi Hole</p>
    </div>
</footer>

  )
}

export default Footer;