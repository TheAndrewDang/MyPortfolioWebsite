import React from 'react'
import Image from 'next/image'
import me from '../../../../public/assets/me.jpg'
import osu from '../../../../public/assets/osu.webp'

export const Bentogrid = () => {
  return (
    <div className="flex w-full flex-col items-center rounded-lg pb-6">
      <div className="grid max-w-7xl gap-6 lg:grid-cols-3 lg:grid-rows-6 sm:grid-cols-1 sm:grid-rows-5">

        {/* Location Card */}
        <div className="xl:col-span-2 lg:row-span-3 sm:col-span-1 sm:row-span-1 rounded-3xl bg-neutral-300 shadow-lg">
          <div className="w-full h-full flex flex-col justify-center items-center p-6">
            <h2 className="text-center text-neutral-800 xl:text-7xl lg:text-5xl md:text-5xl sm:text-4xl font-bold mb-4">
              Born and Raised in
            </h2>
            <p className="text-center text-neutral-600 xl:text-6xl lg:text-4xl md:text-4xl sm:text-3xl font-bold">
              Salem, Oregon
            </p>
          </div>
        </div>

        {/* Image Card */}
        <div className="lg:row-span-6 relative overflow-hidden rounded-3xl shadow-lg">
          <Image
            src={me}
            alt="Me"
            layout="fill"
            className="h-full w-full object-cover rounded-3xl"
          />
        </div>

        {/* Education Card */}
        <div className="lg:row-span-3 rounded-3xl bg-neutral-300 relative shadow-lg">
          <div className="absolute inset-0">
            <Image
              src={osu}
              alt="Oregon State University"
              layout="fill"
              className="object-cover rounded-3xl opacity-20"
            />
          </div>
          <div className="relative z-10 w-full h-full flex flex-col justify-center items-center p-6">
            <h2 className="text-center text-black xl:text-6xl lg:text-4xl md:text-4xl sm:text-3xl font-bold mb-4">
              B.S Computer Science
            </h2>
            <p className="text-center text-orange-600 xl:text-4xl lg:text-3xl md:text-3xl sm:text-2xl font-bold px-6">
              Oregon State University
            </p>
          </div>
        </div>

        {/* Age Card */}
        <div className="lg:row-span-3 rounded-3xl bg-neutral-300 shadow-lg">
          <div className="w-full h-full flex flex-col justify-center items-center p-6">
            <h2 className="text-center text-neutral-800 xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-4xl font-bold mb-4">
              Age
            </h2>
            <p className="text-center xl:text-9xl lg:text-7xl md:text-6xl sm:text-5xl text-4xl font-bold bg-gradient-to-r from-orange-600 via-pink-400 to-indigo-400 inline-block text-transparent bg-clip-text">
              24
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}