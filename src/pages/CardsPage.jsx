import React from 'react'
import CardSlider from '../components/CardSlider';
import BetterCards from '../components/BetterCards';

function CardsPage() {
  return (
    <div className='cards-page flex h-fit py-40'>
        {/* <BetterCards /> */}
        <CardSlider />
    </div>
  )
}

export default CardsPage