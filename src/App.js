// src/App.js
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';
import './App.css';

// Main App component which serves as the root of the webpage, incorporating all major components.
function App() {
      // Main application container with a standard class for styling purposes.
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Header />
          </div>
          <div className="col-md-9">
            <About />
            <Experience />
            <Skills />
            <Education />
          </div>
        </div>
      </div>
      <Footer /> 
    </div>
  );
}

export default App;


