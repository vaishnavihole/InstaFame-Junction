import React from 'react';
import './PackageSmallCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const PackageSmallCard = () => {
    return (
        <div className="card-container">
            <div className="package-card">
                <div className="details">
                    <h3 className="package-heading">Sliver</h3>
                    <ul className="feature-list">
                        <li className="feature-item"><FontAwesomeIcon icon={faCircleCheck} className="custom-icon" /> Feature 1</li>
                        <li className="feature-item"><FontAwesomeIcon icon={faCircleCheck} className="custom-icon" /> Feature 2</li>
                        <li className="feature-item"><FontAwesomeIcon icon={faCircleCheck} className="custom-icon" /> Feature 3</li>
                    </ul>
                    <div className="price">$100</div>
                    <button className="buy-now-btn">I want an influencer</button>
                </div>
            </div>

            <div className="package-card">
                <div className="details">
                    <h3 className="package-heading">Gold</h3>
                    <ul className="feature-list">
                        <li className="feature-item"><FontAwesomeIcon icon={faCircleCheck} className="custom-icon" /> Feature 1</li>
                        <li className="feature-item"><FontAwesomeIcon icon={faCircleCheck} className="custom-icon" /> Feature 2</li>
                        <li className="feature-item"><FontAwesomeIcon icon={faCircleCheck} className="custom-icon" /> Feature 3</li>
                    </ul>
                    <div className="price">$200</div>
                    <button className="buy-now-btn">I want an influencer</button>
                </div>
            </div>

            <div className="package-card">
                <div className="details">
                    <h3 className="package-heading">Diamond</h3>
                    <ul className="feature-list">
                        <li className="feature-item"><FontAwesomeIcon icon={faCircleCheck} className="custom-icon" /> Feature 1</li>
                        <li className="feature-item"><FontAwesomeIcon icon={faCircleCheck} className="custom-icon" /> Feature 2</li>
                        <li className="feature-item"><FontAwesomeIcon icon={faCircleCheck} className="custom-icon" /> Feature 3</li>
                    </ul>
                    <div className="price">$300</div>
                    <button className="buy-now-btn">I want an influencer</button>
                </div>
            </div>

            
        </div>
    );
};

export default PackageSmallCard;
