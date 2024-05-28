import React from 'react';
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
    <div className="flex flex-col items-center bg-white border border-gray-300 rounded-lg p-4 m-2 shadow-md w-40 text-center cursor-pointer hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-2">
        <AccountTypeIcon accountType={accountType} />
      </div>
      <div className="flex flex-col">
        <h3 className="my-2 text-lg font-bold">{handle}</h3>
        <p className="text-sm text-gray-500">
          {followers ? `followers ${followers}` : `subscribers ${subscribers}`}
        </p>
      </div>
    </div>
  );
}

export default UserAccounts;
