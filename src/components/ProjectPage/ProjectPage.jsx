import './styles.css'
import Project1 from '../../assets/project-images/project-1.png'

const ProjectPage = () => {
  return (
    <div className='main-project'>
        <h1 className='main-title'>Projects</h1>
        <div className="centered">
        <div className='project-container'>
            <div className='project-odd'>
                <img src={Project1}/>
                <div className='odd-text'>
                    <h1>Project title</h1>
                    <div>
                        Project Stacks
                    </div>
                    <p>Project description</p>
                </div>
            </div>
            <div className='project-even'>
                <div>
                    <h1>Project title</h1>
                    <div>
                        Project Stacks
                    </div>
                    <p>Project description</p>
                </div>
                <img src={Project1}/>
            </div>
            <div className='project-odd'>
                <img src={Project1}/>
                <div className='odd-text'>
                    <h1>Project title</h1>
                    <div>
                        Project Stacks
                    </div>
                    <p>Project description</p>
                </div>
            </div>
            <div className='project-even'>
                <div>
                    <h1>Project title</h1>
                    <div>
                        Project Stacks
                    </div>
                    <p>Project description</p>
                </div>
                <img src={Project1}/>
            </div>
        </div>
        </div>
    </div>
  )
}

export default ProjectPage