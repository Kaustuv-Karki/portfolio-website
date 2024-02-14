import './styles.css'
import Project from '../../assets/project-images/project-1.png'
const ProjectCard = () => {
  return (
    <div className='projectcard__main'>
      <img className='projectcard__image' src={Project} alt='project' />
      <div className='projectcard__text'>
        <div className='projectcard__header'>
          <h2>Project Title</h2>
          <p>Github, Demo</p>
        </div>
        <p className='projectcard__stacks'>Project Description</p>
        <p className='projectcard__description'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet id itaque voluptate laboriosam, 
          tenetur inventore blanditiis iste. Asperiores id, fuga maiores obcaecati 
          doloremque perferendis ad illo unde deserunt odio omnis.
        </p>
      </div>
    </div>
  )
}

export default ProjectCard