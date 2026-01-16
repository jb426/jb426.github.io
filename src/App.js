import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="mainContainer">
      <section className="headNav">
        <div id="title">
          <h2>Joseph Brucie</h2>
          <h3>Front End Developer</h3>
        </div>
        <div id="nav">
          <a href="/brucie_resume_2026.pdf" target="_blank" class="mainNavBtn">
            Resume
          </a>
          <a
            href="https://www.linkedin.com/in/joebrucie/"
            target="_blank"
            class="navBtn"
          >
            LinkedIn
          </a>
          <button className="navBtn">GitHub</button>
        </div>
      </section>
      <section className="intro">
        <h1>Hi, I'm Joey</h1>
        <div className="introBio">
          <img src="profile_pic.jpg" alt="Profile Picture"></img>
          <p>
            I'm a passionate front-end engineer with a strong interest in UI/UX,
            web, and interactive design & development. With over three years of
            professional experience, I've specialized in building intuitive,
            human-centered, and accessible digital products.
            <br />
            <br />I am currently a Web Application Specialist at Marquette
            University. I combine front-end development with user centered
            design to improve accessibility, usability, and content workflows
            through our Drupal based platform and Figma. I collaborate closely
            with faculty and staff to ensure the web experience supports the Law
            Schoo's academic initiatives and aligns with the university's
            strategic mission.
            <br />
            <br />
            Outside of work I am usually in the gym working on my fitness goals
            and cheering on my favorite sports teams — go Yankees, go Bills!
            <br />
            <br /> I am pursuing my career goals of working in UI/UX design &
            development and I'm open to relocation opportunities.
          </p>
        </div>
      </section>
    </div>
  );
};

export default App;
