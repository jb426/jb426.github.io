import React from 'react';
import './App.css';
// import Beams from './Beams';

const App = () => {
  return (
    // <div className="mainContainer">
    //   <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
    //     <Beams
    //       beamWidth={2}
    //       beamHeight={30}
    //       beamNumber={20}
    //       lightColor="#ffffff"
    //       speed={2}
    //       noiseIntensity={1.75}
    //       scale={0.2}
    //       rotation={30}
    //     />
    //   </div>
    //   <section className="headNav">
    //     <h1>Hi I'm Joey</h1>
    //   </section>
    //   <section id="about"></section>
    //   <section id="experience"></section>
    //   <section id="projects"></section>
    //   <section id="footer"></section>
    // </div>

    <div className="mainContainer">
      <section className="headNav">
        <div id="title">
          <h2>Joseph Brucie</h2>
          <h3>Front End Developer</h3>
        </div>
        <div id="nav">
          <button class="navBtn">Resume</button>
          <button class="navBtn">LinkedIn</button>
          <button class="navBtn">GitHub</button>
        </div>
      </section>
    </div>
  );
}

export default App;
