import './styles.css'
import {motion} from 'framer-motion'

const Opening = () => {
    const scaled_value = 200
    const durr = 3

  return (
    <div className='open-container'>
        <motion.div className='circle-1'
        initial={{ scale: 1 }}
        animate={{ scale: scaled_value }}
        transition={{ duration: durr , ease: [0.16, 1, 0.3, 1]}}
        >
        </motion.div>
        <motion.div className='circle-2'
        initial={{ scale: 1 }}
        animate={{ scale: scaled_value }}
        transition={{ duration: durr}}>
        </motion.div>
        <motion.div className='circle-3'        
        initial={{ scale: 1 }}
        animate={{ scale: scaled_value }}
        transition={{ duration: durr }}></motion.div>
        <motion.div className='circle-4'         
        initial={{ scale: 1 }}
        animate={{ scale: scaled_value }}
        transition={{ duration: durr , ease: [0.16, 0.8, 0.3, 1]}}></motion.div>
        <motion.div className='circle-5'         
        initial={{ scale: 1 }}
        animate={{ scale: scaled_value }}
        transition={{ duration: durr }}></motion.div>
    </div>
  )
}

export default Opening