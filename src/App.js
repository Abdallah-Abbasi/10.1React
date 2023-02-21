import React from 'react';
import { useRef } from "react";
const UseRefPlayer = () => {
  const videoref = useRef()
  const handlePlay = () => {
    videoref.current.play()
  };
  const handlePause = () => {
    videoref.current.pause()

  };
  return (  
    <div className='grid-btn'>
      <video width="300" height="300" ref={videoref}>
        <source src='https://www.w3schools.com/html/mov_bbb.mp4'>
        </source>
      </video>
      <button className='btn-play' onClick={handlePlay}>Play</button>
      <button className='btn-pause' onClick={handlePause}>Pause</button>
    </div>
    
  )
}
export default UseRefPlayer