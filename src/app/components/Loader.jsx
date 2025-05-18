"use client"
import React, { useEffect, useState } from 'react'

function Loader() {
  const [loader,setLoader]=useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setLoader(false)
    },3000)
  },[])
  const load=loader
  return (
    <div className='w-full flex justify-center max-h-screen h-screen items-center'>
        <img src="/assets/images/logoicon1.png" alt="" className='animate-ping size-30'/>
    </div>
  )
}

export {Loader,load} ;