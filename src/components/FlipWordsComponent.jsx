import React from "react";
import { FlipWords } from "./ui/flip-words";
 
export function FlipWordsComponent({words}) {
 
  return (
    <div className="container">
      <div className="flip-text-container">
        <FlipWords words={words} />
      </div>
    </div>
  );
}