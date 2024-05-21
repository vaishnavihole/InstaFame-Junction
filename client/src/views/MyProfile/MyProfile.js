import React, { useState } from 'react';
import './MyProfile.css';

function MyProfile() {
    const [profilePictureUrl, setProfilePictureUrl] = useState('');

    const handleImageUpload = async () => {
        try {
            const formData = new FormData();
            formData.append('file', document.getElementById('fileInput').files[0]);

            const response = await fetch('/upload', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();
            if (data.url) {
                setProfilePictureUrl(data.url);
            } else {
                console.error('Failed to upload image');
            }
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };
    
  return (
    <div className="profile-edit-container">
      <h2 className='edit-profile-text'>Edit Profile</h2>
      <form  className="profile-edit-form">
        <div className="form-group">
          <label htmlFor="profileImage">Profile Image</label>
          <input type="file" id="fileInput" onChange={handleImageUpload} />
        
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
