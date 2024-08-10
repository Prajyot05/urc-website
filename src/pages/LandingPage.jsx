import React from 'react'
import Navbar from '../components/Navbar'
import URCTitle from '../components/URCTitle'
import URCSubtitle from '../components/URCSubtitle'

function LandingPage() {
  return (
    <div className='landing-page-container w-full relative overflow-hidden'>
      <video className='absolute min-w-full top-0 left-0 obj-cover object-center z-0' autoPlay loop muted src="/assets/landing_video.mp4"></video>
      <div className="overlay absolute top-0 left-0 w-full h-screen bg-black opacity-80"></div>
      <div className='landing-page relative'>
        {/* <video className='absolute top-0 left-0 bg-cover z-0' autoPlay loop muted src="/assets/landing_video.mp4"></video>
        <div className="overlay absolute top-0 left-0 w-full h-full bg-black opacity-50"></div> */}
        <Navbar />
        <URCTitle />
        <URCSubtitle />
      </div>
    </div>
  )
}

export default LandingPage