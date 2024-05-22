import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MyProfile.css';
import Swal from 'sweetalert2';

function MyProfile() {
  const [profilePictureUrl, setProfilePictureUrl] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    city: '',
  });

  
  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    if (user) {
      setFormData({
        name: user.name || '',
        email: user.email || '',
        mobile: user.mobile || '',
        city: user.city || '',
      });
      setProfilePictureUrl(user.profileImage || '');
    }
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      const data = response.data;
      if (data.url) {
        setProfilePictureUrl(data.url);
      } else {
        console.error('Failed to upload image');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const profileData = {
      ...formData,
      profileImage: profilePictureUrl,
    };

    try {
      const response = await axios.put('/api/v1/update', profileData);
      console.log('Profile updated successfully:', response.data);
     
      sessionStorage.setItem('user', JSON.stringify(response.data.user));
    } catch (error) {
      console.error('Error updating profile:', error);
    }
       Swal.fire({
        icon: 'success',
        title: 'Profile Updated!',
        text: 'Your profile has been successfully updated.',
        });
  };

  return (
    <div className="profile-edit-container">
      <h2 className='edit-profile-text'>Edit Profile</h2>
      <form className="profile-edit-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="profileImage">Profile Image</label>
          <input type="file" id="fileInput" onChange={handleImageUpload} />
          {profilePictureUrl && <img src={profilePictureUrl} alt="Profile" className="profile-image" />}
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile</label>
          <input type="text" name="mobile" value={formData.mobile} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input type="text" name="city" value={formData.city} onChange={handleInputChange} />
        </div>
        <button type="submit" className="update-profile">Update Profile</button>
      </form>
    </div>
  );
}

export default MyProfile;
