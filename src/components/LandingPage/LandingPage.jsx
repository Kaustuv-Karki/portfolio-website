import Moon from '../../assets/Moon.png'
import Glow from '../../assets/GlowFinal.png'
import Cloud from '../../assets/Union.png'
import './styles.css'
import TwinklingStars from '../Stars/TwinklingStars'

const LandingPage = () => {
  return (
    <div className='container'>
      <TwinklingStars/>
      <div className="text">
      <h1 className='text__h1'>Kaustuv Karki</h1>
      <p className='text__p'>SOFTWARE DEVELOPER / DESIGNER</p>
      </div>
    <div className='main-container'>
        <img src={Moon} className='moon'/>
        <img  src={Glow} className='glow'/>
    </div>
    <img src={Cloud} className='cloud_1'/>
    </div>
  )
}

export default LandingPage