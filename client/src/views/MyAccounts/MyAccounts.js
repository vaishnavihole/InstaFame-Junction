import React, { useEffect, useState } from 'react';
import axios from 'axios';
import InfluncerSmallCard from '../../components/InfluncerSmallCard/InfluncerSmallCard';

function MyAccounts() {
  const temp = sessionStorage.getItem('user');
  const user = JSON.parse(temp);
  const userId = user ? user._id : null;

  const [accounts, setAccounts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const response = await axios.get(`/api/v1/getAccountsByUserId/${userId}`);
        console.log(response);
        setAccounts(response.data.accounts || []);
      } catch (err) {
        console.error("Error fetching accounts:", err);
        setError("Error fetching accounts. Please try again later.");
      }
    };

    if (userId) {
      fetchAccounts();
    }
  }, [userId]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {accounts.length ? (
        accounts.map((account) => {
          const { handle, accountType, followers, subscribers, name, profileImage } = account;
          return (
            <InfluncerSmallCard
              key={handle}
              handle={handle}
              accountType={accountType}
              followers={followers}
              subscribers={subscribers}
              name={name}
              profileImage={profileImage}
            />
          );
        })
      ) : (
        <div>No accounts found</div>
      )}
    </div>
  );
}

export default MyAccounts;
