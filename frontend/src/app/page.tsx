'use client';
import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FloatingDock } from "./components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconHome,
  // IconPhoto,
  // IconTerminal2,
} from "@tabler/icons-react";
// import { TextGenerateEffect } from "./components/ui/text-generate-effect";
// import { Bentogrid } from "./components/ui/bentogrid";
import  { Introvideo } from "./components/ui/introvideo";
import { About } from "./components/about";
// import Image from 'next/image';
// import me from '../../public/assets/me.jpg';

// Dock links
const links = [
  {
    title: "Home",
    icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: "#",
  },
  // {
  //   title: "Projects",
  //   icon: <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
  //   href: "#",
  // },
  // {
  //   title: "Photography",
  //   icon: <IconPhoto className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
  //   href: "#",
  // },
  {
    title: "LinkedIn",
    icon: <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: "https://open.spotify.com/user/22k757h7pbkx57i7gm7awk2oi?si=76f2212da9d64a53",
  },
  {
    title: "Instagram",
    icon: <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: "https://www.instagram.com/theandrewdang/",
  },
  {
    title: "GitHub",
    icon: <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: "https://github.com/TheAndrewDang",
  },
];


export default function Home() { 
  const controls = useAnimation();
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        controls.start({ y: 120 }); // Move dock off-screen
      } else {
        controls.start({ y: 0 }); // Bring dock back into view
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls, lastScrollY]);

  return (
    <div>
    <div className="flex flex-col justify-between">
      {/* THE DOCK */}
      <motion.div
          initial={{ y: 0 }}
          animate={controls}
          transition={{ duration: 0, ease: "easeInOut" }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 shadow-md"
        >
          <FloatingDock
            mobileClassName="fixed bottom-0 left-0 pb-6 pl-6 z-50"
            desktopClassName="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 shadow-md"
            items={links}
          />
        </motion.div>

      </div>

      {/* THE MAIN PAGE */}
      <div>
        <Introvideo />
      </div>

      {/* THE ABOUT SECTION */}
      <div>
      <About />
      </div>




      {/* THE PROJECTS */}
      <div>

      </div>

      <footer>
        <div className="font-bold px-4 pointer-events-none text-sm text-center md:text-l lg:text-l">
          <div className="text-neutral-600 pt-3 pb-3">
            © 2024 Andrew Dang. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

