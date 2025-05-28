import React from 'react'
import Faq from './Faq'

function Amc() {

    return (
        <div>
            <div className='font-serif md:flex justify-center w-9/10 md:w-7/10 mx-auto mt-5 md:mt-10 gap-4 text-zinc-600'>
                <div id='' className='h-auto w-full scroll-mt-36 md:scroll-mt-50 scroll-smooth'>
                    <div className='amc'>
                        <div className='text-xl md:text-3xl text-center text-[#e83433] font-bold mb-3 md:mb-5'>ANNUAL MAINTAINANCE CONTRACT (AMC)</div>
                        <div className=' hidden md:flex justify-center items-center gap-4'>
                            <img src="/assets/carousal/carousal1.jpg" alt="" className='w-30 md:w-80 border-1 border-zinc-300 shadow-md rounded-md' />
                            <p className=''>We offer predictable, scheduled maintenance support designed to proactively identify and address potential issues before they lead to system failures. This minimizes unexpected downtime, ensures optimal equipment performance, and extends the overall lifespan of your systems. Our expert team follows a structured maintenance plan tailored to your needs, promoting operational efficiency, safety, and long-term cost savings.
                            </p>
                        </div>
                        <div className='flex md:hidden justify-center items-center gap-2'>
                            <img src="/assets/images/mission.jpg" alt="" className='w-30 rounded-md border-1 border-zinc-300 shadow-md shadow-zinc-300' />
                            <p className='text-xs'>We provide scheduled maintenance to prevent issues, reduce downtime, boost performance, and extend system life—ensuring safety, efficiency, and long-term savings with a plan tailored to you.
                            </p>
                        </div>
                        <div className='md:flex justify-center gap-8'>
                            <div>
                                <p className='text:md md:text-xl text-center text-zinc-600 font-semibold'>SERVICES</p>
                                <div className='text-xs md:text-base'>
                                    <p><span className='font-semibold'>Inspection</span> - Routine health checks of panels, breakers, relays, and cables ensure safe and efficient operation. We inspect, test, and maintain each component to detect faults early, reduce downtime, and extend system life, enhancing overall reliability and performance of your electrical setup.
                                    </p>
                                    <p className='my-1'><span className='font-semibold'>Preventive Maintenance</span> - Regular cleaning, lubrication, and system tuning prevent unexpected failures by removing contaminants, reducing wear, and ensuring optimal performance. These practices enhance reliability, extend equipment life, reduce downtime, and maintain safety across electrical and mechanical systems.
                                    </p>
                                    <p className='my-1'><span className='font-semibold'>Reporting</span> - We provide comprehensive maintenance reports detailing performance metrics, identified risks, and actionable improvement suggestions. These reports support informed decision-making, enhance system reliability, and help plan future upgrades, ensuring continued safety and operational efficiency.</p>
                                    <p className='my-1'><span className='font-semibold'>Emergency Support</span> - Contract holders receive priority on-call support with rapid fault diagnosis and rectification. Our expert team ensures minimal downtime by responding promptly to emergencies, restoring system functionality efficiently, and providing dependable service whenever critical issues arise.
                                    </p>
                                </div>
                            </div>
                            <div className='hidden md:block min-w-60'>
                                <ul className='list-disc gap-1 flex flex-col mt-2 font-sm text-yellow-500'>
                                    <p className='text-nowrap underline font-semibold text-xl text-start text-zinc-600'>Other Services</p>
                                    <li className='hover:text-[#e83433] cursor-pointer'>ACB/VCB Servicing</li>
                                    <li className='hover:text-[#e83433] cursor-pointer'>Power Factor Correction</li>
                                    <li className='hover:text-[#e83433] cursor-pointer'>Harmonic Analysis & Mitigation</li>
                                    <li className='hover:text-[#e83433] cursor-pointer'>Calibration Services</li>
                                    <li className='hover:text-[#e83433] cursor-pointer'>Relay and Meter Testing</li>
                                    <li className='hover:text-[#e83433] cursor-pointer'>Energy Monitoring Systems</li>
                                    <li className='hover:text-[#e83433] cursor-pointer'>VFD Programming and Communication</li>
                                    <li className='hover:text-[#e83433] cursor-pointer'>Retrofitting Services</li>
                                    <li className='hover:text-[#e83433] cursor-pointer'>Spares Replacement</li>
                                    <li className='hover:text-[#e83433] cursor-pointer'>24x7 Support</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <Faq />
                </div>
            </div>

        </div>
    )
}

export default Amc