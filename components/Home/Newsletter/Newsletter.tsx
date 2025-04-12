import React from 'react'
import { BsEnvelopePaper } from 'react-icons/bs'

const Newsletter = () => {
  return (
    <div className='bg-black pt-16 pb-16 flex items-center justify-center w-full flex-col'>
      <BsEnvelopePaper className='w-16 h-16 mt-20 text-white'/>
      <h1 className='text-lg sm:text-xl md:text-2xl text-white font-semibold mt-10 tracking-widest'>Your Travel Journey Starts Here</h1>
      <p className='mt-3 text-white text-xs sm:text-sm'>Sign Up and we&apos;ll send the best deals for you</p>
      <div className='w-full'>
            <input type="text" placeholder='Email' className='px-6 py-3.5 bg-white mt-8 w-[95%] sm:w-[80%] md:w-[60%] lg:w-[40%] block mx-auto rounded-full outline-none ' />
            <button className='px-6 py-3.5 text-white font-bold bg-primary hover:bg-primary/70 mt-3 w-[95%] sm:w-[80%] md:w-[60%] lg:w-[40%] block mx-auto rounded-full outline-none cursor-pointer '>Subscribe</button>
      </div>
    </div>
  )
}

export default Newsletter
