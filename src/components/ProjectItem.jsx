import React from "react";

const ProjectItem = ({ projectImg, title, description, technologies }) => {
  return (
    <>
      <style>
        {`
      // .projectContainer {
      //   background-color: #ffffff;
      //   border-radius: 1rem;
      //   padding: 1rem;
      //   max-width: 50rem;
      //   width: 100%;
      //   overflow: hidden;
      //   display: flex;
      // }
      // .imageContainer {
      
      // }
      // .projectImg {
      //   border-radius: 1rem;
      //   scale: 75%;
      // }

    `}
      </style>
      <div className="projectContainer">
        <div className="imageContainer">
          <img src={projectImg} alt="Project Image" className="projectImg" />
        </div>
        <div className="cardInfo">
          <h2>{title}</h2>
          <p>{description}</p>
          <ul className="tech-tags">
            {technologies.map((tech) => (
              <li key={tech} className="tech-tag">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProjectItem;
