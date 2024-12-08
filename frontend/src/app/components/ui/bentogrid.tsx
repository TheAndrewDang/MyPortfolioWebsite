import React from 'react'
import Image from 'next/image'
import me from '../../../../public/assets/me.jpg'
import osu from '../../../../public/assets/osu.webp'

export const Bentogrid = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center rounded-lg p-6">
        <div className="grid h-full w-full grid-cols-3 grid-rows-6 gap-4">
            <div className="col-span-2 row-span-3 rounded-3xl bg-neutral-300">
                <div className='w-full h-full col-span-2 row-span-3 rounded-3xl bg-neutral-300 flex flex-col justify-center items-center'>
                    <div className='text-center text-neutral-800 text-7xl font-bold mb-4'>
                        Born and Raised in
                    </div>
                    <div className='text-center text-neutral-600 text-6xl font-bold'>
                        Salem, Oregon
                    </div>
                </div>
            </div>

            <div className="row-span-4 relative overflow-hidden">
                <Image src={me} alt="me" layout='fill' className='h-full w-full object-cover rounded-3xl' />
            </div>

            <div className="row-span-3 rounded-3xl bg-neutral-300 relative">
                <div className="absolute inset-0 p-4">
                    <Image 
                        src={osu} 
                        alt="school" 
                        className="w-full h-full object-cover rounded-3xl opacity-10"
                    />
                </div>
                <div className='relative z-10 w-full h-full col-span-2 row-span-3 flex flex-col justify-center items-center'>
                    <div className='text-center text-black text-6xl font-bold mb-4'>
                        B.S Computer Science
                    </div>
                    <div className='text-center text-orange-600 text-4xl font-bold px-4'>
                        Oregon State University
                    </div>
                </div>
            </div>

            <div className="row-span-3 rounded-3xl bg-neutral-300">
                <div className='w-full h-full col-span-2 row-span-3 rounded-3xl bg-neutral-300 flex flex-col justify-center items-center'>
                    <div className='text-center text-neutral-800 text-9xl font-bold mb-4'>
                        Age
                    </div>
                    <div className='text-center text-9xl font-bold bg-gradient-to-r from-orange-600 via-pink-400 to-indigo-400 inline-block text-transparent bg-clip-text'>
                        24
                    </div>
                </div>
            </div>

            <div className="row-span-2 rounded-3xl bg-neutral-300">
                <div className='w-full h-full col-span-2 row-span-3 rounded-3xl bg-neutral-300 flex flex-col justify-center items-center'>
                    <div className='text-center text-6xl md:text-5xl font-bold text-red-600 leading-[1.2]'>
                        Ka Technology
                    </div>
                    <div className='text-center text-3xl md:text-2xl text-neutral-800 font-bold'>
                        Co-Founder and Web Developer
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Bentogrid
