"use client"

import React, { useEffect, useState } from 'react'
import ContactForm from '../utils/ContactForm'
import Loader from '../components/Loader';

function page() {

    const [loader,setLoader] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setLoader(false)
        },2000)
    })
  return (
    <div>
        {
            loader?<Loader/>:<ContactForm/>
        }
        
        
    </div>
  )
}

export default page