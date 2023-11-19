import Project1 from "../../assets/project-images/project-1.png";
import ProjectCard from "./ProjectCard";

const ProjectPage = () => {
  return (
    <div className="main-project">
      <h1>Projects</h1>
      <div className="projects">
        <ProjectCard
          name="Project 1"
          tags={["React", "CSS", "HTML"]}
          github="https://github.com"
          liveSite="This"
          image={Project1}
          description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ProjectCard
          name="Project 1"
          tags={["React", "CSS", "HTML"]}
          github="https://github.com"
          liveSite="This"
          image={Project1}
          description="This is test description"
        />
      </div>
    </div>
  );
};

export default ProjectPage;
