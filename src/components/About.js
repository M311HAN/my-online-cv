// src/About.js
import React from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

// About component that provides a personal introduction and outlines professional focus and skills.
function About() {
  return (
        // About section with padding and a white background, consistent with the design of other components.
    <section className="about p-4 bg-white">
      <h2><FontAwesomeIcon icon={faUser} className="mr-2 section-icon" />About Me</h2>
      <p>I'm a software engineer based in London, dedicated to transforming creative 
        ideas into robust digital solutions. My journey in web development has equipped 
        me with a solid foundation in both frontend and backend technologies, 
        enabling me to build scalable and efficient applications.</p>
        <p>Currently advancing my skills in Full Stack Web Development & Software 
          Engineering. Eager to contribute to open source projects and collaborate on 
          innovative software solutions. Passionate about exploring new technologies, 
          especially in the fields of cloud services and machine learning.</p>
    </section>
  );
}

export default About;
