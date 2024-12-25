"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

export const ParallaxScroll = ({
  images,
  className,
}: {
  images: (string | StaticImageData)[];
  className?: string;
}) => {
  const gridRef = useRef;
  const { scrollYProgress } = useScroll({
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div
      className={cn("h-full items-start overflow-y-auto w-full", className)}
      ref={gridRef}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-7xl mx-auto gap-10 py-52 h-full overflow-y-auto"
        ref={gridRef}
      >
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div
              style={{ y: translateFirst }} // Apply the translateY motion value here
              key={"grid-1" + idx}
            >
              <Image
                src={el}
                className="h-[700px] w-full object-cover object-left-top rounded-3xl gap-10 !m-0 !p-0 shadow-md"
                height="500"
                width="400"
                alt="thumbnail"
                unoptimized
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
              <Image
                src={el}
                className="h-[700px] w-full object-cover object-left-top rounded-3xl gap-10 !m-0 !p-0 shadow-md"
                height="500"
                width="400"
                alt="thumbnail"
                unoptimized
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
              <Image
                src={el}
                className="h-[700px] w-full object-cover object-left-top rounded-3xl gap-10 !m-0 !p-0 shadow-md"
                height="500"
                width="400"
                alt="thumbnail"
                unoptimized
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
