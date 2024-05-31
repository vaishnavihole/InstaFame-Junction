import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import InfluncerSmallCard from '../../components/InfluncerSmallCard/InfluncerSmallCard';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import allowedRole from '../../utils/auth';
import Swal from 'sweetalert2';

function InfluncerCards() {
  const [influencers, setInfluencers] = useState([]);

  const fetchInfluencers = async () => {
    try {
      const response = await axios.get('/api/v1/getInfluencerUsers');
      console.log('Fetched influencers:', response.data);
      setInfluencers(response.data.users);
    } catch (error) {
      console.error("Error fetching influencers:", error);
    }
  };

  useEffect(() => {
    const temp = sessionStorage.getItem('user');
    const user = temp ? JSON.parse(temp) : null;

    if (!allowedRole(user, 'user')) {
      Swal.fire({
        icon: 'error',
        title: 'Access Denied',
        text: 'You do not have permission to access this page.',
        confirmButtonText: 'Go to Influencer Dashboard',
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = '/influencerdashboard';
        }
      });
    } else {
      fetchInfluencers();
    }
  }, []);

  return (
    <div>
      <Navbar />
      <div className='flex flex-wrap justify-evenly mt-4'>
        {influencers.map(influencer => {
          const { _id, name, accounts, profileImage } = influencer;
          return accounts.map(account => (
            <Link key={_id} to={`/influncerPackages/${_id}`} className="no-underline">
              <InfluncerSmallCard 
                key={account._id} 
                name={name} 
                handle={account.handle} 
                accountType={account.accountType} 
                followers={account.followers} 
                subscribers={account.subscribers} 
                profileImage={profileImage} 
              />
            </Link>
          ));
        })}
      </div>
      <Footer />
    </div>
  );
}

export default InfluncerCards;
