import React from 'react'
import './YoutubeCard.css'
import { Typography } from '@mui/material'

const YoutubeCard = ({
  url = "https://youtube.com",
  title = "Sahej Jain",
  image
}) => {
  return (
    <div className='youtubeCard'>
      <a href={url} target='blank'>
        <img src={image} alt="Video" />
        <Typography>{title}</Typography>
      </a>
    </div>
  )
}

export default YoutubeCard