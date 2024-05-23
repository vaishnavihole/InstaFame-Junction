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
        setError("Error fetching packages");
      }
    };

    fetchPackages();
  }, [userId]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {packages.map((packageData) => (
        <PackageSmallCard key={packageData._id} packageData={packageData} />
      ))}
    </div>
  );
};

export default PackageCard;
