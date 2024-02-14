import ProjectCard from '../ProjectCard/ProjectCard';
import './styles.css'
const Projects = () => {
  return (
    <div className="project__main">
      <h1 className="project__title">Projects</h1>
      <div className='project__list'>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
      </div>
    </div>
  );
};

export default Projects;
