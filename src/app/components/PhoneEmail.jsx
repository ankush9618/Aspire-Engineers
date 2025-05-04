"use client"

import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { MdCall,MdEmail } from "react-icons/md";

function PhoneEmail() {
    const [cross,setCross] = useState(true);
  return (
    <>
    {
        cross &&<div className='bg-[#EA3C55] w-full h-10 text-white flex justify-between items-center px-5 py-1'>
        <div className='md:flex text-sm md:text-md md:gap-8'>
          <div className='flex justify-center gap-2 items-center'>
            <MdCall className='font-bold text-md md:text-lg'/>Call: +91 9245617581 | +91 9245617582
          </div>
          <div className='flex justify-center gap-2 items-center'>
            <MdEmail className='font-bold text-md md:text-lg'/>Email: aspireenginner@gmail.com
          </div>
        </div>
        <div className='cursor-pointer' onClick={()=>setCross(!cross)}>
          <RxCross2 className='text-xl md:text-2xl'/>
        </div>
      </div>
      }
    </>
  )
}

export default PhoneEmail