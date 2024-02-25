import ProjectCard from "../ProjectCard/ProjectCard";
import "./styles.css";
import sanityClient from "../../client.js";
import imageUrlBuilder from "@sanity/image-url";
import { useEffect, useState } from "react";
const Projects = () => {
  const [projects, setProjects] = useState([]);

  const builder = imageUrlBuilder(sanityClient);
  function urlFor(source) {
    return builder.image(source);
  }

  useEffect(() => {
    const query = '*[_type == "projects" ]';
    sanityClient.fetch(query).then((data) => {
      setProjects(data);
    });
  }, []);

  // console.log("Projcets", projects[0]);

  return (
    <div className="project__main">
      <h1 className="project__title bouncy">Projects</h1>
      <div className="project__list">
        {projects.map((project) => {
          return (
            <ProjectCard
              key={project._id}
              project={project}
              imgUrl={urlFor(project.imgUrl).url()}
            />
          );
        })}
        {/* <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard /> */}
      </div>
    </div>
  );
};

export default Projects;
