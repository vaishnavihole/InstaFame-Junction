import React from 'react';
import './PackageSmallCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const PackageSmallCard = ({_id, packageName, features, price, showLink }) => {
  if (!Array.isArray(features) || features.length === 0) {
    return null; // Don't render the card if there are no features
  }

  return (
    <div className="card-container">
      <div className="package-card">
        <div className="details">
          <h3 className="package-heading">{packageName}</h3>
          <ul className="feature-list">
            {features.map((feature, index) => (
              <li key={index} className="feature-item">
                <FontAwesomeIcon icon={faCircleCheck} className="custom-icon" /> {feature}
              </li>
            ))}
          </ul>
          <div className="price">₹{price}</div>
          {
            showLink ? 
            <Link to={`/addNote/${_id}`} >
            <button className="buy-now-btn">
              Buy Now
            </button>
            </Link> : null
          }
        
        </div>
      </div>
    </div>
  );
};

export default PackageSmallCard;

