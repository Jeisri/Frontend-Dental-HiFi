import React from 'react';
import './NewsLetter.css'; 

function App() {
  return (
    <div className="background">
      <div className="container">
        <div className="header">
          <h1>Book your visit online</h1>
          <p>Lorem ipsum dolor sit amet consectetur. Egestas augue est praesent arcu. Ut hac nulla venenatis ultricies mi. Velit eu</p>
          <button className="book-button">BOOK ONLINE</button>
        </div>
        
        <div className="content">
          <div className="newsletter">
            <h2>Subscribe to our Newsletter</h2>
            <p>Lorem ipsum dolor sit amet consectetur. Egestas augue est praesent arcu. Ut hac nulla venenatis ultricies mi. Velit eu</p>
            <div className="email-input">
              <input type="email" placeholder="Enter email address" />
              <button className="subscribe-button">Subscribe</button>
            </div>
          </div>
          
          <div className="app-download">
		  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD4KsYD1CZ3XDGUcxkGFR90tUQh39nzawNxQ&usqp=CAU" alt="My First Dental Visit" className="side-image" />
            <h2>Download our App</h2>
            <p>Lorem ipsum dolor sit amet consectetur. Egestas augue est praesent arcu. Ut hac nulla venenatis ultricies mi. Velit eu</p>
            <div className="app-stores">
              <img src="https://help.opportunitynetwork.com/hs-fs/hubfs/apple.png?width=400&name=apple.png" alt="Download on the App Store" className="store-icon" />
              <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Download on the Google Play" className="store-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;