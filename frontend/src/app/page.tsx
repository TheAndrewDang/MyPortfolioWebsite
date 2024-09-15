import { TextHoverEffect } from "@/app/components/ui/text-hover-effect";
import { FloatingDock } from "./components/ui/floating-dock";
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
        <div className="flex-grow flex items-center justify-center">
          <TextHoverEffect text="Andrew Dang" />
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pb-6 pl-4">
      <FloatingDock
        mobileClassName="absolute bottom-0 left-1/4 pb-6" // Work in progress
        items={links}
      />
    </div>
      </div>
    );
  }
