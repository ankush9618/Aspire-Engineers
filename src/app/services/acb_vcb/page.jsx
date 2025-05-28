import React from 'react'
import Faq from './Faq'

function page() {
  return (
    <div>
      <div className='font-serif md:flex justify-center w-9/10 md:w-7/10 mx-auto mt-5 md:mt-10 gap-4 text-zinc-600'>
        <div id='acb' className='h-auto w-full scroll-mt-26 md:scroll-mt-30 scroll-smooth'>
          <div className='acb_vcb'>
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
                  <li className='hover:text-[#e83433] cursor-pointer'>AMC</li>
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
          <Faq/>
        </div>
      </div>
    </div>
  )
}

export default page