import React from 'react'
import NavLink from '../utils/NavLink'
import Link from 'next/link'
import { MdLocationPin } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";

function Footer() {
    return (
        <div className='bg-zinc-200 h-auto w-full'>
            <div className='w-9/10 md:w-8/10 md:py-10 py-5 mt-5 mx-auto'>
                <div className='md:grid grid-cols-8 gap-8 '>
                    <div id='logo' className='col-span-3 hidden md:block'>
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
                        <p className='hidden md:block text-sm mt-3'>
                            <span className='font-bold'>Aspire Engineers Pvt. Ltd.</span> has been a trusted engineering partner for over <span className='text-[#e83433]'>10 years</span>, delivering quality, safety, and innovation across Telangana, Andhra Pradesh, and Bhubaneswar. We proudly serve some of India’s most prestigious institutions and corporations.
                        </p>

                        <div id="office" >
                            <p className='mt-3 hidden md:flex justify-start gap-2 text-[#1d4f68] items-start'>
                                <span className='text-xl text-[#e83433] pt-2'><MdLocationPin /> </span> Road No. 4, Ganesh Nagar, Quthbullapur, Hyderabad, Telangana 500055, India.
                            </p>
                            <p className='mt-2 hidden md:flex justify-start gap-2 text-[#1d4f68] items-center'>
                                <span className='text-xl text-[#e83433]'><MdCall /> </span> +91 964538268 | +91 9643586843
                            </p>
                            <p className='mt-1 hidden md:flex justify-start gap-2 text-[#1d4f68] items-center'>
                                <span className='text-xl text-[#e83433]'><MdEmail /> </span>aspireengineers@gmail.com
                            </p>
                        </div>
                    </div>
                    <div id="middle" className='mt-5 md:mt-0 col-span-3'>
                        <div id='products' className='w-full flex justify-cente'>
                            <div className='pl-2'>
                                <p className='text-nowrap font-semibold text-xl text-start text-[#1d4f68]'>OUR <span className='text-[#e83433]'>SERVICES</span></p>
                                <div className='flex justify-center gap-8 text-sm md:text-base'>
                                    <ul className=' gap-1 flex flex-col mt-2 font-sm text-yellow-500 list-disc'>
                                        <li className='hover:text-[#e83433] cursor-pointer'><NavLink href="/services/amc">AMC</NavLink></li>
                                        <li className='hover:text-[#e83433] cursor-pointer'><NavLink href="/services/acb_vcb">ACB/VCB Servicing</NavLink></li>
                                        <li className='hover:text-[#e83433] cursor-pointer'><NavLink href="/services/pfc">Power Factor Correction</NavLink></li>
                                        <li className='hover:text-[#e83433] cursor-pointer'>Harmonic Analysis & Mitigation</li>
                                        <li className='hover:text-[#e83433] cursor-pointer'>Calibration Services</li>
                                        <li className='hover:text-[#e83433] cursor-pointer'>Relay and Meter Testing</li>
                                    </ul>
                                    <ul className=' gap-1 flex flex-col mt-2 font-sm text-yellow-500 list-disc'>
                                        <li className='hover:text-[#e83433] cursor-pointer'>Energy Monitoring Systems</li>
                                        <li className='hover:text-[#e83433] cursor-pointer'>VFD Programming and Communication</li>
                                        <li className='hover:text-[#e83433] cursor-pointer'>Retrofitting Services</li>
                                        <li className='hover:text-[#e83433] cursor-pointer'>Spares Replacement</li>
                                        <li className='hover:text-[#e83433] cursor-pointer'>24x7 Support</li>
                                    </ul>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div id="end" className='mt-5 md:mt-0 col-span-2'>
                        <div id='products' className='w-full flex justify-cente'>
                            <div className='pl-2'>
                                <p className='text-nowrap text-center font-semibold text-xl md:text-start text-[#1d4f68]'>OUR <span className='text-[#e83433]'>PRODUCTS</span></p>
                                <div className='flex justify-center gap-8 text-sm md:text-base'>
                                    <ul className=' gap-1 flex flex-col mt-2 font-sm text-yellow-500 list-disc'>
                                        <li className='hover:text-[#e83433] cursor-pointer'><NavLink href="/services/amc">PCC</NavLink></li>
                                        <li className='hover:text-[#e83433] cursor-pointer'><NavLink href="/services/acb_vcb">MCC</NavLink></li>
                                        <li className='hover:text-[#e83433] cursor-pointer'><NavLink href="/services/pfc">PDB Panel</NavLink></li>
                                        <li className='hover:text-[#e83433] cursor-pointer'>APFC Panel</li>
                                        <li className='hover:text-[#e83433] cursor-pointer'>Distribution Board</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                <div className='text-sm md:hidden'>
                    <p className='mt-3 flex justify-start gap-2 text-[#1d4f68] items-start'>
                        <span className='text-xl text-[#e83433]'><MdLocationPin /> </span> Road No. 4, Ganesh Nagar, Quthbullapur, Hyderabad, Telangana 500055, India.
                    </p>
                    <p className='mt-2 flex justify-start gap-2 text-[#1d4f68] items-center'>
                        <span className='text-xl text-[#e83433]'><MdCall /> </span> +91 964538268 | +91 9643586843
                    </p>
                    <p className='mt-1 flex justify-start gap-2 text-[#1d4f68] items-center'>
                        <span className='text-xl text-[#e83433]'><MdEmail /> </span>aspireengineers@gmail.com
                    </p>
                </div>

                <div className='text-center mt-5 text-[#1d4f68]'>
                    &copy; Copyright 2025 Aspire Engineers Pvt. Ltd. | All Rights Reserved | Powered by <span className='text-[#e83433]'><Link href="https://www.linkedin.com/in/aks9618">Ankush Kumar Singh</Link></span> | <span className='text-blue-500'><Link href="#">Privacy Policy</Link></span>.
                </div>
                
            </div>
        </div>
    )
}

export default Footer