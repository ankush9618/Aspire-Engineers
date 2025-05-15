"use client"

import React, { useEffect, useState } from 'react'
import Loader from '../components/Loader'
import MissionVision from '../components/MissionVision';
import Slidebar from '../utils/Slidebar';

function page() {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 2000)
  }, [])
  return (
    <>
      {
        loader ? <Loader /> :
          <div className='w-full'>
            <div className='h-auto md:h-96'>
              <img src="/assets/carousal/carousal1.jpg" alt="" className='h-full w-full hover:opacity-100 opacity-80 border-1 border-zinc-300 shadow-md' />
            </div>
            <div className='text-center font-bold text-xl md:text-3xl my-5'>ABOUT <span className='text-[#e83433]'>US</span></div>
            <div className='md:flex md:w-8/10 w-9/10 mx-auto justify-center gap-4 items-center'>
              <div className='md:min-w-72 ms-auto text-center'>
                <img src="/assets/images/logoicon1.png" alt="" className='md:w-72 md:h-72 h-32 w-32 mx-auto' />
              </div>
              <div className='text-start text-zinc-600 font-serif'>
                <p>
                  <span className='font-bold'>Aspire Engineers Pvt. Ltd.</span> is a trusted name in engineering services, proudly serving clients for over <span className='text-[#e83433]'>10 years</span> across Telangana, Andhra Pradesh, and Bhubaneswar. With a strong commitment to quality, safety, and innovation, we have established ourselves as a reliable partner to some of the most prestigious institutions and corporations in India.
                </p>

                <p className='my-2'>
                  Our core expertise lies in electrical testing and servicing, backed by an <span className='text-[#e83433]'>A-Grade 33 KV license</span>, enabling us to handle high-voltage systems with the highest standards of safety and compliance. We are also a certified authorized service center for <span className='font-semibold'>L&T</span>, further reinforcing our technical capabilities and service quality.
                </p>

                <p className='my-2'>
                  Over the years, we have successfully executed a wide range of industrial and infrastructure projects, collaborating with esteemed clients such as <span className='text-[#e83433]'>Dr. Reddy’s Laboratories, Varun Beverages, Biological E. Limited, IIT Hyderabad, KTPS, and NTPC.</span> Our consistent delivery, deep industry knowledge, and technical excellence have made us a preferred partner in sectors including pharmaceuticals, education, beverages, power, and public infrastructure.
                </p>

                <p>At Aspire Engineers, we believe in building long-term relationships rooted in trust, transparency, and performance. Our experienced team is driven by a passion for engineering excellence and remains committed to delivering tailored solutions that meet the evolving needs of our clients.</p>
              </div>
            </div>

            <hr className="w-4/5 mx-auto my-3 text-zinc-300" />
            <MissionVision/>

            <hr className="w-4/5 mx-auto my-3 text-zinc-300" />

              {/* SERVICES */}
              <div className="w-full my-5">
                <div className="w-9/10 md:w-8/10 mx-auto text-center">
                  <div className="text-xl md:text-3xl font-bold">OUR <span className="text-[#e83433]">SERVICES</span></div>
                  <Slidebar/>
                </div>
              </div>
          </div>
      }

    </>
  )
}

export default page