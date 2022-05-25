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
        
        />
    </div>
  )
}

export default ResponsiblePlayer