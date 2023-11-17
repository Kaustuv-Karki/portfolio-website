import React from "react";
import "./styles.css";

const ProjectCard = ({ name, tags, github, liveSite, image, description }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={image} alt="" />
        <div className="sites">
          <h2>{github}</h2>
          <h2>{liveSite}</h2>
        </div>
      </div>
      <h1>{name}</h1>
      <h2>{tags}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ProjectCard;
