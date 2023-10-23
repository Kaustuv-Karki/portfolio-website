import React from 'react'
import './styles.css'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer-container'>
        <h1 className='email'>karkikaustuv@gmail.com</h1>
        <div className='social-icons'>
          <BsLinkedin/>
          <AiFillGithub/>
        </div>
    </div>
  )
}

export default Footer