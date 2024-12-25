"use client";
import React, { useEffect, useState } from "react";
import { ParallaxScroll } from "./ui/parallax-scroll";

export const Photography = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("http://localhost:6969/api/s3-images"); // Ensure this matches your backend endpoint
        const data = await response.json();
        console.log("Fetched URLs:", data); // Log the fetched URLs
        setImages(data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };
  
    fetchImages();
  }, []);
  

  return (
    <div className="w-full h-full flex flex-col items-center mt-4">
      <div className="w-full max-w-7xl text-center">
        <h1 className="font-bold text-neutral-800 text-4xl md:text-6xl">Gallery</h1>
      </div>
      <div className="h-full w-full">
        {images.length > 0 ? (
          <ParallaxScroll images={images} />
        ) : (
          <p className="text-center">Loading images...</p>
        )}
      </div>
    </div>
  );
};
