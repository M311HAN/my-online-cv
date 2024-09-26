// src/components/Header.js
import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Import LinkedIn icon
import { faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Import solid icons
// Importing a profile picture from local assets, allowing easy updates and management of personal branding.
import profilePicture from '../assets/mel.JPG'; 

// Header component displaying personal and contact information in a centered layout.
function Header() {
  return (
        // Main header container with light background and centered text.
    <header className="header text-center p-4 bg-light">
      <img src={profilePicture} alt="Your Name" className="profile-picture rounded-circle mb-3" />
      <h1>Melihhan Gok</h1>
      <h2>Full Stack Developer</h2>
      <p><FontAwesomeIcon icon={faMapMarkerAlt} className="header-icon" /> <span className="location-text">London, United Kingdom</span></p>
      <p className="header-email"><FontAwesomeIcon icon={faEnvelope} className="header-icon" /> <a href="mailto:melihhan@hotmail.co.uk">melihhan@hotmail.co.uk</a></p>
      <div className="social-icons d-flex justify-content-center">
        <a href="https://github.com/M311HAN" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="social-icon mx-2" />
        </a>
        <a href="https://www.linkedin.com/in/melihhan/" target="_blank" rel="noopener noreferrer"> 
          <FontAwesomeIcon icon={faLinkedin} className="social-icon mx-2" /> 
        </a>
      </div>
    </header>
  );
}

export default Header;






