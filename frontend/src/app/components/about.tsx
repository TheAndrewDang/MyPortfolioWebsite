import React from 'react'
import { Bentogrid } from '@/app/components/ui/bentogrid'

export const About = () => {
  return (
    <div className="w-full flex flex-col items-center p-6 mt-8">
      {/* Title Section */}
      <div className="w-full max-w-7xl text-left">
        <h1 className="font-bold text-neutral-800 text-4xl md:text-5xl lg:text-6xl">About Me</h1>
        <p className='text-lg md:text-2xl lg:text-2xl font-semibold text-neutral-400'> Software Engineer, Photographer, and Co-Founder of Ka Technology  </p>
      </div>

      {/* Image Section */}
      <div className="w-full max-w-7xl mt-6">
        <div className=''>
            <Bentogrid />
        </div>
      </div>
    </div>
  )
}
