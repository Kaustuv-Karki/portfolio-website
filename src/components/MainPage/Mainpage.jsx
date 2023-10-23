import Skills from '../Skills/skills'
import './styles.css'
import ProjectPage from '../ProjectPage/ProjectPage'
import Footer from '../Footer/Footer'

const Mainpage = () => {
  return (
    <div className='mainpage-container'>
        <Skills/>
        <ProjectPage/>
        <Footer/>
    </div>
  )
}

export default Mainpage