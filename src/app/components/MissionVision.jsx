import React from 'react'

function MissionVision() {
    return (
        <div className='w-full md:my-10 my-5'>
            <div className='mx-auto w-4/5 md:flex justify-center flex-col md:flex-row text-center md:gap-12 gap-4 hidden font-serif'>
                <div className='md:w-80 w-60 mx-auto bg-gray-200 group h-75 md:h-100 flex justify-center items-center relative rounded-md overflow-hidden shadow-md border-1 border-zinc-300 shadow-zinc-500'>
                    <img src="/assets/images/mission.jpg" alt="" className='opacity-80 group-hover:opacity-0' />
                    <button className='absolute bg-red-500 px-3 py-2 text-white font-bold rounded-md border-2 group-hover:hidden border-white'>OUR VISION</button>
                    <div className=' font-bold absolute text-white text-2xl group-hover:block hidden'>
                        <p className='text-[#e83433]'>OUR VISION</p>
                        <p className='text-sm w-9/10 mx-auto text-zinc-500 my-2 font-normal text-start'>To be recognized as a national leader in engineering services — setting benchmarks in technical excellence, client satisfaction, and safety standards. We envision Aspire Engineers Pvt. Ltd. as the go-to partner for complex infrastructure and electrical projects, driving progress across India through integrity, innovation, and a relentless pursuit of excellence.</p>
                    </div>

                </div>
                <div className='md:w-80 w-60 mx-auto bg-gray-200 group h-75 md:h-100 flex justify-center items-center relative rounded-md overflow-hidden shadow-md border-1 border-zinc-300 shadow-zinc-500'>
                    <img src="/assets/images/vission.jpg" alt="" className='opacity-80 group-hover:opacity-0' />
                    <button className='absolute bg-red-500 px-3 py-2 text-white font-bold rounded-md border-2 group-hover:hidden border-white'>OUR MISSION</button>
                    <div className=' font-bold absolute text-white text-2xl group-hover:block hidden'>
                        <p className='text-[#e83433]'>OUR MISSION</p>
                        <p className='text-sm w-9/10 mx-auto text-zinc-500 my-2 font-normal text-start'>To provide comprehensive, cutting-edge engineering solutions that exceed client expectations in quality, safety, and efficiency. We aim to empower industries and infrastructure through our specialized expertise in electrical testing, servicing, and project execution. Our mission is to build long-term partnerships by delivering reliable, innovative, and value-driven services with a commitment to sustainable development and community impact.</p>
                    </div>

                </div>
                <div className='md:w-80 w-60 mx-auto bg-gray-200 group h-75 md:h-100 flex justify-center items-center relative rounded-md overflow-hidden shadow-md border-1 border-zinc-300 shadow-zinc-500'>
                    <img src="/assets/images/corevalue.jpg" alt="" className='opacity-80 group-hover:opacity-0' />
                    <button className='absolute bg-red-500 px-3 py-2 text-white font-bold rounded-md border-2 group-hover:hidden border-white'>CORE VALUES</button>
                    <div className=' font-bold absolute text-white text-2xl group-hover:block hidden'>
                        <p className='text-[#e83433]'>CORE VALUES</p>
                        <div className='text-sm w-9/10 mx-auto text-zinc-500 my-2'>
                            <ul className='flex flex-col gap-2 font-normal text-start'>
                                <li>
                                    <span className='font-bold'>Integrity</span> – We uphold honesty and transparency in every project.
                                </li>
                                <li>
                                    <span className='font-bold'>Quality</span> – We are committed to excellence in all our services.
                                </li>
                                <li>
                                    <span className='font-bold'>Quality</span> – We prioritize the wellbeing of our teams, clients, and communities.
                                </li>
                                <li>
                                    <span className='font-bold'>Innovation</span> – We embrace new technologies to deliver smarter solutions.
                                </li>
                                <li>
                                    <span className='font-bold'>Customer Focus</span> – We build lasting partnerships through responsiveness and trust.
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>


{/* //Mobile view */}
            <div className='md:hidden font-serif w-full text-zinc-600'>
                <div className='flex w-9/10 mx-auto gap-2'>
                    <img src="/assets/images/mission.jpg" className='w-30 rounded-md border-1 border-zinc-300' alt="" />
                    <div className='text-center w-full'>
                    <p className='font-semibold'>OUR <span className='text-[#e83433]'>VISION</span></p>
                    <p className='text-[9px] text-start'>To be recognized as a national leader in engineering services — setting benchmarks in technical excellence, client satisfaction, and safety standards. We envision Aspire Engineers Pvt. Ltd. as the go-to partner for complex infrastructure and electrical projects, driving progress across India through integrity, innovation, and a relentless pursuit of excellence.</p>
                    </div>
                </div>
                <div className='flex w-9/10 mx-auto gap-2 my-8'>
                    <div className='text-center w-full'>
                    <p className='font-semibold'>OUR <span className='text-[#e83433]'>MISSION</span></p>
                    <p className='text-[9px] text-start'>To provide comprehensive, cutting-edge engineering solutions that exceed client expectations in quality, safety, and efficiency. We aim to empower industries and infrastructure through our specialized expertise in electrical testing, servicing, and project execution. Our mission is to build long-term partnerships by delivering reliable, innovative, and value-driven services with a commitment to sustainable development and community impact.</p>
                    </div>
                    <img src="/assets/images/vission.jpg" className='w-30 rounded-md border-1 border-zinc-300' alt="" />
                </div>
                <div className='flex w-9/10 mx-auto gap-2'>
                    <img src="/assets/images/mission.jpg" className='w-30 rounded-md border-1 border-zinc-300' alt="" />
                    <div className='text-center w-full'>
                    <p className='font-semibold'>CORE <span className='text-[#e83433]'>VALUES</span></p>
                    <div className='text-[8px] text-start'>
                    <ul className='flex flex-col gap-1 text-start'>
                                <li>
                                    <span className='font-bold'>Integrity</span> – We uphold honesty and transparency in every project.
                                </li>
                                <li>
                                    <span className='font-bold'>Quality</span> – We are committed to excellence in all our services.
                                </li>
                                <li>
                                    <span className='font-bold'>Quality</span> – We prioritize the wellbeing of our teams, clients, and communities.
                                </li>
                                <li>
                                    <span className='font-bold'>Innovation</span> – We embrace new technologies to deliver smarter solutions.
                                </li>
                                <li>
                                    <span className='font-bold'>Customer Focus</span> – We build lasting partnerships through responsiveness and trust.
                                </li>
                            </ul>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MissionVision