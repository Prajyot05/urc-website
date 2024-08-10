import React from 'react'
import { FlipWordsComponent } from './FlipWordsComponent'
import { FlipWords } from './ui/flip-words';

function URCSubtitle() {
    const words = ["creativity and engineering powers", "innovation and technical skills", "imagination and mechanical prowess", "design and engineering expertise", "ingenuity and technological mastery", "vision and robotics expertise", "artistry and technical know-how", "invention and engineering talent", "creativity and mechanical genius", "design thinking and robotic innovation", "conceptual brilliance and engineering precision"];
  return (
    <div className='urc-subtitle'>
        <h3>
            Get ready to unleash your <br /> 
            <span className='flip-text-container'><FlipWords words={words} /></span>!
        </h3>
    </div>
  )
}

export default URCSubtitle