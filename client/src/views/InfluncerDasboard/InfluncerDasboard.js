import react, { useState, useEffect} from "react";
import './InfluncerDasboard.css';
import { Link } from "react-router-dom";
import profileImg from './profile.png';
import accountsImg from './account.png';
import PackageImg from './packages.png';
import dealImg from './deal.png';


 function InfluncerDashboard() {
  return (
    <>
    <div className="menu-container">

      <div class="menu-sub-container">
      {/* <img src={jodoLogo} className="logoCss"/> */}
            <div className="menucard d-flex justify-content-around">
              
              <Link to='/showalldriver' className="menu-text">
                <div  className="menucontainer">
                    <img src={accountsImg} className="menuImg d-block mx-auto"/>
                    <p className=" text-center menu-text">My Accounts</p>
                </div>
              </Link>
              <Link to='/showalluser' className="menu-text">
                <div className="menucontainer">
                <img src={profileImg} className="menuImg d-block mx-auto"/>
                    <p className="text-center">My Profile</p>
                </div>
              </Link>
            </div>
        

          <div className="menucard d-flex second-menucard justify-content-around">
                <Link to='/showalldriver' className="menu-text">
                <div className="menucontainer">
                    <img src={PackageImg} className="menuImg d-block mx-auto"/>
                    <p className="menu-text text-center" >My Packages</p>
                </div>
                </Link>
                <Link to='/todaysRevenue' className="menu-text">
                <div  className="menucontainer">
                    <img src={dealImg} className="menuImg d-block mx-auto"/>
                    <p className="menu-text text-center">My Deal</p>
                </div>
                </Link>
            </div>
          </div>
    </div>
    </>
  );
}

export default InfluncerDashboard;
