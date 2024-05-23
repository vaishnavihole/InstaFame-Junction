import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PackageSmallCard from '../../components/PackageSmallCard/PackageSmallCard';
import './PackageCard.css';

const PackageCard = ({ userId }) => {
  const [packages, setPackages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await axios.get(`/api/v1/getPackageByUserId/${userId}`);
        setPackages(response.data.packages);
      } catch (err) {
        console.error("Error fetching packages:", err);
       
      }
    };

    fetchPackages();
  }, [userId]);

  if (error) {
    return <div>{error}</div>;
  }

  if (packages.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {packages.map((pkg) => {
        const { packageName, features, price } = pkg;
        return (
          <PackageSmallCard
            key={packageName} 
            packageName={packageName}
            features={features}
            price={price}
          />
        );
      })}
    </div>
  );
};

export default PackageCard;
