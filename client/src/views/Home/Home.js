import React, { useState } from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import googleFonts from 'google-fonts';
import ImgHeader from './images/HeaderImg.png';
import campagin from './images/campagin.png';
import influencer from './images/influencer.png';
import dashboard from './images/dashboard.png';
import promoting from './images/promoting.png';
import collaboration from './images/collaboration.png';
import brand from './images/brand.png';
import StarRating from '../../components/StarRating/StarRating';

googleFonts.add({
  'Open Sans': ['400', '700']
});

googleFonts.add({
  'Playfair Display': ['400', '700'],
});

function Home() {
  const [ratings, setRatings] = useState([0, 0, 0]);

  const handleRatingChange = (index, newRating) => {
    const newRatings = [...ratings];
    newRatings[index] = newRating;
    setRatings(newRatings);
  };

  return (
    <div>
      <Navbar />
      <div className="bubble-animation"></div>
      <div className='row'>
        <div className='col-md-6'>
          <div className='header-img-container'>
            <img className='header-image' src={ImgHeader} alt="Mobile View" />
          </div>
        </div>
        <div className='col-md-6'>
          <div className='features-container'>
            <h1 className='quotes'>Get Your Influencer <br /> Without Any Efforts</h1>
          </div>
          <div className="button-container">
            <button className="influencer-btn influencer-btn-want">I want an influencer</button>
            <button className="influencer-btn">I want to be an influencer</button>
          </div>
        </div>
      </div>

      <h2 className="features-heading">For Business Owners</h2>
      <div className='featured-container'>
        <div className="featured-card ">
          <img src={influencer} alt="influncer" className="featured-image" />
          <h3 className="featured-name">Get the Most Appropriate Influencer</h3>
          <p className="featured-description">
            Enhancing medical care, Livin QR facilitates the submission of victims'
            medical histories to hospitals, ensuring timely and informed treatment.</p>
        </div>

        <div className="featured-card">
          <img src={dashboard} alt="Feature 1" className="featured-image" />
          <h3 className="featured-name">Track Engagement on a Single Dashboard</h3>
          <p className="featured-description">
            Enhancing medical care, Livin QR facilitates the submission of victims'
            medical histories to hospitals, ensuring timely and informed treatment.</p>
        </div>

        <div className="featured-card">
          <img src={campagin} alt="Feature 1" className="featured-image" />
          <h3 className="featured-name">Campaign Management Tools</h3>
          <p className="featured-description">
            Enhancing medical care, Livin QR facilitates the submission of victims'
            medical histories to hospitals, ensuring timely and informed treatment.</p>
        </div>
      </div>

      <h2 className="features-heading">For Influencers</h2>
      <div className='featured-container'>
        <div className="featured-card">
          <img src={promoting} alt="promotion" className="featured-image" />
          <h3 className="featured-name">Earn Risk-Free by Promoting as an Influencer</h3>
          <p className="featured-description">
            Enhancing medical care, Livin QR facilitates the submission of victims'
            medical histories to hospitals, ensuring timely and informed treatment.</p>
        </div>

        <div className="featured-card">
          <img src={collaboration} alt="collaboration" className="featured-image" />
          <h3 className="featured-name">Connect and Collaborate with Multiple Businesse</h3>
          <p className="featured-description">
            Enhancing medical care, Livin QR facilitates the submission of victims'
            medical histories to hospitals, ensuring timely and informed treatment.</p>
        </div>

        <div className="featured-card">
          <img src={brand} alt="brand" className="featured-image" />
          <h3 className="featured-name">Personal Brand Growth Tools</h3>
          <p className="featured-description">
            Enhancing medical care, Livin QR facilitates the submission of victims'
            medical histories to hospitals, ensuring timely and informed treatment.</p>
        </div>
      </div>

      {/* Customer Reviews Section */}
      <h2 className="features-heading">Customer Reviews</h2>
      <div className='review-container'>
        <div className='review-card'>
          <StarRating initialRating={ratings[0]} onRatingChange={(newRating) => handleRatingChange(0, newRating)} />
          <p className='review-text'>"This service has revolutionized our marketing approach. The influencers we've worked with are top-notch!"</p>
          <h4 className='review-author'>John Doe</h4>
        </div>
        <div className='review-card'>
          <StarRating initialRating={ratings[1]} onRatingChange={(newRating) => handleRatingChange(1, newRating)} />
          <p className='review-text'>"Amazing platform! It has significantly boosted our brand's presence online."</p>
          <h4 className='review-author'>Jane Smith</h4>
        </div>
        <div className='review-card'>
          <StarRating initialRating={ratings[2]} onRatingChange={(newRating) => handleRatingChange(2, newRating)} />
          <p className='review-text'>"Highly recommend for any business looking to expand their reach!"</p>
          <h4 className='review-author'>Emily Johnson</h4>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
