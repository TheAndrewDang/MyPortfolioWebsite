"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ParallaxScroll } from "./ui/parallax-scroll";

export const Photography = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("/api/s3-images");
        const data = await response.json();
        console.log("Fetched URLs:", data); // Log the fetched URLs
        setImages(data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="w-full h-full flex flex-col items-center mt-4">
      <div className="w-full max-w-7xl text-left">
        <motion.h1
          className="font-bold text-neutral-800 text-4xl md:text-5xl lg:text-6xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeInVariants}
        >
          Gallery
        </motion.h1>
        <motion.p
          className="text-xl md:text-3xl lg:text-3xl font-semibold text-neutral-500 pl-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          variants={fadeInVariants}
        >
          Gear List
        </motion.p>
        <motion.p
          className="text-lg md:text-2xl lg:text-2xl font-semibold text-neutral-400 pl-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
          variants={fadeInVariants}
        >
          Sony A7 III | Sigma 24-70 2.8 DG DN Art | Sony GM 35 1.4 | iPhone 15 Pro Max
        </motion.p>
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
