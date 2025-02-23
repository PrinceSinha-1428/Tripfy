"use client";
import { navlinks } from '@/constant/contsant'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2'
import { TbAirBalloon } from 'react-icons/tb'

interface NavProps {
    openNav:()=> void
}

const Nav = ({openNav}:NavProps) => {
    const [navBg, setNavBg] = useState(false);
    useEffect(()=>{
        const handler = ()=>{
            if(window.scrollY >= 90) setNavBg(true);
            if(window.scrollY < 90)  setNavBg(false);
        };
        window.addEventListener('scroll',handler);
        return ()=>  window.removeEventListener('scroll',handler);
    },[])
  return (
    <div className={`transition-all duration-200 h-[12vh] z-[1000] fixed w-full ${navBg ? "bg-black/90 shadow-md" : "fixed"} `}>
        <div className='flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto '>
            {/* logo */}
            <div className='flex items-center space-x-2 hover:scale-150 transition-all duration-300 cursor-pointer' >
                <div className='w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-col  '>
                    <TbAirBalloon className='w-6 h-6 text-white  ' />
                </div>
                <h1 className='text-xl md:text-2xl text-white uppercase font-bold '>Tripfy</h1>
            </div>
            {/* navlink */}
            <div className=' hidden lg:flex items-center space-x-10 bg-white/10 py-3 px-6 rounded-full  '>
            {navlinks.map((link) => {
                return (
                <Link  href={link.url} key={link.id}>
                    <p className='relative text-white text-base font-medium w-fit block after:block after:content-[""] after:absolute after:h-[3px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition duration-300 after:origin-right hover:scale-110 '>{link.label}</p>
                </Link>
            )})}
            </div>
            {/* button  */}
            <div className='flex items-center space-x-4 '>
                <button className='md:px-12 md:py-2.5 px-8 py-2 text-black text-lg font-semibold  bg-white hover:bg-primary hover:text-white hover:scale-105 transition-all  duration-200 rounded-xl '>Book Now</button>
                {/* burger menu  */}
                <HiBars3BottomRight onClick={openNav} className='h-8 w-8 cursor-pointer text-white lg:hidden  ' />
            </div>
        </div>
    </div>
  )
}

export default Nav
