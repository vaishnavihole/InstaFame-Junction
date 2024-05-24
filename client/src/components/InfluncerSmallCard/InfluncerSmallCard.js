import React from 'react';
import './InfluncerSmallCard.css';
import { FaInstagram, FaYoutube, FaTwitter, FaFacebook, FaLinkedin} from 'react-icons/fa';
import defaultAvatarUrl from './user.png';

const AccountTypeIcon = ({ accountType }) => {
  switch (accountType) {
    case 'instagram':
      return <FaInstagram size={20} />;
    case 'youtube':
      return <FaYoutube size={20} />;
    case 'twitter':
      return <FaTwitter size={20} />;
    case 'facebook':
      return <FaFacebook size={20} />;
    case 'linkedin':
      return <FaLinkedin size={20} />;
    default:
  }
};

function InfluncerSmallCard({ handle, accountType, followers, subscribers, name, profileImage }) {
  const imageUrl = profileImage || defaultAvatarUrl;

  return (
    <div className='influncer-container'>
      <div className="influncer-card">
        <img src={imageUrl} alt="Profile" className="influncer-profile-image" />
        <h3 className="user-name">{name}</h3>
        <div className='social-container'>
          <AccountTypeIcon accountType={accountType} />
          <p className='account-name'>{handle}</p>
          <p className='account-followers'>{followers ? `followers ${followers}` : `subscribers ${subscribers}`}</p>
        </div>
      </div>
    </div>
  );
}

export default InfluncerSmallCard;
