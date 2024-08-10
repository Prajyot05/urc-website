import React from 'react'
import SliderButton from './buttons/SliderButton'
import GlitchyButton from './buttons/GlitchyButton'
import FillInButton from './buttons/FillInButton'

function Navbar() {
  return (
    <div className='navbar z-10'>
        <div className="nav-left">
          <img src="/assets/logo.jpg" alt="" />
        </div>
        <div className="nav-mid hidden md:flex">
          <SliderButton text={"Home"} />
          <SliderButton text={"About"} />
          <SliderButton text={"Contact"} />
        </div>
        <div className="nav-right">
          <FillInButton />
        </div>
    </div>
  )
}

export default Navbar