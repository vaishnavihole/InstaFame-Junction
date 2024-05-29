import react, { useState, useEffect} from "react";
import './UserDashboard.css';
import { Link } from "react-router-dom";
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import profileImg from './profile.png';
import influencerImg from './influencer.png';
import DealImg from './deal.png';


 function UserDashboard() {
  return (
    <>
      <Navbar />
    <div className="menu-container">

      <div class="menu-sub-container">
      {/* <img src={jodoLogo} className="logoCss"/> */}
            <div className="menucard d-flex justify-content-around">
              
              <Link to='/myProfile' className="menu-text">
                <div  className="menucontainer">
                <img src={profileImg } className="menuImg d-block mx-auto"/>
                    <p className=" text-center menu-text">My Profile</p>
                </div>
              </Link>
              <Link to='/influncerCards' className="menu-text">
                <div className="menucontainer">
                <img src={influencerImg} className="menuImg d-block mx-auto"/>
                    <p className="text-center">Influncer </p>
                </div>
              </Link>
            </div>
        

          <div className="menucard d-flex second-menucard justify-content-around">
                <Link to='/myDeals' className="menu-text">
                <div className="menucontainer">
                    <img src={DealImg} className="menuImg d-block mx-auto"/>
                    <p className="menu-text text-center" >My Deal</p>
                </div>
                </Link>
                <Link to='/myDeals' className="menu-text">
                <div  className="menucontainer">
                    {/* <img src={dealImg} className="menuImg d-block mx-auto"/> */}
                    <p className="menu-text text-center">My Deal</p>
                </div>
                </Link>
            </div>
          </div>
    </div>
    <Footer />
    </>
  );
}

export default UserDashboard;
