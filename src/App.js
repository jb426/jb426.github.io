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
          <a
            href="/brucie_resume_2026.pdf"
            target="_blank"
            className="mainNavBtn"
          >
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
          <img
            src="profile_pic.jpg"
            className="profilePic"
            alt="Profile Picture"
          ></img>
          <p>
            I'm a passionate front-end engineer with a strong interest in UI/UX,
            web, and interactive design & development. With over four years of
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
      <section className="experience">
        <h1>Experience</h1>
        <div className="experienceContent">
          <h4>Jul 2025 - Present</h4>
          <div className="experienceTitle">
            <img
              src="marquette_logo.png"
              className="experienceLogo"
              alt="Marquette Logo"
            ></img>
            <h5>
              Marquette University | <em>Web Application Specialist</em>
            </h5>
          </div>
          <p>
            Web and digital platform specialist managing the Law School's Drupal
            and WordPress sites and related applications. Oversee performance
            and user access while designing and coding responsive email
            campaigns, event materials, and promotional banners. Troubleshoot
            complex web issues and collaborate with faculty, staff, and vendors
            to enhance user experience, integrate systems, and implement process
            improvements that advance the school's digital strategy.
          </p>
        </div>
        <div className="experienceContent">
          <h4>Sept 2024 - Apr 2025</h4>
          <div className="experienceTitle">
            <img
              src="ag_logo.png"
              className="experienceLogo"
              alt="American Greetings Logo"
            ></img>
            <h5>
              American Greetings | <em>Software Engineer 1</em>
            </h5>
          </div>
          <p>
            Designed and developed premium interactive E-Card products using
            modern front-end technologies (Vue.js, JavaScript, Pixi.js,
            HTML/CSS, Adobe Creative Suite, Figma), while streamlining
            workflows, improving accessibility, mentoring interns, and
            collaborating across QA and product teams to enhance performance and
            user engagement.
          </p>
        </div>
        <div className="experienceContent">
          <h4>Sept 2022 - Apr 2024</h4>
          <h5>
            American Greetings | <em>Associate Software Engineer</em>
          </h5>
          <p>
            Supported the design and development of interactive E-Card products
            through asset updates, animation adjustments, and code optimization
            to improve performance. Managed Bitbucket repositories, developed
            templates to streamline future projects, and collaborated with QA
            teams to identify and resolve product defects. Led project with
            intern to create a premium E-Card using Pixi.js, GSAP, Adobe
            Animate, and CSS, while assisting in the intern hiring process and
            providing ongoing mentorship throughout development.
          </p>
        </div>
        <div className="experienceContent">
          <h4>Jan 2022 - Sept 2022</h4>
          <h5>
            American Greetings | <em>Interactive Developer Intern</em>
          </h5>
          <p>
            Developed interactive E-Card products and web applications using
            Figma, JavaScript, Pixi.js, HTML, and CSS to deliver engaging
            digital experiences. Improved accessibility for people with
            disabilities by restructuring code across 100+ E-Cards as part of a
            large-scale initiative focused on meeting modern web standards and
            enhancing usability.
          </p>
        </div>
      </section>
    </div>
  );
};

export default App;
