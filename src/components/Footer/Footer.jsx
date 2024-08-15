import React from 'react';
import './Footer.css'; // Import the CSS file for Footer styles

const Footer = () => {
  return (
    <footer id="Footer" className="footer">
      <div className="footer-content">
        <p>Contact Me</p>
        <div className="social-links">
          <a href="https://www.facebook.com/sajalsahu06" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="https://www.linkedin.com/in/sajal-sahu-3545a7251?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BT8sTDjpcQOOsHoO4gBmylw%3D%3D" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="https://www.github.com/sajalsahu06" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
