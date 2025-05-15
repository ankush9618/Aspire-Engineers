"use client"

import React, { useState, useEffect } from 'react'
import { Typewriter } from 'react-simple-typewriter'


function Carosuel() {
  const [random, setRandom] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setRandom(Math.ceil(Math.random() * 5))
    }, 5000)

    return () => clearInterval(interval) // clean up on unmount
  }, [])

  return (
    <>
      
      <div className=' md:h-108 h-64 bg-zinc-500 relative w-full'>
        <div className=' h-full'>
          <img src={`/assets/carousal/carousal${random}.jpg`} className='size-full opacity-50 border-1 border-zinc-300 shadow-md' alt="" />
          <div className='absolute  md:top-3 md:right-5 top-2 right-2 rounded-sm md:rounded-md bg-white overflow-hidden'>
            <p className='text-center md:text-sm text-zinc-500 hidden md:block md:font-bold pt-1'>Authorised Service Center</p>
          <img src="/assets/images/landt2.jpg" className=' w-25 md:w-60' alt="L&T" />
          </div>
          <div className='absolute top-15 md:top-35 md:text-4xl text-xl font-bold text-white text-center items-center w-full '>
            <div className=''>
              <span className='bg-white text-zinc-700 md:opacity-90 opacity-80 pr-1'><span className='md:border-l-8 border-l-4 border-orange-300 px-1'>From</span> <span className='text-orange-500'>AMC</span> and <span className='text-red-500'>ACB/VCB</span> <br className='pl-1 md:hidden'></br>services to <span className='text-orange-400'>RetroFitting</span>, </span>
            </div>
            <div className='md:mt-3'>
              <span className='bg-black md:opacity-80 opacity-70 text-yellow-500 px-2'><Typewriter words={["we offer solutions that enhance performance and longevity of your electrical systems.", "we deliver reliable and efficient services that ensure optimal functionality and safety of your power infrastructure."]} typeSpeed={100} loop={100} /></span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Carosuel
