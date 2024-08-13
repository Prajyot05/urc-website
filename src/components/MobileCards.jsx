import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { EffectCards } from 'swiper/modules';
import CardInfo from './CardInfo';

export default function MobileCards() {
  const info = [
    {
      title: "Line following",
      desc: "The robot must autonomously follow a predefined line path on the ground from start to finish."
    },
    {
      title: "Color code picking",
      desc: "The robot must be autonomously navigate through an obstacle course featuring various physical barriers and challenges."
    },
    {
      title: "Maze solving",
      desc: "The robot must autonomously navigate through a maze with a clear start and end point."
    },
    {
      title: "Control Pathway",
      desc: "The robot must be autonomously navigate through an obstacle course featuring various physical barriers and challenges."
    },
    {
      title: "Pick and Place",
      desc: "The robot must manually pick up and arrange blocks to form a specific pattern displayed at the start."
    }
  ]
  
  return (
    <div className='swiper-container md:hidden w-[80%] pt-10 mx-auto'>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        loop={true}
      >
        {
          info.map((item, index) => (
            <SwiperSlide key={index}>
              <CardInfo title={item.title} desc={item.desc} />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
}