import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <nav className="navbar">
      <a className="navbar-brand" href="/">DentalHifi</a>
      
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-items">
          <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/services">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/blog">Blog</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact-us">Contact Us</a>
          </li>
          <li className="nav-item">
            <button type="button" className="btn btn-link nav-link">
              <img src="https://static.vecteezy.com/system/resources/thumbnails/007/033/146/small/profile-icon-login-head-icon-vector.jpg" alt="Sign In" width="49" height="51" />
              Sign In
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
