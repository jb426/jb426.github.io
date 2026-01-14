import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="mainContainer">
      <section className="headNav">
        <div id="title">
          <h2>Joseph Brucie</h2>
          <h3>Front End Developer</h3>
        </div>
        <div id="nav">
          <a href="/brucie_resume_2026.pdf" target="_blank" class="mainNavBtn">Resume</a>
          <a href="https://www.linkedin.com/in/joebrucie/" target="_blank" class="navBtn">LinkedIn</a>
          <button class="navBtn">GitHub</button>
        </div>
      </section>
    </div>
  );
}

export default App;
