// src/Education.js
import React from "react";
import "./Education.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

// Education component displaying academic credentials with a graduation cap icon for symbolic representation.
function Education() {
  return (
    // Section for education details with consistent styling and layout as other sections.
    <section className="education p-4 bg-light">
      <h2>
        <FontAwesomeIcon icon={faGraduationCap} className="mr-2 section-icon" />
        Education
      </h2>
      <div className="school mb-4">
        <h3>
          Full Stack Web Development & Software Engineer HyperionDev Bootcamp
        </h3>
        <h3>Grade: NQF Level 5</h3>
        <p>
          <a
            href="https://www.hyperiondev.com/portfolio/MG22120005918/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View my portfolio link here
          </a>{" "}
          - I received an average grade of 100%.
        </p>
        <p className="education-dates">2023 - 2025</p>
        <p>
          Code Reviews: Engaged in peer code reviews, refining coding skills,
          and providing constructive feedback to fellow learners.
        </p>
        <p>
          Web Development Workshops: Organized and participated in workshops
          focusing on modern web development tools and techniques.
        </p>
        <p>Course Content & Projects:</p>
        <p>
          • Web Development: Mastery over HTML, SCSS, and JavaScript to build
          responsive, interactive web pages.
        </p>
        <p>
          • Replica Development: Creation of high-fidelity copies of
          industry-standard platforms, such as Netflix.
        </p>
        <p>
          • Software Engineering: Designed solutions like a food delivery
          system, emphasizing algorithmic efficiency and user interaction.
        </p>
        <p>
          • DevOps: Introduced to Docker, learned containerization techniques
          for scalable and portable application development.
        </p>
        <p>
          • Version Control: Adopted GitHub for project management, version
          control, and collaborative coding.
        </p>
      </div>
      <div className="school mb-4">
        <h3>King' Langley College, Watford</h3>
        <p className="education-dates">2014 - 2016</p>
        <p>Master Degree: 2 years Motor Vehicle Mechanics achieved</p>
        <p>• IMIAL Level 1 and Diploma in Light Vehicle Maintenance</p>
        <p>• IMIAL Level 2 and Diploma in Light Vehicle Maintenance</p>
      </div>
      <div className="school mb-4">
        <h3>Francis Combe Academy, Watford - GCSE</h3>
        <p className="education-dates">2008 - 2013</p>
        <p>8 GCSEs at Grades A-C including Maths and English</p>
      </div>
    </section>
  );
}

export default Education;
