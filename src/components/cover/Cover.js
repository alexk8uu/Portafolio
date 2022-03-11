import React from 'react'
import coverVideo from '../../utils/coverVideo.mp4'
import "./Cover.css"

const Cover = () => {
  return (
    <div className='cover-container'>
       <video className='video' src={coverVideo} autoPlay loop muted />
       <h1>Fredy Alejandro Carrizo</h1>
       <p>Full Stack Development{/*  | Front end developer | JavaScript | ReactJS | Redux */}</p>
    </div>
  )
}

export default Cover