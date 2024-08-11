import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import CardInfo from './CardInfo';

export default function CardSlider() {
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
    <div className='swiper-container w-[80%] mx-auto'>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        // freeMode={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {
          info.map((item, index) => (
            <SwiperSlide key={index}>
              <CardInfo title={item.title} desc={item.desc} />
            </SwiperSlide>
          ))
        }
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