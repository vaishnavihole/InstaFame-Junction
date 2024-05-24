import React from 'react';
import './ContactUs.css';
import contactimg from './contactImg.png';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';


function ContactUs() {
  return (
    <>
    <Navbar />
    <div className="contact-container">
      <div className="contact-image">
        <img src={contactimg} alt="Contact Us" />
      </div>
      <div className="contact-form">
        <div className='contact-text'>Contact Us</div>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button  className="contact-submit-btn" type="submit">Submit</button>
        </form>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default ContactUs;
