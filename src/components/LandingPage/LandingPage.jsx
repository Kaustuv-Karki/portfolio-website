import Moon from '../../assets/Moon.png'
import Glow from '../../assets/GlowFinal.png'
import Cloud from '../../assets/Union.png'
import './styles.css'
import TwinklingStars from '../Stars/TwinklingStars'
import { useEffect, useState } from 'react'
import Opening from '../Opening/Opening'
import {motion} from 'framer-motion'

const LandingPage = () => {
  const [showOpening, setShowOpening] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOpening(false);
    }, 900);
    return () => clearTimeout(timer);
  },[])

  console.log(showOpening)

  return (
    <>
    {showOpening ? <Opening/> :
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
    <motion.img         
      initial={{ x: -80, y: -10 }} // Initial position (move 100 pixels to the left)
      animate={{ x: 80 , y : 10}} // Final position (move 100 pixels to the right)
      transition={{ 
        duration: 10,
        repeat: Infinity,
        repeatType: 'mirror'
      }}
      src={Cloud} className='cloud_1'/>
    </div>
  }
    </>
  )
}

export default LandingPage