import React from 'react'

interface SectionProps{
    heading:string;
   
}

const Sectionheading = ({heading}:SectionProps) => {
  return (
    <div className='w-[80%] mx-auto '>
      <h1 className='text-xl sm:text-3xl text-zinc-950 font-bold '>{heading}</h1>
      <p className='mt-2 text-zinc-700 sm:text-base text-sm font-medium'>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
    </div>
  )
}

export default Sectionheading
