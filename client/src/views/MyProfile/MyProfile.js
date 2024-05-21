import React, { useState } from 'react';
import './MyProfile.css';

function MyProfile() {

  return (
    <div className="profile-edit-container">
      <h2 className='edit-profile-text'>Edit Profile</h2>
      <form  className="profile-edit-form">
        <div className="form-group">
          <label htmlFor="profileImage">Profile Image</label>
          <input type="file" name="profileImage" accept="image/*" />
        
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile</label>
          <input type="text" name="mobile" />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input type="text" name="city" />
        </div>
        <button type="submit" className="update-profile">Update Profile</button>
      </form>
    </div>
  );
}

export default MyProfile;
