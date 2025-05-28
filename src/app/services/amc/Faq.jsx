"use client"

import React, { useState } from 'react'
import { MdExpandMore } from "react-icons/md";
import { MdOutlineExpandLess } from "react-icons/md";

function Faq() {
    const [faq1, setFaq1] = useState(false);
    const [faq2, setFaq2] = useState(false);
    const handleFaq1 = () => {
        setFaq1(!faq1);
    }
    const handleFaq2 = () => {
        setFaq2(!faq2);
    }
    return (
        <div>
            
            <div className='faq'>
                <p className='text-xl my-5 md:text-2xl font-bold text-center text-[#e83433]'>Help & Support FAQs</p>
                <div className="allFaq">
                    <div className="faq1">
                        <div onClick={handleFaq1} className={`md:text-xl border-1 border-gray-300 px-2 py-1 font-bold  ${faq1?'text-[#1d4f68]  bg-gray-200':'text-gray-600'} rounded-t-sm flex justify-between items-center`}><p>What is AMC?</p><p> {faq1?<MdOutlineExpandLess className='text-3xl'/>:<MdExpandMore className='text-3xl'/>}</p></div>
                        {faq1 && <p className='text-xs md:text-base px-2 py-1 border-x-1 border-gray-300'>An AMC is a service agreement between you and Aspire Engineers Pvt. Ltd. to provide regular maintenance and support for your switchgear systems. This contract ensures that your equipment is regularly serviced, reducing the risk of unexpected failures and extending its lifespan.</p>}
                    </div>
                    <div className="faq2">
                        <div onClick={handleFaq2} className={`md:text-xl border-1 border-gray-300 px-2 py-1 font-bold  ${faq2?'text-[#1d4f68]  bg-gray-200':'text-gray-600'} flex justify-between items-center`}><p>Why is regular maintenance important for switchgear?</p><p> {faq2?<MdOutlineExpandLess className='text-3xl'/>:<MdExpandMore className='text-3xl'/>}</p></div>
                        {faq2 && <p className='text-xs md:text-base px-2 py-1 border-x-1 border-gray-300'>Regular maintenance helps in identifying and addressing potential issues before they become major problems. It ensures that your switchgear operates efficiently, safely, and reliably, reducing the risk of costly downtime and repairs.</p>}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Faq