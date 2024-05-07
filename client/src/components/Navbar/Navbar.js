import React from 'react';
import './Navbar.css';
// import Logo from './livin-icon.png';
// import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-red">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        {/* <div className="logo-container">
                            <img src={Logo} alt="Logo" className="logo" />
                        </div> */}
                        <span className="brand-name">InstaFame Junction</span>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link black-text black-text  menu-name" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link black-text black-text   menu-name" href="/contact">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link black-text black-text   menu-name" href="/contact">Contact Us</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
