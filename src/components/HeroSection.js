import React from 'react'
import '../app.css'
import { Button } from './Button'
import './HeroSection.css'
import BackGroundVideo from './video/video-1.mp4'
function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={BackGroundVideo} autoPlay loop muted />
      <h1>Next-Gen Movie Streaming</h1>
      <p>Starts Here!</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Get Started
        </Button>
      </div>
    </div>
  )
}

export default HeroSection
