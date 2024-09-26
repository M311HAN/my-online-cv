// src/Footer.js
import React from 'react';
import './Footer.css'; // Create this CSS file for custom styling

// Footer component with a dynamic copyright year and personal rights statement.
function Footer() {
  return (
        // Footer section with centered text and a light background.
    <footer className="footer text-center p-4 bg-light">
      <p>&copy; {new Date().getFullYear()} Melihhan Gok. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
