import React from 'react'
import Navbar from '../components/Navbar'
import URCTitle from '../components/URCTitle'
import URCSubtitle from '../components/URCSubtitle'

function LandingPage() {
  return (
    <div className='landing-page'>
      <Navbar />
      <URCTitle />
      <URCSubtitle />
    </div>
  )
}

export default LandingPage