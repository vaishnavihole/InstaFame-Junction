import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaYoutube, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
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
      return null;
  }
};

function InfluncerSmallCard({ _id, handle, accountType, followers, subscribers, name, profileImage }) {
  const imageUrl = profileImage || defaultAvatarUrl;

  return (
    <div className='flex flex-wrap justify-evenly mt-24'>
      <div className="relative mb-6 border border-gray-300 bg-white rounded-lg p-3 shadow-md flex flex-col items-center text-center transform transition-transform duration-300 hover:translate-y-1 hover:shadow-lg hover:border-blue-500 w-72">
        <img src={imageUrl} alt="Profile" className="absolute top-[-50px] w-20 h-20 rounded-full border border-black transition-transform duration-300 hover:scale-110 hover:border-blue-500" />
        <h3 className="mt-12 text-center text-blue-500 font-bold text-xl">{name}</h3>
        <div className='flex flex-col items-center mt-2 p-2 border border-gray-200 rounded-lg bg-gray-50 shadow-sm hover:shadow-md hover:border-blue-500'>
          <AccountTypeIcon accountType={accountType} className="text-2xl" />
          <p className='mt-1 font-bold'>{handle}</p>
          <p className='mt-1 text-gray-600'>
            {followers ? `Followers: ${followers}` : `Subscribers: ${subscribers}`}
          </p>
        </div>
       <Link to={`/chatPage/${_id}`}>
       <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          Chat
        </button>
       </Link>
      </div>
    </div>
  );
}

export default InfluncerSmallCard;
