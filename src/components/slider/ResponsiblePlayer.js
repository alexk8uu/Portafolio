import React from 'react'
import ReactPlayer from 'react-player'
import './ResponsiblePlayer.css'


const ResponsiblePlayer = ({url}) => {
    
    console.log("esta es la url", url)
    return (
    <div className='player-wrapper'>
        <ReactPlayer
        className='react-player'
        url={url}
        controls
        width="100%"
        height="100%"
        />
    </div>
  )
}

export default ResponsiblePlayer