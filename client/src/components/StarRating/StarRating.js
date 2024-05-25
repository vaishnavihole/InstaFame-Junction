import React, { useState } from 'react';
import './StarRating.css';

const StarRating = ({ initialRating, onRatingChange }) => {
  const [rating, setRating] = useState(initialRating);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
    onRatingChange(newRating);
  };

  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={starValue}
              checked={starValue === rating}
              onChange={() => handleRatingChange(starValue)}
            />
            <span className={`icon ${starValue <= rating ? 'active' : ''}`}>★</span>
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
