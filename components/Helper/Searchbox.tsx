"use client";
import React, { useState } from 'react'
import { FaCalendarWeek, FaMap } from 'react-icons/fa'
import { FaUserGroup } from 'react-icons/fa6'

const Searchbox = () => {
    const [destination, setDestination] = useState<string>("");

  return (
    <div className='bg-white rounded-2xl p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-8 mt-4 sm:mt-12 w-[95%] sm:w-[80%]'>
    {/* 1st search input  */}
    <div className='flex items-center space-x-6 ml-12' >
        <FaMap className='w-6  h-6 text-blue-600 '/>
        <div >
            <p className='text-lg font-bold mb-[0.2rem]'>Location</p>
            <input type="text" placeholder="Search destination" className='outline-none text-sm border-none placeholder:text-gray-800' value={destination} onChange={(e)=>setDestination(e.target.value)} />
        </div>
    </div>
    {/* 2nd serach input  */}
    <div className='flex items-center space-x-6  ml-12'>
        <FaCalendarWeek className='w-6  h-6 text-blue-600 '/>
        <div >
            <p className='text-lg font-bold mb-[0.2rem]'>Start Date</p>
            <input type="date" placeholder="Search Destination" className='outline-none text-sm border-none placeholder:text-gray-800' />
        </div>
    </div>
    {/* 3rd serach input  */}
    <div className='flex items-center space-x-6  ml-12'>
        <FaCalendarWeek className='w-6  h-6 text-blue-600 '/>
        <div >
            <p className='text-lg font-bold mb-[0.2rem]'>End Date</p>
            <input type="date" placeholder="Search Destination" className='outline-none text-sm border-none placeholder:text-gray-800' />
        </div>
    </div>
    {/* 4th serach input  */}
    <div className='flex items-center space-x-6  ml-12'>
        <FaUserGroup className='w-6  h-6 text-blue-600 '/>
        <div >
            <p className='text-lg font-bold mb-[0.2rem]'>Guest</p>
            <p className='text-base font-normal'>1 Guest 1 Room</p>
        </div>
    </div>
    </div>
  )
}

export default Searchbox
