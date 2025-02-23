import Sectionheading from '@/components/Helper/Sectionheading'
import React from 'react'
import Destinationslider from './Destinationslider'

const Destination = () => {
  return (
    <div className='pb-20 pt-20'>
      <Sectionheading heading='Explore Popular Destinations' />
      <div className='mt-14 w-[80%] mx-auto '>
        <Destinationslider/>
      </div>
    </div>
  )
}

export default Destination
