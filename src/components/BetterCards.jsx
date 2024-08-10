import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { EffectCards } from 'swiper/modules';
import CardInfo from './CardInfo';

export default function BetterCards() {
    const info = [
        {
          title: "Line following",
          desc: "A Line Following robotic car uses computer vision to detect the line. It calculates the deviation from the line's position and adjusts accordingly. PID control makes precise adjustments to steering and speed. This enables smooth and accurate real-time line tracking."
        },
        {
          title: "Color code picking",
          desc: "The robotic car follows a Color Code Following system, using RGB/HSV color detection to identify markers. It reacts accordingly, changing direction or speed, and utilizes a Finite State Machine (FSM) to manage actions. This enables coordinated navigation and decision-making based on color codes. The car seamlessly integrates color detection and FSM for efficient path-following."
        },
        {
          title: "Maze solving",
          desc: "Maze Solving involves using graph-based algorithms like DFS, BFS, or A* to navigate efficiently. These algorithms enable the robot to find the shortest path to the goal. Wall-following strategies are combined with decision-making algorithms to handle dynamic environments. This hybrid approach ensures adaptability and optimizes maze solving performance"
        }
      ]
  return (
    <div className='swiper-container w-[30%] pt-10 mx-auto'>
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