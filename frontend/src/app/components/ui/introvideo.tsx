"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TextGenerateEffect } from "./text-generate-effect";

export const Introvideo = () => {
  const { scrollY } = useScroll();

  const width = useTransform(scrollY, [0, 500], ["100%", "80rem"]);

  return (
    <div className="relative h-screen overflow-hidden flex items-center justify-center sm:p-3">
      <motion.div
        style={{
          width,
          height: "100%",
        }}
        className="flex items-center justify-center"
      >
        <video
          src="/assets/mainwallpaper.mp4"
          autoPlay
          muted
          loop
          className="h-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 flex items-center justify-center text-center z-10">
        <TextGenerateEffect
          words="Hi, I'm Andrew Dang"
          className="text-white"
          duration={1.5}
        />
      </div>
    </div>
  );
};

export default Introvideo;
