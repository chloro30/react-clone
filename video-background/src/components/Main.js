import React from 'react'
import videoBg from '../assets/videoBg.mp4'

function Main() {
  return (
    <div className='main'>
        <div className='overlay'></div>
        <video src={videoBg} autoPlay loop muted/>
        <div className='content'>
            <h1>Welcome</h1>
            <p>배경에 video 사용하기!</p>
        </div>
    </div>
  )
}

export default Main