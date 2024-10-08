import React from 'react'

function URCSubtitle() {
    const words = ["creativity and engineering powers", "innovation and technical skills", "imagination and mechanical prowess", "design and engineering expertise", "ingenuity and technological mastery", "vision and robotics expertise", "artistry and technical know-how", "invention and engineering talent", "creativity and mechanical genius", "design thinking and robotic innovation", "conceptual brilliance and engineering precision"];
  return (
    <div className='urc-subtitle z-10 pt-5 md:pb-5 md:pt-10'>
        <h3>
            Get ready to unleash your <br /> 
            <span>
                {/* <FlipWords words={words} /> */}
                creativity and engineering powers
            </span>
        </h3>
    </div>
  )
}

export default URCSubtitle