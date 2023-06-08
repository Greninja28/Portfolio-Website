import React from 'react'
import './Footer.css'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="">
        <Typography variant='h5'>About Me</Typography>
        <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas laborum excepturi ea ipsum possimus assumenda.</Typography>

        <Link to="/contact" className='footerContactBtn'>
          <Typography>Contact Me</Typography>
        </Link>
      </div>

      <div>
        <Typography variant='h5'>Social Media</Typography>
        <a href="https://github.com/Greninja28" target='blank'><BsGithub /></a>
        <a href="https://www.linkedin.com/in/sahej-jain-175aa7217/" target='blank'><BsLinkedin /></a>
      </div>
    </div>
  )
}

export default Footer