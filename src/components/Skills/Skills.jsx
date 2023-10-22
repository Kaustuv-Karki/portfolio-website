import './styles.css'

const Skills = () => {
  return (
    <div className='skill-container'>
      <span className='skill-title'>
        <h1 className='skill-h1'>Skills</h1>
        {/* <p>The things that I excel in</p> */}
      </span>
      <div className="skill-main">
      <div className="skill-frontend">
        <h2 className='skill-subtitle'>FrontEnd</h2>
        <div className='skill-subcontainer'>
            <div className="skill-button">HTML</div>
            <div className="skill-button">CSS</div>
            <div className="skill-button">JS</div>
            <div className="skill-button">REACT</div>
            <div className="skill-button">Tailwind</div>
        </div>
      </div>
      <div className="skill-frontend">
        <h2 className='skill-subtitle'>Design</h2>
        <div className='skill-subcontainer'>
            <div className="skill-button">Figma</div>
            <div className="skill-button">Adobe Illustrator</div>
        </div>
      </div>
      <div className="skill-frontend">
        <h2 className='skill-subtitle'>Other Tools</h2>
        <div className='skill-subcontainer'>
            <div className="skill-button">Git</div>
            <div className="skill-button">Github</div>
            <div className="skill-button">VS Code</div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Skills