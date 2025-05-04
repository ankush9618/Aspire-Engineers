import React from 'react'
import NavLink from './NavLink'

function Footer() {
    return (
        <div className='bg-zinc-200 h-auto w-full'>
            <div className='w-9/10 md:w-4/5 md:py-10 py-5 mt-5 mx-auto'>
                <div className='md:grid grid-cols-3 gap-8 '>
                    <div>
                        <NavLink href="/">
                            <div className="md:text-2xl text-xl font-bold text-zinc-900 flex justify-center items-center gap-2 cursor-pointer">
                                <img src="/assets/images/logoicon1.png" className="size-18 mix-blend-multiply outline-0 opacity-90" alt="" />
                                <div>
                                    <p className="text-[#e83433]">ASPIRE <span className="text-[#1d4f68]">ENGINEERS</span></p>
                                    <p className="text-sm text-zinc-600">Pvt. Ltd.</p>
                                    <p className="md:text-xs text-[10px] font-semibold text-[#1d4f68]">(Electrical Testing & Servicing) A-Grade 33KV lisence.</p>
                                </div>
                            </div>
                        </NavLink>
                        <p className='hidden md:block text-sm'>
                        <span className='font-bold'>Aspire Engineers Pvt. Ltd.</span> has been a trusted engineering partner for over <span className='text-[#e83433]'>10 years</span>, delivering quality, safety, and innovation across Telangana, Andhra Pradesh, and Bhubaneswar. We proudly serve some of India’s most prestigious institutions and corporations.
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Footer