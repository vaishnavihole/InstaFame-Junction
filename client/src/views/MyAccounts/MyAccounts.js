import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MyAccounts.css';
import UserAccounts from '../../components/UserAccounts/UserAccounts';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';

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
      <Navbar />
      <div className="button-container">
        <Link to="/addAccountForm">
          <button className="add-account-btn">Add Account</button>
        </Link>
      </div>
      <div className="user-cards-container">
        {accounts.length ? (
          accounts.map((account) => {
            const { handle, accountType, followers, subscribers, name, profileImage } = account;
            return (
              <UserAccounts
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
      <Footer />
    </div>
  );
}

export default MyAccounts;