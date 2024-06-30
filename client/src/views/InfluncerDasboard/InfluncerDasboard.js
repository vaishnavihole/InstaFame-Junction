import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import profileImg from './profile.png';
import accountsImg from './account.png';
import PackageImg from './packages.png';
import dealImg from './deal.png';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import allowedRole from '../../utils/auth';
import Swal from 'sweetalert2';

function InfluncerDashboard() {
  useEffect(() => {
    const temp = sessionStorage.getItem('user');
    const user = temp ? JSON.parse(temp) : null;

    if (!allowedRole('influencer')) {
      Swal.fire({
        icon: 'error',
        title: 'Access Denied',
        text: 'You do not have permission to access this page.',
        confirmButtonText: 'Go to User Dashboard',
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = '/Userdashboard';
        }
      });
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="menu-container">
        <div className="menu-sub-container">
          <div className="menucard d-flex justify-content-around">
            <Link to='/myAccounts' className="menu-text">
              <div className="menucontainer">
                <img src={accountsImg} className="menuImg d-block mx-auto" />
                <p className="text-center menu-text">My Accounts</p>
              </div>
            </Link>
            <Link to='/myProfile' className="menu-text">
              <div className="menucontainer">
                <img src={profileImg} className="menuImg d-block mx-auto" />
                <p className="text-center">My Profile</p>
              </div>
            </Link>
          </div>

          <div className="menucard d-flex second-menucard justify-content-around">
            <Link to='/myPackages' className="menu-text">
              <div className="menucontainer">
                <img src={PackageImg} className="menuImg d-block mx-auto" />
                <p className="menu-text text-center">My Packages</p>
              </div>
            </Link>
            <Link to='/myDeals' className="menu-text">
              <div className="menucontainer">
                <img src={dealImg} className="menuImg d-block mx-auto" />
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

export default InfluncerDashboard;
