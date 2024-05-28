import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './PackageSmallCard.css';

const PackageSmallCard = ({ _id, packageName, features, price, showLink }) => {
  if (!Array.isArray(features) || features.length === 0) {
    return null;
  }

  return (
    <div className="flex justify-center">
      <div className=  "bg-white rounded-2xl p-6 shadow-lg transition-transform duration-300 hover:translate-y-1 hover:shadow-xl w-80 mx-4 my-6 flex flex-col items-center text-center">
        <h3 className=" package-heading">{packageName}</h3>
        <ul className="list-none mb-4 overflow-auto flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center justify-center text-lg text-gray-800 mb-2">
              <FontAwesomeIcon icon={faCircleCheck} className="text-blue-400 mr-2" /> {feature}
            </li>
          ))}
        </ul>
        <div className="text-3xl font-semibold mb-4">₹{price}</div>
        {showLink && (
          <Link to={`/addNote/${_id}`} >
           <button className='buy-now-btn'>Buy Now</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default PackageSmallCard;
