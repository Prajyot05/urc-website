import React from 'react'
import SliderButton from './SliderButton'
import GlitchyButton from './GlitchyButton'

function Navbar() {
  return (
    <div className='navbar'>
        <img src="/assets/logo.jpg" alt="" />
        <SliderButton text={"Home"} />
        <SliderButton text={"About"} />
        <SliderButton text={"Contact"} />
        {/* <GlitchyButton /> */}
    </div>
  )
}

export default Navbar