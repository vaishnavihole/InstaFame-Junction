import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PackageSmallCard from '../../components/PackageSmallCard/PackageSmallCard';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

function InfluncerPackages() {
  const [packages, setPackages] = useState([]);
  const [error, setError] = useState(null);

  const { userId } = useParams();

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await axios.get(`/api/v1/getPackageByUserId/${userId}`);
        setPackages(response.data.packages);
      } catch (error) {
        console.error("Error fetching packages:", error);
        setError("Error fetching packages. Please try again later.");
      }
    };

    fetchPackages(); 
  }, [userId]);

  return (
    <div>
      <Navbar />
      <div className='flex flex-wrap mt-6'>
        {error && <div>Error: {error}</div>}
        {packages.map((pkg, index) => (
          <div key={index}>
            <PackageSmallCard
              _id={pkg._id}
              packageName={pkg.packageName}
              features={pkg.features}
              price={pkg.price}
              showLink={true}
            />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default InfluncerPackages;
