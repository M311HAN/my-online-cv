// src/Experience.js
import React from 'react';
import './Experience.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

// Experience component showing professional roles and project details, highlighted with an appropriate icon.
function Experience() {
  return (
        // Section for work experience with padding and a light background for visual consistency.
    <section className="experience p-4 bg-light">
      <h2><FontAwesomeIcon icon={faBriefcase} className="mr-2 section-icon" />Work Experience</h2>
      <div className="job mb-4">
        <h3>Completed a Full Stack Web & Software Engineer Bootcamp</h3>
        <p className="job-dates">Jan 2023 - 2024</p>
        <p>During my bootcamp, I worked on various real-world projects, collaborating with peers and mentors to develop full-stack applications using modern technologies. 
          This experience allowed me to apply my learning in a practical setting, enhancing my skills in software development, project management, and teamwork.</p>
        <p>Tasks & Projects:</p>
        <p>• Developed full-stack applications connected with MongoDB and Mongoose, implementing robust database solutions for dynamic web applications.</p>
        <p>• Developed a fully responsive personal website using HTML, SCSS, and JavaScript, featuring interactive elements for enhanced user engagement.</p>
        <p>• Designed and coded a replica of the Netflix landing page utilizing HTML and CSS, focusing on layout precision and design aesthetics.</p>
        <p>• Engineered a food delivery program in Java: Captured user details and preferences, located nearest driver from a text file based on load and location, and dynamically assigned deliveries.</p>
        <p>• Adopted Docker to containerize projects, ensuring global accessibility and consistent environments.</p>
        <p>• Utilized GitHub as a primary version control system, maintaining an organized repository of diverse projects.</p>
     </div>
      <div className="job mb-4">
        <h3>Sky & Star Limited Director</h3>
        <p className="job-dates">Jan 2017 - March 2024</p>
        <p>As the Director and Manager of a restaurant, I was entrusted with a wide range of responsibilities, 
          including, but not limited to, managing financial records, budgeting, and financial analysis. 
          I diligently took care of accounting duties to ensure financial health and sustainability. 
          My tasks also included ordering and managing stock, keeping track of inventory to avoid wastage and ensure availability. 
          I placed high importance on customer service and efficiently handled customer inquiries, ensuring their experiences were 
          pleasant and satisfactory. My role also encompassed staff management, operational efficiency, and strategic planning, 
          all pivotal in successfully running the restaurant. My combined experience in these areas honed my organizational skills, 
          financial acumen, and customer service expertise.</p>
      </div>
      <div className="job mb-4">
        <h3>Grow real estate agency in Dalaman (Turkey)</h3>
        <p className="job-dates">Mar 2020 - Dec 2023</p>
        <p>As a part of a global real estate agency, my role was both diverse and demanding. I captured high-quality photos and used drone 
          technology for aerial footage of properties, which provided a unique and comprehensive view of the buildings for potential buyers. 
          In addition to this, I made use of various social media platforms to showcase and market these properties to a wider audience. 
          My responsibilities included sourcing new builds and listing them on our portfolio, enhancing the variety of options available to clients. 
          I dealt with international clientele from diverse cultural backgrounds and my ability to speak three languages facilitated effective 
          communication and understanding. One of my key responsibilities was keeping a close watch on the real estate market and house prices, 
          evaluating what's valuable and what's not, with a particular focus on the impact of the property's location. This involved assessing market 
          trends, analyzing property values in different neighborhoods, and understanding the unique selling points of each area. The combination of 
          photography, technology, and social media skills, along with my language abilities and cultural sensitivity, proved crucial in effectively 
          showcasing properties and meeting the needs of our global customer base.</p>
      </div>
    </section>
  );
}

export default Experience;


