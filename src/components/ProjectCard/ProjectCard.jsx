import "./styles.css";
import Project from "../../assets/project-images/project-1.png";
import { IoOpenOutline } from "react-icons/io5";
import Github from "../../../public/Images/Skills/github_white.png";
const ProjectCard = ({ project, imgUrl }) => {
  return (
    <div className="projectcard__main">
      <span className="topborder"></span>
      <span className="rightborder"></span>
      <span className="bottomborder"></span>
      <span className="leftborder"></span>
      <div className="projectcard__imagecontainer">
        <img className="projectcard__image" src={imgUrl} alt="project" />
      </div>
      <div className="projectcard__text">
        <div className="projectcard__header">
          <h2>{project?.title}</h2>
          <div className="projectcard__icons">
            <a href={project?.codeLink} target="_blank" rel="noreferrer">
              <img
                className="projectcard__iconimage"
                src={Github}
                alt="github"
              />
            </a>
            <a
              className="projectcard__iconinside"
              href={project?.projectLink}
              target="_blank"
              rel="noreferrer">
              <IoOpenOutline />
            </a>
          </div>
        </div>
        <p className="projectcard__stacks">
          {project?.tags.map((tag, index) => {
            return (
              <>
                <span key={index} className="projectcard__stack">
                  {tag}
                </span>
                {index < project.tags.length - 1 && ", "}
              </>
            );
          })}
        </p>
        <p className="projectcard__description">{project?.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
