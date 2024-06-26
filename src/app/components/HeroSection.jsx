"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { useTranslations } from "next-intl";



function HeroSection() {
  const t = useTranslations('HeroSection');
  return (
    
    <section>
      
      <div className='grid grid-cols-1 lg:grid-cols-12'>

        <div className='col-span-7 place-self-center text-center sm:text-left'>
          <p className='flex md:top-18 xl:top-28 top-18 right-2.5 xs:right-4 z-50 group text-[#ADb7BE] text-base sm:text-lg mb-6  lg:text-xl'>
            {t('firstphrase')}

          </p>
          <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
            <span className='text-transparent bg-clip-text bg-gradient-to-br from-green-600 via-green-700 to-green-200'>
              {t('title')}{" "}
            </span>
            <br />

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
            {t('secondphrase')}

          </p>
        
          <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-green-600 via-green-700 to-green-200 hover:bg-slate-800 text-white  mt-3'>
            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span></button>
        </div>
        <div className='col-span-5 place-self-center mt-4 lg:mt-0 '>
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/roback.png"
              alt="rock_image"
              width={400}
              height={400}
              className='rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'

            />
          </div>


        </div>
      </div>
    </section>
  )
}

export default HeroSection