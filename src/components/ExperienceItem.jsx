import React from "react";

const ExperienceItem = ({ date, company, title, description }) => {
  return (
    <div className="experienceContent">
      <h4>{date}</h4>
      <div className="experienceTitle">
        <h5>
          {company} | <em>{title}</em>
        </h5>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default ExperienceItem;
