import React, { useState, useEffect } from 'react';
import './AddAccountForm.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer'
import axios from 'axios';
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
      const response = await axios.post('/api/v1/addAccount', {
        accountType,
        handle,
        followers,
        subscribers,
        userId: userId, 
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
      <div className="add-account-form-container">
        <h2 className="form-title">Add Account</h2>
        <form onSubmit={handleSubmit} className="add-account-form">
          <div className="form-group account-type-group">
            <label htmlFor="accountType" className="form-label custom-label">Account</label>
            <select
              id="accountType"
              value={accountType}
              onChange={(e) => setAccountType(e.target.value)}
              className="form-input custom-input select-input"
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
      
          <div className="form-group name-group">
            <label htmlFor="handle" className="form-label custom-label">Handle Name</label>
            <input
              type="text"
              id="handle"
              value={handle}
              onChange={(e) => setHandle(e.target.value)}
              className="form-input custom-input text-input"
              required
            />
          </div>
          {accountType !== 'youtube' ? (
            <div className="form-group followers-group">
              <label htmlFor="followers" className="form-label custom-label">Followers</label>
              <input
                type="number"
                id="followers"
                value={followers}
                onChange={(e) => setFollowers(e.target.value)}
                className="form-input custom-input number-input"
                required
              />
            </div>
          ) : (
            <div className="form-group subscribers-group">
              <label htmlFor="subscribers" className="form-label custom-label">Subscribers</label>
              <input
                type="number"
                id="subscribers"
                value={subscribers}
                onChange={(e) => setSubscribers(e.target.value)}
                className="form-input custom-input number-input"
                required
              />
            </div>
          )}
          <button type="submit" className="form-submit-button">Add Account</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default AddAccountForm;
