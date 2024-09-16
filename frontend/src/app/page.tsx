'use client';

import { TextHoverEffect } from "@/app/components/ui/text-hover-effect";
import { FloatingDock } from "./components/ui/floating-dock";
import { BackgroundGradientAnimation } from "./components/ui/background-gradient-animation";
import { BentoGrid, BentoGridItem } from "./components/ui/bento-grid";

import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandSpotify,
  IconHome,
  IconPhoto,
  IconTerminal2,
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { useEffect, useState } from "react";





  {/* THE DOCK */}
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
 
    {
      title: "Projects",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Photography",
      icon: (
        <IconPhoto className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Spotify",
      icon: (
        <IconBrandSpotify className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://open.spotify.com/user/22k757h7pbkx57i7gm7awk2oi?si=76f2212da9d64a53",
    },
 
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.instagram.com/theandrewdang/",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/TheAndrewDang",
    },
  ];


  {/* THE PROJECTS */}
  const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800"></div>
  );
  const items = [
    {
      title: "The Dawn of Innovation",
      description: "Explore the birth of groundbreaking ideas and inventions.",
      header: <Skeleton />,
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Digital Revolution",
      description: "Dive into the transformative power of technology.",
      header: <Skeleton />,
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Art of Design",
      description: "Discover the beauty of thoughtful and functional design.",
      header: <Skeleton />,
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Power of Communication",
      description:
        "Understand the impact of effective communication in our lives.",
      header: <Skeleton />,
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Pursuit of Knowledge",
      description: "Join the quest for understanding and enlightenment.",
      header: <Skeleton />,
      icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Joy of Creation",
      description: "Experience the thrill of bringing ideas to life.",
      header: <Skeleton />,
      icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Spirit of Adventure",
      description: "Embark on exciting journeys and thrilling discoveries.",
      header: <Skeleton />,
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
  ];
  
  const rotatingWords = ["Web Developer","Photographer", "Adventurer"];

  export default function Home() {

    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
      }, 4000);

      return () => clearInterval(interval);
    }, []);

    return (
      <div className="min-h-screen flex flex-col justify-between">

        {/* THE DOCK */}
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 pb-6 pl-4 z-50">
              <FloatingDock
                mobileClassName="absolute bottom-0 left-0 pb-6" // Work in progress
                items={links}
              />
        </div>

        {/* THE MAIN PAGE */}

        <div className="hero flex-grow flex items-center justify-center sm:max-h-2 md:max-h-5 lg:max-h-screen">

          <TextHoverEffect text="Andrew Dang" />

          <BackgroundGradientAnimation>
            <div className="absolute z-49 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
              <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
              {rotatingWords[currentWordIndex]}
              </p>
            </div>
          </BackgroundGradientAnimation>
        </div>

        {/* THE ABOUT */}
        <div className= "max-h-full sticky">
          <div className="text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-6xl" id="halfwidth">
            <div className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 pt-14 pb-8">
              About Me
            </div>
          </div>


          <div className="text-white font-bold px-4 pointer-events-none text-base text-center md:text-xl lg:text-3xl" id="halfwidth">
            <div className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 pb-14 px-6">
              I am a web developer, photographer, and kombucha enthusiast based in Salem, Oregon. I am passionate about creating beautiful and functional websites. I am always looking for new opportunities to grow and improve my skills.
            </div>
          </div>
        </div>

        <div>

        </div>

        {/* THE PROJECTS */}
        <div className="pb-14">
        <div className="text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-6xl">
          <div className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 pt-14 pb-14">
            My Projects
          </div>
        </div>
          <BentoGrid className="max-w-4xl mx-auto">
            {items.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                icon={item.icon}
                className={i === 3 || i === 6 ? "md:col-span-2" : ""}
              />
            ))}
          </BentoGrid>
          </div>





      </div>
    );
  }
