"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/canvase-reveal-effect";

export function CanvasRevealCard({ cardTitle, cardDesc }) {
  return (
    <div className="py-20 flex items-center justify-center bg-transparent w-full mx-auto px-8">
      <Card title={cardTitle} desc={cardDesc} />
    </div>
  );
}

const Card = ({ title, desc }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] w-full mx-auto p-4 relative min-h-[35rem]"
    >
      {hovered && (
        <div className="absolute inset-0 z-10">
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-[#5d36a2]"
            colors={[
              [236, 72, 153],
              [128, 0, 128],
            ]}
          />
        </div>
      )}

      <div className="relative z-20 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={hovered ? "desc" : "title"}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="w-full flex items-center justify-center h-full"
          >
            <h2 className="dark:text-white text-xl text-black font-bold">
              {hovered ? desc : title}
            </h2>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};