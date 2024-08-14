import React from "react";
import { Vortex } from "../components/ui/vortex";
import GlitchyButton from "../components/buttons/GlitchyButton";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function RegisterPage() {
  // useGSAP(() => {
  //   gsap.from(".register-container", {
  //     y: 100,
  //     opacity: 0,
  //     duration: 1,
  //     scrollTrigger: {
  //         trigger: '.register-page',
  //         start: '20% 50%',
  //         end: '+=500'
  //     }
  //   })
  // })
  return (
    <div className="register-page w-full mx-auto rounded-md min-h-screen sm:py-20 overflow-hidden">
      {/* <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      > */}
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <div className="register-container relative bg-[#272727] rounded-[30px]">
            <h2 className="text-white text-center md:text-left text-3xl md:text-7xl font-bold">
            FAQs
            </h2>
            <p className="text-gray-500 text-lg md:text-2xl max-w-xl mt-6 pt-5">
              <span className="text-[#c227ff]">Who can participate?</span> <br /> All undergraduate students, both from engineering and non-engineering disciplines, are eligible to participate.
            </p>
            <p className="text-gray-500 text-lg md:text-2xl max-w-xl mt-5">
              <span className="text-[#c227ff]">Are there any resources or workshops available?</span> <br /> There are plenty of resources available on YouTube and the internet. We will also be sharing links to useful resources through our social media channels, so be sure to follow them.
            </p>
            <p className="text-gray-500 text-lg md:text-2xl max-w-xl mt-5 pb-5">
              <span className="text-[#c227ff]">Any other doubts?</span> <br /> Please refer to the rulebook for detailed information. If you have further queries, feel free to contact the URC officials.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-28 mt-6">
                {/* <GlitchyButton /> */}
                {/* <button className="px-4 scale-125 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
                    Rule Book
                </button> */}
            </div>
            <img src="/assets/register_car.png" className="car-img absolute" alt="" />
        </div>
      </Vortex>
    </div>
  );
}