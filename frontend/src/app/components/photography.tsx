"use client";
import React from 'react'
import { ParallaxScroll } from "./ui/parallax-scroll";
import me from '../../../public/assets/me.jpg'
  
const images = [
    me,
    me,
    me,
    me,
    me,
    me,
    me,
    me,
    me,
    me,
    me,
    me,
  ];

export const Photography = () => {
  return (
    <div className="w-full h-full flex flex-col items-center p-6 mt-4">
      {/* Title Section */}
      <div className="w-full max-w-7xl text-center">
        <h1 className="font-bold text-neutral-800 text-4xl md:text-6xl">Gallery</h1>
      </div>
      
      {/* Image Section */}
      <ParallaxScroll images={images} />
    </div>
  )
}