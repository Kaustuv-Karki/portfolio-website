import Moon from '../../assets/Moon.png'
import Glow from '../../assets/GlowFinal.png'
import Cloud from '../../assets/Union.png'
import './styles.css'
import TwinklingStars from '../Stars/TwinklingStars'
import { useEffect, useState } from 'react'
import Opening from '../Opening/Opening'
import {motion} from 'framer-motion'
// import {MdArrowDownward} from 'react-icons/md'
import { FaArrowDown } from "react-icons/fa";

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
      <motion.div 
        initial={{x: "-100vw"}}
        animate={{x:0}}
        transition={{ 
        duration: 2,
       ease: [0.16, 1, 0.3, 1],
       delay:0.7
      }}
      className="text">
      <h1 className='text__h1'>Kaustuv Karki</h1>
      <p className='text__p'>SOFTWARE DEVELOPER / DESIGNER</p>
      </motion.div>
    <div className='main-container'>
        <motion.img 
        initial={{x: "100vw"}}
        animate={{x:0}}
        transition={{ 
        duration: 1.8,
       ease: [0.16, 1, 0.3, 1]}} 
       src={Moon} className='moon'/>
        <motion.img  
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{ duration: 2.5, delay: 0.4, ease: [0.16, 1, 0.3, 1]}} 
        src={Glow} className='glow'/>
    </div>
    <motion.div  style={{"z-index":"10"}}       
        initial={{x: "100vw"}}
        animate={{x:0}}
        transition={{ 
        duration: 3,
        ease: [0.16, 1, 0.3, 1]}} >
    <motion.img         
      initial={{ x: -80, y: -10 }} // Initial position (move 100 pixels to the left)
      animate={{ x: 80 , y : 10}} // Final position (move 100 pixels to the right)
      transition={{ 
        duration: 6,
        repeat: Infinity,
        repeatType: 'mirror'
      }}
      src={Cloud} className='cloud_1'/>
      </motion.div>
      <FaArrowDown className='scroll' />
    </div>
  }
    </>
  )
}

export default LandingPage