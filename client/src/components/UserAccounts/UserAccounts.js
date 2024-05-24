import React from 'react';
import './UserAccounts.css';
import { FaInstagram, FaYoutube, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';

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
      return null;
  }
};

function UserAccounts({ accountType, followers, subscribers, handle }) {
  return (
    <div className="user-card">
      <div className="icon-wrapper">
        <AccountTypeIcon accountType={accountType} />
      </div>
      <div className="card-content">
        <h3 className="user-name">{handle}</h3>
        {followers ? `followers ${followers}` : `subscribers ${subscribers}`}
      </div>
    </div>
  );
}

export default UserAccounts;
