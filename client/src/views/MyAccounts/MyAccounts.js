import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserAccounts from '../../components/UserAccounts/UserAccounts';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import allowedRole from '../../utils/auth';

function MyAccounts() {
  const temp = sessionStorage.getItem('user');
  const user = temp ? JSON.parse(temp) : null;
  const userId = user ? user._id : null;

  const [accounts, setAccounts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!allowedRole('influencer')) {
      Swal.fire({
        icon: 'error',
        title: 'Unauthorized',
        text: 'You do not have the necessary permissions to access this page.',
      }).then(() => {
        window.location.href = '/userDashboard';
      });
    } else if (userId) {
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

      fetchAccounts();
    }
  }, [userId]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="flex justify-end mt-8 mr-8">
        <Link to="/addAccountForm">
          <button className="bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg cursor-pointer py-2 px-6 transition-all duration-500 hover:rounded-full text-white">
            Add Account
          </button>
        </Link>
      </div>
      <div className="flex flex-wrap gap-5 justify-center p-5">
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
