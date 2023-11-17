import Project1 from "../../assets/project-images/project-1.png";
import ProjectCard from "./ProjectCard";

const ProjectPage = () => {
  return (
    <div className="main-project">
      <h1>Projects</h1>
      <ProjectCard
        name="Project 1"
        tags="React, CSS, HTML"
        github="This"
        liveSite="This"
        image={Project1}
        description="This is test description"
      />
    </div>
  );
};

export default ProjectPage;
