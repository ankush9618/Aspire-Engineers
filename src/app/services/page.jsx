
import React from 'react'
import Amc from './amc/page'
import Link from 'next/link'


function page() {
  return (
    <>
      <div>
        <div className='font-serif md:flex justify-center w-9/10 md:w-7/10 mx-auto mt-5 md:mt-10 gap-4 text-zinc-600'>
          <div className=''>
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
                    <li className='hover:text-[#e83433] cursor-pointer'><Link href="#acb_vcb">ACB/VCB Servicing</Link></li>
                    <li className='hover:text-[#e83433] cursor-pointer'><Link href="#pfc">Power Factor Correction</Link></li>
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
            <hr className='my-5 text-zinc-300' />
            <div id='acb_vcb' className='h-auto w-full scroll-mt-26 md:scroll-mt-30 scroll-smooth'>
              <div className='text-xl md:text-3xl text-center text-[#e83433] font-bold mb-3 md:mb-5'>ACB/VCB SERVICES</div>
              <div className=' hidden md:flex justify-center items-center gap-4'>
                <img src="/assets/images/acb.png" alt="" className='w-30 md:w-60 h-70 border-1 border-zinc-200 shadow-md rounded-md' />
                <p className=''>We offer comprehensive lifecycle support for Air and Vacuum Circuit Breakers, ensuring your electrical protection systems operate safely and reliably at every stage. Our services include installation, testing, commissioning, routine maintenance, diagnostics, repairs, retrofitting, and upgrades. With a focus on minimizing downtime and maximizing performance, our expert team ensures compliance with industry standards and enhances system longevity. Whether it’s preventive care or emergency support, we provide tailored solutions that meet your operational needs and budget. Count on us to deliver efficient, end-to-end circuit breaker services that improve reliability, safety, and return on investment across the lifespan of your equipment.
                </p>
                <img src="/assets/images/vcb.jpeg" alt="" className='w-30 md:w-60  h-70 border-1 border-zinc-200 shadow-md rounded-md' />
              </div>
              <div className='flex md:hidden justify-center items-center gap-2'>
                <img src="/assets/images/acb.png" alt="" className='w-30 rounded-md border-1 border-zinc-300 shadow-md shadow-zinc-300' />
                <p className='text-xs'>We provide complete lifecycle support for Air and Vacuum Circuit Breakers, from installation and commissioning to maintenance, retrofitting, and upgrades to ensure consistent and efficient operation.
                </p>
              </div>
              <div className='flex md:hidden justify-center items-center gap-2'>
                <p className='text-xs'>Our expert team ensures optimal performance, safety, and reliability of your protection systems, reducing downtime and extending equipment life. Trust us for solutions that meet standards and boost resilience.
                </p>
                <img src="/assets/images/vcb.jpeg" alt="" className='w-30 h-30 rounded-md border-1 border-zinc-300 shadow-md shadow-zinc-300' />
              </div>
              <div className='md:flex justify-center gap-8'>
                <div>
                  <p className='text:md md:text-xl text-center text-zinc-600 font-semibold'>SERVICES</p>
                  <p className='text-yellow-500 font-bold underline'>ACB</p>
                  <div className='text-xs md:text-base'>
                    <p><span className='font-semibold'>Installation</span> - Professional installation of Air Circuit Breakers with proper alignment, torque settings, and compliance to safety protocols.
                    </p>
                    <p className='my-1'><span className='font-semibold'>Maintenance</span> - Scheduled inspections covering insulation checks, contact resistance measurement, mechanical operation, and trip unit functionality.
                    </p>
                    <p className='my-1'><span className='font-semibold'>Repair Replacement</span> - Fault diagnosis and efficient replacement of worn-out contacts, coils, and auxiliary mechanisms with genuine spare parts.</p>
                  </div>
                  <p className='text-yellow-500 font-bold underline'>ACB</p>
                  <div className='text-xs md:text-base'>
                    <p><span className='font-semibold'>Installation</span> - Integration of Vacuum Circuit Breakers into your switchgear systems, including functional testing and system validation.
                    </p>
                    <p className='my-1'><span className='font-semibold'>Maintenance</span> - Includes periodic vacuum integrity testing, actuator and spring mechanism servicing, and visual inspections.
                    </p>
                    <p className='my-1'><span className='font-semibold'>Repair Replacement</span> - Restoration of failed vacuum interrupters or damaged mechanisms with minimal downtime.</p>
                    <p className='my-1'><span className='font-semibold'>Retrofit Upgrade</span> - Upgrading legacy breakers with modern digital protection systems and compact VCB units.
                    </p>

                  </div>
                </div>
                <div className='hidden md:block min-w-60'>
                  <ul className='list-disc gap-1 flex flex-col mt-2 font-sm text-yellow-500'>
                    <p className='text-nowrap underline font-semibold text-xl text-start text-zinc-600'>Other Services</p>
                    <li className='hover:text-[#e83433] cursor-pointer'><Link href="#amc">AMC</Link></li>
                    <li className='hover:text-[#e83433] cursor-pointer'><Link href="#pfc">Power Factor Correction</Link></li>
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
            <hr className='my-5 text-zinc-300' />
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
                    <li className='hover:text-[#e83433] cursor-pointer'><Link href="#amc">AMC</Link></li>
                    <li className='hover:text-[#e83433] cursor-pointer'><Link href="#acb_vcb">ACB/VCB Servicing</Link></li>
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
    </>
  )
}

export default page