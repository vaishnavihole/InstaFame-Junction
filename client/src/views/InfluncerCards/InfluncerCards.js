import React, {useEffect, useState} from 'react';
import InfluncerSmallCard from '../../components/InfluncerSmallCard/InfluncerSmallCard';
import Navbar from '../../components/Navbar/Navbar';
import axios from 'axios';
import './InfluncerCards.css';

function InfluncerCards() {
  const [influencers, setInfluencers] = useState([]);

 const fetchInfluencers = async () => {
    try {
      const response = await axios.get('/api/v1/getInfluencerUsers');
      setInfluencers(response.data.users);
    } catch (error) {
      console.error("Error:", error);
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

          const {_id, name, accounts, profileImage} = influencer

          return (<InfluncerSmallCard key={_id} name={name} accounts={JSON.stringify(accounts)}  profileImage={ profileImage}/>)
    })}
      </div>
      
    </div>
  )
}

export default InfluncerCards