import React from 'react'
import AcernitySlider from '../components/AcernitySlider';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MobileCards from '../components/MobileCards';
import CardSlider from '../components/CardSlider';

gsap.registerPlugin(ScrollTrigger);

function CardsPage() {
  // useGSAP(() => {
  //   gsap.from(".swiper-container", {
  //     y: 100,
  //     opacity: 0,
  //     duration: 1,
  //     scrollTrigger: {
  //         trigger: '.cards-page',
  //         start: '20% 50%',
  //         end: '+=500'
  //     }
  //   })
  // })
  return (
    <div className='cards-page flex h-fit py-40'>
        <MobileCards />
        {/* <AcernitySlider /> */}
        <CardSlider />
    </div>
  )
}

export default CardsPage