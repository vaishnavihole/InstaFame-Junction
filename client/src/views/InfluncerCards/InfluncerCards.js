import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import InfluncerSmallCard from '../../components/InfluncerSmallCard/InfluncerSmallCard';
import axios from 'axios';
import './InfluncerCards.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

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
  }

  useEffect(() => {
    fetchInfluencers();
  }, []);

  return (
    <div>
      <Navbar />
      <div className='influncer-card-div'>
        {influencers.map(influencer => {
          const { _id, name, accounts, profileImage } = influencer;
          return accounts.map(account => (
            <Link key={_id} to={`/influncerPackages/${_id}`} className="link-style">
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
