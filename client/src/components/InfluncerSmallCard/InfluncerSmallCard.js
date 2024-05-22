import React from 'react';
import './InfluncerSmallCard.css';
import { FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import defaultAvatarUrl from './user.png'; 

const AccountTypeIcon = ({ accountType }) => {
  switch (accountType) {
    case 'instagram':
      return <FaInstagram size={20} />;
    case 'youtube':
      return <FaYoutube size={20} />;
    case 'twitter':
      return <FaTwitter size={20} />;
    default:
      return null;
  }
};

function InfluncerSmallCard({ followers, name, accounts, profileImage }) {
  const imageUrl = profileImage || defaultAvatarUrl;

  let parsedAccounts = [];
  try {
    parsedAccounts = JSON.parse(accounts);
  } catch (error) {
    console.error('Failed to parse accounts:', error);
  }

  return (
    <div className='influncer-container'>
      <div className="influncer-card">
        <img src={imageUrl} alt="Profile" className="influncer-profile-image" />
        <h3 className="user-name">{name}</h3>
        <div className='flex'>
          {parsedAccounts.map((account, index) => {
            const { handle, accountType, followers, subscribers } = account;
            return (
              <div className='social-container' key={index}>
                <AccountTypeIcon accountType={accountType} />
                <p className='account-name'>{handle}</p>
                <p className='account-followers'>{followers ? 'followers' : 'subscribers'} {followers || subscribers}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default InfluncerSmallCard;
