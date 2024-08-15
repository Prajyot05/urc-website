import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useState } from 'react'

function PricePage() {
    useGSAP(() => {
        gsap.from([".first-price", ".second-price", ".third-price"], {
            y: 100,
            duration: 0, //Don't have time to figure out why the code isn't working without this useless animation
        });
    });

    const [showFallback, setShowFallback] = useState(false);

    const handleError = () => {
        setShowFallback(true);
    };

  return (
    // <div className='prices-page animated-gradient py-40 text-white'>
    <div className='prices-page overflow-hidden relative text-white'>
        <div className='absolute w-full h-full'>
            {!showFallback ? (
                <video
                    loop
                    muted
                    autoPlay
                    className='w-full h-full object-cover object-center'
                    src="/assets/price_bg.mp4"
                    onError={handleError}
                />
            ) : (
                <img
                    src="/assets/price_bg_fallback.png"
                    alt="Static background"
                    className='w-full h-full object-cover object-center'
                />
            )}
        </div>
        <div className="prices-top pt-20 md:pt-40 flex flex-col md:flex-row gap-10 md:gap-40 px-4 md:px-20 pb-10 md:pb-20 justify-center">
            <div className="second-price w-full order-2 md:order-1 md:w-1/3 flex flex-col items-center justify-center md:justify-start">
                <div className="trophy">
                    <img className='w-24 md:w-52' src="/assets/second_price.png" alt="Second Prize Trophy" />
                </div>
                <div className="trophy-info text-center ml-4">
                    <h4 className='text-xl md:text-3xl'>SECOND PRIZE</h4>
                    <h3 className='text-3xl md:text-6xl'>15,000<span className='text-lg md:text-3xl'>Rs</span></h3>
                </div>
            </div>
            <div className="first-price w-full order-1 md:order-2 md:w-1/3 flex flex-col items-center justify-center md:justify-start md:-mt-28">
                <div className="trophy">
                <img className='w-24 md:w-64' src="/assets/first_price.png" alt="First Prize Trophy" />
                </div>
                <div className="trophy-info text-center ml-4">
                    <h4 className='text-xl md:text-3xl'>FIRST PRIZE</h4>
                    <h3 className='text-3xl md:text-6xl'>25,000<span className='text-lg md:text-3xl'>Rs</span></h3>
                </div>
            </div>
            <div className="third-price w-full order-3 md:order-3 md:w-1/3 flex flex-col items-center justify-center md:justify-start">
                <div className="trophy">
                <img className='w-20 md:w-40' src="/assets/third_price.png" alt="Third Prize Trophy" />
                </div>
                <div className="trophy-info text-center ml-4">
                    <h4 className='text-xl md:text-3xl'>THIRD PRIZE</h4>
                    <h3 className='text-3xl md:text-6xl'>10,000<span className='text-lg md:text-3xl'>Rs</span></h3>
                </div>
            </div>
        </div>
        <div className="prices-bottom pb-40 w-full px-4 md:px-20 border-t-2 border-gray-500 text-center mx-auto bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
            <h4 className='text-xl md:text-3xl pt-4 md:pt-5'>Along with Exciting Goodies, and Unforgettable Experience!</h4>
        </div>
    </div>
  )
}

export default PricePage
