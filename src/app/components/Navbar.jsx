"use client"

import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { MdExpandMore } from "react-icons/md";
import { MdOutlineExpandLess } from "react-icons/md";


import React, { useState } from 'react'
import Link from "next/link";
import NavLink from "./NavLink";

function Navbar() {

    const [menu, setMenu] = useState(false);
    const [prodExp, setProdExp] = useState(false);
    const [serExp, setSerExp] = useState(false);
    const handleMenu = () => {
        setMenu(!menu)
    }
    return (
        <>
            <nav className='navbar hidden md:block h-24 bg-white sticky w-full z-10 top-0 border-b-2 border-gray-300 shadow-sm'>
                <div className='flex justify-center items-center h-full'>
                    <div className='flex justify-between md:px-20 px-5 container items-center'>
                        <NavLink href="/">
                        <div className="text-2xl font-bold text-zinc-900 flex justify-center items-center gap-2 cursor-pointer">
                            <img src="/assets/images/logoicon1.png" className="size-18 mix-blend-multiply outline-0 opacity-90" alt="" />
                            <div>
                            <p className="text-[#e83433]">ASPIRE <span className="text-[#1d4f68]">ENGINEERS</span></p>
                            <p className="text-sm text-zinc-600">Pvt. Ltd.</p>
                            <p className="text-sm font-semibold text-[#1d4f68]">(Electrical Testing & Servicing) A-Grade 33KV lisence.</p>
                            </div>
                        </div>
                        </NavLink>
                        {/* <div>
                            <img src="/assets/images/landt2.jpg" className="w-25" alt="" />
                        </div> */}
                        <div>
                            <ul className="flex font-bold gap-8 text-zinc-600 items-center justify-center">
                            <NavLink className="hover:text-yellow-500" href="/"><li className="hover:text-yellow-500 cursor-pointer">HOME</li></NavLink>
                            <NavLink href="/about"><li className="hover:text-yellow-500 cursor-pointer">ABOUT</li></NavLink>
                                <li className="group flex flex-col relative">
                                    <div className="hover:text-yellow-500 cursor-pointer">
                                    <NavLink href="/products">PRODUCTS</NavLink>
                                    </div>
                                    <div className="hidden group-hover:block absolute top-5 pt-9 bg-white w-40 cursor-pointer">
                                        <ul>
                                            <NavLink href="/products/pcc"><li className=" border-y-1 border-zinc-300 p-2 hover:text-yellow-500">PCC</li></NavLink>
                                            <NavLink href="/products/mcc"><li className=" border-b-1 border-zinc-300 p-2 hover:text-yellow-500">MCC</li></NavLink>
                                            <NavLink href="/products/pdb-panel"><li className=" border-b-1 border-zinc-300 p-2 hover:text-yellow-500">PDB Panel</li></NavLink>
                                            <NavLink href="/products/apfc-panel"><li className=" border-b-1 border-zinc-300 p-2 hover:text-yellow-500">APFC Panel</li></NavLink>
                                            <NavLink href="/products/distribution-board"><li className=" border-b-1 border-zinc-300 p-2 hover:text-yellow-500">Distribution Board</li></NavLink>
                                        </ul>
                                    </div>

                                </li>
                                <li className="group flex flex-col relative">
                                    <div className="hover:text-yellow-500 cursor-pointer">
                                        SERVICES
                                    </div>
                                    <div className="hidden group-hover:block absolute top-5 pt-9 bg-white w-40 cursor-pointer">
                                        <ul><li className=" border-y-1 border-zinc-300 p-2 hover:text-yellow-500">ACB/VCB Service</li>
                                            <li className=" border-b-1 border-zinc-300 p-2 hover:text-yellow-500">RetroFitting</li>
                                            <li className=" border-b-1 border-zinc-300 p-2 hover:text-yellow-500">24*7 Service</li>
                                            
                                        </ul>
                                    </div>

                                </li>
                                <li className="hover:text-yellow-500 cursor-pointer">CONTACT</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            {/* mobile view */}

            <nav className='h-20 sticky bg-white w-full flex justify-between top-0 left-0 items-center pr-5 pl-3 z-200 md:hidden border-b-2 border-gray-300 shadow-sm'>
            <Link href="/"><div className="text-xl font-bold text-zinc-900 flex justify-center items-center gap-1 cursor-pointer" onClick={()=>setMenu(false)}>
                            <img src="/assets/images/logoicon1.png" className="size-14 mix-blend-multiply outline-0 opacity-90" alt="" />
                            <div>
                            <p className="text-[#e83433]">ASPIRE <span className="text-[#1d4f68]">ENGINEERS</span></p>
                            <p className="text-sm text-zinc-600">Pvt. Ltd.</p>
                            <p className="text-[9px] font-semibold text-[#1d4f68]">(Electrical Testing & Servicing) A-Grade 33KV lisence.</p>
                            </div>
                        </div></Link>
                <div className="text-3xl font-bold" onClick={handleMenu}>
                    {menu ? <IoClose className="text-4xl font-bold" /> : <TiThMenu />}
                </div>
            </nav>

            {
                menu &&
                <nav className=" min-h-screen h-auto w-full inset-0 sticky top-16 bg-white md:hidden z-100">
                    <div className="mx-auto text-xl  p-5 font-semibold">
                        <ul className="flex flex-col gap-2">
                            <li className=" border-b-1 border-zinc-400 p-2" onClick={()=>setMenu(!menu)}><NavLink href="/">HOME</NavLink></li>
                            <li className="border-b-1 border-zinc-400 p-2" onClick={()=>setMenu(!menu)}><NavLink href="/about">ABOUT</NavLink></li>
                            <li className=" border-b-1 border-zinc-400 px-2 py-1 flex items-center justify-between" onClick={() => setProdExp(!prodExp)}>PRODUCTS{prodExp ? <MdOutlineExpandLess className="text-4xl" /> : <MdExpandMore className="text-4xl" />}</li>
                            {
                                prodExp &&
                                <li className="px-4">
                                    <ul className="flex flex-col gap-2 text-zinc-600">
                                        <li className=" border-b-1 border-zinc-300 p-2" onClick={()=>setMenu(!menu)}><NavLink href="/products/pcc">PCC</NavLink></li>
                                        <li className=" border-b-1 border-zinc-300 p-2" onClick={()=>setMenu(!menu)}><NavLink href="/products/mcc">MCC</NavLink></li>
                                        <li className=" border-b-1 border-zinc-300 p-2" onClick={()=>setMenu(!menu)}><NavLink href="/products/pdb-panel">PDB Panel</NavLink></li>
                                        <li className=" border-b-1 border-zinc-300 p-2" onClick={()=>setMenu(!menu)}><NavLink href="/products/apfc-panel">APFC Panel</NavLink></li>
                                        <li className=" border-b-1 border-zinc-300 p-2" onClick={()=>setMenu(!menu)}><NavLink href="/products/distribution-board">Distribution Board</NavLink></li>
                                    </ul>
                                </li>
                            }
                            <li className=" border-b-1 border-zinc-400 px-2 py-1 flex items-center justify-between" onClick={() => setSerExp(!serExp)}>SERVICES{serExp ? <MdOutlineExpandLess className="text-4xl" /> : <MdExpandMore className="text-4xl" />}</li>
                            {
                                serExp &&
                                <li className="px-4">
                                    <ul className="flex flex-col gap-2 text-zinc-600">
                                        <li className=" border-b-1 border-zinc-300 p-2" onClick={()=>setMenu(!menu)}>ACB/VCB Service</li>
                                        <li className=" border-b-1 border-zinc-300 p-2" onClick={()=>setMenu(!menu)}>RetroFitting</li>
                                        <li className=" border-b-1 border-zinc-300 p-2" onClick={()=>setMenu(!menu)}>24*7 Service</li>
                                    </ul>
                                </li>
                            }
                            <li className=" border-b-1 border-zinc-400 p-2 mb-5" onClick={()=>setMenu(!menu)}>CONTACT</li>
                        </ul>
                        
                        <img src="/assets/images/landt2.jpg" className="w-30 mx-auto" alt="" />
                        <p className="text-center text-gray-500 text-xs">Authorized service center</p>
                    </div>
                </nav>
            }



        </>
    )
}

export default Navbar