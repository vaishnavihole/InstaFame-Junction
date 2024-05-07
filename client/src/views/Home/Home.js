import React from 'react';
import './Home.css';  
import Navbar from '../../components/Navbar/Navbar';
import ImgHeader from './HeaderImg.png';

function Home() {
  return (
    <div>
        <Navbar />
        <div className='row'>
        <div className='col-md-6'>
        <div className='header-img-container'><img className='header-image' src={ImgHeader} alt="Mobile View" /></div>
        </div>
        <div className='col-md-6'>
          <div className='features-container'>
            <h1 className='quotes'>Get Your Influencer <br/> Without Any Efforts</h1>
          </div>
          <div className="button-container">
            <button className="influencer-btn influencer-btn-want">I want an influencer</button>
            <button className="influencer-btn">I want to be an influencer</button>
        </div>
        </div>
      </div>

    </div>
  )
}

export default Home