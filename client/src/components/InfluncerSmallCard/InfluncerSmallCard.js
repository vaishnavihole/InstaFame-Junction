import React from 'react';
import './InfluncerSmallCard.css';
import profile from './profile.png';
import { FaInstagram } from 'react-icons/fa'; 

function InfluncerSmallCard({}) {
  return (
  <div>
<div className='influncer-container'>
<div className="influncer-card">
  <img src={profile} alt="Feature 1" className="influncer-profile-image" />
  <h3 className="user-name">suraj_shende_247</h3>
 <div className='flex'>
 <FaInstagram className="instagram-icon" /> 
 <span className="follower-count">Followers: 10k</span>
 </div>

 
</div>


</div>
    </div>
  )
}

export default InfluncerSmallCard