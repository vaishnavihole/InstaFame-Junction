import React from 'react';
import './InfluncerDashboard.css';
import Navbar from '../../components/Navbar/Navbar';
import PackageSmallCard from '../../components/PackageSmallCard/PackageSmallCard';
import DealSmallCard from '../../components/DealSmallCard/DealSmallCard';

const InfluncerDashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <button className="add-package-btn">
          Add Package
        </button>
        <div className='my-package-text'>My Package</div>
        <PackageSmallCard />
      </div> 
      <div className="my-deal-container">
        <div className='my-deal-text'>My Deal</div>
        <DealSmallCard />
      </div>
    </div>
  );
};

export default InfluncerDashboard;
