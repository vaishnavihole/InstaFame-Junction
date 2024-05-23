import React, { useState, useEffect } from 'react';
import './InfluncerDashboard.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
import PackageSmallCard from '../../components/PackageSmallCard/PackageSmallCard';
import DealSmallCard from '../../components/DealSmallCard/DealSmallCard';

const InfluencerDashboard = () => {
  const temp = sessionStorage.getItem('user');
  const user = JSON.parse(temp);

  const userId = user._id;

  const [packages, setPackages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await axios.get(`/api/v1/getPackageByUserId/${userId}`);
        console.log(response);
        setPackages(response.data.packages);
      } catch (err) {
        console.error("Error fetching packages:", err);
        setError("Error fetching packages. Please try again later.");
      }
    };

    if (userId) {
      fetchPackages();
    }
  }, [userId]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="container">
       <Link to="/addPackageForm">
       <button className="add-package-btn">
          Add Package
        </button>
       </Link>
        <div className='my-package-text'>My Package</div>
        <div className='package-card-container  hide-scrollbar'>
          {packages.map((pkg) => {
            const { packageName, features, price } = pkg;
            return (
              <PackageSmallCard
                userId={userId}
                key={packageName}
                packageName={packageName}
                features={features}
                price={price}
              />
            );
          })}
        </div>
      </div>
      <div className="my-deal-container">
        <div className='my-deal-text'>My Deal</div>
        <DealSmallCard />
      </div>
    </div>
  );
};

export default InfluencerDashboard;
