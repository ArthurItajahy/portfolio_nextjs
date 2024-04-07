"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';



function HeroSection() {
  return (
    <section>
      <div className='grid grid-cols-1 lg:grid-cols-12'>
        <div className='col-span-7 place-self-center text-center sm:text-left'>
          <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
            <span className='text-transparent bg-clip-text bg-gradient-to-br from-green-600 via-green-700 to-green-200'>
              Hello, I'm {" "}
            </span>
            <br/>

            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Arthur',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Web Developer',
                1000,
                'Mobile Developer',
                1000,
                'Full Stack',
                1000
              ]}
              wrapper="span"
              speed={50}

              repeat={Infinity}
            />


          </h1>
          <p className='text-[#ADb7BE] text-base sm:text-lg mb-6  lg:text-xl'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Excepturi voluptatum error vero reprehenderit sint mollitia,

          </p>
          <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-green-600 via-green-700 to-green-200 hover:bg-slate-100 text-white '>Hire Me</button>
          <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-green-600 via-green-700 to-green-200 hove:bg-slate-800 text-white  mt-3'>
            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span></button>
        </div>
        <div className='col-span-5 place-self-center mt-4 lg:mt-0 '>
          <div className="w-[450px] h-[450px]  lg:w-[300px] lg:h-[400px] relative">
            <Image
              src="/images/rocklee.jpg"
              alt="rock image"
              width={400}
              height={400}
              className='rounded-3xl absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'

            />
          </div>


        </div>
      </div>
    </section>
  )
}

export default HeroSection