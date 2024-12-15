'use client';
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
import { Bentogrid } from "./components/ui/bentogrid";
import  { Introvideo } from "./components/ui/introvideo";

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
  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* THE DOCK */}
      <FloatingDock
        mobileClassName="fixed bottom-0 left-0 pb-6 pl-6 z-50"
        desktopClassName="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 shadow-md"
        items={links}
      />

      {/* THE MAIN PAGE */}
      <div>
        <Introvideo />
      </div>

      {/* THE ABOUT SECTION */}
      <div className="min-h-screen flex relative">
        <Bentogrid />
      </div>

      {/* THE PROJECTS */}
      {/* <div className="pb-14">
        <div className="text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-6xl">
          <div className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 pt-14 pb-14">
            My Projects
          </div>
        </div>
      </div> */}

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

