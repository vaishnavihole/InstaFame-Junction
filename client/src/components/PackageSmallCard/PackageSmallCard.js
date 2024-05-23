import React from 'react';
import './PackageSmallCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const PackageSmallCard = ({ packageName, features, price }) => {
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
                    <div className="price"> ₹{price}</div>
                    <button className="buy-now-btn">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default PackageSmallCard;
