import React from 'react'

function PricePage() {
  return (
    <div className='prices-page text-white'>
        <div className="prices-top flex flex-col md:flex-row gap-20 px-20 pb-20 justify-center">
            <div className="second-price w-1/3 flex items-center">
                <div className="trophy">
                    <img className='w-[12rem]' src="/assets/second_price.png" alt="" />
                </div>
                <div className="trophy-info">
                    <h4 className='text-3xl'>SECOND PRIZE</h4>
                    <h3 className='text-6xl'>15,000<span className='text-3xl'>Rs</span></h3>
                </div>
            </div>
            <div className="first-price w-1/3 scale-110 flex -mt-28 items-center">
                <div className="trophy">
                <img className='w-[15rem]' src="/assets/first_price.png" alt="" />
                </div>
                <div className="trophy-info">
                    <h4 className='text-3xl'>FIRST PRIZE</h4>
                    <h3 className='text-6xl'>25,000<span className='text-3xl'>Rs</span></h3>
                </div>
            </div>
            <div className="third-price w-1/3 flex items-center">
                <div className="trophy">
                <img className='w-[5rem]' src="/assets/third_price.png" alt="" />
                </div>
                <div className="trophy-info">
                    <h4 className='text-3xl'>THIRD PRIZE</h4>
                    <h3 className='text-6xl'>10,000<span className='text-3xl'>Rs</span></h3>
                </div>
            </div>
        </div>
        <div className="prices-bottom w-fit px-20 border-t-2 border-gray-500 text-center mx-auto bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
            <h4 className='text-3xl pt-5'>And with unforgettable experience and Abundant knowledge!</h4>
        </div>
    </div>
  )
}

export default PricePage