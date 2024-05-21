import React from 'react';
import './InfluncerSmallCard.css';
import profile from './profile.png';
import { FaInstagram, FaYoutube, FaTwitter} from 'react-icons/fa';

const AccountTypeIcon = ({ accountType }) => {
  switch (accountType) {
    case 'instagram':
      return <FaInstagram size={20} />
    case 'youtube':
      return <FaYoutube size={20} />
    case 'twitter':
      return <FaTwitter size={20} />
    default:
      return null;
  }

}

function InfluncerSmallCard({ followers, name, accounts }) {
  return (
    <div>
      <div className='influncer-container'>
        <div className="influncer-card">
          <img src={profile} alt="Feature 1" className="influncer-profile-image" />
          <h3 className="user-name">{name}</h3>
          <div className='flex'>
            {
              JSON.parse(accounts).map(account => {
                const {handle, accountType, followers, subscribers} = account;
                return (
                  <div className='social-container'>
                     <AccountTypeIcon accountType={accountType} />
                    <p className='account-name'>{handle}</p>
                    <p className='account-followers'>{followers? "followers" : "subscribers"} {followers || subscribers}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfluncerSmallCard