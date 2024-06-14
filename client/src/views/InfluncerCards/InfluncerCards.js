import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import InfluncerSmallCard from '../../components/InfluncerSmallCard/InfluncerSmallCard';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

function InfluencerCards() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('/api/v1/getInfluencerUsers');
      console.log('Fetched users:', response.data);
      setUsers(response.data.users);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <Navbar />
      <div className='flex flex-wrap justify-evenly mt-4'>
        {users.map(user => {
          const { _id, name, accounts, profileImage } = user;
          return accounts.map(account => (
            <Link key={account._id} to={`/influncerPackages/${_id}`} className="no-underline">
              <InfluncerSmallCard 
              _id={_id}
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

export default InfluencerCards;
