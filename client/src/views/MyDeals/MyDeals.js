import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DealSmallCard from '../../components/DealSmallCard/DealSmallCard';

const MyDeals = () => {
  const temp = sessionStorage.getItem('user');
  const user = temp ? JSON.parse(temp) : null; 
  const userId = user ? user._id : null; 
  console.log("UserId:", userId);

  const [deals, setDeals] = useState([]);

  useEffect(() => {
    const fetchDeals = async () => {
      if (!userId) return; 
      console.log("Fetching deals for userId:", userId);
      
      try {
        const response = await axios.get(`/api/v1/getDealsByUserId/${userId}`);
        const data = response.data;

        if (Array.isArray(data.deals)) {
          setDeals(data.deals);
        } else {
          setDeals([]); 
        }
      } catch (error) {
        console.error('Error fetching deals:', error);
        setDeals([]); 
      }
    };

    fetchDeals();
  }, [userId]);

  return (
    <div>
      {deals.length > 0 ? (
        deals.map(deal => (
          <DealSmallCard
            key={deal._id}
            price={`$${deal.amount}`} 
            date={new Date(deal.createdAt).toLocaleDateString()} 
            note={deal.note}
          />
        ))
      ) : (
        <div>No Deals Found</div>
      )}
    </div>
  );
};

export default MyDeals;
