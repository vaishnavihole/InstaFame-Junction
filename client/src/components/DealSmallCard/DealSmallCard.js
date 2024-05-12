import React from 'react';
import './DealSmallCard.css';
import userImageLeft from './user.png';

const DealSmallCard = () => {
  return (
    <div className="card-container">
      <div className="package-card">
        <div className="user-left">
          <img className="user-image" src={userImageLeft} alt="Left User" />
        </div>
        <div className="shakhand-icon">
          <i className="fa fa-handshake-o shakhand-icon-img"></i>
        </div>
        <div className="user-right">
          <img className="user-image" src={userImageLeft} alt="Right User" />
        </div>
        <div className="details">
        <div className='price-text'>$100</div>
        <div className='date-text'>12/3/2024</div>
        <div className='note-text'>This is Deal</div>
        </div>
      </div>
    </div>
  );
};

export default DealSmallCard;
