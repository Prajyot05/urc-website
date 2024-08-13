import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import { CanvasRevealCard } from './CanvasRevealCard';
import "swiper/css";
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import CardInfo from './CardInfo';

export default function CardSlider() {
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
    <div className='swiper-container hidden md:block w-full md:w-[90%] mx-auto'>
      <Swiper
        slidesPerView={1}
        breakpoints={{
          1200: {
            slidesPerView: 3
          },
          1000: {
            slidesPerView: 2
          },
          640: {
            slidesPerView: 2,
          }
        }}
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
      </Swiper>
    </div>
  );
}