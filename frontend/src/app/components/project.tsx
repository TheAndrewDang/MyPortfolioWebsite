import React from 'react';
import { motion } from 'framer-motion';

const project = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.8,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <div>
      <div className="w-full flex flex-col items-center p-6 mt-8">
        <div className="w-full max-w-7xl text-left">
          <motion.h1
            className="font-bold text-neutral-800 text-4xl md:text-5xl lg:text-6xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeInVariants}
          >
            Projects
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl lg:text-2xl font-semibold text-neutral-400"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeInVariants}
          >
            Things I&apos;ve worked on by myself or with others
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default project;
