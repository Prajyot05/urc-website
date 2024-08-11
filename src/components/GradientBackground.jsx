import React from "react";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import PricePage from "../pages/PricePage";
import FooterPage from "../pages/FooterPage";

export function GradientBackground() {
  return (
    <BackgroundGradientAnimation>
        {/* <div className="top-overlay h-[20vh]"></div>
        <div className="bottom-overlay h-[20vh]"></div> */}
        <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
          <PricePage />
        </div>
    </BackgroundGradientAnimation>
  );
}