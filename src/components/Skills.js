// src/components/Skills.js
import React from 'react';
import './Skills.css';
// Importing FontAwesomeIcon for icons and faCode for a specific icon used to represent coding skills visually.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
// Skills component that displays various technical skills grouped by category using React functional component syntax.
function Skills() {
  return (
    // Section wrapper for skills with padding and a white background, enhancing the visual structure on the page.
    <section className="skills p-4 bg-white">
      <h2><FontAwesomeIcon icon={faCode} className="mr-2 section-icon" />Skills</h2>
      <div className="skill-category">
        <h3>Programming Languages:</h3>
        <div className="skill-list d-flex flex-wrap">
          <span className="skill m-1">JavaScript</span>
          <span className="skill m-1">Java</span>
          <span className="skill m-1">PHP</span>
          <span className="skill m-1">Python</span>
          <span className="skill m-1">SCSS</span>
          <span className="skill m-1">HTML</span>
          <span className="skill m-1">CSS</span>
        </div>
      </div>
      <div className="skill-category">
        <h3>Frontend Development:</h3>
        <div className="skill-list d-flex flex-wrap">
          <span className="skill m-1">React</span>
          <span className="skill m-1">Redux</span>
          <span className="skill m-1">HTML5</span>
          <span className="skill m-1">CSS3</span>
          <span className="skill m-1">SCSS</span>
          <span className="skill m-1">Bootstrap</span>
          <span className="skill m-1">JavaScript (ES6+)</span>
        </div>
      </div>
      <div className="skill-category">
        <h3>Backend Development:</h3>
        <div className="skill-list d-flex flex-wrap">
          <span className="skill m-1">Node.js</span>
          <span className="skill m-1">Express.js</span>
          <span className="skill m-1">PHP</span>
          <span className="skill m-1">Laravel</span>
          <span className="skill m-1">Java</span>
          <span className="skill m-1">Spring Boot</span>
          <span className="skill m-1">MongoDB</span>
          <span className="skill m-1">MySQL</span>
          <span className="skill m-1">SQL Server</span>
        </div>
      </div>
      <div className="skill-category">
        <h3>Testing and Deployment:</h3>
        <div className="skill-list d-flex flex-wrap">
          <span className="skill m-1">Jest</span>
          <span className="skill m-1">Mocha</span>
          <span className="skill m-1">PHPUnit</span>
          <span className="skill m-1">Docker</span>
          <span className="skill m-1">GitHub Actions</span>
        </div>
      </div>
      <div className="skill-category">
        <h3>Version Control and Development Tools:</h3>
        <div className="skill-list d-flex flex-wrap">
          <span className="skill m-1">Git</span>
          <span className="skill m-1">GitHub</span>
          <span className="skill m-1">Heroku</span>
          <span className="skill m-1">Netlify</span>
        </div>
      </div>
    </section>
  );
}

export default Skills;


