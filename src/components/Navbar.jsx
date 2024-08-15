import React from 'react'
import SliderButton from './buttons/SliderButton'
import FillInButton from './buttons/FillInButton'

function Navbar() {
  const scrollToSection = (selector) => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='navbar z-10'>
        <div className="nav-left">
          <img src="/assets/logo.png" alt="" />
        </div>
        <div className="nav-mid hidden md:flex">
          <div onClick={() => scrollToSection(".landing-page-container")}><SliderButton text={"Home"} /></div>
          <div onClick={() => scrollToSection(".register-page")}><SliderButton text={"FAQs"} /></div>
          <div onClick={() => scrollToSection(".footer")}><SliderButton text={"Contact"} /></div>
        </div>
        <div className="nav-right">
          <FillInButton />
        </div>
    </div>
  )
}

export default Navbar