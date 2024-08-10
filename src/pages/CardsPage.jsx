import React from 'react'
import CardSlider from '../components/CardSlider';
import BetterCards from '../components/BetterCards';

function CardsPage() {
  return (
    <div className='cards-page h-[80vh]'>
        {/* <CardSlider /> */}
        <h1 className='text-white text-center pt-20 text-6xl'>Tasks</h1>
        <BetterCards />
    </div>
  )
}

export default CardsPage