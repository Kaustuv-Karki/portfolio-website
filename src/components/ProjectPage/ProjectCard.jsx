import "./styles.css";
import { MdArrowOutward } from "react-icons/md";
import { FiGithub } from "react-icons/fi";

const ProjectCard = ({ name, tags, github, liveSite, image, description }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={image} alt="" />
      </div>
      <div className="project-content">
        <h1>{name}</h1>
        <p className="description">{description}</p>
        <div className="all-tags">
          {tags.map((tag, index) => (
            <p className="tags" key={index}>
              {tag}
            </p>
          ))}
        </div>
        <div className="sites">
          <a href={github} target="_blank" rel="noreferrer">
            <div className="icons">
              <p>Github</p>
              <FiGithub />
            </div>
          </a>
          <a href="">
            <div className="icons">
              <p>Live Site</p>
              <MdArrowOutward />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
