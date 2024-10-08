import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import URCTitle from '../components/URCTitle'
import URCSubtitle from '../components/URCSubtitle'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import GlitchyButton from '../components/buttons/GlitchyButton'
import BasicModal from '../components/Modal'

function LandingPage() {
  // useGSAP(() => {
  //   gsap.from(".urc-title h1", {
  //     y: -50,
  //     filter: "blur(20px)",
  //     opacity: 0,
  //     duration: 2,
  //     ease: "power4.out",
  //     stagger: 0.5
  //   }, 'title');

  //   gsap.from(".urc-subtitle", {
  //     y: 50,
  //     opacity: 0,
  //     filter: "blur(20px)",
  //     duration: 1,
  //     delay: 2
  //   }, 'title');

  //   gsap.from(".navbar", {
  //     y:-20,
  //     opacity: 0,
  //     filter: "blur(20px)",
  //     delay: 3
  //   }, 'title');
  // })

  const videoRef = useRef(null);

  // useEffect(() => {
  //   if (videoRef.current) {
  //     videoRef.current.playbackRate = 2;
  //   }
  // }, []); This was making the website slow
  const [showFallback, setShowFallback] = useState(false);

  const handleError = () => {
      setShowFallback(true);
  };
  return (
    <div className='landing-page-container w-full relative overflow-hidden'>
      <div className='absolute w-full h-full'>
            {!showFallback ? (
                <video
                    ref={videoRef}
                    loop
                    muted
                    autoPlay
                    className='min-w-full top-0 left-0 obj-cover object-center z-0'
                    src="/assets/main_bg.mp4"
                    onError={handleError}
                />
            ) : (
                <img
                    src="/assets/main_bg_fallback.png"
                    alt="Static background"
                    className='w-full h-full object-cover object-center'
                />
            )}
        </div>
      <div className="overlay absolute top-0 left-0 w-full h-screen bg-black opacity-80"></div>
      <div className='landing-page relative'>
        {/* <video className='absolute top-0 left-0 bg-cover z-0' autoPlay loop muted src="/assets/landing_video.mp4"></video>
        <div className="overlay absolute top-0 left-0 w-full h-full bg-black opacity-50"></div> */}
        <Navbar />
        <URCTitle />
        <URCSubtitle />
        <div className="reg-btn md:scale-[1.3] flex justify-center py-10"><BasicModal /></div>
      </div>
    </div>
  )
}

export default LandingPage