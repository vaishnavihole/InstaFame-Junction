import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import axios from 'axios';
import './AddAccountForm.css';
import swal from 'sweetalert2';

function AddAccountForm() {
  const [accountType, setAccountType] = useState('');
  const [handle, setHandle] = useState('');
  const [followers, setFollowers] = useState('');
  const [subscribers, setSubscribers] = useState('');

  const getUserId = () => {
    return JSON.parse(sessionStorage.getItem('user'))._id;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = getUserId(); 
    try {
      await axios.post('/api/v1/addAccount', {
        accountType,
        handle,
        followers,
        subscribers,
        userId, 
      });
      swal.fire({
        icon: 'success',
        title: 'Account Added!',
        text: 'Your account has been added successfully.',
      });
      window.location.href = '/myAccounts';
    } catch (error) {
      swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'An error occurred. Please try again later.',
      });
    }
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-md mx-auto mt-12 p-6 text-center">
        <h2 className="form-title text-4xl font-bold mb-8">Add Account</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
          <div className="form-group">
            <label htmlFor="accountType" className="block mb-2 text-gray-700">Account</label>
            <select
              id="accountType"
              value={accountType}
              onChange={(e) => setAccountType(e.target.value)}
              className="small-input p-2 text-lg border border-gray-300 rounded-lg transition duration-300 focus:outline-none focus:border-blue-500"
              required
            >
              <option value="">Select Account</option>
              <option value="instagram">Instagram</option>
              <option value="facebook">Facebook</option>
              <option value="twitter">Twitter</option>
              <option value="linkedin">LinkedIn</option>
              <option value="youtube">YouTube</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="handle" className="block mb-2 text-gray-700">Handle Name</label>
            <input
              type="text"
              id="handle"
              value={handle}
              onChange={(e) => setHandle(e.target.value)}
              className="small-input w-full p-2 text-lg border border-gray-300 rounded-lg transition duration-300 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          {accountType !== 'youtube' ? (
            <div className="form-group">
              <label htmlFor="followers" className="block mb-2 text-gray-700">Followers</label>
              <input
                type="number"
                id="followers"
                value={followers}
                onChange={(e) => setFollowers(e.target.value)}
                className="small-input w-full p-2 text-lg border border-gray-300 rounded-lg transition duration-300 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
          ) : (
            <div className="form-group">
              <label htmlFor="subscribers" className="block mb-2 text-gray-700">Subscribers</label>
              <input
                type="number"
                id="subscribers"
                value={subscribers}
                onChange={(e) => setSubscribers(e.target.value)}
                className="small-input w-full p-2 text-lg border border-gray-300 rounded-lg transition duration-300 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
          )}
          <button type="submit" className="form-submit-button">
            Add Account
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default AddAccountForm;
