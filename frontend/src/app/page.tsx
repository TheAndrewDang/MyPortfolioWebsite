import { TextHoverEffect } from "@/app/components/ui/text-hover-effect";
import { FloatingDock } from "./components/ui/floating-dock";
import { BackgroundGradientAnimation } from "./components/ui/background-gradient-animation";

import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandSpotify,
  IconHome,
  IconPhoto,
  IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";

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
      href: "#",
    },
 
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];

  export default function Home() {
    return (
      <div className="min-h-screen flex flex-col justify-between">

        {/* THE DOCK */}
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 pb-6 pl-4 z-50">
              <FloatingDock
                mobileClassName="absolute bottom-0 left-0 pb-6" // Work in progress
                items={links}
              />
        </div>

        {/* THE CONTENT */}
        <div className="flex-grow flex items-center justify-center">
          <TextHoverEffect text="Andrew Dang" />
          <BackgroundGradientAnimation>
            <div className="absolute z-49 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
              <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
                Web Developer
              </p>
            </div>
          </BackgroundGradientAnimation>
        </div>

        <div className="min-h-screen text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-6xl">
          <div className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 pt-14 pb-14">
            My Projects
          </div>
        </div>






      </div>
    );
  }
