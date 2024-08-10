import React from "react";
import { Vortex } from "../components/ui/vortex";
import GlitchyButton from "../components/buttons/GlitchyButton";

export default function RegisterPage() {
  return (
    <div className="w-full mx-auto rounded-md  h-screen overflow-hidden">
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
            <h2 className="text-white text-3xl md:text-7xl font-bold">
            Register Here
            </h2>
            <p className="text-gray-500 text-sm md:text-2xl max-w-xl mt-6 py-5">
            URC provides you a platform to showcase your design and develop a <span className="text-[#c227ff]">multi-functional robot</span> capable of autonomously navigating through a series of challenges, followed by a manually controlled <span className="text-[#c227ff]">obstacle course</span>. The competition will test your robots precision, problem solving skills, adaptability, and manual control.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-28 mt-6">
                <GlitchyButton />
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