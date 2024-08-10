import React from 'react'

function CardInfo({title, desc}) {
  return (
    <div className='card-info py-5 px-7 min-h-[24rem] rounded-3xl'>
        <div className="card-title">
            <h3 className='text-3xl py-5 text-black font-bold'>{title}</h3>
        </div>
        <div className="card-desc">
            <h3 className='text-white leading-loose'>{desc}</h3>
        </div>
    </div>
  )
}

export default CardInfo