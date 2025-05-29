import Link from 'next/link'
import React from 'react'

function page() {
    return (
        <div>
            <div className='font-serif md:flex justify-center w-9/10 md:w-7/10 mx-auto mt-5 md:mt-10 gap-4 text-zinc-600'>
                <div id='' className='h-auto w-full scroll-mt-36 md:scroll-mt-50 scroll-smooth'>
                    <div id='pfc' className='h-auto w-full scroll-mt-26 md:scroll-mt-30'>
                        <div className='text-xl md:text-3xl text-center text-[#e83433] font-bold mb-3 md:mb-5'>POWER FACTOR CORRECTION (PFC)</div>
                        <div className=' hidden md:flex justify-center items-center gap-4'>
                            <img src="/assets/images/pfc.jpg" alt="" className='w-30 md:w-80 border-1 border-zinc-300 shadow-md rounded-md' />
                            <p className=''>
                                Improve your facility's energy efficiency and reduce electricity costs with optimal power factor solutions. By minimizing reactive power and maintaining a high power factor, you can lower demand charges, avoid utility penalties, and enhance overall electrical system performance. These solutions not only ensure compliance with utility standards but also contribute to a more sustainable and cost-effective operation, making your power usage smarter and more efficient.
                            </p>
                        </div>
                        <div className='flex md:hidden justify-center items-center gap-2'>
                            <img src="/assets/images/pfc.jpg" alt="" className='w-30 h-35 rounded-md border-1 border-zinc-300 shadow-md shadow-zinc-300' />
                            <p className='text-xs'>Enhance energy efficiency and cut electricity costs with optimal power factor solutions. Reduce reactive power, avoid utility penalties, and improve system performance for a smarter, more cost-effective, and compliant power usage strategy.
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
                                    <li className='hover:text-[#e83433] cursor-pointer'><Link href="/services/amc">AMC</Link></li>
                                    <li className='hover:text-[#e83433] cursor-pointer'><Link href="/services/acb_vcb">ACB/VCB Servicing</Link></li>
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
                </div>
            </div>
        </div>
    )
}

export default page